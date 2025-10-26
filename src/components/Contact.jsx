import { MessageCircle } from "lucide-react"
import iconColor from "../assets/img/icon-color.png"
import wa from "../assets/img/wa.png"
import ig from "../assets/img/instagram.png"

export default function Contact() {
  const contactInfo = [
    {
      type: "WhatsApp",
      number: "+62 811-1210-5666",
      link: "https://wa.me/6281112105666",
      icon: wa
    },
    {
      type: "Instagram",
      number: "@samestacirebonregency",
      link: "https://www.instagram.com/samestacirebonregency?igsh=MTBsYWxheGxveHBpMA==",
      icon: ig
    },
  ]

  return (
    <section id="contact" className="w-full bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Side - Branding and Contact */}
          <div className="flex flex-col items-center lg:items-start space-y-8">
            {/* Logo and Branding */}
            <div className="text-center lg:text-left self-center">
              <img className="w-xs" src={iconColor} alt="" />
            </div>

            {/* Marketing Gallery Section */}
            <div className="w-full">
              <h3 className="text-2xl font-bold text-teal-900 mb-6">Kontak Kami</h3>

              {/* Contact Buttons */}
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center hover:cursor-pointer gap-3 bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 group"
                  >
                    <div className="p-3 rounded-lg ">
                        <img className="w-10" src={contact.icon  } alt="" />
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-600 text-sm">{contact.type}</p>
                      <p className="text-gray-800 font-semibold">{contact.number}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Google Map */}
          <div className="w-full h-96 lg:h-full rounded-lg overflow-hidden shadow-lg">
            <iframe
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen=""
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247.63259918375084!2d108.50347112982212!3d-6.755024054920629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f1e6c0a84f415%3A0x8af4b3962e781e3a!2sPerumnas%20Pesona%20Cirebon%20Regency!5e0!3m2!1sid!2sid!4v1761476507980!5m2!1sid!2sid"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
