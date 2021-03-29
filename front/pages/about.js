import React from 'react';
import Head from 'next/head';
import { useSelector } from 'react-redux';
import { END } from 'redux-saga';

import { Avatar, Card } from 'antd';
import AppLayout from '../components/AppLayout';
import wrapper from '../store/configureStore';
import { LOAD_USER_REQUEST } from '../reducers/user';

const About = () => {
    const { userInfo } = useSelector((state) => state.user);

    return (
        <AppLayout>
            <Head>
                <title>HANAE | MIRACLE MORNING</title>
            </Head>
            {userInfo
                ? (
                    <Card
                        action = {[
                            <div key="twit">
                                짹짹
                                <br />
                                {userInfo.Posts}
                            </div>,
                            <div key="following">
                                팔로잉
                                <br />
                                {userInfo.Followings}
                            </div>,
                            <div key="follower">
                                팔로워
                                <br />
                                {userInfo.Followers}
                            </div>,
                        ]}
                    >
                        <Card.Meta
                            avatar={<Avatar>{userInfo.nickname[0]}</Avatar>}
                            title={userInfo.nickname}
                            description="미라클 모닝 매니아"
                        />
                    </Card>
                )
                : null}
        </AppLayout>
    );
};

export const getStaticProps = wrapper.getStaticProps(async (context) => {
    context.store.dispatch({
        type: LOAD_USER_REQUEST,
        data: 1,
    });
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
});

export default About;