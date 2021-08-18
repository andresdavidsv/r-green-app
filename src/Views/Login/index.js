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
import AsyncStorage from '@react-native-async-storage/async-storage';

//styles
import globalStyles from '../../styles/global';
import styles from './styles';

//Apollo
import {gql, useMutation} from '@apollo/client';

// Apollo Mutations
const AUTHENTICATE_USER = gql`
  mutation authenticateUser($user: AuthenticateInput!) {
    authenticateUser(user: $user) {
      token
    }
  }
`;

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(null);

  const navigation = useNavigation();

  // Apollo Mutation
  const [authenticateUser] = useMutation(AUTHENTICATE_USER);

  const handleSubmit = async () => {
    setMessage(null);
    //Validate
    if (email === '' || password === '') {
      setMessage('All field are required');
      return;
    }
    //Save
    try {
      const {data} = await authenticateUser({
        variables: {
          user: {
            email,
            password,
          },
        },
      });
      const {token} = data.authenticateUser;

      // Save Token at Storage
      await AsyncStorage.setItem('token', token);

      navigation.navigate('UserMaterials');
    } catch (error) {
      setMessage(error.message);
    }
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
            <Input
              placeholder="Email"
              autoCapitalize="none"
              onChangeText={text => setEmail(text)}
              value={email}
            />
          </Item>
          <Item inlineLabel last style={globalStyles.input}>
            <Input
              secureTextEntry={true}
              placeholder="Password"
              autoCapitalize="none"
              onChangeText={text => setPassword(text)}
            />
          </Item>
        </Form>
        <Button
          square
          block
          style={globalStyles.button}
          onPress={() => handleSubmit()}>
          <Text tyle={globalStyles.buttonTxt}>Login</Text>
        </Button>
        <Text
          onPress={() => navigation.navigate('SignUp')}
          style={globalStyles.hipperText}>
          Sign Up
        </Text>
        {message && showAlert()}
      </View>
    </Container>
  );
};

export default Login;
