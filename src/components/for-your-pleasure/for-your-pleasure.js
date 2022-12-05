import { NavigationHeader, NavigationFooter } from "../navigation/navigation";
import { Link } from 'react-router-dom';

import './for-your-pleasure.css';

import bg from '../../assets/CoffeeShopBG.png';
import forYourPleasure from '../../assets/forYourPleasure.png';
import logo2 from '../../assets/Beans logo.svg';

const ForYourPleasure = ({data}) => {

    const elems = data.map(item => {
        const {name, price, img, key, country, best} = item;
        if (!best) {
            return (
                <Link key={key} to={`/${key}`}>
                    <img alt="" src={require(`../../assets/${img}`)}></img>
                    <span>{name}</span>
                    <span>{country}</span>
                    <span>{price}</span>
                </Link>
            )
        }
        return '';
    })
    

    return (
        <>
        <img className="coffeePageBackground" alt="" src={bg}></img>
            <header>
                <NavigationHeader/>
                <div className="coffeePageTitle">For your pleasure</div>
            </header>
            <section>
                <div className="aboutWrapper">
                    <img src={forYourPleasure} alt=""/>
                    <div className="aboutOurGoods">
                        <div>About our goods</div>
                        <img src={logo2} alt=""></img>
                        <span>Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                        <br/>
                        <br/>
                        Afraid at highly months do things on at. Situation recommend objection do intention
                        so questions. 
                        <br/>
                        <br/>
                        As greatly removed calling pleased improve an. Last ask him cold feel
                        met spot shy want. Children me laughing we prospect answered followed. At it went
                        is song that held help face.
                        </span>
                    </div>
                </div>
                <hr/>
                <div className="products">
                    {elems}
                </div>
            </section>
            <NavigationFooter/>
        </>
    )
}

export default ForYourPleasure;