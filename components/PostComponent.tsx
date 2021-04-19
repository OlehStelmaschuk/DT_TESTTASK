import { FC } from 'react';
import { IPost, IComment } from '../interfaces/IPost';
import Link from 'next/link';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { deletePost } from '../store/actions/postActions';
import { withRouter } from 'next/router';

const PostDiv = styled.div`
    border-bottom: 1px solid;
    max-width: 600px;
    margin: 0 auto;

    &:last-child {
        border-bottom: none;
    }
`;

const CommentBlock = styled.div`
    margin: 2rem 0;
    font-size: 0.8rem;
    & .comment__header {
        font-weight: bold;
        margin: 1rem 0;
    }
`;

const CommentDiv = styled.div`
    border-bottom: 1px solid;
    padding: 2rem 0;
    &:last-child {
        border: none;
    }
`;

const ButtonsBlock = styled.div`
    display: flex;
    padding: 2rem 0;

    & div {
        margin: 0 0.5rem;
        border: 1px solid;
        padding: 5px;
        border-radius: 5px 10px 5px;
        cursor: pointer;
    }

    & .buttonblock__edit {
        border-color: #ffd500;

        &:hover {
            color: #000;
            background-color: #ffd500;

            & a {
                color: #fff;
            }
        }
    }

    & .buttonblock__delete {
        border-color: #ff0000;

        &:hover {
            color: #fff;
            background-color: #ff0000;

            & a {
                color: #fff;
            }
        }
    }
`;

const Title = styled.h1`
    & a {
        font-size: 1.5rem;
        color: #555;
        text-decoration: none;
    }
`;
const PostData = styled.p`
    color: #444;
`;

const Comment: FC<IComment> = ({ body }) => {
    return <CommentDiv>{body}</CommentDiv>;
};

const PostComponent: FC<IPost> = ({ id, title, body, comments, router }) => {
    const dispatch = useDispatch();

    const deletePostHandler = () => {
        if (confirm("Deleting post: This can't be undone")) {
            dispatch(deletePost(String(id)));
            router.push('/');
        }
    };

    return (
        <PostDiv>
            <Title>
                <Link href={`/posts/${id}`}>{title}</Link>
            </Title>
            <PostData>{body}</PostData>
            <ButtonsBlock>
                {/*<div className={'buttonblock__edit'}>Edit</div>*/}
                <div className={'buttonblock__delete'} onClick={() => deletePostHandler()}>
                    Delete
                </div>
            </ButtonsBlock>
            {comments && (
                <CommentBlock>
                    <div className="comment__header">Comments:</div>
                    {comments.map((item: IComment) => (
                        <Comment id={item.id} body={item.body} key={item.id} />
                    ))}
                </CommentBlock>
            )}
        </PostDiv>
    );
};

export default withRouter(PostComponent);
