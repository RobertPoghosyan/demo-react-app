import React from 'react';
import Person from './components/Person';
import Product fr"om './components/Product';
import Lesson6 from './lesson6/Lesson6'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Person name ="Robert" project="Great Project"/>
        <Product fruits ="Apricot" price = "2$" description="The best apricots from Armenia" />
        <Lesson6 />
        
        
      </header>
    </div>
  );
}

export default App;
