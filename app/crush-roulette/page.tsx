"use client"

import { useEffect, useState } from "react"
import PageHeader from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shuffle, Heart, X } from "lucide-react"
import { createClient } from '@supabase/supabase-js'

type UserProfile = {
  id: string
  name: string
  age: number
  avatar_url: string // This is the path in the "profile_pic" bucket
  branch: string
  upvotes: number
  interests: string[]
  match_percentage: number
}

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export default function CrushRoulette() {
  const [profile, setProfile] = useState<UserProfile | null>(null)
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null)

  const fetchRandomProfile = async (excludeId?: string) => {
    const { data, error } = await supabase
      .from("users")
      .select("*")
      .neq("id", excludeId || "")
      .order("RANDOM", { ascending: true }) // Random user
      .limit(1)

    if (error) {
      console.error("Supabase fetch error:", error)
    } else if (data && data.length > 0) {
      const user = data[0]
      setProfile(user)
      fetchProfilePicture(user.profile_pic)
    }
  }

  const fetchProfilePicture = (path: string) => {
    if (!path) {
      setAvatarUrl(null)
      return
    }

    const { data } = supabase
      .storage
      .from("profile_pic")
      .getPublicUrl(path)

    setAvatarUrl(data?.publicUrl || null)
  }

  useEffect(() => {
    fetchRandomProfile()
  }, [])

  const handleSpin = () => {
    fetchRandomProfile(profile?.id)
  }

  return (
    <div className="max-w-2xl mx-auto">
      <PageHeader
        title="Crush Roulette"
        description="Find your match based on shared interests. Spin the wheel and see who you connect with!"
        emoji="🎯"
      />

      <div className="mb-8 text-center">
        <Button
          onClick={handleSpin}
          className="bg-[#20C997] hover:bg-[#1DB386] text-white btn-pulse text-lg px-8 py-6"
        >
          <Shuffle className="h-5 w-5 mr-2" />
          Spin the Roulette
        </Button>
      </div>

      {profile && (
        <div className="flex justify-center">
          <Card className="bg-[#FFC1CC] p-6 relative overflow-hidden w-full max-w-md">
            <div className="absolute top-0 right-0 bg-[#FF6F61] text-white px-3 py-1 rounded-bl-lg">
              {profile.match_percentage}% Match
            </div>

            <div className="flex flex-col items-center">
              <div className="w-32 h-32 rounded-full bg-gray-200 mb-4 overflow-hidden">
                <img
                  src={avatarUrl || "/placeholder.svg?height=128&width=128"}
                  alt={`${profile.name}'s profile`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "/placeholder.svg?height=128&width=128"
                  }}
                />
              </div>

              <h3 className="text-xl font-bold mb-1">
                {profile.name}, {profile.age}
              </h3>

              <p className="text-sm mb-1 text-muted-foreground">
                {profile.branch}
              </p>

              <p className="text-sm mb-4 text-muted-foreground">
                🔼 {profile.upvotes} upvotes
              </p>

              <div className="flex flex-wrap gap-2 mb-6 justify-center">
                {profile.interests?.map((interest, idx) => (
                  <Badge
                    key={idx}
                    className="bg-[#20C997]/20 text-[#20C997] hover:bg-[#20C997]/30"
                  >
                    {interest}
                  </Badge>
                ))}
              </div>

              <div className="flex gap-4">
                <Button
                  onClick={handleSpin}
                  variant="outline"
                  className="rounded-full h-12 w-12 p-0 border-red-400 text-red-400 hover:bg-red-400/10"
                >
                  <X className="h-6 w-6" />
                </Button>
                <Button className="rounded-full h-12 w-12 p-0 bg-[#20C997] hover:bg-[#1DB386]">
                  <Heart className="h-6 w-6" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      )}
    </div>
  )
}
