import { createSignal, Show, splitProps } from "solid-js";
import styles from "../../../assets/index.css";
import { BubbleButton } from "./BubbleButton";
import { BubbleParams } from "../types";
import { Bot, BotProps } from "../../../components/Bot";

export type BubbleProps = BotProps & BubbleParams;

export const Bubble = (props: BubbleProps) => {
  const [bubbleProps] = splitProps(props, ["theme"]);

  const [isBotOpened, setIsBotOpened] = createSignal(false);
  const [isBotStarted, setIsBotStarted] = createSignal(false);
  const [isMax, setMax] = createSignal(false);

  const openBot = () => {
    if (!isBotStarted()) setIsBotStarted(true);
    setIsBotOpened(true);
  };

  const closeBot = () => {
    setIsBotOpened(false);
  };

  const toggleBot = () => {
    isBotOpened() ? closeBot() : openBot();
  };

  return (
    <>
      <style>{styles}</style>
      <BubbleButton {...bubbleProps.theme?.button} toggleBot={toggleBot} isBotOpened={isBotOpened()} />
      <div
        part="bot"
        id="chatgenius-bot-container"
        style={{
          height: bubbleProps.theme?.chatWindow?.height
            ? `${bubbleProps.theme?.chatWindow?.height.toString()}px`
            : "calc(100% - 100px)",
          width: isMax()
            ? "90%"
            : bubbleProps.theme?.chatWindow?.width
              ? `${bubbleProps.theme?.chatWindow?.width.toString()}px`
              : window.innerWidth > 600
                ? "400px"
                : "100%",
          transition: "transform 200ms cubic-bezier(0, 1.2, 1, 1), opacity 150ms ease-out",
          "transform-origin": "bottom right",
          transform: isBotOpened() ? "scale3d(1, 1, 1)" : "scale3d(0, 0, 1)",
          "box-shadow": "rgb(0 0 0 / 16%) 0px 5px 40px",
          "background-color": bubbleProps.theme?.chatWindow?.backgroundColor || "#ffffff",
          "z-index": 42424242,
        }}
        class={
          `fixed sm:right-5 rounded-lg ${isMax() ? "w-[90%] xs:w-full" : "w-full sm:w-[400px] max-h-[704px]"}` +
          (isBotOpened() ? " opacity-1" : " opacity-0 pointer-events-none") +
          (props.theme?.button?.size === "large" ? " bottom-24" : " bottom-20")
        }
      >
        <Show when={isBotStarted()}>
          <Bot
            badgeBackgroundColor={bubbleProps.theme?.chatWindow?.backgroundColor}
            welcomeMessage={bubbleProps.theme?.chatWindow?.welcomeMessage}
            poweredByTextColor={bubbleProps.theme?.chatWindow?.poweredByTextColor}
            textInput={bubbleProps.theme?.chatWindow?.textInput}
            botMessage={bubbleProps.theme?.chatWindow?.botMessage}
            userMessage={bubbleProps.theme?.chatWindow?.userMessage}
            fontSize={bubbleProps.theme?.chatWindow?.fontSize}
            chatflowid={props.chatflowid}
            chatflowConfig={props.chatflowConfig}
            tenantId={props.tenantId}
            apiHost={props.apiHost}
            header={props.theme?.header}
            loginPrompt={props.theme?.loginPrompt ?? props.theme?.login_prompt}
            poweredByVisibility={props.theme?.poweredByVisibility}
            onMax={() => {
              setMax(!isMax());
            }}
            isMax={isMax()}
          />
        </Show>
      </div>
    </>
  );
};
