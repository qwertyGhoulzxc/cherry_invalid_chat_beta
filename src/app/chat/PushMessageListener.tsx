import { useEffect } from "react";
import { useChatContext } from "stream-chat-react";

export default function PushMessageListener() {
  const { client, setActiveChannel } = useChatContext();

  useEffect(() => {
    const messageListener = async (event: MessageEvent) => {
      const channelId = event.data.channelId;

      if (channelId) {
        const channels = await client.queryChannels({ id: channelId });
        if (channels.length > 0) setActiveChannel(channels[0]);
      }
    };

    navigator.serviceWorker.addEventListener("message", messageListener);

    return () =>
      navigator.serviceWorker.removeEventListener("message", messageListener);
  }, [client, setActiveChannel]);

  return null;
}
