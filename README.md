<p align="center">
  <img src="https://images.hostmessage.info/login_logo/f8e66ecb91ee035df5ae20f0f4eaaa99.jpg">
</p
# soumik-cookie.js

<p align="center">
<img src="https://img.shields.io/badge/build-passing-brightgreen">
<img src="https://img.shields.io/badge/deployment-passing-brightgreen">

</p>

## Documentation

### Create cookie with only one line of sentence:

Set a cookie
``` javascript
cookie.set(name, value, expiration_date);
```

Get a single cookie value:

``` javascript
cookie.get(name);
```

Read all :

``` javascript
cookie.read();
```

Remove a cookie:

``` javascript
cookie.remove(name);
```

Check Weather a specific cookie is exist or not:

``` javascript
var a = cookie.get(name); // name = cookie name
if (a !== 'undefined') {
  //your code
}
else{
  //your code
}

```

### Some other optional perameters

set timezone of the user:

``` javascript
cookie.setTz(name, time); // name = cookie name and time = expiration date
```

set language of the page:

``` javascript
cookie.setLang(name, time); // name = cookie name and time = expiration date
```

set platform of the browser:

``` javascript
cookie.setPlatform(name, time)
```

set user agent of the user:
``` javascript
cookie.setUserAgent(name, time);
```

### (c) 2021 Soumik Mahato
