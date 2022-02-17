# Big O Notation - What does it mean?

> Can you write a program to calc a total from 1 to n? (n is the input your type from your keyboard)

This is simple question, I think you can do it. Or if you can't do it, you should learn basic programming before reading this section.

```javascript
function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) total += i;
  return total;
}
```

Okayyy, you can do it like me. Now, let's test our code.

```javascript
addUpTo(10);
```
