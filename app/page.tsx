import Link from "next/link"
import { Heart, Sparkles } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <Sparkles className="absolute -top-6 -left-6 text-[#FF6F61] h-12 w-12 animate-pulse" />
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-[#20C997] to-[#FFC1CC] bg-clip-text text-transparent">
              CrushRush Playground
            </h1>
            <Heart className="absolute -bottom-6 -right-6 text-[#FF6F61] h-12 w-12 animate-bounce" />
          </div>
        </div>

        <p className="text-xl md:text-2xl mb-12">The playful campus social app where connections happen ✨</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureCard
            title="Confession Wall"
            description="Share your secrets anonymously"
            emoji="🤫"
            href="/confession-wall"
          />
          <FeatureCard
            title="Crush Roulette"
            description="Find your match based on interests"
            emoji="🎯"
            href="/crush-roulette"
          />
          <FeatureCard title="Dare Mode" description="Complete dares, earn rewards" emoji="🔥" href="/dare-mode" />
          <FeatureCard
            title="Who's Watching"
            description="Discover your secret admirers"
            emoji="👀"
            href="/whos-watching-you"
          />
          {/* <FeatureCard title="Leaderboards" description="See who's crushing it" emoji="🏆" href="/leaderboards" />
          <FeatureCard
            title="Dark Mode Fridays"
            description="Special night events"
            emoji="🌙"
            href="/dark-mode-fridays"
          /> */}
          <FeatureCard title="WTF Mode" description="Chaotic matchmaking" emoji="🤪" href="/wtf-mode" />
          <FeatureCard title="Roast or Toast" description="Give love or laughs" emoji="🔥" href="/roast-or-toast" />
          <FeatureCard
            title="Viewer's Pick"
            description="Who's the hottest on campus?"
            emoji="🥵"
            href="/viewers-pick"
          />
        </div>
      </div>
    </div>
  )
}

function FeatureCard({
  title,
  description,
  emoji,
  href,
}: {
  title: string
  description: string
  emoji: string
  href: string
}) {
  return (
    <Link href={href}>
      <div className="bg-[#FFC1CC] rounded-xl p-6 shadow-md card-hover h-full">
        <div className="text-4xl mb-3">{emoji}</div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-sm">{description}</p>
      </div>
    </Link>
  )
}
