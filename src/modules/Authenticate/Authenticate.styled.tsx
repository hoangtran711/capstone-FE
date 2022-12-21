import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f7f7f7;
  min-height: 100vh;
  .logo {
    cursor: pointer;
    margin: 20px 0px;
  }
  .form {
    background-color: white;
    width: 480px;
    padding: 30px;
    display: flex;
    flex-direction: column;
    border: 1px solid #ededed;
    box-shadow: 0 1px 1px 0 rgb(0 0 0 / 20%);
    .title {
      font-size: 26px;
      font-weight: 600;
      margin-bottom: 5px;
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
`;
