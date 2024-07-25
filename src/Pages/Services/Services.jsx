/* eslint-disable no-unused-vars */
import React from 'react'
import './Services.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import ServiceCard from '../../components/ServiceCard/ServiceCard'
import designer from '../../assets/svg/designer.svg'

function Services() {
  return (
    <div className='Service'>
        <Header pres="services" />

            <div className="services">
                <h1 className='sectionHead'>My services</h1>
                <div className="serviceList">
                    <ServiceCard/>
                    <ServiceCard illustration={designer} service="UI/UX Designer"/>
                </div>
            </div>

        <Footer/>
    </div>
  )
}

export default Services