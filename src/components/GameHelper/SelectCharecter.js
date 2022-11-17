import React from "react";
import styled from "styled-components";

const Modal = styled.div`
    position: fixed;
    top: ${props => props.y}px;
    left: ${props => props.x}px;
    background-color: blue;
`;

const SelectCharecter = (props) => {

    return (
        <>
            <Modal x={props.dialogPos.xCoord} y={props.dialogPos.yCoord}>
                hello
            </Modal>
        </>
    )
}

export default SelectCharecter;