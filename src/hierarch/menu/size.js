import React from "react"
import styled from "styled-components"
import { Observer } from "mobx-react"

import { HierarchScope } from "../index"

var Size = () => (
  <HierarchScope.Consumer>{scope => (
    <Observer>{() => (
      <Grid>
        <Small>Width</Small>
        <input
          type="text"
          placeholder="None"
          onChange={(e) => scope.rules['width'] = e.target.value}
          value={scope.rules['width'] || ''}
        />

        <Small>Height</Small>
        <input
          type="text"
          placeholder="None"
          onChange={(e) => scope.rules['height'] = e.target.value}
          value={scope.rules['height'] || ''}
        />

        <Small>Min W</Small>
        <input
          type="text"
          placeholder="None"
          onChange={(e) => scope.rules['min-width'] = e.target.value}
          value={scope.rules['min-width'] || ''}
        />

        <Small>Min H</Small>
        <input
          type="text"
          placeholder="None"
          onChange={(e) => scope.rules['min-height'] = e.target.value}
          value={scope.rules['min-height'] || ''}
        />

        <Small>Max W</Small>
        <input
          type="text"
          placeholder="None"
          onChange={(e) => scope.rules['max-width'] = e.target.value}
          value={scope.rules['max-width'] || ''}
        />

        <Small>Max H</Small>
        <input
          type="text"
          placeholder="None"
          onChange={(e) => scope.rules['max-height'] = e.target.value}
          value={scope.rules['max-height'] || ''}
        />

        <Small>Overflow</Small>
        <ComingSoonLink href="https://github.com/assembleapp/hierarch/issues/11">
          Coming Soon
        </ComingSoonLink>
      </Grid>
    )}</Observer>
  )}</HierarchScope.Consumer>
)

var ComingSoonLink = styled.a`
`

var Grid = styled.div`
display: grid;
grid-template-columns: repeat(4, 3.2rem);
grid-template-rows: repeat(5, 1fr);
grid-column-gap: 0.5rem;

${ComingSoonLink} {
  grid-column: span 3;
}
`

var Small = styled.span`
font-size: 0.8rem;
`

export default Size
