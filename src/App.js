import './App.css';
import Header from './components/Header/Header';
import Navigation from './components/Navtigation/Navigation';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Route, Routes } from 'react-router-dom';
import Study from './components/Study/Study';
import AllContent from './components/AllContent/AllContent';
import Error from './components/Error/Error';
import MyWorks from './components/MyWorks/MyWorks';
import Vaiber from './components/Vaiber/Vaiber';
import ArrowUp from './components/ArrowUp/ArrowUp';
import Footer from './components/Footer/Footer';

function App(props) {
  return (
      <div className="app-wrapper">
        <Header />
        <Navigation dialogsData={props.state.dialogsData} />
        <Vaiber />
        <ArrowUp />
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/study" element={<Study />} />
            <Route path="*" element={<Error />} />
            <Route path="/" element={<AllContent />} />
            <Route path="/works" element={<MyWorks />} />
          </Routes>
        </div>
      </div>
  );
}

export default App;
