import { commodities } from "../../../data"

export const Products = ()=>{
    return(
        <section>
            <div className='container-fluid'>

                <div className="row ">

                    <div className="col-md-6 mb-2">
                        <p style={{color:'var(--bright-blue)'}}>
                            Our Commodities
                        </p>
                        <h2 className='sub-heading'>
                            Staple food products, supplied and delivered
                        </h2>
                        <p className='subtopic'>
                        We specialise in the distribution of the essential food commodities your business runs on — sourced from trusted suppliers and delivered in dependable volumes.
                        </p>
                    </div>

                </div>

                <div className="row ">
                    {commodities.map((commodity,index)=>(
                        <div className="col-md-3 mt-4" key={index}>
                            <div className="commodityItem animate-up">
                                <h3 className='sub-heading'>{commodity.title}</h3>
                                <p>{commodity.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}