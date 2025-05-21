import PageHeader from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Flame, Heart, Send, ThumbsUp, MessageSquare, Coins } from "lucide-react"

export default function RoastOrToast() {
  return (
    <div className="max-w-4xl mx-auto">
      <PageHeader
        title="Roast or Toast"
        description="Give love or laughs to other profiles. Earn coins for the wittiest roasts and sweetest toasts!"
        emoji="🔥"
      />

      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <Card className="bg-[#FFC1CC] p-6">
          <div className="flex items-center mb-4">
            <Flame className="h-5 w-5 text-[#FF6F61] mr-2" />
            <h3 className="text-xl font-bold">Roast</h3>
            <div className="ml-auto">
              <Badge className="bg-[#FF6F61] text-white">Savage but Funny</Badge>
            </div>
          </div>

          <p className="mb-4 text-sm">Write a witty, playful roast about someone's profile. Keep it funny, not mean!</p>

          <Button className="w-full bg-[#FF6F61] hover:bg-[#FF5E50] btn-pulse">
            <Flame className="h-4 w-4 mr-2" />
            Find Someone to Roast
          </Button>
        </Card>

        <Card className="bg-[#FFC1CC] p-6">
          <div className="flex items-center mb-4">
            <Heart className="h-5 w-5 text-[#FF6F61] mr-2" />
            <h3 className="text-xl font-bold">Toast</h3>
            <div className="ml-auto">
              <Badge className="bg-[#20C997] text-white">Sweet & Supportive</Badge>
            </div>
          </div>

          <p className="mb-4 text-sm">Write something nice and uplifting about someone's profile. Spread positivity!</p>

          <Button className="w-full bg-[#20C997] hover:bg-[#1DB386] btn-pulse">
            <Heart className="h-4 w-4 mr-2" />
            Find Someone to Toast
          </Button>
        </Card>
      </div>

      <Card className="p-6 glass-effect mb-8">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden mr-4">
            <img src="/placeholder.svg?height=48&width=48" alt="Profile" className="w-full h-full object-cover" />
          </div>

          <div>
            <h3 className="font-bold">Jordan T.</h3>
            <p className="text-sm">Psychology Major • Coffee Enthusiast</p>
          </div>

          <div className="ml-auto">
            <Badge className="bg-[#FF6F61] text-white">Roast Me</Badge>
          </div>
        </div>

        <div className="mb-4">
          <Textarea placeholder="Write your wittiest roast here... Keep it funny, not mean!" className="bg-white/70" />
        </div>

        <div className="flex justify-between">
          <div className="text-sm text-gray-600">
            <span className="font-medium">Pro Tip:</span> The funnier your roast, the more coins you can earn!
          </div>
          <Button className="bg-[#FF6F61] hover:bg-[#FF5E50]">
            <Send className="h-4 w-4 mr-2" />
            Send Roast
          </Button>
        </div>
      </Card>

      <h2 className="text-2xl font-bold mb-4">Top Roasts & Toasts</h2>

      <div className="space-y-4">
        <Card className="p-6 glass-effect">
          <div className="flex items-center mb-2">
            <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden mr-3">
              <img src="/placeholder.svg?height=40&width=40" alt="Profile" className="w-full h-full object-cover" />
            </div>

            <div>
              <h4 className="font-bold">Alex K.</h4>
              <div className="flex items-center text-xs text-gray-600">
                <Flame className="h-3 w-3 text-[#FF6F61] mr-1" />
                <span>Roasted Taylor P.</span>
              </div>
            </div>

            <div className="ml-auto flex items-center">
              <Badge className="bg-[#FF6F61]/20 text-[#FF6F61] mr-2">Fire Roast</Badge>
              <div className="flex items-center bg-[#FFC1CC]/30 px-2 py-1 rounded-md">
                <Coins className="h-3 w-3 text-[#FF6F61] mr-1" />
                <span className="text-xs font-medium">+75</span>
              </div>
            </div>
          </div>

          <p className="p-3 bg-[#FFC1CC]/30 rounded-lg mb-3">
            "Your bio says you're a 'future CEO' but your room in the background looks like it's being run by a board of
            dust bunnies. Maybe start by being the CEO of a vacuum cleaner first? 😂"
          </p>

          <div className="flex items-center text-sm text-gray-600">
            <div className="flex items-center mr-4">
              <ThumbsUp className="h-4 w-4 mr-1" />
              <span>128</span>
            </div>
            <div className="flex items-center">
              <MessageSquare className="h-4 w-4 mr-1" />
              <span>24 replies</span>
            </div>
          </div>
        </Card>

        <Card className="p-6 glass-effect">
          <div className="flex items-center mb-2">
            <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden mr-3">
              <img src="/placeholder.svg?height=40&width=40" alt="Profile" className="w-full h-full object-cover" />
            </div>

            <div>
              <h4 className="font-bold">Jamie R.</h4>
              <div className="flex items-center text-xs text-gray-600">
                <Heart className="h-3 w-3 text-[#20C997] mr-1" />
                <span>Toasted Morgan L.</span>
              </div>
            </div>

            <div className="ml-auto flex items-center">
              <Badge className="bg-[#20C997]/20 text-[#20C997] mr-2">Sweet Toast</Badge>
              <div className="flex items-center bg-[#FFC1CC]/30 px-2 py-1 rounded-md">
                <Coins className="h-3 w-3 text-[#FF6F61] mr-1" />
                <span className="text-xs font-medium">+60</span>
              </div>
            </div>
          </div>

          <p className="p-3 bg-[#FFC1CC]/30 rounded-lg mb-3">
            "Your photography portfolio is absolutely stunning! The way you capture light in your nature shots is
            genuinely impressive. You've got a real talent that deserves recognition. Keep creating beautiful art! ✨"
          </p>

          <div className="flex items-center text-sm text-gray-600">
            <div className="flex items-center mr-4">
              <ThumbsUp className="h-4 w-4 mr-1" />
              <span>95</span>
            </div>
            <div className="flex items-center">
              <MessageSquare className="h-4 w-4 mr-1" />
              <span>12 replies</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
