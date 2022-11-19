import {Button} from 'native-base';
import {Icon} from './Icon';

type Props = {
  onPress: () => void;
};
export function FloatPencilButton({onPress}: Props) {
  return (
    <Button
      rounded="full"
      position="absolute"
      bottom={5}
      right={5}
      w={45}
      h={45}
      onPress={onPress}>
      <Icon name="pencil-outline" color="white" size={25} />
    </Button>
  );
}
