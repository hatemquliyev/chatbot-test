import './header.scss'
import Icon1 from './icon1.svg'
import Icon2 from './icon2.svg'
import { themeAtom } from '../../App'
import { useRecoilState } from 'recoil'

const Header = () => {
    const [theme] = useRecoilState(themeAtom)
    return (
        <>
        <div className="logo">
            {theme === "dark_theme" ? <img src={Icon1} alt="" /> : <img src={Icon2} alt="" />}
        </div>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>FAQ</li>
            <li>Contact</li>
            <li>Policy</li>
        </ul>
        </>

    );
  }
export default Header