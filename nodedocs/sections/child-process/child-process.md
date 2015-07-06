# Class ChildProcess
* ``` var childspawn = require('child_process').spawn ```
* ``` var childfork = require('child_process').fork ```
* A tri-directional ``` popen(3) ``` (pipe stream to or from a process) 
* child processes are an (EventEmitter)[]
* the ChildProcess class in not intended to be used directly. use the ``` spawn() ```, ```exec()```, ```execFile()```, or ```fork()``` methods 
**Stability: 3 - Stable**

## streams
* child processes allways have 3 streams **child.stdin**, **child.stdout**,  & **child.stderr**.
 * these can be shared with the stdio streams of the parrent process, or they may be separte stream objects which can be piped to and from.

#### Events
* **EVENT:** ``` message ```
 * ```.send(message, * sendHandle)```
 * **message** Object a parsed JSON object or primitive value
 * **sendHandle** Handle object a Socekt or Server Object
* **EVENT:** ``` error ```
 * **err** error object
 * Emitted when
  * the process could not be spawned
  * the process could not be killed
  * Sending a message to the process failed
* **EVENT:** ``` exit ```
 * **code** number of the exit code, if exited normally
 * **signal** String the signal passed to kill the child process, if was killed by parent
 * Emitted when
  * after the child process ends.
  * note: the child process stdio streams might still be open
* **EVENT:** ``` close ```
 * **code** number of the exit code, if exited normally
 * **signal** String the signal passed to kill the child process, if was killed by parent
 * Emitted when
  * the stdio strems of a child process have all terminated
* **EVENT:** ``` disconnect ```
 * this is emitted after calling the ```.disconnect()``` method in the parent or in the child
 * after disconnecting you can nolonger send messages

#### child stream propertys
* ``` child.stdin ```
 * A **Writable Stream** that represents the child porcess's stdin.
 * If the child is waiting to read all its input, it will not continue until this stram has been closed via end();
* ``` child.stdout ```
 * A **Readable Stream** that represents the child porcess's stdout
* ``` child.stderr ```
 * A **Readable Stream** that represents the child process's stderr
* ``` child.stdio ```
 * an array containting [0] child.stdin [1] child.stdout [2] child.stderr
* ``` child.pid ```
 * 
