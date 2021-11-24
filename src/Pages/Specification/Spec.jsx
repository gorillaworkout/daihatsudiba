import React, { useEffect,useState } from 'react';
import './specs.css'
import '../../Pages/webversion.css'
import banner_ayla from '../../Assets/banner-ayla.jpeg'
import Header from '../Header/header'
// import background_mobil from '../../Assets/background-mobil.jpeg'
import ayla_satuan from '../../Assets/mobil-satuan-ayla.png'
// import interior_ayla from '../../Assets/interior-ayla.jpeg'
// import full_ayla from '../../Assets/full_ayla.jpeg'
import Accordion from 'react-bootstrap/Accordion'
import Speedometer from '../../Assets/Spedometer.mp4'
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
    pdf_granmax_pu,new_merah_ayla,
    pdf_rocky,pdf_luxio,pdf_granmax_mb,
    pdf_sigra,pdf_sirion,pdf_terios,pdf_xenia,
    brosur_rocky,brosur_xenia,iklan_rocky,
    gray_new_xenia,interior_new_xenia,bg_new_xenia,green_new_xenia,
    dimensi_ayla,ban_ayla,kapasitas_duduk_ayla,mesin_ayla,radius_putar_ayla,rem_ayla,suspensi_ayla,transmisi_ayla,sistem_kemudi_ayla,
    dimensi_sigra,ban_sigra,kapasitas_duduk_sigra,mesin_sigra,radius_putar_sigra,rem_sigra,suspensi_sigra,transmisi_sigra,sistem_kemudi_sigra,
    dimensi_sirion,ban_sirion,kapasitas_duduk_sirion,mesin_sirion,radius_putar_sirion,rem_sirion,suspensi_sirion,transmisi_sirion,sistem_kemudi_sirion,
    dimensi_luxio,ban_luxio,kapasitas_duduk_luxio,mesin_luxio,radius_putar_luxio,rem_luxio,suspensi_luxio,transmisi_luxio,sistem_kemudi_luxio,
    dimensi_terios,ban_terios,kapasitas_duduk_terios,mesin_terios,radius_putar_terios,rem_terios,suspensi_terios,transmisi_terios,sistem_kemudi_terios,
    dimensi_granmax_mb,ban_granmax_mb,kapasitas_duduk_granmax_mb,mesin_granmax_mb,radius_putar_granmax_mb,rem_granmax_mb,suspensi_granmax_mb,transmisi_granmax_mb,sistem_kemudi_granmax_mb,
    dimensi_granmax_pu,ban_granmax_pu,kapasitas_duduk_granmax_pu,mesin_granmax_pu,radius_putar_granmax_pu,rem_granmax_pu,suspensi_granmax_pu,transmisi_granmax_pu,sistem_kemudi_granmax_pu

    } from '../../Assets/assets' 

    var  detail_product = [
        {
            nama_mobil : 'NEW XENIA',
            harga:'190.900.000',
            background:bg_new_xenia,
            gambar_satuan:gray_new_xenia,
            interior:interior_new_xenia,
            full:green_new_xenia,
            pdf:pdf_xenia,
            brosur:brosur_xenia,
            dimensi:undefined,
            ban:undefined,
            kapasitas_duduk:undefined,
            mesin:undefined,
            radius_putar:undefined,
            rem:undefined,
            suspensi:undefined,
            transmisi:undefined,
            sistem_kemudi:undefined
        },
        {
            nama_mobil : 'ROCKY',
            harga:'178.900.000',
            background:bg_rocky,
            gambar_satuan:merah_rocky,
            interior:interior_rocky,
            full:kuning_rocky,
            pdf:pdf_rocky,
            brosur:brosur_rocky,
            dimensi:undefined,
            ban:undefined,
            kapasitas_duduk:undefined,
            mesin:undefined,
            radius_putar:undefined,
            rem:undefined,
            suspensi:undefined,
            transmisi:undefined,
            sistem_kemudi:undefined
        },
        {
            nama_mobil : 'AYLA',
            harga:'103.300.000',
            background:bg_ayla,
            gambar_satuan:merah_ayla,
            interior:interior_ayla,
            full:new_merah_ayla,
            pdf:pdf_sigra,
            dimensi:dimensi_ayla,
            ban:ban_ayla,
            kapasitas_duduk:kapasitas_duduk_ayla,
            mesin:mesin_ayla,
            radius_putar:radius_putar_ayla,
            rem:rem_ayla,
            suspensi:suspensi_ayla,
            transmisi:transmisi_ayla,
            sistem_kemudi:sistem_kemudi_ayla
        },
        {
            nama_mobil : 'SIGRA',
            harga:'120.650.000',
            background:bg_sigra,
            gambar_satuan:gray_sigra,
            interior:interior_sigra,
            full:full_sigra,
            pdf:pdf_sigra,
            dimensi:dimensi_sigra,
            ban:ban_sigra,
            kapasitas_duduk:kapasitas_duduk_sigra,
            mesin:mesin_sigra,
            radius_putar:radius_putar_sigra,
            rem:rem_sigra,
            suspensi:suspensi_sigra,
            transmisi:transmisi_sigra,
            sistem_kemudi:sistem_kemudi_sigra
        },
        {
            nama_mobil : 'GRAND NEW XENIA',
            harga:'184.500.000',
            background:bg_xenia,
            gambar_satuan:gray_xenia,
            interior:interior_xenia,
            full:full_xenia,
            pdf:pdf_xenia,
            brosur:brosur_xenia,
            dimensi:undefined,
            ban:undefined,
            kapasitas_duduk:undefined,
            mesin:undefined,
            radius_putar:undefined,
            rem:undefined,
            suspensi:undefined,
            transmisi:undefined,
            sistem_kemudi:undefined
        },
        
        {
            nama_mobil : 'ALL NEW TERIOS',
            harga:'205.100.000',
            background:bg_terios,
            gambar_satuan:gray_terios,
            interior:interior_terios,
            full:full_terios,
            pdf:pdf_terios,
            dimensi:dimensi_terios,
            ban:ban_terios,
            kapasitas_duduk:kapasitas_duduk_terios,
            mesin:mesin_terios,
            radius_putar:radius_putar_terios,
            rem:rem_terios,
            suspensi:suspensi_terios,
            transmisi:transmisi_terios,
            sistem_kemudi:sistem_kemudi_terios
        },
        {
            nama_mobil : 'ALL NEW SIRION',
            harga:'201.750.000',
            background:bg_sirion,
            gambar_satuan:gray_sirion,
            interior:interior_sirion,
            full:full_sirion,
            pdf:pdf_sirion,
            dimensi:dimensi_sirion,
            ban:ban_sirion,
            kapasitas_duduk:kapasitas_duduk_sirion,
            mesin:mesin_sirion,
            radius_putar:radius_putar_sirion,
            rem:rem_sirion,
            suspensi:suspensi_sirion,
            transmisi:transmisi_sirion,
            sistem_kemudi:sistem_kemudi_sirion
        },
        {
            nama_mobil : 'LUXIO',
            harga:'194.300.000',
            background:bg_luxio,
            gambar_satuan:polos_luxio,
            interior:interior_luxio,
            full:full_luxio,
            pdf:pdf_luxio,
            dimensi:dimensi_luxio,
            ban:ban_luxio,
            kapasitas_duduk:kapasitas_duduk_luxio,
            mesin:mesin_luxio,
            radius_putar:radius_putar_luxio,
            rem:rem_luxio,
            suspensi:suspensi_luxio,
            transmisi:transmisi_luxio,
            sistem_kemudi:sistem_kemudi_luxio
        },
        {
            nama_mobil : 'GRANDMAX MB',
            harga:'165.800.000',
            background:bg_granmax_mb,
            gambar_satuan:gray_granmax_mb,
            interior:interior_granmax_mb,
            full:full_granmax_mb,
            pdf:pdf_granmax_mb,
            dimensi:dimensi_granmax_mb,
            ban:ban_granmax_mb,
            kapasitas_duduk:kapasitas_duduk_granmax_mb,
            mesin:mesin_granmax_mb,
            radius_putar:radius_putar_granmax_mb,
            rem:rem_granmax_mb,
            suspensi:suspensi_granmax_mb,
            transmisi:transmisi_granmax_mb,
            sistem_kemudi:sistem_kemudi_granmax_mb
        },
        {
            nama_mobil : 'GRANDMAX PU',
            harga:'164.800.000',
            background:bg_granmax_pu,
            gambar_satuan:gray_granmax_pu,
            interior:interior_granmax_pu,
            full:full_granmax_pu,
            pdf:pdf_granmax_pu,
            dimensi:dimensi_granmax_pu,
            ban:ban_granmax_pu,
            kapasitas_duduk:kapasitas_duduk_granmax_pu,
            mesin:mesin_granmax_pu,
            radius_putar:radius_putar_granmax_pu,
            rem:rem_granmax_pu,
            suspensi:suspensi_granmax_pu,
            transmisi:transmisi_granmax_pu,
            sistem_kemudi:sistem_kemudi_granmax_pu
        }
    ]


