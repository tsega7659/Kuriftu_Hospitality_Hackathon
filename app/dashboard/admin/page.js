import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  AlertTriangle,
  ArrowRight,
  BarChart3,
  ChevronDown,
  Download,
  MessageSquare,
  RefreshCw,
  Search,
  Star,
  ThumbsDown,
  Users,
} from "lucide-react"

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      {/* Admin Header */}
      <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          <p className="text-gray-500">Monitor membership program performance and review feedback</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="flex items-center">
            <RefreshCw className="mr-2 h-4 w-4" />
            Refresh Data
          </Button>
          <Button variant="outline" className="flex items-center">
            <Download className="mr-2 h-4 w-4" />
            Export Report
          </Button>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Total Members</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline justify-between">
              <div className="text-3xl font-bold">1,248</div>
              <Badge className="bg-green-100 text-green-800 hover:bg-green-100">+12.5%</Badge>
            </div>
            <div className="mt-4">
              <div className="flex justify-between text-xs mb-1">
                <span>Monthly Target</span>
                <span>83%</span>
              </div>
              <Progress value={83} className="h-1" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Active Pioneer Members</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline justify-between">
              <div className="text-3xl font-bold">342</div>
              <Badge className="bg-green-100 text-green-800 hover:bg-green-100">+8.3%</Badge>
            </div>
            <div className="mt-4">
              <div className="flex justify-between text-xs mb-1">
                <span>Monthly Target</span>
                <span>68%</span>
              </div>
              <Progress value={68} className="h-1" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Coins Redeemed</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline justify-between">
              <div className="text-3xl font-bold">1.2M</div>
              <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">+2.1%</Badge>
            </div>
            <div className="mt-4">
              <div className="flex justify-between text-xs mb-1">
                <span>Monthly Target</span>
                <span>45%</span>
              </div>
              <Progress value={45} className="h-1" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Direct Bookings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-baseline justify-between">
              <div className="text-3xl font-bold">856</div>
              <Badge className="bg-green-100 text-green-800 hover:bg-green-100">+15.2%</Badge>
            </div>
            <div className="mt-4">
              <div className="flex justify-between text-xs mb-1">
                <span>Monthly Target</span>
                <span>92%</span>
              </div>
              <Progress value={92} className="h-1" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* AI Review Analysis */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <AlertTriangle className="mr-2 h-5 w-5 text-amber-500" />
            AI Review Analysis
          </CardTitle>
          <CardDescription>Negative reviews summarized by our AI system for immediate attention</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="flex items-start p-4 rounded-lg bg-red-50 border border-red-100">
              <div className="mr-4">
                <ThumbsDown className="h-8 w-8 text-red-500" />
              </div>
              <div>
                <div className="flex items-center mb-1">
                  <h3 className="font-semibold text-red-700">Check-in Process Issues</h3>
                  <Badge className="ml-2 bg-red-100 text-red-800 hover:bg-red-100">High Priority</Badge>
                </div>
                <p className="text-gray-700 mb-2">
                  Multiple guests reported long wait times during check-in at the Bishoftu location. Common complaints
                  include understaffing at peak hours and confusion about membership benefits.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="font-medium">Source:</span>
                  <span className="ml-1">Google Reviews (7), TripAdvisor (4)</span>
                  <span className="mx-2">•</span>
                  <span className="font-medium">Last reported:</span>
                  <span className="ml-1">2 hours ago</span>
                </div>
              </div>
            </div>

            <div className="flex items-start p-4 rounded-lg bg-amber-50 border border-amber-100">
              <div className="mr-4">
                <ThumbsDown className="h-8 w-8 text-amber-500" />
              </div>
              <div>
                <div className="flex items-center mb-1">
                  <h3 className="font-semibold text-amber-700">Loyalty Program Confusion</h3>
                  <Badge className="ml-2 bg-amber-100 text-amber-800 hover:bg-amber-100">Medium Priority</Badge>
                </div>
                <p className="text-gray-700 mb-2">
                  Several members expressed confusion about how to redeem loyalty coins and what benefits are available
                  at each tier. Staff seemed unable to provide clear information about the program.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="font-medium">Source:</span>
                  <span className="ml-1">Direct Feedback (5), Facebook (3)</span>
                  <span className="mx-2">•</span>
                  <span className="font-medium">Last reported:</span>
                  <span className="ml-1">1 day ago</span>
                </div>
              </div>
            </div>

            <div className="flex items-start p-4 rounded-lg bg-amber-50 border border-amber-100">
              <div className="mr-4">
                <ThumbsDown className="h-8 w-8 text-amber-500" />
              </div>
              <div>
                <div className="flex items-center mb-1">
                  <h3 className="font-semibold text-amber-700">App Technical Issues</h3>
                  <Badge className="ml-2 bg-amber-100 text-amber-800 hover:bg-amber-100">Medium Priority</Badge>
                </div>
                <p className="text-gray-700 mb-2">
                  Users reported difficulty with the coin mining feature in the mobile app. Several Pioneer members
                  mentioned the app crashes when attempting to mine coins.
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="font-medium">Source:</span>
                  <span className="ml-1">App Store Reviews (12), Play Store (8)</span>
                  <span className="mx-2">•</span>
                  <span className="font-medium">Last reported:</span>
                  <span className="ml-1">6 hours ago</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" className="flex items-center">
            <Search className="mr-2 h-4 w-4" />
            View All Reviews
          </Button>
          <Button className="bg-kuriftu-green hover:bg-green-600 text-white">Generate Detailed Report</Button>
        </CardFooter>
      </Card>

      {/* Membership & Analytics Tabs */}
      <Tabs defaultValue="membership" className="w-full">
        <TabsList className="grid w-full max-w-md grid-cols-2">
          <TabsTrigger value="membership">Membership Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="membership" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Membership Distribution</CardTitle>
              <CardDescription>Current distribution of members across tiers</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium flex items-center">
                      <span className="w-3 h-3 rounded-full bg-green-500 mr-2"></span>
                      Explorer
                    </span>
                    <span className="text-sm text-gray-500">52% (648 members)</span>
                  </div>
                  <Progress value={52} className="h-2 bg-gray-100" indicatorClassName="bg-green-500" />
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium flex items-center">
                      <span className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></span>
                      Adventurer
                    </span>
                    <span className="text-sm text-gray-500">21% (258 members)</span>
                  </div>
                  <Progress value={21} className="h-2 bg-gray-100" indicatorClassName="bg-yellow-500" />
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium flex items-center">
                      <span className="w-3 h-3 rounded-full bg-pink-500 mr-2"></span>
                      Pioneer
                    </span>
                    <span className="text-sm text-gray-500">27% (342 members)</span>
                  </div>
                  <Progress value={27} className="h-2 bg-gray-100" indicatorClassName="bg-pink-500" />
                </div>
              </div>

              <div className="mt-8 border-t pt-6">
                <h3 className="font-medium mb-4">Recent Member Registrations</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-gray-200 mr-3"></div>
                      <div>
                        <p className="font-medium">Sarah Johnson</p>
                        <p className="text-sm text-gray-500">Explorer • Registered 2 hours ago</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      View
                    </Button>
                  </div>

                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-gray-200 mr-3"></div>
                      <div>
                        <p className="font-medium">Michael Chen</p>
                        <p className="text-sm text-gray-500">Explorer • Registered 5 hours ago</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      View
                    </Button>
                  </div>

                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-gray-200 mr-3"></div>
                      <div>
                        <p className="font-medium">Aisha Mohammed</p>
                        <p className="text-sm text-gray-500">Explorer • Registered 1 day ago</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      View
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Link href="/dashboard/admin/members">
                <Button variant="link" className="p-0 h-auto text-kuriftu-green">
                  View all members <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Program Analytics</CardTitle>
              <CardDescription>Key performance metrics for the membership program</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                <div>
                  <h3 className="font-medium mb-4 flex items-center">
                    <BarChart3 className="mr-2 h-5 w-5 text-gray-500" />
                    Loyalty Coin Activity
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium text-gray-500">Coins Earned</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">3.2M</div>
                        <Badge className="bg-green-100 text-green-800 hover:bg-green-100">+18.5%</Badge>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium text-gray-500">Coins Redeemed</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">1.2M</div>
                        <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">+2.1%</Badge>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium text-gray-500">Coins Mined</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">850K</div>
                        <Badge className="bg-green-100 text-green-800 hover:bg-green-100">+24.3%</Badge>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-4 flex items-center">
                    <Star className="mr-2 h-5 w-5 text-gray-500" />
                    Most Popular Rewards
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium">Dining Credit</p>
                        <p className="text-sm text-gray-500">10,000 coins • Redeemed 128 times</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">1.28M coins</p>
                        <p className="text-sm text-gray-500">Total redeemed</p>
                      </div>
                    </div>

                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium">Spa Treatment</p>
                        <p className="text-sm text-gray-500">15,000 coins • Redeemed 42 times</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">630K coins</p>
                        <p className="text-sm text-gray-500">Total redeemed</p>
                      </div>
                    </div>

                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium">Room Upgrade</p>
                        <p className="text-sm text-gray-500">8,000 coins • Redeemed 56 times</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">448K coins</p>
                        <p className="text-sm text-gray-500">Total redeemed</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-4 flex items-center">
                    <Users className="mr-2 h-5 w-5 text-gray-500" />
                    Member Engagement
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium text-gray-500">Active Rate</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">78%</div>
                        <Badge className="bg-green-100 text-green-800 hover:bg-green-100">+5.2%</Badge>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium text-gray-500">Retention Rate</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">82%</div>
                        <Badge className="bg-green-100 text-green-800 hover:bg-green-100">+3.7%</Badge>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium text-gray-500">Tier Progression</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">24%</div>
                        <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">+1.3%</Badge>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="bg-kuriftu-green hover:bg-green-600 text-white">Generate Full Analytics Report</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Feedback Management */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <MessageSquare className="mr-2 h-5 w-5 text-blue-500" />
            Recent Member Feedback
          </CardTitle>
          <CardDescription>Latest feedback submitted through the membership portal</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start p-4 rounded-lg border">
              <div className="mr-4">
                <div className="w-10 h-10 rounded-full bg-gray-200"></div>
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-semibold">Daniel Abebe</h3>
                  <Badge>Pioneer Member</Badge>
                </div>
                <p className="text-gray-700 mb-2">
                  I love the new loyalty program, especially the mining feature! However, I've noticed that the app
                  sometimes crashes when I try to view my transaction history. Could this be fixed?
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>Submitted 1 day ago</span>
                  <div className="flex items-center">
                    <Button variant="ghost" size="sm" className="h-8 px-2">
                      Reply
                    </Button>
                    <Button variant="ghost" size="sm" className="h-8 px-2">
                      Mark as Resolved
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-start p-4 rounded-lg border">
              <div className="mr-4">
                <div className="w-10 h-10 rounded-full bg-gray-200"></div>
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-semibold">Fatima Hassan</h3>
                  <Badge>Adventurer Member</Badge>
                </div>
                <p className="text-gray-700 mb-2">
                  The staff at Bishoftu were amazing and very helpful with explaining my membership benefits. I would
                  suggest adding more rewards related to family activities as many guests come with children.
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>Submitted 3 days ago</span>
                  <div className="flex items-center">
                    <Button variant="ghost" size="sm" className="h-8 px-2">
                      Reply
                    </Button>
                    <Button variant="ghost" size="sm" className="h-8 px-2">
                      Mark as Resolved
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-start p-4 rounded-lg border">
              <div className="mr-4">
                <div className="w-10 h-10 rounded-full bg-gray-200"></div>
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-semibold">Thomas Girma</h3>
                  <Badge>Explorer Member</Badge>
                </div>
                <p className="text-gray-700 mb-2">
                  I'm confused about how to progress to the Adventurer tier. The website says I need to complete 3
                  stays, but the staff told me I also need to accumulate a certain number of points. Could you clarify?
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>Submitted 5 days ago</span>
                  <div className="flex items-center">
                    <Button variant="ghost" size="sm" className="h-8 px-2">
                      Reply
                    </Button>
                    <Button variant="ghost" size="sm" className="h-8 px-2">
                      Mark as Resolved
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <div className="flex items-center text-sm text-gray-500">Showing 3 of 24 feedback items</div>
          <Button variant="outline" className="flex items-center">
            View All Feedback <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
