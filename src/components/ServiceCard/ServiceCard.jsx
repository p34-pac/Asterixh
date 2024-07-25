/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import './ServiceCard.css'
import ribbon from '../../assets/images/ribbon.png'
import coder from '../../assets/svg/coder.svg'
import Button from '../button/Button'

function ServiceCard({illustration, service}) {
  return (
    <div className='ServiceCard'>
        <span className="availability" value="available">
            <img src={ribbon} alt="" />
        </span>
        <div className="illustration">
            <img src={illustration?illustration:coder} alt="illustration" />
        </div>
        <b className="service">{service?service:"Front end development"}</b>
        <div className="cta">
            <Button>Hire me now
                <i className="ICN">
                    <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_12_484)">
                        <path d="M2.625 20C2.075 20 1.60433 19.794 1.213 19.3821C0.821667 18.9702 0.625667 18.4744 0.625 17.8947V6.31579C0.625 5.73684 0.821 5.2414 1.213 4.82947C1.605 4.41754 2.07567 4.21123 2.625 4.21053H6.625V2.10526C6.625 1.52632 6.821 1.03088 7.213 0.618947C7.605 0.207018 8.07567 0.000701754 8.625 0H12.625C13.175 0 13.646 0.206316 14.038 0.618947C14.43 1.03158 14.6257 1.52702 14.625 2.10526V4.21053H18.625C19.175 4.21053 19.646 4.41684 20.038 4.82947C20.43 5.2421 20.6257 5.73754 20.625 6.31579V17.8947C20.625 18.4737 20.4293 18.9695 20.038 19.3821C19.6467 19.7947 19.1757 20.0007 18.625 20H2.625ZM8.625 4.21053H12.625V2.10526H8.625V4.21053Z" fill="var(--primary)"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_12_484">
                        <rect width="20" height="20" fill="white" transform="translate(0.625)"/>
                        </clipPath>
                        </defs>
                    </svg>
                </i>
            
            </Button>
        </div>
    </div>
  )
}

export default ServiceCard