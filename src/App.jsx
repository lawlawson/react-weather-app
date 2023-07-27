import './App.css';
import Search from './components/Search/Search';
import CurrentWeather from './components/CurrentWeather/CurrentWeather';

function App() {
  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(' ');

    const currentWeatherFetch = fetch(`/weather?lat={lat}&lon={lon}&appid={API key}`)
  };

  return (
    <div className='container'>
      <Search onSearchChange={handleOnSearchChange} />
      <CurrentWeather />
    </div>
  );
}

export default App;
