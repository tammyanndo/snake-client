let connection;

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  const handleUserInput = function (key) {
    if (key === '\u0003') {
      process.exit();
    }
    if (key === '\u0087') {
      conn.write("Move: up")
    }
    if (key === '\u0065') {
      conn.write("Move: left")
    }
    if (key === '\u0083') {
      conn.write("Move: down")
    }
    if (key === '\u0068') {
      conn.write("Move: right")
    }
    if (key === '\u0032') {
      conn.write("Say: Hello")
    }

  };
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
}

module.exports = {
  setupInput
};
