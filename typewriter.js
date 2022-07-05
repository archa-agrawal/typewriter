const sentence = "hello there from lighthouse labs";

const typewriter = (string) => {
  let time = 100;
  const inputString = string + '\n';
  for (const char of inputString) {
    setTimeout(() => {
      process.stdout.write(char);
    }, time);
    time += 100;
  }
};
typewriter(sentence);