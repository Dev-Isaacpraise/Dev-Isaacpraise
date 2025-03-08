import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Bell, MessageSquare, ThumbsUp } from "lucide-react"

// Mock data for community feed
const communityUpdates = [
  {
    id: 1,
    author: {
      name: "Quest Nexus Team",
      avatar: "/placeholder.svg?height=40&width=40",
      role: "Admin",
    },
    title: "New Quests Added",
    content:
      "We've just added 10 new quests with a total reward pool of 500 AVAX! Check them out in the Featured Quests section.",
    timestamp: "2 hours ago",
    likes: 24,
    comments: 5,
    type: "announcement",
  },
  {
    id: 2,
    author: {
      name: "AVAX Foundation",
      avatar: "/placeholder.svg?height=40&width=40",
      role: "Partner",
    },
    title: "Hackathon Announcement",
    content: "Join our upcoming hackathon with a prize pool of 10,000 AVAX. Registration opens next week!",
    timestamp: "1 day ago",
    likes: 156,
    comments: 32,
    type: "event",
  },
  {
    id: 3,
    author: {
      name: "Quest Nexus Team",
      avatar: "/placeholder.svg?height=40&width=40",
      role: "Admin",
    },
    title: "Platform Update",
    content: "We've improved the quest submission process and added new features to the builder's dashboard.",
    timestamp: "3 days ago",
    likes: 87,
    comments: 14,
    type: "update",
  },
]

export default function CommunityFeed() {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-8">Community Updates</h2>

      <div className="space-y-6">
        {communityUpdates.map((update) => (
          <Card key={update.id}>
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div className="flex items-center">
                  <Avatar className="h-10 w-10 mr-3">
                    <AvatarImage src={update.author.avatar} alt={update.author.name} />
                    <AvatarFallback>{update.author.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex items-center">
                      <CardTitle className="text-lg mr-2">{update.author.name}</CardTitle>
                      <Badge variant="outline" className="text-xs">
                        {update.author.role}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-500">{update.timestamp}</p>
                  </div>
                </div>
                <Badge
                  variant={
                    update.type === "announcement" ? "default" : update.type === "event" ? "secondary" : "outline"
                  }
                  className={update.type === "announcement" ? "bg-primary" : ""}
                >
                  {update.type === "announcement" && <Bell className="h-3 w-3 mr-1" />}
                  {update.type.charAt(0).toUpperCase() + update.type.slice(1)}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <h3 className="font-semibold text-lg mb-2">{update.title}</h3>
              <p className="text-gray-600 mb-4">{update.content}</p>
              <div className="flex items-center text-sm text-gray-500 space-x-4">
                <div className="flex items-center">
                  <ThumbsUp className="h-4 w-4 mr-1" />
                  <span>{update.likes}</span>
                </div>
                <div className="flex items-center">
                  <MessageSquare className="h-4 w-4 mr-1" />
                  <span>{update.comments}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

