/* eslint-disable no-unused-vars */
import React from 'react'
import './Services.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import ServiceCard from '../../components/ServiceCard/ServiceCard'
import designer from '../../assets/svg/designer.svg'
import Button from '../../components/button/Button'

function Services() {
  return (
    <div className='Service'>
        <Header pres="services" hero={{thirdSection:"What i offer", secondSection:"My design & dev services", secondShow:true, thirdShow:true}}/>


            <div className="services">
                <h1 className='sectionHead'>My services</h1>
                <div className="serviceList">
                    <ServiceCard/>
                    <ServiceCard illustration={designer} service="UI/UX Designer"/>
                </div>
            </div>

        <Footer pres='services'/>
    </div>
  )
}

export default Services