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

const RepositoryStats = ({ repository }) => {
    const formatCount = (count) => {
        if(count >= 1000) {
            return (count / 1000).toFixed(1) + 'k';
        }
        return count.toString();
    }
    
    return (
        <View style={styles.container}>
            <StatItem label="Stars" value={formatCount(repository.stargazersCount)} />
            <StatItem label="Forks" value={formatCount(repository.forksCount)} />
            <StatItem label="Reviews" value={formatCount(repository.reviewCount)} />
            <StatItem label="Rating" value={formatCount(repository.ratingAverage)} />
        </View>
    );
};

export default RepositoryStats;