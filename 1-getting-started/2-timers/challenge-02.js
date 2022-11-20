let i = 0;

const helloWorld = () => {
    i++;
    console.log('Hello World');

    if (i === 5) {
        clearInterval(intervalId);
        console.log('Done');
    }
}

const intervalId = setInterval(helloWorld, 1000);
