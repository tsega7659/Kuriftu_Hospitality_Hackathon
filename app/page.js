import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Award, Coins, Gift, Users } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image src="/hero-image.jpg" alt="Kuriftu Resort" fill className="object-cover brightness-50" priority />
        </div>
        <div className="container mx-auto px-4 z-10 text-white">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Elevate Your Experience with Kuriftu Membership</h1>
            <p className="text-xl mb-8">
              Join our exclusive membership program and unlock a world of benefits, rewards, and unforgettable
              experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/register">
                <Button className="bg-kuriftu-green hover:bg-green-600 text-white px-8 py-6 text-lg">Join Now</Button>
              </Link>
              <Link href="/membership">
                <Button
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white/10 px-8 py-6 text-lg"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Tiers */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Membership Tiers</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose the membership tier that suits your lifestyle and start enjoying exclusive benefits and rewards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Explorer Tier */}
            <div className="membership-card explorer group hover:scale-105">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-2">Explorer</h3>
                <p className="text-white/90 mb-6">Begin your journey with Kuriftu</p>
                <ul className="space-y-2 text-white mb-8">
                  <li className="flex items-center">
                    <span className="bg-white/20 p-1 rounded-full mr-2">✓</span>
                    Earn loyalty coins on stays
                  </li>
                  <li className="flex items-center">
                    <span className="bg-white/20 p-1 rounded-full mr-2">✓</span>
                    10% discount on dining
                  </li>
                  <li className="flex items-center">
                    <span className="bg-white/20 p-1 rounded-full mr-2">✓</span>
                    Birthday special offers
                  </li>
                </ul>
                <Link href="/membership#explorer">
                  <Button className="bg-white text-green-600 hover:bg-white/90">Learn More</Button>
                </Link>
              </div>
            </div>

            {/* Adventurer Tier */}
            <div className="membership-card adventurer group hover:scale-105">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-2">Adventurer</h3>
                <p className="text-white/90 mb-6">Elevate your Kuriftu experience</p>
                <ul className="space-y-2 text-white mb-8">
                  <li className="flex items-center">
                    <span className="bg-white/20 p-1 rounded-full mr-2">✓</span>
                    All Explorer benefits
                  </li>
                  <li className="flex items-center">
                    <span className="bg-white/20 p-1 rounded-full mr-2">✓</span>
                    15% discount on spa treatments
                  </li>
                  <li className="flex items-center">
                    <span className="bg-white/20 p-1 rounded-full mr-2">✓</span>
                    Early check-in & late check-out
                  </li>
                </ul>
                <Link href="/membership#adventurer">
                  <Button className="bg-white text-yellow-500 hover:bg-white/90">Learn More</Button>
                </Link>
              </div>
            </div>

            {/* Pioneer Tier */}
            <div className="membership-card pioneer group hover:scale-105">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-2">Pioneer</h3>
                <p className="text-white/90 mb-6">The ultimate Kuriftu experience</p>
                <ul className="space-y-2 text-white mb-8">
                  <li className="flex items-center">
                    <span className="bg-white/20 p-1 rounded-full mr-2">✓</span>
                    All Adventurer benefits
                  </li>
                  <li className="flex items-center">
                    <span className="bg-white/20 p-1 rounded-full mr-2">✓</span>
                    Mine loyalty coins
                  </li>
                  <li className="flex items-center">
                    <span className="bg-white/20 p-1 rounded-full mr-2">✓</span>
                    Exclusive access to events
                  </li>
                </ul>
                <Link href="/membership#pioneer">
                  <Button className="bg-white text-pink-600 hover:bg-white/90">Learn More</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Program Features</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our membership program is designed to provide you with exceptional value and unforgettable experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <CardHeader>
                <Coins className="h-12 w-12 text-kuriftu-yellow mb-4" />
                <CardTitle>Loyalty Coins</CardTitle>
                <CardDescription>Earn and redeem loyalty coins for stays, dining, and spa treatments.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  Our blockchain-based loyalty system ensures secure and transparent transactions.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/rewards" className="text-kuriftu-green hover:underline flex items-center">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <Gift className="h-12 w-12 text-kuriftu-pink mb-4" />
                <CardTitle>Exclusive Offers</CardTitle>
                <CardDescription>Access special discounts and promotions available only to members.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  From seasonal offers to birthday specials, enjoy benefits throughout the year.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/offers" className="text-kuriftu-green hover:underline flex items-center">
                  View offers <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <Award className="h-12 w-12 text-kuriftu-green mb-4" />
                <CardTitle>Tier Benefits</CardTitle>
                <CardDescription>Unlock more benefits as you progress through membership tiers.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  From Explorer to Pioneer, each tier offers increasingly valuable rewards.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/membership" className="text-kuriftu-green hover:underline flex items-center">
                  See tiers <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <Users className="h-12 w-12 text-kuriftu-yellow mb-4" />
                <CardTitle>Community</CardTitle>
                <CardDescription>Join a community of like-minded travelers and resort enthusiasts.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">Participate in exclusive events and connect with other Kuriftu members.</p>
              </CardContent>
              <CardFooter>
                <Link href="/community" className="text-kuriftu-green hover:underline flex items-center">
                  Join now <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-kuriftu-green text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Join?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Become a member today and start enjoying exclusive benefits and rewards.
          </p>
          <Link href="/register">
            <Button className="bg-white text-kuriftu-green hover:bg-gray-100 px-8 py-6 text-lg">Register Now</Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
