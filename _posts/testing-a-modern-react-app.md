---
title: 'How to use React Testing Library to test a modern React application'
excerpt: 'Learn how to set up and test a production ready React application built with Redux, React hooks, routing and custom hooks; by making use of React Testing Library and Jest.'
date: '2021-11-15'
---

### 🌱 Introduction

Learn how to set up and test a production ready React application built with Redux, React hooks, routing and custom hooks; by making use of React Testing Library and Jest.

You can view the final code on Github: [https://github.com/AdrianApan/react-testing-setup-example](https://github.com/AdrianApan/react-testing-setup-example)

---

### 📦 Prerequisites

To start with, we'll need to add React Testing Library and Jest to our application. You can install these by running the following:

```sh
npm install --save-dev @testing-library/react jest
```

In the [example repository](https://github.com/AdrianApan/react-testing-setup-example) I've create a simple react app with [Vite](https://vitejs.dev/). Most likely your setup will be more complex, and of course more configuration will be needed (especially for Jest), so if you run into any problems installing and configuring RTL and Jest make sure to consult the official documentation. For ease of access I've listed the links below:

- [React Testing Library docs](https://testing-library.com/docs/react-testing-library/intro)
- [Jest docs](https://jestjs.io/docs/getting-started)

---

### 🤡 Mocks and Setup

#### Redux

Before diving into this section, let's install [redux-mock-store](https://www.npmjs.com/package/redux-mock-store). We are going to use this package to setup and configure our test utility file.

```sh
npm install --save-dev redux-mock-store
```

To make things truly reusable, we'll create a util file in the `/utils/testing` folder called `test-utils.tsx`

```tsx
import React from 'react'
import { render as rtlRender, RenderOptions } from '@testing-library/react'
import { Store } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import configureStore from 'redux-mock-store'

import { RootState } from '../../state/reducers'

interface ExtendedRenderOptions extends RenderOptions {
  initialState: Partial<RootState>
  store?: Store<Partial<RootState>>
}

const TestWrapper =
  (store: Store) =>
  ({ children }: { children?: React.ReactNode }) => <Provider store={store}>{children}</Provider>

const render = (
  component: React.ReactElement,
  {
    initialState,
    store = configureStore<Partial<RootState>>([thunk])(initialState),
    ...renderOptions
  }: ExtendedRenderOptions = {
    initialState: {
      // can add default state here if need be
    },
  },
) => {
  return rtlRender(component, {
    wrapper: TestWrapper(store),
    ...renderOptions,
  })
}

export * from '@testing-library/react'

// override the built-in render
export { render }
```

_**Let's do a quick walk-through of what's happening here.**_

- We are extending the `RenderOptions` from React Testing Library to expect an intial state and a store object.

- Whenever `render` is called, we are setting `initialState` to an empty object by default - however, as you correctly noticed, we can still pass in an `initialState` when using this in our tests, alongside other options.

- `RootState` type is defined in the `/state/reducers/index.ts` file

```ts
export type RootState = ReturnType<typeof rootReducer>
```

- We are then re-exporting everything from `@testing-library/react` and also override the built-in `render` method.

_**Example usage**_

```tsx
import { render, screen } from 'src/utils/testing/test-utils'

const mockState = {
  user: {
    firstName: 'Jane',
    lastName: 'Doe',
  },
}

test('It should display the full name', async () => {
  render(<User />, { initialState: mockState })
  expect(await screen.findByText('Jane Doe')).toBeInTheDocument()
})
```

#### Routing

In my example app I made use of `@reach/router`, however React Router should follow the same principles. To mock routing and the hooks that comes with it, we'll follow the general rules of mocking a module:

```tsx
jest.mock('@reach/router', () => ({
  ...jest.requireActual('@reach/router'),
  useParams: () => ({
    userID: '1',
  }),
  navigate: jest.fn(),
}))
```

_This should sit on the top of your unit test just below the imports and above your tests._

- We use `jest.mock` to mock the `@reach/router` module.

- We need to make sure that everything from the actual module is actually used, up until we want to override something. To do this we are making use of the `jest.requiredActual()` method and the ES6 spread syntax.

- We then override the `useParams` and `navigate` hooks (but you can override as few or as many as you need).

---

### 🎬 Putting it all together

#### Example app

![Example app demo](https://raw.githubusercontent.com/AdrianApan/personal-site/master/public/assets/blog/posts/testing_app_example.gif)

This might be a contrived example since real world applications are more complex of course. However, trimmed back sufficiently, we can come up the following functionality:

- Query an API endpoint (`GET` call)
- Pull the data from the endpoint and store it in Redux
- Display the data from the store in a React component
- Data should be paginated, each entry is a new page
- Entry ID is reflected in the URL (`/people/1`)
- Details should be hidden by default
- To show the details, the user needs to click a toggle button

Again, the full repository of this example can be found [here](https://github.com/AdrianApan/react-testing-setup-example).

#### Testing

```tsx
import React from 'react'
import { navigate } from '@reach/router'

// Custom testing utils
import { render, fireEvent, screen } from '../../utils/testing/test-utils'
import '@testing-library/jest-dom/extend-expect'

// Initial state
import { initialState as initialUserState } from '../../state/slices/user.slice'

// Component to test
import User from './User'

// Configs and mocks
jest.mock('axios')

jest.mock('@reach/router', () => ({
  ...jest.requireActual('@reach/router'),
  useParams: () => ({
    userID: '1',
  }),
  navigate: jest.fn(),
}))

// Mock store
const mockState = {
  user: {
    ...initialUserState,
    details: {
      ...initialUserState.details,
      name: 'Fictional Character',
      height: '123',
      mass: '45',
      hair_color: 'red',
      skin_color: 'green',
      eye_color: 'yellow',
      birth_year: '1BBX3',
      gender: 'martian',
    },
  },
}

const displayedFields = [
  'height',
  'mass',
  'hair_color',
  'skin_color',
  'eye_color',
  'birth_year',
  'gender',
]

// Test suite
describe('User component', () => {
  beforeEach(() => {
    render(<User />, { initialState: mockState })
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('Should render the component with the mock data', async () => {
    expect(await screen.findByText(mockState.user.details.name)).toBeInTheDocument()
  })

  it('Should hide the user details on initial render', async () => {
    expect(await screen.findByText('Details are hidden')).toBeInTheDocument()
  })

  describe('User details', () => {
    beforeEach(() => {
      fireEvent.click(screen.getByText('Toggle details'))
    })

    afterEach(() => {
      jest.clearAllMocks()
    })

    it('Should not show the default text', () => {
      expect(screen.queryByText('Details are hidden')).toBeNull()
    })

    test.each(displayedFields)('Should show a %p field', async (fieldName) => {
      expect(
        // @ts-ignore
        await screen.findByText(mockState.user.details[fieldName]),
      ).toBeInTheDocument()
    })
  })

  describe('Navigation', () => {
    it('Should disable the previous button if userID is 1', () => {
      fireEvent.click(screen.getByText('Previous user'))
      expect(navigate).not.toHaveBeenCalled()
    })
    it('Should navigate to next user when clicking the "Next user" button', () => {
      fireEvent.click(screen.getByText('Next user'))
      expect(navigate).toHaveBeenCalledTimes(1)
      expect(navigate).toHaveBeenCalledWith('/people/2')
    })
  })

  describe('Special states', () => {
    it('Should show a loading state when page data is loading', async () => {
      render(<User />, {
        initialState: {
          user: { ...mockState.user, isLoading: true, isError: false },
        },
      })
      expect(await screen.findByText('Loading...')).toBeTruthy()
    })

    it("Should show an error message when data can't be loaded", async () => {
      render(<User />, {
        initialState: {
          user: { ...mockState.user, isLoading: false, isError: true },
        },
      })
      expect(await screen.findByText('Something went wrong. Please try again.')).toBeTruthy()
    })
  })
})
```

_**Let's do a quick walk-through of what's happening here.**_

- We import the `render` method from our testing util file instead of the RTL package.

```tsx
import { render, fireEvent, screen } from '../../utils/testing/test-utils'
```

- We mock the routing as explained above

```tsx
// Mock @reach/router's useParams and navigation
jest.mock('@reach/router', () => ({
  ...jest.requireActual('@reach/router'),
  useParams: () => ({
    userID: '1',
  }),
  navigate: jest.fn(),
}))
```

- We create a `mockState` object

```tsx
// Mock store
const mockState = {
  user: {
    ...initialUserState,
    details: {
      ...initialUserState.details,
      name: 'Fictional Character',
      height: '123',
      mass: '45',
      hair_color: 'red',
      skin_color: 'green',
      eye_color: 'yellow',
      birth_year: '1BBX3',
      gender: 'martian',
    },
  },
}
```

- We pass in this `mockState` object to the `render` method

```tsx
beforeEach(() => {
  render(<User />, { initialState: mockState })
})
```

- Finally we cover the scenarios we want to test for

![Testing results](https://raw.githubusercontent.com/AdrianApan/personal-site/master/public/assets/blog/posts/testing_results.png)

#### Testing custom hooks

As you might have noticed by now, in the `User` component I have separated the presentational layer (UI elements) from the "business" or logical layer, by using a custom hook (see the `useUser.tsx` file). This is a practice I would highly recommend not just because it makes testing easy, but also because it's an absolute breeze to maintain, especially in a fast paced software engineering environment.

In our particular case the custom hook is quite basic, so no real issues here, but I want to leave you with another tip when it comes to testing a custom React hook. Let's take a slightly different example: a hook that makes a direct API call and saves it in a local state.

```tsx
// Example hook
import { useState, useEffect } from 'react'
import { getUser } from 'src/api'

interface User {
  firstName: string
  lastName: string
}

interface Users {
  users: User[]
}

const useUsers = (): Users => {
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    getUser()
      .then((res) => setUsers(res))
      .catch(() => {
        // Handle error
      })
      .finally(() => {
        // In case you need it
      })
  }, [])

  return { users }
}

export default useUsers
```

```tsx
// Example component usage
import React from 'react'
import useUsers from './useUsers'

const Component = () => {
  const { users } = useUsers()

  return(
    //  do something with the users array
  )
}

export default Component
```

Now to make this work in our test, all we have to do is to mock like so:

```tsx
jest.mock('src/hooks/useUsers', () => ({
  __esModule: true,
  default: () => ({
    users: [
      { firstName: 'John', lastName: 'Doe' },
      { firstName: 'Jane', lastName: 'Doe' },
    ],
  }),
}))
```

What's happening here is that we are mocking a module (in our case a custom hook) and we mock the `default` response to be an object which contains an array of `users`. Please note the `__esModule: true` - this is the key to make this happen. I think this demonstrates brilliantly the power of using custom hooks to separate the concerns in a component.

---

👋 I'm going to wrap up things here. I hope you found at least some helpful tips in this article in order to kickstart your testing journey. Best of luck!
