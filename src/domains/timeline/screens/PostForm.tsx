import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import {NavigationHeader} from 'domains/navigation/components/NavigationHeader';
import {avatarUrl} from 'mocks/twitters';

import {useTimeLineCreate} from 'api/queries/useTimeLineCreate';
import {Avatar, Text, XStack, YStack, TextArea} from 'tamagui';
import {Platform} from 'react-native';

const maxTextLength = 250;

export function PostForm() {
  const [value, setValue] = useState<string>('');

  const mutation = useTimeLineCreate();
  const navigation = useNavigation();

  const handleOnSubmit = () => {
    if (value.length > 0) {
      mutation.mutate({
        text: value,
        nickname: 'falconiererb',
        name: 'Falconiere Barbosa',
        avatar: avatarUrl,
      });
      navigation.goBack();
    }
  };

  return (
    <>
      <NavigationHeader
        headerRight={<Text>Post</Text>}
        onPressRight={handleOnSubmit}
        safeAreaTop={!(Platform.OS === 'ios')}
      />
      <YStack flex={1} backgroundColor="$background" width="100%">
        <XStack space={10} padding="$2">
          <Avatar circular size="$2" width="$2">
            <Avatar.Image src={avatarUrl} />
            <Avatar.Fallback backgroundColor="grey" />
          </Avatar>
          <YStack flex={1}>
            <TextArea
              borderWidth={2}
              size="$4"
              color="$white"
              padding="$2"
              onChangeText={setValue}
              value={value}
              multiline
              placeholderTextColor="gray"
              borderColor="gray"
              borderStyle={'dashed'}
            />
            <Text color="$white">
              {value?.length}/{maxTextLength}
            </Text>
          </YStack>
        </XStack>
      </YStack>
    </>
  );
}
