import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 30px;
  box-sizing: border-box;
  width: 100%;
  .header {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 20px;
    .header-left {
      .welcome {
        color: #1f1f1f;
        font-size: 26px;
        font-weight: 500;
        margin-bottom: 10px;
        font-weight: 600;
        display: block;
      }
      .breadcrumb {
        color: #6c757d;
        font-weight: 600;
        font-size: 15px;
      }
    }
    .header-right {
      display: flex;
      align-items: center;
      .add-icon {
        display: flex;
        align-items: center;
      }
      .container-icon {
        margin-right: 20px;
        width: 45px;
        height: 45px;
        background-color: rgba(255, 155, 68, 0.2);
        color: #ff9b44;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 10%;
        cursor: pointer;
        .icon {
          font-size: 35px;
        }
      }
      .add-icon {
        width: 150px;
        height: 45px;
        background-color: #55ce63;
        color: white;
        border-radius: 4px;
        cursor: pointer;
        align-items: center;
        justify-content: space-between;
        padding: 0 7px 0;
        font-size: 19px;
        .icon {
          font-size: 35px;
        }
      }
    }
  }
`;
