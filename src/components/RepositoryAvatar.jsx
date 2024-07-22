import { View, StyleSheet, Image } from 'react-native';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
    avatar: {
        width: 50,
        height: 50,
    },
    info: {
        gap: 10,
    },
    language: {
        backgroundColor: '#0366d6',
        borderRadius: 5,
        padding: 6,
        alignSelf: 'flex-start',
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
        <View style={styles.language}>
            <Text color='textWhite' fontWeight='bold'>{repository.language}</Text>
        </View>
    </View>
);
  

export { RepositoryAvatar, RepositoryDetails};