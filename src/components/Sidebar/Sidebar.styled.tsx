import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: #34444c;
  height: calc(100vh - 60px);
  min-width: 230px;
  color: #b7c0cd;
  padding: 10px 0;
  .item {
    height: 40px;
    padding: 12px;
    box-sizing: border-box;
    cursor: pointer;
    transition: all 0.3s;
    .title {
      margin-left: 15px;
      font-size: 15px;
      font-weight: 600;
    }
    .icon {
      transition: all 0.3s;
      font-size: 14px;
    }
    .icon-revert {
      transform: rotate(90deg);
    }
    &:hover {
      color: white;
    }
  }
  .children-container {
    margin-left: 22.5px;
    max-height: 0px;
    transition: all 0.4s;
    overflow: hidden;
    &.active {
      max-height: 100px;
    }
    .children {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
  }
`;
