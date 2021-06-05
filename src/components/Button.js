import styled from 'styled-components'

export const Button = styled.button`
    border: none;
    outline: none;
    background: #000d1a;
    color: #fff;
    width: 100%;
    height: 40px;
    display: block;
    cursor: pointer;
    text-align: center;
    padding: 10px 24px;
    text-transform: uppercase;
    text-decoration: none;
    transition: 0.3;
    letter-spacing: 2px;
    margin: 15px 0;

    &:hover {
        background-color: #fff;
        color: #444;
    }
`