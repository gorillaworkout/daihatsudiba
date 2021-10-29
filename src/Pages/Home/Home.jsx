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
import xeniahome from '../../Assets/xenia-home.jpeg'
import sirionhome from '../../Assets/sirion-home.jpeg'
import terioshome from '../../Assets/terios-home.jpeg'

import dibaProfile from '../../Assets/diba.jpeg'
import interiorTerios from '../../Assets/interior-terios.jpeg'
import {FaBars} from 'react-icons/fa'
import {AiOutlineWhatsApp,AiOutlineMail,AiFillTwitterCircle,AiFillFacebook
,AiFillInstagram,AiFillPhone,AiFillCopyrightCircle} from 'react-icons/ai'
import "react-datepicker/dist/react-datepicker.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Iframe from 'react-iframe'

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
import {Carousel} from '3d-react-carousal';


export default function Home(){
    AOS.init();
    // let slides = [
    //     <img  src="https://picsum.photos/800/300/?random" alt="1" />,
    //     <img  src="https://picsum.photos/800/301/?random" alt="2" />  ,
    //     <img  src="https://picsum.photos/800/302/?random" alt="3" />  ,
    //     <img  src="https://picsum.photos/800/303/?random" alt="4" />  ,
    //     <img src="https://picsum.photos/800/304/?random" alt="5" />   ];
    let slides = [
        <div className="ba-1">
            <img src={advertise1} alt=""/>
        </div>,
        <div className="ba-1">
            <img src={advertise2} alt=""/>
        </div>,
        <div className="ba-1">
            <img src={advertise3} alt=""/>
        </div>,
        <div className="ba-1">
            <img src={advertise4} alt=""/>
        </div>
    ]

    const [startDate, setStartDate] = useState(new Date());
    

    const [page,setPage]= useState(1)
    const [nama, setNama] = useState('')
    const [jam,setJam] = useState(0)
    const [kemana,setKemana] = useState('')
    const [makan,setMakan] = useState('')
    const [isPacar,setIsPacar] = useState('')
    const [finalResult,setFinalResult] = useState('')
    const [idProduct,setIdProduct] = useState(1) 
    const [list_mobil,setList_mobil] = useState(
        {
            "list_mobil": [
              {
                "car_id": 1,
                "nama_mobil": "ROCKY",
                "harga": "178.900.000",
                "gambar":rocky
              },
              {
                "car_id": 2,
                "nama_mobil": "AYLA",
                "harga": "103.300.000",
                "gambar":rocky
              },
              {
                "car_id": 3,
                "nama_mobil": "SIGRA",
                "harga": "120.650.000",
                "gambar":rocky
              },
              {
                "car_id": 4,
                "nama_mobil": "GRAND NEW XENIA",
                "harga": "184.500.000",
                "gambar":rocky
              },
              {
                "car_id": 5,
                "nama_mobil": "ALL NEW TERIOS",
                "harga": "205.100.000",
                "gambar":rocky
              },
              {
                "car_id": 6,
                "nama_mobil": "ALL NEW SIRION",
                "harga": "201.750.000",
                "gambar":rocky
              },
              {
                "car_id": 7,
                "nama_mobil": "LUXIO",
                "harga": "194.300.000",
                "gambar":rocky
              },
              {
                "car_id": 8,
                "nama_mobil": "GRANMAX MB",
                "harga": "165.800.000",
                "gambar":rocky
              },
              {
                "car_id": 9,
                "nama_mobil": "SIGRA",
                "harga": "146.400.000",
                "gambar":rocky
              }
            ]
          }
    )

    
    
    // Next-previous control
    let slideIndex = 0;
    function nextSlide() {
      slideIndex++;
      showSlides();
      timer = _timer; // reset timer
    }
    
    function prevSlide() {
      slideIndex--;
      showSlides();
      timer = _timer;
    }
    
    // Thumbnail image controlls
    function currentSlide(n) {
      slideIndex = n - 1;
      showSlides();
      timer = _timer;
    }
    
    function showSlides() {
      let slides = document.querySelectorAll(".mySlides");
      let dots = document.querySelectorAll(".dots");
    
      if (slideIndex > slides.length - 1) slideIndex = 0;
      if (slideIndex < 0) slideIndex = slides.length - 1;
      
      // hide all slides
      slides.forEach((slide) => {
        slide.style.display = "none";
      });
      
      // show one slide base on index number
      slides[slideIndex].style.display = "flex";
      
      dots.forEach((dot) => {
        dot.classList.remove("active");
      });
      
      dots[slideIndex].classList.add("active");
    }
    
    // autoplay slides --------
    let timer = 10; // sec
    const _timer = timer;
    
    // this function runs every 1 second
    setInterval(() => {
      timer--;
    
      if (timer < 1) {
        nextSlide();
        timer = _timer; // reset timer
      }
    }, 3000); // 1sec
    
    useEffect(()=>{
        console.log(list_mobil)
        
        showSlides();

    })


    const renderIframe=()=>{
        return(
            <>
            <div className="box-maps">
                <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.517140335968!2d106.76098331468006!3d-6.!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f71915ddb0b1%3A0x1fc33d15048d5289!2sJl.%20Perjuangan%20No.22%2C%20RT.9%2FRW.7%2C%20Kb.%20Jeruk%2C%20Kec.%20Kb.%20Jeruk%2C%20Kota%20Jakarta%20Barat%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2011530!5e0!3m2!1sen!2sid!4v1634382849084!5m2!1sen!2sid"
                    width="550px"
                    height="350px"
                    id="myId"
                    className="myClassname"
                    display="initial"
                    position="relative"/>
            </div>

            </>
            // <iframe src= width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
            
        )
    }

    const onClickProductHome=(id)=>{

        setIdProduct(id)
    }

    const renderProductHome=()=>{
        if(idProduct === 1){
            return (
                <>
                    <div className="detail-box-img-car">
                            <img src={sirionhome} alt="" />
                        </div>
                        <div className="detail-box-price-car">
                            <div className="price-box">
                                <p>Harga Mulai Dari</p>
                                <p>Rp 199.800.000</p>
                            </div>
                            <div className="btn-check-product">
                                Lihat Spesifikasi
                            </div>
                            <div className="btn-buy-product">
                                Beli Sekarang
                            </div>
                    </div>
                </>
            )
        }else if (idProduct === 2){
            return (
                <>
                    <div className="detail-box-img-car">
                            <img src={terioshome} alt="" />
                        </div>
                        <div className="detail-box-price-car">
                            <div className="price-box">
                                <p>Harga Mulai Dari</p>
                                <p>Rp 199.800.000</p>
                            </div>
                            <div className="btn-check-product">
                                Lihat Spesifikasi
                            </div>
                            <div className="btn-buy-product">
                                Beli Sekarang
                            </div>
                    </div>
                </>
            )
        }
    }

    const settings = {
        // dots: true,
        infinite: true,
        // speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        speed:5000,
        autoplayspeed:5000,
        swipetoslide:true,
        autoWidth:true
    }

    const render_list_car = () =>{
        return list_mobil.list_mobil.map((val,index)=>{ 

            if(index === 0){
                return (
                    <div className="box-car active-list-product" onClick={()=>onClickProductHome(index)}>
                        <img src={val.gambar} alt="" className="img-option-car"/>
                        <p>{val.nama_mobil}</p>
                    </div>
                )
            }else {
                return (
                    <div className="box-car" onClick={()=>onClickProductHome(index)}>
                        <img src={val.gambar} alt="" className="img-option-car"/>
                        <p>{val.nama_mobil}</p>
                   </div>
                )
            
            }
        })
    }

    
    return (
        <>
        
            <div className="new-box-home">
                <div className="new-header-home">
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
                        <div className="bh-box-detail">
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                PRODUCT
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
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
                            </Dropdown.Menu>
                        </Dropdown>                        
                        </div>
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
                    <div className="bh-right-mobile">
                        <FaBars id="icon-menu-bar-home"/>
                    </div>
                </div>
                <div className="new-body-content ">
                    <div className="body-content-1">
                        <div className="carousel-container container">
                            <div className="mySlides animate">
                              <img src={rocky} alt="slide" />
                            </div>       
                            <div className="mySlides animate">
                              <img src={sigra} alt="slide" />
                            </div>
                            <div className="mySlides animate">
                              <img src={terios} alt="slide" />
                            </div>                          
                            
                            <a className="prev" onClick={prevSlide}>&#10094;</a>
                            <a className="next" onClick={nextSlide}>&#10095;</a>
                            
                            <div className="dots-container">
                              <span className="dots" onClick={()=>currentSlide(1)}></span>
                              <span className="dots" onClick={()=>currentSlide(2)}></span>
                              <span className="dots" onClick={()=>currentSlide(3)}></span>
                            </div>
                        </div>
                    </div>
                    <div className="body-content-2" 
                        data-aos="fade-up" 
                        data-aos-anchor-placement="center-bottom"  
                        data-aos-delay="2000"
                        >
                        <div className="list-product-car container"
                        >
                            {render_list_car()} 
                        </div>
                        <div className="detail-product-car container"
                        
                        >
                         {renderProductHome()}   

                        </div>
                    </div>
                    <div className="body-content-3">
                        <div className="bc-3-content-2 container">
                            <h1>
                                Ingin Info Lebih Cepat? Hubungi Kami Disini
                            </h1>
                        </div>
                        <div className="bc-3-content container">
                            <div className="bc-3-box">
                                <div className="box_for_socmed-4 hover-wa">
                                    <a href="" target="_blank" className="a-href-link-wa">
                                        <div className="img-logo">
                                            <AiOutlineWhatsApp className="icon-wa"/>
                                        </div>
                                        <p id="soc_youtube">Whatsapp</p>
                                    </a>
                                </div> 
                                <div className="box_for_socmed-4 hover-email">
                                    <a href="" target="_blank" className="a-href-link-wa">
                                        <div className="img-logo">
                                            <AiOutlineMail className="icon-wa"/>
                                        </div>
                                        <p id="soc_youtube">Email</p>
                                    </a>
                                </div> 
                                <div className="box_for_socmed-4 hover-twitter">
                                    <a href="" target="_blank" className="a-href-link-wa">
                                        <div className="img-logo">
                                            <AiFillTwitterCircle className="icon-wa"/>
                                        </div>
                                        <p id="soc_youtube">Twitter</p>
                                    </a>
                                </div> 
                            </div>
                            <div className="bc-profile-box">
                                <img src={dibaProfile} alt="" />
                            </div>
                            <div className="bc-3-box">
                                <div className="box_for_socmed-4 hover-ig">
                                    <a href="" target="_blank" className="a-href-link-wa">
                                        <div className="img-logo">
                                            <AiFillInstagram className="icon-wa"/>
                                        </div>
                                        <p id="soc_youtube">Instagram</p>
                                    </a>
                                </div> 
                                <div className="box_for_socmed-4 hover-fb">
                                    <a href="" target="_blank" className="a-href-link-wa">
                                        <div className="img-logo">
                                            <AiFillFacebook className="icon-wa"/>
                                        </div>
                                        <p id="soc_youtube">Facebook</p>
                                    </a>
                                </div> 
                                <div className="box_for_socmed-4 hover-email">
                                    <a href="" target="_blank" className="a-href-link-wa">
                                        <div className="img-logo">
                                            <AiFillPhone className="icon-wa"/>
                                        </div>
                                        <p id="soc_youtube">Hubungi</p>
                                    </a>
                                </div>   
                            </div>
                        </div>
                    </div>
                    <div className="body-content-4">
                        <div className="bc-4-content">
                            <div className="bc-4-content-2 ">
                                <h1 id="nama-diba">
                                    DIBA DIBA FARADIBA
                                </h1>
                                <h3 id="siap-bantu">
                                Saya siap membantu Anda menemukan jenis kendaraan yang cocok sesuai dengan budget dan keinginan

                                </h3>
                            </div>
                            <div className="bc-4-testimonial ">
                                <div className="box-testi-card">
                                    <div className="btc-img">
                                        <img src={dibaProfile} alt=""/>
                                    </div>
                                    <div className="btc-nama">
                                        BAYU DARMAMAWAN
                                    </div>
                                    <div className="btc-comment">
                                        <p>Karyawan Swasta Dari Jakarta Barat</p>
                                        <p>Harga Murah, Bisa nego, top banget deh ajg</p>
                                    </div>
                                </div>
                                <div className="box-testi-card">
                                    <div className="btc-img">
                                        <img src={dibaProfile} alt=""/>
                                    </div>
                                    <div className="btc-nama">
                                        BAYU DARMAMAWAN
                                    </div>
                                    <div className="btc-comment">
                                        <p>Karyawan Swasta Dari Jakarta Barat</p>
                                        <p>Harga Murah, Bisa nego, top banget deh ajg</p>
                                    </div>
                                </div>
                                <div className="box-testi-card">
                                    <div className="btc-img">
                                        <img src={dibaProfile} alt=""/>
                                    </div>
                                    <div className="btc-nama">
                                        BAYU DARMAMAWAN
                                    </div>
                                    <div className="btc-comment">
                                        <p>Karyawan Swasta Dari Jakarta Barat</p>
                                        <p>Harga Murah, Bisa nego, top banget deh ajg</p>
                                    </div>
                                </div>
                                <div className="box-testi-card">
                                    <div className="btc-img">
                                        <img src={dibaProfile} alt=""/>
                                    </div>
                                    <div className="btc-nama">
                                        BAYU DARMAMAWAN
                                    </div>
                                    <div className="btc-comment">
                                        <p>Karyawan Swasta Dari Jakarta Barat</p>
                                        <p>Harga Murah, Bisa nego, top banget deh ajg</p>
                                    </div>
                                </div>
                                <div className="box-testi-card">
                                    <div className="btc-img">
                                        <img src={dibaProfile} alt=""/>
                                    </div>
                                    <div className="btc-nama">
                                        BAYU DARMAMAWAN
                                    </div>
                                    <div className="btc-comment">
                                        <p>Karyawan Swasta Dari Jakarta Barat</p>
                                        <p>Harga Murah, Bisa nego, top banget deh ajg</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className="body-content-5">
                        <div className="bc-5-content container">
                            <div className="bc-5-alamat">
                                ALAMAT
                            </div>
                            <div className="bc-5-alamat-2">
                                <div className="bc-5-left">
                                    <p>ALAMAT KANTOR</p>
                                    <p>Jl. Perjuangan No.22, RT.9/RW.10, Kb. Jeruk, Kec. Kb. Jeruk, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11530</p>
                                    <div className="bc-5-contact">
                                        <div className="box_for_socmed-5 hover-email">
                                            <a href="" target="_blank" className="a-href-link-wa">
                                                <div className="img-logo">
                                                    <AiFillPhone className="icon-wa-2"/>
                                                </div>
                                                <p id="soc_youtube-2">Hubungi</p>
                                            </a>
                                        </div> 
                                        <div className="box_for_socmed-5 hover-wa">
                                            <a href="" target="_blank" className="a-href-link-wa">
                                                <div className="img-logo">
                                                    <AiOutlineWhatsApp className="icon-wa-2"/>
                                                </div>
                                                <p id="soc_youtube-2">Whatsapp</p>
                                            </a>
                                        </div> 

                                    </div>
                                </div>
                                <div className="bc-5-left">
                                    {renderIframe()}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="body-content-6">
                        COPYRIGHT 2021 <AiFillCopyrightCircle/>  DIBA
                    </div>
                </div>
            </div>
            {/* <div className="box-home">
                <div className="box-header">
                    <div className="bh-left" data-aos="zoom-in"  
                        data-aos-delay="100"
                        data-aos-duration="2000"
                        >
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
                        <div className="bh-box-detail">
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                PRODUCT
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                
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
                            </Dropdown.Menu>
                        </Dropdown>                        
                        </div>
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
                    <div className="box-advertise">
                        <Slider {...settings}>
                            <div className="ba-1">
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
            </div> */}

        </>
    )
}