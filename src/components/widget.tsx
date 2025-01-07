import { Rocket } from "lucide-react";
import { Notification } from "./Notification";

export default function Widget() {
  return (
    <section className="w-[448px] rounded overflow-hidden ">
      <div className="bg-zinc-200 dark:bg-zinc-800 py-4 px-6 flex items-center justify-between">
        <span className="font-bold">Notification</span>
        <button className="text-violet-500 font-bold text-xs hover:text-violet-400">
          MARK ALL AS SEEN
        </button>
      </div>
      {/* recent section */}
      <div>
        <div className="bg-zinc-300 font-medium dark:bg-zinc-950 px-5 py-2 text-ms text-zinc-500 dark:text-zinc-400">
          recent
        </div>

        <div className="divide-y-2 divide-zinc-200 dark:divide-zinc-950">
          <Notification.Root>
            <Notification.Icon icon={Rocket} />
            <Notification.Content text="A file server is a computer or device that has one or more hard drives" />
          </Notification.Root>
          <Notification.Root>
            <Notification.Icon icon={Rocket} />
            <Notification.Content text="A file server is a computer or device that has one or more hard drives" />
            <Notification.Actions.Root>
              <Notification.Actions.Cancel />
              <Notification.Actions.Submit />
            </Notification.Actions.Root>
          </Notification.Root>
        </div>
      </div>

      {/* old section */}
      <div>
        <div className="bg-zinc-300 font-medium dark:bg-zinc-950 px-5 py-2 text-ms text-zinc-500 dark:text-zinc-400">
          olds
        </div>

        <div className="divide-y-2 divide-zinc-200 dark:divide-zinc-950">
          <Notification.Root>
            <Notification.Icon icon={Rocket} />
            <Notification.Content text="A file server is a computer or device that has one or more hard drives" />
            <Notification.Actions.Root>
              <Notification.Actions.Submit />
            </Notification.Actions.Root>
          </Notification.Root>
          <Notification.Root>
            <Notification.Icon icon={Rocket} />
            <Notification.Content text="A file server is a computer or device that has one or more hard drives" />
          </Notification.Root>
          {/* <Notification
            icon={Rocket}
            text="A file server is a computer or device that has one or more hard drives"
          ></Notification>
          <Notification
            icon={Rocket}
            text="A file server is a computer or device that has one or more hard drives"
          ></Notification> */}
        </div>
      </div>
    </section>
  );
}
