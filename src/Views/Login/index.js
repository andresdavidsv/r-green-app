import React from 'react';
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
import {useNavigation} from "@react-navigation/native";

//api
import rgreenApi from '../../api/rgreenAPI';

//styles
import globalStyles from '../../styles/global';
import styles from './styles';

const Login = () => {
  const navigation = useNavigation();

  const signIn = async () => {
    try {
      const res = await rgreenApi.post('/users', {email, password});
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container style={[globalStyles.container, styles.container]}>
      <View style={globalStyles.content}>
        <H1 style={globalStyles.title}>R GREEN</H1>
        <Form>
          <Item inlineLabel last style={globalStyles.input}>
            <Input placeholder="Email" />
          </Item>
          <Item inlineLabel last style={globalStyles.input}>
            <Input secureTextEntry={true} placeholder="Password" />
          </Item>
        </Form>
        <Button square block style={globalStyles.button}>
          <Text tyle={globalStyles.buttonTxt}>Login</Text>
        </Button>
        <Text
          onPress={() => navigation.navigate('SignUp')}
          style={globalStyles.hipperText}>
          Sign Up
        </Text>
      </View>
    </Container>
  );
};

export default Login;
