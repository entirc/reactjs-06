import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledLink= styled(Link)`
    padding: 0.5rem;
    background: #ffb347;
    text-decoration: none;
    color: #000;
    margin: 0 0.5rem 0 0;
`

const WrapperLink = styled.div`
    display: flex;
`

class Nav extends Component {
    render () {
        return (
            <div>
                <WrapperLink>
                    <StyledLink to="/">Home</StyledLink>
                    <StyledLink to="/about">About</StyledLink>
                </WrapperLink>
            </div>
        )
    }
}

export default Nav