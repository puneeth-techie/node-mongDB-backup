# Monog DB data base nightly back up using [node-cron](https://www.npmjs.com/package/node-cron) with the help of (spawn())[https://nodejs.org/api/child_process.html] child process.

## How to use **child-process** in Nodejs.

Each of the methods i.e. `exec execFile spawn & fork` is explained in this repo - with their respective file names.

- (**exec**)[https://nodejs.org/api/child_process.html] - The exec() function creates a new shell and executes a given command. The output from the execution is buffered, which means kept in memory, and is available for use in a callback.

- (**execFile**)[https://nodejs.org/api/child_process.html] - execFile() : similar to child_process. exec() except that it spawns the command directly without first spawning a shell by default. child_process. fork() : spawns a new Node.

- (**spawn**)[https://nodejs.org/api/child_process.html] - spawn() used specifically to spawn new Node.js processes. Like child_process.​spawn() , a ChildProcess object is returned.

- (**fork**)[https://nodejs.org/api/child_process.html] - fork() method: The child_process. fork() is a special case of child_process. spawn() where the parent and the child process can communicate with each other via send(). The fork() allows separation of computation-intensive tasks from the main event loop.

## [node-cron](https://github.com/node-cron/node-cron)

The (node-cron)[https://github.com/node-cron/node-cron] module is tiny task scheduler in pure JavaScript for node.js based on GNU crontab. This module allows you to schedule task in node.js using full crontab syntax.

### Check different cron expressions here.

[**crontab guru**](https://crontab.guru/) - The quick and simple editor for cron schedule expressions by Cronitor.

### ES Modules in Node

We us ECMAScript Modules in the backend in this project. Be sure to have at least Node v14.6+ or you will need to add the "--experimental-modules" flag.

Also, when importing a file (not a package), be sure to add .js at the end or you will get a "module not found" error.

You can also install and setup Babel if you would like.

### Execution steps

```
### Install Dependencies
```

npm install

```

### Run
```

Create a **backup** folder inside root directory.

# Run

npm run start

```

## License

MIT License

Copyright (c) 2021 Puneeth P Gowda

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
