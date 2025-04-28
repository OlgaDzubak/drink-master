import styled from '@emotion/styled';
import ReactPaginate from 'react-paginate';

export const StyledReactPaginate = styled(ReactPaginate)`
  position: relative;
  display: flex;
  width:100%;
  padding: 14px 0;
  margin: 0 auto;
  margin-botom: 80px;
  justify-content: space-between;
  align-items: center;
  z-index: 200;
  
  @media (min-width: 768px) {
    max-width: 636px;
    padding: 14px 24px;
    margin-top: 80px;
    margin-botom: 100px;
  }

  li {
    color: ${(props)=>props.theme.mainTextColor};
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 28px;
    height: 28px;
    cursor: pointer;

    &:hover {
      border-radius: 50%;
    }

    &.active {
      border-radius: 50%;
    }

    &.selected {
      background-color: ${(props)=>props.theme.paginationSelectedColor};
      color:  ${(props)=>props.theme.footerLinkTextColor};
      border-radius: 50%;
    }
  }

  a {
    display: inline-block;
    text-align: center;
    font-weight: 500;
    font-size: 12px;
    text-decoration: none;
    color: currentColor;

    &:hover {
      transform: scale(1.15);
    }
  }

  .previous {
    margin-right: 14px;
    color:  ${(props)=>props.theme.paginationLabels};
    &:hover {
      background-color: transparent;
      color:  ${(props)=>props.theme.paginationLabelsHover};
    }

    @media (min-width: 768px) {
      margin-right: 11px;
    }
  }

  .next {
    margin-left: 14px;
    color:  ${(props)=>props.theme.paginationLabels};
    &:hover {
      background-color: transparent;
      color:  ${(props)=>props.theme.paginationLabelsHover};
    }

    @media (min-width: 768px) {
      margin-left: 16px;
    }
  }
`;
