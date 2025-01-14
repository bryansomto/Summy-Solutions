"use client";
import Image from "next/image";
import Center from "../Center";
import styles from "./styles.modules.css";
import React from "react";
import {
  summyLan1,
  summyLan2,
  summyLan3,
  summyLan4,
  summyLan5,
  summyLan6,
  summyPor1,
  summyPor2,
  summyPor3,
  summyPor4,
} from "@/app/assets";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const Article = () => {
  const [emblaRef] = useEmblaCarousel({ loop: false });
  const [emblaRef1] = useEmblaCarousel({ loop: true });
  return (
    <Center>
      <article
        id="about"
        className="bg-gray-900 sm:bg-white text-gray-200 sm:text-gray-900 py-12 sm:py-0 px-6 sm:px-0 font-light sm:font-normal"
      >
        <h2>About</h2>
        <p>
          At Summy Solution and Technology Ventures, we are your trusted experts
          in air conditioning, refrigeration, mechanical services, and plumbing
          solutions. Whether it&#39;s ensuring optimal cooling for your space or
          handling essential mechanical and plumbing needs, we&#39;ve got you
          covered with reliable and professional services.
        </p>
      </article>
      <article id="services" className="px-6 sm:px-0">
        <h2>Our Services</h2>
        <div className="embla mt-3 rounded-lg" ref={emblaRef}>
          <div className="embla__container w-1/2 sm:w-1/3 md:w-1/4 gap-4 p-4">
            <div className="embla__slide">
              <Image
                src={summyPor1}
                alt="physical store"
                className="rounded-md ring-2 ring-gray-900/50 ring-offset-4"
              />
            </div>
            <div className="embla__slide">
              <Image
                src={summyPor2}
                alt="physical store"
                className="rounded-md ring-2 ring-gray-900/50 ring-offset-4"
              />
            </div>
            <div className="embla__slide">
              <Image
                src={summyPor3}
                alt="physical store"
                className="rounded-md ring-2 ring-gray-900/50 ring-offset-4"
              />
            </div>
            <div className="embla__slide">
              <Image
                src={summyPor4}
                alt="physical store"
                className="rounded-md ring-2 ring-gray-900/50 ring-offset-4"
              />
            </div>
          </div>
        </div>
        <h3>Air Conditioning Repair Service</h3>
        <p>Fast and efficient repairs for all air conditioning systems.</p>
        <h3>Air Conditioning System Maintenance</h3>
        <p>Regular maintenance to ensure your systems run smoothly.</p>
        <h3>Air Conditioning System Installation</h3>
        <p>
          Professional installation services for homes, offices, and vehicles.
        </p>
        <h3>Air Conditioning Mechanical Services</h3>
        <p>
          Comprehensive services, including the installation, maintenance, and
          repair of air conditioning systems, diagnosing and fixing compressor
          issues, motor replacements, inspecting and repairing ductwork, and
          ensuring optimal performance of ventilation and fan systems.
        </p>
        <h3>Plumbing Solutions</h3>
        <p>
          Expert services that include installing and maintaining water and
          drainage systems, repairing leaks, unclogging and cleaning drains,
          inspecting plumbing systems for faults, and troubleshooting issues
          with water supply and pressure.
        </p>
        <h3>Sales of Air Conditioning and Refrigerator Systems</h3>
        <p>High-quality systems designed for efficiency and durability.</p>
        <h3>Spare Parts for Cars and Homes</h3>

        <ul>
          <li>
            Car A/C components like evaporators, condensers, driers, gases,
            oils, and more.
          </li>
        </ul>
        <ul>
          <li>Home A/C and refrigerator parts for optimal performance.</li>
        </ul>
      </article>
      <article id="training" className="px-6 sm:px-0">
        <h2>Apprenticeship Training</h2>
        <p>
          Gain hands-on experience and practical skills in air conditioning,
          refrigeration, and plumbing. Our expert-led training programs are
          tailored to equip you with the knowledge and expertise required to
          thrive in these industries.
        </p>
      </article>
      <article className="flex flex-col gap-6 bg-gray-900 sm:bg-white text-gray-200 sm:text-gray-900 px-6 sm:px-0 py-12 sm:py-0 font-light sm:font-normal">
        <div className="embla mt-3 rounded-lg" ref={emblaRef1}>
          <div className="embla__container w-1/2 sm:w-1/3 md:w-1/4 gap-4 p-4">
            <div className="embla__slide">
              <Image
                src={summyLan1}
                alt="physical store"
                className="rounded-md ring-2 ring-gray-900/50 ring-offset-4"
              />
            </div>
            <div className="embla__slide">
              <Image
                src={summyLan2}
                alt="physical store"
                className="rounded-md ring-2 ring-gray-900/50 ring-offset-4"
              />
            </div>
            <div className="embla__slide">
              <Image
                src={summyLan3}
                alt="physical store"
                className="rounded-md ring-2 ring-gray-900/50 ring-offset-4"
              />
            </div>
            <div className="embla__slide">
              <Image
                src={summyLan4}
                alt="physical store"
                className="rounded-md ring-2 ring-gray-900/50 ring-offset-4"
              />
            </div>
            <div className="embla__slide">
              <Image
                src={summyLan5}
                alt="physical store"
                className="rounded-md ring-2 ring-gray-900/50 ring-offset-4"
              />
            </div>
            <div className="embla__slide">
              <Image
                src={summyLan6}
                alt="physical store"
                className="rounded-md ring-2 ring-gray-900/50 ring-offset-4"
              />
            </div>
          </div>
        </div>
        <div>
          <h2>Why Choose Us?</h2>
          <h3>Unmatched Expertise</h3>
          <p>
            Our technicians are skilled in delivering specialized air
            conditioning, mechanical, and plumbing solutions.
          </p>
          <h3>Top-Quality Products</h3>
          <p>We supply durable and high-performance systems and parts.</p>
          <h3>Customer-Centered Approach</h3>
          <p>
            Your comfort and satisfaction are at the heart of everything we do.
          </p>
        </div>
      </article>
    </Center>
  );
};

export default Article;
