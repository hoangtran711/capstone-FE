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
  .projects {
    width: 100%;
    padding: 36px;
    display: grid;
    gap: 24px;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    .project {
      background: white;
      border-radius: 24px;
      padding: 24px;
      cursor: pointer;
      transition: all 0.5s;
      min-height: 260px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      position: relative;
      &:hover {
        transform: translateY(-4px);
        box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
          rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
          rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
        .add {
          display: flex;
        }
      }
      .add {
        border-radius: 24px;
        flex-direction: column;
        // display: none;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 2;
        color: #34b042;
        font-weight: 600;
        font-size: 18px;
        &::after {
          border-radius: 24px;
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.1);
          z-index: -1;
        }
      }

      .name {
        margin-bottom: 4px;
        font-size: 18px;
        color: black;
      }
      .date {
        width: 100%;
        display: flex;
        margin-bottom: 24px;
        align-items: center;
        justify-content: space-between;
        font-size: 12px;
        .start,
        .end {
          color: rbga(0, 0, 0, 0.1);
        }
      }
      .task-info {
        display: flex;
        flex-direction: column;
        font-weight: 600;
        font-size: 14px;
        row-gap: 4px;
        .pending {
          color: #3dacac;
        }
        .inprogress {
          color: #9c9ca6;
        }
        .completed {
          color: #55ce63;
        }
        margin-bottom: 12px;
      }
      .peoples {
        display: flex;
        column-gap: 12px;
        img {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
        }
      }
    }
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
