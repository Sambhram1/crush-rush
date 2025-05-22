'use client'
import { createClient } from '@supabase/supabase-js'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { ThumbsUp, ArrowRight, Trophy, Crown } from 'lucide-react'
import PageHeader from '@/components/page-header'

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

type Profile = {
  id: number
  name: string
  age: number
  gender: 'Male' | 'Female' | 'Other'
  branch: string
  profile_pic: string | null
  created_at: string
  votes: number
  wins: number
  losses: number
  win_rate?: number
}

export default function ViewersPick() {
  const [profiles, setProfiles] = useState<Profile[]>([])
  const [leaders, setLeaders] = useState<Profile[]>([])
  const [loading, setLoading] = useState(false)
  const [imageError, setImageError] = useState<Record<number, boolean>>({})

 const generatePublicUrl = (url: string | null) => url || undefined


  const fetchProfiles = async () => {
    setLoading(true)
    try {
      const { data, error } = await supabase
        .from('users')
        .select('*')
        .order('votes', { ascending: false })

      if (error) throw error
      if (data) {
        const processedData = data.map(profile => ({
          ...profile,
          profile_pic: generatePublicUrl(profile.profile_pic),
          win_rate: profile.wins > 0 ? Math.round((profile.wins / (profile.wins + profile.losses)) * 100) : 0
        }))
        setProfiles(shuffleArray(processedData).slice(0, 2))
        setLeaders(processedData.slice(0, 3))
      }
    } catch (error) {
      console.error('Error fetching profiles:', error)
    } finally {
      setLoading(false)
    }
  }

  const vote = async (winner: Profile, loser: Profile) => {
    try {
      await Promise.all([
        supabase
          .from('users')
          .update({ votes: winner.votes + 1, wins: winner.wins + 1 })
          .eq('id', winner.id),
        supabase
          .from('users')
          .update({ losses: loser.losses + 1 })
          .eq('id', loser.id)
      ])
      fetchProfiles()
    } catch (error) {
      console.error('Error voting:', error)
    }
  }

  const handleImageError = (id: number) => {
    setImageError(prev => ({ ...prev, [id]: true }))
  }

  useEffect(() => {
    fetchProfiles()
  }, [])

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto">
        <PageHeader
          title="Viewer's Pick"
          description="Classic 'Who's Hotter?' profile showdown. Vote for your favorites and see who tops the leaderboard!"
          emoji="🥵"
        />
        <div className="flex justify-center items-center h-64">Loading face-off...</div>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto">
      <PageHeader
        title="Viewer's Pick"
        description="Classic 'Who's Hotter?' profile showdown. Vote for your favorites and see who tops the leaderboard!"
        emoji="🥵"
      />

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        {profiles.map((profile, i) => (
          <Card key={profile.id} className="bg-[#FFC1CC] p-6 relative">
            <div className="absolute top-0 right-0 bg-[#FF6F61] text-white px-3 py-1 rounded-bl-lg">
              Profile {i === 0 ? 'A' : 'B'}
            </div>

            <div className="flex flex-col items-center">
              <div className="w-full aspect-square bg-gray-200 rounded-lg overflow-hidden mb-4">
                {profile.profile_pic && !imageError[profile.id] ? (
                 <img src={generatePublicUrl(profile.profile_pic)} 
                      alt={profile.name} 
                      className="w-full h-full object-cover"
                      onError={() => handleImageError(profile.id)}
                    />

                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gray-300">
                    <span className="text-gray-500">No Image</span>
                  </div>
                )}
              </div>

              <h3 className="text-xl font-bold mb-1">
                {profile.name}, {profile.age}
              </h3>
              <p className="text-sm mb-4">
                {profile.branch} • {profile.gender}
              </p>

              <Button
                className="w-full bg-[#20C997] hover:bg-[#1DB386] btn-pulse"
                onClick={() => vote(profile, profiles.find(p => p.id !== profile.id)!)}
              >
                <ThumbsUp className="h-5 w-5 mr-2" />
                Vote for {profile.name.split(' ')[0]}
              </Button>
            </div>
          </Card>
        ))}
      </div>

      <div className="flex justify-center mb-8">
        <Button
          variant="outline"
          className="border-[#FF6F61] text-[#FF6F61] hover:bg-[#FF6F61]/10"
          onClick={fetchProfiles}
        >
          <ArrowRight className="h-5 w-5 mr-2" />
          Skip to Next Matchup
        </Button>
      </div>

      <h2 className="text-2xl font-bold mb-4 flex items-center">
        <Trophy className="h-6 w-6 text-[#FF6F61] mr-2" />
        Today's Leaderboard
      </h2>

      <Card className="p-6 glass-effect mb-8">
        <div className="space-y-4">
          {leaders.map((leader, index) => (
            <div key={leader.id}>
              <div className="flex items-center mb-1">
                <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden mr-3">
                  {leader.profile_pic && !imageError[leader.id] ? (
                    <img
                      src={leader.profile_pic}
                      alt={leader.name}
                      className="w-full h-full object-cover"
                      onError={() => handleImageError(leader.id)}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gray-300">
                      <span className="text-gray-500 text-xs">No Image</span>
                    </div>
                  )}
                </div>

                <div className="flex-1">
                  <div className="flex items-center">
                    <h4 className="font-bold">{leader.name}</h4>
                    {index === 0 && <Crown className="h-4 w-4 text-[#FF6F61] ml-2" />}
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Win rate: {leader.win_rate}%</span>
                    <span className="text-sm font-medium">{leader.votes} votes</span>
                  </div>
                </div>
              </div>
              <Progress value={leader.win_rate || 0} className="h-2" />
            </div>
          ))}
        </div>
      </Card>

      <div className="grid md:grid-cols-3 gap-6">
        <Card className="p-6 glass-effect text-center">
          <div className="text-4xl mb-3">🔥</div>
          <h3 className="text-lg font-bold mb-2">Hot Streaks</h3>
          <p className="text-sm">Win 10 matchups in a row to earn the 'On Fire' badge on your profile.</p>
        </Card>

        <Card className="p-6 glass-effect text-center">
          <div className="text-4xl mb-3">🏆</div>
          <h3 className="text-lg font-bold mb-2">Weekly Champions</h3>
          <p className="text-sm">Top profiles each week get featured on the app's homepage.</p>
        </Card>

        <Card className="p-6 glass-effect text-center">
          <div className="text-4xl mb-3">⭐</div>
          <h3 className="text-lg font-bold mb-2">Hall of Fame</h3>
          <p className="text-sm">Join the elite group of all-time most popular profiles on campus.</p>
        </Card>
      </div>
    </div>
  )
}

function shuffleArray<T>(array: T[]): T[] {
  return [...array].sort(() => Math.random() - 0.5)
}
