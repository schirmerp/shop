import './App.css';
import Nav from './nav';


function App() {
  return (
    <div className="App">
      <Nav/>
        <div className="home-container">
            <h1>Home</h1>
            <p>Welcome to the store Every BudDY!! Im so excited to sell all my important stuff. Dont wait a minute longer,<br/>
              click the link at the top of the page and start exploring the magic that is My fuggin store full of shyt!!!
            </p>
            <img id="store-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO6O5KH3U0lHroFoGMq6T4i9cNDchOnJROUw&usqp=CAU"/>
        </div>

    </div>
  );
}

export default App;
