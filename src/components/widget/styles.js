import styled from 'styled-components';

export const Widget = styled.div`
    position: relative;
    box-sizing: border-box;
    text-align: left;
    padding-left: 10px;
    width: 100%;
    height: 20%;
    margin-top: 100px;
    margin-left: 2px;
`;

export const Profile = styled.div`
    display: inline-block;
    margin-left: 200px;
`;

export const ProfileImage = styled.img`
    width: 150px;
    height: 150px;
    object-fit: cover;
`;

export const ProfileName = styled.p``;

export const ProfileIntro = styled.p`
    font-size: 13px;
`;

export const Weather = styled.div`
    display: inline-block;
    margin-left: 200px;
    position: absolute;
    top: 80px;
`;

export const Visit = styled.div`
    position: absolute;
    right: 440px;
    text-align: right;
    padding-top: 10px;
    padding-right: 6px;
    height: 53px;
    width: 170px;
    background-image: url("visit.gif");
    background-repeat: no-repeat;
    display: inline-block;
    margin-left: 200px;
`;

export const VisitToday = styled.div``;

export const VisitTotal = styled.div``;

export const VisitText = styled.span`
    display: none;
`;

export const VisitCnt1 = styled.span`
    font-size: 12px;
    font-family: tahoma;
    font-weight: bold;
    padding-right: 15px;
    display: block;
`;

export const VisitCnt2 = styled.span`
    font-size: 12px;
    font-family: tahoma;
    font-weight: bold;
    margin-top: 4px;
    padding-right: 15px;
    display: block;
`;

export const Category = styled.div`
    font-size: 14px;
    display: inline-block;
    margin-left: 200px;
`;

export const CategoryList = styled.ul`
    padding-left: 0px;
    border-bottom: 1px dotted black;
`;

export const CategoryItem = styled.li`
    list-style: none;
    margin: 10px;
`;

export const CategoryItemLink = styled.a`
    margin: 5px;
    color: #999999;
    text-decoration-line: none;
    &:visited {
        color: #999999;
    }
    &:hover {
        text-decoration-line: underline;
    }
`;

export const SubCategoryList = styled.ul``;