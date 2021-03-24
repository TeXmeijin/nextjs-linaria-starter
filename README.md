# Next.js and Linaria starter

## Linaria

[linaria](https://github.com/callstack/linaria) is Zero-runtime CSS in JS library.

You can write CSS in JS, but with zero runtime, CSS is extracted to CSS files during build!

## How to configuration

`next.config.js`

```javascript
const withLinaria = require('next-linaria');

module.exports = withLinaria({
});
```

`.babelrc`

```
{
  "presets": ["next/babel", "linaria/babel"]
}
```

### packages

- linaria
- next-linaria
- @babel/core

**NOTICE** [@zeit/next-css](https://www.npmjs.com/package/@zeit/next-css) also can be used for linaria setting up. But it is deprecated. So I recommend use `next-linaria`

## How to use

```react
const headingStyle = css`
  font-weight: bold;
  font-size: 1.4rem;
  color: red;
`

<h1 className={headingStyle}>
  Nextjs Linaria boilerplate
</h1>
```