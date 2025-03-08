"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Pencil, Github, Twitter, Wallet, Settings, LogOut } from "lucide-react"
import Link from "next/link"

// Mock profile data
const profileData = {
  username: "AvaxBuilder",
  avatar: "/placeholder.svg?height=100&width=100",
  bio: "Blockchain developer specializing in DeFi applications on AVAX. Passionate about building the future of finance.",
  joinedDate: "March 2025",
  skill: "Developer",
  yearsOfExperience: "5-10 years",
  xLink: "https://x.com/avaxbuilder",
  githubLink: "https://github.com/avaxbuilder",
  walletAddress: "0x1234...5678",
  stats: {
    questsCompleted: 12,
    bountiesCompleted: 5,
    jobsCompleted: 2,
    totalEarned: "1,250 AVAX",
  },
  activities: [
    {
      id: 1,
      type: "quest",
      title: "Completed: Build a DeFi Dashboard",
      date: "2 days ago",
      reward: "50 AVAX",
    },
    {
      id: 2,
      type: "bounty",
      title: "Completed: Fix Critical Security Vulnerability",
      date: "1 week ago",
      reward: "200 AVAX",
    },
    {
      id: 3,
      type: "quest",
      title: "Started: Design AVAX Ecosystem Infographic",
      date: "3 days ago",
      reward: "In progress",
    },
  ],
}

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <div className="relative">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src={profileData.avatar} alt={profileData.username} />
                    <AvatarFallback>{profileData.username.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <Button
                    variant="outline"
                    size="icon"
                    className="absolute bottom-0 right-0 h-8 w-8 rounded-full bg-background"
                  >
                    <Pencil className="h-4 w-4" />
                  </Button>
                </div>

                <h2 className="text-2xl font-bold mt-4">{profileData.username}</h2>
                <div className="flex items-center mt-1 text-sm text-gray-500">
                  <span>Joined {profileData.joinedDate}</span>
                </div>

                <div className="flex gap-2 mt-4">
                  <Badge variant="outline">{profileData.skill}</Badge>
                  <Badge variant="outline">{profileData.yearsOfExperience}</Badge>
                </div>

                <div className="w-full border-t my-6"></div>

                <div className="w-full space-y-3">
                  <div className="flex items-center">
                    <Twitter className="h-4 w-4 mr-2 text-gray-500" />
                    <a
                      href={profileData.xLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      @avaxbuilder
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Github className="h-4 w-4 mr-2 text-gray-500" />
                    <a
                      href={profileData.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      github.com/avaxbuilder
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Wallet className="h-4 w-4 mr-2 text-gray-500" />
                    <span className="font-mono text-sm">{profileData.walletAddress}</span>
                  </div>
                </div>

                <div className="w-full border-t my-6"></div>

                <div className="w-full space-y-2">
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <Link href="/settings">
                      <Settings className="h-4 w-4 mr-2" />
                      Settings
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full justify-start text-red-500">
                    <LogOut className="h-4 w-4 mr-2" />
                    Log Out
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-2">
          <Card className="mb-8">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>About</CardTitle>
                <Button variant="ghost" size="sm" onClick={() => setIsEditing(!isEditing)}>
                  <Pencil className="h-4 w-4 mr-2" />
                  Edit
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{profileData.bio}</p>
            </CardContent>
          </Card>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="text-2xl font-bold">{profileData.stats.questsCompleted}</div>
                  <div className="text-sm text-gray-500">Quests Completed</div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="text-2xl font-bold">{profileData.stats.bountiesCompleted}</div>
                  <div className="text-sm text-gray-500">Bounties Completed</div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="text-2xl font-bold">{profileData.stats.jobsCompleted}</div>
                  <div className="text-sm text-gray-500">Jobs Completed</div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{profileData.stats.totalEarned}</div>
                  <div className="text-sm text-gray-500">Total Earned</div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {profileData.activities.map((activity) => (
                  <div key={activity.id} className="flex items-start border-b last:border-0 pb-4 last:pb-0">
                    <div className="flex-1">
                      <div className="flex items-center">
                        <Badge variant="outline" className="mr-2">
                          {activity.type.charAt(0).toUpperCase() + activity.type.slice(1)}
                        </Badge>
                        <span className="font-medium">{activity.title}</span>
                      </div>
                      <div className="flex justify-between mt-1">
                        <span className="text-sm text-gray-500">{activity.date}</span>
                        <span className="text-sm font-medium text-primary">{activity.reward}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

