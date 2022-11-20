let intervalId;
let i = 5;

const helloWorld = (timer) => {
    if (i === 5) {
        clearInterval(intervalId);
        intervalId = setInterval(() => {
          console.log('Hello World. ' + timer);
          helloWorld(timer + 100);
        }, timer);
        i = 0;
      }
    
      i++;
};

helloWorld(100);
