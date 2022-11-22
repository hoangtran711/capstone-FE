import styled from 'styled-components';

export const Wrapper = styled.div`
  z-index: 1;
  position: fixed;
  top: 0;
  right: 0;
  width: 500px;
  height: 100vh;
  background-color: white;
  color: black;
  border-left: 1px solid rgba(0, 0, 0, 0.1);
  transition: all 0.5s;
  overflow-y: scroll;
  transform: translateX(100%);
  .hiddenSidebar__btnClose {
    position: absolute;
    top: 10px;
    right: 2px;
    color: #ee3234;
    font-size: 33px;
    cursor: pointer;
    svg {
      height: 50px;
      width: 50px;
    }
  }
  .hiddenSidebar__content {
    height: 100%;
    padding: 0 80px;
    margin-top: 100px;
    margin-bottom: 45px;
    img {
      width: 100%;
      border-radius: 6px;
    }
    .hiddenSidebar__text {
      color: #798593;
      font-size: 18px;
      line-height: 30px;
      font-weight: 600;
      width: 96%;
      margin-left: auto;
      margin-right: auto;
      margin-top: 30px;
      text-align: center;
    }
    .hiddenSidebar__phone {
      color: #001328;
      font-size: 22px;
      font-weight: 800;
      line-height: 1em;
      margin: 0 auto;
      margin-top: 45px;
      margin-bottom: 70px;
      .hiddenSidebar__phoneContent {
        width: 70%;
        margin: 0 auto;
        svg {
          display: inline-block;
          padding: 10px;
          vertical-align: middle;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #0f6fd5;
          line-height: 40px;
          color: #fff;
          box-shadow: 0 10px 30px 0 rgb(15 111 213 / 30%);
          margin-right: 20px;
        }
      }
    }
    .hiddenSidebar__buttonRed {
      display: none;
      text-decoration: none;
      background: #ee3234;
      border-radius: 6px;
      color: #fff;
      font-size: 20px;
      font-weight: 600;
      display: block;
      position: relative;
      padding: 38px 0;
      padding-left: 85px;
      box-shadow: 0 10px 30px 0 rgb(238 50 52 / 30%);
      text-align: left;
      transition: all 0.4s ease;
      &:hover {
        background: #fff;
        color: #001328;
      }
      svg {
        font-size: 29px;
        position: absolute;
        top: 50%;
        left: 40px;
        transform: translateY(-50%);
      }
    }
    .hiddenSidebar__buttonBlue {
      margin-top: 30px;
      text-decoration: none;
      background: #0f6fd5;
      border-radius: 6px;
      color: #fff;
      font-size: 20px;
      font-weight: 600;
      display: block;
      position: relative;
      padding: 38px 0;
      padding-left: 85px;
      box-shadow: 0 10px 30px 0 rgb(238 50 52 / 30%);
      text-align: left;
      transition: all 0.4s ease;
      &:hover {
        background: #fff;
        color: #001328;
      }
      svg {
        font-size: 29px;
        position: absolute;
        top: 50%;
        left: 40px;
        transform: translateY(-50%);
      }
    }
  }
`;
