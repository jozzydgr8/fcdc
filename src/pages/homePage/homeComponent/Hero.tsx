import { FlatButton } from "../../../shared/FlatButton"
import { handleRequest } from "../../../shared/handleRequest"
import {stats} from "../../../data"
import {useEffect} from "react"
import {RightOutlined} from "@ant-design/icons"

export const Hero = ()=>{

     useEffect(() => {
    const headerText = document.querySelector('.heroWrite');
    headerText?.classList.add('sectionAnimationLeft');

    const headerButton = document.querySelector('.heroBottom');
    headerButton?.classList.add('sectionAnimationUp');

    const headerImage = document.querySelector('.subtopic');
    headerImage?.classList.add('sectionAnimationUp');

    const heroBadge = document.querySelector('.heroBadge');
    heroBadge?.classList.add('sectionAnimationDown');
    }, []);
    return(
        <section id="hero">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-8">
                            <div className="heroBadge">
                        
                                <span className='homeBadgeParent '> 
                                    <span className='homeBadge'></span>
                                    Trusted Food Supplier | RC: 1869351
                                </span>

                            </div>
                            <br/>
                            <h1 className='heroWrite'>
                                Reliable distribution of <span style={{ color: 'var(--bright-blue)' }}>essential food commodities </span>
                                for businesses that depend on a steady supply.
                            </h1>
                            <br/>
                            <p className='subtopic'>
                                FCDCN sources and delivers sugar, flour, salt and other staple food products to businesses, retailers, wholesalers and consumers across Nigeria — with dependable supply, competitive pricing and timely delivery you can count on.
                            </p>

                            <br/> <br/>
                            <div className='heroBottom'>
                                <FlatButton icon={<RightOutlined />} title='Get your qoute' className='btn btnPrimary btn-xl ' onClick={()=>handleRequest('Hi, I’d like to get a free consultation for a construction project. I’d appreciate some guidance on the best options.')}/>    
                                <a href='/#services' className='btn btnSecondary btn-xl'>View Our Products</a>
                            </div>
                                <br/>
                            <div>
                                <ul className='d-flex gap-5 flex-wrap'>
                                    <li>    
                                        Bulk pricing
                                    </li>
                                    <li>Nationwide delivery</li>
                                    <li> No-obligation quote</li>
                                </ul>
                            </div>

                           
                            

                    </div>

                </div>

                <div className='row'>
                    {
                        stats.map((stat,index)=>(
                            <div key={index} className='col-md-3 mt-4'>
                                <div className='statItem animate-up'>
                                    <stat.icon className="icon-style" />
                                    <h3>{stat.value}</h3>
                                    <p>{stat.label}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>

            </div>
        </section>
    )
}