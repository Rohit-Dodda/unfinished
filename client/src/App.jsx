import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PageNotFound from './home-components/PageNotFound'
import Home from './pages/Home';
import Login from './home-components/Login'
import SignUp from './home-components/SignUp'
import Exploring from './home-components/Exploring'
import Profession from './home-components/Profession'
import GetStarted from './home-components/GetStarted';
import SignUpForm from './home-components/SignUpForm';
import { useEffect } from 'react';

const router = createBrowserRouter([
  {
    path: '*',
    element: <PageNotFound></PageNotFound>
  },
  {
    path: '/',
    element: <Home></Home>
  },
  {
    path: '/login',
    element: <Login></Login>,
  },
  {
    path: '/signup/exploring',
    element: <Exploring></Exploring>,
  },
  {
    path: '/signup/profession',
    element: <Profession></Profession>,
  },
  {
    path: '/signup',
    element: <SignUp></SignUp>
  },
  {
    path: '/signup/exploring/form',
    element: <SignUpForm></SignUpForm>
  },
  {
    path: '/get-started',
    element: <GetStarted></GetStarted>
  },
])

const App = () => {
  useEffect(() => {
    const reloadInterval = setInterval(() => {
      const currentTime = new Date().getTime();
      const expirationTime = new Date("2023-03-26T00:00:00").getTime();
      
      if (currentTime > expirationTime) {
        clearInterval(reloadInterval);
      } else {
        window.location.reload();
      }
    }, 24 * 60 * 60 * 1000); 

    return () => {
      clearInterval(reloadInterval);
    };
  }, []);
  return (
    <main>
      <RouterProvider router={router}></RouterProvider>
    </main>
  )
}

export default App