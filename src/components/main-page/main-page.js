import { Component } from 'react';
import { NavigationFooter, NavigationHeader } from '../navigation/navigation';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import './main-page.css';
import bg from '../../assets/Main-bg.jpg';
import logo1 from '../../assets/Beans logo-1.svg';
import logo2 from '../../assets/Beans logo.svg';
import bgPaper from '../../assets/bgPaper.png';

class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showMore: false
        }
    }

    elems = this.props.data.map(item => {
        const {name, price, img, key, best} = item
        if (best) {
            return (
                <Link to={`/${key}`} key={key}>
                    <div>
                        <img alt="" src={require(`../../assets/${img}`)}></img>
                        <span>{name}</span>
                        <span>{price}</span>
                    </div>
                </Link>
            )
        }
        return '';
    })
    
    toggleShowMore = () => {
        this.setState(({showMore}) => ({
            showMore: !showMore
        }))
    }

    render() {

        const btn = this.state.showMore ? 'Hide' : 'More';

        return(
            <>
            <img className="mainBackground" src={bg} alt=""></img>
                <header className="head">
                    <NavigationHeader/>
                <div className="mainTitle">
                    <div>Everything you love about coffee</div>
                    <img alt="" src={logo1}></img>
                    <p>We make every day full of energy and taste</p>
                    <p>Want to try our beans?</p>
                    <button onClick={this.toggleShowMore}>{btn}</button>
                    <br></br>
                    <CSSTransition 
                        in={this.state.showMore} 
                        timeout={1000} 
                        classNames="transition"
                        mountOnEnter
                        unmountOnExit>
                        <div className={'more'}>Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                        Afraid at highly months do things on at. Situation recommend objection do intention
                        so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                        met spot shy want. Children me laughing we prospect answered followed. At it went
                        is song that held help face.
                        <br></br>
                        Now residence dashwoods she excellent you. Shade being under his bed her, Much
                        read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                        horrible but confined day end marriage. Eagerness furniture set preserved far
                        recommend. Did even but nor are most gave hope. Secure active living depend son
                        repair day ladies now.</div>
                    </CSSTransition>
                </div>
                </header> 
                <section className="section1">
                    <div className="title">About us</div>
                    <img alt="" src={logo2}></img>
                    <span>Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                    Afraid at highly months do things on at. Situation recommend objection do intention
                    so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                    met spot shy want. Children me laughing we prospect answered followed. At it went
                    is song that held help face.
                    <br></br>
                    Now residence dashwoods she excellent you. Shade being under his bed her, Much
                    read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                    horrible but confined day end marriage. Eagerness furniture set preserved far
                    recommend. Did even but nor are most gave hope. Secure active living depend son
                    repair day ladies now.</span>
                </section>
                <section style={{backgroundImage: 'url(' + bgPaper + ')'}}className="section2">
                    <div className="title">Our best</div>
                    <div className="ourBest">
                        {this.elems}
                    </div>
                </section>
                <NavigationFooter/>
            </>
        )
    } 
}

export default MainPage;