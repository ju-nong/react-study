import { css } from "@emotion/react";
import { lighten, darken } from "polished";

type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;
type COLOR = `${string}`;

type Color = RGB | RGBA | HEX | COLOR;

const bgChange = (color: Color) => css`
    &:hover {
        background-color: ${lighten(0.1, color)};
    }
    &:active {
        background-color: ${darken(0.1, color)};
    }
`;

const colorChange = (color: Color) => css`
    &:hover {
        color: ${lighten(0.2, color)};
    }
    &:active {
        color: ${darken(0.2, color)};
    }
`;

export { bgChange, colorChange };
