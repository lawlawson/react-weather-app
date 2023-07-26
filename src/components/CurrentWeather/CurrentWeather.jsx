import './CurrentWeather.css';

const currentWeather = () => {
  return (
    <div className='weather'>
      <div className='top'>
        <p className='city'>Accra</p>
        <p className='weather-description'>Sunny</p>
      </div>
      <img className='weather-icon' src='icons/01d.png' alt='' />
    </div>
  );
};

export default currentWeather;
