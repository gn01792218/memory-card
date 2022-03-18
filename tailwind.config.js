module.exports = {
  content: ["./src/**/*.{html,js}"],
  purge:{
    enabled:true,
    content:[
      './src/**/*.html',
      './src/**/*.vue',
      './src/**/*.jsx',
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [],
}
