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

#### child stream properties
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
 * Integer - The **PID** of the child process 
* ``` child.connected ```
 * Boolean - set fallse after ``` .disconnect() ``` is called 

#### child methods
* ``` child.send(message, *sendHandle) ```
 * **message** Object
 * **sendHandle** Handle object
 * allows you to write to the child process
 * note the send method is syncronus and it is not a good idea to send large data over it, use streams instead.
 * the **sendhandle** object is for send a tcp server or a socket object to a nothe process.
* ``` child.disconnect() ```
 * close the IPC channel between the parent and child, allowing the child to exit gracefully
* ``` child.kill(*signal) ```
 * **signal** string
 * examples ```from man 7 signal```
```
       SIGHUP        1       Term    Hangup detected on controlling terminal
                                     or death of controlling process
       SIGINT        2       Term    Interrupt from keyboard
       SIGQUIT       3       Core    Quit from keyboard
       SIGILL        4       Core    Illegal Instruction
       SIGABRT       6       Core    Abort signal from abort(3)
       SIGFPE        8       Core    Floating point exception
       SIGKILL       9       Term    Kill signal
       SIGSEGV      11       Core    Invalid memory reference
       SIGPIPE      13       Term    Broken pipe: write to pipe with no
                                     readers
       SIGALRM      14       Term    Timer signal from alarm(2)
       SIGTERM      15       Term    Termination signal
       SIGUSR1   30,10,16    Term    User-defined signal 1
       SIGUSR2   31,12,17    Term    User-defined signal 2
       SIGCHLD   20,17,18    Ign     Child stopped or terminated
       SIGCONT   19,18,25    Cont    Continue if stopped
       SIGSTOP   17,19,23    Stop    Stop process
       SIGTSTP   18,20,24    Stop    Stop typed at terminal
       SIGTTIN   21,21,26    Stop    Terminal input for background process
       SIGTTOU   22,22,27    Stop    Terminal output for background process
 * Defalit signal is SIGTERM
```

## asynch process creation
* ``` child_process.spawn(command, *args, *options) ``` launches a new process with a given command
 * **comand** - String, the command to run
 * **ars**, - Array list of the string arguments
 * **options** - Object
  * **Default = ``` {cwd: undefined, env: process.env} ```**
  * **cwd** - string, current working dir o the child process
  * **env**  - object, env key-value pairs
  * **stdio**  - array|string, child's stdio config set [ 'stdin', 'stdout', 'stderr']
   * **pipe** - create a pipe between child process and parent process
   * **ipc** - create an IPC channel for passing message/file descriptors between parent and child.
   * **ignore** - do not set this file descriptor in the child.
   * **Stream Object** 0 shate a readable or writeable stream that refers to a tty, file, socket, or a pipe with the child process.
   * **Positive integer*** - the intever value is interperted as a file descriptor that is currently open in the parent process.
   * **null/undefined** - use defalt value aka. pipe
  * **detatched** - boolean, the child will be a pross group leader
   * if the detached option is set, the child process will be made the leader of a new process group. this makes it possible for the child process to continue running after the parent exits.
   * by default the parent will wait to a detached child to exit, use ```child.unref()``` and the parent's event loop will not include the child in its reference count.
  * **uid** - number, sets the uid of the process
  * **gid** - number, sets the gid of the process
  * customFds - **Deprecated**
 * Return: ChildProcess object

* ``` child_process.exec( command, *options, callback) ```
 * **command** - String, the command run, with space-seporated argumes
 * **options** - Object, 
  * **cwd** - String, crrent working dir of the child process
  * **env** - Object, environment keyvalue pars
  * **encoding** - String, default: utf8
  * **shell** - String Shell to execute the command , default: '/bin/sh'
  * **timeout** - Number, if not zero then it will kill child_process if it runs loger then timeout miliseconds, default: 0
  * **maxBuffer** - Number, max data allowed to stdout, stderr if exceded child_prcess is killed, default: (200*1024)
  * **killSignal** - String, default: 'SIGTERM'
  * **udi** - Number
  * **gid** - Number
 * callback
  * error - Error
  * stdout - Buffer
  * stderr - Buffer
 * Return: ChildProcess object

* ``` child_process.execFile(command, *args, *options, *callback) ```
 * **file** - String,  the filename of the program to run
 * **args** - Array, of string arguments
 * **options** - Object,
  * **cwd** - String, current working dir of the child process
  * **env** - Object, environment variables 
  * **encoding** - String, default: 'utf8'
  * **timeout** - Number, if not zero then it will kill child_process if it runs longer than timeout miliseconds, default:0
  * **maxBuffer** - Number, if stdout or stderr exceeds maxBuff it will kill child_process, default: (200*1024)
  * **killSignal** - String, default: 'SIGTERM'
  * **uid** - Number
  * **gid** - Number
 *callback
  * error - Error
  * stdio - Buffer
  * stderr - Buffer
 * Return: ChildProcess object
* fork 
## sync process creation
