
> **💡 objective of this chapter**
> 4 component styling 
> 1. normal css
> 2. Sass
> 3. CSS Module
> 4. styled-component (style in javascript)

### 9.1 Normal CSS
---
> App.css

```css
.App {
  text-align: center;
}

.App-logo {
  height: 40vmin;
  pointer-events: none;
}

@media (prefers-reduced-motion: no-preference) {
  .App-logo {
    animation: App-logo-spin infinite 20s linear;
  }
}

.App-header {
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}

.App-link {
  color: #61dafb;
}

@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

```

The most important thing is don't make css class duplicate.
Let's check it out the way of naming 

<br />

#### 9.1.1 Naming Rule
---
BEM naming: card__title-primary
```css
.App .logo {
	animation: App-logo-spin infinite 20s linear;
	height: 40vmin;
}
```

this code means `logo` class in `App` class

<br />

### 9.2 use Sass
---
Sass(Syntactically Awesome Style Sheet)
- CSS preprocessor that can complicated work to be simple.
- increase readability.
- two extension(.scss, .sass)

.sass and .scss is different syntax
- sass has no semi-conon, and curly braces.
<mark>.scss</mark> is popular than .sass

> .sass

```css
$font-stack: Helvetica, sans-serfi
$primary-color: #333

body
  font: 100% $font-stack
  color: $primary-color
```

> .scss
```scss
$font-stack: Helvetica, sans-serfi;  
$primary-color: #333;  
  
body {  
  font: 100% $font-stack;  
  color: $primary-color;  
}
```

> 📦 prerequisite
> `yarn install sass`
> that can translate sass file to css

```scss
// using variable  
$red: #fa5252;  
$orange: #fd7e14;  
$yellow: #fcc419;  
$green: #40c057;  
$blue: #339af0;  
$indigo: #5c7cfa;  
$violet: #7950f2;  
  
@mixin square($size) {  
  $calculated: 32px * $size;  
  width: $calculated;  
  height: $calculated;  
}  
  
.SassComponent {  
  display: flex;  
  .box { // in normal CSS, same as '.SassComponent .box'  
    background: red;  
    cursor: pointer;  
    transition: all 0.3s ease-in;  
    &.red { // .red class with .box class  
      background: $red;  
      @include square(1); // it's not same as declaration (@mixin)  
    }  
    &.orange {  
      background: $orange;  
      @include square(2);  
    }  
    &.yellow {  
      background: $yellow;  
      @include square(3);  
    }  
    &.green {  
      background: $green;  
      @include square(4);  
    }  
    &.blue {  
      background: $blue;  
      @include square(5)  
    }  
    &.indigo {  
      background: $indigo;  
      @include square(6);  
    }  
    &.violet {  
      background: $violet;  
      @include square(7);  
    }  
    &:hover {  // : operator is used in dynamic and all effect
      background: black;  // not $black
    }  
  }  
  
}
```

mixin


### 9.2.1 detach utils function
---
we can separate variable and mixin

#### 9.2.2 sass-loader setting customizing
---
