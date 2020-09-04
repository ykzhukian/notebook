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
  grid-template-rows: [row1-start] 25% [row1-end row2-start] 100px [third-line] auto [last-line];
}

/* 为什么要命名 */
/* 给Grid布局中的分隔线命名，为的就是可以更好地对区域进行描述。如果我们没有描述某片区域的的需求，自然也不需要命名了。（ZXX） */

/* fr：fraction 分数 */
.container {
  /* 三等分 */
  grid-template-columns: 1fr 1fr 1fr; 
  /* 固定值，然后三等分剩下的大小 */
  grid-template-columns: 200px 1fr 1fr 1fr;
  /* 此处auto仅仅是包裹第一个网格，不会拉伸 */
  grid-template-columns: auto 1fr 1fr 1fr;
}


/* grid-template-areas */
.container {
  grid-template-areas: 
    "<grid-area-name> | . | none | ..."
    "...";
}

/* 支持中文区域名称 */
.container {
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  grid-template-areas: 
    "葡萄 葡萄 葡萄"
    "龙虾 养鱼 养鱼"
    "龙虾 养鱼 养鱼"
    "西瓜 西瓜 西瓜";
}
/* 如果我们给网格区域命了名，但是没有给网格线命名，则会自动根据网格区域名称生成网格线名称，规则是区域名称后面加-start和-end。例如，某网格区域名称是“葡萄”，则左侧column线名称就是“葡萄-start”，左侧column线名称就是“葡萄-end”。 */
```

```html
<div class="container">
  <div class="putao"></div>
  <div class="longxia"></div>
  <div class="yangyu"></div>
  <div class="xigua"></div>
</div>
```

```css
/* grid-template */
/* grid-template是grid-template-rows，grid-template-columns和grid-template-areas属性的缩写。 */
.container {
  grid-template: none;
}
.container {
  grid-template: <grid-template-rows> / <grid-template-columns>;
  grid-template: 
    "葡萄 葡萄 葡萄" 1fr 
    "龙虾 养鱼 养鱼" 1fr 
    "龙虾 养鱼 养鱼" 1fr 
    "西瓜 西瓜 西瓜" 1fr
    /1fr 1fr 1fr;
  /* 推荐用 grid 代替 grid-template */
  grid: 100px 300px / auto-flow 200px;
  /* 以上等同于 */
  grid-template-rows: 100px 300px;
  grid-auto-flow: column;
  grid-auto-columns: 200px;

  grid: [ auto-flow && dense? ] <grid-auto-rows>? / <grid-template-columns>;
  grid: <grid-template-rows> / [ auto-flow && dense? ] <grid-auto-columns>?;
}
```

#### Grid Container 的全部属性
```css
/* 斜杠前面都是rows相关属性，斜杠后面都是columns相关属性 */
.parent {
  display: grid | inline-grid | subgrid;
  grid-template-columns: <track-size> ... | <line-name> <track-size> ...;
  grid-template-rows: <track-size> ... | <line-name> <track-size> ...;
  grid-template-areas:
    "header header header header"
    "main main . sidebar"
    "footer footer footer footer";
  grid-template: none | subgrid | <grid-template-rows> / <grid-template-columns>;
  grid-template: [row1-start] "header header header" 25px [row1-end]
    [row2-start] "footer footer footer" 25px [row2-end]
    / auto 50px auto;
  grid-column-gap: <line-size>;
  grid-row-gap: <line-size>;
  grid-gap: <grid-row-gap> <grid-column-gap>;
  /* 现在用 */
  gap: <grid-row-gap> <grid-column-gap>;
  justify-items: start | end | center | stretch;
  align-items: start | end | center | stretch;
  justify-content: start | end | center | stretch | space-around | space-between | space-evenly;
  align-content: start | end | center | stretch | space-around | space-between | space-evenly;
  place-content: <align-content> <justify-content>;
  /* 隐式的网格宽度 */
  grid-auto-columns: <track-size> ...; 
  grid-auto-rows: <track-size> ...;
  grid-auto-flow: row | column | row dense | column dense;
  /* dense这个英文是稠密的意思。如果有设置，则表示自动排列启用“密集”打包算法。如果稍后出现的网格比较小，则尝试看看前面有没有合适的地方放置，使网格尽可能稠密紧凑。此属性值仅仅改变视觉顺序，会导致DOM属性和实际呈现顺序不符合，这对于可访问性是不友好的，建议谨慎使用。 */
  grid: <grid-template-rows> / [ auto-flow && dense? ] <grid-auto-columns>?;
}
```

#### Grid Items 的全部属性

```css
.item {
  grid-column-start: <number> | <name> | span <number> | span <name> | auto;
  grid-column-end: <number> | <name> | span <number> | span <name> | auto;
  grid-row-start: <number> | <name> | span <number> | span <name> | auto;
  grid-row-end: <number> | <name> | span <number> | span <name> | auto;
  grid-column: <start-line> / <end-line> | <start-line> / span <value>;
  grid-row: <start-line> / <end-line> | <start-line> / span <value>;
  grid-area: <name> | <row-start> / <column-start> / <row-end> / <column-end>;
  justify-self: stretch | start | end | center;
  align-self: stretch | start | end | center;
}
```

#### Reference

[张鑫旭 CSS Grid](https://www.zhangxinxu.com/wordpress/2018/11/display-grid-css-css3/?shrink=1#grid-template-columns-rows)

[Grid布局完整指南](https://zhuanlan.zhihu.com/p/33030746)