import React, { Component } from 'react'

import { Parent, Child } from './styles'

export default class Masonry extends Component {
  state = { spans: [], rowHeight: 50, ref: React.createRef() }

  componentDidMount() {
    const node = this.state.ref.current
    const spans = []
    Array.from(node.children).forEach(child => {
      console.log(child.clientHeight)
      spans.push(Math.ceil(child.clientHeight / this.state.rowHeight))
    })
    this.setState({ spans })
  }

  render() {
    const { rowHeight, spans } = this.state
    return (
      <Parent ref={this.state.ref} rowHeight={rowHeight}>
        {this.props.children.map((child, i) => (
          <Child key={i} span={spans[i]}>
            {child}
          </Child>
        ))}
      </Parent>
    )
  }
}
