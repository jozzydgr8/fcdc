import { whyChooseUs } from "../../../data"

export const WhatWeDo = ()=>{
    return(
        <section id="whatwedo">
            <div className="container-fluid">
                <div className="row ">

                    <div className="col-md-6 mb-2">
                        <p style={{color:'var(--bright-blue)'}}>
                            What we do
                        </p>
                        <h2 className='sub-heading' style={{color:'white'}}>
                            End-to-end distribution services
                        </h2>
                        <p className='subtopic'>
                       From sourcing to your doorstep, we manage every step so your supply stays dependable.
                        </p>
                    </div>

                </div>

                <div className="row">
                    {
                        whyChooseUs.map((item, index)=>(
                            <div className="col-md-3 mt-4" key={index}>
                                <div className="statItem animate-up">
                                    <item.icon className="icon-style mb-2"/>
                                    <h3 className="sub-heading" style={{color:'white'}}>{item.title}</h3>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}