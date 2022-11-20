import {Box, Button} from 'native-base';
import {useNavigation} from '@react-navigation/native';

import {Icon} from './Icon';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export function FloatPencilButton() {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  return (
    <Box
      position="absolute"
      right={5}
      top="auto"
      bottom={insets.bottom > 0 ? insets.bottom + 100 : 100}>
      <Button
        rounded="full"
        onPress={() => navigation.navigate('PostForm')}
        w={45}
        h={45}>
        <Icon name="pencil-outline" color="white" size={25} />
      </Button>
    </Box>
  );
}
