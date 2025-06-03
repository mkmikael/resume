import { Mail, Phone, MapPin, Calendar, Github } from 'lucide-react';

export default function Resume() {
    return (
        <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white p-8">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-4xl font-bold mb-2">Mikael dos Santos Lima</h1>
            <h2 className="text-xl text-blue-200 mb-4">Software Engineer</h2>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>mkmikael07@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>+55 (91) 991797879</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Belém, PA</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>30 Anos</span>
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="flex items-center gap-2 justify-end mb-2">
              <Github size={20} />
              <a href="https://github.com/mkmikael" className="hover:text-blue-200 transition-colors">
                github.com/mkmikael
              </a>
            </div>
          </div>
        </div>
      </div>
    )
}