import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Check, ChevronDown } from "lucide-react"

export default function MembershipPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image src="/membership-hero.jpg" alt="Kuriftu Membership" fill className="object-cover brightness-50" />
        </div>
        <div className="container mx-auto px-4 z-10 text-white">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Membership Tiers</h1>
            <p className="text-xl mb-6">
              Discover the perfect membership tier for your lifestyle and unlock exclusive benefits.
            </p>
          </div>
        </div>
      </section>

      {/* Membership Tiers Tabs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="explorer" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid w-full max-w-2xl grid-cols-3">
                <TabsTrigger
                  value="explorer"
                  className="data-[state=active]:bg-green-500 data-[state=active]:text-white"
                >
                  Explorer
                </TabsTrigger>
                <TabsTrigger
                  value="adventurer"
                  className="data-[state=active]:bg-yellow-500 data-[state=active]:text-white"
                >
                  Adventurer
                </TabsTrigger>
                <TabsTrigger value="pioneer" className="data-[state=active]:bg-pink-500 data-[state=active]:text-white">
                  Pioneer
                </TabsTrigger>
              </TabsList>
            </div>

            {/* Explorer Tab */}
            <TabsContent value="explorer" id="explorer">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="mb-6">
                    <h2 className="text-3xl font-bold text-green-600 mb-4">Explorer Membership</h2>
                    <p className="text-gray-600 mb-6">
                      Begin your journey with Kuriftu Resorts and discover a world of comfort and relaxation. The
                      Explorer tier is perfect for first-time visitors and those looking to experience the Kuriftu
                      difference.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-3 flex items-center">
                        <span className="bg-green-100 p-1.5 rounded-full mr-2">
                          <Check className="h-4 w-4 text-green-600" />
                        </span>
                        Benefits
                      </h3>
                      <ul className="space-y-2 pl-10 text-gray-600">
                        <li className="list-disc">Earn loyalty coins on every stay</li>
                        <li className="list-disc">10% discount on dining experiences</li>
                        <li className="list-disc">Special birthday offers</li>
                        <li className="list-disc">Access to member-only promotions</li>
                        <li className="list-disc">Complimentary welcome drink</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3 flex items-center">
                        <span className="bg-green-100 p-1.5 rounded-full mr-2">
                          <Check className="h-4 w-4 text-green-600" />
                        </span>
                        How to Qualify
                      </h3>
                      <p className="pl-10 text-gray-600">
                        Simply register for our membership program to start enjoying Explorer benefits immediately. No
                        minimum stay required.
                      </p>
                    </div>
                  </div>

                  <div className="mt-8">
                    <Link href="/register">
                      <Button className="bg-green-600 hover:bg-green-700 text-white">Join Explorer Tier</Button>
                    </Link>
                  </div>
                </div>

                <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
                  <Image src="/explorer-membership.jpg" alt="Explorer Membership" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-green-900/70 to-transparent flex items-end">
                    <div className="p-6 text-white">
                      <p className="text-xl font-semibold mb-2">Begin Your Journey</p>
                      <p>Perfect for first-time visitors</p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Adventurer Tab */}
            <TabsContent value="adventurer" id="adventurer">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="mb-6">
                    <h2 className="text-3xl font-bold text-yellow-500 mb-4">Adventurer Membership</h2>
                    <p className="text-gray-600 mb-6">
                      Elevate your Kuriftu experience with our mid-tier membership. The Adventurer tier is designed for
                      frequent guests who appreciate premium service and enhanced benefits.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-3 flex items-center">
                        <span className="bg-yellow-100 p-1.5 rounded-full mr-2">
                          <Check className="h-4 w-4 text-yellow-600" />
                        </span>
                        Benefits
                      </h3>
                      <ul className="space-y-2 pl-10 text-gray-600">
                        <li className="list-disc">All Explorer benefits</li>
                        <li className="list-disc">15% discount on spa treatments</li>
                        <li className="list-disc">Early check-in (subject to availability)</li>
                        <li className="list-disc">Late check-out until 2 PM</li>
                        <li className="list-disc">Room upgrade when available</li>
                        <li className="list-disc">Complimentary welcome basket</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3 flex items-center">
                        <span className="bg-yellow-100 p-1.5 rounded-full mr-2">
                          <Check className="h-4 w-4 text-yellow-600" />
                        </span>
                        How to Qualify
                      </h3>
                      <p className="pl-10 text-gray-600">
                        Complete 3 stays within a 12-month period or accumulate 10,000 loyalty coins to upgrade to
                        Adventurer status.
                      </p>
                    </div>
                  </div>

                  <div className="mt-8">
                    <Link href="/register">
                      <Button className="bg-yellow-500 hover:bg-yellow-600 text-white">Join Adventurer Tier</Button>
                    </Link>
                  </div>
                </div>

                <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
                  <Image src="/adventurer-membership.jpg" alt="Adventurer Membership" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-yellow-900/70 to-transparent flex items-end">
                    <div className="p-6 text-white">
                      <p className="text-xl font-semibold mb-2">Elevate Your Experience</p>
                      <p>For frequent guests who appreciate premium service</p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Pioneer Tab */}
            <TabsContent value="pioneer" id="pioneer">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="mb-6">
                    <h2 className="text-3xl font-bold text-pink-500 mb-4">Pioneer Membership</h2>
                    <p className="text-gray-600 mb-6">
                      Experience the ultimate in luxury and exclusivity with our top-tier membership. The Pioneer tier
                      is designed for our most loyal guests who deserve the very best Kuriftu has to offer.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-3 flex items-center">
                        <span className="bg-pink-100 p-1.5 rounded-full mr-2">
                          <Check className="h-4 w-4 text-pink-600" />
                        </span>
                        Benefits
                      </h3>
                      <ul className="space-y-2 pl-10 text-gray-600">
                        <li className="list-disc">All Adventurer benefits</li>
                        <li className="list-disc">Ability to mine loyalty coins</li>
                        <li className="list-disc">25% discount on all resort services</li>
                        <li className="list-disc">Guaranteed late check-out until 4 PM</li>
                        <li className="list-disc">Complimentary airport transfers</li>
                        <li className="list-disc">Exclusive access to member-only events</li>
                        <li className="list-disc">Dedicated concierge service</li>
                        <li className="list-disc">Annual complimentary night stay</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3 flex items-center">
                        <span className="bg-pink-100 p-1.5 rounded-full mr-2">
                          <Check className="h-4 w-4 text-pink-600" />
                        </span>
                        How to Qualify
                      </h3>
                      <p className="pl-10 text-gray-600">
                        Complete 6 stays within a 12-month period or accumulate 25,000 loyalty coins to achieve Pioneer
                        status.
                      </p>
                    </div>
                  </div>

                  <div className="mt-8">
                    <Link href="/register">
                      <Button className="bg-pink-500 hover:bg-pink-600 text-white">Join Pioneer Tier</Button>
                    </Link>
                  </div>
                </div>

                <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
                  <Image src="/pioneer-membership.jpg" alt="Pioneer Membership" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-pink-900/70 to-transparent flex items-end">
                    <div className="p-6 text-white">
                      <p className="text-xl font-semibold mb-2">The Ultimate Experience</p>
                      <p>For our most loyal guests who deserve the very best</p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Membership Comparison</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Compare our membership tiers to find the perfect fit for your lifestyle.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="p-4 text-left bg-white border"></th>
                  <th className="p-4 text-center bg-green-100 border text-green-700 font-semibold">Explorer</th>
                  <th className="p-4 text-center bg-yellow-100 border text-yellow-700 font-semibold">Adventurer</th>
                  <th className="p-4 text-center bg-pink-100 border text-pink-700 font-semibold">Pioneer</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4 border font-medium bg-gray-50">Loyalty Coins Earning</td>
                  <td className="p-4 border text-center bg-white">1x</td>
                  <td className="p-4 border text-center bg-white">1.5x</td>
                  <td className="p-4 border text-center bg-white">2x</td>
                </tr>
                <tr>
                  <td className="p-4 border font-medium bg-gray-50">Mining Capability</td>
                  <td className="p-4 border text-center bg-white">-</td>
                  <td className="p-4 border text-center bg-white">-</td>
                  <td className="p-4 border text-center bg-white">✓</td>
                </tr>
                <tr>
                  <td className="p-4 border font-medium bg-gray-50">Dining Discount</td>
                  <td className="p-4 border text-center bg-white">10%</td>
                  <td className="p-4 border text-center bg-white">15%</td>
                  <td className="p-4 border text-center bg-white">25%</td>
                </tr>
                <tr>
                  <td className="p-4 border font-medium bg-gray-50">Spa Discount</td>
                  <td className="p-4 border text-center bg-white">5%</td>
                  <td className="p-4 border text-center bg-white">15%</td>
                  <td className="p-4 border text-center bg-white">25%</td>
                </tr>
                <tr>
                  <td className="p-4 border font-medium bg-gray-50">Room Upgrade</td>
                  <td className="p-4 border text-center bg-white">-</td>
                  <td className="p-4 border text-center bg-white">When Available</td>
                  <td className="p-4 border text-center bg-white">Priority</td>
                </tr>
                <tr>
                  <td className="p-4 border font-medium bg-gray-50">Late Check-out</td>
                  <td className="p-4 border text-center bg-white">-</td>
                  <td className="p-4 border text-center bg-white">Until 2 PM</td>
                  <td className="p-4 border text-center bg-white">Until 4 PM</td>
                </tr>
                <tr>
                  <td className="p-4 border font-medium bg-gray-50">Exclusive Events</td>
                  <td className="p-4 border text-center bg-white">-</td>
                  <td className="p-4 border text-center bg-white">Select Events</td>
                  <td className="p-4 border text-center bg-white">All Events</td>
                </tr>
                <tr>
                  <td className="p-4 border font-medium bg-gray-50">Complimentary Stay</td>
                  <td className="p-4 border text-center bg-white">-</td>
                  <td className="p-4 border text-center bg-white">-</td>
                  <td className="p-4 border text-center bg-white">1 Night Annually</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our membership program.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <Card>
              <CardHeader className="cursor-pointer flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-lg font-medium">How do I earn loyalty coins?</CardTitle>
                <ChevronDown className="h-4 w-4 text-gray-500" />
              </CardHeader>
              <CardContent>
                <CardDescription>
                  You earn loyalty coins for every stay at Kuriftu Resorts, as well as for dining, spa treatments, and
                  other services. The rate at which you earn coins depends on your membership tier. Explorer members
                  earn at the base rate, while Adventurer and Pioneer members earn at 1.5x and 2x rates respectively.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="cursor-pointer flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-lg font-medium">What does mining loyalty coins mean?</CardTitle>
                <ChevronDown className="h-4 w-4 text-gray-500" />
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Mining loyalty coins is an exclusive feature for Pioneer members. It allows you to earn additional
                  coins through our blockchain-based system without having to make a purchase. Pioneer members can mine
                  coins daily through our mobile app or website.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="cursor-pointer flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-lg font-medium">How long does my membership status last?</CardTitle>
                <ChevronDown className="h-4 w-4 text-gray-500" />
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Your membership status is valid for 12 months from the date you qualify for a particular tier. To
                  maintain your status, you need to meet the qualification criteria within each 12-month period. If you
                  don't meet the criteria, you'll be moved to the appropriate tier based on your activity.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="cursor-pointer flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-lg font-medium">How do I redeem my loyalty coins?</CardTitle>
                <ChevronDown className="h-4 w-4 text-gray-500" />
              </CardHeader>
              <CardContent>
                <CardDescription>
                  You can redeem your loyalty coins for a variety of rewards including room upgrades, spa treatments,
                  dining credits, and exclusive experiences. Simply log in to your account on our website or mobile app,
                  navigate to the rewards section, and select the reward you'd like to redeem.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="cursor-pointer flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-lg font-medium">Can I transfer my loyalty coins to someone else?</CardTitle>
                <ChevronDown className="h-4 w-4 text-gray-500" />
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Yes, Pioneer members have the exclusive benefit of being able to transfer their loyalty coins to other
                  Kuriftu Resorts members. This feature is not available for Explorer or Adventurer members.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-kuriftu-green to-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Join Our Membership Program?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Start your journey with Kuriftu Resorts today and enjoy exclusive benefits and rewards.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register">
              <Button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-6 text-lg">Register Now</Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
