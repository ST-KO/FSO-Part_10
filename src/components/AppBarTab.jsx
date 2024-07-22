import { Pressable } from 'react-native';
import Text from './Text';

const AppBarTab = () => {
  return (
    <Pressable>
        <Text fontSize="heading" fontWeight="bold" style={{color: "white"}}>Repositories</Text>
    </Pressable>
  );
};

export default AppBarTab;