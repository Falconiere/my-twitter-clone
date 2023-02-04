import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {GetProps, Stack, styled} from 'tamagui';

type SafeStackProps = GetProps<typeof SafeStackStyled>;
const SafeStackStyled = styled(Stack, {
  name: 'SafeTack', // useful for debugging, and Component themes
});

const SafeStack = ({
  safeAreaTop,
  ...rest
}: SafeStackProps & {safeAreaTop?: boolean}) => {
  const insets = useSafeAreaInsets();

  const paddingTop =
    (typeof rest?.paddingTop === 'number' ? rest?.paddingTop : 0) +
    (safeAreaTop ? insets.top : 0);

  return <SafeStackStyled {...rest} paddingTop={paddingTop} />;
};

// helper to get props for any TamaguiComponent
export type {SafeStackProps};
export {SafeStack};
