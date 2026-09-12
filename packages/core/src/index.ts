export type EntityType =
  | "client"
  | "project"
  | "task"
  | "note"
  | "memory"
  | "decision"
  | "document"
  | "event"
  | "automation";

export type MemoryScope =
  | "user-private"
  | "organization"
  | "project"
  | "client"
  | "conversation";

export interface MemoryRecord {
  id: string;
  content: string;
  type: string;
  scope: MemoryScope;
  confidence: number;
  importance: number;
  sourceType: string;
  sourceId?: string;
  createdAt: string;
  updatedAt: string;
  expiresAt?: string;
}

export interface ToolDefinition<TArgs = unknown, TResult = unknown> {
  name: string;
  description: string;
  execute(args: TArgs): Promise<TResult>;
}
