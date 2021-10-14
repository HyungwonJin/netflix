import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SHeader = styled.header``;

const List = styled.ul`
    display: flex;
    &:hover{
        background-color: blue;
    }
`;

const SLink = styled(Link)``;

const Item = styled.li``;

const Header = () => (
    <SHeader>
        <List>
            <Item>
                <SLink to="/">Moives</SLink>
            </Item>
            <Item>
                <SLink to="/tv">TV</SLink>
            </Item>
            <Item>
                <SLink to="/search">Search</SLink>
            </Item>
        </List>
    </SHeader>
)

export default Header;