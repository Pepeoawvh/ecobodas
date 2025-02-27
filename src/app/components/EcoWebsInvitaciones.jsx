'use client'
import { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ephesis } from '../ui/fonts';

// Componente para las características
const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white/80 shadow-sm rounded-lg p-6 flex flex-col items-center text-center transition-transform transform hover:scale-105">
    <div className="w-16 h-16 flex items-center justify-center mb-4">
      <Image src={icon} alt={title} width={48} height={48} />
    </div>
    <h3 className="text-xl font-semibold text-emerald-800 mb-2">{title}</h3>
    <p className="text-emerald-700">{description}</p>
  </div>
);

// Componente para los modelos/templates
const TemplateCard = ({ image, name, features, link }) => (
  <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col">
    <div className="relative h-64 w-full">
      <Image 
        src={image} 
        alt={name} 
        fill 
        className="object-cover transition-transform duration-700 hover:scale-110"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </div>
    <div className="p-6 flex-grow">
      <h3 className="text-xl font-semibold text-emerald-800 mb-3">{name}</h3>
      <ul className="mb-4 text-emerald-700 space-y-1">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start">
            <svg className="w-5 h-5 text-emerald-500 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
    <div className="p-6 pt-0 mt-auto">
      <Link href={link} className="block w-full bg-emerald-700 hover:bg-emerald-600 text-white text-center py-2 px-4 rounded transition-colors">
        Ver ejemplo
      </Link>
    </div>
  </div>
);

