// Challenge 1 - Uso recursividade para manter infinito
const helloWorld = (timer) => {
    setTimeout(helloWorld, timer * 1000);
    console.log(`Hello World. ${timer}`);
    helloWorld(timer + 1);
};

helloWorld(1);
