import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 30px;
  padding-bottom: 80px;
  box-sizing: border-box;
  width: 100%;
  .textField {
    background-color: white;
  }
  .Accepted {
    color: #699834;
    border-color: #699834 !important;
  }
  .Pending {
    color: #7460ee;
    border-color: #7460ee !important;
  }
  .Denied {
    color: #f62d51;
    border-color: #f62d51 !important;
  }
  .status {
    font-size: 12px;
    font-weight: 600;
    border: 1px solid black;
    border-radius: 50px;
    padding: 7px 0px;
    cursor: pointer;
    transition: all 0.3s;
    &:hover {
      transform: scale(1.02);
    }
    &:active {
      transform: scale(0.99);
    }
  }
  .dialog {
    display: none;
  }
  .header {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 30px;
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
        font-size: 16px !important;
        width: auto !important;
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
        background: linear-gradient(to right, #ff9b44 0%, #fc6075 100%);
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
  .grid {
    #table-head {
      font-weight: 800;
    }
    .stats-info {
      background-color: #ffffff;
      border: 1px solid #ededed;
      padding: 20px;
      text-align: center;
      border-radius: 4px;
      h6 {
        color: #1f1f1f;
        font-size: 16px;
        font-weight: normal;
        line-height: 18px;
        margin-bottom: 5px;
        margin: 5px;
      }
      h4 {
        margin: 15px;
        font-size: 24px;
        margin-bottom: 0;
        span {
          font-size: 12px;
          color: #8e8e8e;
        }
      }
    }
    .text-field .select-requestType .select-requestType {
      background-color: #ffffff;
    }
    .button-search {
      min-height: 50px;
      text-transform: uppercase;
      padding: 12px;
      height: 100%;
      width: 100%;
      box-sizing: border-box;
      user-select: none;
      border-radius: 4px;
      cursor: pointer;
      font: inherit;
      letter-spacing: inherit;
      background-color: #55ce63;
      border: 1px solid #55ce63;
      display: flex;
      align-items: center;
      justify-content: center;
      :hover {
        background-color: #4bb958;
      }
      a {
        color: white;
        font-weight: 400;
        line-height: 1.5;
        text-decoration: none;
        vertical-align: middle;
        cursor: pointer;
        font-size: 1rem;
        border-radius: 0.25rem;
      }
    }
  }
`;
