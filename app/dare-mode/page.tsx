import PageHeader from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Camera, Clock, Trophy, Coins } from "lucide-react"

export default function DareMode() {
  return (
    <div className="max-w-4xl mx-auto">
      <PageHeader
        title="Dare Mode"
        description="Complete daily dares to earn rewards and climb the leaderboard. New challenges every day!"
        emoji="🔥"
      />

      <Card className="bg-[#FFC1CC] p-6 mb-8">
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <div className="flex-1">
            <div className="flex items-center mb-2">
              <Badge className="bg-[#FF6F61] text-white">Dare of the Day</Badge>
              <div className="ml-auto flex items-center text-sm">
                <Clock className="h-4 w-4 mr-1" />
                <span>Expires in 8 hours</span>
              </div>
            </div>

            <h3 className="text-xl font-bold mb-3">Take a selfie at the campus fountain</h3>
            <p className="mb-4">
              Snap a creative photo at the main fountain. Bonus points if you can include the university mascot in your
              shot!
            </p>

            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">Completion Rate</span>
              <span className="text-sm">42%</span>
            </div>
            <Progress value={42} className="h-2 mb-4" />

            <div className="flex flex-wrap gap-3">
              <Button className="bg-[#20C997] hover:bg-[#1DB386] btn-pulse">
                <Camera className="h-4 w-4 mr-2" />
                Complete Dare
              </Button>
              <div className="flex items-center bg-white/50 px-3 py-2 rounded-md">
                <Coins className="h-4 w-4 text-[#FF6F61] mr-1" />
                <span className="font-medium">50 coins reward</span>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/3 aspect-square bg-gray-200 rounded-lg overflow-hidden">
            <img
              src="/placeholder.svg?height=300&width=300"
              alt="Dare example"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </Card>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="p-6 glass-effect">
          <h3 className="text-lg font-bold mb-4 flex items-center">
            <Trophy className="h-5 w-5 text-[#FF6F61] mr-2" />
            Your Dare Stats
          </h3>

          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm">Dares Completed</span>
                <span className="font-medium">12/30</span>
              </div>
              <Progress value={40} className="h-2" />
            </div>

            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm">Coins Earned</span>
                <span className="font-medium">450</span>
              </div>
              <Progress value={45} className="h-2" />
            </div>

            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm">Dare Streak</span>
                <span className="font-medium">5 days</span>
              </div>
              <Progress value={50} className="h-2" />
            </div>
          </div>
        </Card>

        <Card className="p-6 glass-effect">
          <h3 className="text-lg font-bold mb-4">Upcoming Dares</h3>

          <div className="space-y-4">
            <div className="flex items-center p-3 bg-[#FFC1CC]/30 rounded-lg">
              <div className="text-2xl mr-3">🎭</div>
              <div>
                <h4 className="font-medium">Theater Challenge</h4>
                <p className="text-sm">Coming tomorrow</p>
              </div>
              <div className="ml-auto">
                <Badge className="bg-[#20C997]/20 text-[#20C997]">+75 coins</Badge>
              </div>
            </div>

            <div className="flex items-center p-3 bg-[#FFC1CC]/30 rounded-lg">
              <div className="text-2xl mr-3">🍕</div>
              <div>
                <h4 className="font-medium">Food Court Quest</h4>
                <p className="text-sm">Coming in 2 days</p>
              </div>
              <div className="ml-auto">
                <Badge className="bg-[#20C997]/20 text-[#20C997]">+60 coins</Badge>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
