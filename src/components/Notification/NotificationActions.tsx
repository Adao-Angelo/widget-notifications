import { Check, X } from "lucide-react";

interface NotificationActionProps {
  onSubmitAction?: () => void;
  onCancelAction?: () => void;
}

export default function NotificationActions({
  onCancelAction,
  onSubmitAction,
}: NotificationActionProps) {
  return (
    <div className="flex self-center gap-1">
      <button
        onClick={onCancelAction}
        className="h-8 w-8 flex rounded items-center justify-center bg-zinc-500 dark:bg-zinc-800 hover:bg-zinc-700 "
      >
        <X className="w-3 h-3 text-zinc-50" />
      </button>
      <button
        onClick={onSubmitAction}
        className="rounded h-8 w-8 flex items-center justify-center bg-violet-500 hover:bg-violet-400 "
      >
        <Check className="w-3 h-3 text-zinc-50" />
      </button>
    </div>
  );
}
