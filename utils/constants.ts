import { Project } from "@/types";

export const LIST_OF_CONCEPTS_TAUGHT: Record<string, string | RegExp> = {
  "arrays and bracket notation": /\[[^\[\]]*\](?!\s*\[)/g,
  "statements that end with semicolons": /;(?=(?:[^"]*"[^"]*")*[^"]*$)/g,
  "arr.concat()": /\b\w+\s*\.\s*concat\s*\([^)]*\)/g,
  "arr.every()": /\b\w+\s*\.\s*every\s*\([^)]*\)/g,
  "arr.fill()": /\b\w+\s*\.\s*fill\s*\([^)]*\)/g,
  "arr.filter()": /\b\w+\s*\.\s*filter\s*\([^)]*\)/g,
  "arr.find()": /\b\w+\s*\.\s*find\s*\([^)]*\)/g,
  "arr.forEach()": /\b\w+\s*\.\s*forEach\s*\([^)]*\)/g,
  "arr.includes()": /\b\w+\s*\.\s*includes\s*\([^)]*\)/g,
  "arr.indexOf()": /\b\w+\s*\.\s*indexOf\s*\([^)]*\)/g,
  "arr.join()": /\b\w+\s*\.\s*join\s*\([^)]*\)/g,
  "length property": "length",
  "arr.map()": /\b\w+\s*\.\s*map\s*\([^)]*\)/g,
  "arr.pop()": /\b\w+\s*\.\s*pop\s*\([^)]*\)/g,
  "arr.push()": /\b\w+\s*\.\s*push\s*\([^)]*\)/g,
  "arr.reduce()": /\b\w+\s*\.\s*reduce\s*\([^)]*\)/g,
  "arr.reverse()": /\b\w+\s*\.\s*reverse\s*\([^)]*\)/g,
  "arr.shift()": /\b\w+\s*\.\s*shift\s*\([^)]*\)/g,
  "arr.slice()": /\b\w+\s*\.\s*slice\s*\([^)]*\)/g,
  "arr.some()": /\b\w+\s*\.\s*some\s*\([^)]*\)/g,
  "arr.sort()": /\b\w+\s*\.\s*sort\s*\([^)]*\)/g,
  "arr.splice()": /\b\w+\s*\.\s*splice\s*\([^)]*\)/g,
  "Array.from()": /\b\w+\s*\.\s*from\s*\([^)]*\)/g,
  "new Array()": "new Array()",
  "audio.pause()": "audio.pause()",
  "audio.play()": "audio.play()",
  "new Audio()": "new Audio()",
  "class ClassName / new ClassName()": "class ClassName / new ClassName()",
  "constructor()": "constructor()",
  "Multi-line comments": "Multi-line comments",
  "Single-line comments": "//",
  "console.log()": /console\.log\(.*\)/g,
  "new Date()": "new Date()",
  "date.getDate()": "date.getDate()",
  "date.getMonth()": "date.getMonth()",
  "date.getFullYear()": "date.getFullYear()",
  "date.getHours()": "date.getHours()",
  "date.getMinutes()": "date.getMinutes()",
  "date.getUTCHours()": "date.getUTCHours()",
  "date.getUTCMinutes()": "date.getUTCMinutes()",
  "Intl.DateTimeFormat": "Intl.DateTimeFormat",
  "document.createElement()": "document.createElement()",
  "document.getElementById()": "document.getElementById()",
  "document.getElementsByClassName()": "document.getElementsByClassName()",
  "document.querySelector()": /.*\s*document\.querySelector\(.+?\);?/g,
  "document.querySelectorAll()": /.*\s*document\.querySelectorAll\(.+?\);/g,
  "el.add()": "el.add()",
  "el.ariaLabel": "el.ariaLabel",
  "el.appendChild()": "el.appendChild()",
  "el.children": "el.children",
  "el.classList": "el.classList",
  "el.className": "el.className",
  "el.createTextNode()": "el.createTextNode()",
  "el.disabled": "el.disabled",
  "el.display": "display",
  "el.id": "el.id",
  "el.innerHTML": "el.innerHTML",
  "el.innerText": "innerText",
  "el.onchange": "el.onchange",
  "el.remove()": "el.remove()",
  "el.removeAttribute()": "el.removeAttribute()",
  "el.setAttribute()": "el.setAttribute()",
  "el.style": "style",
  "el.textContent": "el.textContent",
  "el.type": "el.type",
  "el.value": "el.value",
  change: "change",
  onclick: "onclick",
  DOMContentLoaded: "DOMContentLoaded",
  "el.addEventListener()": "el.addEventListener()",
  "event.key": "event.key",
  "event.onclick": "event.onclick",
  "event.preventDefault()": "event.preventDefault()",
  "event.target (value, id, etc.)": "event.target (value, id, etc.)",
  keydown: "keydown",
  "onsubmit (in HTML)": "onsubmit (in HTML)",
  submit: "submit",
  "addition assignment: +=": /\+=/g,
  "Addition: +": "Addition: +",
  "Assignment: =": "=",
  "Decrement: --": /\-\-/g,
  "Destructuring assignment": "Destructuring assignment",
  "Division: /": "Division: /",
  "optional chaining (?.) operator": "optional chaining (?.) operator",
  "Exponentiation: **": "Exponentiation: **",
  "Greater than or equal: >=": ">=",
  "Greater than: >": ">",
  "Increment: ++": /\+\+/g,
  "Inequality: !=": "!=",
  "Less than or equal: <=": "<=",
  "Less than: <": "<",
  "Logical AND: &&": "&&",
  "Logical NOT: !": "!",
  "Logical OR: ||": /\|\|/g,
  "Multiplication: *": /\*/g,
  null: "null",
  "Remainder / modulo: %": "Remainder / modulo: %",
  "Spread syntax: ...": "Spread syntax: ...",
  "Strict equality: ===": " ===",
  "Strict inequality: !==": "!==",
  "Subtraction assignment -=": "-=",
  "Subtraction: -": "-",
  "Ternary expression": /\b\w+\s*\?.*?:.*/g,
  this: "this",
  "fetch()": "fetch()",
  "Function parameters or arguments": /\b\w+\(([^)]*)\)/g,
  "Arrow function": "Arrow function",
  "Function calls": /\b\w+\([^)]*\)/g,
  "async / await": "async / await",
  "Declaring a regular function": "function",
  "Default parameters": "Default parameters",
  "return statement": "return",
  "<script> with the `src` attribute": "<script> with the `src` attribute",
  "res.json()": "res.json()",
  "For loop": /\bfor\s*\([^;]+;[^;]+;[^)]+\)\s*{/g,
  "for...of loop": "for...of loop",
  "while loop": "while",
  "Math.ceil()": "Math.ceil()",
  "Math.floor()": /Math\.floor\(.+?\)/g,
  "Math.max()": "Math.max()",
  "Math.min()": "Math.min()",
  "Math.random()": "Math.random()",
  "Math.sqrt()": "Math.sqrt()",
  "num.toFixed()": "num.toFixed()",
  "num.toString()": "num.toString()",
  "Number()": "Number()",
  "Basic object usage": /\s*{[\s\S]*?}\s*/g,
  "Multi-word properties": "Multi-word properties",
  "obj.hasOwnProperty()": "obj.hasOwnProperty()",
  "Object.entries()": "Object.entries()",
  "Object.freeze()": "Object.freeze()",
  "Object.keys()": "Object.keys()",
  "Object.values()": "Object.values()",
  "Bracket notation": "Bracket notation",
  "Dot notation": /\b\w+\.\w+\b/g,
  "JSON.parse()": "JSON.parse()",
  "local storage": "local storage",
  "arr.findIndex()": "arr.findIndex()",
  "Date.now()": "Date.now()",
  "arr.unshift()": "arr.unshift()",
  "JSON.stringify()": "JSON.stringify()",
  "el.parentElement": "el.parentElement",
  "showModal()": "showModal()",
  "close()": "close()",
  "localStorage.getItem()": "localStorage.getItem()",
  "localStorage.setItem()": "localStorage.setItem()",
  "Beginning of input assertion: ^": "Beginning of input assertion: ^",
  "Case insensitivity flag: i": "Case insensitivity flag: i",
  "Character class / set: [...]": "Character class / set: [...]",
  "Disjunction: | (matches left or right item)":
    "Disjunction: | (matches left or right item)",
  "End of input assertion: $": "End of input assertion: $",
  "Escaped characters: *, \\, etc.": "Escaped characters: *, \\, etc.",
  "Global flag: g": "Global flag: g",
  "Group / capture group: (...)": "Group / capture group: (...)",
  "Match any character except line breaks: . (dot)":
    "Match any character except line breaks: . (dot)",
  "Match any digit: d": "Match any digit: d",
  "Match characters in a range: a-z, 0-9, etc.":
    "Match characters in a range: a-z, 0-9, etc.",
  "Match whitespace character: s": "Match whitespace character: s",
  "Negative lookahead: ?!": "Negative lookahead: ?!",
  "new RegExp()": "new RegExp()",
  "Non-capturing group: (?:x)": "Non-capturing group: (?:x)",
  "Quantifier: ? (matches the preceding token 0 or 1 times)":
    "Quantifier: ? (matches the preceding token 0 or 1 times)",
  "Quantifier: {n} (matches at least n occurrences of the preceding item)":
    "Quantifier: {n} (matches at least n occurrences of the preceding item)",
  "Quantifier: * (matches the preceding item 0 or more times)":
    "Quantifier: * (matches the preceding item 0 or more times)",
  "Quantifier: + (matches the preceding item 1 or more times)":
    "Quantifier: + (matches the preceding item 1 or more times)",
  "regex.test()": "regex.test()",
  "new Set()": "new Set()",
  "Set().size": "Set().size",
  "isNan()": "isNan()",
  "parseFloat()": "parseFloat()",
  "parseInt()": "parseInt()",
  break: /\bbreak\b/,
  "if statement": /\bif\s*\([^)]*\)\s*{/g,
  "else if": "else if",
  "else clause": "else",
  switch: "switch",
  "Basic string usage (single or double quotes, backticks)": /(['"``])(.*?)\1/g,
  Concatenation: "Concatenation",
  newline: /\\n/g,
  "new String()": "new String()",
  "str.charCodeAt()": "str.charCodeAt()",
  "str.match()": "str.match()",
  "str.replace()": "str.replace()",
  "str.slice()": "str.slice()",
  "str.split()": "str.split()",
  "str.startsWith()": "str.startsWith()",
  "str.toLowerCase()": "str.toLowerCase()",
  "str.toUpperCase()": "str.toUpperCase()",
  "String.fromCharCode": "String.fromCharCode",
  currying: "currying",
  "window.onload": "window.onload",
  "Template literal": "Template literal",
  camelCase: "camelCase",
  "Code lines end with a semi-colon": "Code lines end with a semi-colon",
  "Screaming snake case for constants": "Screaming snake case for constants",
  const: "const",
  "Declaring a variable without initializing it":
    "Declaring a variable without initializing it",
  "Initializing with a value (string, number, etc.)":
    "Initializing with a value (string, number, etc.)",
  let: /let\s+\w+\s*(=\s*\w+\s*)?;/g,
  var: "var",
  boolean: "boolean",
  "location.reload()": "location.reload()",
  "settimeout()": "settimeout()",
  alert: "alert",
  confirm: "confirm",
  insertAdjacentHTML: "insertAdjacentHTML",
  "Math.abs()": "Math.abs()",
  getElementsByTagName: "getElementsByTagName",
  "console.error": "console.error",
  undefined: "undefined",
};

export const LIST_OF_PROJECTS: Project[] = [
  {
    title: "Learn Basic JavaScript by Building a Role Playing Game",
    id: "practice-project-1",
    tags: [
      "strings",
      "arrays",
      "objects",
      "functions",
      "loops",
      "conditionals",
    ],
    filePath: "./data/rpg-game.js",
    route: "rpg-game",
  },
  {
    title: "Learn Form Validation by Building a Calorie Counter",
    id: "practice-project-2",
    tags: ["regex", "event listeners", "DOM manipulation", "form validation"],
    filePath: "./data/calorie-counter.js",
    route: "calorie-counter",
  },
  {
    title:
      "Learn Basic String and Array Methods by Building a Music Playlist App",
    id: "practice-project-3",
    tags: [
      "arrow functions",
      "spread syntax",
      "array methods",
      "DOM manipulation",
    ],
    route: "music-playlist",
    filePath: "./data/music-playlist.js",
  },
  {
    title: "Learn the Date Object By Building a Date Formatter",
    id: "practice-project-4",
    tags: ["date object", "switch statement"],
    route: "date-formatter",
    filePath: "./data/date-formatter.js",
  },

  {
    title: "Learn Modern JavaScript Methods by Building Football Team Cards",
    id: "practice-project-5",
    tags: ["Object.freeze()", "map()", "default parameters"],
    route: "football-team-cards",
    filePath: "./data/football-team-cards.js",
  },
  {
    title: "Learn localStorage by building a TODO List App",
    id: "practice-project-6",
    tags: ["localStorage", "DOM manipulation"],
    route: "todo-list",
    filePath: "./data/todo-list.js",
  },
  {
    title: "Learn Recursion by Building a Decimal to Binary Converter",
    id: "practice-project-7",
    tags: ["recursion"],
    route: "decimal-to-binary",
    filePath: "./data/decimal-to-binary.js",
  },
  {
    title: "Learn Basic Algorithmic Thinking by Building a Number Sorter",
    id: "practice-project-8",
    tags: ["sorting algorithms"],
    route: "number-sorter",
    filePath: "./data/number-sorter.js",
  },
  {
    title: "Learn Advanced Array Methods by Building a Statistics Calculator",
    id: "practice-project-9",
    tags: ["map()", "reduce()", "filter()"],
    route: "statistics-calculator",
    filePath: "./data/statistics-calculator.js",
  },
  {
    title: "Learn Functional Programming by Building a Spreadsheet",
    id: "practice-project-10",
    tags: ["functional programming"],
    route: "spreadsheet",
    filePath: "./data/spreadsheet.js",
  },
  {
    title: "Learn Regular Expressions by Building a Spam Filter",
    id: "practice-project-11",
    tags: ["regex"],
    route: "spam-filter",
    filePath: "./data/spam-filter.js",
  },

  {
    title: "Learn Basic OOP Concepts by Building a Shopping Cart",
    id: "practice-project-12",
    tags: ["classes", "constructor", "this", "new keyword"],
    route: "shopping-cart",
    filePath: "./data/shopping-cart.js",
  },
  {
    title: "Learn Intermediate OOP by Building a Platformer Game",
    id: "practice-project-13",
    tags: ["classes", "constructor", "this", "new keyword"],
    route: "platformer-game",
    filePath: "./data/platformer-game.js",
  },
  {
    title: "Learn Intermediate Algorithmic Thinking by Building a Dice Game",
    id: "practice-project-14",
    tags: ["algorithms"],
    route: "dice-game",
    filePath: "./data/dice-game.js",
  },

  {
    title: "Learn Fetch and Promises by Building an fCC Authors Page",
    id: "practice-project-15",
    tags: ["fetch", "promises"],
    route: "authors-page",
    filePath: "./data/authors-page.js",
  },
  {
    title:
      "Learn Asynchronous Programming by Building an fCC Forum Leaderboard",
    id: "practice-project-16",
    tags: ["async", "await"],
    route: "forum-leaderboard",
    filePath: "./data/forum-leaderboard.js",
  },
];
