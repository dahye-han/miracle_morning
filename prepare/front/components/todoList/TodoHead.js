import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import moment from 'moment';

const TodoHeadBlock = styled.div`
  padding-top: 38px;
  padding-left: 30px;
  padding-right: 30px;
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

moment.locale('ko');

const TodoHead = ({selectDate}) => {
    const selDate = moment(selectDate).format('LL');
    const selDateName = moment(selectDate).format('dddd');

    return (
        <TodoHeadBlock>
            <h1>{selDate}</h1>
            <div className="day">{selDateName}</div>
            <div className="tasks-left">할 일 2개 남음</div>
        </TodoHeadBlock>
    );
};

TodoHead.propTypes = { 
  selectDate: PropTypes.string.isRequired,
};

export default TodoHead;