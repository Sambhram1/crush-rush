import PageHeader from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shuffle, Heart, X } from "lucide-react"

export default function CrushRoulette() {
  return (
    <div className="max-w-4xl mx-auto">
      <PageHeader
        title="Crush Roulette"
        description="Find your match based on shared interests. Spin the wheel and see who you connect with!"
        emoji="🎯"
      />

      <div className="mb-8 text-center">
        <Button className="bg-[#20C997] hover:bg-[#1DB386] text-white btn-pulse text-lg px-8 py-6">
          <Shuffle className="h-5 w-5 mr-2" />
          Spin the Roulette
        </Button>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <Card className="bg-[#FFC1CC] p-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-[#FF6F61] text-white px-3 py-1 rounded-bl-lg">95% Match</div>

          <div className="flex flex-col items-center">
            <div className="w-32 h-32 rounded-full bg-gray-200 mb-4 overflow-hidden">
              <img src="/placeholder.svg?height=128&width=128" alt="Profile" className="w-full h-full object-cover" />
            </div>

            <h3 className="text-xl font-bold mb-1">Alex, 20</h3>
            <p className="text-sm mb-4">Computer Science • 2 miles away</p>

            <div className="flex flex-wrap gap-2 mb-6 justify-center">
              <Badge className="bg-[#20C997]/20 text-[#20C997] hover:bg-[#20C997]/30">Music</Badge>
              <Badge className="bg-[#20C997]/20 text-[#20C997] hover:bg-[#20C997]/30">Photography</Badge>
              <Badge className="bg-[#20C997]/20 text-[#20C997] hover:bg-[#20C997]/30">Hiking</Badge>
              <Badge className="bg-[#20C997]/20 text-[#20C997] hover:bg-[#20C997]/30">Coffee</Badge>
              <Badge className="bg-[#20C997]/20 text-[#20C997] hover:bg-[#20C997]/30">Movies</Badge>
            </div>

            <div className="flex gap-4">
              <Button
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

        <div className="flex flex-col gap-4">
          <Card className="p-6 glass-effect">
            <h3 className="text-lg font-bold mb-4">Why We Matched</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="text-[#FF6F61] mr-2">🎵</span>
                Both love indie rock and attend concerts
              </li>
              <li className="flex items-center">
                <span className="text-[#FF6F61] mr-2">☕</span>
                Coffee enthusiasts and cafe hoppers
              </li>
              <li className="flex items-center">
                <span className="text-[#FF6F61] mr-2">🎬</span>
                Share taste in sci-fi and thriller movies
              </li>
            </ul>
          </Card>

          <Card className="p-6 glass-effect">
            <h3 className="text-lg font-bold mb-4">Conversation Starters</h3>
            <div className="space-y-2">
              <p className="p-3 bg-[#FFC1CC]/50 rounded-lg">
                "I noticed you like hiking! What's your favorite trail around campus?"
              </p>
              <p className="p-3 bg-[#FFC1CC]/50 rounded-lg">
                "Have you been to the new coffee shop that opened downtown?"
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
