import React from "react";
import styled, { css } from "styled-components";
import { darken, lighten } from "polished";

const sizeConfig = {
    large: {
        height: "3rem",
        fontSize: "1.25rem",
    },
    medium: {
        height: "2.25rem",
        fontSize: "1rem",
    },
    small: {
        height: "1.75rem",
        fontSize: "0.875rem",
    },
};

const styleConfig = {
    size: ({ size }) => {
        const { height, fontSize } = sizeConfig[size];
        return css`
            height: ${height};
            font-size: ${fontSize};
        `;
    },
    color: ({ theme, color }) => {
        const selected = theme.palette[color];
        return css`
            background: ${selected};
            &:hover {
                background: ${lighten(0.1, selected)};
            }
            &:active {
                background: ${darken(0.1, selected)};
            }
        `;
    },
    fullWidth: () => css`
        width: 100%;

        & + button {
            margin-left: 0;
            margin-top: 1rem;
        }
    `,
};

const stylings = () => (props) => {
    const KEYS = Object.keys(props);
    const styles = [];

    for (let i = 0; i < KEYS.length; i++) {
        const func = styleConfig[KEYS[i]];

        if (func) {
            styles.push(func);
        }
    }

    return css`
        ${styles}
    `;
};

const StyledButton = styled.button`
    outline: none;
    border: none;
    border-radius: 4px;
    color: white;
    font-weight: bold;
    cursor: pointer;
    padding: 0 1rem;

    & + button {
        margin-left: 1rem;
    }

    ${stylings}
`;

function Button({ children, ...rest }) {
    return <StyledButton {...rest}>{children}</StyledButton>;
}

Button.defaultProps = {
    color: "blue",
    size: "medium",
};

export { Button };
