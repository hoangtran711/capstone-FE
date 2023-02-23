import styled from 'styled-components';

export const Wrapper = styled.div`
  .Footer {
    margin-top: 30px;
    background-color: rgba(37, 41, 50, 0.95);
    padding-bottom: 30px;
    .logo-box {
      display: flex;
      justify-content: center;
      padding: 30px 0;
      .logoContainer {
        display: flex;
        align-items: center;
        padding: 15px 0;
        img {
          width: 60px;
          height: 60px;
        }
        span {
          color: white;
          font-size: 30px;
          margin-left: 30px;
        }
      }
    }
    .contact {
      color: white;
      padding: 0 80px;
      .contact-content {
        text-align: center;
        margin-bottom: 10px;
        .footer-text {
          margin-bottom: 15px;
        }
        .logo-three {
          display: flex;
          justify-content: space-between;
          padding: 0 110px;
          .logo-social {
            svg {
              width: 30px;
              height: 30px;
            }
            border-radius: 50%;
            color: white;
            width: 40px;
            height: 40px;
            border: 1px solid white;
            line-height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            &:hover {
              color: #ff9b44;
              border-color: #ff9b44;
            }
          }
        }
      }
    }
  }
`;
