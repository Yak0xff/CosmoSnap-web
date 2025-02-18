import {
  EyeIcon,
  FilmIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/screen1.png";
import benefitTwoImg from "../../public/img/screen2.png";

const benefitOne = {
  title: "Explore the universe non-stop! ",
  desc: "Cosmic Explorer: Reliable Daily Astronomy Wonders. Dive into the cosmos like never before! Cosmic Explorer delivers breathtaking Astronomy Pictures of the Day (APOD) straight to your device. so the universe’s marvels never skip a beat. Explore the Universe, Every Day！",
  image: benefitOneImg,
  bullets: [
    {
      title: "Daily Cosmic Gems",
      desc: "A stunning, high-resolution APOD each morning with expert explanations.",
      icon: <FilmIcon />,
    },
    {
      title: "Deep Dive Archive",
      desc: "Browse thousands of images across decades.",
      icon: <EyeIcon />,
    },
    {
      title: "Random Adventure",
      desc: "Surprise yourself with a shuffle of cosmic wonders—perfect for inspiration.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

// const benefitTwo = {
//   title: "Offer more benefits here",
//   desc: "You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.",
//   image: benefitTwoImg,
//   bullets: [
//     {
//       title: "Mobile Responsive Template",
//       desc: "Nextly is designed as a mobile first responsive template.",
//       icon: <DevicePhoneMobileIcon />,
//     },
//     {
//       title: "Powered by Next.js & TailwindCSS",
//       desc: "This template is powered by latest technologies and tools.",
//       icon: <AdjustmentsHorizontalIcon />,
//     },
//     {
//       title: "Dark & Light Mode",
//       desc: "Nextly comes with a zero-config light & dark mode. ",
//       icon: <SunIcon />,
//     },
//   ],
// };


export {benefitOne};
