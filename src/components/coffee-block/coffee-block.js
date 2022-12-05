import { useParams } from 'react-router-dom';

import { NavigationHeader, NavigationFooter } from "../navigation/navigation";

import './coffee-block.css';

import bg from '../../assets/CoffeeShopBG.png';
import coffeeBlock from '../../assets/coffeeBlock.jpg';
import logo2 from '../../assets/Beans logo.svg';

const CoffeeBlock = ({data}) => {

    let {id} = useParams();

    const elem = data.filter(item => {return item.key === id})
    const {country, price} = elem[0];
 
    return (
        <>
            <img className="coffeePageBackground" alt="" src={bg}></img>
            <header>
                <NavigationHeader/>
                <div className="coffeePageTitle">Our Coffee</div>
            </header>
            <div className="aboutWrapper">
            <img className="coffeeBlock" src={coffeeBlock} alt=""/>
                <div className="aboutSection">
                    <div>About it</div>
                    <img src={logo2} alt=""></img>
                    <span><b>Country: </b>{country}</span>
                    <span><b>Description: </b>Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                    Afraid at highly months do things on at. Situation recommend objection do intention
                    As greatly removed calling pleased improve an. Last ask him cold feel
                    met spot shy want. Children me laughing we prospect answered followed. At it went
                    is song that held help face.
                    </span>
                    <span><b>Price: <b className="price">{price}</b></b></span>
                </div>
            </div>
            <NavigationFooter/>
        </>

    )
}

export default CoffeeBlock;