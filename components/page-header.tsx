interface PageHeaderProps {
  title: string
  description: string
  emoji: string
}

export default function PageHeader({ title, description, emoji }: PageHeaderProps) {
  return (
    <div className="mb-8 text-center">
      <div className="text-5xl mb-4">{emoji}</div>
      <h1 className="text-3xl md:text-4xl font-bold mb-2">{title}</h1>
      <p className="text-lg text-gray-700 max-w-2xl mx-auto">{description}</p>
    </div>
  )
}
