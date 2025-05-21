import PageHeader from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, ThumbsUp, ThumbsDown } from "lucide-react"

export default function WtfMode() {
  return (
    <div className="max-w-4xl mx-auto">
      <PageHeader
        title="WTF Mode"
        description="Matchmaking with the most chaotic users on campus. Weird bios, funny pics, and unpredictable personalities."
        emoji="🤪"
      />

      <div className="mb-8 text-center">
        <Button className="bg-[#FF6F61] hover:bg-[#FF5E50] text-white btn-pulse text-lg px-8 py-6">
          <AlertTriangle className="h-5 w-5 mr-2" />
          Enter WTF Mode
        </Button>
        <p className="mt-2 text-sm text-gray-600">Warning: Proceed at your own risk. Things might get weird.</p>
      </div>

      <Card className="bg-[#FFC1CC] p-6 mb-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 bg-[#FF6F61] text-white px-3 py-1 rounded-bl-lg">Chaos Level: 95%</div>

        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-1/3 aspect-square bg-gray-200 rounded-lg overflow-hidden">
            <img
              src="/placeholder.svg?height=300&width=300"
              alt="Chaotic profile"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex-1">
            <h3 className="text-xl font-bold mb-1">Pickle Rick, 21</h3>
            <p className="text-sm mb-4">Quantum Physics • Probably in another dimension</p>

            <div className="mb-4 p-4 bg-white/50 rounded-lg">
              <p className="italic">
                "I'm not actually a student here, I'm three raccoons in a trenchcoat trying to steal your lunch. My
                hobbies include interpretive dance in the library and collecting vintage sporks. If you can't handle me
                at my weirdest, you don't deserve me at my slightly less weird."
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              <Badge className="bg-[#FF6F61]/20 text-[#FF6F61] hover:bg-[#FF6F61]/30">Conspiracy Theories</Badge>
              <Badge className="bg-[#FF6F61]/20 text-[#FF6F61] hover:bg-[#FF6F61]/30">Extreme Pickling</Badge>
              <Badge className="bg-[#FF6F61]/20 text-[#FF6F61] hover:bg-[#FF6F61]/30">Professional Napper</Badge>
              <Badge className="bg-[#FF6F61]/20 text-[#FF6F61] hover:bg-[#FF6F61]/30">Sock Collector</Badge>
            </div>

            <div className="flex gap-4">
              <Button variant="outline" className="flex-1 border-red-400 text-red-400 hover:bg-red-400/10">
                <ThumbsDown className="h-5 w-5 mr-2" />
                Too Weird
              </Button>
              <Button className="flex-1 bg-[#20C997] hover:bg-[#1DB386]">
                <ThumbsUp className="h-5 w-5 mr-2" />
                Weird Enough
              </Button>
            </div>
          </div>
        </div>
      </Card>

      <div className="grid md:grid-cols-3 gap-6">
        <Card className="p-6 glass-effect text-center">
          <div className="text-4xl mb-3">🧠</div>
          <h3 className="text-lg font-bold mb-2">Chaotic Compatibility</h3>
          <p className="text-sm">
            Our algorithm matches you with people who have the same level of chaotic energy as you.
          </p>
        </Card>

        <Card className="p-6 glass-effect text-center">
          <div className="text-4xl mb-3">🎭</div>
          <h3 className="text-lg font-bold mb-2">Unpredictable Bios</h3>
          <p className="text-sm">Find people with the strangest, most creative, and hilarious self-descriptions.</p>
        </Card>

        <Card className="p-6 glass-effect text-center">
          <div className="text-4xl mb-3">🌪️</div>
          <h3 className="text-lg font-bold mb-2">Chaotic Challenges</h3>
          <p className="text-sm">Complete bizarre dares together as an icebreaker for your chaotic relationship.</p>
        </Card>
      </div>
    </div>
  )
}
