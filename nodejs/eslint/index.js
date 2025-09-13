if (false) {
    doSomethingUnfinished();
}

if (void x) {
    doSomethingUnfinished();
}

if (x &&= false) {
    doSomethingNever();
}

if (class {}) {
    doSomethingAlways();
}

if (new Boolean(x)) {
    doSomethingAlways();
}

if (Boolean(1)) {
    doSomethingAlways();
}

if (undefined) {
    doSomethingUnfinished();
}

if (x ||= true) {
    doSomethingAlways();
}

for (;-2;) {
    doSomethingForever();
}

while (typeof x) {
    doSomethingForever();
}

do {
    doSomethingForever();
} while (x = -1);

const result = 0 ? a : b;

if(input === "hello" || "bye"){
  output(input);
}


/*eslint no-dupe-args: "error"*/

function foo(a, b, a) {
    console.log("value of the second a:", a);
}

const bar = function (a, b, a) {
    console.log("value of the second a:", a);
};




/*eslint camelcase: "error"*/

import { no_camelcased } from "external-module"

const my_favorite_color = "#112C85";

function do_something() {
    // ...
}

obj.do_something = function() {
    // ...
};

function foo({ no_camelcased }) {
    // ...
};

function bar({ isCamelcased: no_camelcased }) {
    // ...
}

function baz({ no_camelcased = 'default value' }) {
    // ...
};

const obj = {
    my_pref: 1
};

const { category_id = 1 } = query;

const { foo: snake_cased } = bar;

const { foo: bar_baz = 1 } = quz;