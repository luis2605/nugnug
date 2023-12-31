// next image
import Image from "next/image";

// components
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";
import css from "./pagesIndex.module.css";
// framer motion
import { motion } from "framer-motion";

// variants
import { fadeIn } from "../variants";
//translations
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-primary/10 py-32 text-center xl:text-left ">
      {/* text */}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div
          className={`text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto ${css.textContainer}`}
        >
          {/* title */}
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1"
          >
            Carl Stricker <br />
            <span className="text-accent">{t("index.greeting1")}</span>
            <br />
            <span className="text-accent">{t("index.greeting2")}</span>
          </motion.h1>
          {/* subtitle */}
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className={`max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16 ${css.subtext}`}
          >
            Meine Leidenschaft sind Pokémon Karten. <br /> Besonders Karten aus
            Japan liegen mir besonders am Herzen. <br /> Mit meinem Sortiment
            konnte ich schon viele Kunden in Europa glücklich machen. <br /> Bei
            Fragen können Sie mich gerne kontaktieren per E-Mail, telefonisch
            oder per WhatsApp. <br />
            Ich habe für meine Kunden immer ein offenes Ohr.
          </motion.p>
          {/* btn */}
          <div className="flex justify-center xl:hidden relative">
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      {/* image */}
      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        {/* bg img */}
        <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"></div>
        {/* particles */}
        <ParticlesContainer />
        {/* avatar img */}
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]"
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
