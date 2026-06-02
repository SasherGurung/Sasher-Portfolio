"use client"
import TiltedCard from "@/components/TiltedCard"

function HeroPage() {
  return (
    <section className="min-h-screen">
        <div className="grid grid-cols-2 border-white">
            <div>
                Hello
            </div>
            <div>
            <TiltedCard />
            </div>
        </div>
    </section>
  )
}

export default HeroPage