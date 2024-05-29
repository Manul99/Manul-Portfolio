import { useRef } from 'react';
import './services.scss'
import {animate, motion, useInView} from "framer-motion";

const variants = {
    initial:{
        x: -500,
        y:100,
        opacity:0,
    },
    animate:{
        x:0,
        opacity:1,
        y:0,
        transition:{
            duration:1,
            staggerChildren:0.1,
        }
    }
}
const Services = () => {
    const ref = useRef();

    const handleGo = () =>{
        window.location.href ="#Contact";
    }

    const isInView = useInView(ref, {margin: "-100px"});
  return (
    <motion.div className='services' variants={variants} initial="initial" //whileInView="animate" 
     ref={ref} animate={isInView && "animate"}>
      <motion.div className="textContainer" variants={variants}>
        <p>Focus on helping your brand grow <br/>
         and move forward</p>
         <hr/>
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
         <div className="title">
            <img src='/people.webp' alt=''/>
            <h1>
                <motion.b whileHover={{color:'orange'}}>Unique</motion.b> Ideas
            </h1>
         </div>
         <div className="title">
            
            <h1>
                <motion.b whileHover={{color:'orange'}}>Four Your</motion.b> Business.
            </h1>
            <button>What I DO?</button>
         </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div className="box" whileHover={{background:"lightgray",color:"black"}}>
            <h2>Web Development</h2>
            <p>
            Contributed and experienced in MERN Stack, ASP.NET, and Java, demonstrating strong
             skills in full-stack web development, backend services, and robust application design
           
            </p>
            <button onClick={handleGo}>GO</button>
        </motion.div>
        <motion.div className="box" whileHover={{background:"lightgray",color:"black"}}>
            <h2>Mobile Development</h2>
            <p>
            Contributed and experienced in Expo React Native, demonstrating proficiency in mobile application development, debugging, testing, and deployment, with a strong focus on user experience and performance optimization.
            </p>
            <button onClick={handleGo}>GO</button>
        </motion.div>
        <motion.div className="box" whileHover={{background:"lightgray",color:"black"}}>
            <h2>AI and Machine Learning</h2>
            <p>
            With a strong background and proven experience in multiple technologies, I specialize in delivering cutting-edge AI and Machine Learning solutions, including developing advanced machine learning models, such as a tea disease detection app, to provide accurate, data-driven insights and automation.
            
            </p>
            <button onClick={handleGo}>GO</button>
        </motion.div>
        <motion.div className="box" whileHover={{background:"lightgray",color:"black"}}>
            <h2>Software Application Development</h2>
            <p>
            Contributed and experienced in multiple technologies, demonstrating strong  skills in software development, backend services, and robust application design
            </p>
            <button onClick={handleGo}>GO</button>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Services
