# Projeto Gulp - Compilacao de SASS, Compressao de Imagens e JS

Este projeto utiliza o **Gulp** como task runner para automatizar tarefas comuns no desenvolvimento front-end, como:

- Compilacao de arquivos **SASS/SCSS** em CSS comprimido.
- Compressao de **imagens**.
- Minificacao de **codigo JavaScript**.
- Geracao de **source maps** para facilitar o debug.

---

## 🚀 **Instalacao**

1. **Clone o Repositorio**:
   ```bash
   git clone https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git
   cd SEU-REPOSITORIO
   ```

2. **Instale as Dependencias**:
   Certifique-se de que o Node.js e o npm estao instalados em seu sistema.

   ```bash
   npm install
   ```

---

## ⚙️ **Estrutura de Pastas**

```
gulp-projeto/
|
├── build/                # Saida dos arquivos compilados
│   ├── images/           # Imagens otimizadas
│   ├── scripts/          # Arquivos JS minificados
│   └── styles/           # Arquivos CSS compilados e comprimidos
|
├── src/                  # Codigo fonte
│   ├── images/           # Imagens originais
│   ├── js/               # Arquivos JS
│   └── scss/             # Arquivos SASS/SCSS
|
├── gulpfile.js           # Configuracao do Gulp
├── index.html            # HTML Principal
├── package.json          # Dependencias do projeto
└── README.txt            # Documentacao
```

---

## 🔄 **Tarefas Disponiveis**

Execute as seguintes tarefas do Gulp:

- **Compilacao de SASS**:
   ```bash
   gulp styles
   ```

- **Compressao de Imagens**:
   ```bash
   gulp images
   ```

- **Minificacao de JS**:
   ```bash
   gulp scripts
   ```

- **Executar todas as tarefas e Watchers**:
   ```bash
   gulp
   ```

---

## 📄 **Requisitos**

- Node.js v14 ou superior
- Gulp CLI

Instale o Gulp CLI globalmente, caso nao tenha:
```bash
npm install --global gulp-cli
```

---

## 📊 **Sobre o Projeto**

Este projeto e ideal para desenvolvedores que desejam otimizar seu fluxo de trabalho no front-end com **automatizacao de tarefas** usando Gulp.

### Tecnologias Utilizadas:
- **Gulp**
- **SASS**
- **Imagemin**
- **Uglify**
- **Source Maps**

---

## 💡 **Licenca**

Este projeto esta licenciado sob a licenca MIT.

---

Desenvolvido com ❤️ por Gabriel Dal Prá
