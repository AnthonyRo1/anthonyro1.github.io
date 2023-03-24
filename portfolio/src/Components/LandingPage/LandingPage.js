import './landingpage.css'
import {
    motion,
    useAnimationControls,
    AnimatePresence,
    useAnimation,
    useScroll,
    useTransform,
    useMotionValue,
    useTime,
    useDragControls,
    useInView
} from 'framer-motion';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { useRef, useEffect, useState } from 'react';
import FlipCard from '../flipCard/flipCard';
// IMAGE IMPORTS 
import seqLogo from '../../images/seq_logo.png'
import cssLogo from '../../images/css_logo.webp'
import flaskCharLogo from '../../images/flask_char.png'
import flaskWhiteLogo from '../../images/flask_logo.png'
import flaskTransLogo from '../../images/flask_trans.png'
import htmlLogo from '../../images/html_logo.png'
import gitLogo from '../../images/git_logo.png'
import jsLogo from '../../images/js_logo.png'
import nodeLogo from '../../images/node_logo.png'
import psqlLogo from '../../images/psql_logo.png'
import pythonLogo from '../../images/python_logo.png'
import reactLogo from '../../images/react_logo.png'
import reduxLogo from '../../images/redux_logo.png'
import everyNoteImg from '../../images/header_image.png'
import quickCampImg from '../../images/quickcamp_img.png'

// #181818 COLOR OF CHOICE FOR PALLETE GENERATOR



