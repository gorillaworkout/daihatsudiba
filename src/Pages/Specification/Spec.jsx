import React, { useEffect,useState } from 'react';
import './specs.css'
import banner_ayla from '../../Assets/banner-ayla.jpeg'
import Header from '../Header/header'
// import background_mobil from '../../Assets/background-mobil.jpeg'
import ayla_satuan from '../../Assets/mobil-satuan-ayla.png'
// import interior_ayla from '../../Assets/interior-ayla.jpeg'
// import full_ayla from '../../Assets/full_ayla.jpeg'
import Accordion from 'react-bootstrap/Accordion'
import { useParams } from "react-router-dom";
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
    pdf_sigra,pdf_sirion,pdf_terios,pdf_xenia
    } from '../../Assets/assets' 

    var  detail_product = [
        {
            nama_mobil : 'ROCKY',
            harga:'178.900.000',
            background:bg_rocky,
            gambar_satuan:merah_rocky,
            interior:interior_rocky,
            full:kuning_rocky,
            pdf:pdf_rocky
        },
        {
            nama_mobil : 'AYLA',
            harga:'103.300.000',
            background:bg_ayla,
            gambar_satuan:merah_ayla,
            interior:interior_ayla,
            full:full_ayla,
            pdf:pdf_sigra
        },
        {
            nama_mobil : 'SIGRA',
            harga:'120.650.000',
            background:bg_sigra,
            gambar_satuan:gray_sigra,
            interior:interior_sigra,
            full:full_sigra,
            pdf:pdf_sigra
        },
        {
            nama_mobil : 'GRAND NEW XENIA',
            harga:'184.500.000',
            background:bg_xenia,
            gambar_satuan:gray_xenia,
            interior:interior_xenia,
            full:full_xenia,
            pdf:pdf_xenia
        },
        {
            nama_mobil : 'ALL NEW TERIOS',
            harga:'205.100.000',
            background:bg_terios,
            gambar_satuan:gray_terios,
            interior:interior_terios,
            full:full_terios,
            pdf:pdf_terios
        },
        {
            nama_mobil : 'ALL NEW SIRION',
            harga:'201.750.000',
            background:bg_sirion,
            gambar_satuan:gray_sirion,
            interior:interior_sirion,
            full:full_sirion,
            pdf:pdf_sirion
        },
        {
            nama_mobil : 'LUXIO',
            harga:'194.300.000',
            background:bg_luxio,
            gambar_satuan:polos_luxio,
            interior:interior_luxio,
            full:full_luxio,
            pdf:pdf_rocky
        },
        {
            nama_mobil : 'GRANDMAX MB',
            harga:'165.800.000',
            background:bg_granmax_mb,
            gambar_satuan:gray_granmax_mb,
            interior:interior_granmax_mb,
            full:full_granmax_mb,
            pdf:pdf_granmax_pu
        },
        {
            nama_mobil : 'GRANDMAX PU',
            harga:'164.800.000',
            background:bg_granmax_pu,
            gambar_satuan:gray_granmax_pu,
            interior:interior_granmax_pu,
            full:full_granmax_pu,
            pdf:pdf_granmax_pu
        }
    ]


export default function Specification(){
    const {stringify_dp} = useParams()
    console.log(stringify_dp)
    const [data_render,setData_render]=useState([])
    useEffect(()=>{
        var filtering_item = detail_product.filter((val,index)=>{
            if(val.nama_mobil === stringify_dp){
                console.log(val)
                console.log(stringify_dp)
                setData_render(val)
            }
        })
    })

    const render_item=()=>{
        return (
        <>
            <div className="spec-1-img">
                    <img src={data_render.background} alt="" />
                </div>
                <div className="spec-2-brosur">
                    <div className="spec-2-left">
                        <h1>Anda Tertarik <span>dengan mobil ini ?</span></h1>
                        <p>Segera lakukan simulasi kredit atau download brosur untuk mengetahui info lebih lanjut</p>
                    </div>
                    <div className="spec-2-right">
                        <a href={`https://wa.me/+6285887854544/?text=Saya Ingin Konsultasi Mengenai Mobil`} target="_blank" className="simulasi-kredit">
                            Simulasi Kredit
                        </a>
                        <a href={data_render.pdf} className="download-brosur" target="_blank">
                            Download Brosur
                        </a>
                    </div>
                </div>
                <div className="spec-3-detail-mobil">
                    <div className="spec-3-left">
                        <img src={data_render.gambar_satuan} alt="" />
                    </div>
                    <div className="spec-3-right">
                        <p>NEW DAIHATSU {data_render.nama_mobil}</p>
                        <p>Harga Mulai Dari</p>
                        <p>Rp {data_render.harga}</p>

                        <div className="box-contact-spec">
                            <a href={`https://wa.me/+6285887854544/?text=Saya Ingin Konsultasi Mengenai Mobil`} target="_blank"  className="simulasi-kredit">
                                Hubungi
                            </a>
                            <a className="simulasi-kredit" href={`https://wa.me/+6285887854544/?text=Saya Ingin Konsultasi Mengenai Mobil`} target="_blank">
                                Simulasi Kredit
                            </a>
                        </div>
                    </div>
                </div>
                <div className="spec-4-interior-mobil">
                    <div className="spec-4-left">
                        <div className="box_detail_gradient">
                            <h1>INTERIOR</h1>
                            <h1>{data_render.nama_mobil}</h1>
                            
                            <p>Astra Daihatsu {data_render.nama_mobil} hadir dengan interior yang elegant dan memiliki fitur-fitur canggih di dalamnya. Nikmati dan rasakan fiturnya.</p>
                        </div>   
                    </div>
                    <div className="spec-4-right">
                        <img src={data_render.interior} alt="" />
                    </div>
                </div>
                <div className="spec-5-interior-mobil">
                    <div className="spec-5-left">
                        <img src={data_render.full} alt="" />    
                    </div>
                    <div className="spec-5-right">
                        <div className="box_detail_gradient">
                            <h1>INTERIOR</h1>
                            <h1>{data_render.nama_mobil}</h1>
                            
                            <p>Astra Daihatsu {data_render.nama_mobil} hadir dengan interior yang elegant dan memiliki fitur-fitur canggih di dalamnya. Nikmati dan rasakan fiturnya.</p>
                        </div>
                    </div>
                </div>
                <div className="spec-6-teknis">
                    <div className="teknis-box">
                        <p>SPESIFIKASI TEKNIS</p>
                        <Accordion>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Dimensi</Accordion.Header>
                                <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Kapasitas Tempat Duduk</Accordion.Header>
                                <Accordion.Body >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>Radius Putar Minimum</Accordion.Header>
                                <Accordion.Body >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>Mesin</Accordion.Header>
                                <Accordion.Body >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header>Transmisi</Accordion.Header>
                                <Accordion.Body >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="5">
                                <Accordion.Header>Sistem Kemudi</Accordion.Header>
                                <Accordion.Body >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="6">
                                <Accordion.Header>Rem</Accordion.Header>
                                <Accordion.Body >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="7">
                                <Accordion.Header>Suspensi</Accordion.Header>
                                <Accordion.Body >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                est laborum.
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="8">
                                <Accordion.Header>Ban</Accordion.Header>
                                <Accordion.Body >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </div> 

        </>
        )
    }
    // var parse_all_data = JSON.parse(stringify_dp)
    // console.log(parse_all_data)
    
    return (
        <>
            <div className="container-specification">
                <Header/>
                {render_item()}
            </div>
        </>
    )
}