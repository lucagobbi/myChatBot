export interface OpenAIRequest {

    model: string;
    prompt: string;
    temperature: number;
    max_tokens: number;
    frequency_penalty: number;
    presence_penalty: number;
}