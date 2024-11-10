import React from 'react';
import './index.css';
import { AcademicCapIcon, UserGroupIcon, HeartIcon } from '@heroicons/react/24/solid';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AboutUs from './pages/AboutUs';

export default function Component() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
        <div className="bg-[#FCFCFC] min-h-screen">
      <header className="bg-white sticky top-0 z-10 shadow-sm">
        <div className="container mx-auto px-4 py-6 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#4ade80]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
            <h1 className="text-2xl font-bold">Futo 1k</h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-[#4ade80] font-semibold">Home</a>
            <Link to="/AboutUs" className="text-gray-600 hover:text-[#4ade80]">About</Link>
            <a href="#" className="text-gray-600 hover:text-[#4ade80]">Champaigns</a>
            <a href="#" className="text-gray-600 hover:text-[#4ade80]">Gallery</a>
            <a href="#" className="text-gray-600 hover:text-[#4ade80]">Contact</a>
          </nav>
          <div className="flex items-center space-x-4">
            <button className="hidden md:inline-flex px-4 py-2 border border-[#4ade80] text-[#4ade80] rounded-md hover:bg-[#4ade80] hover:text-white transition-colors">
              Donate Now
            </button>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600 md:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </div>
        </div>
      </header>
      <main>
        <section className="container mx-auto px-4 py-16 md:py-24">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                Giving help to those who need it
              </h2>
              <p className="text-gray-600 mb-8">
              Join us in making a difference across our campus. Whether it’s supporting student initiatives, funding essential projects, or fostering academic success, Futo 1k brings us all together to support the FUTO community.
              </p>
              <div className="flex space-x-4">
                <button className="px-6 py-3 bg-[#4ade80] hover:bg-[#FF5555] text-white rounded-md transition-colors">
                  Donate Now
                </button>
                <Link to="/AboutUs">
                <button className="px-6 py-3 border border-[#4ade80] text-[#4ade80] rounded-md hover:bg-[#4ade80] hover:text-white transition-colors">
                  Know About Us
                </button>
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <img
                src="/smile.png?height=400&width=600"
                alt="Charity work"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Programs</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  <div className="bg-gray-100 p-6 rounded-lg text-center">
    <AcademicCapIcon className="h-12 w-12 text-green-400 mx-auto mb-4" />
    <h3 className="text-xl font-semibold mb-2">School Fees Assistance</h3>
    <p className="text-gray-600">Helping students raise funds to complete their school fees, ensuring they stay on track with their education.</p>
  </div>
  <div className="bg-gray-100 p-6 rounded-lg text-center">
    <UserGroupIcon className="h-12 w-12 text-green-400 mx-auto mb-4" />
    <h3 className="text-xl font-semibold mb-2">End Student Hunger</h3>
    <p className="text-gray-600">Providing food support to ensure no student goes hungry, allowing them to focus fully on their studies.</p>
  </div>
  <div className="bg-gray-100 p-6 rounded-lg text-center">
    <HeartIcon className="h-12 w-12 text-green-400 mx-auto mb-4" />
    <h3 className="text-xl font-semibold mb-2">Medical Bill Support</h3>
    <p className="text-gray-600">Assisting financially unstable students with medical bills, supporting their health and well-being.</p>
  </div>
</div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Recent Champaigns</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Feed a Student Initiative", image: "/feed.png?height=200&width=300", goal: 50000, raised: 30000 },
                { title: "Campus Clean Water Initiative", image: "/water.png?height=200&width=300", goal: 40000, raised: 25000 },
                { title: "Student Support Fund", image: "/student_fund.png?height=200&width=300", goal: 30000, raised: 20000 },
              ].map((cause, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
                  <img src={cause.image} alt={cause.title} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{cause.title}</h3>
                    <div className="mb-4">
                      <div className="h-2 bg-gray-200 rounded-full">
                        <div
                          className="h-2 bg-[#4ade80] rounded-full"
                          style={{ width: `₦{(cause.raised / cause.goal) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>Raised: ₦{cause.raised.toLocaleString()}</span>
                      <span>Goal: ₦{cause.goal.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Upcoming Events</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Charity Football Match", date: "December 15, 2024", location: "Futo main pitch" },
                { title: "Annual Fundraising Gala", date: "December 22, 2024", location: "SOPS Theatre" },
                { title: "Campus Clean-up Day", date: "December 5, 2024", location: "Asiabaka Square" },
              ].map((event, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                  <p className="text-gray-600 mb-2">{event.date}</p>
                  <p className="text-gray-600">{event.location}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Latest News</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "New Partnership Announcement", date: "December 28, 2024", image: "/partnership.png?height=200&width=300" },
                { title: "Successful Fundraising Campaign", date: "December 15, 2024", image: "/donate.png?height=200&width=300" },
                { title: "Volunteer Appreciation Day", date: "December 5, 2024", image: "/appreciate.png?height=200&width=300" },
              ].map((news, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                  <img src={news.image} alt={news.title} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{news.title}</h3>
                    <p className="text-gray-600 mb-4">{news.date}</p>
                    <a href="#" className="text-[#4ade80] hover:underline">Read More</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#4ade80] text-white py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-8 md:mb-0">
                <h3 className="text-3xl font-bold mb-2">Subscribe to newsletter</h3>
                <p>Subscribe to receive updates on our latest campaigns, events, and impact stories from the FUTO community.</p>
              </div>
              <div className="flex w-full md:w-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 rounded-l-md w-full md:w-64 text-gray-800"
                />
                <button className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-r-md transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-xl font-semibold mb-4">About Us</h4>
              <p className="text-gray-400">Futo 1k is a campus-based initiative committed to enhancing student life and well-being at the Federal University of Technology Owerri.</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
                <li><Link to="/AboutUs" className="text-gray-400 hover:text-white">About</Link></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Champaigns</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Federal University of Technology Owerri</li>
                <li>Phone: +234 802 265 1217</li>
                <li>Email: info@futo1k.org</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Futo 1k. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
     } />
        
     {/* Route for the About Us page */}
     <Route path="/AboutUs" element={<AboutUs />} />
      </Routes>
    </Router>
    
  )
}
