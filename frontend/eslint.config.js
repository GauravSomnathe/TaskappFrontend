import js from '@eslint/js'

export default [
  js.configs.recommended,
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        window: 'readonly',
        document: 'readonly',
        console: 'readonly',
        process: 'readonly',
        __dirname: 'readonly'
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        },
        sourceType: 'module'
      }
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'no-unused-vars': 'warn'
    }
  }
]