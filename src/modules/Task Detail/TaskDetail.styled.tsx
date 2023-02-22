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
    .task-wrapper {
      display: flex;
      flex-direction: column;
      border-radius: 12px;
      box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
        rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
        rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;

      &.inpro {
        background: #3dacac69;
      }
      &.pending {
        background: #9c9ca65e;
      }
      &.completed {
        background: #55ce6363;
      }
      .tasks {
        display: flex;
        flex-direction: column;
        padding: 24px;
        row-gap: 12px;
        .task {
          display: flex;
          flex-direction: column;
          background: white;
          border-radius: 8px;
          padding: 12px;
          cursor: pointer;
          transition: all 0.5s;
          min-height: 80px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          &:hover {
            transform: translateY(-8px);
            box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
              rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
              rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
          }
          .title {
            color: black;
            font-size: 22px;
          }
          .date {
            width: 100%;
            display: flex;
            margin-bottom: 12px;
            align-items: center;
            justify-content: space-between;
            font-size: 11px;
            .start,
            .end {
              color: rbga(0, 0, 0, 0.1);
            }
          }
          .files {
            width: 100%;
            display: flex;
            justify-content: flex-start;
            font-size: 14px;
            color: rgba(0, 0, 0, 0.5);
            column-gap: 4px;
            &.subs {
              &:hover {
                color: green;
              }
            }

            .ic {
              font-size: 20px;
            }
            .file {
              &:hover {
                color: blue;
              }
            }
            .more {
              font-size: 18px;
            }
          }
          .submmited {
            flex: 1;
            display: flex;
            justify-content: flex-end;
            color: green;
          }
        }
      }
    }
    .stats-info {
      background-color: #ffffff;
      border: 1px solid #ededed;
      padding: 20px;
      text-align: center;
      border-radius: 12px 12px 0px 0px;
      &.inpro {
        background-color: #3dacac;
      }
      &.pending {
        background-color: #9c9ca6;
      }
      &.completed {
        background-color: #55ce63;
      }

      h6 {
        color: #1f1f1f;
        font-size: 20px;
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
      h6,
      h4 {
        color: white;
        font-weight: 600;
        span {
          color: white;
        }
      }
      &.total {
        background-color: white;
        font-weight: 400;

        h6,
        h4 {
          color: black;
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
