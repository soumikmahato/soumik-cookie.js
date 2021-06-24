### Soumik cookie nodejs for node

#### License - MIT
#### (c) 2021 Soumik-cookie.js

### import module in your projects
``` javascript

// node default import

const cookie = require(".../src/soumik-cookie.node.max.js");

//es6 import
import {cookie} from '.../src/soumik-cookie.max.js';

```

### Basic code demo
``` javascript
const cookie = require('.../src/soumik-cookie.max.js');

let cookie1 = new cookie();
cookie.set("name", "value", "days"); 
// data value type (string, string, number);
```
