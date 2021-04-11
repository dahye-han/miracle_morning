import React from 'react';
import styled from 'styled-components';

const TodoHeadBlock = styled.div`
  padding-top: 24px;
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 12px;
  border-bottom: 1px solid #e9ecef;
  h1 {
    margin: 0;
    font-size: 24px;
    color: #343a40;
  }
  .day {
    margin-top: 2px;
    color: #868e96;
    font-size: 15px;
  }
  .tasks-left {
    color: #20c997;
    font-size: 16px;
    margin-top: 20px;
    font-weight: bold;
  }
`;

const TodoHead = () => {
    return (
        <TodoHeadBlock>
            <h1>2019년 7월 10일</h1>
            <div className="day">수요일</div>
            <div className="tasks-left">할 일 2개 남음</div>
        </TodoHeadBlock>
    );
};

export default TodoHead;