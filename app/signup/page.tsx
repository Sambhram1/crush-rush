'use client';
import { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  age: z.coerce.number().min(16, 'You must be at least 16').max(100),
  gender: z.enum(['Male', 'Female', 'Other']),
  branch: z.string().min(2, 'Branch must be specified'),
});

type FormData = z.infer<typeof schema>;

export default function SignUp() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [fileToUpload, setFileToUpload] = useState<File | null>(null);
  const [uploadStatus, setUploadStatus] = useState<string | null>(null);

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (file) {
      setFileToUpload(file);
      const reader = new FileReader();
      reader.onload = () => setPreviewImage(reader.result as string);
      reader.readAsDataURL(file);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.webp']
    },
    maxFiles: 1,
    maxSize: 5 * 1024 * 1024, // 5MB
  });

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    setUploadStatus('Starting upload...');
    let profilePicUrl = null;

    try {
      // Upload image if provided
      if (fileToUpload) {
        setUploadStatus('Uploading image...');
        const fileExt = fileToUpload.name.split('.').pop();
        const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;
        const filePath = `public/${fileName}`;

        const { error: uploadError } = await supabase.storage
          .from('profile') // Changed bucket name to 'profile'
          .upload(filePath, fileToUpload, {
            cacheControl: '3600',
            upsert: false
          });

        if (uploadError) throw uploadError;

        setUploadStatus('Getting image URL...');
        const { data: urlData } = supabase.storage
          .from('profile') // Changed bucket name to 'profile'
          .getPublicUrl(filePath);

        profilePicUrl = urlData.publicUrl;
      }

      setUploadStatus('Creating account...');
      // Insert user data
      const { error: insertError } = await supabase.from('users').insert({
        name: data.name,
        age: data.age,
        gender: data.gender,
        branch: data.branch,
        profile_pic: profilePicUrl,
        created_at: new Date().toISOString(),
      });

      if (insertError) throw insertError;

      setUploadStatus('Success! Redirecting...');
      router.push('/');
    } catch (error) {
      console.error('Signup error:', error);
      setUploadStatus('Error occurred. Please try again.');
      alert('Signup failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-pink-50 flex items-center justify-center p-4">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-pink-600 mb-8">Join CrushRush</h2>
        
        <div className="space-y-5">
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              {...register('name')}
              className="w-full px-4 py-2 border rounded-lg focus:ring-pink-500 focus:border-pink-500"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Age</label>
            <input
              type="number"
              {...register('age')}
              className="w-full px-4 py-2 border rounded-lg focus:ring-pink-500 focus:border-pink-500"
            />
            {errors.age && <p className="text-red-500 text-sm mt-1">{errors.age.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Gender</label>
            <select
              {...register('gender')}
              className="w-full px-4 py-2 border rounded-lg focus:ring-pink-500 focus:border-pink-500"
            >
              <option value="">Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            {errors.gender && <p className="text-red-500 text-sm mt-1">Please select a gender</p>}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Branch</label>
            <input
              {...register('branch')}
              className="w-full px-4 py-2 border rounded-lg focus:ring-pink-500 focus:border-pink-500"
            />
            {errors.branch && <p className="text-red-500 text-sm mt-1">{errors.branch.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Profile Photo</label>
            <div
              {...getRootProps()}
              className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors ${
                isDragActive ? 'border-pink-500 bg-pink-50' : 'border-gray-300 hover:border-pink-400'
              }`}
            >
              <input {...getInputProps()} />
              {previewImage ? (
                <div className="flex flex-col items-center">
                  <img
                    src={previewImage}
                    alt="Preview"
                    className="h-32 w-32 object-cover rounded-full border-2 border-pink-200 mb-2"
                  />
                  <p className="text-sm text-pink-600">Click to replace or drag another photo</p>
                </div>
              ) : (
                <div>
                  <svg
                    className="mx-auto h-12 w-12 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <p className="mt-2 text-sm text-gray-600">
                    {isDragActive
                      ? 'Drop your photo here'
                      : 'Drag & drop a photo here, or click to select'}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">JPEG, PNG (max 5MB)</p>
                </div>
              )}
            </div>
          </div>

          {uploadStatus && (
            <div className="text-center text-sm text-gray-600">
              {uploadStatus}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 px-4 rounded-xl font-bold text-white mt-6 ${
              loading ? 'bg-pink-400' : 'bg-pink-600 hover:bg-pink-700'
            } transition-colors`}
          >
            {loading ? 'Creating Account...' : 'Sign Up 🚀'}
          </button>
        </div>
      </form>
    </div>
  );
}