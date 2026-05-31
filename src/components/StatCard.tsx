import { Text, View } from 'react-native';

import { cn } from '@/utils/cn';

interface StatCardProps {
  label: string;
  value: string | number;
  icon?: React.ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'danger';
  className?: string;
}

const variantClasses = {
  default: 'border-zinc-200 bg-white',
  success: 'border-green-200 bg-green-50',
  warning: 'border-yellow-200 bg-yellow-50',
  danger: 'border-red-200 bg-red-50',
} as const;

const valueVariantClasses = {
  default: 'text-zinc-900',
  success: 'text-green-700',
  warning: 'text-yellow-700',
  danger: 'text-red-700',
} as const;

export function StatCard({
  label,
  value,
  icon,
  variant = 'default',
  className,
}: StatCardProps) {
  return (
    <View
      className={cn(
        'rounded-xl border p-4',
        variantClasses[variant],
        className,
      )}
    >
      <View className="flex-row items-center justify-between">
        <Text className="text-sm text-zinc-500">{label}</Text>
        {icon}
      </View>
      <Text className={cn('mt-2 text-2xl font-bold', valueVariantClasses[variant])}>
        {value}
      </Text>
    </View>
  );
}
