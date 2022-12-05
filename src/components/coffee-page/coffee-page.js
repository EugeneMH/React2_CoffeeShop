import {Component} from 'react';
import { Link } from 'react-router-dom';

import { NavigationHeader, NavigationFooter } from "../navigation/navigation";

import './coffee-page.css';

import bg from '../../assets/CoffeeShopBG.png';
import smell from '../../assets/smell.png';
import logo2 from '../../assets/Beans logo.svg';

class CoffeePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            value: '',
            data: this.props.data,
            filter: ''
        }
    }

    onChange(e) {
        this.setState(({value}) => ({
            value: e.target.value
        }))

        this.props.onUpdateSearch(e.target.value)
    }

    onFilter(filter) {
        this.setState({
            filter: filter
        })

        this.props.onFilter(filter);
    }

    render() {

        const elems = this.props.data.map(item => {
            const {name, price, img, key, country, best} = item;
            if (!best) {
                return (
                    <li key={key}>
                        <Link to={`/${key}`}>
                            <img alt="" src={require(`../../assets/${img}`)}></img>
                            <span>{name}</span>
                            <span>{country}</span>
                            <span>{price}</span>
                        </Link>
                    </li>
                )
            } else {
                return '';
            }
        })

        return (
            <>
            <img className="coffeePageBackground" alt="" src={bg}></img>
                <header>
                    <NavigationHeader/>
                    <div className="coffeePageTitle">Our Coffee</div>
                </header>
                <section>
                    <div className="aboutWrapper">
                        <img src={smell} alt=""/>
                        <div>
                            <div>About our beans</div>
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
                    <div className="controls">
                        <div>
                            <div>Looking for</div>
                            <input type="text"
                                   placeholder="start typing here..."
                                   value={this.state.value}
                                   onChange={(e) => this.onChange(e)}/>
                        </div>
                        <div>
                            <div>Or filter</div>
                            <button onClick={() => this.onFilter('Brazil')}>Brazil</button>
                            <button onClick={() => this.onFilter('Kenya')}>Kenya</button>
                            <button onClick={() => this.onFilter('Columbia')}>Columbia</button>
                        </div>
                    </div>
                    <div className="products">
                        {elems}
                    </div>
                </section>
                <NavigationFooter/>
            </>
        )
    }
}

export default CoffeePage;
