# Updated to TypeScript from Modern JavaScript

🤖 Updated to TypeScript from Modern JavaScript: In-session Refactoring Lab

## Instructions
JavaScript to TypeScript changes in Package.json

Run this command
npm i -D typescript --devdependencies
This command creates DEV dependencies in package.json for typescript

npx tsc --init 
The above command creates tsconfig.json

Update tsconfig.json for module to use ECSA instead of common modules

Include is updated to refer to src folders
Exclude is to include node_moduoles and devdependencies

git-ignore is updated to ignore the build directory

Package.json is updated for build.tsc


Then run the command 

npm run build


Then run this command to include the jest files for typescript

npm i -D jest ts-jest @types/jest

To configure jest.config.ts files

Run this command
npx ts-jest config:init

Now the package.json should have scripts:jest for the test cases to run

You will need to fork and clone this repository to work through the solutions.

✅ Be sure to read the accompanying instructions in the md files

✅ If the exercise has tests, be sure to check the tests still pass after you've refactored the code! (💡 To do this, run `npm test`!)

✅ Once completed, be ready to explain what you did back to the rest of the cohort.

## Contents

We recommend working through the files in the order below:

1. [Functions](modern_javascript_exercises/functions/functions_1.md)

2. [Variables](modern_javascript_exercises/variables/let_vs_var.md)

3. [Default Parameters](modern_javascript_exercises/default_parameters/default_parameters.md) 

4. [Destructuring Arrays](modern_javascript_exercises/destructuring_arrays/destructuring_arrays.md) 

5. [Destructuring Objects](modern_javascript_exercises/destructuring_objects/destructuring_objects.md)

6. [Rest Parameters](modern_javascript_exercises/rest_parameters/rest_parameters.md) 

7. [Spread Syntax](modern_javascript_exercises/spread_syntax/spread_syntax.md) 

8. [Template Literals](modern_javascript_exercises/template_literals/template_literals.md) 

9. [Ternaries](modern_javascript_exercises/ternaries/ternaries.md)

10. [Imperative vs Declarative Programming](modern_javascript_exercises/declarative_vs_imperative/declarative_vs_imperative.md)

## Getting started

👉 _Fork_ and then _clone_ this repo to your local computer

To install dependencies run:

```
npm install
```

To run the tests:

```
npm test
```

To run one specific test:

```
npm test file_name.js
```

## Tips and Tricks

💡 If you've not heard of the modern JavaScript method before, that's great! Google and read about the method before having a go at implementing it. The [MDN docs](https://developer.mozilla.org/en-US/) are a great resource.

💡 Your understanding is the most important thing, so take your time.

💡 Researching, writing notes and solving problems yourself will help you learn the most.

💡 If you get stuck, ask one of the Tech Coaches and we'll jump in and help! 🙌
