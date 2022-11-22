import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import {Avatar, Column, Row, Text, TextArea, View} from 'native-base';

import {NavigationHeader} from 'domains/navigation/components/NavigationHeader';
import {avatarUrl} from 'mocks/twitters';

import {useTimeLineCreate} from 'api/queries/useTimeLineCreate';

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
        headerRight={<Text color="white">Post</Text>}
        onPressRight={handleOnSubmit}
      />
      <View bg="background.default" p={4} flex={1} w="100%">
        <Row w="100%" space={2} minH={120}>
          <Avatar source={{uri: avatarUrl}} size="sm" />
          <Column flex={1}>
            <TextArea
              value={value}
              onChangeText={setValue}
              autoCompleteType="none"
              color="white"
              placeholder="What are you thinking about today?"
              placeholderTextColor="brand.gray"
              maxLength={maxTextLength}
              multiline
              flex={1}
              p="3"
            />
            <Text
              color={maxTextLength - value?.length < 20 ? 'warning' : 'white'}
              fontWeight="medium">
              {value?.length}/{maxTextLength}
            </Text>
          </Column>
        </Row>
      </View>
    </>
  );
}
