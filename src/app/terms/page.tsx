'use client'

import { useState, useEffect } from 'react'
import { ArrowLeft, FileText, CheckCircle, AlertTriangle, Users, DollarSign, Shield, Clock, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function TermsAndConditions() {
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

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Background with overlay */}
      <div className="fixed inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000"
          style={{ backgroundImage: `url(${backgrounds[currentBg]})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90" />
      </div>

      {/* Navigation */}
      <nav className="relative z-50 px-6 py-4 lg:px-12">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Button 
            variant="ghost" 
            onClick={() => window.history.back()}
            className="text-gray-300 hover:text-pink-400 transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Kembali
          </Button>
          
          <div className="flex items-center space-x-2">
            <FileText className="h-6 w-6 text-pink-500" />
            <span className="text-lg font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              FIRMA MEDIA SEJAHTERA
            </span>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 px-6 py-12 lg:px-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full mb-6">
              <FileText className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Syarat dan Ketentuan
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Ketentuan penggunaan layanan PT FIRMA MEDIA SEJAHTERA
            </p>
            <p className="text-sm text-gray-400 mt-2">
              Terakhir diperbarui: 10 Oktober 2025
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-8">
            {/* Introduction */}
            <Card className="bg-gradient-to-br from-gray-800/50 to-transparent border-gray-700">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-white flex items-center">
                  <Star className="mr-3 h-6 w-6 text-yellow-400" />
                  Pendahuluan
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-300">
                <p>
                  Selamat datang di PT FIRMA MEDIA SEJAHTERA. Syarat dan Ketentuan ini mengatur penggunaan layanan periklanan dan kreatif yang kami sediakan. Dengan menggunakan layanan kami, Anda setuju untuk terikat oleh ketentuan ini.
                </p>
                <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-400 mb-2">Informasi Perusahaan</h4>
                  <div className="text-sm space-y-1">
                    <p><strong>Nama Perusahaan:</strong> PT FIRMA MEDIA SEJAHTERA</p>
                    <p><strong>NIB:</strong> 0912240067792</p>
                    <p><strong>KBLI:</strong> 73100 (Periklanan)</p>
                    <p><strong>Alamat:</strong> Happy Creative Hub, Jl. Cisitu Indah III No.2, Dago, Coblong, Bandung</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Services */}
            <Card className="bg-gradient-to-br from-gray-800/50 to-transparent border-gray-700">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-white flex items-center">
                  <Users className="mr-3 h-6 w-6 text-blue-400" />
                  Layanan Kami
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-300">
                <p>
                  PT FIRMA MEDIA SEJAHTERA menyediakan layanan-layanan berikut:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gradient-to-r from-blue-500/10 to-transparent border border-blue-500/20 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-400 mb-2">Layanan Digital</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Digital Advertising</li>
                      <li>• Social Media Management</li>
                      <li>• Content Creation</li>
                      <li>• Website Development</li>
                    </ul>
                  </div>
                  <div className="bg-gradient-to-r from-green-500/10 to-transparent border border-green-500/20 rounded-lg p-4">
                    <h4 className="font-semibold text-green-400 mb-2">Layanan Kreatif</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Brand Strategy</li>
                      <li>• Graphic Design</li>
                      <li>• Video Production</li>
                      <li>• Creative Consulting</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Client Responsibilities */}
            <Card className="bg-gradient-to-br from-gray-800/50 to-transparent border-gray-700">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-white flex items-center">
                  <Users className="mr-3 h-6 w-6 text-green-400" />
                  Kewajiban Klien
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-300">
                <p>
                  Sebagai klien, Anda memiliki kewajiban-kewajiban berikut:
                </p>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-white">Informasi Akurat</h4>
                      <p className="text-sm">Memberikan informasi yang benar dan lengkap untuk keperluan proyek.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-white">Materi Pendukung</h4>
                      <p className="text-sm">Menyediakan materi dan konten yang diperlukan tepat waktu.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-white">Feedback Konstruktif</h4>
                      <p className="text-sm">Memberikan masukan yang jelas dan konstruktif selama proses kreatif.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-white">Pembayaran Tepat Waktu</h4>
                      <p className="text-sm">Melunasi pembayaran sesuai dengan kesepakatan yang telah ditetapkan.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Payment Terms */}
            <Card className="bg-gradient-to-br from-gray-800/50 to-transparent border-gray-700">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-white flex items-center">
                  <DollarSign className="mr-3 h-6 w-6 text-yellow-400" />
                  Ketentuan Pembayaran
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-300">
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-yellow-400 mb-2">Struktur Pembayaran</h4>
                    <ul className="list-disc list-inside text-sm space-y-1">
                      <li>Uang muka minimal 50% dari total nilai proyek</li>
                      <li>Pelunasan 50% setelah proyek selesai</li>
                      <li>Pembayaran dapat dilakukan via transfer bank</li>
                      <li>Invoice akan diterbitkan setelah kesepakatan proyek</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-yellow-400 mb-2">Keterlambatan Pembayaran</h4>
                    <ul className="list-disc list-inside text-sm space-y-1">
                      <li>Denda 2% per minggu untuk keterlambatan pembayaran</li>
                      <li>Penghentian sementara layanan untuk pembayaran terlambat</li>
                      <li>Hak untuk menagih biaya penagihan tambahan</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Intellectual Property */}
            <Card className="bg-gradient-to-br from-gray-800/50 to-transparent border-gray-700">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-white flex items-center">
                  <Shield className="mr-3 h-6 w-6 text-purple-400" />
                  Hak Kekayaan Intelektual
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-300">
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-purple-400 mb-2">Hak Cipta Karya Klien</h4>
                    <p className="text-sm">
                      Setelah pelunasan pembayaran penuh, semua hak cipta atas karya kreatif yang dihasilkan menjadi milik klien.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-purple-400 mb-2">Hak Penggunaan</h4>
                    <p className="text-sm">
                      PT FIRMA MEDIA SEJAHTERA berhak menggunakan karya untuk portfolio dan keperluan promosi dengan persetujuan klien.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-purple-400 mb-2">Materi Pihak Ketiga</h4>
                    <p className="text-sm">
                      Klien bertanggung jawab untuk memastikan semua materi yang disediakan tidak melanggar hak kekayaan intelektual pihak ketiga.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Timeline and Deadlines */}
            <Card className="bg-gradient-to-br from-gray-800/50 to-transparent border-gray-700">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-white flex items-center">
                  <Clock className="mr-3 h-6 w-6 text-cyan-400" />
                  Waktu dan Tenggat Waktu
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-300">
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-cyan-400 mb-2">Estimasi Waktu</h4>
                    <ul className="list-disc list-inside text-sm space-y-1">
                      <li>Periode estimasi akan disepakati di awal proyek</li>
                      <li>Waktu dapat berubah tergantung kompleksitas proyek</li>
                      <li>Keterlambatan dari pihak klien dapat mempengaruhi timeline</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-cyan-400 mb-2">Force Majeure</h4>
                    <p className="text-sm">
                      PT FIRMA MEDIA SEJAHTERA tidak bertanggung jawab atas keterlambatan yang disebabkan oleh keadaan di luar kendali kami (bencana alam, pemogokan, dll).
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Limitations and Liabilities */}
            <Card className="bg-gradient-to-br from-gray-800/50 to-transparent border-gray-700">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-white flex items-center">
                  <AlertTriangle className="mr-3 h-6 w-6 text-red-400" />
                  Pembatasan Tanggung Jawab
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-300">
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-red-400 mb-2">Batasan Tanggung Jawab</h4>
                    <ul className="list-disc list-inside text-sm space-y-1">
                      <li>Tanggung jawab maksimal sebesar nilai proyek</li>
                      <li>Tidak bertanggung jawab atas kerugian tidak langsung</li>
                      <li>Tidak menjamin hasil bisnis spesifik dari layanan</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-red-400 mb-2">Indemnifikasi</h4>
                    <p className="text-sm">
                      Klien setuju untuk mengganti rugi PT FIRMA MEDIA SEJAHTERA dari klaim pihak ketiga yang timbul dari penggunaan layanan.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Termination */}
            <Card className="bg-gradient-to-br from-gray-800/50 to-transparent border-gray-700">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-white flex items-center">
                  <AlertTriangle className="mr-3 h-6 w-6 text-orange-400" />
                  Pengakhiran Kerjasama
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-300">
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-orange-400 mb-2">Pengakhiran oleh Klien</h4>
                    <ul className="list-disc list-inside text-sm space-y-1">
                      <li>Pemberitahuan tertulis 14 hari sebelumnya</li>
                      <li>Pembayaran untuk pekerjaan yang telah selesai</li>
                      <li>Uang muka tidak dapat dikembalikan</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-orange-400 mb-2">Pengakhiran oleh Perusahaan</h4>
                    <ul className="list-disc list-inside text-sm space-y-1">
                      <li>Pelanggaran ketentuan oleh klien</li>
                      <li>Kegagalan pembayaran</li>
                      <li>Perilaku yang merugikan reputasi perusahaan</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="bg-gradient-to-br from-gray-800/50 to-transparent border-gray-700">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-white flex items-center">
                  <Users className="mr-3 h-6 w-6 text-pink-400" />
                  Hubungi Kami
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-300">
                <p>
                  Jika Anda memiliki pertanyaan tentang Syarat dan Ketentuan ini, silakan hubungi kami:
                </p>
                <div className="bg-gradient-to-r from-pink-500/10 to-purple-500/10 border border-pink-500/20 rounded-lg p-4">
                  <h4 className="font-bold text-white mb-3">PT FIRMA MEDIA SEJAHTERA</h4>
                  <div className="space-y-2 text-sm">
                    <p><strong>Email:</strong> legal@firmamediasejahtera.site</p>
                    <p><strong>Telepon:</strong> +62 838-2714-8952</p>
                    <p><strong>Alamat:</strong> Happy Creative Hub, Jl. Cisitu Indah III No.2, Dago, Coblong, Bandung</p>
                    <p><strong>Website:</strong> www.firmamediasejahtera.site</p>
                  </div>
                </div>
                <p className="text-sm text-gray-400">
                  Dengan menggunakan layanan kami, Anda menyatakan telah membaca, memahami, dan menyetujui Syarat dan Ketentuan ini.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Footer */}
          <div className="mt-12 text-center text-gray-400 text-sm">
            <p>&copy; 2025 PT FIRMA MEDIA SEJAHTERA. All rights reserved.</p>
            <p className="mt-2">NIB: 0912240067792 | KBLI: 73100 (Periklanan)</p>
          </div>
        </div>
      </main>
    </div>
  )
}