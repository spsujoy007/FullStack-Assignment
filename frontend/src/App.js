import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './Routes/routes';
import toast, { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className='bg-purple-100'>
      <RouterProvider router={routes}></RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;
