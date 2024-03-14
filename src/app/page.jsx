"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* IMAGE CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image src="/herofinal3.png" alt="" fill className="object-contain" />
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 bg-black text-white lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          {/* TITLE */}
          <h1 className="text-4xl md:text-6xl font-bold">
            <span className="bg-gradient-to-r from-blue-300 via-blue-200 to-blue-100 bg-clip-text text-transparent">
              Creando soluciones digitales para tu negocio.
            </span>
          </h1>
          {/* DESC */}
          <p className="md:text-xl">
            Bienvenido a mi digital canvas, donde la innovación y la creatividad
            convergen. Con una mirada en la austeridad y un gran dominio del
            código, mi portafolio muestra una colección de proyectos que
            reflejan mi compromiso con la excelencia.

            
          </p>
          {/* BUTTONS */}
          <div className="w-full flex gap-4">
            <Link href="/portfolio" className="border-b-2 border-blue-500">
              <span className="bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300 bg-clip-text text-transparent">
                Ver Proyectos
              </span>
            </Link>
            <Link href="/contact" className="border-b-2 border-blue-500">
              <span className="bg-gradient-to-r from-blue-500 via-blue-400 to-blue-300 bg-clip-text text-transparent">
                Contactarme
              </span>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
