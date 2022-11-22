import {useNavigation} from '@react-navigation/native';
import {HStack, StatusBar, Text} from 'native-base';
import {colors} from 'providers/Theme/colors';
import {ReactNode} from 'react';

import {Icon} from 'components/Icon';
import {Pressable} from 'components/Pressable';

type Props = {
  headerLeft?: ReactNode;
  headerRight?: ReactNode;
  headerCenter?: ReactNode | string;
  onPressLeft?: () => void;
  onPressRight?: () => void;
  hideBackButton?: boolean;
  safeAreaTop?: boolean;
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
      <HStack
        bg="brand.black"
        p={4}
        justifyContent="space-between"
        safeAreaTop={safeAreaTop}>
        <Pressable onPress={handleOnPressLeft} minW={10}>
          {headerLeft ? (
            headerLeft
          ) : navigation.canGoBack() ? (
            <Icon name="arrow-left" size={20} color="white" />
          ) : null}
        </Pressable>
        {typeof headerCenter === 'string' ? (
          <Text color="white" fontWeight="medium">
            {headerCenter}
          </Text>
        ) : (
          headerCenter
        )}
        <Pressable onPress={onPressRight} minW={10}>
          {headerRight}
        </Pressable>
      </HStack>
    </>
  );
}
