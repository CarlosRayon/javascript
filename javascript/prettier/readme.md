# Prettier

[Prettier](https://prettier.io/) es un formateador de código para multiples lenguajes de programación.

## Prettier and VScode

Para usar Prettier en VSCode debemos instalar la extension:

https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode

Configuramos en VSCode las reglas básicas que Prettier aplicara cuando no tengamos definido
un fichero de configuración **.prettierrc** en nuestro proyecto.
Un ejemplo seria el siguiente (tener en cuanta que no todas las reglas de Prettier son admitidas aquí):

```json
    /***> Prettier ***/
    "prettier.insertPragma": false,
    "prettier.proseWrap": "preserve",
    "prettier.arrowParens": "always",
    "prettier.requirePragma": false,
    "prettier.embeddedLanguageFormatting": "auto",
    "prettier.htmlWhitespaceSensitivity": "css",
    "prettier.printWidth": 150,
    "prettier.tabWidth": 4,
    "prettier.bracketSpacing": true,
    "prettier.jsxSingleQuote": true,
    "prettier.quoteProps": "as-needed",
    "prettier.semi": true,
    "prettier.singleQuote": true,
    "prettier.trailingComma": "es5",
    "prettier.useTabs": false,
    "prettier.vueIndentScriptAndStyle": true,
    /***< Prettier ***/
```

## Archivo configuración .prettierrc

Lo ideal es tener un fichero de [configuración](https://prettier.io/docs/en/configuration.html) con las [reglas](https://prettier.io/docs/en/options.html) admitidas por Prettier en el proyecto.
En este fichero podemos aplicar todas las reglas admitidas y ademas aplicar reglas concretas por tipo de fichero:

```json
{
  /* Configuración general */
  "insertPragma": false,
  "proseWrap": "preserve",
  "arrowParens": "always",
  "requirePragma": false,
  "bracketSameLine": false,
  "bracketSpacing": true,
  "embeddedLanguageFormatting": "auto",
  "htmlWhitespaceSensitivity": "css",
  "jsxSingleQuote": false,
  "printWidth": 150,
  "quoteProps": "as-needed",
  "semi": true,
  "singleQuote": true,
  "trailingComma": "es5",
  "tabWidth": 4,
  "useTabs": false,
  "vueIndentScriptAndStyle": true,

  /* Configuraciones por tipo de fichero */
  "overrides": [
    {
      "files": ["*.css", "*.scss"],
      "options": {
        "tabWidth": 4
      }
    },
    {
      "files": ["*.vue"],
      "options": {
        "tabWidth": 2
      }
    },
    {
      "files": ["*.js"],
      "options": {
        "singleQuote": false
      }
    }
  ]
}
```
