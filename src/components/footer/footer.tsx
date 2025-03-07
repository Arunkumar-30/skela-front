"use client";
import { Mail, Phone, MapPin } from "lucide-react";
const FooterComponent = () => {
  return (
    <>
      <footer className="bg-[#EAF5E4] text-gray-900">
        {/* Top Section */}
        <div className="max-w-7xl mx-auto px-5 py-10 grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* About Section */}
          <div>
            <h2 className="text-2xl font-bold text-green-700">SkelaEdu</h2>
            <p className="mt-2 text-sm text-gray-700">
              After 14 years of experience, Skela Educational Services was
              established, specializing in corporate training, career
              consulting, L&D courses, overseas bridge programs, and education,
              partnering with 2100+ universities across 30 countries.
            </p>
            {/* Social Media Icons */}
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-gray-700 hover:text-green-700">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-700 hover:text-green-700">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-700 hover:text-green-700">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="text-gray-700 hover:text-green-700">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          {/* Pages Section */}
          <div>
            <h3 className="text-lg font-bold">Pages</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-green-700">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-700">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-700">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-700">
                  Products
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-bold">Contact</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-green-700" />
                09952040378
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-green-700" />
                info@skelaacademy.com
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-green-700 mt-1" />
                <span>
                  Skela Academy, 19/50, Veerabhadran street, Nungambakkam,
                  Chennai - 600 034
                </span>
              </li>
            </ul>
          </div>

          {/* Google Maps Location */}
          <div>
            <h3 className="text-lg font-bold">Maps Location</h3>
            <div className="mt-2">
              <iframe
                className="w-full h-32 rounded-lg shadow"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.938891988338!2d-122.41941568468246!3d37.77492977975995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064e7026c6d%3A0xaaf4c56277e7757d!2sGoogle!5e0!3m2!1sen!2sus!4v1646751837203"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="bg-green-600 text-white text-center py-3">
          <p>© 2025 SkelaEdu | Powered by</p>
        </div>
      </footer>
    </>
  );
};

export default FooterComponent;
