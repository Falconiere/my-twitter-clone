import {Avatar, Button, Modal, Text, TextArea} from 'native-base';
import {useState} from 'react';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onSend: (message: string) => void;
};
const avatarUrl =
  'https://pbs.twimg.com/profile_images/1577814252479545348/dYf3l-kv_x96.jpg';

export function PostTextArea({isOpen, onClose, onSend}: Props) {
  const [value, setValue] = useState('');
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="full" flex={1}>
      <Modal.Content bg="brand.darkBlue" w="100%" minH="100%">
        <Modal.CloseButton color="white" />
        <Modal.Header bg="black" flexDirection="row" alignItems="center">
          <Avatar source={{uri: avatarUrl}} size="sm" />
          <Text color="white" ml={1}>
            Falconiere, what's up today?
          </Text>
        </Modal.Header>
        <Modal.Body>
          <TextArea
            value={value}
            onChangeText={setValue}
            autoCompleteType="none"
            color="white"
            placeholder="What are you thinking about today?"
            placeholderTextColor="brand.gray"
          />
          <Button
            mt={2}
            isDisabled={value?.length < 5}
            onPress={() => {
              onSend(value);
              onClose();
              setValue('');
            }}>
            Post
          </Button>
        </Modal.Body>
      </Modal.Content>
    </Modal>
  );
}
