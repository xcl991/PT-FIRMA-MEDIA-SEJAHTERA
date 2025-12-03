'use client'

import { useState, useEffect } from 'react'
import { Menu, X, ChevronRight, Sparkles, Target, Zap, Award, ArrowRight, Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentBg, setCurrentBg] = useState(0)
  
  const backgrounds = [
    'https://ik.imagekit.io/4yddi8qaz/RTP/BG1.jpg',
    'https://ik.imagekit.io/4yddi8qaz/RTP/BG2.jpg',
    'https://ik.imagekit.io/4yddi8qaz/RTP/BG3.jpg',
    'https://ik.imagekit.io/4yddi8qaz/RTP/BG4.jpg',
    'https://ik.imagekit.io/4yddi8qaz/RTP/BG5.jpg'
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgrounds.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Background with overlay */}
      <div className="fixed inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000"
          style={{ backgroundImage: `url(${backgrounds[currentBg]})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
      </div>

      {/* Navigation */}
      <nav className="relative z-50 px-6 py-4 lg:px-12">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Sparkles className="h-8 w-8 text-pink-500" />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
              FIRMA MEDIA SEJAHTERA
            </h1>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="hover:text-pink-400 transition-colors">Beranda</button>
            <button onClick={() => scrollToSection('about')} className="hover:text-pink-400 transition-colors">Tentang</button>
            <button onClick={() => scrollToSection('services')} className="hover:text-pink-400 transition-colors">Layanan</button>
            <button onClick={() => scrollToSection('portfolio')} className="hover:text-pink-400 transition-colors">Portfolio</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-pink-400 transition-colors">Kontak</button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <button onClick={() => scrollToSection('home')} className="block w-full text-left hover:text-pink-400 transition-colors">Beranda</button>
            <button onClick={() => scrollToSection('about')} className="block w-full text-left hover:text-pink-400 transition-colors">Tentang</button>
            <button onClick={() => scrollToSection('services')} className="block w-full text-left hover:text-pink-400 transition-colors">Layanan</button>
            <button onClick={() => scrollToSection('portfolio')} className="block w-full text-left hover:text-pink-400 transition-colors">Portfolio</button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left hover:text-pink-400 transition-colors">Kontak</button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative z-10 min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-500/30 rounded-full text-sm font-medium text-pink-300 mb-4">
              ✨ Creative Advertising Agency
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="block bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent animate-pulse">
              PT FIRMA
            </span>
            <span className="block bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse delay-100">
              MEDIA SEJAHTERA
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Wujudkan <span className="text-pink-400 font-bold">Visi Kreatif</span> Anda menjadi <span className="text-cyan-400 font-bold">Kenyataan Digital</span> yang Memukau
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-pink-500/25"
              onClick={() => scrollToSection('services')}
            >
              Jelajahi Layanan Kami
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-8 py-4 text-lg font-semibold rounded-full transform hover:scale-105 transition-all duration-300"
              onClick={() => scrollToSection('contact')}
            >
              Mulai Proyek Anda
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-pink-400">500+</div>
              <div className="text-sm text-gray-400">Klien Puas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400">1000+</div>
              <div className="text-sm text-gray-400">Proyek Selesai</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400">50+</div>
              <div className="text-sm text-gray-400">Penghargaan</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              Tentang Kami
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Lebih dari sekadar agency - kami adalah mitra kreatif Anda
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-pink-400 mb-3">PT FIRMA MEDIA SEJAHTERA</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Sebagai perusahaan periklanan terkemuka, kami menghadirkan solusi kreatif yang inovatif untuk brand Anda. 
                    Dengan tim berpengalaman dan passion yang mendalam, kami mengubah ide-ide brilian menjadi kampanye yang memorable.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-pink-500/10 to-purple-500/10 border border-pink-500/20 rounded-lg p-4">
                    <Target className="h-8 w-8 text-pink-400 mb-2" />
                    <h4 className="font-semibold text-white mb-1">Target Oriented</h4>
                    <p className="text-sm text-gray-400">Fokus pada hasil dan ROI maksimal</p>
                  </div>
                  <div className="bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border border-purple-500/20 rounded-lg p-4">
                    <Zap className="h-8 w-8 text-purple-400 mb-2" />
                    <h4 className="font-semibold text-white mb-1">Fast Delivery</h4>
                    <p className="text-sm text-gray-400">Proses cepat tanpa mengorbankan kualitas</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <Card className="bg-gradient-to-br from-pink-500/10 to-transparent border-pink-500/20">
                <CardContent className="p-6 text-center">
                  <Award className="h-12 w-12 text-pink-400 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-white mb-1">10+</div>
                  <div className="text-sm text-gray-400">Tahun Pengalaman</div>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-purple-500/10 to-transparent border-purple-500/20">
                <CardContent className="p-6 text-center">
                  <Sparkles className="h-12 w-12 text-purple-400 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-white mb-1">50+</div>
                  <div className="text-sm text-gray-400">Tim Kreatif</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
              Layanan Kami
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Solusi lengkap untuk kebutuhan advertising dan digital marketing Anda
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-pink-500/10 to-transparent border-pink-500/20 hover:border-pink-500/40 transition-all duration-300 hover:transform hover:scale-105">
              <CardContent className="p-8">
                <div className="h-16 w-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center mb-6">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Digital Advertising</h3>
                <p className="text-gray-300 mb-6">
                  Kampanye iklan digital yang efektif di berbagai platform dengan targeting yang presisi.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Social Media Ads</li>
                  <li>• Google Ads</li>
                  <li>• Programmatic Advertising</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-500/10 to-transparent border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:transform hover:scale-105">
              <CardContent className="p-8">
                <div className="h-16 w-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mb-6">
                  <Sparkles className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Creative Design</h3>
                <p className="text-gray-300 mb-6">
                  Desain kreatif yang menarik perhatian dan meningkatkan brand awareness.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Brand Identity</li>
                  <li>• Graphic Design</li>
                  <li>• Video Production</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-cyan-500/10 to-transparent border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 hover:transform hover:scale-105">
              <CardContent className="p-8">
                <div className="h-16 w-16 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-full flex items-center justify-center mb-6">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Brand Strategy</h3>
                <p className="text-gray-300 mb-6">
                  Strategi brand yang komprehensif untuk membangun identitas yang kuat dan konsisten.
                </p>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>• Market Research</li>
                  <li>• Brand Positioning</li>
                  <li>• Content Strategy</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="relative z-10 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-500 to-pink-500 bg-clip-text text-transparent">
              Portfolio Kami
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Hasil karya terbaik yang telah kami ciptakan untuk klien-klien kami
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <Card key={item} className="bg-gradient-to-br from-gray-800/50 to-transparent border-gray-700 hover:border-pink-500/40 transition-all duration-300 overflow-hidden group">
                <div className="h-48 bg-gradient-to-br from-pink-500/20 to-purple-500/20 flex items-center justify-center">
                  <Sparkles className="h-16 w-16 text-pink-400" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">Project {item}</h3>
                  <p className="text-gray-400 text-sm mb-4">Campaign yang sukses dengan hasil yang melampaui target.</p>
                  <Button variant="ghost" className="text-pink-400 hover:text-pink-300 p-0 h-auto">
                    Lihat Detail →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-cyan-500 bg-clip-text text-transparent">
              Hubungi Kami
            </h2>
            <p className="text-xl text-gray-300">
              Siap untuk memulai proyek kreatif Anda? Mari berdiskusi!
            </p>
          </div>

          <Card className="bg-gradient-to-br from-gray-800/50 to-transparent border-gray-700">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-6">PT FIRMA MEDIA SEJAHTERA</h3>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <MapPin className="h-5 w-5 text-pink-400" />
                        <span className="text-gray-300">Happy Creative Hub, Jl. Cisitu Indah III No.2, Dago, Coblong, Bandung</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Phone className="h-5 w-5 text-pink-400" />
                        <span className="text-gray-300">+62 838-2714-8952</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Mail className="h-5 w-5 text-pink-400" />
                        <span className="text-gray-300">manager@firmamediasejahtera.site</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-white mb-3">Follow Us</h4>
                    <div className="flex space-x-4">
                      <Button variant="ghost" size="icon" className="text-gray-400 hover:text-pink-400">
                        <Facebook className="h-5 w-5" />
                      </Button>
                      <Button variant="ghost" size="icon" className="text-gray-400 hover:text-pink-400">
                        <Instagram className="h-5 w-5" />
                      </Button>
                      <Button variant="ghost" size="icon" className="text-gray-400 hover:text-pink-400">
                        <Twitter className="h-5 w-5" />
                      </Button>
                      <Button variant="ghost" size="icon" className="text-gray-400 hover:text-pink-400">
                        <Linkedin className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Nama Lengkap"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-pink-500 focus:outline-none"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-pink-500 focus:outline-none"
                  />
                  <textarea
                    placeholder="Pesan Anda"
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-pink-500 focus:outline-none resize-none"
                  />
                  <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white py-3 rounded-lg font-semibold">
                    Kirim Pesan
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-gray-800 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Sparkles className="h-6 w-6 text-pink-500" />
                <h3 className="text-lg font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                  FIRMA MEDIA
                </h3>
              </div>
              <p className="text-sm text-gray-400">
                Creative advertising agency yang menghadirkan solusi digital marketing inovatif.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Quick Links</h4>
              <div className="space-y-2 text-sm">
                <button onClick={() => scrollToSection('about')} className="block text-gray-400 hover:text-pink-400 transition-colors">Tentang Kami</button>
                <button onClick={() => scrollToSection('services')} className="block text-gray-400 hover:text-pink-400 transition-colors">Layanan</button>
                <button onClick={() => scrollToSection('portfolio')} className="block text-gray-400 hover:text-pink-400 transition-colors">Portfolio</button>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Legal</h4>
              <div className="space-y-2 text-sm">
                <button onClick={() => window.location.href='/privacy'} className="block text-gray-400 hover:text-pink-400 transition-colors">Privacy Policy</button>
                <button onClick={() => window.location.href='/terms'} className="block text-gray-400 hover:text-pink-400 transition-colors">Terms & Conditions</button>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Contact Info</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <p>Bandung, Jawa Barat</p>
                <p>manager@firmamediasejahtera.site</p>
                <p>+62 838-2714-8952</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2025 PT FIRMA MEDIA SEJAHTERA. All rights reserved. | NIB: 0912240067792</p>
          </div>
        </div>
      </footer>
    </div>
  )
}