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
  const [isSubmitting, setIsSubmitting] = useState(false)

  const fetchConfessions = async () => {
    const { data, error } = await supabase
      .from("confessions")
      .select("*")
      .order("created_at", { ascending: false })
    
    if (!error) setConfessions(data || [])
  }

  const postConfession = async () => {
    if (!content.trim()) return
    
    setIsSubmitting(true)
    const { error } = await supabase.from("confessions").insert({ content })
    
    if (!error) {
      setContent("")
    } else {
      console.error("Error posting confession:", error)
      alert("Failed to post confession. Please try again.")
    }
    
    setIsSubmitting(false)
  }

  useEffect(() => {
    // Initial fetch
    fetchConfessions()
    
    // Set up real-time subscription
    const channel = supabase
      .channel('public:confessions')
      .on(
        'postgres_changes',
        {
          event: '*', // Listen for all events (insert, update, delete)
          schema: 'public',
          table: 'confessions',
        },
        () => {
          fetchConfessions()
        }
      )
      .subscribe()
    
    // Clean up subscription when component unmounts
    return () => {
      supabase.removeChannel(channel)
    }
  }, [])

  const handleGuess = (confessionId: string) => {
    // Implement guessing functionality here
    console.log(`Guessing for confession: ${confessionId}`)
    alert("Guessing functionality to be implemented!")
  }

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
            <Button 
              className="bg-[#20C997] hover:bg-[#1DB386]" 
              onClick={postConfession}
              disabled={isSubmitting || !content.trim()}
            >
              <Send className="h-4 w-4 mr-2" />
              {isSubmitting ? 'Posting...' : 'Post Confession'}
            </Button>
          </div>
        </Card>
      </div>
      
      <div className="space-y-6">
        <h2 className="text-2xl font-bold mb-4">Recent Confessions</h2>
        
        {confessions.length === 0 ? (
          <Card className="p-6 bg-white/70 text-center text-gray-500">
            No confessions yet. Be the first to share!
          </Card>
        ) : (
          confessions.map((confession) => (
            <Card key={confession.id} className="p-6 bg-white/70 glass-effect">
              <p className="mb-4 text-lg">{confession.content}</p>
              <div className="flex justify-between items-center">
                <div className="text-sm text-gray-600">
                  {new Date(confession.created_at).toLocaleString()}
                </div>
                <Button 
                  variant="outline" 
                  className="border-[#20C997] text-[#20C997] hover:bg-[#20C997]/10"
                  onClick={() => handleGuess(confession.id)}
                >
                  <Coins className="h-4 w-4 mr-2" />
                  Guess for 10 coins
                </Button>
              </div>
            </Card>
          ))
        )}
      </div>
    </div>
  )
}