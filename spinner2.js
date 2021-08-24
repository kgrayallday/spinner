const spinArr = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', ' \n'];
let counter = 100;

for (const element of spinArr) {
  let delay = counter;
  setTimeout(() => {
    process.stdout.write(element);
  }, delay)
  counter += 200;
}

