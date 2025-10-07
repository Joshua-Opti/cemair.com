import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export const NotFoundPage = () => {
  return (
    <div className="min-h-screen pt-20 bg-gray-50 flex items-center justify-center">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <div className="text-8xl font-bold text-primary-600 mb-4">404</div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Page Not Found
          </h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Sorry, we couldn't find the page you're looking for. The page might have been moved, 
            deleted, or you might have entered the wrong URL.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="btn btn-primary text-lg px-8 py-3"
            >
              Go Home
            </Link>
            <Link
              to="/booking"
              className="btn btn-secondary text-lg px-8 py-3"
            >
              Book a Flight
            </Link>
          </div>

          <div className="mt-12">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Popular Pages
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link
                to="/about"
                className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 text-left"
              >
                <div className="font-medium text-gray-900">About Us</div>
                <div className="text-sm text-gray-600">Learn about CemAir</div>
              </Link>
              <Link
                to="/services"
                className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 text-left"
              >
                <div className="font-medium text-gray-900">Services</div>
                <div className="text-sm text-gray-600">Our flight services</div>
              </Link>
              <Link
                to="/contact"
                className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 text-left"
              >
                <div className="font-medium text-gray-900">Contact</div>
                <div className="text-sm text-gray-600">Get in touch</div>
              </Link>
              <Link
                to="/news"
                className="p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 text-left"
              >
                <div className="font-medium text-gray-900">News</div>
                <div className="text-sm text-gray-600">Latest updates</div>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
