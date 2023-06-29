import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Task from './pages/Task';
import NoMatch from './pages/NoMatch';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    function setHeight() {
      var vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
    setHeight();
    window.addEventListener('resize', setHeight);
  }, []);

  return (
    <Layout>
      <Router>
        <Routes>
          <Route
            exact
            path='/'
            element={<Home />}
          />
          <Route
            path='/tasks/:id'
            element={<Task />}
          />
          <Route
            path='*'
            element={<NoMatch />}
          />
        </Routes>
      </Router>
    </Layout>
  );
}

export default App;
