# gct.js

This very simple utility allows you to add files and commit trailers to give credit to your peers. This is useful for pair programming, and this was my motivation for creating this utility.

It was created on node v15.5.1 (only tested on Linux, may be portable but I'm not familiar with node in that regard)
I haven't created a package.json file, as I'll still need to learn how that works.

Assuming node is installed on your system, only installing commander.js should be necessary:

```bash
npm install commander
```

In config.js, change the name/email to that of the user you wish to give credit to for the commit in question.
Then, run the utility with -m to specify the commit message you would like to use, i.e.:

```bash
./gct.js -m "Initial commit"
```