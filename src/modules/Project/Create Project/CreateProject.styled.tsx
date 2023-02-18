import styled, { keyframes } from 'styled-components';
export const anim = keyframes`
0%{
  opacity:0;
  
}
100%{
  opacity:1;
  

}

`;
export const animContent = keyframes`
0%{
  
  transform: translateY(-48px);
}
100%{
  
  transform: translateY(0);

}

`;
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
  animation: ${anim} 0.3s forwards;
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
    animation: ${animContent} 0.1s forwards;
    width: 40%;
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
    p {
      font-weight: 400;
      font-size: 12px;
      color: red;
      margin: 0;
    }
    form {
      width: 100%;
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
      margin: 12px 0px;

      .item {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        row-gap: 8px;
        &.lst {
          max-height: 130px;
          overflow: scroll;
        }

        span {
          font-size: 14px;
          color: green;
          font-weight: 400;
        }
        .label {
          font-weight: bold;
          font-size: 14px;
          color: #1f1f1f;
        }
        .value {
          border: 1px solid rgba(0, 0, 0, 0.2);
          padding: 14px 12px;
          border-radius: 6px;
          flex: 1;
        }
        textarea {
          border: 1px solid rgba(0, 0, 0, 0.3);
          padding: 14px 12px;
          border-radius: 6px;
          width: 100%;
          box-sizing: border-box;
          min-height: 150px;
          font-family: 'CircularStd', sans-serif;
        }
        .btn-add-wrapper {
          width: 100%;
          display: flex;
          justify-content: space-between;
          margin-top: 12px;
          column-gap: 12px;
          .btn-add {
            font-size: 16px;
            font-weight: 600;
            min-width: 100px;
            border-radius: 12px;
            padding: 12px 0px;
            background-color: blue;
            border: 1px solid #ff9b44;
            color: white !important;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
          }
        }
      }
    }
    .btn-create-wrapper {
      width: 100%;
      display: flex;
      justify-content: center;
      margin: 34px 0px;

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
        cursor: pointer;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      }
    }
  }
`;
