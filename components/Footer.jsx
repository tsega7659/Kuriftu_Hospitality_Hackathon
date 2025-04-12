import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Image 
                src="/logo.png" 
                alt="Kuriftu Resorts Logo" 
                width={40} 
                height={40} 
                className="w-auto h-10"
              />
              <span className="text-lg font-bold">Kuriftu Resorts</span>
            </div>
            <p className="text-gray-400 mb-4">
              Enhancing your experience with our exclusive Membership & Loyalty Program.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-kuriftu-green">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-kuriftu-green">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-kuriftu-green">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-kuriftu-green">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/membership" className="text-gray-400 hover:text-kuriftu-green">
                  Membership
                </Link>
              </li>
              <li>
                <Link href="/rewards" className="text-gray-400 hover:text-kuriftu-green">
                  Rewards
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-kuriftu-green">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-kuriftu-green">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Membership</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/membership#explorer" className="text-gray-400 hover:text-kuriftu-green">
                  Explorer
                </Link>
              </li>
              <li>
                <Link href="/membership#adventurer" className="text-gray-400 hover:text-kuriftu-green">
                  Adventurer
                </Link>
              </li>
              <li>
                <Link href="/membership#pioneer" className="text-gray-400 hover:text-kuriftu-green">
                  Pioneer
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-kuriftu-green">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-kuriftu-green">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 text-kuriftu-green mt-1" />
                <span className="text-gray-400">
                  Kuriftu Resort and Spa, Ethiopia
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-kuriftu-green" />
                <span className="text-gray-400">+251 123 456 789</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-kuriftu-green" />
                <span className="text-gray-400">info@kuriftu.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Kuriftu Resorts. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
