import React from "react"
import styled from "@emotion/styled"

const SVG = styled("svg")``

export default function SmallCaret({ className }) {
  return (
    <SVG
      className={className}
      width="12"
      height="7"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.3431 0L6 4.6569 10.6569 0l1 1L6 6.6569.3431 1l1-1z"
        fill="white"
        fillRule="evenodd"
      />
    </SVG>
  )
}
