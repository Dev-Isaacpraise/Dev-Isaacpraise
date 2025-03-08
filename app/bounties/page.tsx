import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Coins, Filter, Search } from "lucide-react"
import Link from "next/link"
import { Input } from "@/components/ui/input"

// Mock data for bounties
const bounties = [
  {
    id: 1,
    title: "Fix Critical Security Vulnerability",
    description: "Identify and patch a security vulnerability in our smart contract",
    reward: "200 AVAX",
    deadline: "2 days",
    status: "Open",
    category: "Security",
    isUrgent: true,
  },
  {
    id: 2,
    title: "Optimize Gas Usage",
    description: "Reduce gas costs for our core protocol functions",
    reward: "150 AVAX",
    deadline: "5 days",
    status: "Open",
    category: "Development",
    isUrgent: false,
  },
  {
    id: 3,
    title: "Create Marketing Materials",
    description: "Design promotional materials for our upcoming launch",
    reward: "100 AVAX",
    deadline: "7 days",
    status: "Open",
    category: "Design",
    isUrgent: false,
  },
  {
    id: 4,
    title: "Implement Token Bridge",
    description: "Build a bridge between AVAX and another blockchain",
    reward: "300 AVAX",
    deadline: "14 days",
    status: "In Progress",
    category: "Development",
    isUrgent: false,
  },
  {
    id: 5,
    title: "Create Technical Documentation",
    description: "Write comprehensive documentation for our API",
    reward: "80 AVAX",
    deadline: "10 days",
    status: "Open",
    category: "Content",
    isUrgent: false,
  },
  {
    id: 6,
    title: "Develop Analytics Dashboard",
    description: "Create a dashboard to track key protocol metrics",
    reward: "120 AVAX",
    deadline: "8 days",
    status: "Open",
    category: "Development",
    isUrgent: true,
  },
]

export default function BountiesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold mb-2">Bounties</h1>
          <p className="text-gray-600">One-time tasks with immediate rewards</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
            <Input placeholder="Search bounties..." className="pl-8" />
          </div>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {bounties.map((bounty) => (
          <Card key={bounty.id} className="quest-card overflow-hidden">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <CardTitle className="text-lg">{bounty.title}</CardTitle>
                <Badge
                  variant={bounty.isUrgent ? "destructive" : "outline"}
                  className={bounty.status === "In Progress" ? "bg-amber-500" : ""}
                >
                  {bounty.isUrgent ? "Urgent" : bounty.status}
                </Badge>
              </div>
              <Badge variant="outline" className="mt-1 w-fit">
                {bounty.category}
              </Badge>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">{bounty.description}</p>
              <div className="flex justify-between text-sm text-gray-500">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{bounty.deadline}</span>
                </div>
                <div className="flex items-center">
                  <Coins className="h-4 w-4 mr-1" />
                  <span>{bounty.reward}</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button
                className="w-full"
                variant={bounty.status === "In Progress" ? "outline" : "default"}
                disabled={bounty.status === "In Progress"}
                asChild
              >
                <Link href={`/bounties/${bounty.id}`}>
                  {bounty.status === "In Progress" ? "In Progress" : "View Details"}
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

