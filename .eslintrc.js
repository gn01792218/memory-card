module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:vue/essential",
    "airbnb-base",
  ],
  setting: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        moduleDirectory: ["node_modules", "src/"],
      },
    },
  },
  parserOptions: {
    ecmaVersion: "latest",
    parser: "@typescript-eslint/parser",
    sourceType: "module",
  },
  plugins: [
    "vue",
    "@typescript-eslint",
  ],
  rules: {
    "vue/no-multiple-template-root": "off",
    "no-empty": "warn", // 不允許空的代碼塊
    quotes: ["error", "double"], // 引号规则为：“双引号”，否则一律按照 “error” 处理（你也可以改成warn试一下）
  },
};
