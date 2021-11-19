import React, { Component,useState } from 'react';
import './event.css'
import {AiFillCopyrightCircle} from 'react-icons/ai'
import {polos_rocky} from '../../Assets/assets'
import { Link, Redirect } from 'react-router-dom';
import Header from '../Header/header'
import { useParams } from "react-router-dom";

export default function Detail_function(){

    const {detail}=useParams()
    const [data_render, setData_render]=useState([])
    console.log(detail)

    return (
        <>
            <div className="container_detail_event">
                <Header/>
                <div className="container isi_detail_event">
                    <div className="box_img_detail">
                        <img src={polos_rocky} alt="" />
                    </div>
                    <div className="judul_isi_detail">
                        <h1>
                            BUKA LEMBARAN BARU KUARTAL II INDONESIA
                        </h1>
                    </div>
                    <div className="isi_berita_event">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A vero autem maxime perspiciatis itaque, nesciunt rerum, accusamus dolor saepe aliquam delectus facere animi veritatis quisquam officia quasi doloribus exercitationem odit.</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A vero autem maxime perspiciatis itaque, nesciunt rerum, accusamus dolor saepe aliquam delectus facere animi veritatis quisquam officia quasi doloribus exercitationem odit.</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A vero autem maxime perspiciatis itaque, nesciunt rerum, accusamus dolor saepe aliquam delectus facere animi veritatis quisquam officia quasi doloribus exercitationem odit.</p>
                    </div>
                </div>
            </div>
        </>

    )
}