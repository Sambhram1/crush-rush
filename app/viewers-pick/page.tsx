import PageHeader from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Trophy, ArrowRight, ThumbsUp, Crown } from "lucide-react"

export default function ViewersPick() {
  return (
    <div className="max-w-4xl mx-auto">
      <PageHeader
        title="Viewer's Pick"
        description="Classic 'Who's Hotter?' profile showdown. Vote for your favorites and see who tops the leaderboard!"
        emoji="🥵"
      />

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <Card className="bg-[#FFC1CC] p-6 relative">
          <div className="absolute top-0 right-0 bg-[#FF6F61] text-white px-3 py-1 rounded-bl-lg">Profile A</div>

          <div className="flex flex-col items-center">
            <div className="w-full aspect-square bg-gray-200 rounded-lg overflow-hidden mb-4">
              <img src="/placeholder.svg?height=300&width=300" alt="Profile A" className="w-full h-full object-cover" />
            </div>

            <h3 className="text-xl font-bold mb-1">Jordan, 22</h3>
            <p className="text-sm mb-4">Film Studies • 3 miles away</p>

            <div className="flex flex-wrap gap-2 mb-6 justify-center">
              <Badge className="bg-[#20C997]/20 text-[#20C997] hover:bg-[#20C997]/30">Photography</Badge>
              <Badge className="bg-[#20C997]/20 text-[#20C997] hover:bg-[#20C997]/30">Hiking</Badge>
              <Badge className="bg-[#20C997]/20 text-[#20C997] hover:bg-[#20C997]/30">Vinyl Records</Badge>
            </div>

            <Button className="w-full bg-[#20C997] hover:bg-[#1DB386] btn-pulse">
              <ThumbsUp className="h-5 w-5 mr-2" />
              Vote for Jordan
            </Button>
          </div>
        </Card>

        <Card className="bg-[#FFC1CC] p-6 relative">
          <div className="absolute top-0 right-0 bg-[#FF6F61] text-white px-3 py-1 rounded-bl-lg">Profile B</div>

          <div className="flex flex-col items-center">
            <div className="w-full aspect-square bg-gray-200 rounded-lg overflow-hidden mb-4">
              <img src="/placeholder.svg?height=300&width=300" alt="Profile B" className="w-full h-full object-cover" />
            </div>

            <h3 className="text-xl font-bold mb-1">Taylor, 21</h3>
            <p className="text-sm mb-4">Computer Science • 5 miles away</p>

            <div className="flex flex-wrap gap-2 mb-6 justify-center">
              <Badge className="bg-[#20C997]/20 text-[#20C997] hover:bg-[#20C997]/30">Gaming</Badge>
              <Badge className="bg-[#20C997]/20 text-[#20C997] hover:bg-[#20C997]/30">Coffee</Badge>
              <Badge className="bg-[#20C997]/20 text-[#20C997] hover:bg-[#20C997]/30">Rock Climbing</Badge>
            </div>

            <Button className="w-full bg-[#20C997] hover:bg-[#1DB386] btn-pulse">
              <ThumbsUp className="h-5 w-5 mr-2" />
              Vote for Taylor
            </Button>
          </div>
        </Card>
      </div>

      <div className="flex justify-center mb-8">
        <Button variant="outline" className="border-[#FF6F61] text-[#FF6F61] hover:bg-[#FF6F61]/10">
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
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden mr-3">
              <img src="/placeholder.svg?height=40&width=40" alt="Top profile" className="w-full h-full object-cover" />
            </div>

            <div className="flex-1">
              <div className="flex items-center">
                <h4 className="font-bold">Morgan K.</h4>
                <Crown className="h-4 w-4 text-[#FF6F61] ml-2" />
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm">Win rate: 87%</span>
                <span className="text-sm font-medium">428 votes</span>
              </div>
            </div>
          </div>

          <Progress value={87} className="h-2" />

          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden mr-3">
              <img
                src="/placeholder.svg?height=40&width=40"
                alt="Second profile"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1">
              <h4 className="font-bold">Riley J.</h4>
              <div className="flex justify-between items-center">
                <span className="text-sm">Win rate: 82%</span>
                <span className="text-sm font-medium">392 votes</span>
              </div>
            </div>
          </div>

          <Progress value={82} className="h-2" />

          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden mr-3">
              <img
                src="/placeholder.svg?height=40&width=40"
                alt="Third profile"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1">
              <h4 className="font-bold">Casey T.</h4>
              <div className="flex justify-between items-center">
                <span className="text-sm">Win rate: 76%</span>
                <span className="text-sm font-medium">356 votes</span>
              </div>
            </div>
          </div>

          <Progress value={76} className="h-2" />
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
