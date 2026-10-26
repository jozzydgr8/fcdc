import { serve } from "../../../data"
import {CheckOutlined} from '@ant-design/icons';
import componentImage from '../../../asset/Teamwork-Among-Fresh-Produce-Crates.png'

export const Service = ()=>{
    return(
        <section id="services" >
            <div className="container-fluid">
                <div className="row ">
                    <div className="col-md-6 mb-2 ">
                        <div className='h-100'  style={{borderRadius:'10px',backgroundImage: `url(${componentImage})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '400px'}}></div>
                    </div>
                    <div className="col-md-6 mb-2 h-100">
                        <div>
                            <p style={{color:'var(--bright-blue)'}}>Who we serve</p>
                            <h2 className='sub-heading'>Built for the whole supply chain</h2>
                            <p className='subtopic'>
                                Whether you run a retail shop, a food-service business or a wholesale operation, FCDCN delivers the right commodities at the right price — when you need them.
                            </p>

                            {
                                serve.map((item,index)=>(
                                    <div key={index} className=" mb-3 d-flex gap-3 align-items-center animate-up">
                                            <CheckOutlined className='icon-style'/>
                                        <div>
                                            <h5 className='sub-heading'>{item.title}</h5>
                                            <p>{item.description}</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}