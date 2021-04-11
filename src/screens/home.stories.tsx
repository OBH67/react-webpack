import { storiesOf } from '@storybook/react'
import * as React from 'react'

import Home from './Home'

storiesOf('Home', module)
  .add('tailwindcss', () => <Home />)
  .add('Otra historia', () => <>😀 😎 👍 💯</>)
