```html
<!-- HTML -->
<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
</div>
```

```css
/*
  设为网格布局以后，容器子元素（项目）的float、display: inline-block、display: table-cell、vertical-align和column-*等设置都将失效。 
*/
.container {
  display: grid | inline-grid;
}
/* 定义每列、行的宽高 */
.container {
  grid-template-columns: ... | ...; /* 定义每一列的列宽 */
  grid-template-rows: ... | ...; /* 定义每一行的行高 */
}

/* repeat */
.container {
  grid-template-columns: 40px 50px auto 50px 40px;
  grid-template-rows: 25% 25% 25%; /* 等同于下面使用 repeat */
  grid-template-rows: repeat(3, 25%); 
}

/* 解读 */
.container {
  grid-template-columns: [first] 40px [line2] 50px [line3] auto [col4-start] 50px [five] 40px [end];
  grid-template-rows: [row1-start] 25% [row1-end] 100px [third-line] auto [last-line];
}
```
