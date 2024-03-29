import { MessageType } from "@/components/Bot";
export type IncomingInput = {
    question: string;
    history: MessageType[];
    overrideConfig?: Record<string, unknown>;
    socketIOClientId?: string;
};
export type MessageRequest = {
    chatflowid: string;
    apiHost?: string;
    body?: any;
};
export type ChatflowRequest = {
    chatflowid: string;
    apiHost?: string;
    tenantId?: string;
};
export type ChainRequest = {
    chatflowid: string;
    apiHost?: string;
    tenantId?: string;
    topic_id?: string;
    session_id?: string;
};
export type PredictRequest = {
    chatflowid: string;
    apiHost?: string;
    tenantId?: string;
    topic_id?: string;
    session_id?: string;
    body?: any;
    userSessionId?: string;
};
export type UserSessionRequest = {
    apiHost?: string;
    tenantId?: string;
    session_id?: string;
    body?: any;
};
export type ReviewRequest = {
    apiHost?: string;
    tenantId?: string;
    chatflow_id: string;
    topic_id?: string;
    user_email?: string;
    question?: string;
    answer?: string;
    feedback?: string;
    rating?: number;
};
export type SpeechRecognitionRequest = {
    apiHost?: string;
    tenantId?: string;
    body?: FormData;
};
export declare const initiateTopic: ({ apiHost, body }: MessageRequest) => Promise<void>;
export declare const sendMessageQuery: ({ apiHost, tenantId, chatflowid, topic_id, session_id, body, userSessionId, }: PredictRequest) => Promise<{
    data?: any;
    error?: Error | undefined;
}>;
export declare const isStreamAvailableQuery: ({ chatflowid, apiHost }: MessageRequest) => Promise<{
    data?: any;
    error?: Error | undefined;
}>;
export declare const getOptions: ({ chatflowid, apiHost, body }: MessageRequest) => Promise<{
    data?: any;
    error?: Error | undefined;
}>;
export declare const tenantDBLoad: ({ chatflowid, apiHost, tenantId }: ChatflowRequest) => Promise<{
    data?: any;
    error?: Error | undefined;
}>;
export declare const getChatflow: ({ chatflowid, apiHost, tenantId }: ChatflowRequest) => Promise<{
    data?: any;
    error?: Error | undefined;
}>;
export declare const createUserSessionRequest: ({ apiHost, body, tenantId }: UserSessionRequest) => Promise<{
    data?: any;
    error?: Error | undefined;
}>;
export declare const getUserSession: ({ apiHost, tenantId, session_id }: UserSessionRequest) => Promise<{
    data?: any;
    error?: Error | undefined;
}>;
export declare const createChain: ({ chatflowid, apiHost, topic_id, session_id, tenantId, }: ChainRequest) => Promise<{
    data?: any;
    error?: Error | undefined;
}>;
export declare const postReview: ({ apiHost, tenantId, ...rest }: ReviewRequest) => Promise<{
    data?: any;
    error?: Error | undefined;
}>;
export declare const speechRecognition: ({ apiHost, tenantId, body, }: SpeechRecognitionRequest) => Promise<{
    data?: any;
    error?: Error | undefined;
}>;
export declare const getRelevantQuestion: ({ apiHost, tenantId, query }: any) => Promise<{
    data?: any;
    error?: Error | undefined;
}>;
//# sourceMappingURL=sendMessageQuery.d.ts.map