import React, { useState } from 'react';
import styled, { css } from 'styled-components';

const InsertFormPositioner = styled.div`
  width: 100%;
  bottom: 0;
  left: 0;
  position: absolute;
`;

const InsertForm = styled.form`
  background: #f8f9fa;
  padding-left: 32px;
  padding-top: 32px;
  padding-right: 32px;
  padding-bottom: 32px;

  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top: 1px solid #e9ecef;
`;

const Input = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 100%;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
`;

const TodoCreate = () => {
    return (
        <>
            <InsertFormPositioner>
            <InsertForm>
                <Input autoFocus placeholder="할 일을 입력 후, Enter 를 누르세요" />
            </InsertForm>
            </InsertFormPositioner>
        </>
    );
};

export default TodoCreate;