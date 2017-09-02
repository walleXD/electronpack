import React from 'react'
import { object, func, bool } from 'prop-types'
import { withStyles } from 'material-ui/styles'
import IconButton from 'material-ui/IconButton'
import CloseIcon from 'material-ui-icons/Close'
import FullscreenIcon from 'material-ui-icons/Fullscreen'
import FullscreenExitIcon from 'material-ui-icons/FullscreenExit'
import ArrowDropDownIcon from 'material-ui-icons/ArrowDropDown'

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  }
})

const WindowController = ({
  classes,
  toggleFullscreen,
  toggleMinimize,
  windowClose,
  isFullscreen
}) =>
  <div>
    <span>Window Controller</span>
    <IconButton onClick={windowClose} className={classes.button} aria-label='Close'>
      <CloseIcon />
    </IconButton>
    <IconButton onClick={toggleMinimize} className={classes.button} aria-label='Minimize'>
      <ArrowDropDownIcon />
    </IconButton>
    <IconButton onClick={toggleFullscreen} className={classes.button} aria-label='Fullscreen'>
      {isFullscreen
        ? <FullscreenExitIcon />
        : <FullscreenIcon />
      }
    </IconButton>
  </div>

WindowController.propTypes = {
  classes: object,
  toggleFullscreen: func,
  toggleMinimize: func,
  windowClose: func,
  isFullscreen: bool
}

export default withStyles(styles)(WindowController)
