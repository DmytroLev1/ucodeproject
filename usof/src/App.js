import './App.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Bar from './Bar/Bar';
import Questions from './Main/Questions/Questions';
import Question from './Main/Questions/Question';
import Home from './Main/Home/Home';
import Users from './Main/Users/Users';
import Tags from './Main/Tags/Tags';
import User from './Main/Users/User';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = (props) => {
  return (
      <BrowserRouter>
      <div className='wrapper'>
          <Header />
          <Bar />
          <div className="content"> 
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/questions" element={<Questions />}/>
              <Route path="/users" element={<Users />}/>
              <Route path="/tags" element={<Tags />}/>
              <Route path="/question/:id/:title" element={<Question />}/>
              <Route path="/user/:id" element={<User />}/>
            </Routes>
          </div>
          <Footer />
      </div>
      </BrowserRouter>
  )  
}

export default App;
