import {ReactNode} from 'react';

import {StyleSheet} from 'react-native';

import {Icon, IIconFamily} from 'components/Icon';
import {Pressable} from './Pressable';

type Props = {
  name: string;
  color?: string;
  size?: number;
  family?: IIconFamily;
  onPress?: () => void;
  style?: StyleSheet.NamedStyles<{}>;
  testID?: string;
  disabled?: boolean;
  rightText?: ReactNode;
};

export function ButtonIcon(props: Props) {
  const {
    name,
    color = 'white',
    size = 45,
    family = 'MaterialCommunityIcons',
    onPress,
    style,
    testID = 'button-Icon-TestID',
    disabled,
    rightText,
  } = props;
  return (
    <Pressable
      onPress={onPress}
      style={style}
      testID={testID}
      disabled={disabled}>
      <Icon name={name} color={color} size={size} family={family} />
      {rightText}
    </Pressable>
  );
}
