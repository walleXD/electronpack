import React from 'react'
import Route from 'react-router-dom/Route'
import Link from 'react-router-dom/Link'
import { Helmet } from 'react-helmet'
import Button from 'material-ui/Button'
import { func, string } from 'prop-types'

const DefaultLayout = ({title, component: Component, ...rest}) =>
  <Route {...rest} render={matchProps => (
    <div className='DefaultLayout'>
      <Helmet title={title} />
      <div className='Header'>
        <ul>
          <li>
            <Link to='/'>
              <Button raised>
                Home
              </Button>
            </Link>
            <Link to='/test'>Test</Link>
          </li>
        </ul>
      </div>
      <Component {...matchProps} />
      <div className='Footer'>Footer</div>
    </div>
  )} />

DefaultLayout.propTypes = {
  title: string,
  component: func
}

export default DefaultLayout
