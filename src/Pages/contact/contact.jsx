import React, { Component } from 'react';
import './contact.css'
import {GoLocation} from 'react-icons/go'
import {AiOutlineMail,AiFillPhone} from 'react-icons/ai'
import Header from '../Header/header'
export default function Contact(){

    return (
       <>
       <div className="biggest_box_container">
            <Header/>
            <div className="container_contact">
                <div className="topbox1">
                    <h1>Get in touch!</h1>			
                </div>
                <div className="topbox2">
                    <p>Contact us for quote, help or to join the team.</p>
                </div>
                <div className="topbox3">
                    <div className="kotak0">
                        <a href="#">
                            <div className="kotak1">
                                <GoLocation className="icon_contact"/>
                                <p>JAKARTA BARAT</p>
                            </div>
                        </a>				
                        <a href="#">
                            <div className="kotak2">
                                <AiFillPhone className="icon_contact" />
                                <p>+62858 8785 4544</p>
                            </div>
                        </a>
                        <a href="#">
                            <div className="kotak3">
                                <AiOutlineMail className="icon_contact"/>
                                <p>dibewe@gmail.com</p>
                            </div>
                        </a>
                        
                    </div>
                    
                </div>
                <div className="topbox4">
                    <div className="content">
                        <div className="contactform">	
                            <p>Contact Form</p>
                        </div>
                        <div className="form">
                            <div className="left">
                                <p className="p1">Your Name</p>
                                <input type="text" name="username"/>
                                <p className="p2">Mail</p>
                                <input type="text" name="email	"/>
                                <p className="p3">Phone</p>
                                <input type="text" name="phone"/>
                            </div>
                            <div className="right">
                                <p className="p4">Message</p>
                                <input type="text" name=""/>
                            </div>
                        </div>
                        <div className="serve1">
                            <button>Send Message</button>	
                        </div>
                    </div>
                    
                </div>
            </div>
       </div>
       </>
    )
}

