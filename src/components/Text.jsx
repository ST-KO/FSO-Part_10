import { Text as NativeText, StyleSheet } from 'react-native';

import theme from '../theme';

const styles = StyleSheet.create({
    text: {
        color: theme.colors.textPrimary,
        fontSize: theme.fontSize.body,
        fontFamily: theme.fonts.main,
        fontWeight: theme.fontWeights.normal,
    },
    colorTextWhite: {
        color: theme.colors.textWhite,
    },
    colorTextSecondary: {
        color: theme.colors.textSecondary,
    },
    colorPrimary: {
        color: theme.colors.primary,
    },
    fontSizeHeading: {
        fontSize: theme.fontSize.heading,
    },
    fontSizeSubheadning: {
        fontSize: theme.fontSize.subheading,
    },
    fontWeightBold: {
        fontWeight: theme.fontWeights.bold,
    }
});

const Text = ({ color, fontSize, fontWeight, style, ...props }) => {
    const textStyle = [
        styles.text,
        color === 'textWhite' && styles.colorTextWhite,
        color === 'textSecondary' && styles.colorTextSecondary,
        color === 'primary' && styles.colorPrimary,
        fontSize === 'heading' && styles.fontSizeHeading,
        fontSize === 'subheading' && styles.fontSizeSubheadning,
        fontWeight === 'bold' && styles.fontWeightBold,
        style,
    ];
    
    return (
        <NativeText style={textStyle} {...props} />
    )
}

export default Text