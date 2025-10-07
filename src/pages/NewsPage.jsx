import React from 'react'
import { motion } from 'framer-motion'

export const NewsPage = () => {
  const newsItems = [
    {
      id: 1,
      title: 'CemAir Announces New Route to Cape Town',
      excerpt: 'We\'re excited to announce our new daily service between Johannesburg and Cape Town, starting next month. This route will provide convenient connections for business and leisure travelers.',
      content: 'CemAir is pleased to announce the launch of our new daily service between Johannesburg and Cape Town, starting March 1st, 2024. This route will operate twice daily, providing convenient morning and evening departures for both business and leisure travelers.\n\nThe new service will be operated by our modern Beechcraft 1900D aircraft, featuring comfortable seating for 19 passengers and a flight time of approximately 2 hours. Passengers can expect our signature service excellence, including complimentary refreshments and professional cabin crew.\n\nBookings are now open for the new route, with introductory fares starting from R2,500 per person. We look forward to connecting more South Africans with our reliable and comfortable service.',
      date: '2024-01-15',
      category: 'Route Updates',
      author: 'CemAir Communications',
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&h=400&fit=crop',
      featured: true
    },
    {
      id: 2,
      title: 'Enhanced Safety Measures Implemented',
      excerpt: 'CemAir has implemented additional safety protocols to ensure the highest standards of passenger safety and security across all our operations.',
      content: 'In our continued commitment to safety excellence, CemAir has implemented enhanced safety protocols across all our operations. These measures include upgraded security screening procedures, enhanced crew training programs, and improved aircraft maintenance protocols.\n\nOur safety management system has been updated to incorporate the latest industry best practices and regulatory requirements. All crew members have undergone additional training in emergency procedures and passenger safety protocols.\n\nThese enhancements reinforce our position as one of South Africa\'s safest airlines and demonstrate our unwavering commitment to passenger safety and security.',
      date: '2024-01-10',
      category: 'Safety',
      author: 'Safety Department',
      image: 'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=800&h=400&fit=crop',
      featured: false
    },
    {
      id: 3,
      title: 'New Aircraft Added to Fleet',
      excerpt: 'Our fleet expansion continues with the addition of two new Beechcraft 1900D aircraft, bringing our total fleet to 12 aircraft.',
      content: 'CemAir is pleased to announce the addition of two new Beechcraft 1900D aircraft to our fleet. These aircraft represent the latest in regional aviation technology and will enhance our capacity to serve our growing network of destinations.\n\nThe new aircraft feature state-of-the-art avionics, improved fuel efficiency, and enhanced passenger comfort. They will be deployed on our busiest routes, providing additional capacity and improved scheduling flexibility.\n\nThis fleet expansion is part of our strategic growth plan to better serve our customers and expand our route network across Southern Africa.',
      date: '2024-01-05',
      category: 'Fleet',
      author: 'Fleet Management',
      image: 'https://images.unsplash.com/photo-1556388158-158ea5ccacbd?w=800&h=400&fit=crop',
      featured: false
    },
    {
      id: 4,
      title: 'Digital Transformation Initiative Launched',
      excerpt: 'CemAir has launched a comprehensive digital transformation initiative to enhance customer experience and operational efficiency.',
      content: 'CemAir is excited to announce the launch of our comprehensive digital transformation initiative. This multi-year program will modernize our technology infrastructure, enhance our customer experience, and improve operational efficiency.\n\nKey initiatives include the development of a new mobile app, enhanced online booking system, and improved customer service platforms. We\'re also implementing advanced analytics and automation tools to optimize our operations.\n\nThis digital transformation will position CemAir as a leader in aviation technology and provide our customers with a more seamless and convenient travel experience.',
      date: '2024-01-01',
      category: 'Technology',
      author: 'IT Department',
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=400&fit=crop',
      featured: false
    },
    {
      id: 5,
      title: 'Sustainability Commitment Announced',
      excerpt: 'CemAir announces new sustainability initiatives as part of our commitment to environmental responsibility and carbon reduction.',
      content: 'CemAir is proud to announce our new sustainability initiatives as part of our commitment to environmental responsibility. These initiatives include carbon offset programs, fuel efficiency improvements, and waste reduction measures.\n\nWe\'re implementing advanced flight planning systems to optimize routes and reduce fuel consumption. Our ground operations are also being updated with electric ground support equipment and renewable energy sources.\n\nThese sustainability measures align with our commitment to responsible aviation and contribute to the global effort to reduce aviation\'s environmental impact.',
      date: '2023-12-20',
      category: 'Sustainability',
      author: 'Environmental Team',
      image: 'https://images.unsplash.com/photo-1569163139394-de446e3d2b0a?w=800&h=400&fit=crop',
      featured: false
    },
    {
      id: 6,
      title: 'Customer Service Excellence Award',
      excerpt: 'CemAir receives the Customer Service Excellence Award for the third consecutive year, recognizing our commitment to exceptional service.',
      content: 'CemAir is honored to receive the Customer Service Excellence Award for the third consecutive year. This prestigious award recognizes our unwavering commitment to providing exceptional customer service and passenger experience.\n\nOur customer service team has consistently delivered outstanding service, with a 98% customer satisfaction rating and industry-leading response times. This achievement reflects our dedication to putting customers at the center of everything we do.\n\nWe thank our customers for their continued trust and support, and we remain committed to maintaining the highest standards of service excellence.',
      date: '2023-12-15',
      category: 'Awards',
      author: 'Customer Service',
      image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=400&fit=crop',
      featured: false
    }
  ]

  const categories = ['All', 'Route Updates', 'Safety', 'Fleet', 'Technology', 'Sustainability', 'Awards']
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredNews = selectedCategory === 'All' 
    ? newsItems 
    : newsItems.filter(item => item.category === selectedCategory)

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              News & Updates
            </h1>
            <p className="text-xl md:text-2xl text-gray-100 leading-relaxed">
              Stay informed about CemAir's latest developments, route updates, 
              and industry news.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-2"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Article */}
      {filteredNews.find(item => item.featured) && (
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
                <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Featured
                </span>
              </div>
              
              {(() => {
                const featured = filteredNews.find(item => item.featured)
                return (
                  <article className="card hover:shadow-xl transition-all duration-300">
                    <div className="relative overflow-hidden">
                      <img
                        src={featured.image}
                        alt={featured.title}
                        className="w-full h-64 md:h-80 object-cover"
                        loading="lazy"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                          {featured.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="card-body">
                      <div className="text-sm text-gray-500 mb-4">
                        {formatDate(featured.date)} • {featured.author}
                      </div>
                      
                      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                        {featured.title}
                      </h2>
                      
                      <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                        {featured.excerpt}
                      </p>
                      
                      <button className="btn btn-primary">
                        Read Full Article
                      </button>
                    </div>
                  </article>
                )
              })()}
            </motion.div>
          </div>
        </section>
      )}

      {/* News Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredNews
              .filter(item => !item.featured)
              .map((item, index) => (
                <motion.article
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="card group hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {item.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="card-body">
                    <div className="text-sm text-gray-500 mb-2">
                      {formatDate(item.date)} • {item.author}
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-200">
                      {item.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {item.excerpt}
                    </p>
                    
                    <button className="text-primary-600 font-medium hover:text-primary-700 transition-colors duration-200">
                      Read More →
                    </button>
                  </div>
                </motion.article>
              ))}
          </motion.div>

          {filteredNews.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center py-12"
            >
              <div className="text-6xl mb-4">📰</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No articles found
              </h3>
              <p className="text-gray-600">
                No articles found for the selected category.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-4">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-100 mb-8">
              Subscribe to our newsletter for the latest news, route updates, and special offers.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                required
              />
              <button
                type="submit"
                className="btn bg-white text-primary-600 hover:bg-gray-100 px-8 py-3"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
