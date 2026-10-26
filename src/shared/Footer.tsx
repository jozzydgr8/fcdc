import {ArrowRightOutlined, PhoneOutlined, MailOutlined} from '@ant-design/icons'
import businessLogo from '../asset/businessLogo.png'
import { FlatButton } from './FlatButton'
import { handleRequest } from './handleRequest'
export const Footer = ()=>{
    const year = new Date().getFullYear()
    return(
        <footer>
            <div className="container-fluid">
                <div className="row">
                    <div className='col-md-3'>
                        <img src={businessLogo} alt='ynux_business_logo' style={{width:"60%"}}/>
                    
                    <br/><br/>
                    <p>
                        Foods and Commodity Distribution Company of Nigeria Limited (FCDCN) supplies 
                        and distributes essential food commodities — sugar, 
                        flour, salt and more — to businesses, retailers, 
                        wholesalers and consumers across Nigeria.
                    </p>
                    
                       <div className='d-flex align-items-center gap-3 mb-2'>
                         <PhoneOutlined className='icon-style'  />
                        <a
                            href="tel:08032965669"

                        >
                             08032965669
                        </a>
                        </div>

                        <div className='d-flex align-items-center gap-3'>
                            <MailOutlined className='icon-style' /> 
                        <a
                            href="mailto:fc.distributioncompany@gmail.com"
                            
                        >
                            fc.distributioncompany@gmail.com
                        </a>
                        </div>
                    
                    </div>

                    <div className="col-md-3">
                        <h3>COMPANY</h3><br/>
                        <a href='/#about'>About us</a><br/><br/>

                        <FlatButton className=' borderlessbtn' title='Contact Us' onClick={()=>handleRequest('Hi, I’d like to enquire about FCDCN’s food commodities supply.')}/><br/><br/>
                    </div>

                    <div className="col-md-3">
                        <h3>Products</h3><br/>
                        <a href="#products">Our Products</a><br/><br/>
                        <a href="#services">Services</a><br/><br/>
                        <a href="#products">Who We Serve</a><br/><br/>
                        <a href="#whatwedo">Why Choose Us</a><br/><br/>
                        
                    </div>

                    <div className="col-md-3">
                        <h3>Get in touch</h3><br/>
                       
                         <FlatButton className=' borderlessbtn' title='Request quote' onClick={()=>handleRequest('Hi, I’d like to request a quote for FCDCN’s food commodities supply.')}/><br/><br/>
                       
                        <br/>
                        <FlatButton onClick={()=>handleRequest('Hi, I’d like to get a free consultation .')} title='Free Consultation' icon={<ArrowRightOutlined/>} className='btn btn-lg btnPrimary'/><br/>

                    </div>


                </div>
                <hr/>
                <p >All Rights Reserved © FCDCN {year}</p><br/>
                <a style={{color:"var(--dark-blue)"}} href='https://jozzycodes.com'target='_blank' rel="noreferrer"><small>Website created by jozzycodes</small></a>

            </div>
        </footer>
    )
}