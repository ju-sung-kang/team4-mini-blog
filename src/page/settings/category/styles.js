import styled, {css} from "styled-components";

export const CategorySettingsContainer = styled.div`
    margin: 10px;
    min-width : 800px;
    width : 80%;
    // background-color: red;
    // display: flex;
    // flex-direction: column;
    // justify-content: center;
`;

export const Title = styled.h2`
`;

export const Subtitle = styled.h3`
`;

export const Container = styled.div`
    ${props =>
        props.withMargin && css`margin: 10px;`}
    ${props =>
        props.align && css`text-align: ${props.align};`}
`;


export const BlogDefCategorySelect = styled.select`
    margin-top: 30px;
    margin-bottom: 30px;
    width : 300px;
    height : 40px;
    padding : 0px;
    border: 1px solid #ccc;    
`;

export const CategorySettingsInnerContainer = styled.div`
    margin: 10px;
    // background-color: green;
    font-size: 12px/1.5em;
`;

export const Desc = styled.p`
`;

export const CategoryForm = styled.form`
    width : 100%;
    // background-color : black;
`;

export const CategoryTable = styled.table`
    width : 300px;   
    border : 1px solid rgb(230, 230, 230);
    ${props =>
        props.withBottomMargin && css`margin-bottom: 5px;`}
`;

export const CategoryTableHeader = styled.thead`
    // background-color : red;
`;

export const CategoryTableBody = styled.tbody`
    // background-color : blue;
`;

export const CategoryTableRow = styled.tr`
    height: 50px;
    // background-color: purple;
`;

export const CategoryTableRowHead = styled.th`
    height: 50px;
    // background-color: purple;
`;

export const CategoryTableRowData = styled.td`
    height: 50px;
    // background-color: purple;
`;

export const CategoryNameLabel = styled.label`
    height: 50px;
    // background-color: purple;
`;

export const CategoryNameInput = styled.input`
    height: 50px;
    // background-color: purple;
`;

export const CategoryTopic = styled.label`
    height: 50px;
    // background-color: purple;
`;

export const CategoryTopicSelect = styled.select`
    height: 50px;
    // background-color: purple;
`;

export const CommonButton = styled.button`
    height: 30px;
    ${props =>
        props.withLeftMargin && css`margin-left: 5px;`}
    ${props =>
        props.withRightMargin && css`margin-right: 5px;`}
`;

export const CategoryAddSaveButton = styled.button`
`;

export const CategoryAddButton = styled.button`
    width : 300px;
    height : 60px;
    border: none;
    background-color : rgb(100, 200, 64);
    text-align: left;
    color: white;
`;

export const SaveButtonContainer = styled.div`
    margin: 10px;
    background-color: pink;
`;

export const SaveButton = styled.button`
    margin: 10px;
    background-color: blue;
`;

export const CenterContainer = styled.div`
    position: absolute;
    margin: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    // width: 50%;
    // height: 50%;
    width: 300px;
    height: 200px;
`;

export const CategoryAddForm = styled.form`
    // position: absolute;
    // margin: auto;
    // top: 0;
    // right: 0;
    // bottom: 0;
    // left: 0;
    // width: 300px;
    // height: 120px;
    background-color : white;
`;

export const CategoryAddLabel = styled.label`
    position: absolute;
    width: 100%;
    height: 100%;
    background-color : rgba(0, 0, 0, 0.5);
`;

export const DimView = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 10;
    background-color : rgba(0, 0, 0, 0.5);
`;

export const SaveEditedButton = styled.button`

`;

export const SaveCancelButton = styled.button`
`;