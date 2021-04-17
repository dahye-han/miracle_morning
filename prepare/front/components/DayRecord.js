import React, { useCallback, useRef } from 'react';
import { Button, Form, Upload, Row, Col } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import useInput from '../hooks/useInput';
import TodoTemplate from './todoList/TodoTemplate';
import TodoHead from './todoList/TodoHead';
import TodoList from './todoList/TodoList';

const { Dragger } = Upload;

const DayRecord = ({dateKey, selectDate}) => {
    const dispatch = useDispatch();
    const imageInput = useRef();
    const [text, onChangeText, setText] = useInput('');

    const onSubmit = useCallback(() => {
        // if(!text || !text.trim()){
        //   return alert('게시글을 작성하세요.');
        // }
        // console.log(text);
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
        <>
            <Form style={{ margin: '10px 0 20px' }} encType="multipart/form-data" onFinish={onSubmit}>
                <Row>
                    <Col xs={24} md={12}>
                        <TodoTemplate>
                            <TodoHead selectDate={selectDate}/>
                            <TodoList />
                        </TodoTemplate>
                    </Col>
                    <Col xs={24} md={12}>
                        <input type="file" name="image" multiple hidden ref={imageInput} />
                        <Button>이미지 업로드</Button>
                        <Button type="primary"htmlType="submit">게시물 업로드</Button>
                    </Col>
                </Row>
            </Form>
        </>
    );
};

DayRecord.propTypes = { 
    dateKey: PropTypes.number.isRequired,
    selectDate: PropTypes.string.isRequired,
};

export default DayRecord;