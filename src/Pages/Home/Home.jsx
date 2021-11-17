import React, { useState, useEffect,useRef } from 'react';
import './Home.css'
import '../webversion.css'
// import bggw from '../../Assets/newbggw.png'
import $ from "jquery";
import 'bootstrap/dist/css/bootstrap.min.css';
// import Dropdown from 'react-bootstrap/Dropdown'
import sigra from '../../Assets/daihatsu-sigra.jpg'
import terios from '../../Assets/daihatsu-terios.jpeg'
import rocky from '../../Assets/daihatsu-rocky.png'
import diba_profile from '../../Assets/diba_profile.jpg'
import Speedometer from '../../Assets/Spedometer.mp4'

// import daihatsulogo from '../../Assets/daihatsu-logo.png'
// import advertise1 from '../../Assets/advertise-1.jpeg'
// import advertise2 from '../../Assets/advertise-2.jpeg'
// import advertise3 from '../../Assets/advertise-3.jpeg'
// import advertise4 from '../../Assets/advertise-4.jpeg'
// import xeniahome from '../../Assets/xenia-home.jpeg'
import sirionhome from '../../Assets/sirion-home.jpeg'
import terioshome from '../../Assets/terios-home.jpeg'
import { Link, Redirect } from 'react-router-dom';
import dibaProfile from '../../Assets/diba.jpeg'
// import interiorTerios from '../../Assets/interior-terios.jpeg'
// import {FaBars} from 'react-icons/fa'
import {AiOutlineWhatsApp,AiOutlineMail,AiFillTwitterCircle,AiFillFacebook
,AiFillInstagram,AiFillPhone,AiFillCopyrightCircle,AiFillLinkedin} from 'react-icons/ai'
import "react-datepicker/dist/react-datepicker.css";
import {bg_rocky,kuning_rocky,merah_rocky,interior_rocky,
    bg_ayla,merah_ayla,full_ayla,interior_ayla,
    bg_sigra,gray_sigra,full_sigra,interior_sigra,
    bg_luxio,polos_luxio,full_luxio,interior_luxio,
    bg_xenia,gray_xenia,full_xenia,interior_xenia,
    bg_terios,gray_terios,full_terios,interior_terios,
    bg_granmax_mb,full_granmax_mb,gray_granmax_mb,interior_granmax_mb,
    bg_granmax_pu,gray_granmax_pu,full_granmax_pu,interior_granmax_pu,
    bg_sirion,full_sirion,interior_sirion,gray_sirion,
    pdf_granmax_pu,
    pdf_rocky,
    pdf_sigra,pdf_sirion,pdf_terios,pdf_xenia,
    testi_anto,testi_erni,testi_rizal,
    testi_evan,testi_jonathan,testi_pt_binaangkasa,
    testi_rahmat,testi_siti_alminah,testi_yanti,
    pdf_luxio,
    pdf_ayla,pdf_granmax_mb,
    brosur_xenia,brosur_rocky,
    dimensi_ayla,ban_ayla,kapasitas_duduk_ayla,mesin_ayla,radius_putar_ayla,rem_ayla,suspensi_ayla,transmisi_ayla,sistem_kemudi_ayla,
    dimensi_sigra,ban_sigra,kapasitas_duduk_sigra,mesin_sigra,radius_putar_sigra,rem_sigra,suspensi_sigra,transmisi_sigra,sistem_kemudi_sigra,
    dimensi_sirion,ban_sirion,kapasitas_duduk_sirion,mesin_sirion,radius_putar_sirion,rem_sirion,suspensi_sirion,transmisi_sirion,sistem_kemudi_sirion,
    dimensi_luxio,ban_luxio,kapasitas_duduk_luxio,mesin_luxio,radius_putar_luxio,rem_luxio,suspensi_luxio,transmisi_luxio,sistem_kemudi_luxio,
    dimensi_terios,ban_terios,kapasitas_duduk_terios,mesin_terios,radius_putar_terios,rem_terios,suspensi_terios,transmisi_terios,sistem_kemudi_terios,
    dimensi_granmax_mb,ban_granmax_mb,kapasitas_duduk_granmax_mb,mesin_granmax_mb,radius_putar_granmax_mb,rem_granmax_mb,suspensi_granmax_mb,transmisi_granmax_mb,sistem_kemudi_granmax_mb,
    dimensi_granmax_pu,ban_granmax_pu,kapasitas_duduk_granmax_pu,mesin_granmax_pu,radius_putar_granmax_pu,rem_granmax_pu,suspensi_granmax_pu,transmisi_granmax_pu,sistem_kemudi_granmax_pu
    } from '../../Assets/assets' 
// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Iframe from 'react-iframe'
import Header from '../Header/header'

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..


export default function Home(){
    AOS.init();
   
    const [idProduct,setIdProduct] = useState(1) 
    const [allTestimoni,setAllTestimoni] = useState(
        {
            "testimoni":[
                {
                    "gambar":testi_anto,
                    "nama_customer":'Anto',
                    "pekerjaan":"Karyawan Swasta",
                    "comment":"Sales-nya mas Diba baik banget, responsif dan cepat unitnya saya langsung di delivery Pokoknya the best banget"
                },
                {
                    "gambar":testi_erni,
                    "nama_customer":'Erni',
                    "pekerjaan":"Karyawan Swasta",
                    "comment":"Pelayanan ramah service tepat sesuai rencana bahkan dapat discount dan bonus banyak, bisa di jadikan recommend mas Diba nya"
                },
                {
                    "gambar":testi_evan,
                    "nama_customer":'Evan',
                    "pekerjaan":"Karyawan Swasta",
                    "comment":"kntl yang indah"
                },
                {
                    "gambar":testi_jonathan,
                    "nama_customer":'Jonathan',
                    "pekerjaan":"Karyawan Swasta",
                    "comment":"kntl yang indah"
                },
                {
                    "gambar":testi_pt_binaangkasa,
                    "nama_customer":'PT Bina Angkasa',
                    "pekerjaan":"Karyawan Swasta",
                    "comment":"kntl yang indah"
                },
                {
                    "gambar":testi_rahmat,
                    "nama_customer":'rahmat',
                    "pekerjaan":"Karyawan Swasta",
                    "comment":"kntl yang indah"
                },
                {
                    "gambar":testi_rizal,
                    "nama_customer":'Rizal',
                    "pekerjaan":"Karyawan Swasta",
                    "comment":"kntl yang indah"
                },
                {
                    "gambar":testi_siti_alminah,
                    "nama_customer":'Siti Alminah',
                    "pekerjaan":"Karyawan Swasta",
                    "comment":"kntl yang indah"
                },
                {
                    "gambar":testi_yanti,
                    "nama_customer":'Yanti',
                    "pekerjaan":"Karyawan Swasta",
                    "comment":"kntl yang indah"
                },
            ]
        }
    )
    const [gambar_mobil,setGambar_Mobil]=useState(
        {
            "list_gambar":[
            
    
            {
                "gambar":kuning_rocky
            },
            {
                "gambar":merah_ayla
            },
            {
                "gambar":gray_sigra
            },
            {
                "gambar":polos_luxio
            }
            ,
            {
                "gambar":gray_xenia
            }
            ,
            {
                "gambar":gray_terios
            }
            ,
            {
                "gambar":gray_granmax_mb
            }
            ,
            {
                "gambar":gray_granmax_pu
            }
            ,
            {
                "gambar":gray_sirion
            }

            ]
        }

    )
    const [list_mobil,setList_mobil] = useState(
        {
            "list_mobil": [
              {
                "car_id": 1,
                "nama_mobil": "ROCKY",
                "background":bg_rocky,
                "harga": "178.900.000",
                "gambar_satuan":merah_rocky,
                "interior":interior_rocky,
                "full":kuning_rocky,
                "pdf":pdf_rocky,
                "brosur":brosur_rocky,
                "dimensi":undefined,
                "ban":undefined,
                "kapasitas_duduk":undefined,
                "radius_putar":undefined,
                "mesin":undefined,
                "rem":undefined,
                "suspensi":undefined,
                "ban":undefined,
                "sistem_kemudi":undefined
                
              },
              {
                "car_id": 2,
                "nama_mobil": "AYLA",
                "harga": "103.300.000",
                "background":bg_ayla,
                "gambar_satuan":merah_ayla,
                "interior":interior_ayla,
                "full":full_ayla,
                "pdf":pdf_ayla,
                "dimensi":dimensi_ayla,
                "ban":ban_ayla,
                "kapasitas_duduk":kapasitas_duduk_ayla,
                "radius_putar":radius_putar_ayla,
                "mesin":mesin_ayla,
                "rem":rem_ayla,
                "suspensi":suspensi_ayla,
                "ban":ban_ayla,
                "sistem_kemudi":sistem_kemudi_ayla                
              },
              {
                "car_id": 3,
                "nama_mobil": "SIGRA",
                "harga": "120.650.000",
                "background":bg_sigra,
                "gambar_satuan":gray_sigra,
                "interior":interior_sigra,
                "full":full_sigra,
                "pdf":pdf_sigra,
                "dimensi":dimensi_sigra,
                "ban":ban_sigra,
                "kapasitas_duduk":kapasitas_duduk_sigra,
                "radius_putar":radius_putar_sigra,
                "mesin":mesin_sigra,
                "rem":rem_sigra,
                "suspensi":suspensi_sigra,
                "ban":ban_sigra,
                "sistem_kemudi":sistem_kemudi_sigra    
              },
              {
                "car_id": 4,
                "nama_mobil": "GRAND NEW XENIA",
                "harga": "184.500.000",
                "background":bg_xenia,
                "gambar_satuan":gray_xenia,
                "interior":interior_xenia,
                "full":full_xenia,
                "pdf":pdf_xenia,
                "brosur":brosur_xenia,
                "dimensi":undefined,
                "ban":undefined,
                "kapasitas_duduk":undefined,
                "radius_putar":undefined,
                "mesin":undefined,
                "rem":undefined,
                "suspensi":undefined,
                "ban":undefined,
                "sistem_kemudi":undefined
              },
              {
                "car_id": 5,
                "nama_mobil": "ALL NEW TERIOS",
                "harga": "178.900.000",
                "background":bg_terios,
                "gambar_satuan":gray_terios,
                "interior":interior_terios,
                "full":full_terios,
                "pdf":pdf_terios,
                "dimensi":dimensi_terios,
                "ban":ban_terios,
                "kapasitas_duduk":kapasitas_duduk_terios,
                "radius_putar":radius_putar_terios,
                "mesin":mesin_terios,
                "rem":rem_terios,
                "suspensi":suspensi_terios,
                "ban":ban_terios,
                "sistem_kemudi":sistem_kemudi_terios 
              },
              {
                "car_id": 6,
                "nama_mobil": "ALL NEW SIRION",
                "harga": "178.900.000",
                "background":bg_sirion,
                "gambar_satuan":gray_sirion,
                "interior":interior_sirion,
                "full":full_sirion,
                "pdf":pdf_sirion,
                "dimensi":dimensi_sirion,
                "ban":ban_sirion,
                "kapasitas_duduk":kapasitas_duduk_sirion,
                "radius_putar":radius_putar_sirion,
                "mesin":mesin_sirion,
                "rem":rem_sirion,
                "suspensi":suspensi_sirion,
                "ban":ban_sirion,
                "sistem_kemudi":sistem_kemudi_sirion 
              },
              {
                "car_id": 7,
                "nama_mobil": "LUXIO",
                "harga": "194.300.000",
                "background":bg_luxio,
                "gambar_satuan":polos_luxio,
                "interior":interior_luxio,
                "full":full_luxio,
                "pdf":pdf_luxio,
                "dimensi":dimensi_luxio,
                "ban":ban_luxio,
                "kapasitas_duduk":kapasitas_duduk_luxio,
                "radius_putar":radius_putar_luxio,
                "mesin":mesin_luxio,
                "rem":rem_luxio,
                "suspensi":suspensi_luxio,
                "ban":ban_luxio,
                "sistem_kemudi":sistem_kemudi_luxio 
              },
              {
                "car_id": 8,
                "nama_mobil": "GRANMAX MB",
                "harga": "165.800.000",
                "background":bg_granmax_mb,
                "gambar_satuan":gray_granmax_mb,
                "interior":interior_granmax_mb,
                "full":full_granmax_mb,
                "pdf":pdf_granmax_mb
              },
              {
                "car_id": 9,
                "nama_mobil": "GRANMAX PI",
                "harga": "164.800.000",
                "background":bg_granmax_pu,
                "gambar_satuan":gray_granmax_pu,
                "interior":interior_granmax_pu,
                "full":full_granmax_pu,
                "pdf":pdf_granmax_pu
              },
            ]
          }
    )
   


    
    //  FUNCTION FOR NEXT BEFORE IMAGE
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
      console.log(slides)
      let dots = document.querySelectorAll(".dots");
      console.log(dots)
    
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
        // nextSlide();
        timer = _timer; // reset timer
      }
    }, 3000); // 1sec
    
    // FUNCTION FOR NEXT BEFORE IMAGE


    const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop,'slow')   
    const myRef = useRef(null)
    // const executeScroll = () => scrollToRef(myRef)
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
                    className="myclassName"
                    display="initial"
                    position="relative"/>
            </div>

            </>
            // <iframe src= width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
            
        )
    }

    const onClickProductHome=(id)=>{
        // console.log(id,' ini index')
        setIdProduct(id)
        scrollToRef(myRef)
    }


    // RENDER PRODUCT HOME
    const renderProductHome=()=>{
        $('.list-product-car .box-car').removeClass('active-list-product')
        // console.log(idProduct)
        // console.log(list_mobil)
        var stringify_dp = ''
         return list_mobil.list_mobil.map((val,index)=>{
            //  console.log(val)
             stringify_dp = val.nama_mobil
            if(val.car_id === idProduct){
               console.log(val.car_id , idProduct, 'true')
                return (
                    <>
                    {/* <h1>testing true</h1> */}
                    <div className="detail-box-img-car"  key={1}>
                            <img src={val.background} alt="" />
                        </div>
                        <div className="detail-box-price-car">
                            <div className="price-box">
                                <p>Harga Mulai Dari</p>
                                <p>Rp {val.harga} </p>
                                
                            </div>
                            <Link to={{pathname:`/specification/${stringify_dp}`}}  className="btn-buy-product">
                                Lihat Spesifikasi
                            </Link>
                            <a href={`https://wa.me/+6285887854544/?text=Saya Ingin Konsultasi Mengenai Mobil`} style={{textDecoration:'none'}} target="_blank">
                                <div className="btn-check-product">
                                    Beli Sekarang
                                </div>
                            </a>
                            
                            
                    </div>
                    </>
                )
            }else {
                console.log(val.car_id , idProduct, 'false')
                return ''
            }
        })
  
    }

    const option_dots_product_home=()=>{
        
        return list_mobil.list_mobil.map((val,index)=>{
            return (
                <>
                    <span className="dots" onClick={()=>currentSlide(index)}></span>
                </>
            )
        })
    }

    // RENDER PRODUCT HOME





    const render_list_car = () =>{ // render list mobil gede
        // setIdProduct(1)
        return list_mobil.list_mobil.map((val,index)=>{ 

            if(index === 0){
                return (
                    <div className="box-car active-list-product" ref={myRef}  onClick={()=>onClickProductHome(index+1)}>
                        <img src={val.gambar_satuan} alt="" className="img-option-car"/>
                        <p>{val.nama_mobil}</p>
                    </div>
                )
            }else {
                return (
                    <div className="box-car" ref={myRef}  onClick={()=>onClickProductHome(index+1)}>
                        <img src={val.gambar_satuan} alt="" className="img-option-car"/>
                        <p>{val.nama_mobil}</p>
                   </div>
                )
            
            }
        })
    }

    const render_gambar_mobil_satuan=()=>{
        console.log(gambar_mobil)
        return gambar_mobil.list_gambar.map((val,index)=>{
            // console.log(val.gambar)
            return (
                <>
                <div className="mySlides animate">
                    <img src={val.gambar} alt="slide" />
                </div> 
                </>
            )
        })
    }


    const render_testimoni=()=>{
        return allTestimoni.testimoni.map((val,index)=>{
            return (
                <>
                    <div className="box-testi-card">
                        <div className="btc-img">
                            <img src={val.gambar} alt=""/>
                        </div>
                        <div className="btc-nama">
                            {val.nama_customer}
                        </div>
                        <div className="btc-comment">
                            <p>{val.pekerjaan}</p>
                            <p>{val.comment}</p>
                        </div>
                    </div>
                </>
            )
        })
    }

    
    return (
        <>
        
            <div className="new-box-home">
                <Header/>
                <div className="new-body-content ">
                    <div className="body-content-1">
                        <div className="carousel-container">
                            {/* <div className="mySlides animate">
                              <img src={rocky} alt="slide" />
                            </div>       
                            <div className="mySlides animate">
                              <img src={sigra} alt="slide" />
                            </div>
                            <div className="mySlides animate">
                              <img src={terios} alt="slide" />
                            </div>                           */}
                            {render_gambar_mobil_satuan()}
                            
                            <div className="prev"  onClick={prevSlide}>&#10094;</div>
                            <div className="next" onClick={nextSlide}>&#10095;</div>
                            
                            <div className="dots-container">
                             {option_dots_product_home()}      
                            </div>
                        </div>
                    </div>
                    <div className="body-content-2" >
                        <div className="list-product-car container">
                            {render_list_car()} 
                        </div>
                        <div className="detail-product-car container"  >
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
                                    <a href={`https://wa.me/+6285887854544/?text=Saya Ingin Konsultasi Mengenai Mobil`} target="_blank" className="a-href-link-wa">
                                        <div className="img-logo">
                                            <AiOutlineWhatsApp className="icon-wa"/>
                                        </div>
                                        <p id="soc_youtube">Whatsapp</p>
                                    </a>
                                </div> 
                                <div className="box_for_socmed-4 hover-email">
                                    <a href="https://www.google.com" target="_blank" className="a-href-link-wa">
                                        <div className="img-logo">
                                            <AiOutlineMail className="icon-wa"/>
                                        </div>
                                        <p id="soc_youtube">Email</p>
                                    </a>
                                </div> 
                                <div className="box_for_socmed-4 hover-twitter">
                                    <a href="#https://www.google.com" target="_blank" className="a-href-link-wa">
                                        <div className="img-logo">
                                            <AiFillLinkedin className="icon-wa"/>
                                        </div>
                                        <p id="soc_youtube">Linkedin</p>
                                    </a>
                                </div> 
                            </div>
                            <div className="bc-profile-box">
                                <img src={dibaProfile} alt="" />
                            </div>
                            <div className="bc-3-box">
                                <div className="box_for_socmed-4 hover-ig">
                                    <a href="https://www.google.com" target="_blank" className="a-href-link-wa">
                                        <div className="img-logo">
                                            <AiFillInstagram className="icon-wa"/>
                                        </div>
                                        <p id="soc_youtube">Instagram</p>
                                    </a>
                                </div> 
                                <div className="box_for_socmed-4 hover-fb">
                                    <a href="https://www.google.com" target="_blank" className="a-href-link-wa">
                                        <div className="img-logo">
                                            <AiFillFacebook className="icon-wa"/>
                                        </div>
                                        <p id="soc_youtube">Facebook</p>
                                    </a>
                                </div> 
                                <div className="box_for_socmed-4 hover-email">
                                    <a href={`https://wa.me/+6285887854544/?text=Saya Ingin Konsultasi Mengenai Mobil`} target="_blank" className="a-href-link-wa">
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
                                    DIBA FAHRIKA
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
                                {render_testimoni()}
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
                                            <a href={`https://wa.me/+6285887854544/?text=Saya Ingin Konsultasi Mengenai Mobil`}target="_blank" className="a-href-link-wa">
                                                <div className="img-logo">
                                                    <AiFillPhone className="icon-wa-2"/>
                                                </div>
                                                <p id="soc_youtube-2">Hubungi</p>
                                            </a>
                                        </div> 
                                        <div className="box_for_socmed-5 hover-wa">
                                            <a href={`https://wa.me/+6285887854544/?text=Saya Ingin Konsultasi Mengenai Mobil`} target="_blank" className="a-href-link-wa">
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

        </>
    )
}