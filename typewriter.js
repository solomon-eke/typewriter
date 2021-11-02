const sentence = "hello there from lighthouse labs\n";
let delay = 300;
sentence.split("").forEach((letter) => {
  setTimeout(() => {
    process.stdout.write(letter);
  }, delay);
  delay += 300;
});
