import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, MapPin, Award, Users, Heart } from 'lucide-react'

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image src="/about-hero.jpg" alt="About Kuriftu Resorts" fill className="object-cover brightness-50" />
        </div>
        <div className="container mx-auto px-4 z-10 text-white">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Kuriftu Resorts</h1>
            <p className="text-xl mb-6">
              Discover the story behind Ethiopia's premier resort and spa destination.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-kuriftu-green">Our Story</h2>
              <p className="text-gray-700 mb-4">
                Kuriftu Resorts and Spa began with a vision to create Ethiopia's premier luxury resort experience. 
                Founded in 2008, we set out to showcase the natural beauty of Ethiopia while providing world-class 
                hospitality and comfort to our guests.
              </p>
              <p className="text-gray-700 mb-4">
                What started as a single location has grown into multiple destinations across Ethiopia's most 
                beautiful regions. Each Kuriftu property is designed to blend seamlessly with its natural surroundings 
                while offering the highest standards of luxury and service.
              </p>
              <p className="text-gray-700">
                Today, Kuriftu Resorts and Spa stands as a testament to Ethiopian hospitality, combining local 
                traditions with international standards to create unforgettable experiences for our guests.
              </p>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
              <Image src="/about-story.jpg" alt="Kuriftu Resort" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              At Kuriftu Resorts, we're guided by core values that shape everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-kuriftu-green" />
                </div>
                <CardTitle>Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We strive for excellence in every aspect of our service, from the moment you book until the end of your stay.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-yellow-600" />
                </div>
                <CardTitle>Authenticity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We celebrate Ethiopian culture and traditions, offering authentic experiences that connect our guests with local heritage.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 rounded-full bg-pink-100 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-pink-600" />
                </div>
                <CardTitle>Community</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We believe in supporting local communities and creating sustainable opportunities for growth and development.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Membership Program Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative h-[400px] rounded-xl overflow-hidden shadow-xl">
              <Image src="/about-membership.jpg" alt="Kuriftu Membership" fill className="object-cover" />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-6 text-kuriftu-green">Our Membership Program</h2>
              <p className="text-gray-700 mb-4">
                The Kuriftu Membership & Loyalty Program was designed to reward our most loyal guests with exclusive 
                benefits and experiences. We believe in creating lasting relationships with our guests and providing 
                exceptional value for their loyalty.
              </p>
              <p className="text-gray-700 mb-6">
                Our innovative program incorporates blockchain technology for earning and mining loyalty coins, 
                providing a transparent and secure way to track and redeem rewards. From Explorer to Pioneer, 
                each membership tier offers increasingly valuable benefits.
              </p>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-green-600" />
                  </div>
                  <p className="ml-3 text-gray-700">Earn loyalty coins with every stay and experience</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-green-600" />
                  </div>
                  <p className="ml-3 text-gray-700">Redeem coins for exclusive rewards and experiences</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-green-600" />
                  </div>
                  <p className="ml-3 text-gray-700">Enjoy tier-specific benefits as you progress</p>
                </div>
              </div>
              <div className="mt-8">
                <Link href="/membership">
                  <Button className="bg-kuriftu-green hover:bg-green-600 text-white">
                    Learn More About Membership
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Locations</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover Kuriftu Resorts across Ethiopia's most beautiful destinations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image src="/location-bishoftu.jpg" alt="Bishoftu" fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="h-5 w-5 text-kuriftu-green mr-2" />
                  Bishoftu
                </CardTitle>
                <CardDescription>
                  Located on the shores of Lake Babogaya, just 45 minutes from Addis Ababa.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Our flagship resort features luxurious rooms, a world-class spa, and stunning lake views.
                </p>
                <Link href="/contact">
                  <Button variant="outline" className="w-full">View Details</Button>
                </Link>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image src="/location-entoto.jpg" alt="Entoto" fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="h-5 w-5 text-kuriftu-green mr-2" />
                  Entoto
                </CardTitle>
                <CardDescription>
                  Nestled in the Entoto Natural Park with breathtaking views of Addis Ababa.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Experience luxury in nature with our eco-friendly resort featuring panoramic mountain views.
                </p>
                <Link href="/contact">
                  <Button variant="outline" className="w-full">View Details</Button>
                </Link>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden">
              <div className="relative h-48">
                <Image src="/location-bahirdar.jpg" alt="Bahir Dar" fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="h-5 w-5 text-kuriftu-green mr-2" />
                  Bahir Dar
                </CardTitle>
                <CardDescription>
                  Located on the shores of Lake Tana, the source of the Blue Nile.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Enjoy waterfront luxury with easy access to historic monasteries and the Blue Nile Falls.
                </p>
                <Link href="/contact">
                  <Button variant="outline" className="w-full">View Details</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-kuriftu-green to-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Experience Kuriftu Resorts</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our membership program today and start enjoying exclusive benefits and rewards.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register">
              <Button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-6 text-lg">
                Join Now
              </Button>
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
