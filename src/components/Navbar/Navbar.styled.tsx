import styled from 'styled-components';

export const Wrapper = styled.div`
  background: linear-gradient(to right, #ff9b44 0%, #fc6075 100%);
  min-height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  .logo {
    width: 40px;
  }
  .title {
    color: #ffffff;
    font-size: 20px;
    font-weight: normal;
  }
  .MuiFormControl-root {
    border: none !important;
  }
  .search-box {
    background-color: rgba(255, 255, 255, 0.1) !important;
    border-radius: 20px !important;
    padding: 7px 20px !important;
    margin-right: 10px;
    .MuiInputBase-root {
      overflow: hidden;
      border-radius: 20px !important;
    }
    .icon {
      color: white;
    }
    input {
      color: white;
      padding: 0 5px !important;
    }
  }
`;
