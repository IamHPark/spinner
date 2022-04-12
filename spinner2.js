// process.stdout.write("hello from spinner1.js...\rheyyy\n")
let time = 100;
const spinner = ['\r|','\r/','\r-','\r\\'];

while(time < 5000) {
  for(const dir of spinner) {
    setTimeout(() => process.stdout.write(dir), time);
    time +=200;
  }
};

setTimeout(() => {
  console.log('\n');
}, time);
