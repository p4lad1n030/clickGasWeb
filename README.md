# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list este é o escolhido


Política de Privacidade do [Nome do Seu Aplicativo]

Esta Política de Privacidade descreve como são coletados, usados e compartilhados os dados pessoais dos usuários do aplicativo [Nome do Seu Aplicativo].

Informações Coletadas

Informações de Pedido: Quando um usuário realiza um pedido através do aplicativo, coletamos as seguintes informações:

Nome da rua
Número da casa
Ponto de referência
Bairro
Forma de pagamento (Pix, cartão ou dinheiro)
Localização: O aplicativo coleta a localização atual do usuário para auxiliar na entrega do pedido. Esta localização é usada apenas durante o processo de entrega e não é armazenada pelo aplicativo.

Uso das Informações

As informações coletadas são usadas exclusivamente para os seguintes propósitos:

Processar e entregar os pedidos dos usuários.
Facilitar a comunicação entre o usuário e o serviço de entrega, através da montagem de uma mensagem no WhatsApp com todas as informações fornecidas para realizar o pedido.
Melhorar a experiência do usuário ao fornecer informações relevantes para a entrega dos pedidos.
Compartilhamento de Informações

As informações fornecidas pelos usuários não são compartilhadas com terceiros, exceto nos seguintes casos:

Compartilhamento com o serviço de entrega para facilitar a entrega dos pedidos.
Quando exigido por lei ou por solicitação de autoridades governamentais.
Segurança dos Dados

Tomamos medidas razoáveis para proteger as informações pessoais dos usuários contra acesso não autorizado, alteração, divulgação ou destruição não autorizada.

Alterações nesta Política de Privacidade

Esta Política de Privacidade pode ser atualizada periodicamente para refletir mudanças nas práticas de privacidade do aplicativo. Recomendamos que os usuários revisem periodicamente esta política para estar cientes de quaisquer alterações.

Contato

Se você tiver dúvidas sobre esta Política de Privacidade, entre em contato conosco através do seguinte endereço de e-mail: [Seu endereço de e-mail de contato].