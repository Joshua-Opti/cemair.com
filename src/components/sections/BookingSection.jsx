import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

export const BookingSection = () => {
  const [searchData, setSearchData] = useState({
    from: '',
    to: '',
    departureDate: null,
    returnDate: null,
    passengers: 1,
    tripType: 'one-way'
  })

  const destinations = [
    'Johannesburg (JNB)',
    'Cape Town (CPT)',
    'Durban (DUR)',
    'Port Elizabeth (PLZ)',
    'East London (ELS)',
    'Bloemfontein (BFN)',
    'Kimberley (KIM)',
    'Upington (UTN)'
  ]

  const handleInputChange = (field, value) => {
    setSearchData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSearch = (e) => {
    e.preventDefault()
    // Navigate to booking page with search parameters
    const params = new URLSearchParams({
      from: searchData.from,
      to: searchData.to,
      departure: searchData.departureDate?.toISOString().split('T')[0] || '',
      return: searchData.returnDate?.toISOString().split('T')[0] || '',
      passengers: searchData.passengers.toString(),
      type: searchData.tripType
    })
    window.location.href = `/booking?${params.toString()}`
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Book Your Flight
            </h2>
            <p className="text-lg text-gray-600">
              Find and book your perfect flight with CemAir
            </p>
          </div>

          <div className="card">
            <div className="card-body">
              <form onSubmit={handleSearch} className="space-y-6">
                {/* Trip Type */}
                <div className="flex space-x-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="tripType"
                      value="one-way"
                      checked={searchData.tripType === 'one-way'}
                      onChange={(e) => handleInputChange('tripType', e.target.value)}
                      className="mr-2"
                    />
                    One Way
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="tripType"
                      value="round-trip"
                      checked={searchData.tripType === 'round-trip'}
                      onChange={(e) => handleInputChange('tripType', e.target.value)}
                      className="mr-2"
                    />
                    Round Trip
                  </label>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {/* From */}
                  <div className="form-group">
                    <label className="form-label">From</label>
                    <select
                      value={searchData.from}
                      onChange={(e) => handleInputChange('from', e.target.value)}
                      className="form-input"
                      required
                    >
                      <option value="">Select origin</option>
                      {destinations.map((dest) => (
                        <option key={dest} value={dest}>
                          {dest}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* To */}
                  <div className="form-group">
                    <label className="form-label">To</label>
                    <select
                      value={searchData.to}
                      onChange={(e) => handleInputChange('to', e.target.value)}
                      className="form-input"
                      required
                    >
                      <option value="">Select destination</option>
                      {destinations
                        .filter(dest => dest !== searchData.from)
                        .map((dest) => (
                          <option key={dest} value={dest}>
                            {dest}
                          </option>
                        ))}
                    </select>
                  </div>

                  {/* Departure Date */}
                  <div className="form-group">
                    <label className="form-label">Departure</label>
                    <DatePicker
                      selected={searchData.departureDate}
                      onChange={(date) => handleInputChange('departureDate', date)}
                      minDate={new Date()}
                      className="form-input w-full"
                      placeholderText="Select date"
                      dateFormat="dd/MM/yyyy"
                      required
                    />
                  </div>

                  {/* Return Date */}
                  {searchData.tripType === 'round-trip' && (
                    <div className="form-group">
                      <label className="form-label">Return</label>
                      <DatePicker
                        selected={searchData.returnDate}
                        onChange={(date) => handleInputChange('returnDate', date)}
                        minDate={searchData.departureDate || new Date()}
                        className="form-input w-full"
                        placeholderText="Select date"
                        dateFormat="dd/MM/yyyy"
                        required
                      />
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Passengers */}
                  <div className="form-group">
                    <label className="form-label">Passengers</label>
                    <select
                      value={searchData.passengers}
                      onChange={(e) => handleInputChange('passengers', parseInt(e.target.value))}
                      className="form-input"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => (
                        <option key={num} value={num}>
                          {num} {num === 1 ? 'Passenger' : 'Passengers'}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Search Button */}
                  <div className="form-group flex items-end">
                    <button
                      type="submit"
                      className="btn btn-primary w-full text-lg py-3"
                    >
                      Search Flights
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Quick Links */}
          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">Popular destinations:</p>
            <div className="flex flex-wrap justify-center gap-2">
              {['Johannesburg → Cape Town', 'Cape Town → Durban', 'Johannesburg → Durban'].map((route) => (
                <Link
                  key={route}
                  to={`/booking?from=${route.split(' → ')[0]}&to=${route.split(' → ')[1]}`}
                  className="px-4 py-2 bg-white border border-gray-300 rounded-full text-sm hover:bg-primary-50 hover:border-primary-300 transition-colors duration-200"
                >
                  {route}
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
