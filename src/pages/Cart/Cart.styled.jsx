import styled from 'styled-components';
import { Row, Column } from '../../components/common/styled.components';

export const CartWrapper = styled(Row)`
  margin-top: 7px;
  padding: 20px 80px;
`;

export const SummaryWrapper = styled(Column)`
  align-items: center;
  width: auto;
  height: fit-content;
  padding: 30px;
  background-color: #e5e7eb;
`;

export const SummaryItem = styled(Row)`
  margin-top: 3px;
  width: 100%;
  justify-content: space-between;
`;

export const ProductWrapper = styled(Column)`
  width: 90%;
  align-items: center;
`;

export const DetailsContainer = styled(Row)`
  border-bottom: 2px solid #e5e7eb;
  width: inherit;
`;
