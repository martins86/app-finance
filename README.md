# Criando App Finanças

App desenvolvido com ReactJS

<br>

## Comandos Usados:

### Instalando dependências globais

```sh
npm install -g create-react-app
```

<br>

### Gerando o app-finance ( Com Typescript o .tsx )

```sh
npx create-react-app app-finance --template typescript
```

<br>

### Libs usadas no projeto

- React Icons - [react-icons](https://github.com/react-icons/react-icons) <br>
- React Router Dom - [react-router-dom](https://reactrouter.com/) <br>

```sh
npm install react-router-dom react-icons
```

- Deploy in Github pages - [gh-pages](https://www.npmjs.com/package/gh-pages) <br>

- Opinionated Code Formatter - [prettier](http://github.com/prettier/prettier) <br>

```sh
npm install gh-pages prettier lint-staged husky --save-dev
```

### Configurando husky

```sh
npx husky install
npx husky add .husky/pre-commit "npm run pre-commit"
npx husky add .husky/pre-push "npm run pre-push"
```

### Adicionando scripts

```sh
npm set-script test-coverage "npm test -- --coverage"
npm set-script deploy "gh-pages -b gh-pages -d build"
npm set-script prettier-write "npx prettier --write --ignore-unknown ."
npm set-script prettier-check "npx prettier --check ."
npm set-script pre-commit "npx --no-install lint-staged"
npm set-script pre-push "npm run test-coverage && npm run deploy"
npm set-script postinstall "npx husky install && chmod ug+x .husky/*"
```

<br>
