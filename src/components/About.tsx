"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

const About = () => {
  return (
    <div className="py-28 mt-10 px-4 sm:px-6 lg:px-4">
      <div className="max-w-2xl grid items-center justify-start text-wrap mx-auto prose">
        <div className="">
          <div className="font-bold text-3xl text-black/90">About</div>
          <p>
            I&apos;m Abdulkafi Nirig, a Computer Science student at the University of Washington and an aspiring Software Engineer with a passion for building technology that makes a real impact. Moving from Yemen to Seattle taught me resilience, adaptability, and the value of consistent effort, shaping my growth and approach to problem solving. Through internships and projects I’ve gained experience with Python, Java, JavaScript, React, Node.js, MongoDB, and cloud tools, creating everything from community websites to feature rich messaging apps. I love turning ideas into functional, user friendly products and continue to expand my skills in areas like machine learning and AI. Curious and active, I enjoy new challenges, play basketball and soccer, speak Arabic, Somali, and English, and am learning Spanish and Japanese. I’m seeking opportunities to gain hands on experience, collaborate on meaningful products, and grow as an engineer.
            </p>
          <ul className="list-disc mt-3 text-gray-700">
            <li>Shipped real-world products (alarm apps, AI tools)</li>
            <li>3+ year experience in full-stack development</li>
            <li>Multiple software engineering internships</li>
            <li>Proficient in Python, Java, JavaScript, React, Node.js, and more</li>
          </ul>
        </div>
      </div>

      <Link
        href="https://www.linkedin.com/in/abdulkafi-nirig/"
        target="_blank"
      >
        <div className="flex justify-center mt-10 px-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="py-2 px-3 bg-white shadow-sm rounded-sm w-fit"
          >
            <Image
              src="/img/me.jpg"
              width={200}
              height={200}
              alt="profile image"
              className="rounded-sm bg-white w-full max-w-[200px]"
            />
            <span className="text-sm block text-center mt-1 text-gray-800">
              @AbdulkafiNirig
            </span>
          </motion.div>
        </div>
      </Link>

      <div className="flex justify-center mt-6 px-4">
        <Button className="!bg-black/90 text-white !cursor-pointer !py-4 !px-6 hover:!bg-black/82">
          <a href="#contact" aria-label="Contact for collaboration">
            Let&apos;s collaborate!
          </a>
        </Button>
      </div>
    </div>
  );
};

export default About;

