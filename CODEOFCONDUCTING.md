# Soumik Cookie js

## License: MIT
### Author @soumikmahato and other contributors for this please refers to contributor.md

### Why soumikcookie.js
<hr>

#### It is easy to use first simple http cookie managing library written in javascript. Now there is 2 version: <br>
1)vanilla javascript - soumik-cookie.max.js, minify version - soumik-cookie.min.js <br>
2)Nodejs Veraion - soumik-cookie.node.max.js<br>

### Javascript version:
``` javascript
cookie.set(name, value, expiration_date);

// to get a cookie
cookie.get(name);

//read a cookie
cookie.read();

//delete a cookie
cookie.remove(name);

// set timezone of the user:
cookie.setTz(name, time); // name = cookie name and time = expiration date

//set language in the page
cookie.setLang(name, time); // name = cookie name and time = expiration date

//set platform
cookie.setPlatform(name, time)

//set useragent
cookie.setUserAgent(name, time);


//check a cookie is exist or not
var a = cookie.get(name); // name = cookie name
if (a !== 'undefined') {
  //your code
}
else{
  //your code
}


```

### node.js version

``` javascript

const cookie = require('./path/to/cookie');

const sc = new cookie();


//set a cookie
sc.set("name", "value", time);

//remove a cookie
sc.remove("name");

//read all cookie
sc.read("name");

//set timezone
sc.setTz("name", time);

```

## FAQ
### WHAT COMING SOON?
#### An async and await version of soumik-cookie.js

### When?
#### Date is not fixed.
#### It will come before version 1.0.5 update.

### How do I contribute?
#### Just make a pull request and update as you wish.

### how do I report an issue or bug?
#### Just click (https://github.com/soumikmahato/soumik-cookie.js/issues)[this link to report the bug]


<hr>

Thankyou ✋ (c) 2021 Soumik Mahato
License: 😄 MIT
