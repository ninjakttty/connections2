// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof Healthbar> = (args) => {
//   return <Healthbar {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import Healthbar from './Healthbar'

export const generated = () => {
  return <Healthbar />
}

export default {
  title: 'Components/Healthbar',
  component: Healthbar,
} as ComponentMeta<typeof Healthbar>
