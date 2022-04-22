import React from "react"
import styled from "@emotion/styled"
import { useTranslation } from "gatsby-plugin-react-i18next"
import { PAGE1_HEIGHT, PAGE1_WIDTH } from "../../global";
import GetInvolved from "../GetInvolved";

const { innerWidth: width, innerHeight: height } = window;

const MindMapContainer = styled("div")`
  padding: 15px;
  background-color: #1b1e22;
  width: ${width-50};
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .map-kind {
    width: 50%;
  }
  .map-kind img {
    width: 100%;
  }
`

export default function MindMap(props) {
  const { t } = useTranslation()
  return (
    <MindMapContainer>
      <img src="/image/Page-4.png" />
      <GetInvolved />
    </MindMapContainer>
  )
}
