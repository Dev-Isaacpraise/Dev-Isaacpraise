"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    xLink: "",
    additionalLink: "",
    skill: "",
    yearsOfExperience: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would handle form submission here
    window.location.href = "/sign-up/connect-wallet"
  }

  return (
    <div className="container mx-auto px-4 py-8 flex items-center justify-center min-h-[calc(100vh-4rem)]">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Sign Up for Quest Nexus</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                placeholder="Enter your username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Create a password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="xLink">X Link</Label>
              <Input
                id="xLink"
                placeholder="https://x.com/yourusername"
                value={formData.xLink}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="additionalLink">Additional Link (Optional)</Label>
              <Input
                id="additionalLink"
                placeholder="https://github.com/yourusername"
                value={formData.additionalLink}
                onChange={handleChange}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="skill">Skill</Label>
              <Select onValueChange={(value) => handleSelectChange("skill", value)} defaultValue={formData.skill}>
                <SelectTrigger>
                  <SelectValue placeholder="Select your primary skill" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="animator">Animator</SelectItem>
                  <SelectItem value="product-designer">Product Designer</SelectItem>
                  <SelectItem value="product-manager">Product Manager</SelectItem>
                  <SelectItem value="developer">Developer</SelectItem>
                  <SelectItem value="graphics-designer">Graphics Designer</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="yearsOfExperience">Years of Experience</Label>
              <Select
                onValueChange={(value) => handleSelectChange("yearsOfExperience", value)}
                defaultValue={formData.yearsOfExperience}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select years of experience" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0-1">Less than 1 year</SelectItem>
                  <SelectItem value="1-3">1-3 years</SelectItem>
                  <SelectItem value="3-5">3-5 years</SelectItem>
                  <SelectItem value="5-10">5-10 years</SelectItem>
                  <SelectItem value="10+">10+ years</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="pt-4">
              <Button type="submit" className="w-full">
                Sign Up
              </Button>
            </div>

            <div className="text-center text-sm text-gray-500 space-y-1 pt-2">
              <p>
                By signing up, you agree to our{" "}
                <Link href="#" className="text-primary hover:underline">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="#" className="text-primary hover:underline">
                  Privacy Policy
                </Link>
              </p>
              <p>
                Already have an account?{" "}
                <Link href="/sign-in" className="text-primary hover:underline">
                  Sign In
                </Link>
              </p>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

