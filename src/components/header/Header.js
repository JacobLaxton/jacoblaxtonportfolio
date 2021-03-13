import { Link } from 'react-router-dom'
import './Header.css'
import logo from '../../media/Logo.png'

function Header (){
    return(    
        <div className='header'>
            <img src={logo} className='image'/>
            
            <div className='nav'>
                <Link to='/'>
                    Home
                </Link>
                <Link to='/about'>
                    About
                </Link>
            </div>
        </div>
    );
}

export default Header;