import '../styles/Footer.css'
import React from 'react'/* 
import GitHubIcon from '@mui/icons-material/GitHub'; */
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';



function Footer() {
  return (
    <div className='footer'>
        <div className="socialMedia">
        <TwitterIcon/>
        <FacebookIcon/>
        <InstagramIcon/>
        <LinkedInIcon/>
        {/* <GitHubIcon/> */}
        </div>
        <p>&copy; 2023 silentCosmo</p>
    </div>
  )
}

export default Footer