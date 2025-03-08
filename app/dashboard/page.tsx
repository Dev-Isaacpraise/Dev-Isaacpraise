import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Clock, Coins, Plus, CheckCircle } from "lucide-react"
import Link from "next/link"

// Mock data for dashboard
const activeQuests = [
  {
    id: 1,
    title: "Build a DeFi Dashboard",
    reward: "50 AVAX",
    deadline: "3 days",
    progress: 60,
    category: "Development",
  },
  {
    id: 2,
    title: "Design AVAX Ecosystem Infographic",
    reward: "30 AVAX",
    deadline: "5 days",
    progress: 25,
    category: "Design",
  },
]

const completedQuests = [
  {
    id: 3,
    title: "Write Technical Documentation",
    reward: "40 AVAX",
    completedDate: "2 days ago",
    category: "Content",
  },
]

const activeBounties = [
  {
    id: 1,
    title: "Fix Critical Security Vulnerability",
    reward: "200 AVAX",
    deadline: "2 days",
    status: "In Progress",
    category: "Security",
  },
]

const activeJobs = [
  {
    id: 1,
    title: "Smart Contract Developer",
    compensation: "100-150 AVAX/week",
    duration: "3 months",
    startDate: "Started 2 weeks ago",
    category: "Development",
  },
]

export default function DashboardPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Builder's Dashboard</h1>
          <p className="text-gray-600">Manage your quests, bounties, and jobs</p>
        </div>
        <div className="flex gap-2 mt-4 md:mt-0">
          <Button asChild>
            <Link href="/dashboard/create">
              <Plus className="h-4 w-4 mr-2" />
              Create New
            </Link>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Total Earned</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <Coins className="h-5 w-5 mr-2 text-primary" />
              <span className="text-2xl font-bold">320 AVAX</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Active Quests</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2 text-primary" />
              <span className="text-2xl font-bold">2</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Active Bounties</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2 text-primary" />
              <span className="text-2xl font-bold">1</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Active Jobs</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2 text-primary" />
              <span className="text-2xl font-bold">1</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="quests" className="space-y-6">
        <TabsList>
          <TabsTrigger value="quests">Quests</TabsTrigger>
          <TabsTrigger value="bounties">Bounties</TabsTrigger>
          <TabsTrigger value="jobs">Jobs</TabsTrigger>
        </TabsList>

        <TabsContent value="quests" className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-4">Active Quests</h2>
            {activeQuests.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {activeQuests.map((quest) => (
                  <Card key={quest.id}>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-lg">{quest.title}</CardTitle>
                        <Badge variant="outline">{quest.category}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex justify-between text-sm text-gray-500">
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            <span>{quest.deadline} remaining</span>
                          </div>
                          <div className="flex items-center">
                            <Coins className="h-4 w-4 mr-1" />
                            <span>{quest.reward}</span>
                          </div>
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-1">
                            <span>Progress</span>
                            <span>{quest.progress}%</span>
                          </div>
                          <Progress value={quest.progress} className="h-2" />
                        </div>
                        <Button size="sm" className="w-full" asChild>
                          <Link href={`/quests/${quest.id}`}>Continue Quest</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <Card>
                <CardContent className="py-6 text-center text-gray-500">You don't have any active quests.</CardContent>
              </Card>
            )}
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Completed Quests</h2>
            {completedQuests.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {completedQuests.map((quest) => (
                  <Card key={quest.id}>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-lg">{quest.title}</CardTitle>
                        <Badge variant="outline">{quest.category}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex justify-between text-sm text-gray-500">
                          <div className="flex items-center">
                            <CheckCircle className="h-4 w-4 mr-1 text-green-500" />
                            <span>Completed {quest.completedDate}</span>
                          </div>
                          <div className="flex items-center">
                            <Coins className="h-4 w-4 mr-1" />
                            <span>{quest.reward}</span>
                          </div>
                        </div>
                        <Button size="sm" variant="outline" className="w-full" asChild>
                          <Link href={`/quests/${quest.id}`}>View Details</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <Card>
                <CardContent className="py-6 text-center text-gray-500">
                  You haven't completed any quests yet.
                </CardContent>
              </Card>
            )}
          </div>
        </TabsContent>

        <TabsContent value="bounties" className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-4">Active Bounties</h2>
            {activeBounties.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {activeBounties.map((bounty) => (
                  <Card key={bounty.id}>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-lg">{bounty.title}</CardTitle>
                        <Badge variant="outline">{bounty.category}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex justify-between text-sm text-gray-500">
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            <span>{bounty.deadline} remaining</span>
                          </div>
                          <div className="flex items-center">
                            <Coins className="h-4 w-4 mr-1" />
                            <span>{bounty.reward}</span>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <Badge variant="secondary" className="bg-amber-100 text-amber-800">
                            {bounty.status}
                          </Badge>
                        </div>
                        <Button size="sm" className="w-full" asChild>
                          <Link href={`/bounties/${bounty.id}`}>Continue Work</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <Card>
                <CardContent className="py-6 text-center text-gray-500">
                  You don't have any active bounties.
                </CardContent>
              </Card>
            )}
          </div>
        </TabsContent>

        <TabsContent value="jobs" className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-4">Active Jobs</h2>
            {activeJobs.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {activeJobs.map((job) => (
                  <Card key={job.id}>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-lg">{job.title}</CardTitle>
                        <Badge variant="outline">{job.category}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex justify-between text-sm text-gray-500">
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            <span>{job.startDate}</span>
                          </div>
                          <div className="flex items-center">
                            <Coins className="h-4 w-4 mr-1" />
                            <span>{job.compensation}</span>
                          </div>
                        </div>
                        <Button size="sm" className="w-full" asChild>
                          <Link href={`/jobs/${job.id}`}>View Details</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <Card>
                <CardContent className="py-6 text-center text-gray-500">You don't have any active jobs.</CardContent>
              </Card>
            )}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

