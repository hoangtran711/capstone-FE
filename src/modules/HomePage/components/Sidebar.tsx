import React, { useCallback } from 'react';
import { Wrapper } from './Sidebar.styled';
import { Close, PhoneEnabled, PictureAsPdf, Paid } from '@mui/icons-material';
import { toast } from 'react-toastify';

export const Sidebar = () => {
  const onHandleCloseSidebar = useCallback(() => {
    try {
      const element = document.querySelector('#sidebar') as HTMLDivElement;
      element.style.transform = 'translateX(100%)';
    } catch (err: any) {
      toast.error(err?.message || err);
    }
  }, []);
  return (
    <Wrapper id="sidebar" className="hidden__sidebar">
      <span onClick={onHandleCloseSidebar} className="hiddenSidebar__btnClose">
        <Close />
      </span>
      <div className="hiddenSidebar__content">
        <img
          src={require('../../../assets/images/home/hidden-bar-image.jpg')}
          alt=""
        />
        <p className="hiddenSidebar__text">
          Prefer speaking with a human to filling out a form? Call our corporate
          office and we will connect you with a team member who can help.
        </p>
        <div className="hiddenSidebar__phone">
          <p className="hiddenSidebar__phoneContent">
            <PhoneEnabled />
            <a href="tel:0382520281">0382520280</a>{' '}
          </p>
        </div>
        <a className="hiddenSidebar__buttonRed" href="">
          <PictureAsPdf /> Looking for your W-2?
        </a>
        <a className="hiddenSidebar__buttonBlue" href="">
          <Paid /> Attendance Online Sale Offices
        </a>
      </div>
    </Wrapper>
  );
};
