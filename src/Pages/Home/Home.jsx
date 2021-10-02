import React, { useState,Component, useEffect } from 'react';
import './Home.css'
import bggw from '../../Assets/newbggw.png'
import $ from "jquery";
import Swal from 'sweetalert2';
import DatePicker from "react-datepicker";
import moment from 'moment';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown'
import sigra from '../../Assets/daihatsu-sigra.jpg'
import terios from '../../Assets/daihatsu-terios.jpeg'
import rocky from '../../Assets/daihatsu-rocky.png'
import daihatsulogo from '../../Assets/daihatsu-logo.png'
import advertise1 from '../../Assets/advertise-1.jpeg'
import advertise2 from '../../Assets/advertise-2.jpeg'
import advertise3 from '../../Assets/advertise-3.jpeg'
import advertise4 from '../../Assets/advertise-4.jpeg'
import "react-datepicker/dist/react-datepicker.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..


export default function Home(){
    AOS.init();
    const [startDate, setStartDate] = useState(new Date());
    

    const [page,setPage]= useState(1)
    const [nama, setNama] = useState('')
    const [jam,setJam] = useState(0)
    const [kemana,setKemana] = useState('')
    const [makan,setMakan] = useState('')
    const [isPacar,setIsPacar] = useState('')
    const [finalResult,setFinalResult] = useState('') 

    const pacar=(value)=>{
        setIsPacar(value)
    }
    const start_game=(id)=>{
        
        if(page == 1){
            var nama = $('.nama_pilihan').val()
            setNama(nama)
            // alert(nama)
            if(nama.length <0  || nama === ''){
                Swal.fire({
                    icon: 'error',
                    title: 'Nama Kamu Siapa ?',
                    text: 'Silakan Coba Lagi'
                  })
            }else {
                var nama_cap = nama.toUpperCase()
                if(nama_cap == 'ACID' || nama_cap == 'ASTRID'){
                    setPage(id)
                    setNama(nama)
                    Swal.fire(
                        'YEAY!!',
                        `Hallo ${nama}!!`,
                        'success'
                      )
                }else {
                    // alert('maaf, aplikasi ini hanya untuk acid')
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...Ini Hanya Untuk Acid',
                        text: 'Silakan Coba Lagi'
                      })
                }

            }

        }else if (page === 2 ){
            // alert('masuk ke page 2')
            // alert(nama)
            if(jam === undefined || jam === 0 || kemana === undefined || kemana === ''  || makan === undefined || makan === '' ){
                Swal.fire({
                    icon: 'error',
                    title: 'isi dulu, biar bayu gak bingung',
                    text: 'Silakan Coba Lagi ya'
                  })
            }else {
                setPage(id)
                // alert(nama)
                // var res = `Hallo bayu, jadi ${nama}, bisa pergi jam ${jam} ke ${kemana},  mau makan ${makan} aja. `
                // var uri_res = encodeURIComponent(res);
                // setFinalResult(uri_res)
                // console.log(uri_res)
                // console.log(jam,kemana,makan,startDate)
            }
        }
        else {
            setPage(id)
        }




        // alert(nama)
    }

    const bubar=()=>{
        // alert('jalan')
        window.open('','_parent','');
        window.close();
        // window.close();
    }

    useEffect(()=>{
        if(page == 1){
            setPage(1)
        }else if ( page == 2 ){
            setPage(2)
        }else if ( page == 3 ){
            setPage(3)
            var res = `Hallo bayu, jadi ${nama}, bisa pergi jam ${jam} ke ${kemana},  mau makan ${makan} aja. `
                var uri_res = encodeURIComponent(res);
                setFinalResult(uri_res)
                console.log(uri_res)
                console.log(jam,kemana,makan,startDate)
        }
    })

    const settings = {
        // dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        speed:5000,
        autoplayspeed:5000,
        swipetoslide:true
    }
    return (
        <>
            <div className="box-home">
                <div className="box-header">
                    <div className="bh-left" data-aos="zoom-in"  
                        data-aos-delay="100"
                        data-aos-duration="2000">
                        <img src={daihatsulogo} alt=""/>
                    </div>
                    <div className="bh-right">
                        <div className="bh-box-detail" 
                        data-aos="zoom-in"
                        data-aos-delay="100"
                        data-aos-duration="2000"
                        >
                            HOME
                        </div>
                        <div className="bh-box-detail"
                        data-aos="zoom-in"
                        data-aos-delay="100"
                        data-aos-duration="2000"
                        >
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                PRODUCT
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                {/* <Dropdown.Item href="#/action-1"> */}
                                    <div className="dd-product">
                                        <div className="dd-product-item">
                                            <img src={rocky} alt=""/>
                                            <p>DAIHATSU ROCKY</p>
                                            <p>RP.100.000.000</p>
                                        </div>
                                        <div className="dd-product-item">
                                            <img src={rocky} alt=""/>
                                            <p>DAIHATSU ROCKY</p>
                                            <p>RP.100.000.000</p>
                                        </div>
                                        <div className="dd-product-item">
                                            <img src={rocky} alt=""/>
                                            <p>DAIHATSU ROCKY</p>
                                            <p>RP.100.000.000</p>
                                        </div>
                                        <div className="dd-product-item">
                                            <img src={rocky} alt=""/>
                                            <p>DAIHATSU ROCKY</p>
                                            <p>RP.100.000.000</p>
                                        </div>
                                        <div className="dd-product-item">
                                            <img src={rocky} alt=""/>
                                            <p>DAIHATSU ROCKY</p>
                                            <p>RP.100.000.000</p>
                                        </div>
                                        <div className="dd-product-item">
                                            <img src={rocky} alt=""/>
                                            <p>DAIHATSU ROCKY</p>
                                            <p>RP.100.000.000</p>
                                        </div>
                                        <div className="dd-product-item">
                                            <img src={rocky} alt=""/>
                                            <p>DAIHATSU ROCKY</p>
                                            <p>RP.100.000.000</p>
                                        </div>
                                        <div className="dd-product-item">
                                            <img src={rocky} alt=""/>
                                            <p>DAIHATSU ROCKY</p>
                                            <p>RP.100.000.000</p>
                                        </div>
                                    </div>
                                {/* </Dropdown.Item> */}
                                {/* <Dropdown.Item href="#/action-2">Another action</Dropdown.Item> */}
                                {/* <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
                            </Dropdown.Menu>
                        </Dropdown>                        </div>
                        <div className="bh-box-detail" 
                        data-aos="zoom-in"
                        data-aos-delay="100"
                        data-aos-duration="2000"
                        >
                            PRICE LIST
                        </div>
                        <div className="bh-box-detail" 
                        data-aos="zoom-in"
                        data-aos-delay="100"
                        data-aos-duration="2000">
                            EVENT
                        </div>
                    </div>
                </div>
                <div className="box-body">
                    <div className="box-advertise" data-aos="zoom-in"
                    data-aos-delay="100"
                    data-aos-duration="2000">
                        <Slider {...settings}>
                            <div className="ba-1" >
                                <img src={advertise1} alt=""/>
                            </div>
                            <div className="ba-1">
                                <img src={advertise2} alt=""/>
                            </div>
                            <div className="ba-1">
                                <img src={advertise3} alt=""/>
                            </div>
                            <div className="ba-1">
                                <img src={advertise4} alt=""/>
                            </div>
                        </Slider>
                    </div>
                    <div className="box-content">

                    </div>
                </div>
                
            </div>

        </>
    )
}