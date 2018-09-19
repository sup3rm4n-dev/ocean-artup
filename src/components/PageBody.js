import React from 'react'
import rehypeReact from 'rehype-react'

import Landing from './styles/Landing'
import Page from './styles/Page'

import About from './styles/About'
import Spotlight from './styles/Spotlight'
import Participants from './styles/Participants'
import Team from './styles/Team'
import ImageRow from './styles/ImageRow'

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    about: About,
    spotlight: Spotlight,
    participants: Participants,
    team: Team,
    imagerow: ImageRow,
  },
}).Compiler

const PageBody = ({ htmlAst, isLanding, children }) => {
  const Comp = isLanding ? Landing : Page
  return (
    <Comp>
      {htmlAst && renderAst(htmlAst)}
      {children}
    </Comp>
  )
}

export default PageBody
