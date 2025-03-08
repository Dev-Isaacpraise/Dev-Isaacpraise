import Hero from "@/components/home/hero"
import FeaturedQuests from "@/components/home/featured-quests"
import CommunityFeed from "@/components/home/community-feed"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Hero />
      <FeaturedQuests />
      <CommunityFeed />
    </div>
  )
}

