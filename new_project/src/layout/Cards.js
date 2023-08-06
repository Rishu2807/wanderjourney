import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
// import { Button } from '@material-ui/core';
// import {FaArrowRight} from 'react-icons/fa';

import { IconButton } from '@material-ui/core';
// import { ArrowForward } from '@material-ui/icons';
// import {ArrowRightAltIcon} from '@mui/icons-material/ArrowRightAlt';
import {ArrowRightAlt} from '@mui/icons-material';

const useStyles = makeStyles(() => ({ 
  containersplit:{
    display:'inline-block',
    // marginRight:'10px',
    marginLeft:'60px',
    marginTop:'40px',
  },
  container:{
    backgroundColor:'#dcedc8',
   
  },
  cardcontainer:{
    padding:'10px',
    // position:'relative',
    marginTop:'140px',
    
    boxShadow: '0 22px 22px rgba(45, 159, 230, 0.3), 0 15px 12px rgba(0, 0, 255, 0.25)',
    //rgba(56, 213, 214, 0.13)
    '&:hover':{
      boxShadow: '0 12px 25px rgba(230, 46, 79, 0.47) , 0 10px 10px rgba(0,0,0,0.20)',
      //rgba(185, 40, 213, 0.64) rgba(230, 46, 79, 0.47)
    },
  },
    cardHover: {
      position: 'relative',
    },
    imagecard: {
      height: '395px',
      width: '650px',
    },
    imageCardHover: {
      '&:hover': {
        '& $buttonstyle': {
          transform: 'translateY(-17px)',
          boxShadow: '0px 10px 18px rgba(37, 222, 216, 0.74)',
        },
      },
    },
    numbering :{
      fontSize:'4rem',
      color:'#b2ebf2',
      fontFamily:'cursive',
      position: 'absolute',
      fontWeight:'800',
    top: '-10px',
    right: '10px',
    
    },

    buttoncontainer:{
      position: 'absolute',
      bottom: '40px',
      left: '55px',
      backgroundColor:'white',
      width:'130px',
      height:'49px', 
      
      // overflow: 'hidden', // Hide any overflow from the circular shape
      transition: 'background-color 0.3s ease transform 0.3s ease', // Add transition for backgroundColor
    },
    buttonstyle:{
    //   fontFamily:'serif',
    //   fontWeight:'800',
    //   color:'blue',
    //   margin:'8px 25px',
    //   fontSize:'1.3rem',
    // },
    // 
    position: 'relative',
    // overflow: 'hidden',
    color: '#78909c',
    width:'130px',
    height:'59px',
    backgroundColor: '#c8e6c9',
    display: 'inline-block',
    padding: '12px 20px 12px 0px',
    transition: 'transform 0.3s ease, color 0.3s ease, backgroundColor 0.3s ease',
    // '&::after': {
    //   content: '""',
    //   position: 'absolute',
    //   top: '-20%',
    //   left: '-20%',
    //   width: '140%',
    //   height: '140%',
    //   background: '#fff',
      borderRadius: '2px',
    //   transform: 'scale(0)',
    //   opacity: 0,
    //   transition: 'transform 1s ease, opacity 1s ease',
    // },
    '&:hover': {
      // transform: 'scale(1.1)',
      color:'#545d8e',
      backgroundColor:'#d1c4e9',
      transform: 'translateY(-15px)',
      boxShadow: '0px 20px 25px rgba(37, 222, 216, 0.74)',
      
    },
    // '&:hover::after': {
    //   transform: 'scale(2)',
    //   opacity: 1,
    // },

    // position: 'relative',
    // overflow: 'hidden',
    // borderRadius: '50px',
    // boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
  },

  rippleStyles: {
    position: 'absolute',
    // transform: 'translate(-50%, -50%)',
    pointerEvents: 'none',
    width: '65px',
    height: '25px',
    fontFamily:'serif',
    fontWeight:'900',
   
    // margin:'35px 5px',
    // background: 'rgba(255, 255, 255, 0.15)',
    animation: '$ripple 1.5s', // Use the ripple animation from the Dribbble example
  },

  '@keyframes ripple': {
    '0%': {
      transform: 'scale(0)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2)',
      opacity: 0,
    },
  },
  arrow:{
    marginLeft:'105px',
    marginTop:'5px',
    color:'#78909c',
    fontSize: '2rem',
    transform: 'scale(2)',
    
  },
  
    cardContent: {
      position: 'absolute',
      top: '80%',
      left: '76%',
      transform: 'translate(-50%, -50%)',
      textAlign: 'center',
      opacity: 1, // Start with 0 opacity (hidden)
      transition: 'opacity 0.3s ease, color 0.3s ease',
      fontFamily: 'emoji',
      fontWeight: '800',
      color: '#ccff90',
      '&:hover': {
        // transform: 'scale(.05)',
        // color: 'white',
        transform: 'translateY(-15px)',
      boxShadow: '0px 20px 25px rgba(37, 222, 216, 0.74)',
        
      },
    },
    cardContentVisible: {
      opacity: 1, // When visible, set opacity to 1 (fully visible)
    },
  
    // Add new styles for the hover overlay
    cardHoverOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'rgba(0, 0, 0, 0.4)',
      opacity: 0,
      fontSize: '1rem',
      zIndex: 1,
      transition: 'opacity 0.3s ease, font-size 0.3s ease',
     
    },
    cardHoverOverlayVisible: {
      opacity: 1,
      fontSize: '1.5rem',
      
    },
  }));
  
  const Card = ({ title, description, image }) => {
    const classes = useStyles();
    const [isHovered, setIsHovered] = useState(false);
  
    const handleMouseEnter = () => {
      setIsHovered(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);
    };
  
    return (
      <div className={classes.containersplit}>
        <div
          className={`${classes.container} ${classes.cardHover} ${classes.imageCardHover}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className={classes.cardcontainer}>
            <div className={classes.card}>
              {isHovered && (
                <div
                  className={`${classes.cardHoverOverlay} ${
                    isHovered ? classes.cardHoverOverlayVisible : ''
                  }`}
                >
                  <div className={classes.numbering}>01</div>
                  <div className={classes.buttoncontainer}>
                    {isHovered && (
                      <>
                        <IconButton className={classes.buttonstyle}>
                          <ArrowRightAlt className={classes.arrow} />
                          <span className={classes.rippleStyles}>Click</span>
                        </IconButton>
                      </>
                    )}
                  </div>
                </div>
              )}
              <img src={image} alt={title} className={classes.imagecard} />
              <div
                className={`${classes.cardContent} card-content ${
                  isHovered ? '' : classes.cardContentVisible 
                }`}
              >
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
     
    );
  };
  
  export default Card;
  