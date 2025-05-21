"use client"

import { useEffect, useState } from "react"
import { createClient } from "@supabase/supabase-js"
import PageHeader from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Send, Lock, Coins } from "lucide-react"

// Create Supabase client inline
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export default function ConfessionWall() {
  const [content, setContent] = useState("")
  const [confessions, setConfessions] = useState<any[]>([])

  const fetchConfessions = async () => {
    const { data, error } = await supabase
      .from("confessions")
      .select("*")
      .order("created_at", { ascending: false })
    if (!error) setConfessions(data || [])
  }

  const postConfession = async () => {
    if (!content.trim()) return
    const { error } = await supabase.from("confessions").insert({ content })
    if (!error) {
      setContent("")
      fetchConfessions()
    }
  }

  useEffect(() => {
    fetchConfessions()
  }, [])

  return (
    <div className="max-w-4xl mx-auto">
      <PageHeader
        title="Confession Wall"
        description="Share your secrets anonymously. Earn coins when others guess correctly who wrote what."
        emoji="🤫"
      />

      <div className="mb-8">
        <Card className="bg-[#FFC1CC] p-6">
          <h3 className="text-lg font-semibold mb-4">Post a Confession</h3>
          <Textarea
            placeholder="Share your secret crush or confession..."
            className="mb-4 bg-white/70"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Lock className="h-4 w-4 mr-2 text-[#FF6F61]" />
              <span className="text-sm">100% Anonymous</span>
            </div>
            <Button className="bg-[#20C997] hover:bg-[#1DB386]" onClick={postConfession}>
              <Send className="h-4 w-4 mr-2" />
              Post Confession
            </Button>
          </div>
        </Card>
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-bold mb-4">Recent Confessions</h2>
        {confessions.map((confession) => (
          <Card key={confession.id} className="p-6 bg-white/70 glass-effect">
            <p className="mb-4 text-lg">{confession.content}</p>
            <div className="flex justify-between items-center">
              <div className="text-sm text-gray-600">
                {new Date(confession.created_at).toLocaleString()}
              </div>
              <Button variant="outline" className="border-[#20C997] text-[#20C997] hover:bg-[#20C997]/10">
                <Coins className="h-4 w-4 mr-2" />
                Guess for 10 coins
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
