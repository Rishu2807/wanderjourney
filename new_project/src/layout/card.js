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
    marginTop:'45px',
  },
  container:{
    backgroundColor:'antiquewhite',
  },
  cardcontainer:{
    padding:'10px',
    // position:'relative',
  },
  cardHover: {
    position: 'relative',
    '&::after': {
      content: '""',
      position: 'absolute',
      top: '3%',
      left: '1.5%',
      width: 0,  // Start with 0 width
      height: '93%',
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
      opacity: 0,
      fontSize:'1rem',
      transition: 'width 0.3s ease, opacity 0.3s ease, font-size 0.3s ease',
      zIndex:1,
    },
    '&:hover::after': {
      width: '97%',
      opacity: 1,
      fontSize:'1.5rem',
    },
  },
  // imageOverlay: {
  //   position: 'absolute',
  //   top: 0,
  //   content: '""',
  //   left: 0,
  //   // width: '36%',
  //   // height: '97%',
  //   width: '0%', // Start with 0 width
  //   height: '100%',
  //   backgroundColor: 'rgba(128, 128, 128, 0.3)',
  //   opacity: 0,
  //   // transition: 'opacity 0.3s ease',
  //   transition: 'width 0.3s ease',
  //   zIndex: 1,
  // },

  // imageOverlayLeft: {
  //   transform: 'scaleX(0)', // Start with 0 width
  //   transformOrigin: 'left', // Set the transform origin to the left side
  // },
  // imageOverlayRight: {
  //   transform: 'scaleX(0)', // Start with 0 width
  //   transformOrigin: 'right', // Set the transform origin to the right side
  // },
  card:{
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center',
      height:'285px',
      
    //   transition: 'transform 0.3s ease',
    // '&:hover': {
    //   transform: 'scale(1.05)',
    // },
  },
  imagecard:{
      height:'280px',
      width:'650px',
      // position:'relative',
      // zIndex:1,
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
      backgroundColor:'pink',
      width:'130px',
      height:'49px', 
      
      // overflow: 'hidden', // Hide any overflow from the circular shape
      transition: 'background-color 0.3s ease', // Add transition for backgroundColor
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
      transform: 'scale(1.1)',
      color:'#545d8e',
      backgroundColor:'#cddc39',
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
    marginLeft:'95px',
    marginTop:'5px',
    color:'#78909c',
    fontSize: '2rem',
    transform: 'scale(2)',
    
  },

    cardContent: {
      position: 'absolute',
      top: '80%', // Vertically center the content
      left: '76%', // Horizontally center the content
      transform: 'translate(-50%, -50%) ', // Center the content precisely
      textAlign: 'center',
      opacity: 1, // Start with 0 opacity (hidden)
      transition: 'opacity 0.3s ease, color 0.3s ease,',
      // right:'10%',
      // fontSize: '1rem',
    fontFamily: 'emoji',
    fontWeight: '600',
    color: 'yellow',

    // transition: 'transform 0.3s ease', // Add transition for smooth animation
    '&:hover': {
      transform: 'scale(1.05)',
      color:'white',
     
    },
    },
    cardContentVisible: {
      opacity: 1, // When visible, set opacity to 1 (fully visible)
    },
    // animateTitle: {
    //   fontSize: '1.5rem', // Increase the font size on hover
    //   transform: 'translateY(-10px)', // Move the title 10 pixels up on hover
    //   transition: 'font-size 0.3s ease, transform 0.3s ease, opacity 0.3s ease', // Add transition for smooth animation
    // },
  
    // animateDescription: {
    //   fontSize: '1rem', // Increase the font size on hover
    //   transform: 'translateY(-5px)', // Move the description 5 pixels up on hover
    //   transition: 'font-size 0.3s ease, transform 0.3s ease', // Add transition for smooth animation
    // },
  }));


const Card = ({ title, description, image}) => {
  const classes = useStyles();

  // const handleMouseEnter = () => {
  //   // When the card is hovered, add a class to make the content visible
  //   const cardContent = document.querySelector('.card-content');
  //   cardContent.classList.add(classes.cardContentVisible);
  // };

  // const handleMouseLeave = () => {
  //   // When the mouse leaves the card, remove the class to hide the content
  //   const cardContent = document.querySelector('.card-content');
  //   cardContent.classList.remove(classes.cardContentVisible);
  // };

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  
  return (
    <div className={classes.containersplit}>
    <div className={`${classes.container} ${classes.cardHover}`}
    onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      >
      <div className={classes.cardcontainer}>
      <div className={classes.card}>
      {/* <div style={{ position: 'relative' }}> */}
      {isHovered &&
        <div>
          <div className={classes.numbering}>01</div>
        <div className={classes.buttoncontainer}>
          {/* <Button className={classes.buttonstyle}
          endIcon={<FaArrowRight/>}>Click
          {/* <span className={classes.rippleStyles}></span> */}
          {/* </Button> */} 

          {isHovered && (
            <>
            <IconButton
        className={classes.buttonstyle}
        // disableRipple
        // disableFocusRipple
        // disableTouchRipple
      >
        <ArrowRightAlt className={classes.arrow}/>
        <span className={classes.rippleStyles}>Click</span>
      </IconButton>
            </>
          )}

        </div>
        </div>
      }
      <img src={image} alt={title} className={classes.imagecard}/>
      
      {/* </div> */}
      <div className={`${classes.cardContent} card-content ${ 
            isHovered ? '' :classes.cardContentVisible 
          }`}>
            {/* <div className={`${classes.imageOverlay} ${
              isHovered ? classes.cardContentVisible : ''
            }
            
            `}
            style={{ opacity: isHovered ? '100%' : '0%' }}
            ></div>
        <div className={`${classes.cardContent} card-content ${
              isHovered ? classes.cardContentVisible : ''
            }`}> */}
        <h3 
        // className={isHovered ? classes.animateTitle : ''}
        >{title}</h3>
        <p 
        // className={isHovered ? classes.animateDescription : ''}
        >{description}</p>
      </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default Card;