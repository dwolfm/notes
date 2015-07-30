advanced programming in the unix environment
============================================

read/work through notes from the [apue book](http://www.apuebook.com/apue3e.html) third edition

------

# Unix system overview 

## unix architeture
* "In a strict sense, an operting system can be defined as the software  
that controlls the hardware resources of the computer and provides an  
environment under which programs can run."(1) **aka. the kernel**
* in a borad sence an operating system is the kernel and other software  
that makes a computer usefull. system utils, apps, shells, libraries, dotdotdot.

## logging in
* we login with **username** and **password**
 * the system looks up are deeds in the password file 
 * the password file is composed of 7 `:` separated fileds
  * **login name**
  * **encryped password**
  * **numeric user id**
  * **numeric group id**
  * **a comment field**
  * **home directory**
  * **shell program**

## shells
* a shell is a command line interperter that reads user input and  
executes commands.
* the user input to a shell is normally form the terminal  
but sometimes from a file (called a shell script)
* common shells are 
 * **borne shell(sh)**
  * og of shells, basically on every system
 * **borne again shell (BASH)**
  * borne complient shell that hass cool feturees from `csh`  and `ksh`
 * **C shell(CSH)**
  * shell not inspired by the borne shell has sick features like history  
and c like syntax
 * **korn shell(KSH)**
  * successer to the bourne shell
 * **tenex c shell**
  * enhanced version of the `csh`

## files and directories
#### file system
* hierarchical arrangement of directorys and files
* everything starts at **root** whos name is the char `/`
* a direcotyr is a file that contains directory entries.
 * a direcotyr entrie is a filename alogin with a structure of information  
describing the file attributes
* file attribues
 * **type**
  * link, dir, file, stream,...
 * **size**
  * about of bytes it takes up
 * **owner**
  * user and groups associated with the file
 * **permissions**
  * who gets to read write and execute 
 * **last time modified**
  * the last time the conents of the file were writen to

#### filename
* only to characters that cant be in a file name are `/` and `\0`(null char)
* when a dir is made two files are automaticly created `.` and `..` 
 * `.` refers to the curent directory
 * `..` refers to the parent directory

#### pathname
* a pathname is a sequence of filenames separated by slashes
* if it begens with a slash it is called a absolute path and starts at the root dir
* otherwise its a relative path and refer to files relative to the current dir

#### working directory

#### home directory
## Input and Output
#### file descriptors
#### stdin, stdout, stderr
#### unbuffered i/o
#### standard i/o
## programs and processes
#### program
#### processes and process id
#### process control
#### threads and Thread ids
## error handling
## user identification
#### user id
#### group id
#### supplementary group ids
## signals
## time values
## system calls and library functinos

## iso c
## posix
## single unix specification

