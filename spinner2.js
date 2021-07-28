const arr = ['\r|   ','\r/   ','\r-   ','\r\\   ','\r-   ' ,'\r/  ','\r|'];

for (let i = 0;i < 7; i++) {
   setTimeout(() => {
    process.stdout.write(arr[i]);
  }, 300 * i);  
}
setTimeout(() => {
    console.log('\n');
  }, 300 * arr.length);  
