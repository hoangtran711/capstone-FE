import styled from 'styled-components';

export const Wrapper = styled.div`
  .header {
  }
  .header__top {
    display: flex;
    align-items: center;
    background-color: black;
    color: #e7f2ff;
  }

  .header__top .header__topLeft {
    float: left;
    display: flex;
    align-items: center;
    padding: 15px 0;
  }

  .header__top .header__topLeft span {
    font-size: 13px;
    font-weight: 600;
    margin: 0;
    margin-left: 5px;
  }

  .header__top .header__topLeft a {
    color: #fff;
    font-weight: 800;
    text-decoration: underline;
    margin-left: 5px;
  }

  .header__top .header__topRight {
    float: right;
    padding: 15px 0;
  }
  .header__top .header__topRight ul {
    list-style: none;
    display: flex;
    justify-content: space-evenly;
    margin: 0;
    padding: 0;
  }
  .header__top .header__topRight ul li {
    margin-left: 16px;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
    svg {
      color: white;
      transition: all 0.5s;
      &:hover {
        color: #fc6075;
      }
    }
  }

  /* .header__top .header__topRight ul li span {
    font-weight: 800;
    margin-right: 16px;
    margin-left: 3px;
  } */
  .header__bottom {
    background: linear-gradient(to right, #ff9b44 0%, #fc6075 100%);
    z-index: 2;
  }

  .header__bottom .headerBottom__content {
    display: flex;
    justify-content: space-between;
  }

  .header__bottom .headerBottom__left {
    display: flex;
    align-items: center;
    padding: 15px 0;
  }

  .header__bottom .headerBottom__left img {
    width: 50px;
    height: 50px;
  }

  .header__bottom .headerBottom__left span {
    color: white;
    font-size: 23px;
    margin-left: 10px;
  }

  .headerBottom__rightContent {
    display: flex;
    align-items: center;
    font-size: 15px;
    line-height: 24px;
    letter-spacing: 0.5px;
    font-weight: 600;
  }

  .header__bottom .headerBottom__content .headerBottom__mid {
    position: relative;
  }

  .header__bottom .headerBottom__content .headerBottom__mid ul {
    display: flex;
    list-style: none;
  }

  .header__bottom .headerBottom__content .headerBottom__mid ul li {
    color: white;
    padding: 15px 20px;
    cursor: pointer;
    position: relative;
    .dropdown-menu {
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
      text-align: center;
      background-color: #0e0e0e;
      width: 200px;
      border-radius: 5px;
      opacity: 0;
      visibility: hidden;
      transition: all 0.3s;
      padding-top: 20px;
      padding-bottom: 5px;

      .dropdown-item {
        color: white;
        text-decoration: none;
        display: block;
        padding: 10px 15px;
        &:hover {
          background-color: #222;
        }
      }
    }
    &:hover .dropdown-menu {
      opacity: 1;
      visibility: visible;
    }
  }

  .header__bottom .headerBottom__content .headerBottom__right a {
    text-decoration: none;
    color: black;
    padding: 10px 15px;
    background-color: white;
    border: 1px solid white;
    border-radius: 22px;
    margin-left: 10px;
    transition: all 0.5s;
    &:hover {
      background-color: #222;
      color: white;
      border: 1px solid #222;
    }
  }
`;
