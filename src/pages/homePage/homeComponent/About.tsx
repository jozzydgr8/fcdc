import imageone from '../../../asset/warehouse.jpg';
import imageTwo from '../../../asset/checkingsupply.avif';
export const About = ()=>{
    return(
        <section>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6">
                        <p className="subtopic" style={{color:'var(--bright-blue)'}}>About FCDCN</p>
                        <h2 className="sub-heading">A dependable name in Nigeria's food supply chain</h2>
                        <p className="subtopic">
                            Foods and Commodity Distribution Company of Nigeria Limited (FCDCN) is dedicated to supplying 
                            and distributing essential food products across the country. Our operations are built around efficient sourcing, 
                            dependable supply and timely delivery — so our customers can always rely on us.
                        </p><br/>
                        <p>
                            We are committed to building long-term relationships with our customers and suppliers through quality products, competitive pricing, reliable distribution and professional service.
                        </p>
                    </div>

                    <div className="col-md-3">
                        <div style={{backgroundImage:`url(${imageone})`, backgroundSize:'cover', backgroundPosition:"center center", backgroundRepeat:'no-repeat', minHeight:"300px", borderRadius:'10px'}} className='h-100'></div>
                    </div>
                    <div className="col-md-3">
                        <div style={{backgroundImage:`url(${imageTwo})`, backgroundSize:'cover', backgroundPosition:"center center", backgroundRepeat:'no-repeat', minHeight:"300px", borderRadius:'10px'}}></div> 
                    </div>
                </div>
            </div>
        </section>
    )
}