import type React from "react"
import PageHeader from "@/components/page-header"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Trophy, MessageCircle, Heart, Zap, Sparkles } from "lucide-react"

export default function Leaderboards() {
  return (
    <div className="max-w-4xl mx-auto">
      <PageHeader
        title="Leaderboards"
        description="See who's crushing it on campus. Check out the top flirts, most popular profiles, and more!"
        emoji="🏆"
      />

      <Tabs defaultValue="top-flirts" className="mb-8">
        <TabsList className="grid grid-cols-5 bg-[#FFC1CC]/30">
          <TabsTrigger value="top-flirts">Top Flirts</TabsTrigger>
          <TabsTrigger value="most-dms">Most DMs</TabsTrigger>
          <TabsTrigger value="mystery-crush">Mystery Crush</TabsTrigger>
          <TabsTrigger value="chaotic-energy">Chaotic Energy</TabsTrigger>
          <TabsTrigger value="dare-masters">Dare Masters</TabsTrigger>
        </TabsList>

        <TabsContent value="top-flirts" className="mt-6">
          <LeaderboardSection
            title="Top Flirts"
            description="Users with the most successful matches this week"
            icon={<Heart className="h-5 w-5 text-[#FF6F61]" />}
            users={[
              { name: "Jamie S.", score: "32 matches", rank: 1, badge: "Flirt Master" },
              { name: "Alex T.", score: "28 matches", rank: 2, badge: "Smooth Talker" },
              { name: "Jordan P.", score: "25 matches", rank: 3, badge: "Heart Breaker" },
              { name: "Taylor R.", score: "21 matches", rank: 4, badge: "Rising Star" },
              { name: "Casey M.", score: "18 matches", rank: 5, badge: "Newbie Flirt" },
            ]}
          />
        </TabsContent>

        <TabsContent value="most-dms" className="mt-6">
          <LeaderboardSection
            title="Most DMs"
            description="Users with the most active conversations"
            icon={<MessageCircle className="h-5 w-5 text-[#FF6F61]" />}
            users={[
              { name: "Riley K.", score: "45 active chats", rank: 1, badge: "Chat Champion" },
              { name: "Morgan L.", score: "38 active chats", rank: 2, badge: "Conversation Pro" },
              { name: "Drew B.", score: "32 active chats", rank: 3, badge: "Social Butterfly" },
              { name: "Avery S.", score: "29 active chats", rank: 4, badge: "Never Sleeps" },
              { name: "Quinn P.", score: "24 active chats", rank: 5, badge: "Keyboard Warrior" },
            ]}
          />
        </TabsContent>

        <TabsContent value="mystery-crush" className="mt-6">
          <LeaderboardSection
            title="Mystery Crush"
            description="Most intriguing profiles with the highest reveal rates"
            icon={<Sparkles className="h-5 w-5 text-[#FF6F61]" />}
            users={[
              { name: "????? (English Major)", score: "92% reveal rate", rank: 1, badge: "Campus Mystery" },
              { name: "????? (CS Student)", score: "87% reveal rate", rank: 2, badge: "Enigma" },
              { name: "????? (Basketball Team)", score: "83% reveal rate", rank: 3, badge: "Secret Admirer" },
              { name: "????? (Art Studio)", score: "78% reveal rate", rank: 4, badge: "Hidden Gem" },
              { name: "????? (Theater Club)", score: "75% reveal rate", rank: 5, badge: "Undercover" },
            ]}
          />
        </TabsContent>

        <TabsContent value="chaotic-energy" className="mt-6">
          <LeaderboardSection
            title="Chaotic Energy Rank"
            description="The most unpredictable and entertaining users on campus"
            icon={<Zap className="h-5 w-5 text-[#FF6F61]" />}
            users={[
              { name: "Charlie D.", score: "Chaos Level 99", rank: 1, badge: "Campus Menace" },
              { name: "Frankie J.", score: "Chaos Level 87", rank: 2, badge: "Wildcard" },
              { name: "Stevie P.", score: "Chaos Level 82", rank: 3, badge: "Unpredictable" },
              { name: "Jessie M.", score: "Chaos Level 76", rank: 4, badge: "Chaotic Good" },
              { name: "Remy T.", score: "Chaos Level 70", rank: 5, badge: "Loose Cannon" },
            ]}
          />
        </TabsContent>

        <TabsContent value="dare-masters" className="mt-6">
          <LeaderboardSection
            title="Dare Masters"
            description="Users who've completed the most dares this month"
            icon={<Trophy className="h-5 w-5 text-[#FF6F61]" />}
            users={[
              { name: "Sam K.", score: "28 dares", rank: 1, badge: "Fearless" },
              { name: "Blake T.", score: "25 dares", rank: 2, badge: "Risk Taker" },
              { name: "Hayden R.", score: "23 dares", rank: 3, badge: "Adventurer" },
              { name: "Parker J.", score: "20 dares", rank: 4, badge: "Bold Move" },
              { name: "Dakota S.", score: "18 dares", rank: 5, badge: "Daredevil" },
            ]}
          />
        </TabsContent>
      </Tabs>
    </div>
  )
}

interface LeaderboardSectionProps {
  title: string
  description: string
  icon: React.ReactNode
  users: {
    name: string
    score: string
    rank: number
    badge: string
  }[]
}

function LeaderboardSection({ title, description, icon, users }: LeaderboardSectionProps) {
  return (
    <Card className="p-6 glass-effect">
      <div className="flex items-center mb-4">
        <div className="mr-2">{icon}</div>
        <div>
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </div>

      <div className="space-y-4">
        {users.map((user) => (
          <div
            key={user.rank}
            className={`flex items-center p-3 rounded-lg ${
              user.rank === 1
                ? "bg-[#FFC1CC]"
                : user.rank === 2
                  ? "bg-[#FFC1CC]/80"
                  : user.rank === 3
                    ? "bg-[#FFC1CC]/60"
                    : "bg-[#FFC1CC]/30"
            }`}
          >
            <div className="w-8 h-8 rounded-full bg-[#20C997] text-white flex items-center justify-center font-bold mr-4">
              {user.rank}
            </div>

            <div className="flex-1">
              <h4 className="font-medium">{user.name}</h4>
              <p className="text-sm">{user.score}</p>
            </div>

            <Badge
              className={`
              ${user.rank === 1 ? "bg-[#FF6F61] text-white" : "bg-[#20C997]/20 text-[#20C997]"}
            `}
            >
              {user.badge}
            </Badge>
          </div>
        ))}
      </div>
    </Card>
  )
}
