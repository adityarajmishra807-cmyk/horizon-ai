export interface AIMessage {
  role: "system" | "user" | "assistant";
  content: string;
}

export interface AIProvider {
  generate(messages: AIMessage[], options?: { model?: string }): Promise<string>;
}

export class GeminiProvider implements AIProvider {
  constructor(
    private readonly apiKey = process.env.GEMINI_API_KEY,
    private readonly defaultModel = process.env.GEMINI_MODEL || "gemini-2.5-flash"
  ) {}

  async generate(messages: AIMessage[], options?: { model?: string }): Promise<string> {
    if (!this.apiKey) throw new Error("GEMINI_API_KEY is not configured");

    const { GoogleGenAI } = await import("@google/genai");
    const client = new GoogleGenAI({ apiKey: this.apiKey });
    const system = messages.find((message) => message.role === "system")?.content;
    const contents = messages
      .filter((message) => message.role !== "system")
      .map((message) => ({
        role: message.role === "assistant" ? "model" : "user",
        parts: [{ text: message.content }],
      }));

    const response = await client.models.generateContent({
      model: options?.model || this.defaultModel,
      contents,
      config: system ? { systemInstruction: system } : undefined,
    });

    return response.text || "";
  }
}
