import { StyleSheet } from 'react-native';

import colors from '../../../styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
  },
  containerButtons: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default styles;
