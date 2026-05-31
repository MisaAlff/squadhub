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
  default: 'border-slate-700 bg-slate-800/60',
  success: 'border-green-500/30 bg-green-500/10',
  warning: 'border-amber-500/30 bg-amber-500/10',
  danger: 'border-rose-500/30 bg-rose-500/10',
} as const;

const valueVariantClasses = {
  default: 'text-white',
  success: 'text-green-400',
  warning: 'text-amber-400',
  danger: 'text-rose-400',
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
        <Text className="text-sm text-slate-400">{label}</Text>
        {icon}
      </View>
      <Text className={cn('mt-2 text-2xl font-bold', valueVariantClasses[variant])}>
        {value}
      </Text>
    </View>
  );
}
