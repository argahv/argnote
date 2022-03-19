
# argnote

This is an interactive coding environment. You can write Javascript, see it executed, and write comprehensive documentation using markdown.


## Getting Started

To run this project run you can use npx

```bash
  npx argnote serve
```
or install globally

```bash
  npm install --g argnote
```
and then run locally with

```bash
  argnote serve
```

by which a default notebook file of **notebook.js** will be created 
and the default running **port** will be **4005**.

You can change the file/directory and running port with

```bash
  argnote serve notebooks/test.js -p 5000
```

by which the file test.js will be created into the directory notebooks.
You will see your codes there.

To run the same file in the local server simply use the directory/filename 
you used.
## Tech Stack

**Client:** React and Redux with TypeScript

**Server:** Node, Express

The whole project has been created with React 17 and written in TypeScript.

You can write codes in JavaScript  and import any packages from npm.

VS Code users will feel at-home as the same code editor can be 
used to write the codes. The written codes will be compiled in real time 
as you code with a very high performance.

**ESBuild WASM (web assembly)** is used to bundle and transpile 
the codes directly into the browser. This is a task normally
done by running Webpack and Babel at the terminal.
The users' code  is complied safely in the browser just like how famous
 services like CodeSandBox and CodePen do.The project is deployed 
 using a multi-package architecture (Lerna) into NPM.

**Commander** is used to create the CLI commands for serving the
project.





## Badges



[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)


## Contributing

Contributions are always welcome!


