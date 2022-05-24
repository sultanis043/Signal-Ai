import './sidenav.css';
import { AiOutlineHome } from 'react-icons/ai'

function SideNav() {
    return (
        <div className="si-navlside">
            <div className="si-navlmain">
                <div className='si-navsignal'>
                    <a href='Homepage' className="siSideNavButton" id='si-navsignalai'>
                        SIGNAL AI
                    </a>
                </div>
                <div className='si-navmainDiv'>
                    <a href='#' className='siNavmainlines'>
                        <div className='siDivline'></div>
                        <div className='siDivline'></div>
                        <div className='siDivline'></div>
                    </a>
                </div>
            </div>
            <div>
                <ul>
                    <a href="#" className="siSideNavButton">
                        {/* <div> */}
                        <AiOutlineHome />
                        {/* <span> */}
                        Home
                        {/* </span> */}
                        {/* </div> */}
                    </a>

                    <li>
                        <a href="#" className="siSideNavButton">

                            <snap>Quailitative Estimation</snap>

                        </a>
                    </li>
                    <li>
                        <a href="#" className="siSideNavButton">

                            <snap>Quantitative Estimation</snap>

                        </a>
                    </li>
                    <li>
                        <a href="#" className="siSideNavButton">

                            <snap>Run Result</snap>

                        </a>
                    </li>
                    <li>
                        <a href="" className="siSideNavButton">

                            <snap>Signal</snap>

                        </a>
                    </li>
                    <li>
                        <a href="" className="siSideNavButton">

                            <snap>Signal monitoring</snap>

                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default SideNav;