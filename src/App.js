import './App.css';
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import Header from './components/Header';
import Dashboard from './pages/dashboard';
import Home from './pages/home';
import Login from './pages/login';

import { RankingProvider } from "./contexts/ranking";


function App() {
  return (
    <>
    <RankingProvider>
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path={"login"} element={<Login />}/>
          <Route path={"home"} element={<Home />} />
          <Route path={"dashboard"} element={<Dashboard />} />
          <Route path={"/"} element={<Navigate to={"/home"} />} />
        </Routes>
      </BrowserRouter>
    </RankingProvider>
    </>
    
  );
}

export default App;