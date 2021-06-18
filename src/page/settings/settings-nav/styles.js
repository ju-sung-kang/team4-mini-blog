import styled, {css} from "styled-components";

export const Container = styled.div`
    width: 100%;
    background-color: rgb(244, 244, 244);
    display: flex;
    flex-direction: column;
`;

export const NavContainer = styled.ul`
    margin: 0px;
    list-style: none;
    text-align: center;
    width : 100%;
    height: 100px;
    display: flex;
    background-color: rgb(87, 109, 233);
`;

export const NavItem = styled.li`
    width: 20%;
    max-width: 120px;
    height: 20px;
    line-height: 20px;
    text-align: center;
    padding-top: 40px;
    padding-bottom: 40px;
    color : white;
    cursor: pointer;
    ${props =>
        props.selected === true && css`font-weight: bold;`}
`;

export const ContentContainer = styled.div`
    width: 80%;
    margin-left: auto;
    margin-right: auto;
`;