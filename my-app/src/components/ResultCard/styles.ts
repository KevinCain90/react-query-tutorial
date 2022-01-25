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

export const StyledH3 = styled.h3`
  font-size: 12px;
  font-weight: 400;
  margin-bottom: 10px;
  margin-top: 5px;
`;

export const StyledStarRatingDiv = styled.div<{ $starRating: number }>`
  margin-bottom: 15px;
`;

export const StyledInfoP = styled.div`
  margin-bottom: 10px;
  font-size: 12px;
`;

export const StyledBookNowButton = styled.div`
  background: #FED70D;
  color: #162B74;
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  padding: 10px;
  border-radius: 4px;
`;

export const StyledPriceSpan = styled.span`
  font-size: 28px;
`;