import { ArrowLeft } from "lucide-react";
import { Dispatch, SetStateAction } from "react";
import {
  Channel,
  MessageInput,
  MessageList,
  Thread,
  Window,
} from "stream-chat-react";
import CustomChannelHeader from "./CustomChannelHeader";

interface IChatChannelProps {
  show: boolean;
  setShown: Dispatch<SetStateAction<boolean>>;
  hideChannelOnThread: boolean;
}

export default function ChatChannel({
  show,
  setShown,
  hideChannelOnThread,
}: IChatChannelProps) {
  return (
    <div className={`h-full  w-full ${show ? "block" : "hidden"}`}>
      <Channel>
        <Window hideOnThread={hideChannelOnThread}>
          <div className="relative dark:bg-[#17191C]">
            {show && (
              <button
                className="absolute top-4 md:hidden "
                onClick={() => setShown((prev) => !prev)}
              >
                <ArrowLeft />
              </button>
            )}
            <div className="ml-5 md:ml-0">
              <CustomChannelHeader />
            </div>
          </div>
          <MessageList />
          <MessageInput />
        </Window>
        <Thread />
      </Channel>
    </div>
  );
}
