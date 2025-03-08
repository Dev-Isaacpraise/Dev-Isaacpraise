import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Clock, Coins, ArrowLeft } from "lucide-react"
import Link from "next/link"

// Mock data for a single job
const job = {
  id: 1,
  title: "Smart Contract Developer",
  description:
    "We're looking for an experienced Smart Contract Developer to join our team and help build the future of DeFi on AVAX. You'll be responsible for developing and maintaining smart contracts for our platform, ensuring security and efficiency.",
  compensation: "100-150 AVAX/week",
  duration: "3 months (with possibility of extension)",
  category: "Development",
  type: "Full-time",
  isRemote: true,
  requirements: [
    "3+ years of experience with Solidity and smart contract development",
    "Strong understanding of blockchain technology and DeFi protocols",
    "Experience with testing frameworks like Hardhat and Truffle",
    "Knowledge of security best practices",
    "Ability to work independently and as part of a team",
  ],
  responsibilities: [
    "Design and implement smart contracts for our DeFi platform",
    "Audit and optimize existing contracts for gas efficiency",
    "Collaborate with the frontend team to integrate contracts",
    "Stay up-to-date with the latest security practices",
    "Document code and create technical specifications",
  ],
}

export default function JobDetailsPage({ params }: { params: { id: string } }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Link href="/jobs" className="flex items-center text-gray-600 hover:text-primary">
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to Jobs
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <CardTitle className="text-2xl">{job.title}</CardTitle>
                    <Badge variant={job.type === "Full-time" ? "default" : "secondary"}>{job.type}</Badge>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">{job.category}</Badge>
                    {job.isRemote && <Badge variant="outline">Remote</Badge>}
                  </div>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{job.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <Coins className="h-4 w-4 mr-1" />
                    <span>{job.compensation}</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Description</h3>
                  <p className="text-gray-600">{job.description}</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Requirements</h3>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    {job.requirements.map((req, index) => (
                      <li key={index}>{req}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Responsibilities</h3>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    {job.responsibilities.map((resp, index) => (
                      <li key={index}>{resp}</li>
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
              <CardTitle>Apply for this Position</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium mb-2">Compensation</h3>
                  <div className="flex items-center text-lg font-bold text-primary">
                    <Coins className="h-5 w-5 mr-2" />
                    {job.compensation}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium mb-2">Cover Letter</h3>
                  <Textarea placeholder="Tell us why you're a good fit..." className="min-h-[120px]" />
                </div>

                <div>
                  <h3 className="text-sm font-medium mb-2">Portfolio/Resume Link</h3>
                  <Input placeholder="https://github.com/..." />
                  <p className="text-xs text-gray-500 mt-1">Add a link to your portfolio, GitHub, or resume</p>
                </div>

                <Button className="w-full">Submit Application</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

