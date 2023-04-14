import Head from 'next/head';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillInstagram, AiFillLinkedin} from 'react-icons/ai';
import Image from "next/image";
import deved from "../public/dev-ed-standing.png";
import design from '../public/design.png';
import code from '../public/code.png';
import web1 from '../public/web1.png';
import web2 from '../public/web2.png';
import web3 from '../public/web3.png';
import web4 from '../public/web4.png';
import web5 from '../public/web5.png';
import web6 from '../public/web6.png';
import {useState} from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Tomi Omotayo Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons dark:text-gray-200 ">mographics</h1>
            <ul className="flex items-center">
              <li><BsFillMoonStarsFill onClick={() => setDarkMode (!darkMode)} className="cursor-pointer-2xl  dark:text-gray-200 "/></li>
              <li>
                <a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8" href="#">
                  Resume
                  </a>
                  </li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">Tomi Omotayo</h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">Developer and designer.</h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl md:text-xl mx-auto">
              Bringing Design to Life: Graphic Designer and 
              Front-End Developer Crafting Engaging Digital Experiences. Join me down below
              and lets get working!
              </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <a href="https://instagram.com/m.o_graphics?igshid=YmMyMTA2M2Y="><AiFillInstagram /></a>
              <a href="https://www.linkedin.com/in/tomi-omotayo"><AiFillLinkedin /></a>
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
            <Image src={deved} objectFit='cover' alt={''}/>
          </div>
        </section>
        

        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-gray-200 text-center">My Services</h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 text-center">
            As a freelance designer and developer, I've collaborated with agencies, startups, 
            and talented individuals to create digital products for businesses and consumers alike. 
            Every project is an adventure, and I pour my heart and soul into every step of the process!
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200 text-center">
              I offer from a wide range of services, including web design,
              programming and graphic design.
            </p>
          </div>
          <div className="lg:flex gap-10">
          <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
            <div className="flex justify-center">
            <Image src={design} width={100} height={100} alt={''} />
            </div>
            <h3 className="text-lg font-medium pt-8 pb-2 ">Beautiful Designs</h3>
          <p className="py-2">
        Creating elegant designs suited for your needs following core
        design theory.
      </p>
          <h4 className="py-4 text-teal-600">Design tools I use</h4>
          <p className="text-gray-800 py-1">Abobe Photoshop</p>
          <p className="text-gray-800 py-1">Adobe Illustrator</p>
          <p className="text-gray-800 py-1">Adobe XD</p>
          <p className="text-gray-800 py-1">Figma</p>
          </div>
          <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
            <div className="flex justify-center">
            <Image src={code} width={100} height={100} alt={''} />
            </div>
            <h3 className="text-lg font-medium pt-8 pb-2">Code your dream project</h3>
          <p className="py-2">
          Do you have an idea for your next great website? Let's make it a
                reality.
      </p>
          <h4 className="py-4 text-teal-600">Coding Languages I use</h4>
          <p className="text-gray-800 py-1">HTML</p>
          <p className="text-gray-800 py-1">CSS</p>
          <p className="text-gray-800 py-1">JavaScript</p>
          </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-gray-200 text-center">Portfolio</h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 text-center">
            Hey, I'm Tomi Omotayo - a design-obsessed front-end developer since 2020 with a unique blend of design and coding skills. 
            I create beautiful digital experiences that align perfectly with clients' brand identities. Check out my work down below!
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
          <div style={{ width: '100%', height: '100%' }}>
              <Image src={web1} alt="Design" />
            </div>
            <div style={{ width: '100%', height: '100%' }}>
              <Image src={web2} alt="Design" />
            </div>
            <div style={{ width: '100%', height: '100%' }}>
              <Image src={web3} alt="Design" />
            </div>
            <div style={{ width: '100%', height: '100%' }}>
              <Image src={web4} alt="Design" />
            </div>
            <div style={{ width: '100%', height: '100%' }}>
              <Image src={web5} alt="Design" />
              </div>
            <div style={{ width: '100%', height: '100%' }}>
              <Image src={web6} alt="Design" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
