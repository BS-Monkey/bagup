import React from "react"
import styled from "@emotion/styled"
import { useTranslation } from "gatsby-plugin-react-i18next"
import { PAGE1_HEIGHT, PAGE1_WIDTH } from "../../global";

const { innerWidth: width, innerHeight: height } = window;

const BagContainer = styled("div")`
  background-color: #1b1e22;
  top: ${p => (p.top ? p.top : 0)};
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;

  img {
    width: 100%;
  }
`

export default function Bag(props) {
  const { t } = useTranslation()
  return (
    <BagContainer>
      <img src="/image/Page-3.png" />
    </BagContainer>
  )
}
