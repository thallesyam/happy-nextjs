<h2 align="center">
  <img src="https://img.shields.io/badge/web%3F-ok-00b8d3?style=for-the-badge" alt="Sistema web Ok" />
  <img src="https://img.shields.io/badge/server%3F-ok-00b8d3?style=for-the-badge" alt="Server OK" />
  <img src="https://img.shields.io/github/license/matheusfelipeog/proffy?color=00b8d3&style=for-the-badge" alt="License" />
</h2>

<h1 align="center">
  <img src="https://user-images.githubusercontent.com/59545660/160001438-10f0cfb6-3ef1-4c82-b0e8-97f7ee40a320.png" alt="Logo do Happy" width="1000px" />
</h1>


## 📌 Index

- [Sobre o projeto](#-sobre-o-projeto)
- [Screenshots](#-screenshots)
- [Techs](#-techs)
- [Instalação e Start](#-instalação-e-start)
- [Contribuições](#-contribuições)
- [License](#-license)


## ❔ Sobre o projeto

Uma plataforma para facilitar o encontro de orfanatos por pessoas que querem visita-los.

O Layout foi disponibilizado pela rocketseat para os alunos do ignite praticarem.

## 📸 Screenshots

<p align="center">
  <strong>Tela Web</strong> <br />
  <img src="https://user-images.githubusercontent.com/59545660/160001655-1cc3efa7-dd6d-4811-9915-df7f5acd1dbb.gif" alt="Demonstração da plataforma Happy" />
</p>

## 🛠 Techs

- **Web**
  - [Next](https://nextjs.org/docs)
  - [Typescript](https://www.typescriptlang.org/)
  - [Leaflet](https://leafletjs.com/)
  - [React Leaflet](https://react-leaflet.js.org/)
  - [Mapbox](https://www.mapbox.com/)
  - [Framer Motion](https://www.framer.com/motion/)
  - [Jest](https://jestjs.io/pt-BR/)
  - [Yup](https://github.com/jquense/yup)
  - [React Hook Form](https://react-hook-form.com/)

- **Backend**
  - [Api Routes Next](https://nextjs.org/docs/api-routes/introduction)
  - [Moment](https://momentjs.com/)


## ⚙ Instalação e Start

Esse repositório não possui um backend dedicado, tudo foi construido em cima da arquitetura proposta pelo NextJs, o que você terá que fazer para rodar é clonar o repositório, configurar as variáveis de ambiente conforme o arquivo `.env.example`, rodar um `yarn` e executar com `yarn dev`

Clone o repositório com:

```bash
> git clone https://github.com/thallesyam/happy-nextjs.git
```

As demonstrações utilizam **YARN** por padronização, mas, caso use **NPM**, basta substituir onde estiver escrito `yarn` por `npm`.

**Instalando dependências do projeto web:**

```bash
> cd happy-nextjs
> yarn install
```

Para usar o mapbox, acesse sua conta no site e crie um token para ser utilizado no projeto. Com o token em mãos, crie um arquivo `.env` e coloque seu token como valor da chave `NEXT_PUBLIC_ACCESS_TOKEN_MAP_BOX`.

Crie também uma conta no cloudinary e adicione ao seu .env as variáveis `CLOUDINARY_NAME`, `CLOUDINARY_KEY` e `CLOUDINARY_SECRET`


Exemplo:

```text
NEXT_PUBLIC_ACCESS_TOKEN_MAP_BOX=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
CLOUDINARY_NAME=xxxxxxxxxxxxxxxxxxxxxx
CLOUDINARY_KEY=xxxxxxxxxxxxxxxxxxxxxx
CLOUDINARY_SECRET=xxxxxxxxxxxxxxxxxxxxxx
```

Agora starte o projeto em seu ambiente com:

```bash
> yarn dev
```

Acesse: [`http://localhost:3000/`](http://localhost:3000/) para visualizar.



## 🤝 Contribuições

Siga os passos abaixo para contribuir:

1. Faça o *fork* do projeto (<https://github.com/thallesyam/happy-nextjs>)

2. Clone o seu *fork* para sua maquína (`git clone https://github.com/user_name/happy.git`)

3. Crie uma *branch* para realizar sua modificação (`git checkout -b feature/name_new_feature`)

4. Adicione suas modificações e faça o *commit* (`git commit -m "Descreva sua modificação"`)

5. *Push* (`git push origin feature/name_new_feature`)

6. Crie um novo *Pull Request*

7. Pronto, agora só aguardar a análise 🚀 


Gostaria muito de receber a sua ajuda, esse projeto foi desenvolvido com muito carinho, e por estar aprendendo posso não ter utilizado as melhores práticas e alguns cenários, sua ajuda será mutio bem vinda, com pr's, issues ou qualquer outra ajuda.

## Próximos passos

Tenho alguns objetivos futuros para esse projeto, se estiver pensando em contribuir e estiver sem ideia pode dar uma olhada nessa lista também:

- [] Cobrir 100% do projeto com os testes
- [] Criar telas para o admin
- [] Implementar graphql ou react query ao projeto

## 📜 License

O projeto está sobre a licença [MIT](./LICENSE) ❤️ 

Gostou? Deixe uma estrelinha para ajudar o projeto ⭐
