import React, { useEffect } from 'react';
import './header.css'
// import bggw from '../../Assets/newbggw.png'
import $ from "jquery";
// import Swal from 'sweetalert2';
// import DatePicker from "react-datepicker";
// import moment from 'moment';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown'



// import rocky from '../../Assets/daihatsu-rocky.png'
import daihatsulogo from '../../Assets/daihatsu-logo.png'
import { Link } from 'react-router-dom';

// import querystring from 'querystring'

import {FaBars} from 'react-icons/fa'
// import {AiOutlineWhatsApp,AiOutlineMail,AiFillTwitterCircle,AiFillFacebook
// ,AiFillInstagram,AiFillPhone,AiFillCopyrightCircle} from 'react-icons/ai'
import "react-datepicker/dist/react-datepicker.css";
// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Iframe from 'react-iframe'
// import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import mobil_icon from '../../Assets/mobil_icon_mobile.png'
import {bg_rocky,kuning_rocky,merah_rocky,interior_rocky,
bg_ayla,merah_ayla,full_ayla,interior_ayla,
bg_sigra,gray_sigra,full_sigra,interior_sigra,
bg_luxio,polos_luxio,full_luxio,interior_luxio,
bg_xenia,gray_xenia,full_xenia,interior_xenia,
bg_terios,gray_terios,full_terios,interior_terios,
bg_granmax_mb,full_granmax_mb,gray_granmax_mb,interior_granmax_mb,
bg_granmax_pu,gray_granmax_pu,full_granmax_pu,interior_granmax_pu,
bg_sirion,full_sirion,interior_sirion,gray_sirion,
gray_new_xenia,interior_new_xenia,bg_new_xenia,green_new_xenia
} from '../../Assets/assets' 
import { Link2 } from 'react-feather';



export default function Header(){
    
    // const [detail_product_item, setDetail_product_item]= useState(stringify_dp)
    useEffect(()=>{
        
        
        
    },[])
    var  detail_product = [
        {
            nama_mobil : 'NEW XENIA',
            harga : '190.900.000',
            background:bg_new_xenia,
            gambar_satuan:gray_new_xenia,
            interior:interior_new_xenia,
            full:green_new_xenia
        },
        {
            nama_mobil : 'ROCKY',
            harga:'178.900.000',
            background:bg_rocky,
            gambar_satuan:merah_rocky,
            interior:interior_rocky,
            full:kuning_rocky
        },
        {
            nama_mobil : 'AYLA',
            harga:'103.300.000',
            background:bg_ayla,
            gambar_satuan:merah_ayla,
            interior:interior_ayla,
            full:full_ayla
        },
        {
            nama_mobil : 'SIGRA',
            harga:'120.650.000',
            background:bg_sigra,
            gambar_satuan:gray_sigra,
            interior:interior_sigra,
            full:full_sigra
        },
        {
            nama_mobil : 'GRAND NEW XENIA',
            harga:'184.500.000',
            background:bg_xenia,
            gambar_satuan:gray_xenia,
            interior:interior_xenia,
            full:full_xenia
        },
        {
            nama_mobil : 'ALL NEW TERIOS',
            harga:'205.100.000',
            background:bg_terios,
            gambar_satuan:gray_terios,
            interior:interior_terios,
            full:full_terios
        },
        {
            nama_mobil : 'ALL NEW SIRION',
            harga:'201.750.000',
            background:bg_sirion,
            gambar_satuan:gray_sirion,
            interior:interior_sirion,
            full:full_sirion
        },
        {
            nama_mobil : 'LUXIO',
            harga:'194.300.000',
            background:bg_luxio,
            gambar_satuan:polos_luxio,
            interior:interior_luxio,
            full:full_luxio
        },
        {
            nama_mobil : 'GRANDMAX MB',
            harga:'165.800.000',
            background:bg_granmax_mb,
            gambar_satuan:gray_granmax_mb,
            interior:interior_granmax_mb,
            full:full_granmax_mb
        },
        {
            nama_mobil : 'GRANDMAX PU',
            harga:'164.800.000',
            background:bg_granmax_pu,
            gambar_satuan:gray_granmax_pu,
            interior:interior_granmax_pu,
            full:full_granmax_pu
        }
    ]
    // var stringify_dp= JSON.stringify(detail_product)
    var stringify_dp = []
    var stringify_dp_2 = []
    // console.log(stringify_dp)

    const render_header=()=>{
        return detail_product.map((val,index)=>{
            // console.log(val.nama_mobil,'142')
            stringify_dp = val.nama_mobil
            // console.log(stringify_dp)
            return (
                <>
                    <Link to={{pathname:`/specification/${stringify_dp}`}} className="dd-product-item" onClick={close_modal}>
                        <img src={val.gambar_satuan} alt=""/>
                        <p>{val.nama_mobil}</p>
                        <p>RP.{val.harga}</p>
                    </Link>
                </>
            )
        })
    }

    const close_modal=()=>{
        // console.log($('.dopdown .dropdown-menu'))
        $('.dropdown .dropdown-menu').removeClass('show')
    }

    const close_all_modal =()=>{
        $('.dropdown .dropdown-menu').removeClass('show')
    }
    
    return (

        <>
            <div className="new-header-home">
                    <div className="img_product_mobile">
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                <img src={mobil_icon} alt="" className="icon_mobil_mobile" />
                            </Dropdown.Toggle>

                            <Dropdown.Menu className="dropdown_menu_product">
                                <div className="dd-product">
                                        {render_header()}
                                </div>
                            </Dropdown.Menu>
                        </Dropdown>               
                    </div>
                    <Link className="bh-left" to={'/'}> 
                            <img src={daihatsulogo} alt=""/>                        
                    </Link>
                    <div className="bh-right">
                        <Link  to={'/'} className="bh-box-detail">
                            HOME
                        </Link>
                        <div className="bh-box-detail">
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                PRODUCT
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <div className="dd-product">
                                    {render_header()}
                                </div>
                            </Dropdown.Menu>
                        </Dropdown>                        
                        </div>
                        <Link to={`/promo`} className="bh-box-detail">
                            PROMO
                        </Link>
                        <Link to={`/contact`} className="bh-box-detail">
                            CONTACT
                        </Link>
                    </div>
                    <div className="bh-right-mobile">
                        
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                <FaBars id="icon-menu-bar-home" onClick={close_all_modal()}/>
                            </Dropdown.Toggle>

                            <Dropdown.Menu className="dropdown_menu_mobile">
                                <Dropdown.Item href="/">HOME</Dropdown.Item>
                                <Dropdown.Item href="/contact">CONTACT</Dropdown.Item>
                                <Dropdown.Item href="/event">EVENT</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
            </div>

            
           

        </>
    )
}