// Componente principal
const EcoWebsInvitaciones = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const featureRef = useRef(null);
  
  const scrollToFeatures = () => {
    if (featureRef.current) {
      featureRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const features = [
    {
      icon: "/images/icons/countdown.svg",
      title: "Contador de tiempo",
      description: "Muestra el tiempo restante hasta tu gran día, creando expectativa entre tus invitados."
    },
    {
      icon: "/images/icons/gallery.svg",
      title: "Galería de fotos",
      description: "Comparte tus mejores momentos con una hermosa galería de imágenes personalizada."
    },
    {
      icon: "/images/icons/rsvp.svg",
      title: "Confirmación de asistencia",
      description: "Facilita a tus invitados confirmar su asistencia desde cualquier dispositivo."
    },
    {
      icon: "/images/icons/panel.svg",
      title: "Panel de administración",
      description: "Accede a información sobre invitados, preferencias alimentarias y más."
    },
    {
      icon: "/images/icons/dress.svg",
      title: "Sección de Dress Code",
      description: "Comunica claramente el código de vestimenta para tu evento especial."
    },
    {
      icon: "/images/icons/gift.svg",
      title: "Lista de regalos",
      description: "Incluye una sección para sugerencias de regalos o enlaces a listas de deseos."
    }
  ];

  const templates = [
    {
      image: "/images/templates/rustico.jpg",
      name: "Rústico Elegante",
      features: ["Estilo campestre", "Fondos texturizados", "Detalles florales", "Tipografías caligráficas"],
      link: "/web-templates/rustico"
    },
    {
      image: "/images/templates/moderno.jpg",
      name: "Moderno Minimalista",
      features: ["Diseño limpio", "Estilo contemporáneo", "Animaciones sutiles", "Colores personalizables"],
      link: "/web-templates/moderno"
    },
    {
      image: "/images/templates/romantico.jpg",
      name: "Romántico Clásico",
      features: ["Detalles ornamentales", "Paleta en tonos suaves", "Elegantes transiciones", "Estilos tradicionales"],
      link: "/web-templates/romantico"
    },
    {
      image: "/images/templates/boho.jpg",
      name: "Bohemio Chic",
      features: ["Estética natural", "Elementos bohemios", "Colores tierra", "Decoraciones étnicas"],
      link: "/web-templates/boho"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-gradient-to-b from-emerald-50 to-white">
        <div className="absolute inset-0 overflow-hidden z-0">
          <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-100 rounded-full opacity-40 -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-emerald-100 rounded-full opacity-30 translate-x-1/4 translate-y-1/4" />
        </div>
        
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-emerald-800">
                Invitaciones Web <span className={`${ephesis.className} text-5xl md:text-6xl`}>Personalizadas</span>
              </h1>
              <p className="text-lg text-emerald-700 mb-8">
                Un sitio web exclusivo para tu boda, diseñado con cada detalle que imaginas. Comparte tu historia, facilita la asistencia y crea una experiencia única para tus invitados.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <button 
                  onClick={scrollToFeatures}
                  className="px-6 py-3 bg-emerald-700 text-white rounded-md hover:bg-emerald-600 transition-colors"
                >
                  Descubrir características
                </button>
                <Link href="/contact" className="px-6 py-3 border-2 border-emerald-700 text-emerald-800 rounded-md hover:bg-emerald-50 transition-colors">
                  Solicitar información
                </Link>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <div className="relative w-full aspect-[9/16] max-w-xs mx-auto md:max-w-sm">
                <Image 
                  src="/images/templates/web-preview.png" 
                  alt="Invitación web" 
                  fill
                  className="object-contain rounded-2xl shadow-lg"
                />
                {/* Elementos decorativos */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-emerald-100 rounded-full z-[-1]" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-amber-100 rounded-full z-[-1]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Navigation */}
      <section className="bg-white py-6 sticky top-0 z-20 shadow-sm">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-center md:justify-start space-x-2 md:space-x-8 overflow-x-auto scrollbar scrollbar-thin scrollbar-thumb-emerald-200">
            <button 
              onClick={() => setActiveTab('overview')} 
              className={`px-4 py-2 whitespace-nowrap ${activeTab === 'overview' ? 'text-emerald-700 border-b-2 border-emerald-500' : 'text-gray-500 hover:text-emerald-600'}`}
            >
              Descripción general
            </button>
            <button 
              onClick={() => setActiveTab('features')} 
              className={`px-4 py-2 whitespace-nowrap ${activeTab === 'features' ? 'text-emerald-700 border-b-2 border-emerald-500' : 'text-gray-500 hover:text-emerald-600'}`}
            >
              Características
            </button>
            <button 
              onClick={() => setActiveTab('templates')} 
              className={`px-4 py-2 whitespace-nowrap ${activeTab === 'templates' ? 'text-emerald-700 border-b-2 border-emerald-500' : 'text-gray-500 hover:text-emerald-600'}`}
            >
              Plantillas
            </button>
            <button 
              onClick={() => setActiveTab('process')} 
              className={`px-4 py-2 whitespace-nowrap ${activeTab === 'process' ? 'text-emerald-700 border-b-2 border-emerald-500' : 'text-gray-500 hover:text-emerald-600'}`}
            >
              Proceso
            </button>
            <button 
              onClick={() => setActiveTab('faq')} 
              className={`px-4 py-2 whitespace-nowrap ${activeTab === 'faq' ? 'text-emerald-700 border-b-2 border-emerald-500' : 'text-gray-500 hover:text-emerald-600'}`}
            >
              Preguntas frecuentes
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featureRef} className="py-16 bg-gradient-to-b from-white to-emerald-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className={activeTab === 'overview' ? 'block' : 'hidden'}>
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-6">Tu boda merece un espacio digital único</h2>
              <p className="text-lg text-emerald-700">
                Diseñamos sitios web completamente personalizados que reflejan la esencia de tu día especial. Más que una invitación, es una experiencia completa para tus invitados.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-emerald-800 mb-2">Personalización completa</h3>
                <p className="text-emerald-700">
                  Cada aspecto de tu sitio web puede ser personalizado: colores, tipografías, imágenes y funcionalidades según tus necesidades exactas.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-emerald-800 mb-2">Accesible en todo dispositivo</h3>
                <p className="text-emerald-700">
                  Tu sitio se verá perfecto en smartphones, tablets y computadoras, garantizando que todos tus invitados puedan acceder sin problemas.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-emerald-800 mb-2">Información protegida</h3>
                <p className="text-emerald-700">
                  Puedes añadir contraseña a tu sitio para garantizar que solo los invitados tengan acceso a la información de tu evento.
                </p>
              </div>
            </div>
          </div>
          
          <div className={activeTab === 'features' ? 'block' : 'hidden'}>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-4">Características personalizables</h2>
              <p className="text-lg text-emerald-700">
                Nuestras invitaciones web incluyen estas y otras funcionalidades que puedes elegir según tus necesidades:
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <FeatureCard 
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-emerald-700 mb-6">¿Tienes alguna idea especial? ¡Podemos personalizarla para ti!</p>
              <Link href="/contact" className="inline-block px-6 py-3 bg-emerald-700 text-white rounded-md hover:bg-emerald-600 transition-colors">
                Consúltanos
              </Link>
            </div>
          </div>
          
          <div className={activeTab === 'templates' ? 'block' : 'hidden'}>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-4">Nuestras plantillas base</h2>
              <p className="text-lg text-emerald-700">
                Comenzamos con estas plantillas que luego personalizamos completamente según tus gustos y necesidades:
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {templates.map((template, index) => (
                <TemplateCard 
                  key={index}
                  image={template.image}
                  name={template.name}
                  features={template.features}
                  link={template.link}
                />
              ))}
            </div>
          </div>
          
          <div className={activeTab === 'process' ? 'block' : 'hidden'}>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-4">Proceso de creación</h2>
              <p className="text-lg text-emerald-700">
                Creamos tu invitación web personalizada en simples pasos:
              </p>
            </div>
            
            <div className="relative">
              {/* Línea de tiempo vertical */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-emerald-200 transform -translate-x-1/2"></div>
              
              <div className="space-y-12">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right">
                    <h3 className="text-xl font-semibold text-emerald-800 mb-2">Consulta inicial</h3>
                    <p className="text-emerald-700">Hablamos sobre tus ideas, estilo y necesidades específicas para tu boda.</p>
                  </div>
                  <div className="relative z-10 w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center">
                    <span>1</span>
                  </div>
                  <div className="md:w-1/2 md:pl-12 mt-6 md:mt-0">
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <ul className="list-disc list-inside text-emerald-700">
                        <li>Definición de estilo y temática</li>
                        <li>Selección de funcionalidades</li>
                        <li>Presupuesto personalizado</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right order-1 md:order-1">
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <ul className="list-disc list-inside text-emerald-700">
                        <li>Selección de colores y tipografías</li>
                        <li>Revisión de contenidos y textos</li>
                        <li>Entrega de imágenes y materiales</li>
                      </ul>
                    </div>
                  </div>
                  <div className="relative z-10 w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center order-2 md:order-2">
                    <span>2</span>
                  </div>
                  <div className="md:w-1/2 md:pl-12 mt-6 md:mt-0 order-3 md:order-3">
                    <h3 className="text-xl font-semibold text-emerald-800 mb-2">Diseño y planificación</h3>
                    <p className="text-emerald-700">Desarrollamos el concepto visual y estructura de tu sitio web.</p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right">
                    <h3 className="text-xl font-semibold text-emerald-800 mb-2">Desarrollo y creación</h3>
                    <p className="text-emerald-700">Construimos tu sitio web con todas las funcionalidades elegidas.</p>
                  </div>
                  <div className="relative z-10 w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center">
                    <span>3</span>
                  </div>
                  <div className="md:w-1/2 md:pl-12 mt-6 md:mt-0">
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <ul className="list-disc list-inside text-emerald-700">
                        <li>Programación del sitio</li>
                        <li>Implementación de funcionalidades</li>
                        <li>Pruebas en diferentes dispositivos</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right order-1 md:order-1">
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <ul className="list-disc list-inside text-emerald-700">
                        <li>Revisión del sitio completado</li>
                        <li>Ajustes finales según feedback</li>
                        <li>Entrega de accesos y material</li>
                      </ul>
                    </div>
                  </div>
                  <div className="relative z-10 w-10 h-10 rounded-full bg-emerald-600 text-white flex items-center justify-center order-2 md:order-2">
                    <span>4</span>
                  </div>
                  <div className="md:w-1/2 md:pl-12 mt-6 md:mt-0 order-3 md:order-3">
                    <h3 className="text-xl font-semibold text-emerald-800 mb-2">Lanzamiento</h3>
                    <p className="text-emerald-700">Tu sitio web queda activo y listo para compartir con tus invitados.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className={activeTab === 'faq' ? 'block' : 'hidden'}>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-4">Preguntas frecuentes</h2>
              <p className="text-lg text-emerald-700">
                Todo lo que necesitas saber sobre nuestras invitaciones web:
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto divide-y divide-emerald-100">
              <div className="py-6">
                <h3 className="text-xl font-semibold text-emerald-800 mb-2">¿Por cuánto tiempo estará disponible mi sitio web?</h3>
                <p className="text-emerald-700">
                  Tu invitación web estará disponible durante 12 meses desde su lanzamiento. Si deseas extender este período, ofrecemos opciones de renovación.
                </p>
              </div>
              
              <div className="py-6">
                <h3 className="text-xl font-semibold text-emerald-800 mb-2">¿Puedo hacer cambios después de que el sitio esté publicado?</h3>
                <p className="text-emerald-700">
                  Sí, incluimos un período de modificaciones menores sin costo adicional durante el primer mes. Después, los cambios importantes pueden tener un costo adicional dependiendo de su complejidad.
                </p>
              </div>
              
              <div className="py-6">
                <h3 className="text-xl font-semibold text-emerald-800 mb-2">¿Cuánto tiempo toma crear una invitación web?</h3>
                <p className="text-emerald-700">
                  El tiempo promedio es de 2 a 3 semanas desde la consulta inicial hasta el lanzamiento, dependiendo de la complejidad del proyecto y la rapidez en la entrega de materiales.
                </p>
              </div>
              
              <div className="py-6">
                <h3 className="text-xl font-semibold text-emerald-800 mb-2">¿Puedo tener un dominio personalizado?</h3>
                <p className="text-emerald-700">
                  Sí, ofrecemos la opción de adquirir un dominio personalizado (ejemplo: www.mariaycarlos.com) por un costo adicional que incluye el registro por un año.
                </p>
              </div>
              
              <div className="py-6">
                <h3 className="text-xl font-semibold text-emerald-800 mb-2">¿Tendré acceso a los datos de mis invitados?</h3>
                <p className="text-emerald-700">
                  Absolutamente. Te proporcionamos un panel de administración donde podrás ver todas las confirmaciones, preferencias y mensajes de tus invitados en tiempo real.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-emerald-700 text-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Listo para crear tu invitación web perfecta?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Comienza hoy mismo y sorprende a tus invitados con una experiencia digital única y memorable.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Link href="/contact" className="px-8 py-3 bg-white text-emerald-700 rounded-md hover:bg-emerald-50 transition-colors font-semibold text-lg">
              Solicitar información
            </Link>
            <Link href="/ecoproducts" className="px-8 py-3 border-2 border-white rounded-md hover:bg-emerald-600 transition-colors font-medium text-lg">
              Ver todos nuestros productos
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default EcoWebsInvitaciones;