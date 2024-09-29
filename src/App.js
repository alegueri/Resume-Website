
import './components/styles/App.css';
import {HashRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import MenuButton from "./components/utils/MenuButton";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <MenuButton />
    </Router>
  );
}

export default App;
