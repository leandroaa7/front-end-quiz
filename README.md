# front-end-quiz



## Observações

- Para adicionar um arquivo js no front end adicione o nome dele na propriedade "entry" em webpack.config.js 
- Um container é um bloco html capaz de realizar um CRUD, para criar um container basta adicionar o partials(handlebars) "container" e abaixo dele uma div com id "input-inject" com os inputs que devem ser adicionados no container. Por fim crie uma função chamada "getEvents" retornando os eventos que desejados, os eventos são usados pela classe AddEvent 