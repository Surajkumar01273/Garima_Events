import { createBrowserRouter,createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import RootLayout from './components/layout/RootLayout';
import Home from './pages/Home';
import About from './pages/About'
import Adultbirthday from './pages/Adultbirthday'
import AnniversaryDecoration from './pages/AnniversaryDecoration'
import BabyShower from './pages/BabyShower'
import KidsBirthday from './pages/KidsBirthday'
import BanquetHalls from './pages/BanquetHalls'
import JustMarried from './pages/JustMarried'
import RoomDecoration from './pages/RoomDecoration'

import Ourgallery from './pages/Ourgallery'
import Contact from './pages/Contact'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const myRouter = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='adult-birthday' element={<Adultbirthday />} />
        <Route path='anniversary-decoration' element={<AnniversaryDecoration />} />
        <Route path='baby-shower' element={<BabyShower />} />
        <Route path='kids-birthday' element={<KidsBirthday />} />
        <Route path='banquet-hall' element={<BanquetHalls />} />
        <Route path='just-married' element={<JustMarried />} />
        <Route path='room-decoration' element={<RoomDecoration />} />

        <Route path='our-gallery' element={<Ourgallery />} />
        <Route path='contact' element={<Contact />} />
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={myRouter} />
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}

export default App;
