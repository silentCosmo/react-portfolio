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
        <a href="https://twitter.com/silentcosmo_"><TwitterIcon style= {{ fontSize: '40' }}/></a>
        <a href="https://www.facebook.com/ngkudallur"><FacebookIcon style= {{ fontSize: '40' }}/></a>
        <a href="https://www.instagram.com/silentcosmo_"><InstagramIcon style= {{ fontSize: '40' }}/></a>
        <a href="https://www.linkedin.com/in/silentcosmo"><LinkedInIcon style= {{ fontSize: '40' }}/></a>
        {/* <GitHubIcon/> */}
        </div>
        <p>&copy; 2024 silentCosmo</p>
    </div>
  )
}

export default Footer