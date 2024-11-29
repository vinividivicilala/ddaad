---
title: 'Typescript: Types vs Interfaces'
excerpt: 'Types and Interfaces are very similar and most often you could use any of them in your code and it would work just fine. The key distinction is that a type cannot be re-opened to add new properties to it compared to an interface which is always extendable.'
date: '2021-05-02'
---

Types and Interfaces are very similar and most often you could use any of them in your code and it would work just fine. The key distinction is that a type cannot be re-opened to add new properties vs an interface which is always extendable. Let's dive into a quick example.

#### Adding new fields to an existing interface

```ts
interface Measurements {
  length: number
}

interface Measurements {
  width: number
}

const data: Measurements = { length: 42 }

// Property 'width' is missing in type '{ length: number; }'
```

The `data` variable expects a `width` property. This is an expected behaviour, meaning adding a new field to an existing interface worked fine in the above example.

#### A type cannot be changed after being created

```ts
type Measurements = {
  length: number
}

type Measurements = {
  width: number
}

const data: Measurements = { length: 42 }

// Error: Duplicate identifier 'Measurements'.
```

The above one will throw an error because you can't change a type after being created. We can already start seeing a well defined pattern on when we should be using type and when to opt for using interfaces.

Moving forward with another example, let's see how we can extend an interface and a type.

#### Extending an interface

```ts
interface Measurements {
  length: number
}

interface ExtraStats extends Measurements {
  weight: number
}
```

#### Extending a type

```ts
type Measurements = {
  length: number
}

type ExtraStats = Measurements & {
  weight: number
}
```

There is really not much difference here in terms of functionality. However, personally I find that extending an interface makes the code much more readable.

Furthermore, a few more differences that you should be aware:

- Type aliases may not participate in declaration merging, but interfaces can.
- Interfaces may only be used to declare the shapes of object, not rename primitives.
- Interface names will always appear in their original form in error messages, but only when they are used by name.

To wrap it up, I would recommend using interfaces for most of the part in your code unless you need to use certain features from type.
