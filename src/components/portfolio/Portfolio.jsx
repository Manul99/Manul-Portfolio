import { useRef } from 'react';
import './portfolio.scss'
import {motion, useScroll,useSpring, useTransform } from "framer-motion";



const items = [
    {
        id:1,
        title:"Tea Disease Detection App using Machine Learning- TeaGuardian",
        img:'/TeaGuardian.png',
        desc:"Mobile app accurately detects tea diseases using Machine Learning and delivers expert treatments to ensure thriving crops. ",
        demoLink: "https://drive.google.com/file/d/1ar-OWqwvsAjovMuTfx8UtIXv3ahTVaXY/view"
    },
    {
        id:2,
        title:"Furniture Shop Management System",
        img:"/furniture1.png",
        desc:"Desktop application for furniture shops: create stunning 2D/3D rooms, manage staff details, and track inventory seamlessly. ",
        demoLink: "https://drive.google.com/file/d/1cR3pUYYdpNrif_FWHQnTYwTPwW28oH_k/view?usp=sharing"
    },
    {
        id:3,
        title:"Library Management System using MERN",
        img:"/library.png",
        desc:" A sophisticated web application designed to seamlessly manage and optimize library system.",
        demoLink: "https://github.com/Manul99/Library_management_system"
        
    },
    {
        id:4,
        title:"Crowdsourced Reporting System for Colombo Municipal Council - Using MERN",
        img:"/crowdmern.png",
        desc:"  Web platform streamlining garbage collection: district volunteers report trash for efficient pickup.",
        demoLink:" https://github.com/Manul99/Crowdsourced-reporting-system-using-MERN"
    },
    {
        id:5,
        title:"IOT based poultry farm management system",
        img:"/farm.png",
        desc:"  Web system to monitor the whole farm.",
        demoLink:"  https://drive.google.com/file/d/1mLTT6sYXrUYiEY3NwHmv1J9sc2ykdKiI/view?usp=sharing"
    },
    {
        id:6,
        title:"Crowdsourced Reporting System for Colombo Municipal Council - Using ASP.NET",
        img:"/crowdasp.png",
        desc:"  Web platform streamlining garbage collection: district volunteers report trash for efficient pickup.",
        demoLink:"https://github.com/Manul99/CMC-project-using-ASP.NET"
    },
    {
        id:7,
        title:"Modern User Experience: Revamping ABC Cinemas Website with Advanced Features and JSP/Servlet Technologies",
        img:"/film.png",
        desc:"  Web system to enabling online booking, secure payments, and Email reservation notifications. Enhanced UX and efficiency",
        demoLink:"https://github.com/Manul99/ABC-Cinema"
    },
    {
        id:8,
        title:"IOT Based smart helmet for construction workers",
        img:"/helmet.png",
        desc:"  Web system to monitor the safety of construction company workers.",
        demoLink:"https://github.com/Manul99/IOT_Based_Smart_Helmet_For_Construction_Workers"
    },
    {
        id:9,
        title:"LMS using Expo React Native",
        img:"/lms.png",
        desc:"Application that students can access to their Lecture Materials,lecture schedules and exam/assignment marks each module.",
        demoLink:"https://github.com/Manul99/LMS-using-Expo-React-Native"
    },
    {
        id:10,
        title:"Pharmacy Management system using C#",
        img:"/pharm.png",
        desc:"Desktop application that can manage the pharmacy system.",
        demoLink:"https://github.com/Manul99/Pharmacy-Management-System"
    },
];

const Single = ({item}) =>{
    const ref = useRef();

    const {scrollYProgress} = useScroll({
        target: ref, 
        //offset:["end end", "start start"],
  
    });

    const y = useTransform(scrollYProgress, [0,1], [-300,300]);

    const handleClick = () => {
        if (item.demoLink) {
            window.open(item.demoLink, '_blank');
        } else {
            document.getElementById(`section-${item.id}`).scrollIntoView({ behavior: 'smooth' });
        }
    };
    return <section>
        <div className="container">
            <div className="wrapper">
                <div className="imageContainer" ref={ref}>
                    <img src={item.img} alt=''/>
                </div>           
            <motion.div className="textContainer" style={{y}}>
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
                <button onClick={handleClick}>See Demo/GitHub</button>
            </motion.div>
            </div>
        </div>
    </section>
    
}
const Portfolio = () => {
    const ref = useRef();

    const {scrollYProgress} = useScroll({
        target: ref, 
        offset:["end end", "start start"],
    });

    const scaleX = useSpring(scrollYProgress,{
        stiffness: 100,
        damping: 30,
    })
  return (
    <div className='portfolio'>
        <div className="progress">
            <h1>My Projects</h1>
            <motion.div style={{scaleX}} className="progressBar"></motion.div>
        </div>
        {items.map(item =>(
            <Single item = {item} key={item.id}/>
        ))}
    </div>
  )
}

export default Portfolio
