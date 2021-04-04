import Link from 'next/link';
import React from 'react';

import AppLayout from '../components/AppLayout';
import LoginForm from '../components/LoginForm';

const Home = () => {
    const isLoggedIn = true;

    return (
        <>
            {isLoggedIn 
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