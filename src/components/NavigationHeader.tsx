import {useNavigation} from '@react-navigation/native';
import {HStack, StatusBar} from 'native-base';
import {ReactNode} from 'react';

import {Icon} from './Icon';
import {Pressable} from './Pressable';

type Props = {
  headerLeft?: ReactNode;
  headerRight?: ReactNode;
  headerCenter?: ReactNode;
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
    safeAreaTop,
    hideBackButton = false,
  } = props;

  const navigation = useNavigation();

  const handleOnPressLeft = () => {
    if (typeof onPressLeft === 'function') {
      onPressLeft();
      return;
    }
    if (!hideBackButton && navigation.canGoBack()) {
      navigation.goBack();
    }
  };

  return (
    <>
      <StatusBar barStyle="light-content" />
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
        {headerCenter}
        <Pressable onPress={onPressRight} minW={10}>
          {headerRight}
        </Pressable>
      </HStack>
    </>
  );
}
