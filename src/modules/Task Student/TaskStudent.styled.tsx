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
    display: flex;
    flex-direction: column;

    .project {
      background: white;
      padding: 24px;
      cursor: pointer;
      transition: all 0.3s;
      align-items: center;
      display: flex;
      position: relative;
      margin: 2px 0px;
      border-radius: 16px;

      &.head {
        font-weight: 600;
        &:hover {
          box-shadow: none;
        }
        .files {
          color: black;
        }
      }
      &:hover {
        transform: translateY(-8px);
        box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
          rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
          rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
        .add {
          display: flex;
          border-radius: 24px;
        }
      }

      .name {
        width: 20%;
        font-size: 16px;
        color: black;
      }
      .start,
      .end {
        width: 10%;
        font-size: 16px;

        color: rbga(0, 0, 0, 0.1);
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
        margin-bottom: 16px;
      }
      .submission {
        display: flex;
        column-gap: 16px;
        width: 15%;
        overflow: scroll;
        font-size: 16px;
        justify-content: center;

        img {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
        }
      }
      .files {
        width: 30%;
        display: flex;
        justify-content: flex-end;
        font-size: 16px;
        color: rgba(0, 0, 0, 0.5);
        .ic {
          font-size: 22px;
        }
        .file {
          &:hover {
            color: blue;
          }
        }
        .more {
          font-size: 16px;

          &:hover {
            color: green;
          }
        }
      }
      .actions {
        width: 10%;
        display: flex;
        justify-content: flex-end;
        font-size: 16px;
        .submit {
          &:hover {
            color: blue;
          }
          &.disable {
            opacity: 0.3;
            cursor: not-allowed;
          }
        }
      }
    }
  }
  .status {
    font-size: 16px;
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
          font-size: 16px;
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
      padding: 16px;
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
