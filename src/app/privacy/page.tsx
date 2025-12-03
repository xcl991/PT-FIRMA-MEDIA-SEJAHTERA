'use client'

import { useState, useEffect } from 'react'
import { ArrowLeft, Shield, Eye, Lock, UserCheck, Cookie, Database, AlertCircle, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function PrivacyPolicy() {
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
            <Shield className="h-6 w-6 text-pink-500" />
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
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full mb-6">
              <Shield className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              Kebijakan Privasi
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              PT FIRMA MEDIA SEJAHTERA berkomitmen untuk melindungi privasi dan data pribadi Anda
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
                  <Eye className="mr-3 h-6 w-6 text-pink-400" />
                  Pendahuluan
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-300">
                <p>
                  Selamat datang di PT FIRMA MEDIA SEJAHTERA. Kami menghargai kepercayaan Anda dalam menggunakan layanan periklanan dan kreatif kami. Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, melindungi, dan membagikan informasi pribadi Anda saat Anda menggunakan website dan layanan kami.
                </p>
                <p>
                  Dengan menggunakan layanan kami, Anda setuju dengan praktik-praktik yang dijelaskan dalam kebijakan ini.
                </p>
              </CardContent>
            </Card>

            {/* Information We Collect */}
            <Card className="bg-gradient-to-br from-gray-800/50 to-transparent border-gray-700">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-white flex items-center">
                  <Database className="mr-3 h-6 w-6 text-purple-400" />
                  Informasi yang Kami Kumpulkan
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-pink-400 mb-2">Informasi Pribadi</h4>
                    <ul className="list-disc list-inside text-gray-300 space-y-1">
                      <li>Nama lengkap dan informasi kontak (email, telepon)</li>
                      <li>Alamat perusahaan dan informas bisnis</li>
                      <li>Informasi pembayaran dan penagihan</li>
                      <li>Informasi profil profesional</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-purple-400 mb-2">Informasi Penggunaan</h4>
                    <ul className="list-disc list-inside text-gray-300 space-y-1">
                      <li>Data tentang bagaimana Anda menggunakan website kami</li>
                      <li>Informasi perangkat dan browser</li>
                      <li>Alamat IP dan lokasi geografis</li>
                      <li>Cookies dan data tracking lainnya</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-cyan-400 mb-2">Informasi Proyek</h4>
                    <ul className="list-disc list-inside text-gray-300 space-y-1">
                      <li>Detail proyek dan brief kreatif</li>
                      <li>Materi promosi dan konten brand</li>
                      <li>Komunikasi terkait proyek</li>
                      <li>Feedback dan hasil evaluasi</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* How We Use Information */}
            <Card className="bg-gradient-to-br from-gray-800/50 to-transparent border-gray-700">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-white flex items-center">
                  <UserCheck className="mr-3 h-6 w-6 text-cyan-400" />
                  Cara Kami Menggunakan Informasi
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gradient-to-r from-pink-500/10 to-transparent border border-pink-500/20 rounded-lg p-4">
                    <h4 className="font-semibold text-pink-400 mb-2">Layanan Pelanggan</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Menyediakan layanan periklanan</li>
                      <li>• Memproses permintaan proyek</li>
                      <li>• Memberikan dukungan teknis</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-r from-purple-500/10 to-transparent border border-purple-500/20 rounded-lg p-4">
                    <h4 className="font-semibold text-purple-400 mb-2">Pengembangan Layanan</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Menganalisis penggunaan website</li>
                      <li>• Meningkatkan pengalaman user</li>
                      <li>• Mengembangkan fitur baru</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-r from-cyan-500/10 to-transparent border border-cyan-500/20 rounded-lg p-4">
                    <h4 className="font-semibold text-cyan-400 mb-2">Komunikasi</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Mengirim update proyek</li>
                      <li>• Newsletter dan informasi layanan</li>
                      <li>• Promosi dan penawaran khusus</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-r from-green-500/10 to-transparent border border-green-500/20 rounded-lg p-4">
                    <h4 className="font-semibold text-green-400 mb-2">Keamanan</h4>
                    <ul className="text-sm text-gray-300 space-y-1">
                      <li>• Melindungi dari fraud</li>
                      <li>• Memverifikasi identitas pengguna</li>
                      <li>• Menjaga keamanan sistem</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Data Protection */}
            <Card className="bg-gradient-to-br from-gray-800/50 to-transparent border-gray-700">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-white flex items-center">
                  <Lock className="mr-3 h-6 w-6 text-green-400" />
                  Perlindungan Data
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-300">
                <p>
                  PT FIRMA MEDIA SEJAHTERA mengimplementasikan langkah-langkah keamanan yang komprehensif untuk melindungi informasi pribadi Anda:
                </p>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-white">Enkripsi Data</h4>
                      <p className="text-sm">Semua data pribadi dienkripsi menggunakan teknologi SSL/TLS.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-white">Akses Terbatas</h4>
                      <p className="text-sm">Hanya personel yang berwenang yang dapat mengakses data pribadi.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-white">Audit Reguler</h4>
                      <p className="text-sm">Kami melakukan audit keamanan secara berkala untuk memastikan perlindungan data.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Cookies */}
            <Card className="bg-gradient-to-br from-gray-800/50 to-transparent border-gray-700">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-white flex items-center">
                  <Cookie className="mr-3 h-6 w-6 text-yellow-400" />
                  Kebijakan Cookies
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-300">
                <p>
                  Website kami menggunakan cookies untuk meningkatkan pengalaman browsing Anda:
                </p>
                <div className="space-y-2">
                  <div>
                    <h4 className="font-semibold text-yellow-400">Cookies Esensial</h4>
                    <p className="text-sm">Diperlukan untuk fungsi dasar website.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-yellow-400">Cookies Analitik</h4>
                    <p className="text-sm">Membantu kami memahami bagaimana pengguna menggunakan website.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-yellow-400">Cookies Pemasaran</h4>
                    <p className="text-sm">Digunakan untuk menampilkan iklan yang relevan.</p>
                  </div>
                </div>
                <p className="text-sm">
                  Anda dapat mengatur preferensi cookies melalui pengaturan browser Anda.
                </p>
              </CardContent>
            </Card>

            {/* Your Rights */}
            <Card className="bg-gradient-to-br from-gray-800/50 to-transparent border-gray-700">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-white flex items-center">
                  <UserCheck className="mr-3 h-6 w-6 text-blue-400" />
                  Hak Anda
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-300">
                <p>
                  Sebagai pemilik data, Anda memiliki hak-hak berikut sesuai dengan regulasi perlindungan data yang berlaku:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Akses:</strong> Meminta salinan data pribadi yang kami simpan</li>
                  <li><strong>Koreksi:</strong> Memperbaiki data yang tidak akurat</li>
                  <li><strong>Penghapusan:</strong> Meminta penghapusan data pribadi Anda</li>
                  <li><strong>Pembatasan:</strong> Membatasi pemrosesan data Anda</li>
                  <li><strong>Portabilitas:</strong> Memindahkan data Anda ke layanan lain</li>
                  <li><strong>Penolakan:</strong> Menolak pemrosesan data tertentu</li>
                </ul>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="bg-gradient-to-br from-gray-800/50 to-transparent border-gray-700">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-white flex items-center">
                  <AlertCircle className="mr-3 h-6 w-6 text-red-400" />
                  Hubungi Kami
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-300">
                <p>
                  Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini atau ingin melaksanakan hak-hak Anda, silakan hubungi kami:
                </p>
                <div className="bg-gradient-to-r from-pink-500/10 to-purple-500/10 border border-pink-500/20 rounded-lg p-4">
                  <h4 className="font-bold text-white mb-3">PT FIRMA MEDIA SEJAHTERA</h4>
                  <div className="space-y-2 text-sm">
                    <p><strong>Email:</strong> privacy@firmamediasejahtera.site</p>
                    <p><strong>Telepon:</strong> +62 838-2714-8952</p>
                    <p><strong>Alamat:</strong> Happy Creative Hub, Jl. Cisitu Indah III No.2, Dago, Coblong, Bandung</p>
                    <p><strong>Kode Pos:</strong> 40135</p>
                  </div>
                </div>
                <p className="text-sm text-gray-400">
                  Kami akan merespons permintaan Anda dalam waktu 14 hari kerja.
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