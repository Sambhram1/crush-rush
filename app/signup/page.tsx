'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);


const schema = z.object({
  name: z.string().min(2, 'Name is too short'),
  age: z.coerce.number().min(16, 'Too young'),
  gender: z.enum(['Male', 'Female', 'Other']),
  branch: z.string().min(2),
  profilePic: z.any().optional(), // ✅ Now optional
});

type FormData = z.infer<typeof schema>;

export default function SignUp() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    let profilePicUrl = null;

    const file = data.profilePic?.[0];
    if (file) {
      const fileExt = file.name.split('.').pop();
      const fileName = `${Date.now()}.${fileExt}`;
      const filePath = `avatars/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('avatars')
        .upload(filePath, file);

      if (uploadError) {
        alert('Error uploading image');
        setLoading(false);
        return;
      }

      const { data: urlData } = supabase.storage
        .from('avatars')
        .getPublicUrl(filePath);

      profilePicUrl = urlData?.publicUrl;
    }

    const { error: insertError } = await supabase.from('users').insert([
      {
        name: data.name,
        age: data.age,
        gender: data.gender,
        branch: data.branch,
        profile_pic: profilePicUrl, // ✅ Can be null
      },
    ]);

    if (insertError) {
      alert('Signup failed');
      setLoading(false);
      return;
    }

    router.push('/');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-pink-50">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md space-y-4">
        <h2 className="text-3xl font-bold text-center text-pink-600">🎉 Join CrushRush</h2>

        <div>
          <label className="block text-sm font-medium">Name</label>
          <input {...register('name')} className="mt-1 w-full border rounded-lg px-4 py-2" />
          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium">Age</label>
          <input type="number" {...register('age')} className="mt-1 w-full border rounded-lg px-4 py-2" />
          {errors.age && <p className="text-red-500 text-sm">{errors.age.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium">Gender</label>
          <select {...register('gender')} className="mt-1 w-full border rounded-lg px-4 py-2">
            <option value="">Select</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
          {errors.gender && <p className="text-red-500 text-sm">{errors.gender.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium">Branch</label>
          <input {...register('branch')} className="mt-1 w-full border rounded-lg px-4 py-2" />
          {errors.branch && <p className="text-red-500 text-sm">{errors.branch.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium">Profile Picture (optional)</label>
          <input type="file" accept="image/*" {...register('profilePic')} />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 bg-pink-600 text-white font-bold rounded-xl hover:bg-pink-700 transition"
        >
          {loading ? 'Signing Up...' : 'Sign Up 🚀'}
        </button>
      </form>
    </div>
  );
}
