'use client'

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import logo from '../logo.svg'
import { commonStyles } from '../styles/common'
import { ThemeToggle } from './theme-toggle'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src={logo}
                alt="CorporateHub Logo"
                width={40}
                height={40}
                className="h-8 w-8 md:h-10 md:w-10"
              />
              <span className={`text-xl md:text-2xl font-bold ${commonStyles.headingLight} ${commonStyles.headingDark}`}>CorporateHub<sup>®</sup></span>
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-4">
            <Link href="/" className={`text-sm font-medium ${commonStyles.link} ${commonStyles.linkLight} ${commonStyles.linkDark} h-auto`}>Home</Link>
            <Link href="/about" className={`text-sm font-medium ${commonStyles.link} ${commonStyles.linkLight} ${commonStyles.linkDark} h-auto`}>About Us</Link>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="link" className={`text-sm font-medium ${commonStyles.link} ${commonStyles.linkLight} ${commonStyles.linkDark} p-0 h-auto`}>Services</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link href="/services/consultation" className="w-full">Consultation</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/services/training" className="w-full">Training</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/services/tuning" className="w-full">Tuning</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/services/data-sync-migration" className="w-full">Data Sync & Migration</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/services/deployment" className="w-full">Deployment</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/services/support" className="w-full">Support</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="link" className={`text-sm font-medium ${commonStyles.link} ${commonStyles.linkLight} ${commonStyles.linkDark} p-0 h-auto`}>Solutions</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link href="/solutions/hubspot-odoo-sync-migration" className="w-full">HubSpot ↔ Odoo</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/solutions/jira-odoo-sync-migration" className="w-full">Jira ↔ Odoo</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/solutions/tempo-timesheets-odoo-sync-migration" className="w-full">Tempo Timesheets ↔ Odoo</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/solutions/kantata-mavenlink-odoo-sync-migration" className="w-full">Kantata/Mavenlink ↔ Odoo</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link href="/case-studies" className={`text-sm font-medium ${commonStyles.link} ${commonStyles.linkLight} ${commonStyles.linkDark} h-auto`}>Case Studies</Link>
            <div className="hidden md:flex items-center space-x-4">
              <Button asChild>
                <Link href="https://cal.com/alexey-pelykh/consultation" target="_blank">Schedule a Consultation</Link>
              </Button>
              <ThemeToggle />
            </div>
          </nav>
          <div className="md:hidden">
            <Button variant="ghost" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <nav className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className={`block px-3 py-2 text-base font-medium ${commonStyles.link} ${commonStyles.linkLight} ${commonStyles.linkDark}`}>Home</Link>
            <Link href="/about" className={`block px-3 py-2 text-base font-medium ${commonStyles.link} ${commonStyles.linkLight} ${commonStyles.linkDark}`}>About Us</Link>
            <Link href="/services" className={`block px-3 py-2 text-base font-medium ${commonStyles.link} ${commonStyles.linkLight} ${commonStyles.linkDark}`}>Services</Link>
            <Link href="/solutions" className={`block px-3 py-2 text-base font-medium ${commonStyles.link} ${commonStyles.linkLight} ${commonStyles.linkDark}`}>Solutions</Link>
            <Link href="/case-studies" className={`block px-3 py-2 text-base font-medium ${commonStyles.link} ${commonStyles.linkLight} ${commonStyles.linkDark}`}>Case Studies</Link>
          </nav>
          <div className="px-4 py-3 flex justify-between items-center">
            <Button asChild className="w-full mr-2">
              <Link href="https://cal.com/alexey-pelykh/consultation" target="_blank">Schedule a Consultation</Link>
            </Button>
            <ThemeToggle />
          </div>
        </div>
      )}
    </header>
  )
}

export default Header

