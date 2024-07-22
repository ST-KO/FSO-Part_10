import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import RepositoryList from './RepositoryList';
import AppBar from './AppBar';

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        flexShrink: 1,
        marginTop: Constants.statusBarHeight,
        backgroundColor: "#e1e4e8"
    }
});

const Main = () => {
  return (
    <View  style={styles.container} >
        <AppBar />
        <RepositoryList />
    </View>
  );
};

export default Main;