import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Coins, Filter, Search } from "lucide-react"
import Link from "next/link"
import { Input } from "@/components/ui/input"

// Mock data for jobs
const jobs = [
  {
    id: 1,
    title: "Smart Contract Developer",
    description: "Develop and maintain smart contracts for our DeFi platform",
    compensation: "100-150 AVAX/week",
    duration: "3 months",
    category: "Development",
    type: "Full-time",
    isRemote: true,
  },
  {
    id: 2,
    title: "UI/UX Designer",
    description: "Design intuitive interfaces for our AVAX-based applications",
    compensation: "80-120 AVAX/week",
    duration: "Ongoing",
    category: "Design",
    type: "Part-time",
    isRemote: true,
  },
  {
    id: 3,
    title: "Community Manager",
    description: "Grow and engage our community across social platforms",
    compensation: "70-90 AVAX/week",
    duration: "6 months",
    category: "Marketing",
    type: "Full-time",
    isRemote: true,
  },
  {
    id: 4,
    title: "Technical Writer",
    description: "Create documentation and tutorials for our protocol",
    compensation: "60-80 AVAX/week",
    duration: "Ongoing",
    category: "Content",
    type: "Part-time",
    isRemote: true,
  },
  {
    id: 5,
    title: "Blockchain Security Analyst",
    description: "Perform security audits and implement best practices",
    compensation: "120-180 AVAX/week",
    duration: "3 months",
    category: "Security",
    type: "Full-time",
    isRemote: false,
  },
  {
    id: 6,
    title: "Frontend Developer",
    description: "Build responsive web applications using React and Next.js",
    compensation: "90-130 AVAX/week",
    duration: "Ongoing",
    category: "Development",
    type: "Full-time",
    isRemote: true,
  },
]

export default function JobsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold mb-2">Job Opportunities</h1>
          <p className="text-gray-600">Long-term positions in the AVAX ecosystem</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
            <Input placeholder="Search jobs..." className="pl-8" />
          </div>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map((job) => (
          <Card key={job.id} className="quest-card overflow-hidden">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <CardTitle className="text-lg">{job.title}</CardTitle>
                <Badge variant={job.type === "Full-time" ? "default" : "secondary"}>{job.type}</Badge>
              </div>
              <div className="flex gap-2 mt-1">
                <Badge variant="outline">{job.category}</Badge>
                {job.isRemote && <Badge variant="outline">Remote</Badge>}
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">{job.description}</p>
              <div className="flex justify-between text-sm text-gray-500">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{job.duration}</span>
                </div>
                <div className="flex items-center">
                  <Coins className="h-4 w-4 mr-1" />
                  <span>{job.compensation}</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" asChild>
                <Link href={`/jobs/${job.id}`}>View Details</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

