import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Footer = lazy(() => import('./components/Footer'));
const Header = lazy(() => import('./components/Header'));
const Loading = lazy(() => import('./components/Loading'));

const Home = lazy(() => import('./pages/Home'));

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path='/loading' element={<Loading />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
