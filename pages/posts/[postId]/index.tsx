import { useRouter } from 'next/router';
import { FC, useEffect } from 'react';
import Head from 'next/head';
import { useDispatch, useSelector } from 'react-redux';
import { getSinglePost } from '../../../store/actions/postActions';
import { RootState } from '../../../store/store';
import { PostComponent, Header } from '../../../components';

const Post: FC = () => {
    const state = useSelector((state: RootState) => state.post);
    const dispatch = useDispatch();
    const router = useRouter();
    const { postId } = router.query;

    useEffect(() => {
        postId && dispatch(getSinglePost(String(postId)));
    }, [postId]);

    return (
        <div>
            <Head>
                <title>DT_TEST | POST</title>
                {/*<link rel='icon' href='/favicon.ico' />*/}
            </Head>
            <Header />
            {state.post && (
                <PostComponent
                    id={state.post.id}
                    title={state.post.title}
                    body={state.post.body}
                    comments={state.post.comments}
                />
            )}
        </div>
    );
};

export default Post;
