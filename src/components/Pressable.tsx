import {ButtonFrame, GetProps, styled} from 'tamagui';

const CustomPressable = styled(ButtonFrame, {
  p: 0,
  m: 0,
  w: 'auto',
  h: 'auto',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  pressStyle: {
    opacity: 0.7,
  },
});

type CustomPressableProps = GetProps<typeof CustomPressable>;

function Pressable({children, ...rest}: CustomPressableProps) {
  return <CustomPressable {...rest}>{children}</CustomPressable>;
}

export {Pressable};
