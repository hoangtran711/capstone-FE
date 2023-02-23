import { animProgress } from 'modules/Project/Project.styled';
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
  }
  .grid {
    margin-top: 10px;
    margin-bottom: 60px;
    .card {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding: 16px;
      box-sizing: border-box;
      background-color: white;

      box-shadow: 0 1px 1px rgb(0 0 0 / 20%);
      width: 100%;
      border-radius: 4px;
      &.overview {
        padding: 48px 24px;
        box-shadow: 0 1px 1px rgb(0 0 0 / 20%);
        width: 100%;
        border-radius: 8px;
        color: white;
        &.student {
          background-color: #eebd5a;
          box-shadow: #eebd5a 0px 3px 12px 0px;
        }
        &.project {
          background-color: #55ce63;
          box-shadow: #55ce63 0px 3px 12px 0px;
        }
        &.task {
          background-color: #88acea;
          box-shadow: #88acea 0px 3px 12px 0px;
        }
      }
      .container-icon {
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        column-gap: 12px;
        .txt {
          font-size: 24px;
          font-weight: 600;
        }
        .icon {
          font-size: 65px;

          color: white;
        }
      }
      .chart {
        width: 100%;
      }
      &-info {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        &-number {
          font-size: 38px;
          font-weight: 600;
          margin-bottom: 8px;
        }
        &-title {
          font-weight: 500;
        }
      }
    }
    .card-statistic {
      justify-content: space-between;
      padding: 16px;
      box-sizing: border-box;
      background-color: white;
      border: 1px solid #ededed;
      box-shadow: 0 1px 1px rgb(0 0 0 / 20%);
      width: 100%;
      border-radius: 4px;
      margin: 60px 0px;
      .card-title {
        display: flex;
        justify-content: space-between;
        margin: 1rem 0px;
        .percentage {
          color: #699834;
        }
      }
      p {
        .previous-value {
          color: #8e8e8e;
        }
      }
      .progress {
        width: 100%;
        height: 5px;
        background-color: #e9ecef;
        margin-top: 1rem;
        position: relative;
        overflow: hidden;
        border-radius: 0.25rem;
        .progress-color {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 70%;
          background-color: #ff9b44;
        }
      }
      .pendings {
        width: 100%;
        display: flex;
        flex-direction: column;
        row-gap: 16px;
        margin-top: 12px;
        .req {
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          width: 100%;
          border-radius: 8px;
          row-gap: 8px;
          padding: 12px;
          border: 1px solid rgba(0, 0, 0, 0.1);

          .top {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;

            .user {
              display: flex;
              align-items: center;
              column-gap: 12px;
              img {
                width: 32px;
                height: 32px;
                border-radius: 50%;
              }
            }
            .status {
              color: green;
              padding: 6px;
              background: rgba(242, 17, 54, 0.12);
              color: #e63c3c;
              border-radius: 4px;
              font-size: 13px;
              width: 42px;
            }
          }
          .bottom {
            font-size: 14px;
          }
        }
      }
      .pro {
        display: flex;
        align-items: center;
        background: white;
        cursor: pointer;
        transition: all 0.3s;
        align-items: center;
        display: flex;
        position: relative;
        margin: 2px 0px;
        border-radius: 4px;
        padding: 4px 12px;

        &.head {
          font-weight: 600;
          background: rgba(242, 17, 54, 0.12);
          padding: 12px;
        }
        .proj-name {
          width: 50%;
        }
        .joined {
          width: 25%;
          text-align: center;
          color: #26af48 !important;
        }
        .absent {
          width: 25%;
          text-align: center;
          color: #e63c3c;
        }
      }
    }
  }
`;
export interface IPropsTask {
  value: number;
}
export const Task = styled.div<IPropsTask>`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  box-sizing: border-box;
  margin: 24px 0px;
  .top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 600;
    font-size: 14px;
    .name {
      background: rgba(242, 17, 54, 0.12);
      padding: 6px;
      border-radius: 4px;

      &.pending {
        color: #009efb;
      }
      &.inprogress {
        color: #f62d51;
      }
      &.completed {
        color: #55ce63;
      }
    }
  }
  .bottom {
    .line {
      height: 8px;
      border-radius: 4px;
      background: #e9ecef;
      position: relative;
      .value {
        border-radius: 4px;
        animation: ${(props) => animProgress(props.value)} 2s;
        width: ${(props) => props.value}%;
        position: absolute;
        top: 0;
        z-index: 2;
        height: 100%;
        &.pending {
          background: #009efb;
        }
        &.inprogress {
          background: #f62d51;
        }
        &.completed {
          background: #55ce63;
        }
      }
    }
  }
`;
