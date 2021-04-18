import { FC, useState } from 'react';
import Head from 'next/head';
import { Header } from '../../components';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { createPost } from '../../store/actions/postActions';

const CreateFormDiv = styled.form`
    margin: 2rem auto;
    max-width: 600px;
    & span {
        font-weight: bold;
    }
    & div {
        display: flex;
        justify-content: space-between;
        margin: 1rem 0;
        flex-wrap: wrap;
    }
    & input {
        display: block;
        width: 100%;
        max-width: 500px;
    }
    & textarea {
        resize: none;
        width: 100%;
        height: 200px;
        max-width: 500px;
    }
`;

const SaveButton = styled.button`
    border: 1px solid;
    background-color: white;
    padding: 5px;
    color: green;
    border-radius: 5px 10px 5px;
    cursor: pointer;
    &:hover {
        background-color: green;
        color: white;
    }
`;

const NewPost: FC = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const createPostHandler = (e: any) => {
        if (title && body) {
            e.preventDefault();
            dispatch(createPost({ title, body }));
            router.push('/');
        }
    };

    return (
        <div>
            <Head>
                <title>DT_TEST | New Post</title>
                {/*<link rel='icon' href='/favicon.ico' />*/}
            </Head>
            <Header />
            <CreateFormDiv>
                <div>
                    <span>Title:</span>{' '}
                    <input required value={title} onChange={(e) => setTitle(e.target.value)} type="text" />
                </div>
                <div>
                    <span>Message:</span>
                    <textarea required value={body} onChange={(e) => setBody(e.target.value)} />
                </div>
                <SaveButton onClick={(e) => createPostHandler(e)}>Save</SaveButton>
            </CreateFormDiv>
        </div>
    );
};

export default NewPost;
