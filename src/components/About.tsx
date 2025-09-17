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
            I&apos;I am a software engineer driven by a passion for building scalable and impactful technology. My experience spans multiple programming languages, frameworks, and cloud platforms, allowing me to design and deliver full stack applications that are both efficient and maintainable. I thrive on transforming complex business requirements into clean, well architected solutions that balance performance, security, and user experience. Whether developing new features, optimizing system performance, or collaborating with cross functional teams, I approach every challenge with curiosity and a commitment to continuous improvement. My goal is to create software that not only meets technical specifications but also empowers users and drives meaningful results for organizations.
            </p>
          <ul className="list-disc mt-3 text-gray-700">
            <li>Shipped real-world products (alarm apps, AI tools)</li>
            <li>3+ year experience in full-stack development</li>
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
              @midecode
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

