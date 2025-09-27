import React from 'react'
import Navbar from '../component/Navbar'
import vector3 from '../assets/Vector3.svg'
import base from '../assets/base.svg'
import group2 from '../assets/group2.svg'
import UrlTrimmer from '../component/Urlshort'

function Home() {
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <div className='flex text-center justify-center'>
        <div>
          <h2 className='text-3xl md:text-5xl text-center mt-[100px] font-bold'>
            Optimize Your Online Experience with <br />
            Our Advanced <span className='text-[#0065FE]'>URL Shortening</span> Solution
          </h2>
          <div className='justify-center text-center flex'>
            <img src={vector3} alt="Vector illustration" />
          </div>
          <p className='text-center mt-[20px] text-[18px] md:text-[20px]'>
            Personalize your shortened URLs to match your brand identity. Use custom slugs, <br />
            branded links, and domain customization options to reinforce your brand presence <br />
            and enhance user engagement.
          </p>
        </div>
      </div>

      <div className='flex justify-center text-center mt-[30px] mb-[100px]'>
        <button className='text-[20px] md:text-[23px] ml-[20px] mt-[5px] px-[20px] py-[10px] cursor-pointer bg-[#0065FE] rounded-[30px] text-white'>
          Sign up
        </button>
        <button className='text-[20px] md:text-[23px] ml-[20px] mt-[5px] px-[20px] py-[10px] cursor-pointer border border-[#0065FE] rounded-[30px] text-[#0065FE]'>
          Learn More
        </button>
        
      </div>
      <div >
        <div className='flex justify-center text-center '>
          <img src={group2} alt=""  />
                  
        </div>
        <div className='flex justify-center text-center '>
          <img src={base} alt=""  />
        </div>
      </div>

      {/* Stats Section */}
      <section className="px-6 md:px-20 py-12 bg-gray-50">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold">3M</h3>
            <p className="text-gray-600">Active users</p>
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-bold">60M</h3>
            <p className="text-gray-600">Links & QR codes created</p>
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-bold">1B</h3>
            <p className="text-gray-600">Clicked & Scanned connections</p>
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-bold">300k</h3>
            <p className="text-gray-600">App Integrations</p>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="px-6 md:px-20 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Left Side */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Why choose <span className="text-[#0065FE]">Scissors</span>
            </h2>
            <p className="text-gray-600">
              Scissors is the hub of everything that has to do with your link management. 
              We shorten your URLs, allow you to create custom ones for your personal, 
              business, and event usage. Our swift QR code creation, management, and usage 
              tracking with advanced analytics for all of these is second to none.
            </p>
          </div>

          {/* Right Side Features */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold mb-2">URL Shortening</h3>
              <p className="text-gray-600 text-sm">
                Shorten URLs at scale for business or events. Easy redirects, fast and reliable.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-2">Custom URLs</h3>
              <p className="text-gray-600 text-sm">
                Create custom branded links with the exact length you want. Perfect for socials.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-2">QR Codes</h3>
              <p className="text-gray-600 text-sm">
                Generate QR codes to engage your audience with quick scan-and-go access.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-2">Data Analytics</h3>
              <p className="text-gray-600 text-sm">
                Get insights into your links, QR codes, and custom URLs. Track usage and growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-gray-50 py-16 px-6 md:px-20">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
          A <span className="text-[#0065FE]">price perfect</span> for your needs.
        </h2>
        <p className="text-center text-gray-600 mb-10">
          From personal to business to social needs, we’ve got you covered.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Basic */}
          <div className="border rounded-lg p-6 bg-white shadow-sm">
            <h3 className="font-bold mb-2">Basic</h3>
            <p className="text-3xl font-bold">Free</p>
            <p className="text-gray-600 mb-4">Free plan for all users</p>
            <ul className="text-gray-600 space-y-2">
              <li>✔ Unlimited URL Shortening</li>
              <li>✔ Basic Link Analytics</li>
              <li>✔ Customisable Short Links</li>
              <li>✔ Standard Support</li>
              <li>✔ Ad-supported</li>
              <li>✔ One Plate of Beans</li>
            </ul>
          </div>

          {/* Professional */}
          <div className="border rounded-lg p-6 bg-[#1E3448] text-white shadow-lg scale-105">
            <h3 className="font-bold mb-2">Professional</h3>
            <p className="text-3xl font-bold">$15<span className="text-base">/month</span></p>
            <p className="mb-4">Ideal for business creators</p>
            <ul className="space-y-2">
              <li>✔ Enhanced Link Analytics</li>
              <li>✔ Custom Branded Domains</li>
              <li>✔ Advanced Link Customization</li>
              <li>✔ Priority Support</li>
              <li>✔ Ad-free Experience</li>
            </ul>
          </div>

          {/* Teams */}
          <div className="border rounded-lg p-6 bg-white shadow-sm">
            <h3 className="font-bold mb-2">Teams</h3>
            <p className="text-3xl font-bold">$25<span className="text-base">/month</span></p>
            <p className="text-gray-600 mb-4">Share with up to 10 users</p>
            <ul className="text-gray-600 space-y-2">
              <li>✔ Team Collaboration</li>
              <li>✔ User Roles and Permissions</li>
              <li>✔ Enhanced Security</li>
              <li>✔ API Access</li>
              <li>✔ Dedicated Account Manager</li>
            </ul>
          </div>
        </div>

        <div className="flex justify-center mt-10 gap-4">
          <button className="px-6 py-3 border border-[#0065FE] text-[#0065FE] rounded-lg">
            Get Custom Pricing
          </button>
          <button className="px-6 py-3 bg-[#0065FE] text-white rounded-lg">
            Select Pricing
          </button>
        </div>
      </section>
      <section className="bg-[#1E3448] text-white text-center ">

        <UrlTrimmer />
      </section>
            
            {/* FAQs Section */}
      <section className="px-6 md:px-20 py-16 bg-white">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">FAQs</h2>
        <div className="space-y-8">
          <div>
            <h3 className="font-semibold text-lg">
              How does URL shortening work?
            </h3>
            <p className="text-gray-600 mt-2">
              URL shortening works by taking a long URL and creating a shorter, 
              condensed version that redirects to the original URL. When a user clicks 
              on the shortened link, they are redirected to the intended destination.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">
              Is it necessary to create an account to use the URL shortening service?
            </h3>
            <p className="text-gray-600 mt-2">
              No, you can shorten links without creating an account. 
              However, signing up gives you access to advanced features like analytics and custom domains.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">
              Are the shortened links permanent? Will they expire?
            </h3>
            <p className="text-gray-600 mt-2">
              Most shortened links are permanent, but expiration may apply based on 
              your subscription plan or service settings.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">
              Are there any limitations on the number of URLs I can shorten?
            </h3>
            <p className="text-gray-600 mt-2">
              Free plans may have limits, but premium users often enjoy unlimited shortening.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">
              Can I customize the shortened URLs to reflect my brand or content?
            </h3>
            <p className="text-gray-600 mt-2">
              Yes, with branded domains and custom slugs, you can personalize URLs to fit your brand identity.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">
              Can I track the performance of my shortened URLs?
            </h3>
            <p className="text-gray-600 mt-2">
              Absolutely. Our analytics let you monitor clicks, locations, devices, and more.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">
              How secure is the URL shortening service?
            </h3>
            <p className="text-gray-600 mt-2">
              We provide HTTPS encryption, spam protection, and advanced security checks 
              to ensure your links are safe.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">
              What is a QR code and what can it do?
            </h3>
            <p className="text-gray-600 mt-2">
              A QR code is a scannable image that links users directly to your shortened 
              URL or other online content quickly and easily.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">
              Is there an API available for integrating the service into my apps?
            </h3>
            <p className="text-gray-600 mt-2">
              Yes, our API allows developers to integrate URL shortening, 
              QR generation, and analytics directly into their apps or platforms.
            </p>
          </div>
        </div>
      </section>


      {/* CTA Banner */}
      <section className="bg-[#1E3448] text-white text-center py-20 px-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          Revolutionizing Link Optimization
        </h2>
        <button className="bg-[#0065FE] px-8 py-3 rounded-lg">
          Get Started
        </button>
      </section>

      {/* Footer */}
      <footer className="px-6 md:px-20 py-12 bg-white">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 text-gray-700">
          {/* Logo + Social */}
          <div className="col-span-2">
            <h3 className="font-bold text-lg mb-4">SCISSOR</h3>
            <div className="flex space-x-4">
              <i className="fab fa-twitter"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-linkedin"></i>
              <i className="fab fa-facebook"></i>
            </div>
          </div>

          {/* Columns */}
          <div>
            <h4 className="font-bold mb-2">Why Scissor?</h4>
            <ul className="space-y-1 text-sm">
              <li>Scissor 101</li>
              <li>Integrations & API</li>
              <li>Pricing</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-2">Solutions</h4>
            <ul className="space-y-1 text-sm">
              <li>Social Media</li>
              <li>Digital Marketing</li>
              <li>Customer Service</li>
              <li>For Developers</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-2">Products</h4>
            <ul className="space-y-1 text-sm">
              <li>Link Management</li>
              <li>QR Codes</li>
              <li>Link-in-bio</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-2">Company</h4>
            <ul className="space-y-1 text-sm">
              <li>About Scissor</li>
              <li>Careers</li>
              <li>Partners</li>
              <li>Contact</li>
              <li>Reviews</li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-10 text-sm text-gray-500">
          Term of Service | Security | © Scissor 2023
        </div>
      </footer>

    </div>
  )
}

export default Home
