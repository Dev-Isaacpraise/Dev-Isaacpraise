"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Plus, Trash } from "lucide-react"
import Link from "next/link"

export default function CreatePage() {
  const [requirements, setRequirements] = useState<string[]>([""])

  const addRequirement = () => {
    setRequirements([...requirements, ""])
  }

  const updateRequirement = (index: number, value: string) => {
    const updatedRequirements = [...requirements]
    updatedRequirements[index] = value
    setRequirements(updatedRequirements)
  }

  const removeRequirement = (index: number) => {
    if (requirements.length > 1) {
      const updatedRequirements = [...requirements]
      updatedRequirements.splice(index, 1)
      setRequirements(updatedRequirements)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <Link href="/dashboard" className="flex items-center text-gray-600 hover:text-primary">
          <ArrowLeft className="h-4 w-4 mr-1" />
          Back to Dashboard
        </Link>
      </div>

      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Create New</h1>
        <p className="text-gray-600">Create a new quest, bounty, or job opportunity</p>
      </div>

      <Tabs defaultValue="quest" className="space-y-6">
        <TabsList className="grid grid-cols-3 w-full md:w-[400px]">
          <TabsTrigger value="quest">Quest</TabsTrigger>
          <TabsTrigger value="bounty">Bounty</TabsTrigger>
          <TabsTrigger value="job">Job</TabsTrigger>
        </TabsList>

        <TabsContent value="quest">
          <Card>
            <CardHeader>
              <CardTitle>Create a New Quest</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="quest-title">Quest Title</Label>
                <Input id="quest-title" placeholder="Enter a title for your quest" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="quest-description">Description</Label>
                <Textarea id="quest-description" placeholder="Describe the quest in detail" className="min-h-[120px]" />
              </div>

              <div className="space-y-2">
                <Label>Category</Label>
                <RadioGroup defaultValue="development" className="flex flex-wrap gap-4">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="development" id="development" />
                    <Label htmlFor="development">Development</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="design" id="design" />
                    <Label htmlFor="design">Design</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="content" id="content" />
                    <Label htmlFor="content">Content</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="security" id="security" />
                    <Label htmlFor="security">Security</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="other" id="other" />
                    <Label htmlFor="other">Other</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="quest-reward">Reward (AVAX)</Label>
                  <Input id="quest-reward" type="number" placeholder="50" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="quest-deadline">Deadline (days)</Label>
                  <Input id="quest-deadline" type="number" placeholder="7" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="quest-participants">Max Participants</Label>
                  <Input id="quest-participants" type="number" placeholder="50" />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <Label>Requirements</Label>
                  <Button type="button" variant="outline" size="sm" onClick={addRequirement} className="h-8">
                    <Plus className="h-4 w-4 mr-1" />
                    Add
                  </Button>
                </div>
                <div className="space-y-2">
                  {requirements.map((req, index) => (
                    <div key={index} className="flex gap-2">
                      <Input
                        value={req}
                        onChange={(e) => updateRequirement(index, e.target.value)}
                        placeholder={`Requirement ${index + 1}`}
                      />
                      <Button
                        type="button"
                        variant="outline"
                        size="icon"
                        onClick={() => removeRequirement(index)}
                        className="h-10 w-10 flex-shrink-0"
                        disabled={requirements.length === 1}
                      >
                        <Trash className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </div>

              <Button className="w-full">Create Quest</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="bounty">
          <Card>
            <CardHeader>
              <CardTitle>Create a New Bounty</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="bounty-title">Bounty Title</Label>
                <Input id="bounty-title" placeholder="Enter a title for your bounty" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="bounty-description">Description</Label>
                <Textarea
                  id="bounty-description"
                  placeholder="Describe the bounty in detail"
                  className="min-h-[120px]"
                />
              </div>

              <div className="space-y-2">
                <Label>Category</Label>
                <RadioGroup defaultValue="development" className="flex flex-wrap gap-4">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="development" id="b-development" />
                    <Label htmlFor="b-development">Development</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="design" id="b-design" />
                    <Label htmlFor="b-design">Design</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="content" id="b-content" />
                    <Label htmlFor="b-content">Content</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="security" id="b-security" />
                    <Label htmlFor="b-security">Security</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="other" id="b-other" />
                    <Label htmlFor="b-other">Other</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="bounty-reward">Reward (AVAX)</Label>
                  <Input id="bounty-reward" type="number" placeholder="100" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bounty-deadline">Deadline (days)</Label>
                  <Input id="bounty-deadline" type="number" placeholder="7" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bounty-urgent">Urgency</Label>
                  <RadioGroup defaultValue="normal" id="bounty-urgent">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="normal" id="normal" />
                      <Label htmlFor="normal">Normal</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="urgent" id="urgent" />
                      <Label htmlFor="urgent">Urgent</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <Label>Requirements</Label>
                  <Button type="button" variant="outline" size="sm" onClick={addRequirement} className="h-8">
                    <Plus className="h-4 w-4 mr-1" />
                    Add
                  </Button>
                </div>
                <div className="space-y-2">
                  {requirements.map((req, index) => (
                    <div key={index} className="flex gap-2">
                      <Input
                        value={req}
                        onChange={(e) => updateRequirement(index, e.target.value)}
                        placeholder={`Requirement ${index + 1}`}
                      />
                      <Button
                        type="button"
                        variant="outline"
                        size="icon"
                        onClick={() => removeRequirement(index)}
                        className="h-10 w-10 flex-shrink-0"
                        disabled={requirements.length === 1}
                      >
                        <Trash className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </div>

              <Button className="w-full">Create Bounty</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="job">
          <Card>
            <CardHeader>
              <CardTitle>Create a New Job</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="job-title">Job Title</Label>
                <Input id="job-title" placeholder="Enter a title for the job" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="job-description">Description</Label>
                <Textarea id="job-description" placeholder="Describe the job in detail" className="min-h-[120px]" />
              </div>

              <div className="space-y-2">
                <Label>Category</Label>
                <RadioGroup defaultValue="development" className="flex flex-wrap gap-4">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="development" id="j-development" />
                    <Label htmlFor="j-development">Development</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="design" id="j-design" />
                    <Label htmlFor="j-design">Design</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="content" id="j-content" />
                    <Label htmlFor="j-content">Content</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="security" id="j-security" />
                    <Label htmlFor="j-security">Security</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="marketing" id="j-marketing" />
                    <Label htmlFor="j-marketing">Marketing</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="job-compensation-min">Min Compensation (AVAX/week)</Label>
                  <Input id="job-compensation-min" type="number" placeholder="80" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="job-compensation-max">Max Compensation (AVAX/week)</Label>
                  <Input id="job-compensation-max" type="number" placeholder="120" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="job-duration">Duration</Label>
                  <Input id="job-duration" placeholder="3 months" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="job-type">Job Type</Label>
                  <RadioGroup defaultValue="full-time" id="job-type">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="full-time" id="full-time" />
                      <Label htmlFor="full-time">Full-time</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="part-time" id="part-time" />
                      <Label htmlFor="part-time">Part-time</Label>
                    </div>
                  </RadioGroup>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="job-remote">Remote Work</Label>
                  <RadioGroup defaultValue="remote" id="job-remote">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="remote" id="remote" />
                      <Label htmlFor="remote">Remote</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="on-site" id="on-site" />
                      <Label htmlFor="on-site">On-site</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <Label>Requirements</Label>
                  <Button type="button" variant="outline" size="sm" onClick={addRequirement} className="h-8">
                    <Plus className="h-4 w-4 mr-1" />
                    Add
                  </Button>
                </div>
                <div className="space-y-2">
                  {requirements.map((req, index) => (
                    <div key={index} className="flex gap-2">
                      <Input
                        value={req}
                        onChange={(e) => updateRequirement(index, e.target.value)}
                        placeholder={`Requirement ${index + 1}`}
                      />
                      <Button
                        type="button"
                        variant="outline"
                        size="icon"
                        onClick={() => removeRequirement(index)}
                        className="h-10 w-10 flex-shrink-0"
                        disabled={requirements.length === 1}
                      >
                        <Trash className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </div>

              <Button className="w-full">Create Job</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

