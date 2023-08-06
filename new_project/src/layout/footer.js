import React from 'react';
import {makeStyles} from '@material-ui/core/styles';

import travellogo from '../assets/travellogo.png';

import footerimg1 from '../assets/footerimg1.jpg';
import footerimg2 from '../assets/footerimg2.jpg';
import footerimg3 from '../assets/footerimg3.jpg';
import footerimg4 from '../assets/footerimg4.jpg';
import footerimg5 from '../assets/footerimg5.jpg';
import footerimg6 from '../assets/footerimg6.jpg';
import worldimg3 from '../assets/worldimg3.jpg';

import PhoneAndroidTwoToneIcon from '@mui/icons-material/PhoneAndroidTwoTone';
import FmdGoodTwoToneIcon from '@mui/icons-material/FmdGoodTwoTone';
import WatchLaterTwoToneIcon from '@mui/icons-material/WatchLaterTwoTone';
import EmailTwoToneIcon from '@mui/icons-material/EmailTwoTone';
import {AiFillTwitterCircle} from 'react-icons/ai';
import {BiLogoFacebookCircle} from 'react-icons/bi';
import {AiFillGooglePlusCircle} from 'react-icons/ai';
import {TiSocialSkype} from 'react-icons/ti';
import {AiFillInstagram} from 'react-icons/ai';


const useStyles = makeStyles(() => ({
    container:{
        marginTop:"220px",
        height:'430px',
        position: 'relative',
    },
    footercontainer:{
        display:'flex',
        // backgroundColor:'yellow',
        height:'350px',
        padding:'40px',
        backgroundImage: `url(${worldimg3})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        opacity: '0.7',
        position:'relative',
        zIndex: 1,
       
    },
    
    leftfooter:{
        // backgroundColor:'pink',
        width:'506px',
        // color:'#880e4f',
        fontFamily:'serif',
    },
    travellogo:{
        height:'80px',
        width:'80px',
        marginLeft:'30px',
    },
    midfooter:{
        // backgroundColor:'green',
        width:'506px',
        fontFamily:'serif',
        paddingLeft:'100px',
    },
    contactIcon:{
        padding:'8px',
        display:'flex',
    },
    socialContainer:{
        marginTop:'60px',
        // width:'10px',
        // height:'10px',
    },
    socialIcon1:{
        marginRight:'10px',
        height:'40px',
        width:'40px',
        backgroundColor:'#80d8ff',
        color:'#0091ea',
        borderRadius:'50%',
    },
    socialIcon2:{
        marginRight:'10px',
        height:'40px',
        width:'40px',
        backgroundColor:'#80d8ff',
        color:'blue',
        borderRadius:'50%',
    },
    socialIcon3:{
        marginRight:'10px',
        height:'40px',
        width:'40px',
        backgroundColor:'#80d8ff',
        color:'#b71c1c',
        borderRadius:'50%',
    },
    socialIcon4:{
        marginRight:'10px',
        height:'40px',
        width:'40px',
        backgroundColor:'#80d8ff',
        color:'#2962ff',
        borderRadius:'50%',
    },
    socialIcon5:{
        marginRight:'10px',
        height:'40px',
        width:'40px',
        backgroundColor:'#80d8ff',
        color:'#bf360c',
        borderRadius:'50%',
    },
    rightfooter:{
        // backgroundColor:'blue',
        width:'506px',
        fontFamily:'serif',
    },
    imagecontainer1:{
        paddingTop:'25px',
        display:'flex',
        marginLeft:'40px',
        
    },
    imagecontainer2:{
        display:'flex',
        marginLeft:'40px',
        
    },
   footerimage:{
        height:'110px',
        width:'110px',
   },

}));

const Footer =()=>{
    const classes = useStyles();
    return(
        <div className={classes.container}>
            {/* <div className={classes.backgroundImageLayer}> */}
            <div className={classes.footercontainer}>
            {/* <div className={classes.backgroundImageLayer}/> */}
                <div className={classes.leftfooter}>
                    <h1><u>Company Info</u></h1>
                    <p>A good plus of traveling is that often you get new skills without difficulty and without even noticing it.</p>
                    <img src={travellogo} alt="logo" className={classes.travellogo}/>
                </div>
                <div className={classes.midfooter}>
                    <h1><u>Contacts</u></h1>
                    <div className={classes.contactIcon}><PhoneAndroidTwoToneIcon /> 123-456-78901</div>
                    <div className={classes.contactIcon}><FmdGoodTwoToneIcon />London, 51 Street, 43 </div>
                    <div className={classes.contactIcon}><WatchLaterTwoToneIcon />Mon - Sat 7.00 - 23.00</div>
                    <div className={classes.contactIcon}><EmailTwoToneIcon />rishu2807@gmail.com</div>
                    <div className={classes.socialContainer}>
                        <AiFillTwitterCircle className={classes.socialIcon1}/>
                        <BiLogoFacebookCircle className={classes.socialIcon2}/>
                        <AiFillGooglePlusCircle className={classes.socialIcon3}/>
                        <TiSocialSkype className={classes.socialIcon4}/>
                        <AiFillInstagram className={classes.socialIcon5}/>
                    </div>

                </div>
                <div className={classes.rightfooter}>
                    <h1><u>Recent Trips</u></h1>
                <div className={classes.imagecontainer1}>
                    <img src={footerimg1} alt="image1" className={classes.footerimage}/>
                    <img src={footerimg2} alt="image1" className={classes.footerimage}/>
                    <img src={footerimg3} alt="image1" className={classes.footerimage}/>
                </div>
                <div className={classes.imagecontainer2}>
                    <img src={footerimg4} alt="image1" className={classes.footerimage}/>
                    <img src={footerimg5} alt="image1" className={classes.footerimage}/>
                    <img src={footerimg6} alt="image1" className={classes.footerimage}/>
                </div>
                </div>
            </div>

        </div>
        // </div>
    );
};
export default Footer;