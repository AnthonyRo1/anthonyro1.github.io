import {motion} from 'framer-motion'
import {useState} from 'react';
import {Navigate, useNavigate} from 'react-router-dom';
import './flipcard.css'

const FlipCard = ({img, url, github}) => {
    const front = img;
    const [flipped, setFlipped] = useState(false);
    const navigate = useNavigate();
    return (
        <motion.div 
        className='card-scene'
        >
          <motion.div 
          className='project-card'
          onClick={() => setFlipped(!flipped)}
          animate={{
            rotateY: flipped ? 180: 0,
            transition: {
                type: "spring",
                stiffness: 200,
                damping: 40,
                duration: 0.5}
          }}
          >

                <img
                src={img}
                className='card-img-front'
                >
                </img>
                <motion.div className='card-btns'>
                </motion.div>
                <motion.div className='card-hover' 
                whileHover={{
                    backgroundColor: '#00000044'
                }}>
                </motion.div>
       
                <motion.div 
                className='card-img-back'>
                    <div className='inner-btn-box'>
                    <a className='info-btn-card left' href={url}>Visit</a>
                    <a className='info-btn-card right'href={github}>Github</a>
                    </div>
                </motion.div>
            
            </motion.div>  
        </motion.div>
    )
}

export default FlipCard;