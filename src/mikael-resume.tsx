import { Mail, Phone, MapPin, Calendar, Github, Code, Users, Database, Cloud } from 'lucide-react';

export default function MikaelResume() {
  return (
    <div className="max-w-4xl mx-auto bg-white shadow-2xl">
      {/* Header */}
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

      <div className="p-8">
        {/* Resumo */}
        <section className="mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Code className="text-blue-600" size={24} />
            Resumo Profissional
          </h3>
          <div className="text-gray-700 leading-relaxed bg-gray-50 p-4 rounded-lg">
            <p>Mais de 12 anos de experiência com desenvolvimento de software com tecnologias baseadas na JVM.</p>
            <p>Mais de 9 anos de experiência em produtos financeiros.</p>
          </div>
        </section>

        {/* Experiência Profissional */}
        <section className="mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <Users className="text-blue-600" size={24} />
            Experiência Profissional
          </h3>
          
          {/* Acception Tecnologia */}
          <div className="mb-8 border-l-4 border-blue-500 pl-6">
            <div className="mb-6">
              <h4 className="text-xl font-semibold text-gray-800">Acception Tecnologia</h4>
              <p className="text-sm text-gray-600 mb-4">2015 - 2025</p>
              
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-blue-800 mb-2">Gerente de Desenvolvimento</h5>
                  <p className="text-sm text-gray-600 mb-3">2019 - Abril/2025</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-gray-800 mb-2">Desenvolvedor de Software</h5>
                  <p className="text-sm text-gray-600 mb-3">Ago/2015 - 2019</p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-gray-800 mb-2">Estagiário em Desenvolvedor de Software</h5>
                  <p className="text-sm text-gray-600 mb-1">jan/2015 - Ago/2015</p>
                  <p className="text-xs text-gray-500">Orientador: Ms. Scs. Oscar Konno</p>
                </div>
              </div>

              <div className="mt-4">
                <h6 className="font-semibold text-gray-800 mb-3">Principais Atividades:</h6>
                <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                  <li>Desenvolvimento de sistemas financeiros de subadquirência</li>
                  <li>Gestão de projetos e liderança de equipe</li>
                  <li>Integração com Cielo, Rede e Stone</li>
                  <li>Integrações contábeis para SAP 4Hana</li>
                  <li>Migração de aplicações de bare metal para Docker com orquestração do Swarm</li>
                  <li>Expurgo de dados em base de dados PostgreSQL</li>
                </ul>
              </div>

              <div className="mt-4">
                <h6 className="font-semibold text-gray-800 mb-3">
                  Tecnologias:
                </h6>
                
                <div className="bg-blue-50 p-4 rounded-lg mt-4">
                  <div className="flex flex-wrap gap-2">
                    {[
                      'Grails Framework', 'Spring Framework', 'Groovy', 'Hibernate',
                      'Micronaut Framework', 'Docker', 'Docker Swarm', 'JasperReport',
                      'Apache POI', 'jQuery', 'Bootstrap', 'PostgreSQL', 'Patroni',
                      'HAProxy', 'CQRS', 'RabbitMQ', 'Spock Test', 'Selenium'
                    ].map((tech) => (
                      <span key={tech} className="bg-blue-200 text-blue-800 px-2 py-1 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
            </div>
          </div>

          {/* BPM Lab - UFRA */}
          <div className="border-l-4 border-green-500 pl-6">
            <h4 className="text-xl font-semibold text-gray-800">BPM Lab - UFRA</h4>
            <p className="text-sm text-gray-600 mb-2">2014 - 2015</p>
            
            <div className="bg-green-50 p-4 rounded-lg mb-4">
              <h5 className="font-semibold text-green-800 mb-2">Estagiário em Desenvolvedor de Software</h5>
              <p className="text-xs text-gray-500">Orientador: Dr. Scs. Fábio Lima Bezerra</p>
            </div>

            <div className="mb-3">
              <h6 className="font-semibold text-gray-800 mb-3">Principais Atividades:</h6>
              <p className="text-gray-700 text-sm mb-2">
                Desenvolvimento de sistemas de gestão para a universidade, incluindo o sistema INVIO 
                para contabilização de produção de docentes.
              </p>
              <a href="https://github.com/mkmikael/invio" className="text-blue-600 hover:text-blue-800 text-sm">
                🔗 github.com/mkmikael/invio
              </a>
            </div>

            <div>
              <h6 className="font-semibold text-gray-800 mb-3">
                Tecnologias:
              </h6>

              <div className="bg-green-50 p-4 rounded-lg">
                <div className="flex flex-wrap gap-2">
                  {[
                    'Java EE', 'CDI', 'JSF', 'PrimeFaces', 'JPA',
                    'Tomcat', 'GlassFish', 'JasperReport', 'MySQL',
                    'Kanban', 'jUnit', 'Maven'
                  ].map((tech) => (
                    <span key={tech} className="bg-green-200 text-green-800 px-2 py-1 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        

        {/* Formação e Outros */}
        <div className="gap-8">
          {/* Formação */}
          <section>
            <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <Database className="text-blue-600" size={24} />
              Formação
            </h3>
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <h4 className="font-semibold text-gray-800">Bacharel em Sistemas de Informação</h4>
              <p className="text-gray-600">Universidade Federal Rural da Amazônia</p>
              <p className="text-sm text-gray-500">2013 - 2016 • Belém, PA</p>
            </div>
          </section>

          {/* Idiomas e Interesses */}
          <section>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Idiomas</h3>
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Português</span>
                  <span className="text-green-600 font-semibold">Fluente</span>
                </div>
                <div className="flex justify-between">
                  <span>Inglês</span>
                  <span className="text-blue-600 font-semibold">Intermediário</span>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <Cloud className="text-blue-600" size={24} />
              Interesses
            </h3>
            <div className="flex flex-wrap gap-2">
              {['LLM', 'DevOps', 'Arquitetura de Software', 'Cloud Computing'].map((interest) => (
                <span key={interest} className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                  {interest}
                </span>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}