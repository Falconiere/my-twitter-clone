import {ReactNode} from 'react';
import {useNavigation} from '@react-navigation/native';
import {HStack, ITheme, StatusBar, Text} from 'native-base';
import {Leaves} from 'native-base/lib/typescript/theme/base/types';
import {colors} from 'providers/Theme/colors';

import {Icon} from 'components/Icon';
import {Pressable} from 'components/Pressable';

type Props = {
  headerLeft?: ReactNode;
  headerRight?: ReactNode;
  headerCenter?: ReactNode | string;
  onPressLeft?: () => void;
  onPressRight?: () => void;
  hideBackButton?: boolean;
  noSafeArea?: boolean;
  bg?: Leaves<ITheme['colors']>;
};

export function NavigationHeader(props: Props) {
  const {
    headerLeft,
    headerRight,
    headerCenter,
    onPressLeft,
    onPressRight,
    noSafeArea = false,
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
      <HStack
        bg={bg ?? 'brand.black'}
        px={4}
        py={1}
        alignItems="center"
        justifyContent="space-between"
        minH={45}
        {...(noSafeArea ? {} : {safeAreaTop: true})}>
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
