import styled from 'styled-components';
export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: 10;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  .overlay {
    width: 100%;
    height: 100%;
    z-index: 1;
    position: absolute;
    left: 0;
    top: 0;
    background: rgba(0, 0, 0, 0.5);
  }
  .content {
    width: 40%;
    height: 80%;
    background: white;
    z-index: 2;
    position: relative;
    border-radius: 8px;
    padding: 12px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'CircularStd', sans-serif;
    color: #1f1f1f;
    .close {
      border-radius: 50%;
      background: grey;
      position: absolute;
      top: 12px;
      right: 12px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      color: white;
      padding: 4px;
      font-weight: 700;
      .ic {
        font-size: 13px;
      }
    }
    .title {
      font-family: 'CircularStd', sans-serif;
      font-size: 22px;
      color: #1f1f1f;
      font-weight: 700;
      margin: 32px 0px 24px 0px;
    }
    .items {
      width: 100%;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 22px;

      .item {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        row-gap: 8px;
        .label {
          font-weight: 600;
          font-size: 14px;
          color: #1f1f1f;
        }
        .value {
          border: 1px solid rgba(0, 0, 0, 0.2);
          padding: 14px 12px;
          border-radius: 6px;
        }
        &.secondary {
          width: 100%;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
          .item {
            width: 100%;
          }
        }
        &.third {
          width: 100%;
          display: grid;
          grid-template-columns: 1fr;
          gap: 14px;
        }
      }
    }
    .desc {
      width: 100%;
      .item {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        row-gap: 8px;
        .label {
          font-weight: bold;
          font-size: 14px;
          color: #1f1f1f;
        }
        textarea {
          border: 1px solid rgba(0, 0, 0, 0.3);
          padding: 14px 12px;
          border-radius: 6px;
          width: 100%;
          box-sizing: border-box;
          min-height: 150px;
        }
      }
    }
    .btn-create-wrapper {
      width: 100%;
      display: flex;
      justify-content: center;
      margin-top: 24px;

      .btn {
        font-size: 18px;
        font-weight: 600;
        min-width: 200px;
        border-radius: 50px;
        padding: 14px 20px;
        background-color: #ff9b44;
        border: 1px solid #ff9b44;
        color: #ffffff !important;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
`;
