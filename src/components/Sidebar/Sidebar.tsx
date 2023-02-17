import { Stack } from '@mui/system';
import React, { useState } from 'react';
import { memo } from 'react';
import { SidebarItems } from './Sidebar.constants';
import { Wrapper } from './Sidebar.styled';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import classNames from 'classnames';
import { useHistory } from 'react-router-dom';

const SidebarComponent = () => {
  const [selectedSidebar, setSelectedSidebar] = useState(-1);
  console.log(selectedSidebar);
  const history = useHistory();

  return (
    <Wrapper>
      {SidebarItems.map(({ title, path, Icon, children }, key) => {
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
