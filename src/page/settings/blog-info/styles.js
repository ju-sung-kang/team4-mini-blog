import styled from "styled-components";

export const BlogInfoContainer = styled.form`
    margin: 10px;
    min-width : 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const BlogInfoTitle = styled.h2`
    // display: flex;
    // flex-direction: column;
    // background-color : red;
`;

export const BlogInfoTable = styled.table`
    border-collapse: collapse;
    
// display: flex;
// flex-direction: column;
// background-color : red;
`;

export const BlogInfoTableBody = styled.tbody`
    // display: table-row-group;
    // vertical-align: middle;
`;

export const BlogInfoRow = styled.tr`
    text-align: left;
    border-bottom: 0.5px solid #ccc;
    
    font: 12px/1.5em "돋움",Dotum,Helvetica,Sans-serif;
// display: flex;
// flex-direction: column;
// background-color : red;
`;


export const BlogInfoRowHeader = styled.th`
    width : 200px;
    color : #424242;
    
`;

export const BlogInfoRowData = styled.td`
    // display: table-cell;
    
`;

export const BlogInfoSaveBtn = styled.button`
    margin-top: 20px;
    margin-left : auto;
    margin-right : auto;
    width : 45px;
    height: 27px;
    font-weight: 700;
    background-color : white;
    border: 1px solid rgb(133, 133, 133);
    // color: #404040;
`;

export const BlogUrl = styled.p`
    margin-top: 30px;
    margin-bottom: 30px;
`;

export const BlogInfoInput = styled.input`
    margin-top: 30px;
    margin-bottom: 30px;
    width : 300px;
    border: 1px solid #ccc;
`;

export const BlogInfoTextarea = styled.textarea`
    width : 300px;
    border: 1px solid #ccc;    
`;

export const BlogMainCategorySelect = styled.select`
    margin-top: 30px;
    margin-bottom: 30px;
    width : 300px;
    height : 40px;
    padding : 0px;
    border: 1px solid #ccc;    
`;

export const ProfileImageUploader = styled.div`
    margin-top: 30px;
    margin-bottom: 30px;
    width : 161px;
    height : 200px;
    border: 1px solid #ccc;    
`;

export const InputDesc = styled.p`
    display : inline-block;
    margin-left : 25px;
    color: #8e8e8e;
    font: 12px/1.5em "돋움",Dotum,Helvetica,Sans-serif;
`;