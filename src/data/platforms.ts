import { FaLinkedin, FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";

import { IconType } from "react-icons/lib";

export type Platforms = {
  title: string;
  icon: IconType;
  link: string;
  hoverColor: string;
};

export const platforms: Platforms[] = [
  {
    title: "LinkedIn",
    icon: FaLinkedin,
    link: "https://www.linkedin.com/in/sasher-gurung-00b215311/",
    hoverColor: "hover:text-blue-400",
  },
  {
    title: "Instagram",
    icon: FaInstagram,
    link: "https://www.instagram.com/_thats_crazzy/",
    hoverColor: "hover:text-pink-400",
  },
  {
    title: "Facebook",
    icon: FaFacebook,
    link: "https://www.facebook.com/sasher.gurung",
    hoverColor: "hover:text-blue-400",
  },
  {
    title: "TikTok",
    icon: FaTiktok,
    link: "https://www.tiktok.com/@doobiewaah",
    hoverColor: "hover:text-gray-50",
  },
];
