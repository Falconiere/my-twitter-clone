import {ReactNode} from 'react';
import {useNavigation} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import {Icon} from 'components/Icon';
import {Pressable} from 'components/Pressable';

import {colors} from 'providers/TamaguiProvider/colors';

import {Text} from 'tamagui';
import {SafeStack} from 'components/SafeStack';

type Props = {
  headerLeft?: ReactNode;
  headerRight?: ReactNode;
  headerCenter?: ReactNode | string;
  onPressLeft?: () => void;
  onPressRight?: () => void;
  hideBackButton?: boolean;
  safeAreaTop?: boolean;
  bg?: keyof typeof colors;
};

export function NavigationHeader(props: Props) {
  const {
    headerLeft,
    headerRight,
    headerCenter,
    onPressLeft,
    onPressRight,
    safeAreaTop = true,
    hideBackButton = false,
    bg,
  } = props;

  const navigation = useNavigation();

  const handleOnPressLeft = () => {
    if (typeof onPressLeft === 'function') {
      onPressLeft();
      return;
    }
    if (!hideBackButton && !headerLeft && navigation.canGoBack()) {
      navigation.goBack();
    }
  };

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={colors.black} />
      <SafeStack
        flexDirection="row"
        backgroundColor={bg ?? '$black'}
        px={20}
        py={10}
        paddingTop={10}
        alignItems="center"
        justifyContent="space-between"
        minHeight={45}
        safeAreaTop={safeAreaTop}>
        <Pressable onPress={handleOnPressLeft}>
          {headerLeft ? (
            headerLeft
          ) : navigation.canGoBack() ? (
            <Icon name="arrow-left" size={20} color="white" />
          ) : null}
        </Pressable>
        {typeof headerCenter === 'string' ? (
          <Text color="$white">{headerCenter}</Text>
        ) : (
          headerCenter
        )}
        <Pressable onPress={onPressRight}>{headerRight}</Pressable>
      </SafeStack>
    </>
  );
}
