import type { ReactNode } from "react";

interface NotificationActionRootProps {
  children: ReactNode;
}

export default function NotificationActionsRoot({
  children,
}: NotificationActionRootProps) {
  return <div className="flex self-center gap-1">{children}</div>;
}
