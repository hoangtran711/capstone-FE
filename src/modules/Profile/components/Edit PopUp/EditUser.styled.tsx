import {
  anim,
  animContent,
} from 'modules/Project/Create Project/CreateProject.styled';
import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
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
    width: 40%;
    max-height: 80%;
    overflow: scroll;
    background: #e4efef;
    z-index: 2;
    position: relative;
    border-radius: 8px;
    padding: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'CircularStd', sans-serif;
    color: #1f1f1f;
    row-gap: 12px;
    animation: ${animContent} 0.3s forwards;
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
    form,
    .form {
      background-color: white;
      padding: 30px;
      display: flex;
      flex-direction: column;
      border: 1px solid #ededed;
      box-shadow: 0 1px 1px 0 rgb(0 0 0 / 20%);
      .title {
        font-size: 26px;
        font-weight: 600;
        margin-bottom: 24px;
        text-align: center;
      }
      .subtitle {
        color: #888888;
        font-size: 18px;
        text-align: center;
        margin: 0 0 30px;
        font-weight: 600;
      }
      .text-field {
        &:not(:first-child) {
          margin-top: 20px;
        }
      }
      .authenticate-button {
        text-align: center;
        background: linear-gradient(
          to right,
          #ff9b44 0%,
          #fc6075 100%
        ) !important;
        font-size: 22px;
        border-radius: 4px;
        padding: 10px 26px;
        text-transform: capitalize;
        margin-top: 20px;
        border: none;
        cursor: pointer;
      }
      .forgot {
        color: #888888;
        font-size: 16px;
        font-weight: 600;
        text-align: right;
        margin-top: 15px;
      }
      .redirect {
        text-align: center;
        font-size: 16px;
        font-weight: 600;
        display: block;
        margin: 20px 0px;
        a {
          color: #0d6efd;
          text-decoration: none;
        }
      }
    }
  }
`;
