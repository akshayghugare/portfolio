import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import myPic from '../Assets/myPic.jpg'
const Sidebar = () => {
  const [openMenu, setOpenMenu] = useState(null);

  const handleMenuClick = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <div className="h-screen w-[20%] pl-2 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white border border-l-0">
      <nav>
        <div className='flex justify-center item-center  mt-2'>
            <img src={''} alt='loading' className='border rounded-full w-20 h-20'/>
        </div>
        <ul>
          <li>
            <div onClick={() => handleMenuClick('menu1')} className="w-full text-left cursor-pointer">
              Menu 1
            </div>
            {openMenu === 'menu1' && (
              <ul className="pl-4">
                <li><Link to="/submenu1-1">Submenu 1-1</Link></li>
                <li><Link to="/submenu1-2">Submenu 1-2</Link></li>
              </ul>
            )}
          </li>
          <li>
            <div onClick={() => handleMenuClick('menu2')} className="w-full text-left cursor-pointer">
              Menu 2
            </div>
            {openMenu === 'menu2' && (
              <ul className="pl-4">
                <li><Link to="/submenu2-1">Submenu 2-1</Link></li>
                <li><Link to="/submenu2-2">Submenu 2-2</Link></li>
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
