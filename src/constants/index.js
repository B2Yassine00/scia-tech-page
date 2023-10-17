import sensor from "/src/assets/sensor.png";
import dataAnalysis from "/src/assets/dataAnalysis.png";
import dataPrediction from "/src/assets/dataPrediction.png";
import insole1 from "/src/assets/insole1.jpg";
import insole2 from "/src/assets/insole2.jpg";
import insole3 from "/src/assets/insole3.jpg";
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

export const home = {
  first_text: "Scia-Tech: Tailored Solutions for Your Sciatica Needs.",
  second_text: "Healthier,",
  third_text: "Step by Step.",
};


export const about = {big_title: "About Us",
    description: "At SciaTech, we are driven by a steadfast mission to completely transform the way sciatica pain is managed. Our unwavering dedication is rooted in providing individuals who grapple with the discomfort of sciatica not just with mere relief, but with intelligent and comprehensive solutions. Our commitment goes beyond alleviating pain – we aim to empower these individuals to actively participate in their own health journey. We believe in equipping them with the tools, resources, and knowledge necessary to take charge of their well-being, ultimately enabling a higher quality of life."
  };

export const slides = [{ url: insole1 }, { url: insole2 }, { url: insole3 }];

export const services = [
  {
    title: "Sensor Technology",
    icon: sensor,
    description:
      "We provide you with cutting-edge sensor technology to revolutionize pain management, and improve your health.",
  },
  {
    title: "Data Analysis",
    icon: dataAnalysis,
    description:
      "This data is then processed by AI algorithms to provide personalized insights, guiding you towards a life free from discomfort.",
  },
  {
    title: "Predictive Analysis",
    icon: dataPrediction,
    description:
      "By analyzing your unique movement patterns and postures, our advanced algorithms forecast potential pain triggers before they strike.",
  },
];

export const features = [
  {
    name: "Predictive Pain Monitoring",
    description: "We predict discomfort before it starts, no time to lose.",
    image: insole,
  },
  {
    name: "Real-time tracking",
    description: "Our sensors and AI track your actions, signaling pain cues.",
    image: insole,
  },
  {
    name: "Tailored Suggestions",
    description:
      "Our system gains insights from your past interactions to offer tailored guidance.",
    image: insole,
  },
];

export const experiences = [
  {
    title: "Shop",
    description:
      "Explore our curated collection designed to relieve foot pain and enhance your lifestyle.",
    company_name: " ",

    icon: one,

    iconBg: "#05668D",
    date: "July 2023 - Present",
    points: ["Shop"],
  },
  {
    title: "Download",
    description:
      "Get our app for seamless browsing and personalized recommendations, right at your fingertips.",
    company_name: " ",
    image1: playstore,
    image2: appstore,
    icon: two,

    iconBg: "05668D",
    date: "July 2022 - Aug 2022",
    points: ["Donwload"],
  },
  {
    title: "Connect",
    description:
      "Sync your insoles with our app for a new level of personalization.",
    company_name: " ",
    icon: three,
    iconBg: "#05668D",
    date: "July 2022 - Aug 2022",
    points: ["Donwload"],
  },
];
