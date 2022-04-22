import React from 'react'
import styled from '@emotion/styled/macro'

const Icon = styled('svg')`
  path {
    transition: 0.2s;
    fill: ${p => (p.color ? p.color : p.active ? '#5284FF' : '#C7D3E3')};
    width: ${p => p.width}px;
  }

  g {
    fill: ${p => (p.color ? p.color : p.active ? '#5284FF' : '#C7D3E3')};
  }
`

const SVG = styled(Icon)`
  transform: scale(${p => (p.scale ? p.scale : 1)});
  path {
    width: 50px;
  }
`

export const Anchor = ({ active, color, scale, className }) => (
  <SVG
    className={className}
    width="23"
    height="15"
    active={active}
    color={color}
  >
    <path
      d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"
      fillRule="evenodd"
    />
  </SVG>
)

export const AnchorContainer = styled(`a`)`
  text-decoration: none;
`
