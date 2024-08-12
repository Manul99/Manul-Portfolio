import { useRef } from 'react';
import './about.scss';
import {motion, useScroll,useSpring, useTransform } from "framer-motion";

const items = [
    {
        id:1,
        title:"Hi! I'm Manul Perera,",
        content:"Passionate and focused software engineering graduate from Plymouth University who is interested in the latest technology. Eager to pick things up quickly, adjust and work on creative ideas. Passionate about using technology to solve difficult problems and discovering new directions in software development. Willing to work together and eager to meet similar industry professionals."
    },
]

const Single = ({item}) =>{
    const ref = useRef();

    const {scrollYProgress} = useScroll({
        target: ref, 
        //offset:["start start", "end start"]
    });

    const y = useTransform(scrollYProgress,[0,1],[-300, -30]);


    return(
    <section>
       <div className="container">
        <div className="wrapper">
        <div className="imageContainer" ref={ref}>
            <img src='/ME.png' alt=''/>
        </div>
       
        <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.content}</p>
        </motion.div>
        </div>
       </div>
    </section>
    );
};


const About = () => { 
    const ref = useRef();

    const {scrollYProgress} = useScroll({
        target: ref, 
        offset:["end end", "start start"],
    });

    const scaleX = useSpring(scrollYProgress,{
        stiffness:100,
        damping:30,
    });

  return (
    <div className='about'>
       <div className="about-content">
        <h1>About Me</h1>
        {<motion.div  style={scaleX} className="progressBar"></motion.div>}
       </div>

       {items.map((item) =>(
        <Single item={item} key={item.id}/>
       ))}

      
    </div>
  )
}

export default About
