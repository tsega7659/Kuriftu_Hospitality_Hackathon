import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Gift, Utensils, Bed, SpadeIcon as Spa, Star } from "lucide-react"

export default function RewardsPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image src="/rewards-hero.jpg" alt="Kuriftu Rewards" fill className="object-cover brightness-50" />
        </div>
        <div className="container mx-auto px-4 z-10 text-white">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Loyalty Rewards</h1>
            <p className="text-xl mb-6">Discover the exclusive rewards and benefits available to our members.</p>
          </div>
        </div>
      </section>

      {/* Rewards Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Explore Our Rewards</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Redeem your loyalty coins for a variety of exclusive rewards and experiences.
            </p>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid w-full max-w-3xl grid-cols-5">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="stays">Stays</TabsTrigger>
                <TabsTrigger value="dining">Dining</TabsTrigger>
                <TabsTrigger value="spa">Spa</TabsTrigger>
                <TabsTrigger value="experiences">Experiences</TabsTrigger>
              </TabsList>
            </div>

            {/* All Rewards Tab */}
            <TabsContent value="all">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Stay Reward */}
                <Card className="group hover:shadow-lg transition-all duration-300">
                  <CardHeader className="pb-4">
                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                      <Bed className="h-6 w-6 text-kuriftu-green" />
                    </div>
                    <CardTitle className="flex items-center justify-between">
                      <span>Free Night Stay</span>
                      <span className="text-sm font-normal bg-green-100 text-green-700 px-2 py-1 rounded-full">
                        25,000 coins
                      </span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Redeem your loyalty coins for a complimentary night stay at any Kuriftu Resort location.
                    </p>
                    <div className="mt-4 flex items-center text-sm text-gray-500">
                      <span className="bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded mr-2">Adventurer+</span>
                      <span>Valid for standard rooms</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button
                      variant="outline"
                      className="w-full group-hover:bg-kuriftu-green group-hover:text-white transition-colors"
                    >
                      Redeem Now <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>

                {/* Dining Reward */}
                <Card className="group hover:shadow-lg transition-all duration-300">
                  <CardHeader className="pb-4">
                    <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center mb-4">
                      <Utensils className="h-6 w-6 text-yellow-600" />
                    </div>
                    <CardTitle className="flex items-center justify-between">
                      <span>Dining Credit</span>
                      <span className="text-sm font-normal bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full">
                        10,000 coins
                      </span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Enjoy a $50 dining credit at any Kuriftu Resort restaurant. Perfect for a romantic dinner or
                      family meal.
                    </p>
                    <div className="mt-4 flex items-center text-sm text-gray-500">
                      <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded mr-2">All Members</span>
                      <span>Valid for 3 months</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button
                      variant="outline"
                      className="w-full group-hover:bg-kuriftu-green group-hover:text-white transition-colors"
                    >
                      Redeem Now <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>

                {/* Spa Reward */}
                <Card className="group hover:shadow-lg transition-all duration-300">
                  <CardHeader className="pb-4">
                    <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center mb-4">
                      <Spa className="h-6 w-6 text-pink-600" />
                    </div>
                    <CardTitle className="flex items-center justify-between">
                      <span>Spa Treatment</span>
                      <span className="text-sm font-normal bg-pink-100 text-pink-700 px-2 py-1 rounded-full">
                        15,000 coins
                      </span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Indulge in a 60-minute signature spa treatment of your choice at any Kuriftu Resort spa.
                    </p>
                    <div className="mt-4 flex items-center text-sm text-gray-500">
                      <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded mr-2">All Members</span>
                      <span>Subject to availability</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button
                      variant="outline"
                      className="w-full group-hover:bg-kuriftu-green group-hover:text-white transition-colors"
                    >
                      Redeem Now <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>

                {/* Room Upgrade */}
                <Card className="group hover:shadow-lg transition-all duration-300">
                  <CardHeader className="pb-4">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                      <Bed className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle className="flex items-center justify-between">
                      <span>Room Upgrade</span>
                      <span className="text-sm font-normal bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                        8,000 coins
                      </span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Upgrade your stay to the next room category. Enjoy more space and enhanced amenities.
                    </p>
                    <div className="mt-4 flex items-center text-sm text-gray-500">
                      <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded mr-2">All Members</span>
                      <span>Subject to availability</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button
                      variant="outline"
                      className="w-full group-hover:bg-kuriftu-green group-hover:text-white transition-colors"
                    >
                      Redeem Now <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>

                {/* Special Experience */}
                <Card className="group hover:shadow-lg transition-all duration-300">
                  <CardHeader className="pb-4">
                    <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                      <Star className="h-6 w-6 text-purple-600" />
                    </div>
                    <CardTitle className="flex items-center justify-between">
                      <span>Private Dinner Experience</span>
                      <span className="text-sm font-normal bg-purple-100 text-purple-700 px-2 py-1 rounded-full">
                        30,000 coins
                      </span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Enjoy a private dinner for two at a special location within the resort, with a customized menu.
                    </p>
                    <div className="mt-4 flex items-center text-sm text-gray-500">
                      <span className="bg-pink-100 text-pink-700 px-2 py-0.5 rounded mr-2">Pioneer Only</span>
                      <span>Reservation required</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button
                      variant="outline"
                      className="w-full group-hover:bg-kuriftu-green group-hover:text-white transition-colors"
                    >
                      Redeem Now <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>

                {/* Gift Shop Credit */}
                <Card className="group hover:shadow-lg transition-all duration-300">
                  <CardHeader className="pb-4">
                    <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mb-4">
                      <Gift className="h-6 w-6 text-red-600" />
                    </div>
                    <CardTitle className="flex items-center justify-between">
                      <span>Gift Shop Credit</span>
                      <span className="text-sm font-normal bg-red-100 text-red-700 px-2 py-1 rounded-full">
                        5,000 coins
                      </span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Receive a $25 credit to use at any Kuriftu Resort gift shop for souvenirs and local crafts.
                    </p>
                    <div className="mt-4 flex items-center text-sm text-gray-500">
                      <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded mr-2">All Members</span>
                      <span>Valid for 6 months</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button
                      variant="outline"
                      className="w-full group-hover:bg-kuriftu-green group-hover:text-white transition-colors"
                    >
                      Redeem Now <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            {/* Other tabs would have similar content but filtered by category */}
            <TabsContent value="stays">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Stay Reward */}
                <Card className="group hover:shadow-lg transition-all duration-300">
                  <CardHeader className="pb-4">
                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                      <Bed className="h-6 w-6 text-kuriftu-green" />
                    </div>
                    <CardTitle className="flex items-center justify-between">
                      <span>Free Night Stay</span>
                      <span className="text-sm font-normal bg-green-100 text-green-700 px-2 py-1 rounded-full">
                        25,000 coins
                      </span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Redeem your loyalty coins for a complimentary night stay at any Kuriftu Resort location.
                    </p>
                    <div className="mt-4 flex items-center text-sm text-gray-500">
                      <span className="bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded mr-2">Adventurer+</span>
                      <span>Valid for standard rooms</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button
                      variant="outline"
                      className="w-full group-hover:bg-kuriftu-green group-hover:text-white transition-colors"
                    >
                      Redeem Now <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>

                {/* Room Upgrade */}
                <Card className="group hover:shadow-lg transition-all duration-300">
                  <CardHeader className="pb-4">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                      <Bed className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle className="flex items-center justify-between">
                      <span>Room Upgrade</span>
                      <span className="text-sm font-normal bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                        8,000 coins
                      </span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Upgrade your stay to the next room category. Enjoy more space and enhanced amenities.
                    </p>
                    <div className="mt-4 flex items-center text-sm text-gray-500">
                      <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded mr-2">All Members</span>
                      <span>Subject to availability</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button
                      variant="outline"
                      className="w-full group-hover:bg-kuriftu-green group-hover:text-white transition-colors"
                    >
                      Redeem Now <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            {/* Similar content for other tabs */}
            <TabsContent value="dining">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Dining Reward */}
                <Card className="group hover:shadow-lg transition-all duration-300">
                  <CardHeader className="pb-4">
                    <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center mb-4">
                      <Utensils className="h-6 w-6 text-yellow-600" />
                    </div>
                    <CardTitle className="flex items-center justify-between">
                      <span>Dining Credit</span>
                      <span className="text-sm font-normal bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full">
                        10,000 coins
                      </span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Enjoy a $50 dining credit at any Kuriftu Resort restaurant. Perfect for a romantic dinner or
                      family meal.
                    </p>
                    <div className="mt-4 flex items-center text-sm text-gray-500">
                      <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded mr-2">All Members</span>
                      <span>Valid for 3 months</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button
                      variant="outline"
                      className="w-full group-hover:bg-kuriftu-green group-hover:text-white transition-colors"
                    >
                      Redeem Now <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>

                {/* Private Dinner */}
                <Card className="group hover:shadow-lg transition-all duration-300">
                  <CardHeader className="pb-4">
                    <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4">
                      <Star className="h-6 w-6 text-purple-600" />
                    </div>
                    <CardTitle className="flex items-center justify-between">
                      <span>Private Dinner Experience</span>
                      <span className="text-sm font-normal bg-purple-100 text-purple-700 px-2 py-1 rounded-full">
                        30,000 coins
                      </span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Enjoy a private dinner for two at a special location within the resort, with a customized menu.
                    </p>
                    <div className="mt-4 flex items-center text-sm text-gray-500">
                      <span className="bg-pink-100 text-pink-700 px-2 py-0.5 rounded mr-2">Pioneer Only</span>
                      <span>Reservation required</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button
                      variant="outline"
                      className="w-full group-hover:bg-kuriftu-green group-hover:text-white transition-colors"
                    >
                      Redeem Now <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* How to Earn Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How to Earn Loyalty Coins</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              There are multiple ways to earn loyalty coins that you can redeem for exclusive rewards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                  <Bed className="h-8 w-8 text-kuriftu-green" />
                </div>
                <CardTitle>Stay at Kuriftu</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Earn 1,000 coins per night for Explorer members, 1,500 for Adventurer, and 2,000 for Pioneer.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center mx-auto mb-4">
                  <Utensils className="h-8 w-8 text-yellow-600" />
                </div>
                <CardTitle>Dine with Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Earn 100 coins for every $10 spent at our restaurants and bars.</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-pink-100 flex items-center justify-center mx-auto mb-4">
                  <Spa className="h-8 w-8 text-pink-600" />
                </div>
                <CardTitle>Spa Treatments</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Earn 200 coins for every $10 spent on spa services and treatments.</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle>Mining (Pioneer Only)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Pioneer members can mine up to 500 coins daily through our blockchain system.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-kuriftu-yellow to-yellow-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Start Earning Loyalty Coins Today</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our membership program and begin your journey towards exclusive rewards and experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register">
              <Button className="bg-white text-yellow-600 hover:bg-gray-100 px-8 py-6 text-lg">Register Now</Button>
            </Link>
            <Link href="/login">
              <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
                Member Login
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
