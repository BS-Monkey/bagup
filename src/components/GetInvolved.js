import React, { useState, useEffect } from "react"
import styled from "@emotion/styled"
import { useTranslation } from "react-i18next"
import { H2 as H2Default } from "./Typography"

import mq from "../mediaQuery"

import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled('div')`
  div {
    position: relative;
  }
  img {
    width: 100%;
  }
  .mind-text {
    position: absolute;
    bottom: 25px;
    left: 25px;
    font-family: 'LemonMilk';
    color: white;
    font-size: 40px;
  }
`

const Container = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  .flex-between: {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`

const Links = styled("div")`
  max-width: 860px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 50px 50px;
  ${mq.medium`
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: minmax(100px, auto);
  `}
`

const LinkItem = styled("div")`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  gap: 20px 20px;
  grid-template-areas:
    "img"
    "name"
    "text";

  ${mq.medium`
    grid-template-columns: 80px 1fr;
    grid-template-rows: auto 100px;
    grid-template-areas:
    "img name"
    ". text";
  `};

  img {
    grid-area: img;
    justify-self: start;
    ${mq.medium`
      justify-self: end;
    `};
  }
  h3 {
    font-size: 34px;
    font-family: Karma;
    font-weight: 300;
    color: white;
    grid-area: title;
    margin: 0;

    ${mq.medium`
      font-size: 44px;
    `};
  }
  a {
    grid-area: link;
  }
`

const ExternalLink = styled("a")`
  color: #52e5ff;
  text-decoration: none;
  font-size: 20px;
  font-weight: 500;
`

const MindKind = styled('div')`
  .mindmpa-kind {
    position: relative;
  }
  .mindmpa-kind img {
    width: 100%;
  }
  .description {
    position: absolute;
    top: 25px;
    left: 25px;
    font-family: 'LemonMilk';
    color: #282828;
  }
  .title {
    font-size: 45px;
    font-weight: bolder;
    line-height: 115px;
  }
  .subtitle {
    margin-top: 25px;
    font-size: 35px;
    font-weight: bold;
  }
  .footer {
    fonte-size: 45px;
    font-weight: bold;
  }
  .image-container {
    position: absolute;
    bottom: 45px;
    left: 45px
  }
  .image-container img {
    width: 100px;
    margin-right: 10px;
  }
  .processing {
    font-size: 25px;
    font-weight: normal;
    background-color: red;
    color: white;
    width: fit-content;
  }
`

export default function GetInvolved(props) {
  const [index, setIndex] = useState(1);
  
  console.log(index);
  return (
    <Container>
      <Grid container spacing={1}>
        <Grid className="flex-between" item md={6} xs={12}>
          <Item>
            <div onClick={() => setIndex(1)} >
              <img src="/image/vision.png" />
              <div className="mind-text">
                VISION
              </div>
            </div>
          </Item>
          <Item>
            <div onClick={() => setIndex(4)}>
              <img src="/image/airdrop.png" />
              <div className="mind-text">
                AIRDROP <br/>
                & MERCH
              </div>
            </div>
          </Item>
          <Item>
            <div onClick={() => setIndex(3)}>
              <img src="/image/metaverse.png" />
              <div className="mind-text">
                METAVERSE
              </div>
            </div>
          </Item>
        </Grid>
        <Grid item md={6} xs={12}>
          <Item>
            <div onClick={() => setIndex(2)}>
              <img src="/image/community.png" />
              <div className="mind-text">
                COMMUNITY <br/>
                & TEAMING
              </div>
            </div>
          </Item>
          <Item>
            <div onClick={() => setIndex(5)}>
              <img src="/image/key.png" />
              <div className="mind-text">
                YOUR <br/>
                INVESTMENT KEY
              </div>
            </div>
          </Item>
        </Grid>
      </Grid>
      <MindKind>
        {
          index === 1 ? (
            <div className="mindmpa-kind">
              <img src="/image/vision_back.png"/>
              <div className="description">
                <div className="title">
                  VISION
                </div>
                  Its just you! with a BAG UP<br />
                  BagUP gang members are taggers of the metaverse, they are in<br />
                  an adventure to leave their tags all over the world. <br />
                  Using dope bags to cover up, they keep their<br />
                  identities a secret in order to not get caught and bagged up!<br />
                  Their adventure together will led them to get to know each other
                <div className="footer">
                  Ready to take this adventure ?<br />
                  get your baggie to have a membership acces to the gang
                </div>
              </div>
            </div>
          ) : index === 2 ? (
            <div className="mindmpa-kind">
              <img src="/image/community_back.png"/>
              <div className="description">
                <div className="title">
                  {'COMMUNITY \& TEAMING'}
                </div>
                  - Sometimes your circle decreases in size but increases in value.<br />
                  In order to make it easier for the community to connect and get to know one another, <br />
                  we have chosen to reduce the number of holders, community is always first.<br />
                  - Our first priority is to make you feel comfortable within the community. <br />
                  We created the concept of teams where you can hang out with people <br />
                  who share the same interests and skills as you<br />
                  to relax, create, and have fun together<br />
                  - More about the teams system :
              </div>
              <div className="image-container">
                <img src="/image/alien.png"/>
                <img src="/image/arty.png"/>
                <img src="/image/blockchain-whale.png"/>
                <img src="/image/highroller.png"/>
                <img src="/image/streetboi.png"/>
              </div>
            </div>
          ) : index === 3 ? (
            <div className="mindmpa-kind">
              <img src="/image/metaverse_back.png"/>
              <div className="description">
                <div className="title">
                  METAVERSE
                </div>
                  in our way to finish the adventure, we will be lost<br />
                  in the metaverse trying to find the crib.<br />
                  As the digital world develops, we will follow along. <br />
                  We are always open to new ideas and updates
                <div className="subtitle">
                  Art and music festivals
                  &nbsp;
                  <span className="processing">processing</span>
                </div>
                  your BAGUP will be your ticket to virtual art and music<br />
                  festivals, artists from our community will have the chances<br />
                  to expose their art and shine 
                <div className="subtitle">
                  The Crib
                  &nbsp;
                  <span className="processing">Exploring</span>
                </div>
                  all gang members meet <br />
                  at the crib which is their favorite virtual <br />
                  place in the metaverse. 
              </div>
            </div>
          ) : index === 4 ? (
            <div className="mindmpa-kind">
              <img src="/image/airdrop_back.png"/>
              <div className="description">
                <div className="title">
                  airdrops & merch
                </div>
                <div className="subtitle">
                  Flash Drops and Giveways
                </div>
                  the first to interract, the one that wins. Keep<br />
                  an eye on our social media accounts u dont wanna miss.<br />
                  Various  giveaways will be announced in our twitter <br />
                  account so stay tuned 
                <div className="subtitle">
                  Airdrops
                  &nbsp;
                  <span className="processing">processing</span>
                </div>
                  2.222 Bag up holders will recive a  unique collectible<br />
                  from the coming collection
                <div className="subtitle">
                  Merch
                  &nbsp;
                  <span className="processing">Exploring</span>
                </div>
                  We already have the experience of creating <br />
                  high quality merch, we will be offering our holders<br />
                  a unique merch store soon
              </div>
            </div>
          ) : (
            <div className="mindmpa-kind">
              <img src="/image/key_back.png"/>
              <div className="description">
                <div className="title">
                  Your investment key
                </div>
                  In collaboration with Omerta geeks, <br />
                  we would like to announce that BagUP holders who are<br />
                  interested in starting their own NFT projects can <br />
                  take advantage of 50% discount on all NFT services, <br />
                  including art services, website and discord setups and security, <br />
                  smart contracts, etc..<br />
                  Check out our discord for more informations
              </div>
            </div>
          )
        }
      </MindKind>
      {/* <div className="mindmpa-kind">
        <img src="/image/metaverse_back.png"/>
        <div className="description">
          <div className="title">
            METAVERSE
          </div>
          <div className="subtitle">
            in our way to finish the adventure, we will be lost<br />
            in the metaverse trying to find the crib.<br />
            As the digital world develops, we will follow along. <br />
            We are always open to new ideas and updates
          </div>
          <div className="subtitle">
            <div className="bold">
              Art and music festivals
              <>processing</>
            </div>
            your BAGUP will be your ticket to virtual art and music<br />
            festivals, artists from our community will have the chances<br />
            to expose their art and shine 
          </div>
          <div className="subtitle">
            <div className="bold">
              The Crib
              <>processing</>
            </div>
            all gang members meet <br />
            at the crib which is their favorite virtual <br />
            place in the metaverse. 
          </div>
        </div>
      </div>
      <div className="mindmpa-kind">
        <img src="/image/vision_back.png"/>
        <div className="description">
          <div className="title">
            VISION
          </div>
          <div className="subtitle">
            Its just you! with a BAG UP<br />
            BagUP gang members are taggers of the metaverse, they are in<br />
            an adventure to leave their tags all over the world. <br />
            Using dope bags to cover up, they keep their<br />
            identities a secret in order to not get caught and bagged up!<br />
            Their adventure together will led them to get to know each other
          </div>
          <div className="footer">
            Ready to take this adventure ?<br />
            get your baggie to have a membership acces to the gang
          </div>
        </div>
      </div> */}
    </Container>
  )
}
