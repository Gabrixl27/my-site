import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Users, Clock, Star, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Home() {
  const huntTiers = [
    {
      name: "Explorer",
      fee: 5,
      prize: 50,
      color: "bg-green-500",
      description: "Perfect for beginners",
      duration: "2-3 hours",
      participants: "12 active",
    },
    {
      name: "Adventurer",
      fee: 10,
      prize: 100,
      color: "bg-orange-500",
      description: "For seasoned hunters",
      duration: "3-4 hours",
      participants: "8 active",
    },
    {
      name: "Legend",
      fee: 50,
      prize: 500,
      color: "bg-purple-500",
      description: "Ultimate challenge",
      duration: "4-6 hours",
      participants: "3 active",
    },
  ]

  const featuredHunts = [
    {
      id: 1,
      title: "Downtown Discovery",
      tier: "Explorer",
      location: "City Center",
      participants: 15,
      timeLeft: "2 days",
      difficulty: 3,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 2,
      title: "Historic Quarter Quest",
      tier: "Adventurer",
      location: "Old Town",
      participants: 8,
      timeLeft: "5 hours",
      difficulty: 4,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 3,
      title: "City Legends Challenge",
      tier: "Legend",
      location: "Citywide",
      participants: 3,
      timeLeft: "1 day",
      difficulty: 5,
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-purple-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-purple-500 rounded-lg flex items-center justify-center">
              <MapPin className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold">CityHunt</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/hunts" className="text-gray-600 hover:text-gray-900">
              Browse Hunts
            </Link>
            <Link href="/leaderboard" className="text-gray-600 hover:text-gray-900">
              Leaderboard
            </Link>
            <Link href="/how-it-works" className="text-gray-600 hover:text-gray-900">
              How It Works
            </Link>
          </nav>
          <div className="flex items-center space-x-3">
            <Button variant="outline" className="bg-white text-gray-700">
              Sign In
            </Button>
            <Button className="bg-gradient-to-r from-orange-500 to-purple-500 text-white">Get Started</Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-purple-600 bg-clip-text text-transparent">
              City-Wide Scavenger Hunts Are Back!
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Explore your city like never before. Join thrilling scavenger hunts, compete with others, and win real
              prizes while discovering hidden gems in your neighborhood.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-gradient-to-r from-orange-500 to-purple-500 text-white px-8">
                Start Hunting Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="bg-white text-gray-700">
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Hunt Tiers */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Choose Your Adventure Level</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Different entry fees, different prizes. Pick the challenge that matches your skill level and budget.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {huntTiers.map((tier, index) => (
              <Card
                key={index}
                className="relative overflow-hidden border-2 hover:border-orange-200 transition-all duration-300 hover:shadow-lg"
              >
                <div className={`h-2 ${tier.color}`} />
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-bold">{tier.name}</CardTitle>
                  <CardDescription className="text-gray-600">{tier.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-gray-900">${tier.fee}</div>
                    <div className="text-sm text-gray-500">Entry Fee</div>
                  </div>
                  <div className="py-4 border-t border-b border-gray-100">
                    <div className="text-2xl font-bold text-green-600">${tier.prize}</div>
                    <div className="text-sm text-gray-500">Prize Pool</div>
                  </div>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center justify-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{tier.duration}</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <Users className="w-4 h-4" />
                      <span>{tier.participants}</span>
                    </div>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-orange-500 to-purple-500 text-white">
                    Join Hunt
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Hunts */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Active Hunts Near You</h2>
            <p className="text-gray-600">Join these exciting hunts happening right now in your city</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredHunts.map((hunt) => (
              <Card key={hunt.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-gradient-to-br from-orange-100 to-purple-100 flex items-center justify-center">
                  <MapPin className="w-12 h-12 text-orange-500" />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="bg-orange-100 text-orange-700">
                      {hunt.tier}
                    </Badge>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${i < hunt.difficulty ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                        />
                      ))}
                    </div>
                  </div>
                  <h3 className="font-bold text-lg mb-2">{hunt.title}</h3>
                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4" />
                      <span>{hunt.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4" />
                      <span>{hunt.participants} participants</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{hunt.timeLeft} left</span>
                    </div>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-orange-500 to-purple-500 text-white">
                    Join Hunt
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How CityHunt Works</h2>
            <p className="text-gray-600">Get started in just a few simple steps</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { step: 1, title: "Choose Hunt", desc: "Pick your adventure level and pay entry fee" },
              { step: 2, title: "Get Clues", desc: "Receive location-based clues on your phone" },
              { step: 3, title: "Explore City", desc: "Hunt for items and complete challenges" },
              { step: 4, title: "Win Prizes", desc: "Complete the hunt and claim your reward" },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-orange-500 to-purple-500 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Adventure?</h2>
          <p className="text-xl mb-8 opacity-90">Join thousands of hunters exploring the city and winning prizes</p>
          <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
            Create Account - It's Free!
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">CityHunt</span>
              </div>
              <p className="text-gray-400">Bringing scavenger hunts back to life, one city at a time.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/hunts">Browse Hunts</Link>
                </li>
                <li>
                  <Link href="/create">Create Hunt</Link>
                </li>
                <li>
                  <Link href="/leaderboard">Leaderboard</Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/help">Help Center</Link>
                </li>
                <li>
                  <Link href="/contact">Contact Us</Link>
                </li>
                <li>
                  <Link href="/safety">Safety Guidelines</Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/terms">Terms of Service</Link>
                </li>
                <li>
                  <Link href="/privacy">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/rules">Hunt Rules</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 CityHunt. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}