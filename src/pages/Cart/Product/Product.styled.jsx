import styled from 'styled-components';
import { Column, Row } from '../../../components/common/styled.components';

export const ProductContainer = styled(Row)`
  align-items: center;
  height: auto;
  padding-bottom: 30px;
  margin-top: 30px;
  border-bottom: 2px solid #e5e7eb;
  width: inherit;

  @media (max-width: 900px) {
    align-items: flex-start;
    flex-direction: column;
    gap: 10px;
  }
`;

export const StyledImg = styled.img`
  height: 150px;
  width: 150px;
`;

export const ProductDetailsContainer = styled(Row)`
  flex: 1 1 0;
  @media (max-width: 600px) {
    margin-bottom: 30px;
    flex-direction: column;
    gap: 20px;
  }
`;

export const DetailsWrapper = styled(Column)`
  justify-content: center;
  margin-left: 20px;
  height: auto;

  @media (max-width: 600px) {
    margin: 0;
  }
`;

export const PriceQuantityContainer = styled(Column)`
  flex: 1 1 0;
  justify-content: flex-start;
  align-items: center;
  height: 100%;

  button {
    margin-top: 10px;
  }
`;

export const InputPriceContainer = styled(Row)`
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const PriceContainer = styled.div`
  margin: 20px;
`;

export const QuantityColumn = styled(Column)`
  gap: 10px;
`;
