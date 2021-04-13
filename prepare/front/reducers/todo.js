import React, { useReducer } from 'react';
import produce from '../util/produce';

export const initialState = [
    {
        id: 1,
        text: '프로젝트 생성하기',
        done: true
      },
      {
        id: 2,
        text: '컴포넌트 스타일링하기',
        done: true
      },
      {
        id: 3,
        text: 'Context 만들기',
        done: false
      },
      {
        id: 4,
        text: '기능 구현하기',
        done: false
    }
];

const reducer = (state = initialState, action) => {
    return produce(state, (draft) => {
        switch (action.type) {
            case 'CREATE':
                return state.concat(action.todo);
            case 'TOGGLE':
                return state.map(todo => todo.id === action.id ? draft.done : todo);
            case 'REMOVE':
                return state.filter(todo => todo.id !== action.id);
            default:
                break;
        }
    });
};

export function TodoProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);
    return children;
}

export default reducer;