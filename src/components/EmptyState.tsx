import { Text, View } from 'react-native';

import { cn } from '@/utils/cn';

interface EmptyStateProps {
  icon?: React.ReactNode;
  title: string;
  description?: string;
  action?: React.ReactNode;
  className?: string;
}

export function EmptyState({
  icon,
  title,
  description,
  action,
  className,
}: EmptyStateProps) {
  return (
    <View className={cn('items-center justify-center px-6 py-12', className)}>
      {icon ? <View className="mb-4">{icon}</View> : null}
      <Text className="text-center text-lg font-semibold text-zinc-900">{title}</Text>
      {description ? (
        <Text className="mt-2 text-center text-sm text-zinc-500">{description}</Text>
      ) : null}
      {action ? <View className="mt-6">{action}</View> : null}
    </View>
  );
}
