import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { hamidur } from "../assets";
import "./intro.css";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto caret-transparent`}>
      <div
        className={`absolute inset-0 top-[35%]  max-w-7xl mx-auto ${styles.paddingX} flex flex-wrap items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <br /> <span className={`${styles.heroNameText} text-[#915EFF]`}>Md Hamidur Rahman Khan</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            A student who loves <br className='sm:block hidden' />
          </p>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Programming</div>
              <div className="i-title-item">Robotics</div>
              <div className="i-title-item">Blockchain</div>
              <div className="i-title-item">Machine Learning</div>
              <div className="i-title-item">Web Application</div>
            </div>
          </div>
        </div>
        
        <div className='relative' style={{ width: '40%', position: 'absolute', right: 0, transform: 'translateY(-30%)'}}>
          <img
            src={hamidur}
            alt='project_image'
            className='w-half h-full object-cover rounded-2xl'
          />
        </div>
      </div>

      {/* <ComputersCanvas /> */}

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
