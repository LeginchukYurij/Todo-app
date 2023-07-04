import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Task from './pages/Task';
import Search from './pages/Search';
import Add from './pages/Add';
import Edit from './pages/Edit';
import NoMatch from './pages/NoMatch';
import { useEffect } from 'react';
import Complited from './pages/Complited';
import { useGetAll } from './hooks/useGetAll';
import Loader from './UI/Loader';
import Error from './UI/Error';

function App() {
  useEffect(() => {
    function setHeight() {
      var vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
    setHeight();
    window.addEventListener('resize', setHeight);
  }, []);

  useGetAll();

  return (
    <Layout>
      <Loader />
      <Error />

      <Routes>
        <Route
          exact
          path='/'
          element={<Home />}
        />
        <Route
          path='/complited'
          element={<Complited />}
        />
        <Route
          path='/task/:id'
          element={<Task />}
        />
        <Route
          path='/task/new'
          element={<Add />}
        />
        <Route
          path='/task/edit/:id'
          element={<Edit />}
        />
        <Route
          path='/search'
          element={<Search />}
        />
        <Route
          path='*'
          element={<NoMatch />}
        />
      </Routes>
    </Layout>
  );
}

export default App;
