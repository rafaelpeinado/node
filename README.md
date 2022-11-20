# Node.js 12: Getting Started
## Introduction
### Course Introduction
* [Windows Subsystem for Linux](https://learn.microsoft.com/en-us/windows/wsl/install)

### What Is Node?
A execução do JavaScript no servidor é feito pela VM V8 ou Chakra.
Node é quem instrui uma VM a executar o JavaScript. Ou seja, o Node é como um wrapper em torno de uma VM.
Além de permitir executar JavaScript em um servidor, o Node vem com alguns módulos úteis integrados que fornecem recursos avançados por meio de APIs assíncronas fáceis de usar.

### Why Node?
#### Pros
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

#### Cons
* Forma diferente de pensar e raciocinar sobre o código
* Com tantas opções que existem no NPM, para cada coisa que precisamos fazer, temos muitas opções para escolher e isso pode ser trabalhoso, pois é necessário ficar buscando e escolher as melhores opções.
* Por existir pequenos pacotes, significa que precisamos usar mais e mais pacotes.

#### Why Node is named Node
O código menor é o motivo do Node ser chamado de Node. Em Node, criamos blocos de construção simples, pequenos e de processo único, nós, que podem ser organizados com bons protocolos de rede para que eles se comuniquem entre si e escalem para construir grandes programas distribuídos.

### Some Analogies About Node
[Hard Coding Concepts Explained with Simple Real-life Analogies](https://www.freecodecamp.org/news/hard-coding-concepts-explained-with-simple-real-life-analogies-280635e98e37/)
NPM é um lugar onde podemos baixar código escrito por outras pessoas, ou seja, onde possui itens e ferramentas prontos.

#### What exactly is a CALLBACK?
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


### What You Get When You Install Node
Pelo Mac pode usar o instalador Homebrew

#### NPM e NPX


#### NVM - Node Version Manager (Linux e Mac)
Permite executar várias versões do node e alterne entre eles usando um comando simples.


## Getting Started with Node
### Node's REPL Mode
Ao digitar o comando node sem nenhum script para executar no terminal, o Node iniciará uma sessão REPL, que significa Read, Eval, Print, Loop. E é uma maneira muito conveniente de testar rapidamente comandos JavaSCript e Node simples.

Ctrl + L: limpa a sessão da tela
.editor: abre um editor
Ctrl + D: no editor para o REPL avaliar o código
.help: para ver outros comandos
.break: descartar completamente o código
.exit ou Ctrl + D: sai do REPL
.load e .save: podem ser usados para gerar ou usar scripts Node externos dentro do REPL


### TAB e Underscore
_ é semelhante ao $ recurso no bash. Ele armazena o valor da última expressão avaliada. Por exemplo, se executarmos uma chamada Math.random() e, depois disso, deseja colocar esse mesmo valor aleatório em uma constante. Podemos fazer isso com o **_**, porque ele armazena automaticamente o último valor.


### Executing Scripts
O script de servidor web simples é executado e sua task fica ativa. Ele escuta todas as conexões HTTP. No entanto, esse processo Node só usará o V8 quando houver conexões HTTP. Caso contrário, o V8 permanecerá ocioso. 
**require** function: usado para gerenciar as dependências do programa. Podemos usar require para depender de qualquer biblioteca, seja esta biblioteca interna como o HTTP, ou se for uma biblioteca instalada de terceiros.

**http.createServer:** esta é uma função simples que o Node invocará toda vez que houver uma solicitação para o servidor web criado. Esse argumento é como um listener. Este servidor escutará as solicitações e invocará a função de listen para cada request. O outro argumento é o response. Podemos usar esse objeto para escrever coisas de volta para o solicitante.

**res.end:** end pode ser usado como um atalho para gravar dados e, em seguida, encerrar a conexão.

**server.listen:** como o createServer apenas cria o servidor, precisamos usar o listen para ativar o servidor web. Essa função aceita muitos argumentos, como a porta que será usada por este servidor. O último argumento é uma função callback assim que o servidor estiver sendo executado com sucesso nessa porta.

No script de exemplo Hello World está sendo usado o sistema de gerenciamento de módulo CommomJS. Cada script que usa a palavra-chave **require** é classificado por Node como um módulo CommonJS. Node também suporta o gerenciamento de módulo ECMAScript, e podemos usá-lo de duas maneiras, nomeando o arquivo com a extensão .mjs ou configurando todo o projeto para usar módulos ECMAScript.


### Working with Timers
#### Timers
Algumas das funções globais populares em um ambiente de navegador são as funções de timer como **setTimeout** e **setInterval**. Essas funções podem ser usadas para atrasar ou repetir a execução de outras funções, que recebem como argumentos.

##### SetTimeout
Atrasa a chamada da função que foi passada como argumento. O tempo é definido em ms. Para cancelar um setTimeout, devemos usar o clearTimeout().
Se quisermos fazer uma setTimeout de 0ms, podemos usar a função setImmediate(). Para cancelar, usamos clearImmediate().

##### SetInterval
Repete a função que foi passada como argumento no intervalo em ms especificado como argumento. Para cancelar um setInterval, devemos usar o clearInterval().


### Node's Command Line Interface
node -p: executa uma string e imprime seu resultado. Por exemplo, podemos verificar quantas CPUs a máquina tem usando "os.cpus().length".
ou "process.versions.v8" para ver a versão do V8.

node --v8-options | less: relata todas as opções do V8 que ele suporta.
node --v8-options | grep "in progress": para ver todos os sinalizadores de in progress para esta versão do Node.


### The "process" Object
Podemos usar o comando Node com variáveis de ambiente personalizadas
**Comando:** VAL1=10 VAL2=20 node 1-custom-env-variables.js 

export VAL1=100
export VAL2=200

**process.argv: [ ... ]**: esta matriz terá um item para cada argumento posicional que especificamos ao executar o script Node, em ordem. Por exemplo, se executarmos o comando node -p "process.argv" hello 42 o output será:
[ 'C:\\Program Files\\nodejs\\node.exe', 'hello', '42' ]

Outros recursos importantes do process são as mensagens:
**stdout:** para saída
**stderr:** para erro
**strin:** para entrada
eles se parecem com o console.log("hello'); e escreve-se process.stdout.write('hello\n');







