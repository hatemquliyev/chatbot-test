import './header.scss'
import Icon1 from './icon1.svg'
import Icon2 from './icon2.svg'
import { themeAtom } from '../../App'
import { useRecoilState } from 'recoil'

const Header = () => {
    const [theme] = useRecoilState(themeAtom)
    return (
        <div className='container'>
            <div >
                <h1 className={`text-center ${theme === "dark_theme" ? "text-dark" : "text-dark"}`}>IFO Corporation Introduction Page Test</h1>
            </div>
        {/* <ul>
            <li>Home</li>
            <li>About</li>
            <li>FAQ</li>
            <li>Contact</li>
            <li>Policy</li>
        </ul> */}
        </div>

    );
  }
export default Header