import { defineConfig, globalIgnores } from "eslint/config";
import js from "@eslint/js";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import importPlugin from "eslint-plugin-import";
import tseslint from "typescript-eslint";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import prettier from "eslint-config-prettier";

const eslintConfig = defineConfig([
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    plugins: {
      react,
      "react-hooks": reactHooks,
      import: importPlugin,
    },
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      react: {
        version: "detect",
      },
      "import/resolver": {
        typescript: {
          alwaysTryTypes: true,
        },
        node: {
          extensions: [".js", ".jsx", ".ts", ".tsx"],
        },
      },
    },
    rules: {
      // React rules (Airbnb style)
      ...react.configs.recommended.rules,
      ...react.configs["jsx-runtime"].rules,
      "react/prop-types": "off", // TypeScript handles this
      "react/react-in-jsx-scope": "off", // Not needed in Next.js
      "react/jsx-filename-extension": [
        "error",
        { extensions: [".jsx", ".tsx"] },
      ],
      "react/jsx-props-no-spreading": "off",
      "react/require-default-props": "off", // TypeScript handles this
      "react/jsx-uses-react": "off",
      "react/jsx-uses-vars": "error",
      "react/function-component-definition": [
        "error",
        {
          namedComponents: "arrow-function",
          unnamedComponents: "arrow-function",
        },
      ],
      
      // React Hooks rules (Airbnb style)
      ...reactHooks.configs.recommended.rules,
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      
      // Import rules (Airbnb style)
      "import/no-unresolved": "error",
      "import/named": "error",
      "import/default": "error",
      "import/namespace": "error",
      "import/no-absolute-path": "error",
      "import/no-dynamic-require": "warn",
      "import/no-internal-modules": "off",
      "import/no-webpack-loader-syntax": "error",
      "import/no-self-import": "error",
      "import/no-cycle": "error",
      "import/no-useless-path-segments": "error",
      "import/export": "error",
      "import/no-named-as-default": "warn",
      "import/no-named-as-default-member": "warn",
      "import/no-deprecated": "warn",
      "import/no-extraneous-dependencies": [
        "error",
        {
          devDependencies: [
            "**/*.test.{js,jsx,ts,tsx}",
            "**/*.spec.{js,jsx,ts,tsx}",
            "**/jest.config.{js,ts}",
            "**/jest.setup.{js,ts}",
            "**/eslint.config.{js,mjs}",
            "**/next.config.{js,ts,mjs}",
            "**/tailwind.config.{js,ts}",
            "**/postcss.config.{js,mjs}",
          ],
        },
      ],
      "import/no-mutable-exports": "error",
      "import/no-amd": "error",
      "import/first": "error",
      "import/no-duplicates": "error",
      "import/extensions": [
        "error",
        "ignorePackages",
        {
          js: "never",
          jsx: "never",
          ts: "never",
          tsx: "never",
        },
      ],
      "import/order": [
        "error",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
          ],
          "newlines-between": "always",
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
        },
      ],
      "import/newline-after-import": "error",
      "import/prefer-default-export": "off",
      "import/no-named-default": "error",
      
      // General JavaScript/TypeScript rules (Airbnb style)
      "no-console": "warn",
      "no-debugger": "error",
      "no-alert": "warn",
      "no-var": "error",
      "prefer-const": "error",
      "prefer-arrow-callback": "error",
      "arrow-body-style": ["error", "as-needed"],
      "prefer-template": "error",
      "template-curly-spacing": "error",
      "prefer-destructuring": [
        "error",
        {
          array: false,
          object: true,
        },
      ],
      "object-shorthand": "error",
      "prefer-rest-params": "error",
      "prefer-spread": "error",
      "no-useless-constructor": "error",
      "no-duplicate-imports": "off", // Handled by import/no-duplicates
      "no-useless-computed-key": "error",
      "no-useless-rename": "error",
      "no-param-reassign": [
        "error",
        {
          props: true,
          ignorePropertyModificationsFor: [
            "acc",
            "accumulator",
            "e",
            "ctx",
            "context",
            "req",
            "request",
            "res",
            "response",
            "$scope",
            "staticContext",
          ],
        },
      ],
      "no-return-assign": "error",
      "prefer-promise-reject-errors": "error",
      "no-throw-literal": "error",
      "no-unused-expressions": [
        "error",
        {
          allowShortCircuit: true,
          allowTernary: true,
          allowTaggedTemplates: true,
        },
      ],
      "no-useless-call": "error",
      "no-useless-concat": "error",
      "no-useless-return": "error",
      "yoda": "error",
      "no-nested-ternary": "warn",
      "no-unneeded-ternary": "error",
      "no-else-return": [
        "error",
        {
          allowElseIf: false,
        },
      ],
      "comma-dangle": [
        "error",
        {
          arrays: "always-multiline",
          objects: "always-multiline",
          imports: "always-multiline",
          exports: "always-multiline",
          functions: "always-multiline",
        },
      ],
      "comma-spacing": "error",
      "comma-style": "error",
      "computed-property-spacing": "error",
      "func-call-spacing": "error",
      "key-spacing": "error",
      "keyword-spacing": "error",
      "no-multi-spaces": "error",
      "no-multiple-empty-lines": [
        "error",
        {
          max: 1,
          maxEOF: 0,
        },
      ],
      "no-trailing-spaces": "error",
      "no-whitespace-before-property": "error",
      "object-curly-spacing": ["error", "always"],
      "padded-blocks": ["error", "never"],
      "quotes": [
        "error",
        "single",
        {
          avoidEscape: true,
          allowTemplateLiterals: true,
        },
      ],
      "semi": ["error", "always"],
      "semi-spacing": "error",
      "space-before-blocks": "error",
      "space-before-function-paren": [
        "error",
        {
          anonymous: "always",
          named: "never",
          asyncArrow: "always",
        },
      ],
      "space-in-parens": "error",
      "space-infix-ops": "error",
      "space-unary-ops": "error",
      "spaced-comment": [
        "error",
        "always",
        {
          line: {
            markers: ["/"],
            exceptions: ["-", "="],
          },
          block: {
            markers: ["!"],
            exceptions: ["*"],
            balanced: true,
          },
        },
      ],
      "switch-colon-spacing": "error",
      "arrow-spacing": "error",
      "block-spacing": "error",
      "rest-spread-spacing": "error",
      "no-confusing-arrow": [
        "error",
        {
          allowParens: true,
        },
      ],
      "operator-linebreak": [
        "error",
        "after",
        {
          overrides: {
            "?": "before",
            ":": "before",
          },
        },
      ],
      "no-underscore-dangle": [
        "error",
        {
          allow: ["__dirname", "__filename"],
        },
      ],
      "no-restricted-syntax": [
        "error",
        "ForInStatement",
        "LabeledStatement",
        "WithStatement",
      ],
      "no-continue": "off",
      "no-plusplus": [
        "error",
        {
          allowForLoopAfterthoughts: true,
        },
      ],
      "no-bitwise": "error",
      "no-multi-assign": "error",
      "no-await-in-loop": "warn",
      "no-async-promise-executor": "error",
      "prefer-object-spread": "error",
      "radix": "error",
      "no-iterator": "error",
      "no-shadow": [
        "error",
        {
          builtinGlobals: false,
          hoist: "all",
          allow: ["resolve", "reject", "done", "next", "err"],
        },
      ],
      "no-shadow-restricted-names": "error",
      "no-undef": "off", // TypeScript handles this
      "no-undef-init": "error",
      "no-use-before-define": [
        "error",
        {
          functions: false,
          classes: true,
          variables: true,
        },
      ],
      "no-label-var": "error",
      "array-callback-return": "error",
      "consistent-return": "off",
      "no-caller": "error",
      "no-eval": "error",
      "no-extend-native": "error",
      "no-extra-bind": "error",
      "no-floating-decimal": "error",
      "no-implicit-coercion": [
        "error",
        {
          boolean: true,
          number: true,
          string: true,
          allow: [],
        },
      ],
      "no-implied-eval": "error",
      "no-labels": [
        "error",
        {
          allowLoop: false,
          allowSwitch: false,
        },
      ],
      "no-new-func": "error",
      "no-new-wrappers": "error",
      "no-octal-escape": "error",
      "no-proto": "error",
      "no-script-url": "error",
      "no-sequences": "error",
      "no-useless-escape": "error",
      "no-void": "error",
      "no-warning-comments": [
        "warn",
        {
          terms: ["todo", "fixme", "xxx", "hack"],
          location: "start",
        },
      ],
      "wrap-iife": [
        "error",
        "outside",
        {
          functionPrototypeMethods: false,
        },
      ],
      "strict": ["error", "never"],
      "no-class-assign": "error",
      "no-compare-neg-zero": "error",
      "no-cond-assign": ["error", "always"],
      "no-const-assign": "error",
      "no-constant-condition": [
        "error",
        {
          checkLoops: false,
        },
      ],
      "no-control-regex": "error",
      "no-delete-var": "error",
      "no-dupe-args": "error",
      "no-dupe-class-members": "error",
      "no-dupe-keys": "error",
      "no-duplicate-case": "error",
      "no-empty-character-class": "error",
      "no-empty-pattern": "error",
      "no-ex-assign": "error",
      "no-extra-boolean-cast": "error",
      "no-extra-semi": "error",
      "no-fallthrough": "error",
      "no-func-assign": "error",
      "no-global-assign": "error",
      "no-implicit-globals": "error",
      "no-inner-declarations": "error",
      "no-invalid-regexp": "error",
      "no-irregular-whitespace": "error",
      "no-lone-blocks": "error",
      "no-mixed-operators": [
        "error",
        {
          groups: [
            ["%", "**"],
            ["%", "+"],
            ["%", "-"],
            ["%", "*"],
            ["%", "/"],
            ["/", "*"],
            ["&", "|", "<<", ">>", ">>>"],
            ["==", "!=", "===", "!=="],
            ["&&", "||"],
          ],
          allowSamePrecedence: false,
        },
      ],
      "no-new-object": "error",
      "no-new-symbol": "error",
      "no-obj-calls": "error",
      "no-octal": "error",
      "no-redeclare": "error",
      "no-regex-spaces": "error",
      "no-self-assign": "error",
      "no-self-compare": "error",
      "no-sparse-arrays": "error",
      "no-this-before-super": "error",
      "no-unexpected-multiline": "error",
      "no-unreachable": "error",
      "no-unsafe-finally": "error",
      "no-unsafe-negation": "error",
      "no-unused-labels": "error",
      "no-var": "error",
      "no-with": "error",
      "one-var": [
        "error",
        {
          initialized: "never",
        },
      ],
      "one-var-declaration-per-line": ["error", "always"],
      "operator-assignment": ["error", "always"],
      "prefer-numeric-literals": "error",
      "quote-props": [
        "error",
        "as-needed",
        {
          keywords: false,
          unnecessary: true,
          numbers: false,
        },
      ],
      "require-yield": "error",
      "sort-imports": [
        "off",
        {
          ignoreCase: false,
          ignoreDeclarationSort: true,
          ignoreMemberSort: false,
          memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
        },
      ],
      "symbol-description": "error",
      "unicode-bom": ["error", "never"],
      "vars-on-top": "error",
    },
  },
  {
    files: ["**/*.ts", "**/*.tsx"],
    rules: {
      // TypeScript specific rules
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-non-null-assertion": "warn",
      "no-unused-vars": "off", // Use TypeScript version instead
    },
  },
  // Apply Next.js configs after our rules (they may override some rules)
  ...nextVitals,
  ...nextTs,
  // Apply Prettier config last to disable conflicting ESLint rules
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    rules: {
      ...prettier.rules,
    },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
