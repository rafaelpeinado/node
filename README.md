# Node.js 12: Getting Started
## Introduction
### Course Introduction
* [Windows Subsystem for Linux](https://learn.microsoft.com/en-us/windows/wsl/install)

## What Is Node?
A execução do JavaScript no servidor é feito pela VM V8 ou Chakra.
Node é quem instrui uma VM a executar o JavaScript. Ou seja, o Node é como um wrapper em torno de uma VM.
Além de permitir executar JavaScript em um servidor, o Node vem com alguns módulos úteis integrados que fornecem recursos avançados por meio de APIs assíncronas fáceis de usar.

## Why Node?
### Pros
* Wrapper em volta do V8 (quem executa JavaScript)
* O Node vem com alguns módulos integrados ricos em recursos. Isso o torna uma ótima plataforma para ferramentas, não apenas uma plataforma para hospedar servidores de back-end (fs, http, crypto, zip, ...).
* Mas aí está o grande problema sobre os módulos que são empacotados com o Node. Todos eles oferecem APIs assíncronas que podemos usar e não nos preocuparmos com threads. Ou seja, fazemos coisas em paralelo, sem precisar lidar com threads.
* Se os pacotes integrados não forem suficientes, é possível criar pacotes de alto desempenho usando C++ ou JavaScript.
* Também possui um depurador poderoso, além de outros utilitários genéricos que aprimoram a linguagem JavaScript e fornecem APIs extras para trabalhar com os tipos de dados, por exemplo.
* **NPM**
* **Module dependency manager** (CommonJS modules e ECMAScript modules). Apesar desses módulos fazerem parte da linguagem oficialmente, ainda são um trabalho em andamento. 
NPM e CommonJS modules são tão poderosos que se, por exemplo, tivermos um monitor de geladeira sofisticado que roda em JavaScript, podemos usar Node para as ferramentas de empacotar, gerar dependências e agrupar (bundle) o código e enviá-lo para a geladeira.

O Node possui APIs fáceis de usar para muitas operações assíncronas, como leitura ou gravação de arquivos, consumo de dados pela rede e até compactação e criptografia de dados. Todas essas operações são feitas de forma assíncrona sem bloquear o thread de execução principal. Isso funciona muito bem com o V8, porque ele mesmo é single threaded, e isso é verdade tanto para o Node quanto para os navegadores.

Mais detalhes na página de Samer Buna - [Why React Developers LOVE Node](https://jscomplete.com/learn/why-node-for-react)

### Cons
* Forma diferente de pensar e raciocinar sobre o código
* Com tantas opções que existem no NPM, para cada coisa que precisamos fazer, temos muitas opções para escolher e isso pode ser trabalhoso, pois é necessário ficar buscando e escolher as melhores opções.
* Por existir pequenos pacotes, significa que precisamos usar mais e mais pacotes.

### Why Node is named Node
O código menor é o motivo do Node ser chamado de Node. Em Node, criamos blocos de construção simples, pequenos e de processo único, nós, que podem ser organizados com bons protocolos de rede para que eles se comuniquem entre si e escalem para construir grandes programas distribuídos.

## Some Analogies About Node
[Hard Coding Concepts Explained with Simple Real-life Analogies](https://www.freecodecamp.org/news/hard-coding-concepts-explained-with-simple-real-life-analogies-280635e98e37/)
NPM é um lugar onde podemos baixar código escrito por outras pessoas, ou seja, onde possui itens e ferramentas prontos.

### What exactly is a CALLBACK?
Um callback é apenas um termo sofisticacdo para uma função. Em Node, chamamos a função de callback se o Node chamar de volta para nós em um momento posterior no tempo do programa.

**A callback is just a function**
Isso é feito por meio de um método assíncrono.

Uma função de callback simples, que geralmente recebe dados como seu argumento, e nós apenas passamos sua referência para algum método assíncrono. E esse método assíncrono obterá o callback invocado quando os dados estiverem prontos.

function cb(data) {
    // do something with data
}

someAsyncMethod(cb);

Analogia para callbacks: [Asynchronous Programming as Seen at Starbucks](https://medium.com/edge-coders/asynchronous-programming-as-seen-at-starbucks-fc242cf16aa)

function Samer(readyLatte) {
    // drink readyLatte...
}

starbucks.makeMeALatte(Samer);

O JavaScript moderno no Node começou a adotar outro padrão para programação assíncrona, que chamamos de **Promises**. E um Promise é um pouco diferente de um callback. 


**I promise you a chick**

const egg = chicken.makeChick(); // It's a promise!

egg
    .then(chick => raiseChick()) // Success outcome
    .catch(badEgg => throw badEgg) // Fail outcome


## What You Get When You Install Node
Pelo Mac pode usar o instalador Homebrew

### NPM e NPX


### NVM - Node Version Manager (Linux e Mac)
Permite executar várias versões do node e alterne entre eles usando um comando simples.



