const fakeShell = " power shell %";

const externalCommands = function(cmd, subCommands) {
  switch (cmd) {
    case "echo": return subCommands.join(" ");
    case "pwd": return fakeShell + "~" + "Built-in";
  }
}

// console.log(shell());
while(true) {
  const userInput = prompt(fakeShell);
  const [cmd, ...subCommand] = userInput.split(" ");

  const message = externalCommands(cmd, subCommand);
  console.log(message);
}