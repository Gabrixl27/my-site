import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Trophy, Users, Clock, Star, Search } from "lucide-react"
import Link from "next/link"

export default function Hunts() {
  const hunts = [
    {
      id: 1,
      title: "Downtown Discovery",
      tier: "Explorer",
      fee: 5,
      prize: 50,
      location: "City Center",
      participants: 15,
      maxParticipants: 20,
      timeLeft: "2 days",
      difficulty: 3,
      description: "Explore the heart of the city and discover hidden gems in downtown.",
      status: "active",
    },
    {
      id: 2,
      title: "Historic Quarter Quest",
      tier: "Adventurer",
      fee: 10,
      prize: 100,
      location: "Old Town",
      participants: 8,
      maxParticipants: 15,
      timeLeft: "5 hours",
      difficulty: 4,
      description: "Journey through historic landmarks and uncover the city's past.",
      status: "active",
    },
    {
      id: 3,
      title: "City Legends Challenge",
      tier: "Legend",
      fee: 50,
      prize: 500,
      location: "Citywide",
      participants: 3,
      maxParticipants: 10,
      timeLeft: "1 day",
      difficulty: 5,
      description: "The ultimate citywide challenge for experienced hunters only.",
      status: "active",
    },
    {
      id: 4,
      title: "Waterfront Adventure",
      tier: "Explorer",
      fee: 5,
      prize: 50,
      location: "Harbor District",
      participants: 12,
      maxParticipants: 20,
      timeLeft: "3 days",
      difficulty: 2,
      description: "Discover maritime history along the beautiful waterfront.",
      status: "active",
    },
    {
      id: 5,
      title: "Art District Hunt",
      tier: "Adventurer",
      fee: 10,
      prize: 100,
      location: "Arts Quarter",
      participants: 6,
      maxParticipants: 15,
      timeLeft: "1 day",
      difficulty: 4,
      description: "Find street art, galleries, and creative spaces throughout the arts district.",
      status: "active",
    },
    {
      id: 6,
      title: "Night Owl Challenge",
      tier: "Legend",
      fee: 50,
      prize: 500,
      location: "Entertainment District",
      participants: 2,
      maxParticipants: 8,
      timeLeft: "6 hours",
      difficulty: 5,
      description: "A nighttime adventure through the city's entertainment hotspots.",
      status: "active",
    },
  ]

  const getTierColor = (tier: string) => {
    switch (tier) {
      case "Explorer":
        return "bg-green-100 text-green-700"
      case "Adventurer":
        return "bg-orange-100 text-orange-700"
      case "Legend":
        return "bg-purple-100 text-purple-700"
      default:
        return "bg-gray-100 text-gray-700"
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-purple-500 rounded-lg flex items-center justify-center">
              <MapPin className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold">CityHunt</span>
          </Link>
          <div className="flex items-center space-x-3">
            <Button variant="outline" className="bg-white text-gray-700">
              Sign In
            </Button>
            <Button className="bg-gradient-to-r from-orange-500 to-purple-500 text-white">Get Started</Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Active Scavenger Hunts</h1>
          <p className="text-gray-600">Choose your adventure and start exploring the city</p>
        </div>

        {/* Filters */}
        <div className="mb-8 bg-white p-6 rounded-lg shadow-sm">
          <div className="grid md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
              <Input placeholder="Search hunts..." className="pl-10" />
            </div>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="All Tiers" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Tiers</SelectItem>
                <SelectItem value="explorer">Explorer ($5)</SelectItem>
                <SelectItem value="adventurer">Adventurer ($10)</SelectItem>
                <SelectItem value="legend">Legend ($50)</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="All Locations" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Locations</SelectItem>
                <SelectItem value="downtown">City Center</SelectItem>
                <SelectItem value="oldtown">Old Town</SelectItem>
                <SelectItem value="harbor">Harbor District</SelectItem>
                <SelectItem value="arts">Arts Quarter</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Sort By" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest First</SelectItem>
                <SelectItem value="ending">Ending Soon</SelectItem>
                <SelectItem value="popular">Most Popular</SelectItem>
                <SelectItem value="prize">Highest Prize</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Hunt Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hunts.map((hunt) => (
            <Card key={hunt.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-orange-100 to-purple-100 flex items-center justify-center relative">
                <MapPin className="w-12 h-12 text-orange-500" />
                <Badge className={`absolute top-3 left-3 ${getTierColor(hunt.tier)}`}>{hunt.tier}</Badge>
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 text-sm font-medium">
                  ${hunt.prize}
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-lg">{hunt.title}</h3>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < hunt.difficulty ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-4">{hunt.description}</p>

                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4" />
                      <span>{hunt.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{hunt.timeLeft} left</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4" />
                      <span>
                        {hunt.participants}/{hunt.maxParticipants} joined
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Trophy className="w-4 h-4" />
                      <span className="font-medium">${hunt.fee} entry</span>
                    </div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex justify-between text-xs text-gray-500 mb-1">
                    <span>Participants</span>
                    <span>
                      {hunt.participants}/{hunt.maxParticipants}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-orange-500 to-purple-500 h-2 rounded-full"
                      style={{ width: `${(hunt.participants / hunt.maxParticipants) * 100}%` }}
                    />
                  </div>
                </div>

                <Button className="w-full bg-gradient-to-r from-orange-500 to-purple-500 text-white">
                  Join Hunt - ${hunt.fee}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" className="bg-white text-gray-700">
            Load More Hunts
          </Button>
        </div>
      </div>
    </div>
  )
}
