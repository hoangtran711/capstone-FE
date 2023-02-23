import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 30px;
  box-sizing: border-box;
  #profile-cell {
    display: flex;
    column-gap: 12px;
    align-items: center;
    img {
      width: 32px;
      height: 32px;
      border-radius: 50%;
    }
    .info {
      .name {
        font-weight: 600;
        font-size: 14px;
      }
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
  }
  #line {
    width: 8px;
    height: 2px;
    background: green;
    margin: 0 auto;
  }
  .welcome {
    color: #1f1f1f;
    font-size: 26px;
    font-weight: 500;
    margin-bottom: 10px;
    font-weight: 600;
    display: block;
  }
  .breadcrumb {
    color: #6c757d;
    font-weight: 600;
    font-size: 15px;
    margin-bottom: 30px;
  }
  .grid {
    margin-top: 30px;
    .button-search {
      min-height: 50px;
      text-transform: uppercase;
      padding: 12px;
      height: 100%;
      width: 100%;
      box-sizing: border-box;
      user-select: none;
      border-radius: 4px;
      cursor: pointer;
      font: inherit;
      letter-spacing: inherit;
      background-color: #55ce63;
      border: 1px solid #55ce63;
      display: flex;
      align-items: center;
      justify-content: center;
      :hover {
        background-color: #4bb958;
      }
      a {
        color: white;
        font-weight: 400;
        line-height: 1.5;
        text-decoration: none;
        vertical-align: middle;
        cursor: pointer;
        font-size: 1rem;
        border-radius: 0.25rem;
      }
    }
    .select-major {
      background-color: white;
    }
  }
`;
