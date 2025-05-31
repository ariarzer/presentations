module.exports = {
  presets: ['next/babel'],
  overrides: [
    {
      test: /\.(js|jsx|ts|tsx)$/,
      plugins: [
        '@babel/plugin-transform-react-jsx', // ensure JSX transform goes via Babel
      ],
    },
  ],
};
