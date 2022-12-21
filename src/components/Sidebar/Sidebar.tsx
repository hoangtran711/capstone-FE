import { Stack } from '@mui/system';
import React, { useState } from 'react';
import { memo } from 'react';
import { SidebarItems } from './Sidebar.constants';
import { Wrapper } from './Sidebar.styled';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import classNames from 'classnames';

const SidebarComponent = () => {
  const [selectedSidebar, setSelectedSidebar] = useState(-1);
  console.log(selectedSidebar);
  return (
    <Wrapper>
      {SidebarItems.map(({ title, Icon, children }, key) => {
        return (
          <div key={key} className="sidebar-item">
            <Stack
              sx={{ width: '100%', cursor: 'pointer' }}
              justifyContent="space-between"
              className="item"
              direction="row"
              alignItems="center"
              onClick={() => {
                if (key === selectedSidebar) {
                  setSelectedSidebar(-1);
                } else {
                  setSelectedSidebar(key);
                }
              }}
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
            <div
              className={classNames('children-container', {
                active: key === selectedSidebar,
              })}
            >
              {children?.map((item) => (
                <div
                  key={item.title}
                  className={classNames('children', 'item')}
                >
                  <Stack direction="row">
                    {item.Icon && <item.Icon />}
                    <span className="title">{item.title}</span>
                  </Stack>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </Wrapper>
  );
};

export const SideBar = memo(SidebarComponent);
