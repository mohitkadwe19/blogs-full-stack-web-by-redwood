// Pass props to your component by passing an `args` object to your story
//
// ```tsx
// export const Primary: Story = {
//  args: {
//    propName: propValue
//  }
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import Comment from './Comment'

export const generated = () => {
  return (
    <Comment
      comment={{
        name: 'Rob Cameron',
        body: 'This is the first comment!',
        createdAt: '2020-01-01T12:34:56Z',
      }}
    />
  )
}

export default {
  title: 'Components/Comment',
  component: Comment,
}
