import styled, { keyframes } from 'styled-components';
export const anim = keyframes`
0%{
  opacity:0;
  
}
100%{
  opacity:1;
  

}

`;
export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: 1000;
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
    width: 40%;
    background: white;
    z-index: 2;
    position: relative;
    border-radius: 8px;
    padding: 42px 24px;
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
      margin: 24px 0px;
    }
    .list-user {
      width: 100%;
      .user {
        box-sizing: border-box;
        display: flex;
        align-items: center;
        width: 100%;
        padding: 12px;
        border-top: 1px solid rgba(0, 0, 0, 0.2);
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
        &.head {
          margin-botom: 12px;
          border: none;
          font-weight: 600;
          background: #de9385;
          color: white;
          .action {
            .btn-add {
              color: white;
            }
          }
        }
        .id {
          width: 30%;
        }
        .username {
          display: flex;
          width: 20%;
          justify-content: flex-end;
        }
        .name {
          display: flex;
          width: 20%;
          justify-content: flex-end;
        }
        .action {
          display: flex;
          flex: 1;
          justify-content: flex-end;
          .btn-add {
            color: #8c97f5;
            cursor: pointer;
          }
        }
      }
    }
  }
`;
