# React dtmoney project repository

### Commands used:

- Create the react project using the typescript template: `$ yarn create react-app dtmoney --template typescript`

- Styled-components library installed: `$ yarn add styled-components`

- Running the react application: `$ yarn start`

- Installed dependency in development mode to resolve styled-components compatibility with typescript: `$ yarn add @types/styled-components -D`

- Installed miragejs: `$ yarn add miragejs`

- Installed axios: `$ yarn add axios`

- Installed react-modal: `$ yarn add react-modal`

- Installed dependency in development mode to resolve react-modal compatibility with typescript: `$ yarn add @types/react-modal -D`

- Note: After installing react-modal, it was necessary to change the react version to a version compatible with the react-modal version. Therefore, version 18 was installed. Below is the step-by-step process of the entire process:

- Installed version 18 of react and react-dom: `yarn add react@18 react-dom@18`

- Reinstalled dependencies to fix conflicts:
- `$ rm -rf node_modules package-lock.json`
- `$ npm install`

- Installed polished to use javascript manipulation to manipulate colors within the styling: `$ yarn add polished`
