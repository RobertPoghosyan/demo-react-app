import React from 'react';
import Person from './components/Person';
import Product from './components/Product';
//import Description from './components/Description';
//import Price from './components/Price';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Person name ="Robert" project="Great Project"/>
        <Product fruits ="Apricot" price = "2$" description="The best apricots from Armenia" />
        
        
        
        
      </header>
    </div>
  );
}

export default App;
