import React, { useState } from 'react'
import { motion } from 'framer-motion'

export const CustomerPortalPage = () => {
  const [activeTab, setActiveTab] = useState('login')
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const handleLogin = (e) => {
    e.preventDefault()
    // Simulate login
    setIsLoggedIn(true)
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setActiveTab('login')
  }

  const mockBookings = [
    {
      id: 'CM-2024-001',
      flight: 'CM101',
      route: 'Johannesburg → Cape Town',
      date: '2024-02-15',
      time: '08:00',
      status: 'Confirmed',
      passengers: 2
    },
    {
      id: 'CM-2024-002',
      flight: 'CM102',
      route: 'Cape Town → Johannesburg',
      date: '2024-02-20',
      time: '14:00',
      status: 'Confirmed',
      passengers: 2
    }
  ]

  const mockProfile = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+27 82 123 4567',
    memberSince: '2020-03-15',
    totalFlights: 24,
    loyaltyPoints: 1250
  }

  if (isLoggedIn) {
    return (
      <div className="min-h-screen pt-20 bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Customer Portal</h1>
                <p className="text-gray-600">Welcome back, {mockProfile.name}</p>
              </div>
              <button
                onClick={handleLogout}
                className="btn btn-secondary"
              >
                Logout
              </button>
            </div>

            {/* Dashboard Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div className="card">
                <div className="card-body text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-2">
                    {mockBookings.length}
                  </div>
                  <div className="text-sm text-gray-600">Active Bookings</div>
                </div>
              </div>
              <div className="card">
                <div className="card-body text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-2">
                    {mockProfile.totalFlights}
                  </div>
                  <div className="text-sm text-gray-600">Total Flights</div>
                </div>
              </div>
              <div className="card">
                <div className="card-body text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-2">
                    {mockProfile.loyaltyPoints}
                  </div>
                  <div className="text-sm text-gray-600">Loyalty Points</div>
                </div>
              </div>
              <div className="card">
                <div className="card-body text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-2">
                    Gold
                  </div>
                  <div className="text-sm text-gray-600">Status</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Bookings */}
              <div className="lg:col-span-2">
                <div className="card">
                  <div className="card-header">
                    <h2 className="text-xl font-semibold text-gray-900">My Bookings</h2>
                  </div>
                  <div className="card-body">
                    <div className="space-y-4">
                      {mockBookings.map((booking) => (
                        <div key={booking.id} className="border border-gray-200 rounded-lg p-4">
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <h3 className="font-semibold text-gray-900">{booking.flight}</h3>
                              <p className="text-sm text-gray-600">{booking.route}</p>
                            </div>
                            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                              booking.status === 'Confirmed' 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-yellow-100 text-yellow-800'
                            }`}>
                              {booking.status}
                            </span>
                          </div>
                          <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                            <div>
                              <span className="font-medium">Date:</span> {booking.date}
                            </div>
                            <div>
                              <span className="font-medium">Time:</span> {booking.time}
                            </div>
                            <div>
                              <span className="font-medium">Passengers:</span> {booking.passengers}
                            </div>
                            <div>
                              <span className="font-medium">Booking ID:</span> {booking.id}
                            </div>
                          </div>
                          <div className="mt-4 flex gap-2">
                            <button className="btn btn-secondary text-sm px-4 py-2">
                              View Details
                            </button>
                            <button className="btn btn-primary text-sm px-4 py-2">
                              Check-in
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Profile & Quick Actions */}
              <div className="space-y-6">
                {/* Profile */}
                <div className="card">
                  <div className="card-header">
                    <h2 className="text-xl font-semibold text-gray-900">Profile</h2>
                  </div>
                  <div className="card-body">
                    <div className="space-y-4">
                      <div>
                        <label className="text-sm font-medium text-gray-500">Name</label>
                        <p className="text-gray-900">{mockProfile.name}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-500">Email</label>
                        <p className="text-gray-900">{mockProfile.email}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-500">Phone</label>
                        <p className="text-gray-900">{mockProfile.phone}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-500">Member Since</label>
                        <p className="text-gray-900">
                          {new Date(mockProfile.memberSince).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    <button className="btn btn-secondary w-full mt-4">
                      Edit Profile
                    </button>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="card">
                  <div className="card-header">
                    <h2 className="text-xl font-semibold text-gray-900">Quick Actions</h2>
                  </div>
                  <div className="card-body">
                    <div className="space-y-3">
                      <button className="btn btn-primary w-full">
                        Book New Flight
                      </button>
                      <button className="btn btn-secondary w-full">
                        Manage Bookings
                      </button>
                      <button className="btn btn-secondary w-full">
                        View Loyalty Points
                      </button>
                      <button className="btn btn-secondary w-full">
                        Download Receipts
                      </button>
                    </div>
                  </div>
                </div>

                {/* Loyalty Program */}
                <div className="card">
                  <div className="card-header">
                    <h2 className="text-xl font-semibold text-gray-900">Loyalty Program</h2>
                  </div>
                  <div className="card-body">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-primary-600 mb-2">
                        {mockProfile.loyaltyPoints}
                      </div>
                      <div className="text-sm text-gray-600 mb-4">Available Points</div>
                      <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                        <div 
                          className="bg-primary-600 h-2 rounded-full" 
                          style={{ width: '62%' }}
                        ></div>
                      </div>
                      <p className="text-sm text-gray-600">
                        750 points to next tier
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-md mx-auto"
        >
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Customer Portal
            </h1>
            <p className="text-gray-600">
              Access your bookings, manage your profile, and enjoy exclusive benefits.
            </p>
          </div>

          <div className="card">
            <div className="card-body">
              {/* Tab Navigation */}
              <div className="flex mb-6">
                <button
                  onClick={() => setActiveTab('login')}
                  className={`flex-1 py-2 px-4 text-center font-medium transition-colors duration-200 ${
                    activeTab === 'login'
                      ? 'text-primary-600 border-b-2 border-primary-600'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Login
                </button>
                <button
                  onClick={() => setActiveTab('register')}
                  className={`flex-1 py-2 px-4 text-center font-medium transition-colors duration-200 ${
                    activeTab === 'register'
                      ? 'text-primary-600 border-b-2 border-primary-600'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Register
                </button>
              </div>

              {/* Login Form */}
              {activeTab === 'login' && (
                <motion.form
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  onSubmit={handleLogin}
                  className="space-y-4"
                >
                  <div className="form-group">
                    <label className="form-label">Email Address</label>
                    <input
                      type="email"
                      className="form-input"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Password</label>
                    <input
                      type="password"
                      className="form-input"
                      placeholder="Enter your password"
                      required
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm text-gray-600">Remember me</span>
                    </label>
                    <a href="#" className="text-sm text-primary-600 hover:text-primary-700">
                      Forgot password?
                    </a>
                  </div>
                  <button type="submit" className="btn btn-primary w-full">
                    Login
                  </button>
                </motion.form>
              )}

              {/* Register Form */}
              {activeTab === 'register' && (
                <motion.form
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <div className="form-group">
                    <label className="form-label">Full Name</label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email Address</label>
                    <input
                      type="email"
                      className="form-input"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Phone Number</label>
                    <input
                      type="tel"
                      className="form-input"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Password</label>
                    <input
                      type="password"
                      className="form-input"
                      placeholder="Create a password"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Confirm Password</label>
                    <input
                      type="password"
                      className="form-input"
                      placeholder="Confirm your password"
                      required
                    />
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" className="mr-2" required />
                    <span className="text-sm text-gray-600">
                      I agree to the <a href="#" className="text-primary-600">Terms and Conditions</a>
                    </span>
                  </div>
                  <button type="submit" className="btn btn-primary w-full">
                    Create Account
                  </button>
                </motion.form>
              )}

              {/* Demo Login */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600 text-center mb-4">
                  Demo: Click "Login" to access the customer portal
                </p>
                <button
                  onClick={handleLogin}
                  className="btn btn-secondary w-full"
                >
                  Demo Login
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
