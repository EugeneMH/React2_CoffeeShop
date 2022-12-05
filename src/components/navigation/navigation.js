import { Link } from 'react-router-dom';

import logoHeader from '../../assets/Logo-1.png';
import logoFooter from '../../assets/coffee-beans.png';
import logo2 from '../../assets/Beans logo.svg';

import './navigation.css'

const NavigationHeader = () => {
    return (
        <nav>
            <Link className="coffeeHouse" to="/">
                <img className="logo" src={logoHeader} alt=""></img>
                <div>Coffee house</div>
            </Link>
            <Link to="/coffeePage">Our coffee</Link>
            <Link to="/forYourPleasure">For your pleasure</Link>
        </nav>
    )
}

const NavigationFooter = () => {
    return (
        <footer>
            <div className="a1">
                <Link className="coffeeHouse" to="/">
                    <img className="logo" src={logoFooter} alt=""></img>
                    <div>Coffee house</div>
                </Link>
                <Link to="/coffeePage">Our coffee</Link>
                <Link to="/forYourPleasure">For your pleasure</Link>
            </div>
            <img alt="" src={logo2}></img>
        </footer>
    )
}

export {NavigationFooter, NavigationHeader};