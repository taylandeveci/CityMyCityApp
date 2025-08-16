import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { colors, spacing, borderRadius, typography } from '../constants/colors';

interface QuickActionButtonProps {
  iconName: keyof typeof MaterialIcons.glyphMap;
  title: string;
  onPress: () => void;
}

const QuickActionButton: React.FC<QuickActionButtonProps> = ({
  iconName,
  title,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.quickAction} onPress={onPress}>
      <MaterialIcons name={iconName} size={28} color={colors.white} />
      <Text style={styles.quickActionText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  quickAction: {
    flex: 1,
    backgroundColor: colors.primary,
    padding: spacing.lg,
    borderRadius: borderRadius.md,
    alignItems: 'center',
    minHeight: 80,
    justifyContent: 'center',
  },
  quickActionText: {
    color: colors.white,
    fontSize: typography.xs,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: spacing.xs,
  },
});

export default QuickActionButton;
