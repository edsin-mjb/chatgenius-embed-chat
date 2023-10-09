type Props = {
    placeholder?: string;
    backgroundColor?: string;
    textColor?: string;
    sendButtonColor?: string;
    defaultValue?: string;
    fontSize?: number;
    onSubmit: (value: string) => void;
    apiHost?: string;
    tenantId?: string;
    buttonTheme: {
        backgroundColor?: string;
        textColor?: string;
    };
};
export declare const TextInput: (props: Props) => import("solid-js").JSX.Element;
export {};
//# sourceMappingURL=TextInput.d.ts.map