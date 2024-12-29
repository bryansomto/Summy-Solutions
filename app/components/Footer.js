import {
  FaEnvelope,
  FaFacebookF,
  FaLocationArrow,
  FaSearchLocation,
} from "react-icons/fa";
import { AiOutlineTwitter, AiFillYoutube } from "react-icons/ai";
import { Logo } from "../assets";
import Image from "next/image";
import Link from "next/link";
import Center from "./Center";

function Footer() {
  const iconsTab = [
    {
      icon: <FaFacebookF />,
      link: "https://www.facebook.com/profile.php?id=100088349081665&mibextid=ZbWKwL",
    },
    {
      icon: <FaEnvelope />,
      link: "mailto:ilesanmijoseph@summysolutionandtechnology.com",
    },
    { icon: <FaSearchLocation />, link: "https://g.co/kgs/Tpg19r1" },
  ];
  return (
    <Center>
      <footer className="bg-white">
        <div className="container mx-auto sm:py-[2rem]">
          {/* footer div all */}
          <div className="flex justify-between flex-col md:gap-[5rem] text-left">
            {/* logo side */}
            <div className="flex flex-col items-center md:p-0 py-4 gap-8">
              <Image src={Logo} alt="footer_logo" className="w-[18rem]" />
              <p className="text-[15px] font-medium text-[#646464] w-1/2">
                Let Summy Solution and Technology Ventures handle all your air
                conditioning, refrigeration, mechanical, and plumbing needs with
                precision and care.
              </p>
              {/* socials */}
              <div className="flex gap-7 text-[18px] text-[#646464] justify-center">
                {iconsTab.map(({ icon, link }, index) => {
                  return (
                    <div
                      key={index}
                      className="text-2xl bg-[#efefef] p-2 rounded-full hover:bg-[#ff0366] hover:text-white"
                      style={{ transition: "all 0.3s" }}
                    >
                      <Link href={link}>{icon}</Link>
                    </div>
                  );
                })}
              </div>
              {/* Contact and email */}
              <p id="contact">
                <b>Call Us:</b> <br /> 0708 833 3274 <br /> 0802 757 7667
              </p>
              <p className="text-xs sm:text-base">
                <b>Email Us:</b> <br />{" "}
                IlesanmiJoseph@summysolutionandtechnology.com <br />{" "}
                enquiries@summysolutionandtechnology.com <br />{" "}
                Summysolutiontechnology@gmail.com
              </p>
              <p className="text-[12px] sm:text-[16px] font-medium text-[#646464]">
                Privacy Policy | © {new Date().getFullYear()} Summy Solutions
                {/* <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.radiustheme.com/"
                >
                  RadiusTheme
                </a> */}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </Center>
  );
}

export default Footer;
