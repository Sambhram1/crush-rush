import PageHeader from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Eye, Lock, Coins, Sparkles } from "lucide-react"

export default function WhosWatchingYou() {
  return (
    <div className="max-w-4xl mx-auto">
      <PageHeader
        title="Who's Watching You"
        description="Discover your secret admirers. Spend coins to reveal who's been checking out your profile."
        emoji="👀"
      />

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <Card className="p-6 bg-[#FFC1CC] text-center">
          <Eye className="h-8 w-8 mx-auto mb-2 text-[#FF6F61]" />
          <h3 className="text-xl font-bold mb-1">12</h3>
          <p className="text-sm">Profile Views Today</p>
        </Card>

        <Card className="p-6 bg-[#FFC1CC] text-center">
          <Sparkles className="h-8 w-8 mx-auto mb-2 text-[#FF6F61]" />
          <h3 className="text-xl font-bold mb-1">85%</h3>
          <p className="text-sm">Vibe Score</p>
        </Card>

        <Card className="p-6 bg-[#FFC1CC] text-center">
          <Lock className="h-8 w-8 mx-auto mb-2 text-[#FF6F61]" />
          <h3 className="text-xl font-bold mb-1">5</h3>
          <p className="text-sm">Secret Admirers</p>
        </Card>
      </div>

      <h2 className="text-2xl font-bold mb-4">Recent Visitors</h2>

      <div className="space-y-4">
        {[1, 2, 3, 4].map((i) => (
          <Card key={i} className="p-4 glass-effect">
            <div className="flex items-center">
              <div className="relative mr-4">
                <div className="w-16 h-16 rounded-full bg-gray-200 overflow-hidden blur-md">
                  <img
                    src="/placeholder.svg?height=64&width=64"
                    alt="Blurred profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute bottom-0 right-0 text-lg">
                  {i === 1 ? "🎵" : i === 2 ? "🎨" : i === 3 ? "🏀" : "📚"}
                </div>
              </div>

              <div className="flex-1">
                <h3 className="font-bold mb-1">
                  {i === 1 ? "Music Lover" : i === 2 ? "Art Major" : i === 3 ? "Basketball Player" : "Bookworm"}
                </h3>
                <div className="flex items-center text-sm text-gray-600">
                  <span>
                    Viewed your profile{" "}
                    {i === 1 ? "10 minutes" : i === 2 ? "2 hours" : i === 3 ? "yesterday" : "3 days"} ago
                  </span>
                </div>
                <div className="mt-1">
                  <Badge className="bg-[#20C997]/20 text-[#20C997]">
                    {i === 1 ? "90%" : i === 2 ? "75%" : i === 3 ? "85%" : "60%"} vibe match
                  </Badge>
                </div>
              </div>

              <Button className="ml-auto bg-[#20C997] hover:bg-[#1DB386] btn-pulse">
                <Coins className="h-4 w-4 mr-2" />
                Reveal (25)
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
