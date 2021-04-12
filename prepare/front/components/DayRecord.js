import React, { useCallback, useRef } from 'react';
import { Button, Form, Input, Upload, message } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import useInput from '../hooks/useInput';
import TodoTemplate from './todoList/TodoTemplate';
import TodoHead from './todoList/TodoHead';
import TodoList from './todoList/TodoList';
import TodoCreate from './todoList/TodoCreate';

const { Dragger } = Upload;

const DayRecord = ({dateKey}) => {
    const dispatch = useDispatch();
    const imageInput = useRef();
    const [text, onChangeText, setText] = useInput('');

    const onSubmit = useCallback(() => {
        if(!text || !text.trim()){
          return alert('게시글을 작성하세요.');
        }
        console.log(text);
        // const formData = new FormData();
        // imagePaths.forEach((p) => {
        //   formData.append('image', p);
        // });
        // formData.append('content', text);
        // return dispatch({
        //   type: ADD_POST_REQUEST,
        //   data: formData,
        // });
    }, [text]);



    return (
        <div>
            <Form style={{ margin: '10px 0 20px' }} encType="multipart/form-data" onFinish={onSubmit}>
                <div style={{width: '49%', height:'800px' ,display:'inline-block'}}>
                    Content of tab {dateKey}
                    <TodoTemplate>
                        <TodoHead />
                        <TodoList />
                        <TodoCreate />
                    </TodoTemplate>
                </div> 
                <div style={{width: '49%', display:'inline-block'}}>
                    <input type="file" name="image" multiple hidden ref={imageInput} />
                    <Button >이미지 업로드</Button>
                    <Button type="primary"htmlType="submit">게시물 업로드</Button>
                </div>
            </Form>
        </div>
    );
};

DayRecord.propTypes = { 
    dateKey: PropTypes.number.isRequired
};

export default DayRecord;