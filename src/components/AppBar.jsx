import { View, StyleSheet, Pressable } from 'react-native';
import Text from './Text';
import Constants from 'expo-constants';
import theme from '../theme';

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

const AppBarTab = () => (
    <Pressable>
        <Text fontSize="heading" fontWeight="bold" style={{color: "white"}}>Repositories</Text>
    </Pressable>
)

const AppBar = () => {
  return (
    <View style={styles.container}>
        <AppBarTab />
    </View>
  );
};

export default AppBar;