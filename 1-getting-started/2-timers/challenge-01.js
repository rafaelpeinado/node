const message = (timer) => {
    console.log(`Hello after ${timer} seconds`);
};

setTimeout(message, 4000, '4');
setTimeout(message, 8000, '8');

