import { FlatButton } from "../../../shared/FlatButton";
import {RightOutlined} from '@ant-design/icons';

export const CTA = ()=>{
    return(
        <section id="cta">
            <div className="container-fluid text-center">
                <h2 className="sub-heading" style={{color:'white'}}>Ready to secure your food supply?</h2>
                <p className="subtopic">
                    Get a competitive quote for sugar, flour, salt and other essential commodities — delivered reliably, wherever you operate in Nigeria.
                </p>
                <br/>
                <FlatButton className="btn btn-xl btn-success" title="Get quote" icon={<RightOutlined/>}/>
            </div>
        </section>
    )
}