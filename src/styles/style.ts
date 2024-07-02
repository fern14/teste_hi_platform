import styled from "styled-components";

export const CheckboxInput = styled.input`
  width: 1.2rem;
  height: 1.2rem;
  cursor: pointer;
  margin-right: 0.5rem;
`;

export const AccordionItem = styled.div<{ level: number }>`
  margin-left: ${(props) => props.level * 20}px;
  margin-bottom: 1rem;
  margin-top: 1rem;
`;

export const AccordionHeader = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0.5rem;
  background-color: #f0f0f0;
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin-right: 0.5rem;
`;

export const Text = styled.span`
`;

export const LinkButtons = styled.button`
   cursor: pointer;
   border: none;
   padding: 15px 25px; 
   margin-right: .5rem; 
   margin-bottom: .5rem; 
   border-radius: 6px;
`;