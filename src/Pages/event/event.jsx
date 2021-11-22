import React, { Component ,useState} from 'react';
import './event.css'
import Header  from '../Header/header'
import {AiFillCopyrightCircle} from 'react-icons/ai'
import {polos_rocky} from '../../Assets/assets'
import { Link, Redirect } from 'react-router-dom';
import {bg_rocky,bg_ayla,bg_sigra,bg_sirion, bg_luxio,green_new_xenia} from '../../Assets/assets'
export default function Event(){


   
    
    var detail_event = 'bayu ingin makan karena laper'
    const all_promo = [
        {
            judul_promo:'XENIA DP HANYA 2JUTA',
            isi_promo:'Segera datang ke showroom kami di jakarta barat,  dikarenakan adanya promo xenia hanya 2 juta rupiah',
            img_promo:green_new_xenia
        },
        {
            judul_promo:'ALL XENIA DP HANYA 2JUTA',
            isi_promo:'Segera datang ke showroom kami di jakarta barat,  dikarenakan adanya promo xenia hanya 2 juta rupiah',
            img_promo:bg_sigra
        }
        ,
        {
            judul_promo:'ALL XENIA DP HANYA 2JUTA',
            isi_promo:'Segera datang ke showroom kami di jakarta barat,  dikarenakan adanya promo xenia hanya 2 juta rupiah',
            img_promo:bg_sirion
        }
        ,
        {
            judul_promo:'ALL XENIA DP HANYA 2JUTA',
            isi_promo:'Segera datang ke showroom kami di jakarta barat,  dikarenakan adanya promo xenia hanya 2 juta rupiah',
            img_promo:bg_luxio
        }
        ,
        {
            judul_promo:'ALL XENIA DP HANYA 2JUTA',
            isi_promo:'Segera datang ke showroom kami di jakarta barat,  dikarenakan adanya promo xenia hanya 2 juta rupiah',
            img_promo:bg_ayla
        }

    ]
    

    const render_promo=()=>{
        return all_promo.map((val,index)=>{
            var obj = JSON.stringify([
                val.judul_promo,
                val.isi_promo,
                val.img_promo
            ])
            return (
                <>
                    <div className="box_event_1">
                        <div className="box_img_event_1">
                            <img src={val.img_promo} alt="" />
                        </div>
                        <p>{val.judul_promo}</p>
                        <p>{val.isi_promo}</p>
                    </div>
                </>
            )
        })
    }
    return (
        <>
            <div className="container_event">
                <Header/>
                <div className="main_event">
                    <div className="cont_box_event container">
                        {render_promo()}
                    </div>
                </div>
                <div className="body-content-6">
                    COPYRIGHT 2021 <AiFillCopyrightCircle/>  DIBA
                </div>
            </div>

           
        </>

    )
}