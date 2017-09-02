import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'
import { func, bool, node } from 'prop-types'

import WindowController from '../components/WindowController'
import { toggleFullScreen, toggleMinimize, windowClose } from '../../common/actions/WindowActions'

const mapStateToProps = state => ({
  isFullscreen: state.window.isFullScreen
})

const mapDispatchToProps = {
  toggleFullScreen,
  toggleMinimize,
  windowClose
}

@connect(mapStateToProps, mapDispatchToProps)
class WindowContainer extends Component {
  static propTypes = {
    isFullscreen: bool,
    windowClose: func,
    toggleMinimize: func,
    toggleFullScreen: func,
    children: node
  }

  render = () =>
    <div>
      <Helmet
        defaultTitle='electronPack'
        titleTemplate='electronPack - %s'
      />
      <WindowController
        toggleFullscreen={this.props.toggleFullScreen}
        toggleMinimize={this.props.toggleMinimize}
        windowClose={this.props.windowClose}
        isFullscreen={this.props.isFullscreen}
      />
      <div>
        {this.props.children}
      </div>
    </div>
}

export default WindowContainer
