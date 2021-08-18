import React from 'react';
import {
  Container,
  Button,
  Text,
  H2,
  Content,
  List,
  Form,
  Item,
  Input,
  Toast,
} from 'native-base';

//styles
import globalStyles from '../../styles/global';
import styles from './styles';

const Material = ({route}) => {
  return (
    <Container style={[globalStyles.container, styles.backgroundColor]}>
      <Form style={styles.form}>
        <Item inlineLabel last style={styles.input}>
          <Text>Material</Text>
        </Item>
      </Form>
    </Container>
  );
};

export default Material;
