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
    .card-9 {
      /* min-height: 392px; */
    }
    .card {
      background-color: white;
      border: 1px solid #ededed;
      margin-bottom: 30px;
      box-shadow: 0 1px 1px rgb(0 0 0 / 20%);
      border-radius: 3px;
      .card-body {
        flex: 1 1 auto;
        padding: 1rem 2rem;
        font-size: 18px;
        letter-spacing: 0.2px;
        line-height: 20px;
        .project-title {
          margin: 0 0 5px;
          .card-title {
            color: #1f1f1f;
            font-size: 24px;
            font-weight: 600;
            margin-bottom: 20px;
            margin-top: 2px;
            margin-bottom: 3px;
          }
          small {
            .text-muted {
              color: #8e8e8e !important;
            }
            span {
              font-size: 12px !important;
            }
          }
          .detail-content {
            .detail-row {
              padding: 10px 0;
              display: flex;
              justify-content: space-between;
            }
          }
          .progress {
            margin-top: 10px;
            margin-bottom: 8px;
            .progress-bar {
              margin-top: 5px;
              position: relative;
              height: 4px;
              display: flex;
              overflow: hidden;
              font-size: 0.75rem;
              background-color: #e9ecef;
              border-radius: 0.25rem;
              &::before {
                z-index: 2;
                content: '';
                position: absolute;
                height: 100%;
                width: 40%;
                background-color: #55ce63 !important;
              }
            }
          }
          .joined-student-title {
            display: flex;
            justify-content: space-between;
            .add-icon {
              width: 80px;
              height: 30px;
              background: linear-gradient(to right, #ff9b44 0%, #fc6075 100%);
              color: white;
              border-radius: 4px;
              cursor: pointer;
              align-items: center;
              justify-content: center;
              padding: 0 3px;
              font-size: 15px;
              display: flex;
              align-items: center;
              .icon {
                font-size: 15px;
              }
            }
          }
          .student-list {
            margin-top: 10px;
            .list-item {
              display: flex;
              margin-top: 7px;
              .list-left {
                margin-right: 10px;
                a {
                  img {
                    border-radius: 50%;
                    height: 35px;
                    width: 35px;
                  }
                }
              }
              .list-right {
                .major {
                  color: #8e8e8e !important;
                }
              }
            }
          }
        }
        .file-list {
          margin-top: 20px;
          font-size: 16px;
          .list-item {
            display: flex;
            margin-bottom: 10px;
            .list-left {
              margin-right: 10px;
              a {
                img {
                  border-radius: 50%;
                  height: 35px;
                  width: 35px;
                }
              }
              .file-icon {
                color: #bababa;
                font-size: 36px;
              }
            }
            .list-right {
              .major {
                color: #8e8e8e !important;
                a {
                  color: #ff9b44;
                  text-decoration: underline;
                }
              }
              a {
                text-decoration: none;
                color: blue;
              }
            }
          }
        }
      }
    }
  }
`;
