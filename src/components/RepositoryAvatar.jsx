import { View, StyleSheet, Image } from 'react-native';
import Text from './Text';

const styles = StyleSheet.create({
    avatar: {
        width: 50,
        height: 50,
    },
    info: {
        gap: 10,
    }
});

const RepositoryAvatar = ({ url }) => (
    <Image source={{ uri: url }} style={styles.avatar} />
);

const RepositoryDetails = ({ repository }) => (
    <View style={styles.info}>
        <Text fontSize="subheading" fontWeight="bold">
            {repository.fullName}
        </Text>
        <Text color='textSecondary'>
            {repository.description}
        </Text>
        <Text>{repository.language}</Text>
    </View>
);
  

export { RepositoryAvatar, RepositoryDetails};