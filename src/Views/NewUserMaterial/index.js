import React, {useState} from 'react';
import {View} from 'react-native';
import {
  Container,
  Button,
  Text,
  H1,
  Form,
  Item,
  Input,
  Toast,
} from 'native-base';
import {useNavigation} from '@react-navigation/native';
//styles
import globalStyles from '../../styles/global';
import styles from './styles';

//Apollo
import {gql, useMutation} from '@apollo/client';

// Apollo Mutations
const NEW_MATERIAL = gql`
  mutation newMaterial($material: MaterialInput) {
    newMaterial(material: $material)
  }
`;

// Update Cache
const GET_MATERIALS = gql`
  query getUserMaterials {
    getUserMaterials {
      materialId
    }
  }
`;

const NewUserMaterials = () => {
  const [nameMaterial, setNameMaterial] = useState('');
  const [weightMaterial, setWeightMaterial] = useState('');
  const [message, setMessage] = useState(null);

  const navigation = useNavigation();

  // Apollo Mutation
  const [newMaterial] = useMutation(NEW_MATERIAL, {
    // eslint-disable-next-line no-shadow
    update(cache, {data: {newMaterial}}) {
      const {getUserMaterials} = cache.readQuery({query: GET_MATERIALS});
      cache.writeQuery({
        query: GET_MATERIALS,
        data: {getUserMaterials: getUserMaterials.concat([newMaterial])},
      });
    },
  });

  const handleSubmit = async () => {
    //Validate
    if (nameMaterial === '' || weightMaterial === '') {
      setMessage('All field are required');
      return;
    }
    //Save
    try {
      const {data} = await newMaterial({
        variables: {
          material: {
            type_name: nameMaterial,
            weight: weightMaterial,
          },
        },
      });
      setMessage(data.createUser);
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
        <H1 style={globalStyles.subtitle}>New Material</H1>
        <Form>
          <Item inlineLabel last style={globalStyles.input}>
            <Input
              placeholder="Material's Name"
              onChangeText={text => setNameMaterial(text)}
            />
          </Item>
          <Item inlineLabel last style={globalStyles.input}>
            <Input
              placeholder="Material's Weight"
              onChangeText={text => setWeightMaterial(text)}
            />
          </Item>
        </Form>
        <Button
          style={[globalStyles.button, styles.button]}
          square
          block
          onPress={() => handleSubmit()}>
          <Text style={globalStyles.text}>Create Material</Text>
        </Button>
        {message && showAlert()}
      </View>
    </Container>
  );
};

export default NewUserMaterials;
