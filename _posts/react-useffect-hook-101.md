---
title: 'React useEffect hook 101'
excerpt: 'The Effect Hook, or shorly useEffect(), lets you perform side effects in a React functional component. Dealing with fetch requests, looking to manipulating the DOM directly or maybe trying to make use of a timer function? This is where useEffect is your go-to choice.'
date: '2021-05-13'
---

### 🌱 Introduction

The Effect Hook, or shorly `useEffect()`, lets you perform side effects in a React functional component. Dealing with fetch requests, manipulating the DOM directly or trying to make use of a timer function? This is where `useEffect` is your go-to choice.

The useEffect hook accepts two arguments:

```jsx
useEffect(callback, [dependencies])
```

- `callback` is the callback function that contains the side effect logic. It will be executed after React has committed the changes to the screen.
- `dependencies` is an optional array of dependencies. The callback function will be executed once aftr the intial render and every time the value of the dependencies has changed.

Here is a quick example demonstrating the useEffect hook:

```jsx
import React, { useEffect } from 'react'

function Example() {
  useEffect(() => {
    document.title = `Fancy new title!`
  }, [])
}
```

---

### 📦 Dependencies array

#### Not provided

The side effect will run after every render.

```jsx
import React, { useEffect } from 'react'

function Example() {
  useEffect(() => {
    // Executed after every render
  }) // 🔎 notice the missing depedency array
}
```

#### Empty array

The side effect will run once after the intial render.

```jsx
import React, { useEffect } from 'react'

function Example() {
  useEffect(() => {
    // Executed once after the initial render
  }, []) // 🔎 notice the empty depedency array
}
```

#### With dependencies

The side effect will run once at the intial render and every time the value of a dependency changes.

```jsx
import React, { useState, useEffect } from 'react'

function Example() {
  const [minutes, setMinutes] = useState(100)

  useEffect(() => {
    // Executed once after the intial render and
    // every time the "minutes" state has changed
  }, [minutes]) // 🔎 notice the "minutes" dependency
}
```

---

### 🧽 Cleanup function

Sometimes you need to cleanup a side effect like for example clearing a timer or maybe closing a socket connection. Thankfully cleaning up a side effects is straightforward: pass a return function in the useEffect callback function.

Let's demonstrate this with an example:

```jsx
import React, { useEffect } from 'react'

function Example() {
  useEffect(() => {
    const id = setInterval(() => {
      console.log('Logged every 3 seconds')
    }, 3000)

    // 🧽 cleanup function in useEffect
    return () => {
      clearInterval(id)
    }
  }, [])
}
```

How cleanup works:

- After the initial render the `useEffect` invokes the side effect, ignoring the cleanup function.
- On subsequent renders, and before invoking the side effect, `useEffect` will run the cleanup function from the previous execution, then it runs the current side effect.
- After unmounting the component, `useEffect` invokes the cleanup function from the latest side effect callback.
