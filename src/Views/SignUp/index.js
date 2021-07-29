import React, {useState} from 'react';
import {View} from 'react-native';
import {
  Container,
  Button,
  Text,
  Form,
  H1,
  Input,
  Item,
  Toast,
} from 'native-base';
import {useNavigation} from '@react-navigation/native';

//styles
import globalStyles from '../../styles/global';
import styles from './styles';

const SignUp = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(null);

  const navigation = useNavigation();
  const handleSubmit = async () => {
    //Validate
    if (
      name === '' ||
      lastName === '' ||
      userName === '' ||
      email === '' ||
      password === ''
    ) {
      setMessage('All field are required');
      return;
    }
    //Password
    if (password.length < 3) {
      setMessage('The password must be longer');
      return;
    }

    //Save
  };

  //Show message
  const showAlert = () => {
    Toast.show({
      text: message,
      buttonText: 'Ok',
      duration: 5000,
    });
  };

  return (
    <Container style={[globalStyles.container, styles.container]}>
      <View style={globalStyles.content}>
        <H1 style={globalStyles.title}>R GREEN</H1>
        <Form>
          <Item inlineLabel last style={globalStyles.input}>
            <Input placeholder="Name" onChangeText={text => setName(text)} />
          </Item>
          <Item inlineLabel last style={globalStyles.input}>
            <Input
              placeholder="Last Name"
              onChangeText={text => setLastName(text)}
            />
          </Item>
          <Item inlineLabel last style={globalStyles.input}>
            <Input
              placeholder="Username"
              onChangeText={text => setUserName(text)}
            />
          </Item>
          <Item inlineLabel last style={globalStyles.input}>
            <Input placeholder="Email" onChangeText={text => setEmail(text)} />
          </Item>
          <Item inlineLabel last style={globalStyles.input}>
            <Input
              secureTextEntry={true}
              placeholder="Password"
              onChangeText={text => setPassword(text)}
            />
          </Item>
        </Form>
        <Button
          square
          block
          style={globalStyles.button}
          onPress={() => handleSubmit()}>
          <Text tyle={globalStyles.buttonTxt}>Sign Up</Text>
        </Button>
        {message && showAlert()}
      </View>
    </Container>
  );
};

export default SignUp;
