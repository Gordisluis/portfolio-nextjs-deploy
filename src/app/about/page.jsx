"use client";
import Brain from "@/components/brain";
import { motion, useInView, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const AboutPage = () => {
  const containerRef = useRef();

  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef();
  // const isSkillRefInView = useInView(skillRef, {once:true});
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
        {/* TEXT CONTAINER */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2">
          {/* BIOGRAPHY CONTAINER */}
          <div className="flex flex-col gap-12 justify-center">
            {/* BIOGRAPHY IMAGE */}
            <Image
              src="/heroazul.png"
              alt=""
              width={112}
              height={112}
              className="w-35 h-35 rounded-full object-cover"
            />
            {/* BIOGRAPHY TITLE */}
            <h1 className="font-bold text-2xl bg-gradient-to-r from-blue-300 via-blue-200 to-blue-100 bg-clip-text text-transparent">BIOGRAFIA</h1>
            {/* BIOGRAPHY DESC */}
            <p className="text-lg">
              Soy un profesional de la informatica dedicado y apasionado por la programacion.
              Estoy en constante aprendizaje para crecer como persona y como programador, para expansion de mis habilidades
              constantemente apuntando a un nuevo horizonte para lograr mis objetivos.
              <br /><br />
              Me considero una persona responsable, comprometida y con una gran pasión por la tecnología.
              enfocado en ser buen compañero y comprometido con mis objetivos.
              
            </p>
            {/* BIOGRAPHY QUOTE */}
            <span className="italic bg-gradient-to-r from-blue-300 via-blue-200 to-blue-100 bg-clip-text text-transparent">
              Mi camino es el de la tecnología.
            </span>
            
            {/* BIOGRAPHY SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#ffffff"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#ffffff" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#ffffff"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* SKILLS CONTAINER */}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            {/* SKILL TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              SKILLS
            </motion.h1>
            {/* SKILL LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              className="flex gap-4 flex-wrap"
            >
              <div className="rounded  p-2 text-sm cursor-pointer bg-blue-500 text-white hover:bg-black">
                JavaScript
              </div>
            
              <div className="rounded  p-2 text-sm cursor-pointer bg-blue-500 text-white hover:bg-black">
                React.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-blue-500 text-white hover:bg-black">
                Next.js
              </div>
              
              <div className="rounded  p-2 text-sm cursor-pointer bg-blue-500 text-white hover:bg-black">
                Tailwind CSS
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-blue-500 text-white hover:bg-black">
                MongoDB
              </div>
              
              <div className="rounded  p-2 text-sm cursor-pointer bg-blue-500 text-white hover:bg-black">
                Node.js
              </div>
              
              <div className="rounded  p-2 text-sm cursor-pointer bg-blue-500 text-white hover:bg-black">
                Express.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-blue-500 text-white hover:bg-black">
                Vite
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-blue-500 text-white hover:bg-black">
                Django
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-blue-500 text-white hover:bg-black">
                Python
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-blue-500 text-white hover:bg-black">
                Flask
              </div>
              
              <div className="rounded  p-2 text-sm cursor-pointer bg-blue-500 text-white hover:bg-black">
                Firebase
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-blue-500 text-white hover:bg-black">
                Git
              </div>
              
            </motion.div>
            {/* SKILL SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
              
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#ffffff"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#ffffff" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#ffffff"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* EXPERIENCE CONTAINER */}
          <div
            className="flex flex-col gap-12 justify-center pb-48"
            ref={experienceRef}
          >
            {/* EXPERIENCE TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl bg-gradient-to-r from-blue-300 via-blue-200 to-blue-100 bg-clip-text text-transparent"
            >
              EXPERIENCIAS
            </motion.h1>
            {/* EXPERIENCE LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              className=""
            >
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-gradient-to-r from-blue-300 via-blue-200 to-blue-100 bg-clip-text text-transparent p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Desarrollador web - Freelancer
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    me encarge del desarrollo de la pagina web para mi cliente donde se me solicito la herramientas wordpress.{" WORDPRESS "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2022 - November
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-gradient-to-r from-blue-300 via-blue-200 to-blue-100 bg-clip-text text-transparent text-sm font-semibold w-fit">
                    Marathonttr
                  <span><link href="https://www.marathonttr.com/?gad_source=1&gclid=CjwKCAjw17qvBhBrEiwA1rU9w2_pl852wBz-3_yXdhbnp_37ak3ZMAR5jigS4Z040DSeDd_UmTEE6BoCOsoQAvD_BwE"/></span><link href="https://www.marathonttr.com/?gad_source=1&gclid=CjwKCAjw17qvBhBrEiwA1rU9w2_pl852wBz-3_yXdhbnp_37ak3ZMAR5jigS4Z040DSeDd_UmTEE6BoCOsoQAvD_BwE"/>
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-blue-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-blue-600 bg-blue-600 -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 "></div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-blue-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-blue-600 bg-blue-600 -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-gradient-to-r from-blue-300 via-blue-200 to-blue-100 bg-clip-text text-transparent p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Desarrollador web - Freelancer
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                  desarrollo de la pagina web destacandome en el manejo de las herramientas de desarrollo para llevar a cabo la vision de mi cliente. {" Django "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2023 - enero{" "}
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-gradient-to-r from-blue-300 via-blue-200 to-blue-100 bg-clip-text text-transparent text-sm font-semibold w-fit">
                    QualityLugoservices
                  </div>
                </div>
              </div>
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-gradient-to-r from-blue-300 via-blue-200 to-blue-100 bg-clip-text text-transparent p-3 font-semibold rounded-b-lg rounded-s-lg">
                  Desarrollador web{" - Freelancer "}
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    proveedor de soluciones digitales, aplicando tecnologías para cubrir las exigencias de mis clientes.{" React "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2019 - agosto{" "}
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-gradient-to-r from-blue-300 via-blue-200 to-blue-100 bg-clip-text text-transparent text-sm font-semibold w-fit">
                    Rockwell solutions
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-blue-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-blue-600 bg-blue-600 -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
            </motion.div>
          </div>
        </div>
        {/* SVG CONTAINER */}
        <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
