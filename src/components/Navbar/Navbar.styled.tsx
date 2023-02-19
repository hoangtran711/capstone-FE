import styled from 'styled-components';

export const Wrapper = styled.div`
  background: linear-gradient(to right, #ff9b44 0%, #fc6075 100%);
  min-height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  position: relative;
  .logo {
    width: 40px;
  }
  .title {
    color: #ffffff;
    font-size: 20px;
    font-weight: normal;
  }
  .MuiFormControl-root {
    border: none !important;
  }
  .search-box {
    background-color: rgba(255, 255, 255, 0.1) !important;
    border-radius: 20px !important;
    padding: 7px 20px !important;
    margin-right: 10px;
    .MuiInputBase-root {
      overflow: hidden;
      border-radius: 20px !important;
    }
    .icon {
      color: white;
    }
    input {
      color: white;
      padding: 0 5px !important;
    }
  }

  .account-more {
    position: relative;
    &:hover {
      .account-content {
        display: flex;
        flex-direction: column;
      }
    }
    .account-icon {
      color: white;
      font-size: 35px;
      margin-right: 20px;
      cursor: pointer;
    }
    .account-content {
      border-radius: 5px;
      font-weight: 300;
      border: 1px solid #f5f0f0;
      background-color: white;
      padding: 15px 40px;
      position: absolute;
      min-width: 265px;
      right: 0;
      top: 100%;
      display: none;
      box-sizing: border-box;
      .signout-btn {
        display: flex;
        justify-content: center;
        .btn {
          margin-top: 10px;
          font-size: 16px;
          font-weight: 600;
          max-width: 80%;
          padding: 7px 25px;
          border-radius: 50px;
          background-color: #f5f0f0;
          border: 1px solid black;
          color: black !important;
          cursor: pointer;
          text-align: center;
        }
      }
      .text-info {
        color: #757575 !important;
        margin-top: 3px;
      }
    }
  }
`;
