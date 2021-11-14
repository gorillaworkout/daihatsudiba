import React, { Component } from 'react';
import './event.css'
import Header  from '../Header/header'
import {AiFillCopyrightCircle} from 'react-icons/ai'
import {polos_rocky} from '../../Assets/assets'
import { Link, Redirect } from 'react-router-dom';

export default function Event(){


    var detail_event = 'bayu ingin makan karena laper'

    return (
        <>
            <div className="container_event">
                <Header/>
                <div className="main_event">
                    <div className="cont_box_event container">
                        <Link to={{pathname:`/detail_event/${detail_event}`}} className="box_event_1">
                            <div className="box_img_event_1">
                                <img src={polos_rocky} alt="" />
                            </div>
                            <p>DAIHATSU AYLA SPESIAL PROMO KHUSU BULAN INI DP 7 JUTA / ANGSURAN 2,2 JUTA</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, voluptatibus iure minus eveniet officia atque enim blanditiis, quae perferendis esse illum vel totam nihil repellat eligendi sunt, accusamus asperiores cupiditate!</p>
                        </Link>
                        <Link className="box_event_1">
                            <div className="box_img_event_1">
                                <img src={polos_rocky} alt="" />
                            </div>
                            <p>INI JUDUL COK HARUS PANJANG KALO BISA</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, voluptatibus iure minus eveniet officia atque enim blanditiis, quae perferendis esse illum vel totam nihil repellat eligendi sunt, accusamus asperiores cupiditate!</p>
                        </Link>
                        <Link className="box_event_1">
                            <div className="box_img_event_1">
                                <img src={polos_rocky} alt="" />
                            </div>
                            <p>INI JUDUL COK HARUS PANJANG KALO BISA</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, voluptatibus iure minus eveniet officia atque enim blanditiis, quae perferendis esse illum vel totam nihil repellat eligendi sunt, accusamus asperiores cupiditate!</p>
                        </Link>
                        
                    </div>
                </div>
                <div className="body-content-6">
                    COPYRIGHT 2021 <AiFillCopyrightCircle/>  DIBA
                </div>
            </div>

           
        </>

    )
}