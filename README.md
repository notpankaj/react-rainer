<!-- <style>
@keyframes rotating {
  from {
    -ms-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -ms-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
.rotating {
  -webkit-animation: rotating 10s linear infinite;
  -moz-animation: rotating 10s linear infinite;
  -ms-animation: rotating 10s linear infinite;
  -o-animation: rotating 10s linear infinite;
  animation: rotating 10s linear infinite;
}
</style> -->

<h1 align="center">
	<br>
	<br>
	<img  width="200" alt="RAINER LOGO" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/768px-React-icon.svg.png">
	<br>
	<br>
	<br>
    <b style="color:lightblue">🌧️ REACT RAINER 🌧️</b>
</h1>

> make react components ⚡quicky⚡ with CLI.

<!-- [![Downloads](https://badgen.net/npm/dt/rainer)](https://www.npmjs.com/package/rainer) -->

[![npm](https://badgen.net/badge/icon/npm?icon=npm&label&color=red)](https://www.npmjs.com/package/rainer)
[![openSouce](https://badgen.net/badge/open/soucre/green)](https://github.com/notpankaj/react-rainer)
[![github](https://badgen.net/badge/icon/github?icon=github&label&color=gray)](https://github.com/notpankaj/react-rainer)
[![fast](https://badgen.net/badge/icon/fastAF?icon=bitcoin-lightning&label&color=yellow)](#)
[![cli](https://badgen.net/badge/icon/terminal?icon=terminal&label&color=black)](#)
[![react](https://badgen.net/badge/love/react/cyan)](https://reactjs.org/)

Command Line script to generate [ components, files, and pages ]
for ' REACT ' including React-Native and Next.js.

Feel free to play around with the code and fork this repl at [instagram](https://www.instagram.com/imnotpankaj/).

## Install

```sh
$ npm install rainer

# recommended
$ npm install rainer -g

# use without installing
$ npx rainer
```

## Usage

```sh
$ rainer src/components/product/Product
```

```jsx
// src/components/product/Product.js

import React, from "react";

const Product = () => {
    return <></>
}

export default Product

```

**Note** : You can also pass diffrent flags to generate more modifcation to basic component such as , class components , component + stylesheets , component having lifecycle sudo code.

## FLAGS 🚩

- <b style="color:lightblue;">-v, --version </b> - check current rainer version.
- <b style="color:lightblue;">--help </b> - print's user manually in cli.
- <b style="color:lightblue;">-c, --class </b> - used to create class component.
- <b style="color:lightblue;">-r, --resource </b> - used to create componet including common lifecycle methods.
- <b style="color:lightblue;">style:[OPTIONS] </b> - this will create component with stylesheet attached to it.
  <br><i>style options</i>:
  - css
  - scss
  - sass
  - less
- <b style="color:lightblue;">EGG:[OPTION] </b> - Easter 🥚Egg.
  <br><i>options for EGG are single alphabet from [a to Z].</i>

```sh
#hatch an egg
$ rainer EGG:A
```

---

## Getting Started

```sh
$ rainer src/pages/rat/Rat -c -r style:css
```

Alternatively

```sh
$ rainer src/pages/rat/Rat --class --resource style:css
```

create's two file Rat.js (component) and rat.css (stylesheet) in src/pages/rat directory.

```jsx
// inside src/pages/rat/Rat.js
import React from "react";
import "./rat.css";

class Rat extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: false };
  }

  componentDidMount() {}
  componentDidUpdate(prevProps, prevState) {}
  componentWillUnmount() {}

  render() {
    return <></>;
  }
}

export default Rat;
```

## Functional Component with Resource + stylesheet

```sh
$ rainer src/pages/monkey/Monkey -r style:sass
```

This
create's two file Monkey.js (component) and monkey.sass (stylesheet) in src/components/monkey directory.

```jsx
// inside src/components/monkey/Monkey.js
import React, { useState, useEffect } from "react";
import "./monkey.sass";

function Monkey() {
  const [state, setState] = useState(false);

  useEffect(() => {
    return () => {};
  }, []);

  return <> </>;
}

export default Monkey;
```

**Note:** if we dont need need stylesheet we can simple skip the style:[option] flag , same with the resource flag

---

## Easter Egg 🥚

How to trigger Egg Hatching.<br>

for this we have to pass an alphabet character to flag named EGG

##### _example_ :

```sh
$ rainer EGG:W
```

##### _output_ :

```sh
$ rainer EGG:w
┊┊┊┊┊┊┊┊┊┊┊┊┊╭╭╭╮╮╮┊┊┊┊┊┊┊┊┊
┊┊┊┊┊┊┊┊┊┊┊┊╰╰╲╱╯╯┊┊┊┊┊┊┊┊
┊┊┊┊┊┊┊┊┏╮╭┓╭━━━━━━╮┊┊┊┊┊┊┊┊
┊┊┊┊┊┊┊┊╰╮╭╯┃┈┈┈┈┈┈┃┊┊┊┊┊┊┊┊
┊┊┊┊┊┊┊┊┊┃╰━╯┈┈╰╯┈┈┃┊┊┊┊┊┊┊┊
┊┊┊┊┊┊┊┊┊┃┈┈┈┈┈┈┈╰━┫┊┊┊┊┊┊┊┊
╲╱╲╱╲╱╲╱╲╱╲╱╲╱

```

**Note**: rainer nest may or may not contain some eggs.
<br> more eggs will be added in upcomming version.

---

## Maintainers

- [P A N K A J](https://github.com/notpankaj "Github")
- [Get In Touch](https://github.com/notpankaj "Github")
  - [instagram](https://www.instagram.com/imnotpankaj)
  - [iampankaj0409@gmail.com](# "offical mail")
  - [npm.send.mail@gmail.com](# "casual email")

---
