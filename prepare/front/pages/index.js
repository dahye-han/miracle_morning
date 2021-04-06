import React from 'react';
import { useSelector } from 'react-redux';

import AppLayout from '../components/AppLayout';
import LoginForm from '../components/LoginForm';

const Home = () => {
    const { logInDone } = useSelector((state) => state.user);
    const { mainPosts } = useSelector((state) => state.post);

    return (
        <>
            {logInDone 
            ? 
            <AppLayout>
                {mainPosts.map((post) => <PostCard key={post.id} post={post} />)}
            </AppLayout> 
            : 
            <div style={{ display:'flex', justifyContent:'center', alignItems:'center', minHeight:'100vh' }}>
                <LoginForm />
             </div>
            }
        </>
    );
};

export default Home;