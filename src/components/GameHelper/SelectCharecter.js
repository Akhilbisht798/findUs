import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Modal = styled.div`
    position: fixed;
    top: ${props => props.y}px;
    left: ${props => props.x}px;
    background-color: rgba(255, 255, 255, 0.8);
    display: grid;
    padding: 0.4rem;
    border-radius: 7px;
    transform: translate(-20%, -30%);
`;

const Char = styled.div`
    padding: 3px;
    text-align: center;
    cursor: pointer;
    &:hover {
        background-color: rgb(255,255,255);
    }
`;

const SelectCharecter = (props) => {

    const coordsCheck = (e) => {
        const index = e.target.dataset.index;
        const x = props.charecter[index].xCoord;
        const y = props.charecter[index].yCoord;
        if (props.selectedCoords.xCoord >= x - 1 && props.selectedCoords.xCoord <= x + 1) {
            if (props.selectedCoords.yCoord >= y - 1 && props.selectedCoords.yCoord <= y + 1) return true;
        }
        return false;
    }

    const onClick = (e) => {
        const ans = coordsCheck(e);
        if (ans) {
            const index = e.target.dataset.index;
            let arr = props.charecter;
            arr[index].found = true;
            props.setCharecter(arr);
        }
        props.close();
    }

    return (
        <>
            <Modal x={props.dialogPos.xCoord} y={props.dialogPos.yCoord}>
                {props.charecter.map((curr, i) => {
                    return (!curr.found) ? (
                        <Char key={curr.name} data-index={i} onClick={onClick}>
                            {curr.name}
                        </Char>
                    ) : null;
                })}
            </Modal>
        </>
    )
}

export default SelectCharecter;