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

//Apollo
import {gql, useMutation} from '@apollo/client';

// Apollo Mutations
const NEW_ACCOUNT = gql`
  mutation createUser($user: UserInput!) {
    createUser(user: $user)
  }
`;

const SignUp = () => {
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [user_name, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(null);

  const navigation = useNavigation();

  // Apollo Mutation
  const [createUser] = useMutation(NEW_ACCOUNT);

  const handleSubmit = async () => {
    setMessage(null);
    //Validate
    if (
      first_name === '' ||
      last_name === '' ||
      user_name === '' ||
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
    try {
      const {data} = await createUser({
        variables: {
          user: {
            first_name,
            last_name,
            user_name,
            email,
            password,
          },
        },
      });
      setMessage(data.createUser);
      navigation.navigate('Login');
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
              placeholder="Name"
              autoCapitalize="none"
              onChangeText={text => setFirstName(text)}
            />
          </Item>
          <Item inlineLabel last style={globalStyles.input}>
            <Input
              placeholder="Last Name"
              autoCapitalize="none"
              onChangeText={text => setLastName(text)}
            />
          </Item>
          <Item inlineLabel last style={globalStyles.input}>
            <Input
              placeholder="Username"
              autoCapitalize="none"
              onChangeText={text => setUserName(text)}
            />
          </Item>
          <Item inlineLabel last style={globalStyles.input}>
            <Input
              placeholder="Email"
              autoCapitalize="none"
              onChangeText={text => setEmail(text)}
            />
          </Item>
          <Item inlineLabel last style={globalStyles.input}>
            <Input
              secureTextEntry={true}
              autoCapitalize="none"
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
