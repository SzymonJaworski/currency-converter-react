import styled from "styled-components";

export const StyledForm = styled.form`
    margin: 20px 0;
`;

export const LabelText = styled.span`
    display: inline-block;
    width: 150px;
    font-size: 18px;
    font-weight: 500;
`;

export const Field = styled.input`
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 100%;
    max-width: 250px;
    margin: 10px;

    &:focus {
        border: 2px solid hwb(218 27% 44%);
        outline: none;
    }
`;

export const Button = styled.button`
    width: 100%;
    margin-top: 10px;
    margin-bottom: 20px;
    color: #fff;
    background: hwb(218 27% 44%);
    border: none;
    font-size: 20px;
    border-radius: 10px;
    padding: 12px;
    cursor: pointer;
    transition: background 0.3s;

    &:hover {
        background: hwb(218 27% 34%);
    }
`;

export const Result = styled.p`
    text-align: center;
    font-size: 22px;
    margin: 20px 0;
    min-height: 24px;
`;

export const Info = styled.p`
    text-align: center;
    font-size: 15px;
    color: #444;
    margin-top: 20px;
`;

export const Loading = styled.p`
    color: #004d40;
    text-align: center;
`;

export const Failure = styled.p`
    color: #c62828;
    text-align: center;
`;