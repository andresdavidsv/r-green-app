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

//styles
import globalStyles from '../../styles/global';
import styles from './styles';

const SignUp = () => {
  const navigation = useNavigation();
  return (
    <Container style={[globalStyles.container, styles.container]}>
      <View style={globalStyles.content}>
        <H1 style={globalStyles.title}>R GREEN</H1>
        <Form>
          <Item inlineLabel last style={globalStyles.input}>
            <Input placeholder="Name" />
          </Item>
          <Item inlineLabel last style={globalStyles.input}>
            <Input placeholder="Last Name" />
          </Item>
          <Item inlineLabel last style={globalStyles.input}>
            <Input placeholder="Username" />
          </Item>
          <Item inlineLabel last style={globalStyles.input}>
            <Input placeholder="Email" />
          </Item>
          <Item inlineLabel last style={globalStyles.input}>
            <Input secureTextEntry={true} placeholder="Password" />
          </Item>
        </Form>
        <Button square block style={globalStyles.button}>
          <Text tyle={globalStyles.buttonTxt}>Sign Up</Text>
        </Button>
      </View>
    </Container>
  );
};

export default SignUp;
