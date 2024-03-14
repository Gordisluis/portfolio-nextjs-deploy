"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const items = [
  {
    id: 1,
    color: "bg-black",
    title: "Pagina web en Wordpress",
    desc: "Pagina web creada en wordpress para la compañia Marathon truck & trailers establecida en miami florida",
    img: "/marathoncap.jpeg",
    link: "https://www.marathonttr.com/?gad_source=1&gclid=CjwKCAjw17qvBhBrEiwA1rU9w2_pl852wBz-3_yXdhbnp_37ak3ZMAR5jigS4Z040DSeDd_UmTEE6BoCOsoQAvD_BwE",
  },
  {
    id: 2,
    color: "bg-black",
    title: "Blog pequeño en django",
    desc: "Sitio tipo blog creado para fotografo profesional alex villae. creada en React.",
    img: "/jfhdf.png",
    link: "",
  },
  {
    id: 3,
    color: "bg-black",
    title: "Pagina Web de servicios ",
    desc: "Pagina web para la empresa de servicios de auxilios viales y emergencias. Creada en django.",
    img: "/quality2.jpeg",
    link: "https://qualitylugoservicesllc.com/",
  },
  {
    id: 4,
    color: "bg-black",
    title: "Pagina Web de Servicios",
    desc: "Rockwell empresa basada en miami florida. Creada en Wordpress.",
    img: "/rockwell.jpeg",
    link: "https://www.rockwellfleets.com/",
  },
];

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className=" bg-gradient-to-r from-blue-300 via-blue-200 to-blue-100 bg-clip-text text-transparent w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
          Mis trabajos
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-8 text-white">
                  <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl">
                    {item.title}
                  </h1>
                  <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
                    <Image src={item.img} alt="" fill />
                  </div>
                  <p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                    {item.desc}
                  </p>
                  <Link href={item.link} className="flex justify-end">
                    <button className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-blue-500 text-white hover:bg-black font-semibold m-4 rounded">See Demo</button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center bg-black">
        <h1 className="text-6xl bg-gradient-to-r from-blue-300 via-blue-200 to-blue-100 bg-clip-text text-transparent">Tiene algun Proyecto?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[600px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#ffffff">
              <textPath xlinkHref="#circlePath" className="text-2xl">
                Front-end Developer Freelancer
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-blue-700 text-white rounded-full flex items-center justify-center"
          >
            Contactame
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
