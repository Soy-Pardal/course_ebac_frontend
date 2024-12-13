# Projeto SASS - Estrutura e Configuracao

## Descricao
Este projeto utiliza **SASS** para modularizacao e organizacao dos estilos CSS, seguindo boas praticas do mercado. A estrutura foi organizada em modulos e variaveis para garantir manutencao e escalabilidade do codigo.

## Estrutura do Projeto

```bash
project/
├── resources/
│   ├── sass/
│   │   ├── base/
│   │   │   ├── _variables.scss   # Variaveis globais (cores, fontes, etc.)
│   │   │   └── _global.scss      # Estilos globais
│   │   ├── layout/
│   │   │   ├── _header.scss      # Estilos do cabecalho
│   │   │   └── _container.scss   # Layout container
│   │   ├── components/
│   │   │   ├── _menu.scss        # Estilos do menu
│   │   │   ├── _products.scss    # Estilos da secao de produtos
│   │   │   └── _button.scss      # Estilos de botoes
│   │   └── main.scss             # Importa todos os modulos
│   └── images/                   # Pasta de imagens do projeto
│
├── build/
│   └── css/
│        └── styles.css            # Arquivo CSS compilado
│
├── index.html                    # Estrutura principal HTML
└── package.json                  # Configuracao do NPM e scripts
```

## Configuracao do Ambiente

### Pre-requisitos
- [Node.js](https://nodejs.org/) instalado
- Gerenciador de pacotes **NPM**

### Instalacao do Projeto
1. Clone o repositorio:
   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   cd nome-do-repositorio
   ```
2. Instale as dependencias:
   ```bash
   npm install
   ```

3. Execute o comando para compilar o SASS:
   - Compilacao unica:
     ```bash
     npm run build:sass
     ```
   - Observacao em tempo real:
     ```bash
     npm run watch:sass
     ```

### Scripts Disponiveis

- **`npm run build:sass`**: Compila o arquivo `main.scss` para `styles.css` minimizado.
- **`npm run watch:sass`**: Compila automaticamente o SASS ao detectar mudancas.

## Tecnologias Utilizadas

- **HTML5**
- **SASS** (Dart Sass)
- **Node.js / NPM**

## Autor
[Seu Nome](https://github.com/seu-usuario)

## Licenca
Este projeto esta sob a licenca MIT.

