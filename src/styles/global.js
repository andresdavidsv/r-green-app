import {StyleSheet} from 'react-native';
import colors from './colors';

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    marginHorizontal: '2.5%',
    color: 'red',
  },
  title: {
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.white,
  },
  subtitle: {
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 26,
    fontWeight: 'bold',
    color: colors.white,
    marginTop: 20,
  },
  input: {
    backgroundColor: colors.white,
    marginBottom: 20,
  },
  button: {
    backgroundColor: colors.gray,
    marginTop: 20,
  },
  buttonTxt: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: colors.white,
  },
  hipperText: {
    color: colors.white,
    marginTop: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    textTransform: 'uppercase',
  },
});

export default globalStyles;
