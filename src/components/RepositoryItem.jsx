import { View, StyleSheet } from 'react-native';
import { RepositoryAvatar, RepositoryDetails } from './RepositoryAvatar';
import RepositoryStats from './RepositoryStats';

const styles = StyleSheet.create({
    container: {
        padding: 10, 
        backgroundColor: 'white'
    },
    infoSection: {
        flexDirection: "row", 
        gap: 20, 
        margin: 15
    }
});

const RepositoryItem = ({repository}) => {
  return (
    <View style={styles.container}>
        <View style={styles.infoSection}>
            <RepositoryAvatar url={repository.ownerAvatarUrl} />
            <RepositoryDetails repository={repository} />
        </View>
        <RepositoryStats repository={repository} />
    </View>
  );
};

export default RepositoryItem;