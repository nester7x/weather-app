import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  flex: 1;
  z-index: 1;
  position: relative;
  :before {
    position: absolute;
    content: '';
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
`;

export const AdditionalInfo = styled.div`
  padding: 20px 0;
  border-top: 2px solid #f3f4f4;
  border-bottom: 2px solid #f3f4f4;
`;

export const Title = styled.div`
  font-size: 20px;
  line-height: 22px;
  color: #f3f4f4;
  margin: 0 0 20px;
`;

export const Item = styled.div`
  font-size: 20px;
  line-height: 22px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 10px;
`;

export const ItemName = styled.h6`
  display: flex;
  align-items: center;
  gap: 5px;
  margin: 0 0 10px;
  color: #f3f4f4;
`;

export const ItemValue = styled.p`
  color: #f3f4f4;
  font-weight: 700;
`;
