import styled, { css } from "styled-components";

const shrink = css`
    transform: translate(0, 0);
    font-size: 0.7rem;
`;
export const StyledFormControl = styled.div`
    background-color: transparent;
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100%;
    label {
        position: absolute;
        top: 0;
        left: 0;
        transform: translate(20px, 10px);
        pointer-events: none;
        transition: transform .3s, font-size .2s;
        ${({ value }) => (value.length ? shrink : "")}
    }
    input {
        width: 100%;
        height: 100%;
        padding: 10px 20px;
        border: 0;
        background-color: transparent;

        &:focus {
            & + label {
                ${shrink}
            }
        }
    }
`;
