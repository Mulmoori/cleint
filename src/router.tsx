// Router.tsx
import React from 'react';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import { styled } from 'styled-components';
import Home from './pages/home/Home';
import Navbar from './components/layouts/Navbart';

const Wrapper = styled.div`
  margin: 0 auto;
  min-height: 100vh;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  display: flex;
  flex-direction: column;
`;

const Layout: React.FC = () => {
  return (
    <>
      <Wrapper>
        <Navbar />
        <Outlet />
      </Wrapper>
    </>
  );
};

export default function Router(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
