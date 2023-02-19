import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 30px;
  box-sizing: border-box;
  width: 100%;
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
  }
  .grid {
    #table-head {
      font-weight: 800;
    }
    h3 {
      margin-bottom: 0px;
    }
    .card {
      background-color: #ffffff;

      min-height: 380px;
      .text-mute {
        color: #757575 !important;
      }
      border: 1px solid #ededed;
      margin-bottom: 30px;
      box-shadow: 0 1px 1px rgb(0 0 0 / 20%);
      .card-body {
        flex: 1 1 auto;
        padding: 1rem 1rem;
        .card-title {
          color: #1f1f1f;
          font-size: 20px;
          font-weight: 500;
          margin-bottom: 20px;
          margin-top: 0;
        }
        .punch-info {
          margin-bottom: 20px;
          .punch-minutes {
            background-color: #f9f9f9;
            border: 5px solid #e3e3e3;
            font-size: 18px;
            height: 120px;
            width: 120px;
            margin: 0 auto;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }
        .res-subject-name {
          margin-bottom: 5px;
        }
        .res-subject-time {
          margin-bottom: 10px;
          margin-top: 0;
          color: #757575 !important;
          display: flex;
          align-items: center;
        }
      }
      .punch-btn {
        text-align: center;
        margin: 0 0 20px;
        &.disable {
          opacity: 0.5;
        }
        button {
          font-size: 18px;
          font-weight: 600;
          max-width: 100%;
          padding: 15px 90px;
          border-radius: 50px;
          background-color: #ff9b44;
          border: 1px solid #ff9b44;
          color: #ffffff !important;
          cursor: pointer;
        }
      }
      .statistics {
        display: flex;
        justify-content: space-between;
        .stats-box {
          background-color: #f9f9f9;
          border: 1px solid #e3e3e3;
          margin: 0 0 15px;
          padding: 5px;
        }
      }
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
