import styled from 'styled-components';

export const StyledArticle = styled.article`
  background-color: #FFF;
  margin-bottom: 20px;
  box-shadow: 2px 2px 4px 0 rgba(0,0,0,0.05);
`;

export const StyledInnerContainer = styled.div`
  display: flex;
`;

export const StyledImageContainer = styled.div`
  flex: 1;
  position: relative;
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const StyledInfoContainer = styled.div`
  box-sizing: border-box;
  width: 300px;
  padding: 20px;
`;

export const StyledH2 = styled.h2`
  font-size: 16px;
  line-height: 1.2;
  color: #162B74;
  margin-bottom: 5px;
`;