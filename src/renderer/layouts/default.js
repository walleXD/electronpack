import React from 'react'
import Route from 'react-router-dom/Route'
import Link from 'react-router-dom/Link'
import Button from 'material-ui/Button'

const DefaultLayout = ({component: Component, ...rest}) =>
  <Route {...rest} render={matchProps => (
    <div className='DefaultLayout'>
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

export default DefaultLayout
