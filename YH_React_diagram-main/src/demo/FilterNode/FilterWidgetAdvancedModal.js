import React, {FC, useState} from "react";
import { DiagramEngine } from "@projectstorm/react-diagrams";
// import * as S from "../../styled";
import * as S from "../../adstyled";
import "../../styles.css";
import {FilterNode, Operator} from "./FilterNode";
import {Container} from "@mui/material";
import ModalPortal from "../MPodal/ModalPortal";
import SampleModal from "../MPodal/SampleModal";

export interface FilterNodeWidgetProps {
    node: FilterNode;
    engine: DiagramEngine;
}

const FilterNodeWidgetAdvancedModal : FC<FilterNodeWidgetProps> = ( {engine, node}) => {

  const [modalOpened, setModalOpened] = useState(false);

  const handleOpen = () => {
      setModalOpened(true);
  };

  const handleClose = () => {
      setModalOpened(false);
  };

    return (
        <div className="filter">
            <S.Widget>
                <S.Port
                    port={node.outPort}
                    engine={engine}
                    style={{ right: -4, top: "50%" }}
                />
                <S.Port
                    port={node.inPort}
                    engine={engine}
                    style={{ left: -4, top: "50%" }}
                />
                <Container>
                    <button onClick={handleOpen}>Open</button>
                    {modalOpened && (
                        <ModalPortal closePortal={handleClose}>
                            <SampleModal />
                        </ModalPortal>
                    )}
                </Container>
            </S.Widget>
            <div id="filter-modal"></div>
        </div>
    );
}

export default FilterNodeWidgetAdvancedModal;