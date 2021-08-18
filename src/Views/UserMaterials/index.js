import React from 'react';
import {
  Container,
  Button,
  Text,
  H2,
  Content,
  List,
  ListItem,
  Left,
  Right,
} from 'native-base';
import {useNavigation} from '@react-navigation/native';
import Loading from '../Login';
//styles
import globalStyles from '../../styles/global';
import styles from './styles';

//Apollo
import {gql, useQuery} from '@apollo/client';

// Apollo Mutations
const GET_MATERIALS = gql`
  query getUserMaterials {
    getUserMaterials {
      materialId
    }
  }
`;

const UserMaterials = () => {
  const navigation = useNavigation();
  // Apollo
  const {data, loading} = useQuery(GET_MATERIALS);
  if (loading) {
    return <Loading />;
  }
  return (
    <Container style={[globalStyles.container, styles.container]}>
      <Button
        style={[globalStyles.button, styles.button]}
        square
        block
        onPress={() => navigation.navigate('NewUserMaterial')}>
        <Text style={globalStyles.text}>New Material</Text>
      </Button>
      <H2 style={globalStyles.subtitle}>Select Material</H2>
      <Content>
        <List style={styles.content}>
          {data.getUserMaterials.map(userMaterials => (
            <ListItem
              key={userMaterials.materialId}
              onPress={() => navigation.navigate('Material', userMaterials)}>
              <Left>
                <Text>{userMaterials.materialId}</Text>
              </Left>
              <Right />
            </ListItem>
          ))}
        </List>
      </Content>
    </Container>
  );
};

export default UserMaterials;
