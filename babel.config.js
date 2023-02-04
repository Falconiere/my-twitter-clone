// only use babel-plugin for native:
process.env.TAMAGUI_TARGET = 'native';
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.ts',
          '.js',
          '.json',
          '.png',
          '.svg',
        ],
      },
    ],
    [
      '@tamagui/babel-plugin',
      {
        components: ['tamagui'],
        config: './src/providers/TamaguiProvider/config.ts',
        // importsWhitelist: ['constants.js', 'colors.js'],
        logTimings: true,
        disableExtraction: process.env.NODE_ENV === 'development',
      },
    ],
    // be sure to set TAMAGUI_TARGET
    [
      'transform-inline-environment-variables',
      {
        include: 'TAMAGUI_TARGET',
      },
    ],
  ],
};
