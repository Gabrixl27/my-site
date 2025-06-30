import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MapPin, Trophy, Clock, Star, Target, Award, TrendingUp } from "lucide-react"
import Link from "next/link"

export default function Dashboard() {
  const userStats = {
    totalHunts: 12,
    huntsWon: 8,
    totalEarnings: 340,
    currentRank: 15,
    level: "Adventurer",
  }

  const activeHunts = [
    {
      id: 1,
      title: "Downtown Discovery",
      tier: "Explorer",
      progress: 75,
      timeLeft: "4 hours",
      currentClue: "Find the bronze statue near the fountain",
      location: "City Center",
    },
    {
      id: 2,
      title: "Art District Hunt",
      tier: "Adventurer",
      progress: 40,
      timeLeft: "1 day",
      currentClue: "Locate the mural with the blue bird",
      location: "Arts Quarter",
    },
  ]

  const completedHunts = [
    {
      id: 1,
      title: "Historic Quarter Quest",
      tier: "Adventurer",
      result: "Won",
      prize: 100,
      completedAt: "2 days ago",
      rank: 1,
    },
    {
      id: 2,
      title: "Waterfront Adventure",
      tier: "Explorer",
      result: "Won",
      prize: 50,
      completedAt: "1 week ago",
      rank: 2,
    },
    {
      id: 3,
      title: "Night Owl Challenge",
      tier: "Legend",
      result: "Lost",
      prize: 0,
      completedAt: "2 weeks ago",
      rank: 8,
    },
  ]

  const achievements = [
    { name: "First Hunt", description: "Complete your first scavenger hunt", earned: true },
    { name: "Speed Demon", description: "Complete a hunt in under 2 hours", earned: true },
    { name: "Explorer", description: "Complete 5 Explorer tier hunts", earned: true },
    { name: "Adventurer", description: "Complete 3 Adventurer tier hunts", earned: false },
    { name: "Legend", description: "Complete a Legend tier hunt", earned: false },
    { name: "City Master", description: "Complete hunts in all city districts", earned: false },
  ]

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
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600">Welcome back, Hunter!</span>
            <Button variant="outline" className="bg-white text-gray-700">
              Profile
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Overview */}
        <div className="grid md:grid-cols-5 gap-6 mb-8">
          <Card>
            <CardContent className="p-6 text-center">
              <Target className="w-8 h-8 text-orange-500 mx-auto mb-2" />
              <div className="text-2xl font-bold">{userStats.totalHunts}</div>
              <div className="text-sm text-gray-600">Total Hunts</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Trophy className="w-8 h-8 text-green-500 mx-auto mb-2" />
              <div className="text-2xl font-bold">{userStats.huntsWon}</div>
              <div className="text-sm text-gray-600">Hunts Won</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Award className="w-8 h-8 text-purple-500 mx-auto mb-2" />
              <div className="text-2xl font-bold">${userStats.totalEarnings}</div>
              <div className="text-sm text-gray-600">Total Earnings</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <TrendingUp className="w-8 h-8 text-blue-500 mx-auto mb-2" />
              <div className="text-2xl font-bold">#{userStats.currentRank}</div>
              <div className="text-sm text-gray-600">Current Rank</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <Star className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
              <div className="text-lg font-bold">{userStats.level}</div>
              <div className="text-sm text-gray-600">Level</div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="active" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="active">Active Hunts</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
            <TabsTrigger value="achievements">Achievements</TabsTrigger>
            <TabsTrigger value="leaderboard">Leaderboard</TabsTrigger>
          </TabsList>

          <TabsContent value="active" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">Active Hunts</h2>
              <Button className="bg-gradient-to-r from-orange-500 to-purple-500 text-white">
                <Link href="/hunts">Browse More Hunts</Link>
              </Button>
            </div>

            {activeHunts.length === 0 ? (
              <Card>
                <CardContent className="p-12 text-center">
                  <Target className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">No Active Hunts</h3>
                  <p className="text-gray-600 mb-4">You're not currently participating in any hunts</p>
                  <Button className="bg-gradient-to-r from-orange-500 to-purple-500 text-white">
                    <Link href="/hunts">Join a Hunt</Link>
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <div className="grid md:grid-cols-2 gap-6">
                {activeHunts.map((hunt) => (
                  <Card key={hunt.id}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">{hunt.title}</CardTitle>
                        <Badge className="bg-orange-100 text-orange-700">{hunt.tier}</Badge>
                      </div>
                      <CardDescription>{hunt.location}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span>Progress</span>
                          <span>{hunt.progress}%</span>
                        </div>
                        <Progress value={hunt.progress} className="h-2" />
                      </div>

                      <div className="bg-blue-50 p-3 rounded-lg">
                        <div className="text-sm font-medium text-blue-900 mb-1">Current Clue:</div>
                        <div className="text-sm text-blue-700">{hunt.currentClue}</div>
                      </div>

                      <div className="flex items-center justify-between text-sm text-gray-600">
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4" />
                          <span>{hunt.timeLeft} left</span>
                        </div>
                      </div>

                      <Button className="w-full bg-gradient-to-r from-orange-500 to-purple-500 text-white">
                        Continue Hunt
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="completed" className="space-y-6">
            <h2 className="text-2xl font-bold">Completed Hunts</h2>
            <div className="space-y-4">
              {completedHunts.map((hunt) => (
                <Card key={hunt.id}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div
                          className={`w-12 h-12 rounded-full flex items-center justify-center ${
                            hunt.result === "Won" ? "bg-green-100" : "bg-red-100"
                          }`}
                        >
                          {hunt.result === "Won" ? (
                            <Trophy className="w-6 h-6 text-green-600" />
                          ) : (
                            <Target className="w-6 h-6 text-red-600" />
                          )}
                        </div>
                        <div>
                          <h3 className="font-semibold">{hunt.title}</h3>
                          <div className="flex items-center space-x-2 text-sm text-gray-600">
                            <Badge variant="secondary">{hunt.tier}</Badge>
                            <span>•</span>
                            <span>Rank #{hunt.rank}</span>
                            <span>•</span>
                            <span>{hunt.completedAt}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div
                          className={`text-lg font-bold ${hunt.result === "Won" ? "text-green-600" : "text-red-600"}`}
                        >
                          {hunt.result === "Won" ? `+$${hunt.prize}` : "$0"}
                        </div>
                        <div className="text-sm text-gray-600">{hunt.result}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="achievements" className="space-y-6">
            <h2 className="text-2xl font-bold">Achievements</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <Card key={index} className={achievement.earned ? "border-green-200 bg-green-50" : "border-gray-200"}>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center ${
                          achievement.earned ? "bg-green-100" : "bg-gray-100"
                        }`}
                      >
                        <Award className={`w-6 h-6 ${achievement.earned ? "text-green-600" : "text-gray-400"}`} />
                      </div>
                      <div>
                        <h3 className={`font-semibold ${achievement.earned ? "text-green-900" : "text-gray-700"}`}>
                          {achievement.name}
                        </h3>
                        <p className={`text-sm ${achievement.earned ? "text-green-700" : "text-gray-600"}`}>
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="leaderboard" className="space-y-6">
            <h2 className="text-2xl font-bold">Leaderboard</h2>
            <Card>
              <CardContent className="p-6">
                <div className="text-center py-12">
                  <TrendingUp className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Leaderboard Coming Soon</h3>
                  <p className="text-gray-600">See how you rank against other hunters in your city</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
