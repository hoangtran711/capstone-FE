import styled from 'styled-components';

export const Wrapper = styled.div`
  .banner {
    .banner__content {
      .banner__img {
        position: relative;
        img {
          height: 85vh;
          width: 100%;
        }
        .banner__contentText {
          position: absolute;
          top: 20%;
          left: 220px;
          max-width: 1200px;

          h2 {
            margin: 0;
            font-size: 120px;
            line-height: 110px;
            color: #fff;
            font-weight: 700;
            letter-spacing: -0.06em;
            animation-delay: 0.5s;
          }
          p {
            margin: 0;
            font-size: 40px;
            line-height: 1em;
            animation-delay: 1.5s;
            color: #fff;
          }
          .button-red {
            margin-top: 40px;
          }
        }
        .bannerBtn__pre {
          position: absolute;
          border-top-right-radius: 30px;
          border-bottom-right-radius: 30px;
          left: 0;
          background: 0 0;
          width: 70px;
          height: 60px;
          font-size: 14px;
          line-height: 48px;
          color: #001328;
          background-color: rgba(255, 255, 255, 0.25);
          visibility: visible !important;
          opacity: 1;
          transition: all 0.5s ease;
          top: 49%;
          transform: translateY(-50%);
          z-index: 91;
          cursor: pointer;
          &:hover {
            background-color: #ff9b44d8;
            .bannerBtn__preChild svg {
              color: white;
            }
          }
          .bannerBtn__preChild {
            display: flex;
            height: 100%;
            svg {
              margin: auto;
              font-size: 23px;
            }
          }
        }
        .bannerBtn__next {
          position: absolute;
          border-top-left-radius: 30px;
          border-bottom-left-radius: 30px;
          right: 0;
          background: 0 0;
          width: 70px;
          height: 60px;
          font-size: 14px;
          line-height: 48px;
          color: #001328;
          background-color: rgba(255, 255, 255, 0.25);
          visibility: visible !important;
          opacity: 1;
          transition: all 0.5s ease;
          top: 49%;
          transform: translateY(-50%);
          z-index: 91;
          cursor: pointer;
          &:hover {
            background-color: #ff9b44d8;
            .bannerBtn__nextChild svg {
              color: white;
            }
          }
          .bannerBtn__nextChild {
            display: flex;
            height: 100%;
            svg {
              margin: auto;
              font-size: 23px;
            }
          }
        }
      }
    }
  }
`;
