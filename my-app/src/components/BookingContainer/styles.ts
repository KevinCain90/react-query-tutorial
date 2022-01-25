import styled from 'styled-components';

export const StyledBookingContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  margin: 0 auto;
  max-width: 1180px;
  min-height: 100vh;
  padding: 80px 0;
  @media (max-width: 1200px) {
    padding: 80px 20px;
  }
  @media (max-width: 900px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const StyledAside = styled.aside`
  width: 35%;
  box-sizing: border-box;
  padding-right: 80px;
  @media (max-width: 1200px) {
    padding-right: 20px;
  }
  @media (max-width: 900px) {
    padding-right: 0;
    margin-bottom: 20px;
    width: 100%;
  }
`;

export const StyledMain = styled.main`
  flex: 1;
`;