export default function Specification(){
    const {stringify_dp} = useParams()
    // console.log(stringify_dp)
    const [data_render,setData_render]=useState([])
    useEffect(()=>{
        var filtering_item = detail_product.filter((val,index)=>{
            // console.log(val.nama_mobil, stringify_dp , val.nama_mobil === stringify_dp,typeof stringify_dp, typeof val.nama_mobil )
            if(val.nama_mobil === stringify_dp){
                // console.log(val)
                // console.log(stringify_dp)
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
                        {/* <video  autoplay="autoplay" loop="loop" muted id="video_spec">
                            <source src={Speedometer} type="video/mp4"/>
                        </video> */}
                            <div className="box_detail_gradient">
                                <h1>INTERIOR</h1>
                                <h1>{data_render.nama_mobil}</h1>
                                
                                <p>Astra Daihatsu {data_render.nama_mobil} hadir dengan interior yang elegant dan memiliki fitur-fitur canggih di dalamnya. Nikmati dan rasakan fiturnya.</p>
                            </div>
                    </div>
                </div>
                <div className="spec-6-teknis">
                        {
                            data_render.ban === undefined ? 
                            <>
                                <div className="brosur_box">
                                    <p>SPESIFIKASI TEKNIS</p>
                                    <img src={data_render.brosur} alt="" />
                                </div>

                            </>
                            :
                            <>
                            <div className="teknis-box">
                                <p>SPESIFIKASI TEKNIS</p>
                                    <Accordion>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Dimensi</Accordion.Header>
                                        <Accordion.Body>
                                            <div className="dimensi_mobil">
                                                <img src={data_render.dimensi} alt=""  />
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>Kapasitas Tempat Duduk</Accordion.Header>
                                        <Accordion.Body >
                                            <div className="dimensi_mobil">
                                                <img src={data_render.kapasitas_duduk} alt=""  />
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>Radius Putar Minimum</Accordion.Header>
                                        <Accordion.Body >
                                            <div className="dimensi_mobil">
                                                <img src={data_render.radius_putar} alt=""  />
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="3">
                                        <Accordion.Header>Mesin</Accordion.Header>
                                        <Accordion.Body >
                                        <div className="dimensi_mobil">
                                                <img src={data_render.mesin} alt=""  />
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="4">
                                        <Accordion.Header>Transmisi</Accordion.Header>
                                        <Accordion.Body >
                                        <div className="dimensi_mobil">
                                                <img src={data_render.transmisi} alt=""  />
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="5">
                                        <Accordion.Header>Sistem Kemudi</Accordion.Header>
                                        <Accordion.Body >
                                            <div className="dimensi_mobil">
                                                <img src={data_render.sistem_kemudi} alt=""  />
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="6">
                                        <Accordion.Header>Rem</Accordion.Header>
                                        <Accordion.Body >
                                        <div className="dimensi_mobil">
                                                <img src={data_render.rem} alt=""  />
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="7">
                                        <Accordion.Header>Suspensi</Accordion.Header>
                                        <Accordion.Body >
                                            <div className="dimensi_mobil">
                                                <img src={data_render.suspensi} alt=""  />
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>

                                    <Accordion.Item eventKey="8">
                                        <Accordion.Header>Ban</Accordion.Header>
                                        <Accordion.Body >
                                            <div className="dimensi_mobil">
                                                <img src={data_render.ban} alt=""  />
                                            </div>
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    </Accordion>
                            </div>
                            </>
                        }
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