```css
.container {
  background-color: red;
  width: 100%;
  padding-top: 100%; /* 1:1 Aspect Ratio */
  position: relative; /* If you want text inside of it */
}

/* If you want text inside of the container */
.text {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}

/* 16:9 Aspect Ratio */
.container {
  padding-top: 56.25%; /* 16:9 Aspect Ratio (divide 9 by 16 = 0.5625) */
}
/* 4:3 Aspect Ratio */
.container {
  padding-top: 75%; /* 4:3 Aspect Ratio (divide 3 by 4 = 0.75) */
}
/* 3:2 Aspect Ratio */
.container {
  padding-top: 66.66%; /* 3:2 Aspect Ratio (divide 2 by 3 = 0.6666)  */
}
/* 8:5 Aspect Ratio */
.container {
  padding-top: 62.5%; /* 8:5 Aspect Ratio (divide 5 by 8 = 0.625) */
}
```