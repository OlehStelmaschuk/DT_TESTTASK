import { FC } from 'react';
import PostComponent from './PostComponent';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

const List = styled.div`
    margin: auto;
    padding: 0 1rem;
    max-width: 600px;
`;

const PostList: FC = () => {
    const state = useSelector((state: RootState) => state.post);

    return (
        <List>
            {state.posts.map((item: { id: number; title: string; body: string }) => (
                <PostComponent id={item.id} title={item.title} body={item.body} key={item.id} />
            ))}
        </List>
    );
};
export default PostList;
