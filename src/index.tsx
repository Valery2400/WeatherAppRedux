import ReactDOM from 'react-dom/client';
import { HashRouter, Route, Routes } from 'react-router-dom';
import WeatherApp from './components/weatherApp/WeatherApp';
import Layout from './components/layout/Layout';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import WeatherProvider from './components/weatherProvider/WeahterProvider';
import Login from './components/login/Login';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
  <WeatherProvider>
  <HashRouter>
    <Routes>
      <Route path='/' element={<Layout />} >
      <Route path='/login' element={<Login />} />
        <Route path='/' element={<WeatherApp />} />
        <Route path='/shop' element={<h1 style={{color: 'white'}}>cards</h1>} />
        <Route path='*' element={<h1>Error 404 😵</h1>} />
      </Route>
    </Routes>
  </HashRouter>
  </WeatherProvider>
  </Provider>
);


