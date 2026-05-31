import { Pressable, Text, View } from 'react-native';

import { cn } from '@/utils/cn';

interface SectionHeaderProps {
  title: string;
  actionLabel?: string;
  onActionPress?: () => void;
  className?: string;
}

export function SectionHeader({
  title,
  actionLabel,
  onActionPress,
  className,
}: SectionHeaderProps) {
  return (
    <View className={cn('mb-3 flex-row items-center justify-between', className)}>
      <Text className="text-lg font-semibold text-zinc-900">{title}</Text>
      {actionLabel && onActionPress ? (
        <Pressable onPress={onActionPress} hitSlop={8}>
          <Text className="text-sm font-medium text-primary">{actionLabel}</Text>
        </Pressable>
      ) : null}
    </View>
  );
}
