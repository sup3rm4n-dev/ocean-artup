import React from 'react'
import { connectSearchBox } from 'react-instantsearch-dom'

import { Loupe } from './styles'

export default connectSearchBox(
  ({ currentRefinement, refine, onFocus, className }) => (
    <div className={className}>
      <input
        type="text"
        placeholder="Search"
        aria-label="Search"
        value={currentRefinement}
        onChange={e => refine(e.target.value)}
        onFocus={onFocus}
      />
      <Loupe />
    </div>
  )
)
