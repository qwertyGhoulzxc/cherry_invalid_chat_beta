import { useUser } from "@clerk/nextjs";
import { UserResource } from "@clerk/types";
import { Bell, BellOff } from "lucide-react";
import {
  ChannelHeader,
  ChannelHeaderProps,
  useChannelActionContext,
  useChannelStateContext,
} from "stream-chat-react";

export default function CustomChannelHeader(props: ChannelHeaderProps) {
  const { user } = useUser();

  const {
    channel: { id: channelId },
  } = useChannelStateContext();
  return (
    <div className="flex items-center justify-between gap-3 bg-white dark:bg-[#17191c]">
      <ChannelHeader {...props} />
      {user && channelId && (
        <ChannelNotificationToggleButton user={user} channelId={channelId} />
      )}
    </div>
  );
}

interface IChannelNotificationToggleButtonProps {
  user: UserResource;
  channelId: string;
}

function ChannelNotificationToggleButton({
  channelId,
  user,
}: IChannelNotificationToggleButtonProps) {
  const { addNotification } = useChannelActionContext();

  const mutedChannels = user.unsafeMetadata.mutedChannels || [];

  const channelMuted = mutedChannels.includes(channelId);

  async function setChannelMuted(channelId: string, muted: boolean) {
    try {
      let mutedChannelsUpdate: string[];

      if (muted) {
        mutedChannelsUpdate = [...mutedChannels, channelId];
      } else {
        mutedChannelsUpdate = mutedChannels.filter((id) => id !== channelId);
      }

      await user.update({
        unsafeMetadata: {
          mutedChannels: mutedChannelsUpdate,
        },
      });

      addNotification(
        `Уведомления чата ${muted ? "выключены" : "включены"}`,
        "success",
      );
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="me-6">
      {!channelMuted ? (
        <span title="Выключить уведомления чата">
          <BellOff
            className="cursor-pointer"
            onClick={() => setChannelMuted(channelId, true)}
          />
        </span>
      ) : (
        <span title="Включить уведомления чата">
          <Bell
            className="cursor-pointer"
            onClick={() => setChannelMuted(channelId, false)}
          />
        </span>
      )}
    </div>
  );
}
