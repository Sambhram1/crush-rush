import Link from "next/link"

interface FeatureCardProps {
  title: string
  description: string
  emoji: string
  href: string
  className?: string
}

export default function FeatureCard({ title, description, emoji, href, className = "" }: FeatureCardProps) {
  return (
    <Link href={href}>
      <div className={`bg-[#FFC1CC] rounded-xl p-6 shadow-md card-hover h-full ${className}`}>
        <div className="text-4xl mb-3">{emoji}</div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-sm">{description}</p>
      </div>
    </Link>
  )
}
