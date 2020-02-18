import React from 'react';
import classes from './App.module.css';
import Productpreview from './Productpreview';
import Sidesection from './Sidesection';
import Topbar from './Topbar';
import ProductData from './ProductData';

class App extends React.Component {
  state = {
    productData : ProductData,
    currentproductpreviewpos: 0,
    showheartbeat:0,
  }
  oncolorOptionsclick = (pos) => {
    this.setState({currentproductpreviewpos:pos});
  }
  onFeatureitemClick = (pos) => {
    this.setState({showheartbeat:pos})
  }
  render(){
    return (
      <div className={classes.wrapper}>
        <Topbar />
        <div className={classes.mainsection}>
          <div className={classes.productpreview}>
            <Productpreview currentproductpreview={this.state.productData.colorOptions[this.state.currentproductpreviewpos].imageUrl} 
            showheartbeat={this.state.showheartbeat} />
          </div>
        <div className={classes.sidesection}>
          <Sidesection data={this.state.productData} oncolorOptionsclick={this.oncolorOptionsclick} 
            currentproductpreviewpos={this.state.currentproductpreviewpos} onFeatureitemClick={this.onFeatureitemClick} 
            showheartbeat={this.state.showheartbeat}/>
        </div>
        </div>
      </div>
    );
  }
}

export default App;
