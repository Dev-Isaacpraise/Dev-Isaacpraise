import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Clock, Coins, ArrowLeft } from "lucide-react"
import Link from "next/link"

// Mock data for a single bounty
const bounty = {
  id: 1,
  title: "Fix Critical Security Vulnerability",
  description:
    "We've identified a potential security vulnerability in our smart contract that needs immediate attention. The successful applicant will identify the issue, propose a fix, and implement it after approval.",
  reward: "200 AVAX",
  deadline: "2 days remaining",
  status: "Open",
  category: "Security",
  isUrgent: true,
  requirements: [
    "Strong understanding of Solidity and smart contract security",
    "Experience with security audits and vulnerability assessment",
    "Ability to implement fixes with minimal disruption",
    "Thorough documentation of the issue and solution",
    "Availability for follow-up questions and review",
  ],
}

export default function BountyDetailsPage({ params }: { params: { id: string } }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Link href="/bounties" className="flex items-center text-gray-600 hover:text-primary">
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to Bounties
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <CardTitle className="text-2xl">{bounty.title}</CardTitle>
                    {bounty.isUrgent && <Badge variant="destructive">Urgent</Badge>}
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">{bounty.category}</Badge>
                    <Badge
                      variant={bounty.status === "Open" ? "default" : "outline"}
                      className={bounty.status === "Open" ? "bg-green-500" : ""}
                    >
                      {bounty.status}
                    </Badge>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{bounty.deadline}</span>
                  </div>
                  <div className="flex items-center">
                    <Coins className="h-4 w-4 mr-1" />
                    <span>{bounty.reward}</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Description</h3>
                  <p className="text-gray-600">{bounty.description}</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Requirements</h3>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    {bounty.requirements.map((req, index) => (
                      <li key={index}>{req}</li>
                    ))}
                  </ul>
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
                    {bounty.reward}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium mb-2">Work Description</h3>
                  <Textarea placeholder="Describe your solution in detail..." className="min-h-[120px]" />
                </div>

                <div>
                  <h3 className="text-sm font-medium mb-2">Proof of Work Link</h3>
                  <Input placeholder="https://github.com/..." />
                  <p className="text-xs text-gray-500 mt-1">Add a link to your solution (GitHub, Google Docs, etc.)</p>
                </div>

                <Button className="w-full">Submit Solution</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

