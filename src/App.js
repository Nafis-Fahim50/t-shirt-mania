import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Orders from './components/Orders/Orders';
import About from './components/About/About';
import Main from './Layout/Main';
import Granpa from './components/Grandpa/Granpa';

function App() {
  const router = createBrowserRouter([
    {
      path: '/', element: <Main></Main>, 
      children:[
        {
          path: '/',
          loader: ()=> fetch(`tshirts.json`), 
          element: <Home></Home>
        },
        {
          path: '/orders', element: <Orders></Orders>
        },
        {
          path: '/about', element: <About></About>
        },
        {
          path: '/grandpa', element: <Granpa></Granpa>
        }
      ]
    }

  ]);
  return (
    <div className="App">
      <RouterProvider router = {router}></RouterProvider>
    </div>
  );
}

export default App;
