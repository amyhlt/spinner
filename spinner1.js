setTimeout(() => {
    process.stdout.write('\r|   ');
  }, 300);
  
  setTimeout(() => {
    process.stdout.write('\r/   ');
  }, 600);
  
  setTimeout(() => {
    process.stdout.write('\r-   ');
  }, 800);
  
  setTimeout(() => {
    // Need to escape the backslash since it's a special character.
    process.stdout.write('\r\\   '); 
  }, 1000);
  setTimeout(() => {
    // Need to escape the backslash since it's a special character.
    process.stdout.write('\r-   '  ); 
  }, 1300);
  setTimeout(() => {
    // Need to escape the backslash since it's a special character.
    process.stdout.write('\r/  '  ); 
  },1600)
  setTimeout(() => {
    // Need to escape the backslash since it's a special character.
    process.stdout.write('\r|  '  ); 
  }, 1900)
  // ... fill in the rest yourself ...