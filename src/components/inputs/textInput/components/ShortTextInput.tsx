import { splitProps } from "solid-js";
import { JSX } from "solid-js/jsx-runtime";

type ShortTextInputProps = {
  ref: HTMLInputElement | undefined;
  onInput: (value: string) => void;
  fontSize?: number;
} & Omit<JSX.InputHTMLAttributes<HTMLInputElement>, "onInput">;

export const ShortTextInput = (props: ShortTextInputProps) => {
  const [local, others] = splitProps(props, ["ref", "onInput"]);

  return (
    <input
      ref={props.ref}
      id={"message-input-field"}
      class="focus:outline-none bg-transparent px-4 py-4 flex-1 w-full text-input"
      type={props.type ?? "text"}
      style={{ "font-size": props.fontSize ? `${props.fontSize}px` : "16px" }}
      onInput={(e) => local.onInput(e.currentTarget.value)}
      {...others}
    />
  );
};
