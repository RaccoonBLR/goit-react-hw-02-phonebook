import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ContactText = styled.p`
  display: flex;
  align-items: center;
  font-size: 20px;
`;

export const ContactNumber = styled.span`
  font-weight: 200;
  font-size: 26px;
  margin-left: 4px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 10px 10px;

  svg {
    pointer-events: none;
  }
`;
