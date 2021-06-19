import logo from './logo.svg'
import {Link} from 'react-router-dom'
function Navigation(props){
    return <>
    <nav className="navbar navbar-expand-lg fixed-top shadow navbar-light bg-white">
        <div className="container-fluid">
          <div className="d-flex align-items-center"><a className="navbar-brand py-1" href="index.html"><img src={logo} alt="Directory logo"></img></a>
          </div>
          <button className="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation"><i className="fa fa-bars"></i></button>
         
          <div className="collapse navbar-collapse" id="navbarCollapse">
            
            <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link className="nav-link" to='/aboutus'>About Us</Link></li>
            <li className="nav-item"><Link className="nav-link" to='/myorder'>Orders</Link></li>
              <li className="nav-item"><Link className="nav-link" to='/signin'>Sign in</Link></li>
              <li className="nav-item"><Link className="nav-link" to='/signup'>Sign up</Link></li>
             
            </ul>
          </div>
        </div>
      </nav>
    </>
}
export default Navigation;