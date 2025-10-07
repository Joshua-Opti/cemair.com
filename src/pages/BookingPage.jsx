import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

export const BookingPage = () => {
  const [searchParams] = useSearchParams()
  const [searchData, setSearchData] = useState({
    from: searchParams.get('from') || '',
    to: searchParams.get('to') || '',
    departureDate: searchParams.get('departure') ? new Date(searchParams.get('departure')) : null,
    returnDate: searchParams.get('return') ? new Date(searchParams.get('return')) : null,
    passengers: parseInt(searchParams.get('passengers')) || 1,
    tripType: searchParams.get('type') || 'one-way'
  })

  const [flights, setFlights] = useState([])
  const [loading, setLoading] = useState(false)
  const [selectedFlight, setSelectedFlight] = useState(null)

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

  const searchFlights = async () => {
    if (!searchData.from || !searchData.to || !searchData.departureDate) {
      alert('Please fill in all required fields')
      return
    }

    setLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      const mockFlights = [
        {
          id: 1,
          flightNumber: 'CM101',
          from: searchData.from,
          to: searchData.to,
          departure: new Date(searchData.departureDate.getTime() + 8 * 60 * 60 * 1000), // 8 AM
          arrival: new Date(searchData.departureDate.getTime() + 10 * 60 * 60 * 1000), // 10 AM
          duration: '2h 00m',
          price: 2500,
          aircraft: 'Beechcraft 1900',
          availableSeats: 19
        },
        {
          id: 2,
          flightNumber: 'CM102',
          from: searchData.from,
          to: searchData.to,
          departure: new Date(searchData.departureDate.getTime() + 14 * 60 * 60 * 1000), // 2 PM
          arrival: new Date(searchData.departureDate.getTime() + 16 * 60 * 60 * 1000), // 4 PM
          duration: '2h 00m',
          price: 2800,
          aircraft: 'Beechcraft 1900',
          availableSeats: 15
        },
        {
          id: 3,
          flightNumber: 'CM103',
          from: searchData.from,
          to: searchData.to,
          departure: new Date(searchData.departureDate.getTime() + 18 * 60 * 60 * 1000), // 6 PM
          arrival: new Date(searchData.departureDate.getTime() + 20 * 60 * 60 * 1000), // 8 PM
          duration: '2h 00m',
          price: 2200,
          aircraft: 'Beechcraft 1900',
          availableSeats: 22
        }
      ]
      setFlights(mockFlights)
      setLoading(false)
    }, 1500)
  }

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true 
    })
  }

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', { 
      weekday: 'short',
      month: 'short', 
      day: 'numeric' 
    })
  }

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Book Your Flight
            </h1>
            <p className="text-lg text-gray-600">
              Find and book your perfect flight with CemAir
            </p>
          </div>

          {/* Search Form */}
          <div className="card mb-8">
            <div className="card-body">
              <form onSubmit={(e) => { e.preventDefault(); searchFlights(); }} className="space-y-6">
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
                      disabled={loading}
                      className="btn btn-primary w-full text-lg py-3 disabled:opacity-50"
                    >
                      {loading ? 'Searching...' : 'Search Flights'}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Flight Results */}
          {flights.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Available Flights
              </h2>
              
              {flights.map((flight) => (
                <div
                  key={flight.id}
                  className={`card cursor-pointer transition-all duration-300 ${
                    selectedFlight?.id === flight.id 
                      ? 'ring-2 ring-primary-500 bg-primary-50' 
                      : 'hover:shadow-lg'
                  }`}
                  onClick={() => setSelectedFlight(flight)}
                >
                  <div className="card-body">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                      <div className="flex-1">
                        <div className="flex items-center mb-4">
                          <div className="text-2xl font-bold text-primary-600 mr-4">
                            {flight.flightNumber}
                          </div>
                          <div className="text-sm text-gray-500">
                            {flight.aircraft}
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div>
                            <div className="text-sm text-gray-500">From</div>
                            <div className="font-semibold">{flight.from}</div>
                            <div className="text-lg font-bold text-gray-900">
                              {formatTime(flight.departure)}
                            </div>
                            <div className="text-sm text-gray-500">
                              {formatDate(flight.departure)}
                            </div>
                          </div>
                          
                          <div className="text-center">
                            <div className="text-sm text-gray-500 mb-2">Duration</div>
                            <div className="font-semibold text-gray-900">
                              {flight.duration}
                            </div>
                            <div className="text-xs text-gray-500 mt-1">
                              {flight.availableSeats} seats available
                            </div>
                          </div>
                          
                          <div>
                            <div className="text-sm text-gray-500">To</div>
                            <div className="font-semibold">{flight.to}</div>
                            <div className="text-lg font-bold text-gray-900">
                              {formatTime(flight.arrival)}
                            </div>
                            <div className="text-sm text-gray-500">
                              {formatDate(flight.arrival)}
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-4 lg:mt-0 lg:ml-8 text-center lg:text-right">
                        <div className="text-3xl font-bold text-primary-600 mb-2">
                          R{flight.price.toLocaleString()}
                        </div>
                        <div className="text-sm text-gray-500 mb-4">
                          per person
                        </div>
                        <button
                          className="btn btn-primary"
                          onClick={(e) => {
                            e.stopPropagation()
                            // Handle booking
                            alert('Proceeding to seat selection...')
                          }}
                        >
                          Select Flight
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {loading && (
            <div className="text-center py-12">
              <div className="spinner mx-auto mb-4"></div>
              <p className="text-gray-600">Searching for flights...</p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  )
}
