import {Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './components/Home';
import Todo from './components/Todo';
import About  from './components/About';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
   
  );
}

export default App;
