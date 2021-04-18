import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import Head from 'next/head';

import { Header, PostList } from '../components';
import { getAllPosts } from '../store/actions/postActions';

const Home: FC = () => {
    const dispatch = useDispatch();
    const state = useSelector((state: RootState) => state.post);

    useEffect(() => {
        dispatch(getAllPosts());
    }, []);

    return (
        <div>
            <Head>
                <title>DT_TEST | LATEST POST</title>
                {/*<link rel='icon' href='/favicon.ico' />*/}
            </Head>
            <Header />
            {!state.loading && <PostList />}
        </div>
    );
};

export default Home;
