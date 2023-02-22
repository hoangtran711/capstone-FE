import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 30px;
  box-sizing: border-box;
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
    margin-bottom: 30px;
  }
  .main-card {
    margin-top: 30px;
    box-sizing: border-box;
    background-color: white;
    border: 1px solid #ededed;
    box-shadow: 0 1px 1px rgb(0 0 0 / 20%);
    width: 100%;
    border-radius: 4px;
    .card-container {
      padding: 2rem 1rem;
      .grid-1 {
        .personal-img {
          a {
            display: flex;
            justify-content: center;
            .image {
              border-radius: 50%;
              width: 120px;
              height: 120px;
              filter: drop-shadow(0 0 0.35rem #ff9b44);
            }
          }
        }
        .info-left {
          border-right: 1px dashed #8e8e8e;
          h3 {
            font-weight: 500;
            font-size: 24px;
            margin: 1rem 0 10px;
          }
          .text-mute {
            color: #8e8e8e !important;
          }
          .class {
            margin-top: 10px;
          }
          .student-id {
            margin-top: 10px;
          }
          .date-join {
            margin-top: 10px;
          }
          .send-message {
            background: linear-gradient(to right, #ff9b44 0%, #fc6075 100%);

            text-align: center;
            font-weight: 400;
            line-height: 1.5;
            cursor: pointer;
            border: 1px solid transparent;
            padding: 0.375rem 0.75rem;
            font-size: 1rem;
            border-radius: 0.25rem;
            margin-top: 30px;
            width: 140px;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            a {
              text-decoration: none;
              color: #ffffff;
            }
          }
        }
        .info-right {
          li {
            text-decoration: none;
            margin-bottom: 24px;
            display: flex;
            position: relative;
            align-items: center;
            column-gap: 12px;
            .title {
            }
            .text {
              display: flex;
              align-items: center;
              column-gap: 12px;

              color: #888888;
              a {
                color: #55ce63;
                &.isNotVerified {
                  color: red;
                }
                &.isVerified {
                  color: #55ce63;
                }
              }
              .info-ic {
                color: red;
              }
              .check-ic {
                color: #55ce63;
              }
            }
          }
        }
        .edit-profile {
          position: relative;
          a {
            position: absolute;
            right: 0;
          }
        }
      }
    }
  }
  /* .child-card { */
  /* margin-top: 30px;
    box-sizing: border-box;
    background-color: white;
    border: 1px solid #ededed;
    box-shadow: 0 1px 1px rgb(0 0 0 / 20%);
    width: 100%;
    border-radius: 4px; */
  .child-card {
    margin-top: 50px;
    .grid-2 {
      .card {
        position: relative;
        height: 420px;
        padding: 2rem 1rem;
        box-sizing: border-box;
        background-color: white;
        border: 1px solid #ededed;
        box-shadow: 0 1px 1px rgb(0 0 0 / 20%);
        width: 100%;
        border-radius: 4px;
        h3 {
          margin-top: 0;
          margin-bottom: 20px;
        }
        .personal-info {
          padding: 0;
          margin-bottom: 0;
          li {
            text-decoration: none;
            margin-top: 24px;
            display: flex;
            position: relative;
            .title {
            }
            .text {
              left: 136px;
              position: absolute;
              color: #888888;
              a {
                color: rgb(85, 26, 139);
              }
            }
            .learning-status {
              color: rgb(85, 26, 139);
            }
          }
        }
        .edit-profile {
          position: absolute;
          right: 16px;
          top: 32px;
        }
      }
    }
  }
  /* } */
`;
