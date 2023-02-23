import styled from 'styled-components';

export const Wrapper = styled.div`
  .service {
    padding-top: 120px;
    .service__content {
      text-align: center;
      .service__title {
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
      .service__itemRow {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        justify-content: center;
        .service__itemRowContent {
          position: relative;
          .service__item {
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
            &:hover {
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
          .service__itemText {
            margin: 0;
            color: #001328;
            font-size: 20px;
            font-weight: 800;
            margin-top: 40px;
          }
        }
      }
    }
  }
`;
