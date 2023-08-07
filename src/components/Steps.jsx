import {
    VerticalTimeline,
    VerticalTimelineElement,
  } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { SpecSectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const Steps = () => {
    return (
        <div className="h-screen bg-hero-pattern bg-center bg-cover bg-no-repeat">

        </div>
    )
}

export default SpecSectionWrapper(Steps,"steps");