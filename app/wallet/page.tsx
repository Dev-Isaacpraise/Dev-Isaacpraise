"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowDown, ArrowUp, Copy, QrCode, Wallet } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

// Mock wallet data
const walletData = {
  address: "0x1234...5678",
  balance: "1,250.45 AVAX",
  transactions: [
    {
      id: 1,
      type: "received",
      amount: "50 AVAX",
      from: "0xabcd...efgh",
      to: "0x1234...5678",
      date: "Today, 2:30 PM",
      status: "completed",
    },
    {
      id: 2,
      type: "sent",
      amount: "25 AVAX",
      from: "0x1234...5678",
      to: "0xijkl...mnop",
      date: "Yesterday, 10:15 AM",
      status: "completed",
    },
    {
      id: 3,
      type: "received",
      amount: "100 AVAX",
      from: "Quest: Build a DeFi Dashboard",
      to: "0x1234...5678",
      date: "Mar 5, 2025",
      status: "completed",
    },
    {
      id: 4,
      type: "sent",
      amount: "10 AVAX",
      from: "0x1234...5678",
      to: "0xqrst...uvwx",
      date: "Mar 3, 2025",
      status: "completed",
    },
  ],
}

export default function WalletPage() {
  const [isConnected, setIsConnected] = useState(false)
  const { toast } = useToast()

  const handleConnect = () => {
    setIsConnected(true)
    toast({
      title: "Wallet Connected",
      description: "Your AVAX wallet has been successfully connected.",
    })
  }

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text)
    toast({
      title: "Copied to clipboard",
      description: "Address copied to clipboard",
    })
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">AVAX Wallet</h1>

      {!isConnected ? (
        <Card className="max-w-md mx-auto">
          <CardHeader>
            <CardTitle className="text-center">Connect Your Wallet</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex justify-center">
              <Wallet className="h-16 w-16 text-primary" />
            </div>
            <p className="text-center text-gray-600">
              Connect your AVAX wallet to track your balance, view transaction history, and send/receive tokens.
            </p>
            <Button className="w-full" onClick={handleConnect}>
              Connect Wallet
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Wallet Overview</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-1">Wallet Address</h3>
                  <div className="flex items-center justify-between bg-gray-50 p-2 rounded-md">
                    <span className="font-mono">{walletData.address}</span>
                    <div className="flex gap-1">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => handleCopy(walletData.address)}
                      >
                        <Copy className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <QrCode className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-1">Balance</h3>
                  <div className="text-3xl font-bold text-primary">{walletData.balance}</div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <Button className="w-full">
                    <ArrowDown className="h-4 w-4 mr-2" />
                    Receive
                  </Button>
                  <Button className="w-full">
                    <ArrowUp className="h-4 w-4 mr-2" />
                    Send
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-2">
            <Tabs defaultValue="transactions" className="w-full">
              <TabsList className="grid grid-cols-2 w-full">
                <TabsTrigger value="transactions">Transaction History</TabsTrigger>
                <TabsTrigger value="send">Send AVAX</TabsTrigger>
              </TabsList>

              <TabsContent value="transactions" className="mt-4">
                <Card>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      {walletData.transactions.map((tx) => (
                        <div key={tx.id} className="flex items-center justify-between p-3 border-b last:border-0">
                          <div className="flex items-center">
                            <div
                              className={`h-8 w-8 rounded-full flex items-center justify-center mr-3 ${
                                tx.type === "received" ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"
                              }`}
                            >
                              {tx.type === "received" ? (
                                <ArrowDown className="h-4 w-4" />
                              ) : (
                                <ArrowUp className="h-4 w-4" />
                              )}
                            </div>
                            <div>
                              <div className="font-medium">
                                {tx.type === "received" ? "Received" : "Sent"} {tx.amount}
                              </div>
                              <div className="text-sm text-gray-500">
                                {tx.type === "received" ? "From: " : "To: "}
                                {tx.type === "received" ? tx.from : tx.to}
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div
                              className={`font-medium ${tx.type === "received" ? "text-green-600" : "text-red-600"}`}
                            >
                              {tx.type === "received" ? "+" : "-"}
                              {tx.amount}
                            </div>
                            <div className="text-sm text-gray-500">{tx.date}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="send" className="mt-4">
                <Card>
                  <CardContent className="p-6 space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="recipient">Recipient Address</Label>
                      <Input id="recipient" placeholder="0x..." />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="amount">Amount (AVAX)</Label>
                      <Input id="amount" type="number" placeholder="0.0" />
                    </div>
                    <div className="pt-2">
                      <Button className="w-full">Send AVAX</Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      )}
    </div>
  )
}

