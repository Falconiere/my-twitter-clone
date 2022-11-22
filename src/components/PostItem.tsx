import {IPost} from 'api/types';
import {Row, Pressable, Text, Column, HStack, Avatar} from 'native-base';

import {ButtonIcon} from './ButtonIcon';

export type IPostIem = IPost;

type Props = IPostIem;

export function PostItem(props: Props) {
  const {text, avatar, name, nickname} = props;
  return (
    <Pressable py={2} px={5}>
      <Row space={2} w="100%">
        <Avatar source={{uri: avatar}} size="sm" />
        <Column flex={1}>
          <HStack space={2} alignItems="center">
            <Text color="white" fontWeight="bold">
              {name}
            </Text>
            <Text color="gray.100" fontSize="xs">
              @{nickname}
            </Text>
            <Text color="gray.100" fontSize="xs">
              . 14h
            </Text>
          </HStack>
          <Text color="white">{text}</Text>
          <Row justifyContent="space-between" py={2}>
            <ButtonIcon
              name="comment-outline"
              color="white"
              size={15}
              rightText={
                <Text color="white" fontSize="xs">
                  100
                </Text>
              }
            />
            <ButtonIcon
              name="share-variant-outline"
              color="white"
              size={15}
              rightText={
                <Text color="white" fontSize="xs">
                  100
                </Text>
              }
            />
            <ButtonIcon
              name="heart-outline"
              color="white"
              size={15}
              rightText={
                <Text color="white" fontSize="xs">
                  100
                </Text>
              }
            />
          </Row>
        </Column>
      </Row>
    </Pressable>
  );
}
