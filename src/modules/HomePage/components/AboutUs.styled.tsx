import styled from 'styled-components';

export const Wrapper = styled.div`
  .aboutus {
    padding-top: 120px;
    .aboutus__content {
      text-align: center;
      hr {
        width: 30%;
      }
      .aboutus__title {
        margin-bottom: 60px;
        span {
          display: block;
          text-transform: uppercase;
          color: #767676;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0.04em;
          margin-bottom: 5px;
        }
        h2 {
          margin: 0;
          color: #001328;
          font-weight: 800;
          font-size: 40px;
          letter-spacing: -0.03em;
        }
      }
      .about-website {
        margin-bottom: 50px;
        .MuiGrid-item {
          padding: 0;
          align-items: center;
        }
        .grid {
          border: 1px solid #ff9b44;
          padding: 20px;
          align-items: center;
          margin-bottom: 30px;
          .website-logo {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 50px;
            border: 1px solid white;
            background-color: #ff9b44;
            img {
              width: 50px;
              height: 50px;
              color: #ff9b44;
            }
            span {
              color: white;
              font-size: 23px;
              margin-left: 10px;
            }
          }
          .website-descriptionContain {
            padding: 20px;
            .website-description {
              span {
                font-weight: 600;
              }
              font-size: 23px;
              text-align: justify;
            }
          }
        }
      }
    }
    .aboutus__itemRow {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      justify-content: center;
      .aboutus__itemRowContent {
        position: relative;
        .aboutus__item {
          img {
            list-style: none;
            width: 150px;
            height: 150px;
            margin: 0 auto;
            border-radius: 50%;
            box-shadow: 0 25px 30px 0 rgb(15 111 213 / 15%);
            text-align: center;
            /* position: relative; */
            transition: all 0.5s ease;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: #fff;
            border-color: #dee2e6;
            cursor: pointer;
            padding: 5px;
          }
          &:hover img {
            background: linear-gradient(to right, #ff9b44 0%, #fc6075 100%);
            svg {
              color: #fff;
            }
          }
          svg {
            font-size: 72px;
            font-weight: 400;
            line-height: 150px;
            position: relative;
            z-index: 10;
            color: #fc6075;
            transition: all 0.4s ease;
          }
        }
        .aboutus__itemText {
          margin: 0;
          color: #001328;
          font-size: 20px;
          font-weight: 800;
          margin-top: 40px;
        }
      }
    }
  }
`;
