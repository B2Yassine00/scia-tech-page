
import pain from "/src/assets/back-pain.png";
import time from "/src/assets/time-management.png";
import care from "/src/assets/charity.png";
import insole1 from "/src/assets/insole1.jpg";
import insole2 from "/src/assets/insole2.jpg";
import insole3 from "/src/assets/insole3.png";
import insole from "/src/assets/feat.png";
import one from "/src/assets/number_1.png";
import two from "/src/assets/number_2.png";
import three from "/src/assets/number_3.png";
import appstore from "/src/assets/appstore.png";
import playstore from "/src/assets/playstore.png";


export const navLinks = [
    {
        id: "home",
        title: "Home",
    },
    {
      id: "about",
      title: "About",
    },
    {
      id: "services",
      title: "Services",
    },
    {
      id: "features",
      title: "Features",
    },
    {
      id: "steps",
      title: "Steps",
    },
    
  ];

export const home = {first_text: "Scia-Tech, Unlock Comfort, Embrace your Life.",
    second_text:"Every Step Towards,",
    third_text: " Sciatica Freedom.",
  };

export const about = {big_title: "About Us",
    description: "At SciaTech, we're on a mission to redefine the way sciatica pain is managed. We are dedicated to providing individuals suffering from sciatica discomfort with smart solutions that not only offer relief but also empower them to take charge of their health journey."
  };


export const slides = [{url: insole1}, {url: insole2}, {url: insole3}];

    

export const services = [
    {

      title: "Advanced Sciatic Pain Management",
      icon: pain,
      description: "Utilize our smart insoles equipped with AI and IoT technology to actively manage and alleviate sciatic pain.",
    },
    {
      title: "Real-Time Insights & Guidance",
      icon: time,
      description: "Receive tailored advice for managing sciatic discomfort, specifically addressing your unique needs.",
    },
    {
      title: "Personalized Care at Your Feet",
      icon: care,
      description: "Experience personalized sciatic wellness with real-time insights and tailored lifestyle recommendations.",

    },
  ];

  export const features = [
    {
      name: "Predictive Pain",
      description:
        "We predict discomfort before it starts, no time to lose.",
      image: insole,
    },
    {
      name: "Instant Insight",
      description:
        "	Our sensors and AI watch your actions, signaling pain cues.",
        image: insole,
      },
    {
      name: "Tailored Tips",
      description:
        "Our smart tech learns from your patterns, advice for your way.",
      image: insole,
    },
    
       ];

export const experiences = [
  {
    title: "Shop",
    description: "Explore our curated collection designed to relieve foot pain and enhance your lifestyle.",
    company_name: " ",

    icon: one,

    iconBg: "#05668D",
    date: "July 2023 - Present",
    points: [
      "Shop",
    ],
  },
  {
    title: "Download",
    description: "Get our app for seamless browsing and personalized recommendations, right at your fingertips.",
    company_name: " ",
    image1: playstore,
    image2: appstore,
    icon: two,

    iconBg: "05668D",
    date: "July 2022 - Aug 2022",
    points: [
      "Donwload",
    ],
  },
  {
    title: "Connect",
    description: "Sync your insoles with our app for a new level of personalization.",
    company_name: " ",
    icon: three,
    iconBg: "#05668D",
    date: "July 2022 - Aug 2022",
    points: [
      "Donwload",
    ],
  },
];