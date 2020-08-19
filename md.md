```css
.container {
  display: grid | inline-grid;
}
.container {
  grid-template-columns: ... | ...;
  grid-template-rows: ... | ...;
}

.container {
  grid-template-columns: 40px 50px auto 50px 40px;
  grid-template-rows: 25% 100px auto;
}
/* 解读 */
.container {
  grid-template-columns: [first] 40px [line2] 50px [line3] auto [col4-start] 50px [five] 40px [end];
  grid-template-rows: [row1-start] 25% [row1-end] 100px [third-line] auto [last-line];
}
```

```js
function stay() {
  
}
```
