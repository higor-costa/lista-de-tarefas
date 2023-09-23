# **Projeto de Lista de Tarefas utilizando ReactJS**

### Descrição:
Este projeto é uma Lista de Tarefas desenvolvida como forma de praticar o uso da biblioteca ReactJS e o armazenamento local. A estrutura do projeto foi configurada utilizando o Vite, um bundler extremamente rápido para aplicações web. Abaixo estão detalhadas as principais características e tecnologias utilizadas neste projeto.

### Interações:

- Adicionar novas tarefas à lista
- Marcar tarefas como concluídas
- Excluir tarefas individulamente ou todas de uma vez
- Filtrar tarefas por todas/ativas/concluídas
- Alternar entre tema claro e escuro

### Características:

- **Tecnologias Utilizadas:** ReactJS e CSS
- **Bundler:** Vite
- **Deployment:** gh-pages

### Desenvolvimento:

- A Lista de Tarefas foi construída utilizando componentes do ReactJS, permitindo uma estrutura modular e reutilizável.
- O armazenamento local foi utilizado para armazenar as tarefas, evitando que o usuário perca suas tarefas em caso de recarregamento da página, por exemplo.
- Foram utilizados os recursos de Hooks (useState e useEffect) e customHooks (useMedia) para gerenciar o estado e a lógica da aplicação.
- O CSS modules foi empregado para evitar conflitos de nomenclatura de classes e garantir um escopo local para o estilo de cada componente.
- A otimização de imagens foi realizada utilizando o vite-plugin-svgr, convertendo ícones SVG em componentes React.
- A página está hospedada no GitHub Pages, permitindo o acesso público ao projeto.
  
### Instruções de Uso:

1. **Clonar o Repositório:** Clone este repositório para sua máquina local utilizando o comando:
   ```
   git clone https://higor-costa.github.io/lista-de-tarefas
   ```

2. **Instalar Dependências:** Navegue até o diretório do projeto e instale as dependências utilizando o npm ou yarn:
   ```
   cd nome-do-diretorio
   npm install   // ou 'yarn install'
   ```

3. **Rodar Localmente:** Inicie a aplicação em um servidor de desenvolvimento local utilizando o comando:
   ```
   npm run dev   // ou 'yarn dev'
   ```

4. **Build para Produção:** Para criar uma versão otimizada para produção, execute o seguinte comando:
   ```
   npm run build   // ou 'yarn build'
   ```

5. **Deploy no GitHub Pages:** Caso deseje hospedar a aplicação no GitHub Pages, utilize o seguinte comando após a construção:
   ```
   npm run deploy   // ou 'yarn deploy'
   ```
### Adicione ao package.json os seguintes scripts:
- `npm run predeploy`: Executa o build da aplicação antes do deploy.
- `npm run deploy`: Implanta a aplicação no GitHub Pages após o build.

Ao executar o script **npm run deploy**, o script **npm run predeploy** será executado automaticamente. Ou seja, torna-se desnecessário rodar o comando **npm run build** de forma manual antes de fazer o deploy da aplicação.

Além desses scripts, configure também a opção "homepage" antes de realizar o deploy. Se você estiver hospedando sua aplicação no GitHub Pages, por exemplo, a estrutura do valor da opção "homepage" seria o caminho do seu repositório no GitHub.

Ex.:  `"homepage": "https://nome-de-usuario.github.io/repositorio/"`

### vite.config.js
Certifique-se de configurar corretamente a opção "base" no arquivo vite.config.js antes de realizar o deploy.

Ex.: `base: '/lista-de-tarefas'`

### Contribuição:

Contribuições são bem-vindas! Se você encontrar algum problema ou tiver sugestões para melhorias, sinta-se à vontade para abrir uma issue ou enviar um pull request.

### Licença:

Este projeto está licenciado sob a Licença MIT. Consulte o arquivo [LICENSE](./LICENSE) para obter mais informações.
