import React from "react"
import styled from "@emotion/styled"
import { useTranslation } from "gatsby-plugin-react-i18next"

const HeroContainer = styled("div")`
  position: relative;
  margin-top: -65px;
  background-color: #1b1e22;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  align-content: center;
  img {
    width: 100%;
  }
  .content_text {
    position: absolute;
    bottom: 85px;
    color: white;
    letter-spacing: 1px;
  }
  .content_text .title {
    font-family: 'BsFont';
    font-size: 150px;
    text-align: center;
  }
  .content_text .subtitle {
    font-family: 'LemonMilk';
    font-size: 24px;
    text-align: center;
    line-height: 75px;
  }
  .content_text .content {
    font-family: 'Open Sans';
    font-size: 16px;
    text-align: center;
  }
  .content_text .footer {
    font-family: 'LemonMilk';
    font-size: 24px;
    text-align: center;
    line-height: 75px;
  }
`

export default function Hero(props) {
  const { t } = useTranslation()
  return (
    <HeroContainer>
      <img src="/image/Page-1.png" />
      <div className="content_text">
        <div className="title">
          Beyond
        </div>
        <div className="subtitle">
          for the community, by the community
        </div>
        <div className="content">
          a metaverse brand  made up of people <br />
          from various specializations  including <br />
          blockchain and crypto experts, traders. devs . <br />
          graphic designers, artists,marketers, managers, <br />
          and collectors all uniting together  to build  a <br />
          strong web3 brand that creates dope projects.<br />
          BagUp gang is a limited collection of 2.222 avatars that gives you<br />
          acces to be part of beyond, you will be able to enter exclusive<br />
          events and festivals, recive airdrops, acces to<br />
          private giveaways and raffles,<br />
          make votes for beyond decisions and more ...
        </div>
        <div className="footer">
          beyond is built and owned by the community
        </div>
      </div>
    </HeroContainer>
  )
}
