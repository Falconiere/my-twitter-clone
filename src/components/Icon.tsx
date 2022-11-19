// ge the names here: https://oblador.github.io/react-native-vector-icons/

// fonts
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Foundation from 'react-native-vector-icons/Foundation';

import {StyleSheet} from 'react-native';

const FONTS_FAMILIES = {
  MaterialCommunityIcons,
  FontAwesome,
  FontAwesome5,
  Ionicons,
  AntDesign,
  Entypo,
  MaterialIcons,
  SimpleLineIcons,
  Feather,
  Fontisto,
  EvilIcons,
  Foundation,
};

export type IIconFamily =
  | 'MaterialCommunityIcons'
  | 'FontAwesome'
  | 'FontAwesome5'
  | 'Ionicons'
  | 'AntDesign'
  | 'Entypo'
  | 'MaterialIcons'
  | 'SimpleLineIcons'
  | 'Feather'
  | 'Fontisto'
  | 'EvilIcons'
  | 'Foundation';

type Props = {
  size?: number;
  name: string;
  family?: IIconFamily;
  color?: string;
  style?: StyleSheet.NamedStyles<{}>;
};

export function Icon(props: Props) {
  const {
    family = 'MaterialCommunityIcons',
    name,
    size = 20,
    color = 'black',
    style,
  } = props;
  const Family = FONTS_FAMILIES[family];
  return <Family name={name} size={size} color={color} style={style} />;
}
