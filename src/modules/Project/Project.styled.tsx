import styled, { keyframes } from 'styled-components';

export const Wrapper = styled.div`
  padding: 30px;
  box-sizing: border-box;
  padding-bottom: 80px;
  width: 100%;
  .icon-menu {
    margin-right: 10px;
    display: none;
  }
  .avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
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
        padding: 2px 12px 2px 2px;

        font-size: 19px;
        .icon {
          font-size: 35px;
        }
      }
    }
  }
  .grid {
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
    .loading {
      width: 100%;
      display: flex;
      align-items: ceter;
      justify-content: center;
      padding: 12px;
    }
    .card {
      border: 1px solid #ededed;
      margin-bottom: 30px;
      box-shadow: 0 1px 1px rgb(0 0 0 / 20%);
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      position: relative;
      height: 100%;
      .more {
        position: absolute;
        right: 12px;
        top: 12px;
        cursor: pointer;
        z-index: 10;
        &:hover {
          .options {
            display: flex;
            flex-direction: column;
          }
        }
        .options {
          padding: 12px;
          border-radius: 12px;
          background: white;
          color: rgba(0, 0, 0, 0.6);
          box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
          display: none;
          position: absolute;
          left: 0;
          top: 100%;
          min-width: 150px;
          .opt {
            display: flex;
            align-items: center;
            column-gap: 12px;
            &:hover {
              color: black;
            }
          }
        }
      }
      .card-body {
        flex: 1 1 auto;
        padding: 1rem;
        small {
          display: flex;
          column-gap: 8px;
        }
        .mini-img {
          img {
            border-radius: 50%;
            height: 30px;
            width: 30px;
          }
        }
        h4 {
          margin: 0 0 5px;
          font-weight: 500;
          font-size: 20px;
        }
        .text-xs {
        }
        .text-muted {
          color: #8e8e8e;
          display: flex;
          align-items: center;
          column-gap: 12px;
          .ic {
            font-size: 38px;
          }
          &.joined {
            color: green;
            font-weight: 400;
          }
          &.attendance {
            color: red;
            font-weight: 400;
          }
        }
        .date {
          display: flex;
          justify-content: space-between;
          .deadline {
            margin-bottom: 8px;
          }
        }
        .leader {
          margin-bottom: 8px;
        }
        .team {
          margin-bottom: 8px;

          .team-member {
            list-style: none;
            display: flex;
            margin: 0;
            padding: 0;
            .team-img {
              margin-right: 6px;
            }
          }
        }
        .sub-title {
          margin-bottom: 5px;
          display: flex;
          justify-content: space-between;
          span {
            font-size: 13px;
            color: #55ce63;
          }
          &.joined {
            // color: green;
            // font-weight: 600;
          }
        }
      }
    }
    .text-field {
      background-color: white;
    }
  }
`;
export interface IProgress {
  value: number;
}
export const animProgress = (v: number) => keyframes`
0%{
  width: 0;
}
100%{
  width: ${v}% ;
}
`;

export const Progress = styled.div<IProgress>`
  margin-top: 18px;
  .progress-bar {
    position: relative;
    height: 4px;
    display: flex;
    overflow: hidden;
    font-size: 0.75rem;
    background-color: #e9ecef;
    border-radius: 0.25rem;
    width: 100%;
    &::before {
      z-index: 2;
      content: '';
      position: absolute;
      height: 100%;
      width: ${(props) => props.value}%;
      background-color: #55ce63 !important;
      animation: ${(props) => animProgress(props.value)} 1.5s
        cubic-bezier(0.14, 0.28, 0.71, 1.53);
    }
  }
`;
