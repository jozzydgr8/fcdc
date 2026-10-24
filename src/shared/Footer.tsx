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
                    
                        <div>
                            <PhoneOutlined style={{color:'var(--primary-green)'}}/> 08032965669
                        </div>
                    <div>
                        <MailOutlined style={{color:'var(--primary-green)'}} /> fc.distributioncompany@gmail.com <br/>
                    </div>
                    <div>

                    </div>
                    </div>

                    <div className="col-md-3">
                        <h3>COMPANY</h3><br/>
                        <a href='/#about'>About us</a><br/><br/>

                        <FlatButton className=' borderlessbtn' title='Contact Us'/><br/><br/>
                    </div>

                    <div className="col-md-3">
                        <h3>Products</h3><br/>
                        <p>Our Products</p>
                        <p>Services</p>
                        <p>Who We Serve</p>
                        <p>Why Choose Us</p>
                        
                    </div>

                    <div className="col-md-3">
                        <h3>Get in touch</h3><br/>
                        <p>
                           Place an Order
                        </p>
                        <p>Request a Quote</p>
                        <p>Partners & Suppliers</p>
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