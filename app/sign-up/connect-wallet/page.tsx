"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Wallet, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function ConnectWalletPage() {
  return (
    <div className="container mx-auto px-4 py-8 flex items-center justify-center min-h-[calc(100vh-4rem)]">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Connect Your Wallet</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="text-center">
              <p className="text-gray-600 mb-4">
                Connect your AVAX wallet to start earning rewards and participating in quests.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <Button size="lg" className="h-20 flex flex-col items-center justify-center">
                <div className="flex items-center">
                  <Wallet className="h-5 w-5 mr-2" />
                  <span>Connect Wallet</span>
                </div>
                <span className="text-xs mt-1 text-primary-foreground/80">Start earning AVAX rewards</span>
              </Button>

              <Button variant="outline" size="lg" className="h-20 flex flex-col items-center justify-center" asChild>
                <Link href="/dashboard">
                  <div className="flex items-center">
                    <span>Skip for Now</span>
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </div>
                  <span className="text-xs mt-1 text-muted-foreground">You can connect your wallet later</span>
                </Link>
              </Button>
            </div>

            <div className="text-center text-sm text-gray-500 pt-4">
              <p>
                By connecting your wallet, you agree to our{" "}
                <Link href="#" className="text-primary hover:underline">
                  Terms of Service
                </Link>
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

