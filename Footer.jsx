import React from 'react';
import './Footer.css';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import MessageIcon from '@mui/icons-material/Message';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocationOnIcon from '@mui/icons-material/LocationOn';
export default function Footer()
{
    return(
        <div className='footer'>
                <div className="container1">
                    <button>Employee Login</button>
                    <b>Contact Us</b>
                   <div className="icon">
                        <WhatsAppIcon/>
                         <FacebookIcon/>
                         <MessageIcon/>
                       <AddIcCallIcon/>
                        <InstagramIcon/>
                  </div>
                    <b>Address:-</b>
                    <div><LocationOnIcon/></div>
                    <p>Kutumbh Care distribution Network Pvt Ltd,</p>
                        <p>B 154 Block Sector 63,Noida,</p>
                        <p>Uttar Pradesh 201301</p>
                    
                </div>
                <div className="container2" >
                    <input placeholder="Enter Full Name"></input>
                    <input placeholder="Enter Mobile Number"></input> 
                    <input placeholder = "Enter Email ID"></input>
                    <textarea placeholder='Type message'></textarea>
                    <button>Submit</button>
                </div>
                <div className='container3'>
                    <div className='container3.1'>
                    <h2>Home</h2>
                      <p>reBLISSians</p>
                      <p>Categories</p>
                    </div>
                    <div className='container3.2'>
                            <h2>About Us</h2>
                        <p>Terms & Condition</p> 
                        <p>privancy Policy</p>
                    </div>
                </div>
        </div>
    );
}

