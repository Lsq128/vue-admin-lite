// 配置文档: https://eslint.bootcss.com/docs/user-guide/configuring
module.exports = {
  // 制定配置文件父级
  root: true,
  // 指定环境的全局变量，下面的配置指定为浏览器环境
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  // 指定eslint解析器
  parser: "vue-eslint-parser",
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "prettier",
  ],
  parserOptions: {
    ecmaVersion: 12,
    parser: "@typescript-eslint/parser",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["vue", "@typescript-eslint", "prettier"],
  rules: {
    "@typescript-eslint/no-unused-vars": "error",
    "prettier/prettier": "error",
  },
  globals: {
    defineProps: "readonly",
    defineEmits: "readonly",
    defineExpose: "readonly",
    withDefaults: "readonly",
  },
};
