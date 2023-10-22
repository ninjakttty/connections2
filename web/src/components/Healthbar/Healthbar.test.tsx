import { render } from '@redwoodjs/testing/web'

import Healthbar from './Healthbar'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Healthbar', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Healthbar />)
    }).not.toThrow()
  })
})
