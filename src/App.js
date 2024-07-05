import './App.css';
import ResponsiveAppBar from './Components/ResponsiveAppBar';
import Header from './Components/Header';
import Tab from './Components/Tab';
import Banner from './Components/Banner';
function App() {
  return (
    <div className="App">
      <Header/>
      <ResponsiveAppBar/>
      <div className="TabContainer">
        <Tab />
      </div>
      <div className="TabContainer">
      <Banner/>
      </div>
    </div>
  );
}

export default App;
