import styled from "@emotion/styled";
import {Rings} from 'react-loader-spinner'

export const LoaderWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 999;
    backdrop-filter: blur(10px);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const LoaderCSS = styled(Rings)`
    width: 250px;
    height: 250px;
    position: absolute;
    color: blue;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;