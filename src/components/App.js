import React, {Component} from 'react';

//Componentes
import Header from './Global/Header';
import Content from './Global/Content';
import Footer from './Global/Footer';

export default class App extends Component{
  render(){
    return(
      <div className="App">
        <Header/>
        <Content/>
        <Footer />
      </div>
    );
  }
}
