import React from 'react';
import styled from 'styled-components';
import TodoHead from './TodoHead';

const TodoTemplateBlock = styled.div`
  height: 768px;

  position: relative;
  background: white;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);

  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
`;

const TodoTemplate = ({children}) => {
    return (
        <TodoTemplateBlock>{children}</TodoTemplateBlock>
    );
};

export default TodoTemplate;