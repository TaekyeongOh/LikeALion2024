import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './components/Main';
import Header from './components/Section/Header';
import Nav from './components/Section/Nav';
import Loading from './components/Loading';
import Like from './components/Like';
import Search from './components/Search';
import Mypage from './components/Mypage';

const App = () => {
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await fetch(`api url`, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                
            });

            if (!response.ok) {
                throw new Error('API 호출 실패');
            }

            const result = await response.json();
            console.log('mainData', result);
        } catch (error) {
            console.error(error);
            window.alert('API 호출 중 오류가 발생했습니다.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData(); 
        return () => {
            setLoading(false);
        };
    }, []);

    return (
        <BrowserRouter>
            <Header />
            {loading ? (
                <Loading />
            ) : (
                <>
                    <Routes>
                        <Route path='/' element={<Main />} />
                        <Route path='/loading' element={<Loading />} />
                        <Route path='/like' element={<Like />} />
                        <Route path='/search' element={<Search />} />
                        <Route path='/mypage' element={<Mypage />} />
                    </Routes>
                    <Nav />
                </>
            )}
        </BrowserRouter>
    );
};

export default App;
