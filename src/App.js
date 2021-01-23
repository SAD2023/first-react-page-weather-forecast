import './App.css';

function App() {
  return <div className="wrapper">
    <Header />
  </div>
}

const Header = () => {
  return <div><h3 className="forecastheader">Forecast This Week</h3>
    <h4 className="location">New York, NY</h4>
  </div>
}
export default App;
