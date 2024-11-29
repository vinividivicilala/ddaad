---
title: 'Chain filter() methods using reduce()'
excerpt: "Ocassionally, I do find myself in a spot where I need to chain a couple of `.filter()` methods to trim back on my data and show only what's needed. But how many `.filter()` are too many? Here is a short, readable and easy to understand way to chain multiple filter() methods."
date: '2021-05-02'
---

Ocassionally, I do find myself in a spot where I need to chain a couple of `.filter()` methods to trim back on my data and show only what's needed. But how many `.filter()` are too many? Two? I can get behind it. Three or more? That's going to create some crazy cascading in the code that can potentially get out of hand.

Here is a short, readable and easy to understand way to chain multiple filter() methods.

```js
/**
 * ℹ️ Topic: Chain filter() methods using reduce()
 */

const filteredData = (data, filters) => filters.reduce((acc, cur) => acc.filter(cur), data)
```

#### Example usage

```js
const greaterThanThree = (number) => number > 3
const lessThanNine = (number) => number < 9

const data = [1, 3, 5, 7, 9]
const filters = [greaterThanThree, lessThanNine]

filteredData(data, filters)

// ✅ Output: [5, 7]
```
