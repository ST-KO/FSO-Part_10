import { StyleSheet, View } from 'react-native';
import Text from './Text';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: "space-between", 
        marginLeft: 20, 
        marginRight: 20,
    },
    statItem: {
        alignItems: 'center',
        gap: 10,
    }
});

const StatItem = ({ label, value }) => (
    <View style={styles.statItem}> 
        <Text fontWeight="bold">{value}</Text>
        <Text color='textSecondary'>{label}</Text>
    </View>
);

const RepositoryStats = ({ repository }) => (
    <View style={styles.container}>
        <StatItem label="Stars" value={repository.stargazersCount} />
        <StatItem label="Forks" value={repository.forksCount} />
        <StatItem label="Reviews" value={repository.reviewCount} />
        <StatItem label="Rating" value={repository.ratingAverage} />
    </View>
);

export default RepositoryStats;