'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, User, LogIn } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  
  const isActive = (path) => {
    return pathname === path ? 'text-kuriftu-green font-semibold' : ''
  }

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Image 
              src="/logo.png" 
              alt="Kuriftu Resorts Logo" 
              width={50} 
              height={50} 
              className="w-auto h-12"
            />
            <span className="text-xl font-bold text-kuriftu-black">Kuriftu Resorts</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className={`hover:text-kuriftu-green ${isActive('/')}`}>
              Home
            </Link>
            <Link href="/membership" className={`hover:text-kuriftu-green ${isActive('/membership')}`}>
              Membership
            </Link>
            <Link href="/rewards" className={`hover:text-kuriftu-green ${isActive('/rewards')}`}>
              Rewards
            </Link>
            <Link href="/about" className={`hover:text-kuriftu-green ${isActive('/about')}`}>
              About
            </Link>
            <Link href="/contact" className={`hover:text-kuriftu-green ${isActive('/contact')}`}>
              Contact
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/login">
              <Button variant="outline" className="flex items-center">
                <LogIn className="mr-2 h-4 w-4" />
                Login
              </Button>
            </Link>
            <Link href="/register">
              <Button className="bg-kuriftu-green hover:bg-green-600 text-white flex items-center">
                <User className="mr-2 h-4 w-4" />
                Register
              </Button>
            </Link>
          </div>
          
          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-500 hover:text-kuriftu-green">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-3">
              <Link href="/" className={`hover:text-kuriftu-green ${isActive('/')}`} onClick={() => setIsOpen(false)}>
                Home
              </Link>
              <Link href="/membership" className={`hover:text-kuriftu-green ${isActive('/membership')}`} onClick={() => setIsOpen(false)}>
                Membership
              </Link>
              <Link href="/rewards" className={`hover:text-kuriftu-green ${isActive('/rewards')}`} onClick={() => setIsOpen(false)}>
                Rewards
              </Link>
              <Link href="/about" className={`hover:text-kuriftu-green ${isActive('/about')}`} onClick={() => setIsOpen(false)}>
                About
              </Link>
              <Link href="/contact" className={`hover:text-kuriftu-green ${isActive('/contact')}`} onClick={() => setIsOpen(false)}>
                Contact
              </Link>
              <div className="flex space-x-4 pt-3">
                <Link href="/login" onClick={() => setIsOpen(false)}>
                  <Button variant="outline" size="sm" className="flex items-center">
                    <LogIn className="mr-2 h-4 w-4" />
                    Login
                  </Button>
                </Link>
                <Link href="/register" onClick={() => setIsOpen(false)}>
                  <Button size="sm" className="bg-kuriftu-green hover:bg-green-600 text-white flex items-center">
                    <User className="mr-2 h-4 w-4" />
                    Register
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
