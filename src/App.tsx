import { useEffect, useState } from 'react';
import {atom, useRecoilState } from 'recoil';
import Button from './components/Button/Button';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import './App.css'
import { Router, ReactLocation, Route, Outlet } from 'react-location';
import Admin from './components/Admin/Admin';
import FindMode from './components/FindMode/FindMode';
import Welcome from './components/Welcome-effect/Welcome';


const reactLocation = new ReactLocation()

  function FindOSTheme (){
    const darkOS = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches.toString().replace(/true/g, "dark_theme")
    return darkOS
  }

export const themeAtom = atom({
  key: 'theme',
  default: FindOSTheme(),
})

const routes:Route[] = [
  {
    path: '/',
    element:<Header/>
  },
  {
    path: '/Form',
    element:<Form/>
  },
  {
    path: '/Admin',
    element: <Admin/>
  }
]

function ChangeTheme() {
  const [theme,setTheme] = useRecoilState(themeAtom);
  return (
    <div>
      <input type="checkbox" onChange={() =>setTheme(theme === 'dark_theme' ? "light_theme" : "dark_theme")}  />
    </div>
  );
}

function App() {
  const [theme] = useRecoilState(themeAtom);
  
  return (
      <div className={`App d-flex align-items-center justify-content-center ${theme === "dark_theme" ? "light_theme" : "light_theme"}`}>
        <Welcome/>
        <Header/>
        
        {/* <Router location={reactLocation} routes={routes}>
          <Outlet/>
        </Router>
        <Button/>
        <ChangeTheme />
        <Form/>
        <FindMode/> */}
      </div>
  );
}

export default App;