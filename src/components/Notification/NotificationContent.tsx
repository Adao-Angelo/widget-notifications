interface NotificationContentProps {
  text: string;
}

export default function NotificationContent({
  text,
}: NotificationContentProps) {
  return (
    <div className="flex-1  flex flex-col gap-1">
      <p className="text-sm  text-zinc-600 dark:text-zinc-100 leading-relaxed">
        {text}
      </p>
      <div className="text-xxs text-zinc-400 flex items-center gap-2">
        <span>invitation</span>
        <span>3 minutes ago</span>
      </div>
    </div>
  );
}
