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
      border: 1px solid #ededed;
      box-shadow: 0 1px 1px rgb(0 0 0 / 20%);
      width: 100%;
      border-radius: 4px;
      .container-icon {
        width: 60px;
        height: 60px;
        background-color: rgba(255, 155, 68, 0.2);
        color: #ff9b44;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        .icon {
          font-size: 35px;
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
          font-size: 30px;
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
      .card-title {
        display: flex;
        justify-content: space-between;
        margin-bottom: 1rem;
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
    }
  }
`;
