import React, { Component,useState } from 'react';
import './contact.css'
import {GoLocation} from 'react-icons/go'
import {AiOutlineMail,AiFillPhone} from 'react-icons/ai'
import Header from '../Header/header'
export default function Contact(){

    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [phone,setPhone]=useState('')
    const [message,setMessage]=useState('')
    const [final_message, setFinal_Message]=useState('')
    


    const send_message_to_wa =()=>{
        // var res = `Hallo bayu, jadi ${nama}, bisa pergi jam ${jam} ke ${kemana},  mau makan ${makan} aja. `
        
        var res = `Hallo Bapak Diba, saya ${name}, email saya ${email}, nomor hp saya ${phone}, ${message}`
        var uri_res = encodeURIComponent(res);
        setFinal_Message(uri_res)
        // alert('jalam')
        console.log(name,email,phone,message)
    }
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
                            <a className="kotak2"  href="tel:+6285887854544" style={{textDecoration:'none'}} target="_blank">
                                <AiFillPhone className="icon_contact" />
                                <p>+62858 8785 4544</p>
                            </a>
                        </a>
                        <a href="#">
                            <a className="kotak3" href="mailto:dibafahri2@gmail.com" style={{textDecoration:'none'}} target="_blank">
                                <AiOutlineMail className="icon_contact"/>
                                <p>dibafahri2@gmail.com</p>
                            </a>
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
                                <input type="text" name="username" onChange={(e)=>setName(e.target.value)}/>
                                <p className="p2">Mail</p>
                                <input type="text" name="email" onChange={(e)=>setEmail(e.target.value)}/>
                                <p className="p3">Phone</p>
                                <input type="text" name="phone" onChange={(e)=>setPhone(e.target.value)}/>
                            </div>
                            <div className="right">
                                <p className="p4">Message</p>
                                <input type="text" name="" onChange={(e)=>setMessage(e.target.value)}/>
                            </div>
                        </div>
                        <a href={`https://wa.me/+6285887854544/?text=${final_message}`} style={{textDecoration:'none'}} className="serve1" onClick={send_message_to_wa}>
                            <button>Send Message</button>	
                        </a>
                    </div>
                    
                </div>
            </div>
       </div>
       </>
    )
}

