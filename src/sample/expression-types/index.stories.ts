import type { Story, Meta } from '@storybook/web-components'
import { ExpressionTypes } from '.'

// More on default export: https://storybook.js.org/docs/web-components/writing-stories/introduction#default-export
export default {
  title: 'Components/ExpressionTypes',
  // More on argTypes: https://storybook.js.org/docs/web-components/api/argtypes
  argTypes: {
    onClick: { action: 'onClick' },
  },
} as Meta

// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
const Template: Story = () => new ExpressionTypes()

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/web-components/writing-stories/args
Primary.args = {}
