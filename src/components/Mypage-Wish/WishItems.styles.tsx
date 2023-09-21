import styled from '@emotion/styled';

import { theme } from '@/styles/theme';

export const WishItemsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const WishItems = styled.div`
  width: 180px;
  height: auto;
  margin-top: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const WishImage = styled.img`
  width: 180px;
  height: 190px;
  margin-bottom: 3px;
  cursor: pointer;
`;
export const BrandNameContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 22px;
`;

export const BrandName = styled.div`
  font: ${theme.font.body2Bold};
  display: flex;
  align-items: center;
  width: 100%;
  height: 22px;
  padding-left: 2px;
`;

export const ProductName = styled.div`
  font: ${theme.font.body1};
  width: 100%;
  height: 22px;
  display: flex;
  align-items: center;
  padding-left: 2px;
`;

export const Price = styled(BrandName)`
  font: ${theme.font.body3};
  width: 100%;
  height: 22px;
  display: flex;
  align-items: center;
  padding-left: 2px;
`;
