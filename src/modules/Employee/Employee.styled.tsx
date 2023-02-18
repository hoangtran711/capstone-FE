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
        &.active {
          background-color: rgba(255, 155, 68, 1);
          .icon {
            color: white;
          }
        }
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
    .grid-wrapper {
      transition: all 0.5s;
      &.table {
        padding-top: 12px;
        .profile-widget {
          display: flex;
          align-items: center;
          .profile-img {
            margin: 0 12px;
          }
          h4 {
            margin: 0 12px;
          }
        }
      }

      .profile-widget {
        background-color: #ffffff;
        border: 1px solid #ededed;
        // margin-bottom: 30px;
        padding: 20px;
        text-align: center;
        position: relative;
        overflow: hidden;
        border-radius: 4px;
        box-shadow: 0 1px 1px 0 rgb(0 0 0 / 20%);
        cursor: pointer;
        .profile-img {
          height: 80px;
          margin: 0 auto;
          width: 80px;
          position: relative;
          a {
            font-size: 24px;
            height: 80px;
            line-height: 80px;
            margin: 0;
            width: 80px;
            img {
              width: 100%;
              height: 100%;
              object-fit: cover;
              border-radius: 50%;
            }
          }
        }
        .profile-action {
          a {
            color: #777;
            font-size: 18px;
            display: inline-block;
            position: absolute;
            top: 8px;
            right: 3px;
          }
        }
        h4 {
          margin-top: 10px;
          margin-bottom: 2px;
          a {
            color: #333333;
            text-decoration: none;
          }
        }
        .text-major {
          position: relative;
          color: #8e8e8e;
        }
      }
    }
  }
`;
