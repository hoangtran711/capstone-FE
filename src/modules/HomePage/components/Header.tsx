import React, { useCallback } from 'react';
import { Wrapper } from './Header.styled';
import FlagIcon from '@mui/icons-material/Flag';
import SearchIcon from '@mui/icons-material/Search';
import HorizontalSplitIcon from '@mui/icons-material/HorizontalSplit';
import { Container } from '@mui/system';
import { menu } from './Header.constants';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { selectToken } from 'reducer/account/account.selector';
import { deleteAccount } from 'reducer';
import { useAppDispatch } from 'app/store';
import { useHistory } from 'react-router-dom';

export const Header = () => {
  const onHandleShowSidebar = useCallback(() => {
    try {
      const element = document.querySelector('#sidebar') as HTMLDivElement;
      console.log(element);
      element.style.transform = 'translateX(0%)';
    } catch (err: any) {
      toast.error(err?.message || err);
    }
  }, []);
  const token = useSelector(selectToken);
  const dispatch = useAppDispatch();
  const history = useHistory();
  return (
    <Wrapper>
      <div className="header">
        <div className="header__top">
          <Container maxWidth="xl">
            <div className="headerTop__content">
              <div className="header__topLeft float-left">
                <FlagIcon />
                <span>Looking for your W2, 1095-C or 1099? </span>
                <a href="#"> Click here</a>
              </div>
              <div className="header__topRight float-right">
                <ul>
                  <li>
                    Need Help? Talk to an Expert
                    <span> 19001234</span>
                  </li>
                  <li>
                    <SearchIcon />
                  </li>
                  <li onClick={onHandleShowSidebar}>
                    <HorizontalSplitIcon />
                  </li>
                </ul>
              </div>
            </div>
          </Container>
        </div>

        <div className="header__bottom">
          <Container maxWidth="xl">
            <div className="headerBottom__content">
              <div className="headerBottom__left">
                <img
                  src="https://smarthr-ci.dreamguystech.com/template/orange/public/assets/img/logo.png"
                  alt="logo"
                />
                <span>Magic Attendance</span>
              </div>
              <div className="headerBottom__rightContent">
                <div className="headerBottom__mid">
                  <ul>
                    {menu.map((item, key) => (
                      <li
                        key={key}
                        className="item item-1"
                        onClick={() => history.push(`${item.path}`)}
                      >
                        {item.title}
                        <div className="dropdown-menu">
                          {item.child?.map((item) => (
                            <a
                              key={item.title}
                              className="dropdown-item"
                              href="#"
                            >
                              {item.title}
                            </a>
                          ))}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                {!token ? (
                  <div className="headerBottom__right">
                    <div onClick={() => history.push('/sign-in')}>SIGN IN </div>
                  </div>
                ) : (
                  <div
                    className="headerBottom__right"
                    onClick={() => {
                      dispatch(deleteAccount());
                    }}
                  >
                    <div>SIGN OUT</div>
                  </div>
                )}
              </div>
            </div>
          </Container>
        </div>
      </div>
    </Wrapper>
  );
};
