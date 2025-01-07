import { Check } from "lucide-react";

interface NotificationActionSubmitProps {
  onSubmitAction?: () => void;
}

export default function NotificationActionsSubmit({
  onSubmitAction,
}: NotificationActionSubmitProps) {
  return (
    <button
      onClick={onSubmitAction}
      className="rounded h-8 w-8 flex items-center justify-center bg-violet-500 hover:bg-violet-400 "
    >
      <Check className="w-3 h-3 text-zinc-50" />
    </button>
  );
}
