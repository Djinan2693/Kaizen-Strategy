import React from 'react';
import { Phone, Mail, MapPin, Linkedin, Twitter } from 'lucide-react';

interface FooterProps {
  setCurrentPage?: (page: string) => void;
}

const Footer = ({ setCurrentPage }: FooterProps) => {
  const handleLegalClick = (e: React.MouseEvent<HTMLAnchorElement>, page: string) => {
    e.preventDefault();
    if (setCurrentPage) {
      setCurrentPage(page);
    }
  };

  return (
    <footer id="contact" className="bg-black text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <img 
              src="/PHOTO-2025-09-21-21-17-14 2.jpg" 
              alt="Kaizen Strategy" 
              className="h-12 w-auto mb-6 filter invert"
            />
            <p className="text-gray-300 mb-6 leading-relaxed">
              Cabinet d'études et de conseil stratégique, expert en transformation d'entreprise, nous accompagnons nos clients vers l'excellence opérationnelle et la croissance durable.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#"
                className="w-10 h-10 bg-[#b00000] rounded-lg flex items-center justify-center hover:bg-red-700 transition-colors duration-200"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="#"
                className="w-10 h-10 bg-[#b00000] rounded-lg flex items-center justify-center hover:bg-red-700 transition-colors duration-200"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone size={20} className="text-[#b00000] mr-3" />
                <span className="text-gray-300">+225 05 66 62 04 77</span>
              </div>
              <div className="flex items-center">
                <Mail size={20} className="text-[#b00000] mr-3" />
                <span className="text-gray-300">contact@kaizenstrategy.org</span>
              </div>
              <div className="flex items-start">
                <MapPin size={20} className="text-[#b00000] mr-3 mt-1" />
                <span className="text-gray-300">
                  Cocody, Riviera Attoban<br />
                  Cité Émeraude Abri 2000, Villa 142<br />
                  Abidjan, Côte d'Ivoire
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Liens Rapides</h3>
            <ul className="space-y-3">
              <li>
                <a href="#expertise" className="text-gray-300 hover:text-[#b00000] transition-colors duration-200">
                  Nos Expertises
                </a>
              </li>
              <li>
                <a href="#formations" className="text-gray-300 hover:text-[#b00000] transition-colors duration-200">
                  Formations 2025
                </a>
              </li>
              <li>
                <a href="#references" className="text-gray-300 hover:text-[#b00000] transition-colors duration-200">
                  Nos Références
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#b00000] transition-colors duration-200">
                  Carrières
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Kaizen Strategy. Tous droits réservés.
            </p>
            <div className="flex flex-wrap gap-6 mt-4 md:mt-0 justify-center">
              <a 
                href="#" 
                onClick={(e) => handleLegalClick(e, 'mentions-legales')}
                className="text-gray-400 hover:text-white text-sm transition-colors duration-200 focus:outline-none"
                style={{ outline: 'none' }}
              >
                Mentions Légales
              </a>
              <a 
                href="#" 
                onClick={(e) => handleLegalClick(e, 'politique-confidentialite')}
                className="text-gray-400 hover:text-white text-sm transition-colors duration-200 focus:outline-none"
                style={{ outline: 'none' }}
              >
                Politique de Confidentialité
              </a>
              <a 
                href="#" 
                onClick={(e) => handleLegalClick(e, 'gestion-cookies')}
                className="text-gray-400 hover:text-white text-sm transition-colors duration-200 focus:outline-none"
                style={{ outline: 'none' }}
              >
                Gestion des Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;