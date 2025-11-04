import React from 'react'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-700">Royal Props Management Group</h1>
          <nav className="space-x-6">
            <a href="#home" className="hover:text-blue-600">Home</a>
            <a href="#about" className="hover:text-blue-600">About</a>
            <a href="#services" className="hover:text-blue-600">Services</a>
            <a href="#properties" className="hover:text-blue-600">Properties</a>
            <a href="#contact" className="hover:text-blue-600">Contact Agent</a>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-10">
        <section id="home" className="text-center py-20">
          <h2 className="text-4xl font-extrabold text-blue-700 mb-4">We connect you to the Owner directly</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Buy, sell, or lease land and properties with trusted agents at Royal Props. We make real estate simple, secure, and transparent.</p>
        </section>

        <section id="about" className="py-16 border-t">
          <h3 className="text-3xl font-semibold text-gray-800 mb-6">About Us</h3>
          <p className="text-gray-600 leading-relaxed">Royal Props Management Group is a modern real estate agency specializing in connecting property buyers, sellers, and landlords directly. We ensure transparency, fair pricing, and fast transactions across Kenya’s property market.</p>
        </section>

        <section id="services" className="py-16 border-t">
          <h3 className="text-3xl font-semibold text-gray-800 mb-6">Our Services</h3>
          <ul className="space-y-4 text-gray-700">
            <li>✔️ Land and property sales</li>
            <li>✔️ Leasing and rental management</li>
            <li>✔️ Property valuation and documentation</li>
            <li>✔️ Direct owner-buyer connections</li>
          </ul>
        </section>

        <section id="properties" className="py-16 border-t">
          <h3 className="text-3xl font-semibold text-gray-800 mb-6">Featured Listings</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <img src="/images/kiambu-plot.jpg" alt="Kiambu Plot" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h4 className="text-xl font-semibold text-gray-800">3-acre Plot in Kiambu</h4>
                <p className="text-blue-600 font-bold">KES 4,500,000</p>
                <p className="text-gray-600 text-sm mt-2">Prime land near Ruiru town with ready title deed.</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <img src="/images/apartment.jpg" alt="Apartment" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h4 className="text-xl font-semibold text-gray-800">2-bedroom Apartment, Nairobi</h4>
                <p className="text-blue-600 font-bold">KES 12,000,000</p>
                <p className="text-gray-600 text-sm mt-2">Modern unit in Westlands with parking and balcony.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-16 border-t text-center">
          <h3 className="text-3xl font-semibold text-gray-800 mb-4">Contact an Agent</h3>
          <p className="text-gray-600 mb-6">Get in touch with us for inquiries, site visits, or new listings.</p>
          <a href="mailto:info@royalprops.com" className="bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800">Email Us</a>
        </section>
      </main>

      <footer className="bg-gray-900 text-gray-300 text-center py-6 mt-10">
        <p>© {new Date().getFullYear()} Royal Props Management Group. All rights reserved.</p>
      </footer>
    </div>
  )
}
