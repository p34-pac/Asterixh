/* eslint-disable no-unused-vars */
import React from 'react'
import './Contact.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import img from '../../assets/images/person.png'
import mapImg from '../../assets/images/address.png'
import Input from '../../components/input/input'
import Textarea from '../../components/Textarea/Textarea'
import Button from '../../components/button/Button'

function Contact() {

    function navigate(link){
       let a = document.createElement('a')
       a.href = link
       a.click()
    }
  return (
    <div className='Contact'>
        <Header pres="contact-me" hero={{thirdSection:"Get in touch", secondSection:"Let's connect today", secondShow:true, thirdShow:true}}/>

        <div className="contacts">
            <h1 className='sectionHead'>Contact me</h1>

            <div className="socials">
                <b>Get in touch with me through my socials</b>

                <ul className="socialsList">
                    <li onClick={()=>navigate("#")}>
                        <img className='imgFill' src={img} alt="img" />
                        <i className="socialIcn">
                            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_17_5548)">
                                <path d="M20.625 10C20.625 4.47719 16.1478 0 10.625 0C5.10219 0 0.625 4.47719 0.625 10C0.625 14.9912 4.28187 19.1284 9.0625 19.8785V12.8906H6.52344V10H9.0625V7.79687C9.0625 5.29062 10.5555 3.90625 12.8397 3.90625C13.9338 3.90625 15.0781 4.10156 15.0781 4.10156V6.5625H13.8172C12.5749 6.5625 12.1875 7.33336 12.1875 8.12422V10H14.9609L14.5176 12.8906H12.1875V19.8785C16.9681 19.1284 20.625 14.9913 20.625 10Z" fill="#1877F2"/>
                                <path d="M14.5176 12.8906L14.9609 10H12.1875V8.12422C12.1875 7.33328 12.5749 6.5625 13.8172 6.5625H15.0781V4.10156C15.0781 4.10156 13.9338 3.90625 12.8396 3.90625C10.5555 3.90625 9.0625 5.29063 9.0625 7.79688V10H6.52344V12.8906H9.0625V19.8785C9.57939 19.9595 10.1018 20.0001 10.625 20C11.1482 20.0001 11.6706 19.9595 12.1875 19.8785V12.8906H14.5176Z" fill="white"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_17_5548">
                                <rect width="20" height="20" fill="white" transform="translate(0.625)"/>
                                </clipPath>
                                </defs>
                            </svg>
                        </i>
                    </li>
                    <li onClick={()=>navigate("#")}>
                        <img className='imgFill' src={img} alt="img" />
                        <i className="socialIcn">
                            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_17_5550)">
                                <path d="M10.625 0C5.1 0 0.625 4.475 0.625 10C0.625 14.425 3.4875 18.1625 7.4625 19.4875C7.9625 19.575 8.15 19.275 8.15 19.0125C8.15 18.775 8.1375 17.9875 8.1375 17.15C5.625 17.6125 4.975 16.5375 4.775 15.975C4.6625 15.6875 4.175 14.8 3.75 14.5625C3.4 14.375 2.9 13.9125 3.7375 13.9C4.525 13.8875 5.0875 14.625 5.275 14.925C6.175 16.4375 7.6125 16.0125 8.1875 15.75C8.275 15.1 8.5375 14.6625 8.825 14.4125C6.6 14.1625 4.275 13.3 4.275 9.475C4.275 8.3875 4.6625 7.4875 5.3 6.7875C5.2 6.5375 4.85 5.5125 5.4 4.1375C5.4 4.1375 6.2375 3.875 8.15 5.1625C8.95 4.9375 9.8 4.825 10.65 4.825C11.5 4.825 12.35 4.9375 13.15 5.1625C15.0625 3.8625 15.9 4.1375 15.9 4.1375C16.45 5.5125 16.1 6.5375 16 6.7875C16.6375 7.4875 17.025 8.375 17.025 9.475C17.025 13.3125 14.6875 14.1625 12.4625 14.4125C12.825 14.725 13.1375 15.325 13.1375 16.2625C13.1375 17.6 13.125 18.675 13.125 19.0125C13.125 19.275 13.3125 19.5875 13.8125 19.4875C15.798 18.8178 17.5233 17.5421 18.7455 15.84C19.9677 14.138 20.625 12.0954 20.625 10C20.625 4.475 16.15 0 10.625 0Z" fill="black"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_17_5550">
                                <rect width="20" height="20" fill="white" transform="translate(0.625)"/>
                                </clipPath>
                                </defs>
                            </svg>
                        </i>
                    </li>
                    <li onClick={()=>navigate("#")}>
                        <img className='imgFill' src={img} alt="img" />
                        <i className="socialIcn lnd">
                            <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_17_5549)">
                                <path d="M0.625 1.4325C0.625 0.64125 1.2825 0 2.09375 0H19.1562C19.9675 0 20.625 0.64125 20.625 1.4325V18.5675C20.625 19.3587 19.9675 20 19.1562 20H2.09375C1.2825 20 0.625 19.3587 0.625 18.5675V1.4325ZM6.80375 16.7425V7.71125H3.8025V16.7425H6.80375ZM5.30375 6.4775C6.35 6.4775 7.00125 5.785 7.00125 4.9175C6.9825 4.03125 6.35125 3.3575 5.32375 3.3575C4.29625 3.3575 3.625 4.0325 3.625 4.9175C3.625 5.785 4.27625 6.4775 5.28375 6.4775H5.30375ZM11.4388 16.7425V11.6988C11.4388 11.4288 11.4587 11.1587 11.5387 10.9662C11.755 10.4275 12.2488 9.86875 13.0788 9.86875C14.165 9.86875 14.5988 10.6962 14.5988 11.9113V16.7425H17.6V11.5625C17.6 8.7875 16.12 7.4975 14.145 7.4975C12.5525 7.4975 11.8387 8.3725 11.4388 8.98875V9.02H11.4188L11.4388 8.98875V7.71125H8.43875C8.47625 8.55875 8.43875 16.7425 8.43875 16.7425H11.4388Z" fill="black"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_17_5549">
                                <rect width="20" height="20" fill="white" transform="translate(0.625)"/>
                                </clipPath>
                                </defs>
                            </svg>
                        </i>
                    </li>
                </ul>
            </div>
            <div className="mailForm">
                <b>or with mail</b>

                <div className="form">
                    <div className="inputs">
                        <label htmlFor="name">
                            <Input contentEditable placeholder="Name e.g John doe: " />
                        </label>
                        <label htmlFor="Email">
                            <Input contentEditable placeholder="Email e.g doe@email.com: " />
                        </label>
                    </div>
                    <Textarea title="Message" placeholder="Type message" />
                    <Button>Send message
                        <i className="ICNSend">
                            <svg width="27" height="29" viewBox="0 0 27 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.4033 28.4285L7.94858 20.5896L23.563 9.2106L6.24716 17.5964L0.93752 8.25268L26.6288 7.13387L12.4033 28.4285Z" fill="var(--white)"/>
                            </svg>

                        </i>
                    </Button>
                </div>

                
            </div>
            <div className="address">
                <div className="imgBox">
                    <img src={img} className='imgFill' alt="img" />
                </div>
                <div className="addressTextBox">
                    <address>
                        2118 Thornridge Cir.
                        <br />
                        Syracuse, Connecticut
                        <br />
                        35624
                        <Button>Connect with me
                            <i className="ICNMail">
                                <svg width="28" height="20" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_12_485)">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M4.07849 0C3.16257 0 2.28416 0.373847 1.6365 1.0393C0.988849 1.70475 0.625 2.6073 0.625 3.54839V16.4516C0.625 17.3927 0.988849 18.2952 1.6365 18.9607C2.28416 19.6262 3.16257 20 4.07849 20H24.1715C25.0874 20 25.9658 19.6262 26.6135 18.9607C27.2612 18.2952 27.625 17.3927 27.625 16.4516V3.54839C27.625 2.6073 27.2612 1.70475 26.6135 1.0393C25.9658 0.373847 25.0874 0 24.1715 0H4.07849ZM8.38593 5.33677C8.18121 5.19951 7.93257 5.14941 7.69255 5.19705C7.45254 5.24469 7.23995 5.38635 7.09973 5.59209C6.9595 5.79782 6.90261 6.05152 6.94109 6.29955C6.97957 6.54759 7.1104 6.77054 7.30593 6.92129L13.585 11.4374C13.7433 11.5512 13.9318 11.6123 14.125 11.6123C14.3182 11.6123 14.5067 11.5512 14.665 11.4374L20.9441 6.92129C21.0498 6.85038 21.1406 6.75834 21.2111 6.65065C21.2815 6.54295 21.3302 6.42181 21.3541 6.29441C21.3781 6.16701 21.3768 6.03596 21.3505 5.90906C21.3242 5.78215 21.2733 5.66199 21.2008 5.5557C21.1284 5.44942 21.0359 5.35919 20.9288 5.29038C20.8218 5.22157 20.7023 5.17559 20.5776 5.15516C20.4529 5.13474 20.3255 5.14029 20.2029 5.17149C20.0803 5.20269 19.9651 5.2589 19.8641 5.33677L14.125 9.46452L8.38593 5.33677Z" fill="var(--primary)"/>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_12_485">
                                    <rect width="27" height="20" fill="white" transform="translate(0.625)"/>
                                    </clipPath>
                                    </defs>
                                </svg>


                            </i>
                        </Button>
                    </address>
                </div>
            </div>
        </div>
        <Footer pres='contact-me'/>
    </div>
  )
}

export default Contact