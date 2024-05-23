import React from 'react';
import { Route, Routes } from 'react-router-dom';
const Submenu11 = () => <div>Submenu 1-1 Content</div>;
const Submenu12 = () => <div>Submenu 1-2 Content</div>;
const Submenu21 = () => <div>Submenu 2-1 Content</div>;
const Submenu22 = () => <div>Submenu 2-2 Content</div>;

const IndexRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/submenu1-1" element={<Submenu11 />} />
        <Route path="/submenu1-2" element={<Submenu12 />} />
        <Route path="/submenu2-1" element={<Submenu21 />} />
        <Route path="/submenu2-2" element={<Submenu22 />} />
      </Routes>
    </div>
  );
};

export default IndexRoute;
