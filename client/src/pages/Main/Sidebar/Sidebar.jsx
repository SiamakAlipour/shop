import React from 'react';
import Widget from './Widget';
import './Sidebar.scss';

const Sidebar = () => {
  const SocialIcons = (
    <div className="widget__content">
      <p>ما را در شبکه های اجتماعی دنبال کنید</p>
      <div className="widget__icons">
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid  */}
        <a href="#">
          <img
            className="widget__icons--style"
            src="https://www.freepnglogos.com/uploads/telegram-logo-2.png"
            alt=""
          />
        </a>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid  */}
        <a href="#">
          <img
            className="widget__icons--style"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png"
            alt=""
          />
        </a>
      </div>
    </div>
  );

  return (
    <div className="sidebar">
      <Widget title="شبکه های اجتماعی" Content={SocialIcons} />
      <Widget title="شبکه های اجتماعی" Content={SocialIcons} />
    </div>
  );
};

export default Sidebar;