const LandingPage = () => {

    const controls = useAnimation();
    const aboutMeVariants = {
        hide: {
            opacity: 0
        },
        show: {
            opacity: 1,
            transition: {
                delayChildren: 1,
                staggerChildren: 0.5,
                duration: 1,
                delay: 1.5,
            }
        },


    }

    const aboutMeChildren = {
        hide: {
            opacity: 0,
        },
        show: {
            opacity: 1,
            transition: {
                duration: 0.4
            }
        }
    }


    const imgParentVarient = {
        hidden: {
            opacity: 0,
        },
        shown: {
            opacity: 1,
            transition: {
                staggerChildren: 0.35
            }
        }
    }


    const bgImgVariant = {
        hidden: {
            opacity: 0,
            rotateY: 40,
        },
        shown: {
            opacity: 0.5,
            rotateY: 0,
            transition: {
                duration: 1
            },
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 90
            }
        }
    }
    const ref = useRef();


    useEffect(() => {

    }, [ref])









    const [isOn, setIsOn] = useState(false);
    const toggleSwitch = () => {
        setIsOn(!isOn);
    }


    const onPanStart = (event, info) => {
        if (isOn && info.offset.x < 0) {
            setIsOn(!isOn);
        }

        if (!isOn && info.offset.x > 0) {
            setIsOn(!isOn);
        }
    }

    return (
        <Parallax
            pages={2}
            ref={ref}
            className='parallax-bg'
        >

            <ParallaxLayer
                offset={0.75}
                factor={1}
                speed={1}
            >

                <motion.div
                    className='float-bg'
                    variants={imgParentVarient}
                    initial="hidden"
                    animate="shown"

                >
                    <motion.div
                        className='tech-icon'
                        variants={bgImgVariant}

                        style={{
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            position: 'relative',
                            top: '10%',
                            scale: 1.02,
                        }}
                    >
                        <img src={seqLogo}
                            style={{
                                width: '100%',
                                objectFit: 'cover',

                            }}
                        ></img>
                    </motion.div>
                    <motion.div
                        className='tech-icon'
                        variants={bgImgVariant}
                        style={{
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            position: 'relative',
                            top: '20%',
                            scale: .85
                        }}
                    >
                        <img src={cssLogo}
                            style={{
                                width: '100%',
                                objectFit: 'cover',

                            }}
                        ></img>
                    </motion.div>
                    <motion.div
                        className='tech-icon'
                        variants={bgImgVariant}
                        style={{
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            position: 'relative',
                            top: '2%',
                            scale: .93
                        }}
                    >
                        <img src={flaskWhiteLogo}
                            style={{
                                width: '100%',
                                objectFit: 'cover',

                            }}
                        ></img>

                    </motion.div>
                    <motion.div
                        className='tech-icon'
                        variants={bgImgVariant}
                        style={{
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            position: 'relative',
                            top: '19%',
                            scale: 1.3
                        }}
                    >
                        <img src={jsLogo}
                            style={{
                                width: '100%',
                                objectFit: 'cover',

                            }}
                        ></img>
                    </motion.div>
                    <motion.div
                        className='tech-icon'
                        variants={bgImgVariant}
                        style={{
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            position: 'relative',
                            top: '5%',
                            scale: .65
                        }}
                    >
                        <img src={reactLogo}
                            style={{
                                width: '100%',
                                objectFit: 'cover',

                            }}
                        ></img>
                    </motion.div>
                    <motion.div
                        className='tech-icon'
                        variants={bgImgVariant}
                        style={{
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            position: 'relative',
                            top: '30%',
                            scale: 1.04
                        }}
                    >
                        <img src={reduxLogo}
                            style={{
                                width: '100%',
                                objectFit: 'cover',

                            }}
                        ></img>
                    </motion.div>
                    <motion.div
                        className='tech-icon'
                        variants={bgImgVariant}
                        style={{
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            position: 'relative',
                            top: '12%',
                            scale: .91
                        }}
                    >
                        <img src={pythonLogo}
                            style={{
                                width: '100%',
                                objectFit: 'cover',

                            }}
                        ></img>
                    </motion.div>
                    <motion.div
                        className='tech-icon'
                        variants={bgImgVariant}
                        style={{
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            position: 'relative',
                            top: '5%',
                            scale: 1.21
                        }}
                    >
                        <img src={psqlLogo}
                            style={{
                                width: '100%',
                                objectFit: 'cover',

                            }}
                        ></img>
                    </motion.div>
                    <motion.div
                        className='tech-icon'
                        variants={bgImgVariant}
                        style={{
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            position: 'relative',
                            top: '24%',
                            scale: .74
                        }}
                    >
                        <img src={nodeLogo}
                            style={{
                                width: '100%',
                                objectFit: 'cover',

                            }}
                        ></img>
                    </motion.div>
                    <motion.div
                        className='tech-icon'
                        variants={bgImgVariant}
                        style={{
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            position: 'relative',
                            top: '31%',
                            scale: .95
                        }}
                    >
                        <img src={htmlLogo}
                            style={{
                                width: '100%',
                                objectFit: 'cover',

                            }}
                        ></img>
                    </motion.div>
                    <motion.div
                        className='tech-icon'
                        variants={bgImgVariant}
                        style={{
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            position: 'relative',
                            top: '16%',
                        }}
                    >
                        <img src={gitLogo}
                            style={{
                                width: '100%',
                                objectFit: 'cover',

                            }}
                        ></img>
                    </motion.div>
                </motion.div>
            </ParallaxLayer>

            <ParallaxLayer
                offset={0}
                factor={0.2}
                sticky={{ start: 0, end: 1 }}
                style={{ height: '7vh', width: '7vh' }}
            >
                <motion.div
                    className='name-logo'
                    initial={{
                        scale: 0,
                        opacity: 0,
                    }}
                    animate={{
                        scale: 1,
                        opacity: 1,
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 600,
                        damping: 20
                    }}


                >
                    <motion.p
                        id='name-logo-txt'
                    >&lt;AR&gt;</motion.p>
                </motion.div>
            </ParallaxLayer>

            <ParallaxLayer
                offset={0}
                speed={0.2}
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}
            >




                <div className='lp-top-half'>
                    <div className='mid-page-container'>

                        <div className='full-stack-logo'>
                            <motion.div className='stack-box' animate={{
                                scale: [0, 1],
                                rotate: 180,
                                y: [-100, 50],
                                opacity: [1, 0.15],
                                transition: { duration: 1.25 },
                                zIndex: 0

                            }}>
                            </motion.div>

                            <motion.div className='stack-box'
                                animate={{
                                    y: 10,
                                    zIndex: 1,
                                    opacity: [1, 0.25],
                                    scale: [0, 1],
                                    transition: { duration: 1.5, delay: 0.01 }
                                }}>
                            </motion.div>

                            <motion.div className='stack-box'
                                animate={{
                                    zIndex: 2,
                                    scale: [0, 1],
                                    y: [100, -30],
                                    opacity: [1, 0.55],
                                    rotate: 180,
                                    transition: { duration: 2, type: 'tween' }
                                }}
                            >
                            </motion.div>
                        </div>

                        <div className='intro-name-container'>


                            <motion.div className='intro-box top'>
                                <p id='intro-top-txt'>Hi, my name is</p>
                            </motion.div>

                            <motion.div className='intro-box mid'>
                                <motion.p id='name-txt'
                                >Anthony Rodriguez</motion.p>
                            </motion.div>


                            <motion.div className='intro-box bottom'  >
                                <motion.p className='intro-bottom-txt full'
                                >Full</motion.p>
                                <motion.p className='intro-bottom-txt stack'
                                >Stack</motion.p>
                                <motion.p className='intro-bottom-txt dev'
                                >Developer</motion.p>
                            </motion.div>
                        </div>
                    </div>
                    <motion.div
                        className='outro-bottom'
                        variants={aboutMeVariants}
                        initial="hide"
                        animate="show">
                        <motion.div
                            className='ob-content'
                            variants={aboutMeChildren}
                        >
                            <motion.p id='ob-content-txt'>
                                I'm a full stack software developer in Phoenix, Arizona seeking opportunities in remote, and local positions. My goal as a software developer is to deliver an ambitious and collaborative approach to the technical aspects of productivity.
                            </motion.p>
                        </motion.div>
                    </motion.div>
                    <motion.div className='lp-nav'
                        initial={{
                            x: 100
                        }}
                        animate={{
                            x: 0,
                            transition: { duration: 1 }
                        }}
                        style={{
                            position: 'fixed'
                        }}
                    >
                        <a href='https://github.com/AnthonyRo1'><i className="fab fa-github-square git"></i></a>
                        <a href='https://www.linkedin.com/in/anthony-rodriguez-973784245/'><i className="fab fa-linkedin linked-in"></i></a>
                    </motion.div>
                </div>
            </ParallaxLayer>



            <ParallaxLayer
                offset={0.7}
                factor={0.2}
                speed={0}
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>

                <motion.button className='cta-projects-btn'>
                    Works
                </motion.button>
                <motion.div
                    animate={{
                        y: [0, 15, 0],
                        transition: { repeat: Infinity, duration: 1.25 }
                    }}>
                    <motion.i
                        className="fa-solid fa-angles-down" id="scroll-down-txt"
                        whileHover={{
                            color: ['#65FBD2', '#22A7B7', '#39576D'],
                            transition: { repeat: Infinity, duration: 1.25 },
                        }}
                        onClick={() => ref?.current.scrollTo(2)}></motion.i>
                </motion.div>
            </ParallaxLayer>


            <ParallaxLayer
                offset={1}
                factor={1}
                speed={0.2}
                style={{
                    display: 'flex',
                    alignItems: 'center'
                }}
            >
                <div className='about-container'>
                    <div className='about-header'>
                        <motion.p
                            id='about-me-txt'
                            whileInView={{
                                color: ['#39576D', '#fff'],
                                transition: {
                                    duration: 2
                                }
                            }}
                        >Recent Projects</motion.p>
                    </div>
                    <div style={{
                        height: '80%',
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                    }}>
                        <AnimatePresence exitBeforeEnter>
                            <motion.div
                                className='about-content'>
                                <motion.div
                                    className='about-txt-box'>
                                    <div
                                        className='card-row'
                                        style={{
                                            height: '100%',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'center',
                                        }}>
                                        <p className='card-label'>EveryNote</p>
                                        <FlipCard img={everyNoteImg} url={'https://every-note-app.herokuapp.com'} github={'https://github.com/AnthonyRo1/Everynote'} />
                                        <motion.div className='card-icons-box'>
                                            <motion.div className='card-icons'>
                                                <img className='card-icon-img' src={reactLogo}></img>
                                            </motion.div>
                                            <motion.div className='card-icons'>
                                                <img className='card-icon-img' src={reduxLogo}></img>
                                            </motion.div>
                                            <motion.div className='card-icons'>
                                                <img className='card-icon-img' src={flaskWhiteLogo}></img>
                                            </motion.div>
                                            <motion.div className='card-icons'>
                                                <img className='card-icon-img' src={cssLogo}></img>
                                            </motion.div>
                                        </motion.div>
                                    </div>
                                    <div
                                        className='card-row'
                                        style={{
                                            height: '100%',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        <p className='card-label'>Quick Camp</p>
                                        <FlipCard img={quickCampImg} url={'https://quick-camp.herokuapp.com/'} github={'https://github.com/AnthonyRo1/Quick_Camp'} />
                                        <motion.div className='card-icons-box'>
                                            <motion.div className='card-icons'>
                                                <img className='card-icon-img' src={reactLogo}></img>
                                            </motion.div>
                                            <motion.div className='card-icons'>
                                                <img className='card-icon-img' src={reduxLogo}></img>
                                            </motion.div>
                                            <motion.div className='card-icons'>
                                                <img className='card-icon-img' src={nodeLogo}></img>
                                            </motion.div>
                                            <motion.div className='card-icons'>
                                                <img className='card-icon-img' src={seqLogo}></img>
                                            </motion.div>
                                            <motion.div className='card-icons'>
                                                <img className='card-icon-img' src={cssLogo}></img>
                                            </motion.div>
                                        </motion.div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </ParallaxLayer>

        </Parallax>
    )
}


export default LandingPage;