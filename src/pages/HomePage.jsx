import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { HeroSection } from '../components/sections/HeroSection'
import { ServicesSection } from '../components/sections/ServicesSection'
import { AboutSection } from '../components/sections/AboutSection'
import { BookingSection } from '../components/sections/BookingSection'
import { NewsSection } from '../components/sections/NewsSection'
import { TestimonialsSection } from '../components/sections/TestimonialsSection'

export const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Quick Booking Section */}
      <BookingSection />
      
      {/* Services Section */}
      <ServicesSection />
      
      {/* About Section */}
      <AboutSection />
      
      {/* News Section */}
      <NewsSection />
      
      {/* Testimonials Section */}
      <TestimonialsSection />
    </div>
  )
}
