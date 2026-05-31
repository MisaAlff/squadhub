import { View, type DimensionValue } from 'react-native';

import { cn } from '@/utils/cn';

interface LoadingSkeletonProps {
  width?: DimensionValue;
  height?: number;
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full';
  className?: string;
}

const roundedClasses = {
  none: 'rounded-none',
  sm: 'rounded-sm',
  md: 'rounded-md',
  lg: 'rounded-lg',
  full: 'rounded-full',
} as const;

export function LoadingSkeleton({
  width = '100%',
  height = 16,
  rounded = 'md',
  className,
}: LoadingSkeletonProps) {
  return (
    <View
      className={cn('animate-pulse bg-slate-700', roundedClasses[rounded], className)}
      style={{ width, height }}
    />
  );
}
