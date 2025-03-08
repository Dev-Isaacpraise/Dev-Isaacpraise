import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Clock, Users, Coins, CheckCircle, ArrowLeft } from "lucide-react"
import Link from "next/link"

// Mock data for a single quest
const quest = {
  id: 1,
  title: "Build a DeFi Dashboard",
  description:
    "Create a comprehensive dashboard to track DeFi protocols on AVAX. The dashboard should include key metrics such as TVL, APY, and user statistics.",
  reward: "50 AVAX",
  deadline: "3 days remaining",
  participants: "24/50",
  category: "Development",
  isNew: true,
  requirements: [
    "Dashboard must track at least 5 major DeFi protocols on AVAX",
    "Include data visualization with charts and graphs",
    "Implement responsive design for mobile and desktop",
    "Add wallet connection functionality",
    "Deploy to a public URL for testing",
  ],
  progress: 60,
  milestones: [
    { title: "Project Setup", completed: true },
    { title: "UI Design", completed: true },
    { title: "Data Integration", completed: true },
    { title: "Testing", completed: false },
    { title: "Deployment", completed: false },
  ],
}

export default function QuestDetailsPage({ params }: { params: { id: string } }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Link href="/quests" className="flex items-center text-gray-600 hover:text-primary">
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to Quests
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <CardTitle className="text-2xl">{quest.title}</CardTitle>
                    {quest.isNew && (
                      <Badge variant="default" className="bg-primary">
                        New
                      </Badge>
                    )}
                  </div>
                  <Badge variant="outline">{quest.category}</Badge>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-500">
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
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Description</h3>
                  <p className="text-gray-600">{quest.description}</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Requirements</h3>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    {quest.requirements.map((req, index) => (
                      <li key={index}>{req}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Progress</h3>
                  <Progress value={quest.progress} className="h-2 mb-2" />
                  <p className="text-sm text-gray-500 mb-4">{quest.progress}% Complete</p>

                  <div className="space-y-2">
                    {quest.milestones.map((milestone, index) => (
                      <div key={index} className="flex items-center">
                        <div
                          className={`flex-shrink-0 h-5 w-5 mr-2 ${
                            milestone.completed ? "text-green-500" : "text-gray-300"
                          }`}
                        >
                          <CheckCircle className="h-5 w-5" />
                        </div>
                        <span className={`${milestone.completed ? "text-gray-700" : "text-gray-400"}`}>
                          {milestone.title}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Submit Proof of Work</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium mb-2">Reward</h3>
                  <div className="flex items-center text-lg font-bold text-primary">
                    <Coins className="h-5 w-5 mr-2" />
                    {quest.reward}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium mb-2">Work Description</h3>
                  <Textarea placeholder="Describe the work you've completed..." className="min-h-[120px]" />
                </div>

                <div>
                  <h3 className="text-sm font-medium mb-2">Proof of Activity Link</h3>
                  <Input placeholder="https://docs.google.com/..." />
                  <p className="text-xs text-gray-500 mt-1">Add a link to your work (Google Sheets, GitHub, etc.)</p>
                </div>

                <Button className="w-full" disabled={quest.progress < 100}>
                  {quest.progress < 100 ? "Complete All Milestones" : "Claim Reward"}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

