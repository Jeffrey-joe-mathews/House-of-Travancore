import {
  Facebook,
  Instagram,
  Twitter,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

export function Footer() {
  return (
    <footer
    id="contact"
     className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {/* Restaurant Info */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-amber-400 mb-4">
              House of Travancore
            </h3>
            <p className="text-gray-300 mb-4">
              Step into House of Travancore and let the warmth of tradition,
               hospitality, and flavor embrace you—one plate at a time.
            </p>
            <div className="flex space-x-4 justify-center">
              <a
                href="#"
                className="text-gray-300 hover:text-amber-400 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-amber-400 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-amber-400 transition-colors"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-center">
                <MapPin size={16} className="text-amber-400 mr-2" />
                <span className="text-gray-300">
                  Bengaluru, Karnataka 560113
                </span>
              </div>
              <div className="flex items-center justify-center">
                <Phone size={16} className="text-amber-400 mr-2" />
                <span className="text-gray-300">+91 9740691494</span>
              </div>
              <div className="flex items-center justify-center">
                <Mail size={16} className="text-amber-400 mr-2" />
                <span className="text-gray-300">Travancorerestaurants@gmail.com</span>
              </div>
            </div>
          </div>


          {/* Newsletter
          <div>
            <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
            <p className="text-gray-300 mb-4">
              Subscribe to receive updates about special events and seasonal
              menus.
            </p>
            <div className="space-y-2">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-amber-400"
              />
              <button className="w-full bg-amber-600 hover:bg-amber-700 text-white py-2 px-4 rounded-md transition-colors">
                Subscribe
              </button>
            </div>
          </div> */}
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 House of Travancore Restaurant. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
