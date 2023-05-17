console.log('Welcome to Holberton School, what is your name?');

process.stdin.setEncoding('utf8');
process.stdin.on('readable', () => {
  const input = process.stdin.read();
  if (input !== null) {
    const name = input.trim();
    console.log(`Your name is: ${name}`);
    process.exit();
  }
});

process.on('exit', () => {
  console.log('This important software is now closing');
});
