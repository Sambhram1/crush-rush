"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Heart, Sparkles, Coins } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="bg-[#FFFFFF] border-b border-[#FFC1CC]/30 sticky top-0 z-50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-[#FF6F61]" />
            <span className="font-bold text-xl">CrushRush</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <NavLinks />
            <div className="flex items-center ml-4 space-x-2">
              <Button className="bg-[#20C997] hover:bg-[#1DB386] text-white btn-pulse">
                <Sparkles className="mr-2 h-4 w-4" />
                Sign Up
              </Button>
              <div className="flex items-center bg-[#FF6F61]/20 px-3 py-1 rounded-full">
                <Coins className="h-4 w-4 text-[#FF6F61] mr-1" />
                <span className="text-sm font-medium">120</span>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden glass-effect p-4 absolute w-full">
          <div className="flex flex-col space-y-4 pb-4">
            <MobileNavLinks closeMenu={() => setIsOpen(false)} />
            <div className="flex items-center justify-between pt-4 border-t border-[#FFC1CC]/30">
              <Button className="bg-[#20C997] hover:bg-[#1DB386] text-white w-full btn-pulse">
                <Sparkles className="mr-2 h-4 w-4" />
                Sign Up
              </Button>
              <div className="flex items-center bg-[#FF6F61]/20 px-3 py-1 rounded-full ml-2">
                <Coins className="h-4 w-4 text-[#FF6F61] mr-1" />
                <span className="text-sm font-medium">120</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

function NavLinks() {
  return (
    <>
      <Link href="/confession-wall" className="text-sm font-medium hover:text-[#20C997] transition-colors">
        Confession Wall
      </Link>
      <Link href="/crush-roulette" className="text-sm font-medium hover:text-[#20C997] transition-colors">
        Crush Roulette
      </Link>
      <Link href="/leaderboards" className="text-sm font-medium hover:text-[#20C997] transition-colors">
        Leaderboards
      </Link>
      <Link href="/whos-watching-you" className="text-sm font-medium hover:text-[#20C997] transition-colors">
        Who's Watching
      </Link>
    </>
  )
}

function MobileNavLinks({ closeMenu }: { closeMenu: () => void }) {
  const links = [
    { href: "/confession-wall", label: "Confession Wall" },
    { href: "/crush-roulette", label: "Crush Roulette" },
    { href: "/dare-mode", label: "Dare Mode" },
    { href: "/whos-watching-you", label: "Who's Watching" },
    { href: "/leaderboards", label: "Leaderboards" },
    { href: "/dark-mode-fridays", label: "Dark Mode Fridays" },
    { href: "/wtf-mode", label: "WTF Mode" },
    { href: "/roast-or-toast", label: "Roast or Toast" },
    { href: "/viewers-pick", label: "Viewer's Pick" },
  ]

  return (
    <>
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="text-sm font-medium hover:text-[#20C997] transition-colors"
          onClick={closeMenu}
        >
          {link.label}
        </Link>
      ))}
    </>
  )
}
