import { Image, Text, View } from 'react-native';

import { cn } from '@/utils/cn';

type AvatarSize = 'sm' | 'md' | 'lg';

interface AvatarProps {
  name: string;
  imageUrl?: string;
  size?: AvatarSize;
  className?: string;
}

const sizeClasses: Record<AvatarSize, { container: string; text: string }> = {
  sm: { container: 'h-8 w-8', text: 'text-xs' },
  md: { container: 'h-12 w-12', text: 'text-base' },
  lg: { container: 'h-16 w-16', text: 'text-xl' },
};

function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) {
    return parts[0].slice(0, 2).toUpperCase();
  }
  return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
}

export function Avatar({ name, imageUrl, size = 'md', className }: AvatarProps) {
  const { container, text } = sizeClasses[size];

  if (imageUrl) {
    return (
      <Image
        source={{ uri: imageUrl }}
        className={cn('rounded-full bg-zinc-200', container, className)}
        accessibilityLabel={name}
      />
    );
  }

  return (
    <View
      className={cn(
        'items-center justify-center rounded-full bg-primary',
        container,
        className,
      )}
    >
      <Text className={cn('font-semibold text-white', text)}>{getInitials(name)}</Text>
    </View>
  );
}
