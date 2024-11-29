---
title: 'How to conditionally wrap a React component?'
excerpt: 'Learn how to render a different wrapping element based on a condition in React.'
date: '2024-06-07'
---

Quite often you'll crome across this pattern where you'll need to render a different wrapper for a React component based on a particular condition. Imagine you have a component which, depending on a condition, would need to be wrapper either with a `div` either with `a`. Or perhaps you have a feature flag which dictates if an element is wrapped within a modal or a tooltip.

There are several ways to achieve this with the most straightforward one being an if/else wrapper (or ternary), however that could get messy very fast in large and complex codebase. A cleaner, more elegant, maintanable and scalable way is be to use a reusable component.

### Reusable conditional wrapper

```tsx
import React from 'react'

export type Props = {
  condition: boolean
  wrapper: (arg: React.ReactNode) => React.ReactNode
  children: React.ReactNode
}

const ConditionalWrapper = ({ condition, wrapper, children }: Props) => (
  <>{condition ? wrapper(children) : children}</>
)

export default ConditionalWrapper
```

As simple as that! We expect 3 props:

- `condition` - of type `boolean`. If true, it will wrap the children with the wrapper element; if false it will render just the children.
- `wrapper` - of type `ReactNode`. A React node which will be used as the wrapper component should the `condition` prop be true.
- `children` - of type `ReactNode`.

### Example usage

```tsx
<ConditionalWrapper
  condition={!isSubscribed}
  wrapper={(children) => <Tooltip data-tip="Upgrade to unlock this feature">{children}</Tooltip>}
>
  <button disabled={!isSubscribed} {...(isSubscribed && { onClick: () => downloadPDF() })}>
    Download PDF
  </button>
</ConditionalWrapper>
```

What will be rendered?

If the user is subscribed, we show a clickable download button. If the user is not subscribed, we show show a disabled download button which will be wrapped in a tooltip.

#### How to test the reusable ConditionalWrapper component?

```tsx
import { render, screen } from '@testing-library/react'

import ConditionalWrapper, { Props } from './ConditionalWrapper'

const defaultProps: Props = {
  condition: true,
  wrapper: (children) => <div data-testid="wrapper">{children}</div>,
  children: <div data-testid="child">foo</div>,
}

const renderComponent = (props: Partial<Props> = {}) =>
  render(
    <ConditionalWrapper {...{ ...defaultProps, ...props }}>
      {defaultProps.children}
    </ConditionalWrapper>,
  )

describe('<ConditionalWrapper />', () => {
  describe('When condition is TRUE', () => {
    beforeEach(renderComponent)

    it('should render the child node', () => {
      const wrapper = screen.getByTestId('child')
      expect(wrapper).toBeVisible()
    })

    it('should render the wrapper', () => {
      const wrapper = screen.getByTestId('wrapper')
      expect(wrapper).toBeVisible()
    })
  })

  describe('When condition is FALSE', () => {
    beforeEach(() => renderComponent({ condition: false }))

    it('should render the child node', () => {
      const wrapper = screen.getByTestId('child')
      expect(wrapper).toBeVisible()
    })

    it('should not render the wrapper', () => {
      const wrapper = screen.queryByTestId('wrapper')
      expect(wrapper).toBeFalsy()
    })
  })
})
```
