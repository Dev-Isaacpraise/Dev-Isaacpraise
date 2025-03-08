import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Users, Coins } from "lucide-react"

// Mock data for featured quests
const featuredQuests = [
  {
    id: 1,
    title: "Build a DeFi Dashboard",
    description: "Create a dashboard to track DeFi protocols on AVAX",
    reward: "50 AVAX",
    deadline: "3 days",
    participants: "24/50",
    category: "Development",
    isNew: true,
  },
  {
    id: 2,
    title: "Design AVAX Ecosystem Infographic",
    description: "Create a visual guide to the AVAX ecosystem",
    reward: "30 AVAX",
    deadline: "5 days",
    participants: "12/20",
    category: "Design",
    isNew: false,
  },
  {
    id: 3,
    title: "Write Technical Documentation",
    description: "Create documentation for a new AVAX-based protocol",
    reward: "40 AVAX",
    deadline: "7 days",
    participants: "5/10",
    category: "Content",
    isNew: true,
  },
  {
    id: 4,
    title: "Smart Contract Security Audit",
    description: "Perform a security audit on a new smart contract",
    reward: "100 AVAX",
    deadline: "10 days",
    participants: "3/5",
    category: "Security",
    isNew: false,
  },
]

export default function FeaturedQuests() {
  return (
    <section className="py-12">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">Featured Quests</h2>
        <Button variant="outline" asChild>
          <Link href="/quests">View All Quests</Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {featuredQuests.map((quest) => (
          <Card key={quest.id} className="quest-card overflow-hidden">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <CardTitle className="text-lg">{quest.title}</CardTitle>
                {quest.isNew && (
                  <Badge variant="default" className="bg-primary">
                    New
                  </Badge>
                )}
              </div>
              <Badge variant="outline" className="mt-1 w-fit">
                {quest.category}
              </Badge>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">{quest.description}</p>
              <div className="flex justify-between text-sm text-gray-500">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{quest.deadline}</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-4 w-4 mr-1" />
                  <span>{quest.participants}</span>
                </div>
                <div className="flex items-center">
                  <Coins className="h-4 w-4 mr-1" />
                  <span>{quest.reward}</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" asChild>
                <Link href={`/quests/${quest.id}`}>View Details</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}

