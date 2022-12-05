import { Component } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import MainPage from "./components/main-page/main-page";
import CoffeePage from "./components/coffee-page/coffee-page";
import CoffeeBlock from "./components/coffee-block/coffee-block";
import ForYourPleasure from "./components/for-your-pleasure/for-your-pleasure";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data : [
        {name: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: '6.99$', img: 'product.png', key: '1', best:false},
        {name: 'AROMISTICO Coffee 1 kg', country: 'Kenya', price: '6.99$', img: 'product.png', key: '2', best:false},
        {name: 'AROMISTICO Coffee 1 kg', country: 'Columbia', price: '6.99$', img: 'product.png', key: '3', best:false},
        {name: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: '6.99$', img: 'product.png', key: '4', best:false},
        {name: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: '6.99$', img: 'product.png', key: '5', best:false},
        {name: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: '6.99$', img: 'product.png', key: '6', best:false},
        {name: 'Solimo Coffee Beans 2 kg', country:'Columbia', price: '10.73$', img: 'best1.png', key: '8', best:true},
        {name: 'Presto Coffee Beans 1 kg', country:'Columbia', price: '15.99$', img: 'best2.png', key: '9', best:true},
        {name: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: '6.99$', img: 'product.png', key: '7', best:true},
      ],
      term : '',
      filter: ''
    }
  }

  searchItems = (data, term) => {
    if (term.length === 0) {
      return data;
    }

    return data.filter(item => {
      return item.name.indexOf(term) > -1
    })
  }

  filterItems = (data, button) => {
    switch(button) {
      default: return data;
      case 'Brazil': return data.filter(item => {return item.country === 'Brazil'})
      case 'Kenya': return data.filter(item => {return item.country === 'Kenya'})
      case 'Columbia': return data.filter(item => {return item.country === 'Columbia'})
    }
  }

  onUpdateSearch = (term) => {
    this.setState({
      term : term
    })
  }

  onFilter = (filter) => {
    this.setState({
      filter: filter
    })
  }

  render() {

    let visibleData = this.filterItems(this.searchItems(this.state.data, this.state.term), this.state.filter);

    return (
      <Router>
        <Routes>
          <Route path="/forYourPleasure" element={<ForYourPleasure data={this.state.data}/>}/> 
          <Route path="/" element={<MainPage data={this.state.data}/>}/>
          <Route path="/coffeePage" element={<CoffeePage 
            data={visibleData}
            onUpdateSearch={this.onUpdateSearch}
            onFilter={this.onFilter}/>}/>
          <Route path="/:id" element={<CoffeeBlock data={this.state.data}/>}></Route>
        </Routes>
      </Router>
  
    );
  }


}

export default App;


