import type { ElementType } from "react";

interface NotificationIconProps {
  icon: ElementType;
}

export default function NotificationIcon({
  icon: Icon,
}: NotificationIconProps) {
  return <Icon className="w-6 h-6 text-violet-500 mt-4" />;
}
