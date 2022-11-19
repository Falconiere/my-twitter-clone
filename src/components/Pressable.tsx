import {Container, Pressable as Pressabled} from 'native-base';
import {InterfacePressableProps} from 'native-base/lib/typescript/components/primitives/Pressable/types';

export function Pressable({children, ...rest}: InterfacePressableProps) {
  return (
    <Pressabled {...rest}>
      {({isPressed}) => (
        <Container
          style={{
            transform: [
              {
                scale: isPressed ? 0.96 : 1,
              },
            ],
          }}>
          {children}
        </Container>
      )}
    </Pressabled>
  );
}
