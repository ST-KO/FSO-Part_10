import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarheight,
        paddingBottom: 20,
        paddingLeft: 10,
        backgroundColor: theme.colors.background,
        height: 80,
        justifyContent: 'flex-end'
    }
});

const AppBar = () => {
  return (
    <View style={styles.container}>
        <AppBarTab />
    </View>
  );
};

export default AppBar;