import { X } from "lucide-react";

interface NotificationActionCancelProps {
  onCancelAction?: () => void;
}

export default function NotificationActionsCancel({
  onCancelAction,
}: NotificationActionCancelProps) {
  return (
    <button
      onClick={onCancelAction}
      className="h-8 w-8 flex rounded items-center justify-center bg-zinc-500 dark:bg-zinc-800 hover:bg-zinc-700 "
    >
      <X className="w-3 h-3 text-zinc-50" />
    </button>
  );
}
