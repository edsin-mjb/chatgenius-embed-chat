/* eslint-disable solid/reactivity */
type BotProps = {
  chatflowid: string;
  tenantId?: string;
  apiHost?: string;
  loginPrompt: {
    form_fields: { field_name: string; is_required: boolean }[];
  };
  poweredByVisibility: boolean;
  chatflowConfig?: Record<string, unknown>;
};

export const initFull = (props: BotProps & { id?: string }) => {
  const fullElement = props.id ? document.getElementById(props.id) : document.querySelector("chatgenius-fullchatbot");
  if (!fullElement) throw new Error("<chatgenius-fullchatbot> element not found.");
  Object.assign(fullElement, props);
};

export const init = (props: BotProps) => {
  const element = document.createElement("chatgenius-chatbot");
  Object.assign(element, props);
  document.body.appendChild(element);
};

type Chatbot = {
  initFull: typeof initFull;
  init: typeof init;
};

declare const window:
  | {
      Chatbot: Chatbot | undefined;
    }
  | undefined;

export const parseChatbot = () => ({
  initFull,
  init,
});

export const injectChatbotInWindow = (bot: Chatbot) => {
  if (typeof window === "undefined") return;
  window.Chatbot = { ...bot };
};
