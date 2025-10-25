---
sidebar_position: 1
---

# TypeScript for React Developers

You've learned JavaScript. Now let's add TypeScript - not because you have to, but because it makes your life easier.

## The Problem TypeScript Solves

Here are bugs that slip through in JavaScript:

```javascript
// Bug 1: Function expects number, gets string
function calculateDiscount(price, percent) {
  return price * percent;
}
calculateDiscount("100", "10"); // Returns "10010" 😱

// Bug 2: Typo in property name
const user = { name: "Alice", email: "alice@example.com" };
console.log(user.emial); // undefined - typo not caught!

// Bug 3: Missing required prop
function Greeting({ name, age }) {
  return <h1>Hello {name}, you are {age}</h1>;
}
<Greeting name="Bob" /> // Missing age - breaks at runtime

// Bug 4: Wrong type passed to React component
<Button onClick="handleClick" /> // String instead of function!
```

**All these bugs are caught ONLY when the code runs.** Users see errors. You debug production.

**TypeScript catches ALL of these BEFORE you even run the code.** Red squiggly lines appear in your editor as you type.

## What You'll Learn

1. **[Why TypeScript?](./why-typescript.mdx)** - See bugs before users do
2. **[Basic Types](./basic-types.mdx)** - The building blocks (string, number, arrays, objects)
3. **[Interfaces & Types](./interfaces.mdx)** - Describe your data shape
4. **[TypeScript with React](./typescript-with-react.mdx)** - Type-safe components and hooks

## The Strategy: Side-by-Side Learning

Every concept shows JavaScript first, then TypeScript. You'll see EXACTLY what TypeScript adds.

**Example pattern you'll see throughout:**

**JavaScript version** → Works but risky
```javascript
function greet(name) {
  return `Hello ${name}`;
}
greet(123); // Works! But probably wrong
```

**TypeScript version** → Same code but safer
```typescript
function greet(name: string) {
  return `Hello ${name}`;
}
greet(123); // ❌ Error caught immediately!
```

The difference? Adding `: string` tells TypeScript "name must be a string." Your editor enforces it automatically.

## Time Estimate

**If you're new to TypeScript:** 1-2 days to get comfortable

**If you know some TypeScript:** A few hours to fill gaps

Don't rush. Type along with every example. The muscle memory matters.

## Ready?

Start by understanding why TypeScript exists and what problems it solves.

[Continue to Why TypeScript? →](./why-typescript.mdx)
