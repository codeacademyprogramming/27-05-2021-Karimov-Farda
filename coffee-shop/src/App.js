import logo from './logo.svg';
import './App.css';
import * as React from 'react'
import { getCoffee } from './modules/coffee-order/actions';
import { useDispatch } from 'react-redux';
import {MainPage} from './modules/coffee-order/components/index'
function App() {
  const dispatch = useDispatch()
  React.useEffect(() => {
    getCoffee()(dispatch)
  },[dispatch])
  return (
    <MainPage />
 
  );
}

export default App;
