// process.stdout.write("hello from spinner1.js...\rheyyy\n")
let time = 100;
while(time < 5000) {
setTimeout(() => {
  process.stdout.write('\r|   ');
}, time);
time += 200;

setTimeout(() => {
  process.stdout.write('\r/   ');
}, time);
time += 200;

setTimeout(() => {
  process.stdout.write('\r-   ');
}, time);
time += 200;

setTimeout(() => {
  process.stdout.write('\r\\   ');
}, time);
time += 200;
};

setTimeout(() => {
  console.log('\n');
}, time);