# TypeScript Types and Generics

Welcome to the TypeScript Types and Generics Practice Repository! This repository is dedicated to
practicing and mastering the fundamental concepts of TypeScript base types and generics.

## Base Types

The purpose of this homework assignment is to reinforce your skills in working with basic TypeScript
types. You will be dealing with types such as number, string, boolean, null, undefined, unknown,
any, as well as tuples, enums, and type unions.

By the end of the assignment, you will also practice creating your own type based on existing
objects. This will help you better understand how TypeScript can be used to ensure type safety in
your data and improve the quality of your code.

### Task 1

Here is the following JavaScript code:

```ts
let age = 50;
let name = "Max";
let toggle = true;
let empty = null;
let notInitialize;
let callback = a => {
  return 100 + a;
};
```

Convert this code to TypeScript, specifying the appropriate types for all variables.

### Task 2

JavaScript variables can hold values of any type:

```ts
let anything = -20;
anything = "Text";
anything = {};
```

What type would you assign to the 'anything' variable in TypeScript to maintain its flexibility?

### Task 3

In TypeScript, the 'unknown' type allows us to hold any value, but we can't directly assign an
'unknown' variable to another variable unless we're certain about its type. You have the following
code:

```ts
let some: unknown;
some = "Text";
let str: string;
str = some;
```

What needs to be corrected in this code to make it correct and safe?

### Task 4

You have the following JavaScript array:

```ts
let person = ["Max", 21];
```

How would you rewrite it in TypeScript using the concept of tuples to ensure that the first element
is always a string and the second element is a number?

### Task 5

How would you define a variable in TypeScript that can take a string or a number (union type)?  
And similarly, define a variable that can only take one of two string values: 'enable' or 'disable'
(literal type)?

### Task 6

You have the following JavaScript functions:

```ts
function showMessage(message) {
  console.log(message);
}

function calc(num1, num2) {
  return num1 + num2;
}

function customError() {
  throw new Error("Error");
}
```

How would you specify types for the arguments and return values of these functions?

### Task 7

Create a function (isWeekend) that takes a day of the week (from your enum) and returns a boolean
value indicating whether it's a workday or a weekend.

### Task 8

Create a type 'Gender' using a union type that can contain values 'male' or 'female'.  
Create a variable myGender of this type.

### Task 9

You have two objects:

```ts
const page1 = {
  title: "The awesome page",
  likes: 100,
  accounts: ["Max", "Anton", "Nikita"],
  status: "open",
  details: {
    createAt: new Date("2021-01-01"),
    updateAt: new Date("2021-05-01"),
  },
};

const page2 = {
  title: "Python or Js",
  likes: 5,
  accounts: ["Alex"],
  status: "close",
};
```

Create a new data type that fits both of these objects.

## Generic

The goal of this task is to help you understand and apply generics in TypeScript.  
You will work with functions returning promises, utilize the built-in 'Pick' type, merge objects
using generics, and resolve type issues in classes.

### Task 1

There's a function getPromise() that returns a promise allowing an array containing both strings and
numbers.  
Enhance this function using generics to return the correct type.

```ts
function getPromise() {
  return new Promise(resolve => {
    resolve(["Text", 50]);
  });
}

getPromise().then(data => {
  console.log(data);
});
```

### Task 2

You have the type 'AllType'. There's a function called 'compare' that takes two objects. These
objects contain fields of 'AllType'.  
Your task is to use 'Pick' and generics to indicate that the fields of these objects belong to
'AllType'.  
The 'compare' function should return 'AllType'.

```ts
type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

function compare(top, bottom): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}
```

### Task 3

You have a function called 'merge' that combines two objects. Use generics to indicate that these
objects can be of any type

```ts
function merge(objA, objB) {
  return Object.assign(objA, objB);
}
```

### Task 4

Use generics and interfaces to fix the error in the following classes:

```ts
class Component {
  constructor(public props: T) {}
}

class Page extends Component {
  pageInfo() {
    console.log(this.props.title);
  }
}
```

### Task 5

You need to implement the KeyValuePair interface that describes a key-value pair. Use generics to
allow this interface to work with any types of keys and values.

```ts
interface KeyValuePair {
  key;
  value;
}
```

### Task 6

You have a user registration form. Sometimes it's necessary to prefill the form with user data for
updating their profile. However, it's not always necessary to fill in all the fields. For instance,
a user might only want to update their email and password, leaving their name and surname unchanged.

Fix the type in the function argument to avoid type errors.

```ts
type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser(initialValues: User) {
  // User Update
}

createOrUpdateUser({ email: "user@mail.com", password: "password123" });
```

### Task 7

You have a list of UserRoles used to classify users in your application.  
You want to create an object called RoleDescription that will map each user role to its description.

```ts
export enum UserRole {
  admin = "admin",
  editor = "editor",
  guest = "guest",
}

// Replace the following code with a version using Record
const RoleDescription = {
  admin: "Admin User",
  editor: "Editor User",
  guest: "Guest User",
};
```

### Task 8

You have a type Form that contains information about a form, including the 'errors' field.  
You want to create a new type Params that includes all fields from Form except 'errors'.

```ts
type Errors = {
  email?: string[];
  firstName?: string[];
  lastName?: string[];
  phone?: string[];
};

type Form = {
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  phone: string | null;
  errors: Errors;
};

// Implement Params to prevent the inclusion of the 'errors' field from the Form type
type Params = Form;
``;
```
