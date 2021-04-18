import { FC } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const Menu = styled.div`
    display: flex;
    margin: 0 auto;
    padding: 0 0.5rem;
    justify-content: space-between;
    max-width: 600px;
`;

const Logo = styled.span`
    margin: auto 0;

    & a {
        font-size: 1.5rem;
        color: #555;
        text-decoration: none;
    }
`;

const CreateLink = styled.span`
    border: 1px solid;
    padding: 5px;
    border-radius: 5px 10px 5px;
    cursor: pointer;

    & a {
        text-decoration: none;
        color: #555;
    }

    &:hover {
        color: #fff;
        background-color: #555;
        & a {
            color: #fff;
        }
    }
`;

const Header: FC = () => {
    return (
        <div>
            <Menu>
                <Logo>
                    <Link href="/">POST HUB</Link>
                </Logo>

                <CreateLink>
                    <Link href="/posts/new">CREATE NEW POST</Link>
                </CreateLink>
            </Menu>
        </div>
    );
};

export default Header;
