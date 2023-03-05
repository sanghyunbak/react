
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

<br />

### 9.2.1 separate utils function
---
We can separate variable and mixin to some file and when need it, we can import and use it.
Let's create styles directory, and create utils.scss file. And move variable and mixin to utils.scss file that in styles directory.

> utils.scss
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
```


> SassComponent.scss
```scss
@import "./styles/utils";  
  
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
    &:hover {  
      background: black;  
    }  
  }  
  
}
```

<br />

#### 9.2.2 sass-loader setting customizing
---
sass file directory hierarchy can be very deep, so we can customize root directory in `webpack.config.js` file.
we can omit `import utils.js`
> `yarn eject` : make config file that user can customize.
> find `webpack.config.js`.
> find keyword `sassRegex`.
> find keyword `getStyleLoaders`
> - set includePaths option 
> - `additionalData` option can add code likes `@import 'utils';`

<br />

#### 9.2.3 get Library from node_modules
----
>  in `node_modules` folder has every libraries that added yarn.
>  - `@import '../../../node_modules/library/styles';`
>  - `@import '~library/styles'`;

example. let's add two libraries `open-color` and `include-media`

> `util.scss`
```scss
@import '~include-media/dist/include-media';
@improt '~open-color/open-color';
```
Official manual didn't inform library path. so check library path that you are install.

> `SassComponent.scss`

```scss
.SassComponent {
  display: flex;
  background: $oc-gray-2;
  @include media('<768px') {
    background: $oc-gray-9;
  }
  (...)
}
```

<br />

### 9.3 CSS Module
---
> make class name to unique.
> [file name]\_[class name]\_[hash value]
> In v1 create-react-app must set `css-loader` to use CSS Module. 
> v2 create-react-app can use CSS Module just make file extension `.module.css`.

> `CSSModule.module.css`

```css
.wrapper {  
    background-color: black;  
    padding: 1rem;  
    color: white;  
    font-size: 2rem;  
}  
  
:global .something {  
    font-weight: 800;  
    color: aqua;  
}
```

> `CSSModule.js`

```javascript
import styles from './styles/CSSModule.module.css';  
  
import React from 'react';  
  
const MyComponent = () => {  
  return (  
      <div className={styles.wrapper}>  
        hello! I'm <sapn className={".something"}>CSS Module</sapn>  
      </div>  
  );  
};  
  
export default MyComponent;
```

`console.log.(styles)`
will return likes this 
`{ wrapper: "CSSModule_wrapper_15bdQ" }`

> `CSSModule.module.css`
```scss
.wrapper {  
    background-color: black;  
    padding: 1rem;  
    color: white;  
    font-size: 2rem;  
}  
  
.inverted {  
    color: black;  
    background: white;  
    border: 1px solid black;  
}  
  
:global .something {  
    font-weight: 800;  
    color: aqua;  
}
```


>`CSSModuleTemplateLiteral`

```javascript
import styles from './styles/CSSModule.module.css';  
  
import React from 'react';  
  
const MyComponent = () => {  
  return (  
      <div className={`${styles.wrapper} ${styles.inverted}`}>  
        hello! I'm <sapn className={"something"}>CSS Module</sapn>  
      </div>  
  );  
};  
  
export default MyComponent;
```

If you wan't apply style in component. `className={style.[class name]}`
> template literal in ES6 syntax
> use backtick(\`) add javascript reference in string (like f-string in python.)

#### 9.3.1 classnames (conditional CSS class name)
---
> `classnames` library is conbinient when conditioanl CSS class name
> `yarn add classnames`

>`ClassNames.js`
```javascript
  
import classNames from 'classnames';  
  
classNames('one', 'two') // one two  
classNames('one', {'two': true}) // one two  
classNames('one', {'two': false}) // one  
classNames('one', ['two', 'three']) // one two three  
  
const myClass = 'hello';  
classNames('one', myClass, {myCondition: true}); // = 'one hello myCondition'  
  
const MyComponent = ({highlighted, theme}) => {  
  return (  
      <div className={classNames('MyCopmponent', {highlighted}, theme)}>  
        Hello  
      </div>  
  );  
};  
  
export default MyComponent;
```

Bind function in classnames make it easy to use CSSModule
in `styles.[className]` , omit `styles.`

```javascript
import React from 'react';  
import styles from './styles/CSSModule.module.css';  
import classNames from 'classnames';  
  
const cx = classNames.bind(styles);  
const MyComponent = () => {  
  return (  
      <div className={cx('wrapper', 'inverted')}>  
        Hello I'm <span className={"something"}>CSS Module!</span>  
      </div>  
  );  
};  
  
export default MyComponent;
```