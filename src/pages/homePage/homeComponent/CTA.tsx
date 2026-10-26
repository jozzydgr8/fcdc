import { FlatButton } from "../../../shared/FlatButton";
import {RightOutlined} from '@ant-design/icons';
import { handleRequest } from "../../../shared/handleRequest";

export const CTA = ()=>{
    return(
        <section id="cta">
            <div className="container-fluid text-center">
                <h2 className="sub-heading" style={{color:'white'}}>Ready to secure your food supply?</h2>
                <p>
                    Get a competitive quote for sugar, flour, salt and other essential commodities — delivered reliably, wherever you operate in Nigeria.
                </p>
                <br/>
                <FlatButton className="btn btn-xl btn-light" title="Get quote" icon={<RightOutlined/>} onClick={()=>handleRequest('Hi, I’d like to request a quote for FCDCN’s food commodities supply.')}/>
            </div>
        </section>
    )
}