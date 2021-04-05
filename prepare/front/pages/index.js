import React from 'react';
import { useSelector } from 'react-redux';

import AppLayout from '../components/AppLayout';
import LoginForm from '../components/LoginForm';

const Home = () => {
    const { logInDone } = useSelector((state) => state.user);

    return (
        <>
            {logInDone 
            ? 
            <AppLayout>
                Main
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