import { Stack } from '@mui/system';
import React, { useState } from 'react';
import { memo } from 'react';
import { SidebarItems, SidebarItemsStudent } from './Sidebar.constants';
import { Wrapper } from './Sidebar.styled';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import classNames from 'classnames';
import { useHistory } from 'react-router-dom';
import { selectRole } from 'reducer/account/account.selector';
import { useSelector } from 'react-redux';

const SidebarComponent = () => {
  const [selectedSidebar, setSelectedSidebar] = useState(-1);
  const history = useHistory();
  const role = useSelector(selectRole);
  return (
    <Wrapper>
      {role === 'Admin' &&
        SidebarItems.map(({ title, path, Icon, children }, key) => {
          return (
            <div
              key={key}
              className="sidebar-item"
              onClick={() => {
                setSelectedSidebar(key);
                history.push(path || '');
              }}
            >
              <Stack
                sx={{ width: '100%', cursor: 'pointer' }}
                justifyContent="space-between"
                className="item"
                direction="row"
                alignItems="center"
              >
                <Stack direction="row" alignItems="center">
                  {Icon && <Icon />}
                  <span className="title">{title}</span>
                </Stack>
                {children && (
                  <ArrowForwardIosIcon
                    className={classNames('icon', {
                      'icon-revert': key === selectedSidebar,
                    })}
                  />
                )}
              </Stack>
            </div>
          );
        })}
      {role === 'Student' &&
        SidebarItemsStudent.map(({ title, path, Icon, children }, key) => {
          return (
            <div
              key={key}
              className="sidebar-item"
              onClick={() => {
                setSelectedSidebar(key);
                history.push(path || '');
              }}
            >
              <Stack
                sx={{ width: '100%', cursor: 'pointer' }}
                justifyContent="space-between"
                className="item"
                direction="row"
                alignItems="center"
              >
                <Stack direction="row" alignItems="center">
                  {Icon && <Icon />}
                  <span className="title">{title}</span>
                </Stack>
                {children && (
                  <ArrowForwardIosIcon
                    className={classNames('icon', {
                      'icon-revert': key === selectedSidebar,
                    })}
                  />
                )}
              </Stack>
            </div>
          );
        })}
    </Wrapper>
  );
};

export const SideBar = memo(SidebarComponent);
