'use client'
import Image from 'next/image';
// import { motion } from 'framer-motion'; // Si utilizas framer-motion para animaciones

const GerminablesOverview = () => {
  return (
    <section id="overview" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-emerald-800 mb-6">Invitaciones que cobran vida</h2>
          <p className="text-lg text-emerald-700">
            Nuestras invitaciones germinables son elaboradas artesanalmente con papel reciclado y semillas de plantas y flores. 
            Un regalo ecológico que tus invitados podrán plantar después de tu boda.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-emerald-50 p-6 rounded-lg">
            <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0 0L9.121 9.121"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-emerald-800 mb-2">Eco-friendly</h3>
            <p className="text-emerald-700">
              Elaboradas con papel reciclado y biodegradable. Una alternativa perfecta al papel tradicional que respeta el medio ambiente.
            </p>
          </div>
          
          <div className="bg-emerald-50 p-6 rounded-lg">
            <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-emerald-800 mb-2">Artesanales</h3>
            <p className="text-emerald-700">
              Cada invitación es creada a mano con dedicación y cuidado. Texturas únicas y acabados naturales que sorprenderán a tus invitados.
            </p>
          </div>
          
          <div className="bg-emerald-50 p-6 rounded-lg">
            <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-emerald-800 mb-2">Simbólicas</h3>
            <p className="text-emerald-700">
              Representan el crecimiento de tu nueva etapa. Tus invitados podrán conservar un recuerdo vivo de tu boda que florecerá con el tiempo.
            </p>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center bg-emerald-50 rounded-xl overflow-hidden">
          <div className="md:w-1/2">
            <div className="relative w-full h-72 md:h-96">
              <Image 
                src="/images/products/germinable-process.jpg" 
                alt="Proceso de fabricación" 
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="md:w-1/2 p-8">
            <h3 className="text-2xl font-bold text-emerald-800 mb-4">¿Cómo funcionan?</h3>
            <ol className="space-y-4">
              <li className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-emerald-700 text-white flex items-center justify-center flex-shrink-0 mt-1 mr-3">1</div>
                <p className="text-emerald-700">Después de recibir la invitación, tus invitados pueden colocarla en tierra húmeda.</p>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-emerald-700 text-white flex items-center justify-center flex-shrink-0 mt-1 mr-3">2</div>
                <p className="text-emerald-700">Con agua y luz solar, el papel comenzará a descomponerse naturalmente.</p>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-emerald-700 text-white flex items-center justify-center flex-shrink-0 mt-1 mr-3">3</div>
                <p className="text-emerald-700">En pocas semanas, las semillas germinarán creando bellas flores o plantas aromáticas.</p>
              </li>
              <li className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-emerald-700 text-white flex items-center justify-center flex-shrink-0 mt-1 mr-3">4</div>
                <p className="text-emerald-700">Un recuerdo de tu boda que florecerá y perdurará en el tiempo.</p>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GerminablesOverview;