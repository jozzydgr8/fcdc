import businessLogo from '../asset/businessLogo.png'
import { FlatButton } from './FlatButton'
import { handleRequest } from './handleRequest'


export const Navbar = () => {
 

  return (
    <nav className="navbar navbar-expand-lg bg-light navbar-light" data-bs-theme='light' >
      <div className="container-fluid">
        <img className='navbar-brand' src={businessLogo} alt='logo' />

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <a href={`/`} className="nav-link active">
                   Home
              </a>
            </li>
            <li className="nav-item">
              <a href={`#about`} className="nav-link active">
                    About us
              </a>
            </li>

            <li className="nav-item">
              <a href={`#services`} className="nav-link active">
                    Services 
              </a>
            </li>
           
            
            
            <li className="nav-item">
           
                <FlatButton title='Contact Us' className='btn btnPrimary 'onClick={()=>handleRequest('Hi, I’d like to enquire about FCDCN’s food commodities supply.')}/>
             
            </li>

          </ul>
        </div>
      </div>
    </nav>
  )
}