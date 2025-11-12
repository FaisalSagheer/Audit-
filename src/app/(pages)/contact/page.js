'use client'
import { Mail, MapPin, Phone } from 'lucide-react'
import React from 'react'

function Contact() {
  return (
    <div>
        <section className="-mt-20 pb-10 bg-secondary text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-40">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold">Let's Create Something Amazing</h2>
            <p className="text-xl max-w-3xl mx-auto">
              Ready to bring your project to life? Get in touch and let's discuss 
              how my voice can elevate your brand.
            </p>
          </div>

          <div>
            {/* Contact Form */}
            <div className="bg-slate-800 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-6 text-amber-400">Send a Message</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-white placeholder-slate-400"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-white placeholder-slate-400"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-white placeholder-slate-400"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Project Type
                  </label>
                  <select className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-white">
                    <option value="">Select a project type</option>
                    <option value="commercial">Commercial</option>
                    <option value="narration">Narration</option>
                    <option value="character">Character Voice</option>
                    <option value="corporate">Corporate</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Project Details
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-white placeholder-slate-400"
                    placeholder="Tell me about your project..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold py-4 rounded-lg transition-colors flex items-center justify-center space-x-2"
                >
                  <Mail className="h-5 w-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>

            {/* Contact Information */}
            {/* <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-amber-400">Get In Touch</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-amber-400 mt-1" />
                    <div>
                      <div className="font-semibold">Email</div>
                      <div className="text-slate-300">alex@voiceoverexpert.com</div>
                      <div className="text-sm text-slate-400">Response within 24 hours</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-amber-400 mt-1" />
                    <div>
                      <div className="font-semibold">Phone</div>
                      <div className="text-slate-300">+1 (555) 123-4567</div>
                      <div className="text-sm text-slate-400">Available 9 AM - 6 PM EST</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-accent mt-1" />
                    <div>
                      <div className="font-semibold">Studio Location</div>
                      <div className="text-slate-300">Los Angeles, CA</div>
                      <div className="text-sm text-slate-400">Professional home studio</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800 rounded-2xl p-6">
                <h4 className="text-lg font-semibold mb-4 text-amber-400">Quick Facts</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Typical Turnaround:</span>
                    <span className="text-white">24-48 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Rush Jobs:</span>
                    <span className="text-white">Same day available</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">File Formats:</span>
                    <span className="text-white">WAV, MP3, AIFF</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Revisions:</span>
                    <span className="text-white">2 included</span>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>

    </div>
  )
}

export default Contact
