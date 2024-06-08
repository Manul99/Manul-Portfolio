import { animate, stagger } from 'framer-motion'
import {motion} from "framer-motion";
import './hero.scss'

const textVariant ={
    initial:{
        x: -500,
        opacity:0,
    },
    animate:{
        x:0,
        opacity:1,
        transition:{
            duration:1,
            staggerChildren:0.1,
        },
    },
    scrollButton:{
        opacity:0,
        y:10,
        transition:{
            duration:2,
            repeat:Infinity
        }
    }
}
const sliderVariant ={
    initial:{
        x: 0,
        
    },
    animate:{
        x:"-220%",
        transition:{
            repeat:Infinity,
            repeatType:"mirror",
            duration:20,
        },
    },
  
}
const Hero = () => {
    const handleCvClick = () =>{
        window.location.href="https://drive.google.com/file/d/1A-cK8xRwNEcmAtqWjD372YBauek8LNxE/view?usp=sharing";
    }

    const handleContact = () =>{
        window.location.href ="#Contact";
    }
  return (
    <div className='hero'>
        <div className="wrapper">
        <motion.div className='textContainer' variants = {textVariant} initial="initial" animate="animate">
            <motion.h2 variants = {textVariant}>MANUL PERERA</motion.h2>
            <motion.h1 variants = {textVariant}>Software Engineer and Full Stack Developer</motion.h1>
            <motion.div className="buttons" variants = {textVariant}>
            <motion.button variants = {textVariant} onClick={handleCvClick}>Download my CV</motion.button>
            <motion.button variants = {textVariant} onClick={handleContact}>Contact Me</motion.button>
            </motion.div>
            <motion.img src='/scroll.png' alt='' variants = {textVariant} animate="scrollButton"/>
        </motion.div>
        </div>
        <motion.div className="slidingTextContainer" variants={sliderVariant} initial="initial" animate="animate">
             Developer AI Web Mobile 
        </motion.div>
       <div className='imageContainer'>
            <img src="/Me2.png" alt='' className='me'/>
       </div>
    </div>
  )
}

export default Hero
