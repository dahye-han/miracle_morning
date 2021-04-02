import Link from 'next/link';
import React from 'react';

import AppLayout from '../components/AppLayout';

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
                <Link href="/"><a>로그인</a></Link>
             </div>
            }
        </>
    );
};

export default Home;