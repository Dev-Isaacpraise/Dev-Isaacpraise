import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Award, Zap } from "lucide-react"

export default function Hero() {
  return (
    <section className="py-12 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Complete Quests. <br />
            <span className="text-primary">Earn AVAX Rewards.</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-md">
            Join the AVAX ecosystem and earn rewards by completing quests, bounties, and jobs. Connect, build, and grow
            with Quest Nexus.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild>
              <Link href="/quests">
                Explore Quests <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/sign-up">Create Account</Link>
            </Button>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="relative">
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-8 shadow-lg">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-xl shadow-sm flex flex-col items-center text-center">
                  <Award className="h-10 w-10 text-primary mb-2" />
                  <h3 className="font-semibold">Complete Quests</h3>
                  <p className="text-sm text-gray-500">Earn rewards for your skills</p>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm flex flex-col items-center text-center">
                  <Zap className="h-10 w-10 text-primary mb-2" />
                  <h3 className="font-semibold">Claim Rewards</h3>
                  <p className="text-sm text-gray-500">Get AVAX tokens instantly</p>
                </div>
                <div className="col-span-2 bg-white p-4 rounded-xl shadow-sm flex flex-col items-center text-center">
                  <div className="flex items-center justify-center mb-2">
                    <span className="text-2xl font-bold text-primary">500+</span>
                  </div>
                  <h3 className="font-semibold">Active Quests</h3>
                  <p className="text-sm text-gray-500">Join the community today</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

