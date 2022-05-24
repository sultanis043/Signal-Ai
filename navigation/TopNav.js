import { Button } from 'react-bootstrap';
import './topnav.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import profilepic from './image/profilepic.jpg';
import { FaCog } from 'react-icons/fa'
import { IoIosNotifications } from 'react-icons/io'
import { GiSteeringWheel } from 'react-icons/gi'

function TopNav() {
    return (
        <nav className="si-Nav">

            <div className="si-subNavLogo">
                <div>
                    <a href="">
                        <GiSteeringWheel className='siTopNavlogo1' />
                    </a>
                </div>
                <div>
                    <a href="">
                        <FaCog className='siTopNavlogo2' />
                    </a>
                </div>
                <div>
                    <a href="">
                        <IoIosNotifications className='siTopNavlogo3' />
                    </a>
                </div>
            </div>
            <div>
                <button className="btn btn-secondary dropdown-toggle si-topNavButton " type="button" id="dropdownMenuButton1" >
                    Sultan Salahuddin
                </button>
                {/* <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul> */}

            </div>
            <div>
                <a className="" href="">
                    <img className="topNav-pPic" src={profilepic} alt="profile Pic" />
                </a>
            </div>

        </nav >
    )
}

export default TopNav;