import { View, type ViewProps } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { cn } from '@/utils/cn';

interface DarkScreenHeaderProps extends ViewProps {
  children: React.ReactNode;
  className?: string;
}

export function DarkScreenHeader({ children, className, ...props }: DarkScreenHeaderProps) {
  const insets = useSafeAreaInsets();

  return (
    <View
      className={cn('bg-dark px-6 pb-6', className)}
      style={{ paddingTop: insets.top + 12 }}
      {...props}
    >
      {children}
    </View>
  );
}
