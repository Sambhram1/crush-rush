import PageHeader from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Moon, Calendar, Clock, Users, MessageSquare } from "lucide-react"

export default function DarkModeFridays() {
  return (
    <div className="max-w-4xl mx-auto">
      <PageHeader
        title="Dark Mode Fridays"
        description="Special night events every Friday. Blind matches, anonymous confessions, and more!"
        emoji="🌙"
      />

      <Card className="bg-[#FFC1CC] p-6 mb-8">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <div className="flex items-center mb-2">
              <Badge className="bg-[#FF6F61] text-white">Next Event</Badge>
              <div className="ml-auto flex items-center text-sm">
                <Calendar className="h-4 w-4 mr-1" />
                <span>This Friday</span>
              </div>
            </div>

            <h3 className="text-xl font-bold mb-3">Midnight Mixer</h3>
            <p className="mb-4">
              The app goes dark at midnight! UI flips to dark mode, and you'll only see silhouettes and personality
              traits. Make connections based on vibes, not looks.
            </p>

            <div className="flex flex-wrap gap-3 mb-4">
              <div className="flex items-center bg-white/50 px-3 py-2 rounded-md">
                <Clock className="h-4 w-4 text-[#FF6F61] mr-1" />
                <span className="font-medium">12:00 AM - 3:00 AM</span>
              </div>
              <div className="flex items-center bg-white/50 px-3 py-2 rounded-md">
                <Users className="h-4 w-4 text-[#FF6F61] mr-1" />
                <span className="font-medium">243 attending</span>
              </div>
            </div>

            <Button className="bg-[#20C997] hover:bg-[#1DB386] btn-pulse">
              <Moon className="h-4 w-4 mr-2" />
              Set Reminder
            </Button>
          </div>

          <div className="w-full md:w-1/3 bg-black rounded-lg overflow-hidden p-4 flex items-center justify-center">
            <div className="text-center">
              <Moon className="h-12 w-12 text-white mx-auto mb-2" />
              <div className="text-white text-sm">Dark Mode Preview</div>
              <div className="mt-4 flex justify-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gray-800 border border-gray-700"></div>
                <div className="w-8 h-8 rounded-full bg-gray-800 border border-gray-700"></div>
                <div className="w-8 h-8 rounded-full bg-gray-800 border border-gray-700"></div>
              </div>
            </div>
          </div>
        </div>
      </Card>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="p-6 glass-effect">
          <h3 className="text-lg font-bold mb-4 flex items-center">
            <MessageSquare className="h-5 w-5 text-[#FF6F61] mr-2" />
            Dark Mode Features
          </h3>

          <div className="space-y-4">
            <div className="flex items-center p-3 bg-[#FFC1CC]/30 rounded-lg">
              <div className="text-2xl mr-3">🎭</div>
              <div>
                <h4 className="font-medium">Anonymous Mode</h4>
                <p className="text-sm">All profiles become anonymous silhouettes</p>
              </div>
            </div>

            <div className="flex items-center p-3 bg-[#FFC1CC]/30 rounded-lg">
              <div className="text-2xl mr-3">💬</div>
              <div>
                <h4 className="font-medium">Blind Chats</h4>
                <p className="text-sm">Connect based on conversation only</p>
              </div>
            </div>

            <div className="flex items-center p-3 bg-[#FFC1CC]/30 rounded-lg">
              <div className="text-2xl mr-3">🔮</div>
              <div>
                <h4 className="font-medium">Vibe Matching</h4>
                <p className="text-sm">Personality-based matching algorithm</p>
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-6 glass-effect">
          <h3 className="text-lg font-bold mb-4">Past Dark Mode Events</h3>

          <div className="space-y-4">
            <div className="p-3 bg-[#FFC1CC]/30 rounded-lg">
              <div className="flex justify-between mb-1">
                <h4 className="font-medium">Truth or Dare Night</h4>
                <span className="text-sm">Last Friday</span>
              </div>
              <p className="text-sm">324 participants • 78 matches made</p>
            </div>

            <div className="p-3 bg-[#FFC1CC]/30 rounded-lg">
              <div className="flex justify-between mb-1">
                <h4 className="font-medium">Secret Admirer Reveal</h4>
                <span className="text-sm">Two weeks ago</span>
              </div>
              <p className="text-sm">412 participants • 103 matches made</p>
            </div>

            <div className="p-3 bg-[#FFC1CC]/30 rounded-lg">
              <div className="flex justify-between mb-1">
                <h4 className="font-medium">Midnight Confessions</h4>
                <span className="text-sm">Three weeks ago</span>
              </div>
              <p className="text-sm">287 participants • 65 matches made</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
