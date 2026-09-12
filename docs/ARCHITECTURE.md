# Horizon AI Architecture

## 1. System boundary

Horizon AI is a workspace and agent system. The model reasons over workspace state and retrieved context, while the application remains the source of truth for structured state, permissions, and external actions.

## 2. Logical layers

### Presentation

The future Next.js application provides:

- AI command center
- project/task/client views
- memory browser
- knowledge browser
- activity/audit timeline
- automation controls

### Application / API

Owns authentication, authorization, validation, orchestration, domain operations, and API contracts.

### Agent orchestration

Responsible for:

1. interpreting the user's message
2. retrieving relevant context
3. deciding whether the request is informational or an action
4. selecting approved tools
5. validating tool arguments
6. executing tools
7. producing a response
8. emitting memory candidates and audit events

Gemini is the initial reasoning provider. It is intentionally behind an AI provider interface.

### Context engine

Builds a bounded context package from:

- current conversation
- relevant short-term session state
- structured entities
- long-term memories
- relevant documents/knowledge
- recent activity

The context engine should rank relevance and enforce scope before data reaches the model.

### Memory system

Memory is not the same thing as application data.

- **Structured state:** authoritative facts such as project status, task due dates, client records.
- **Memory:** durable learned context such as preferences, decisions, recurring facts, and useful conversation-derived information.
- **Knowledge:** source documents and extracted searchable content.

Every memory should carry provenance, scope, confidence, importance, timestamps, and lifecycle information.

### Domain/data layer

PostgreSQL is the system of record. pgvector is planned for semantic retrieval. Redis is planned for caching, transient state, and background-job coordination where needed.

### Tool layer

Tools are explicit, typed capabilities. Examples planned for later phases:

- create/update task
- create/update project
- search knowledge
- GitHub operations
- email
- calendar
- WhatsApp
- document generation
- web research

External side effects must pass authorization and audit checks.

## 3. Data relationships

```text
Organization
  |
  +-- Users
  +-- Clients
  +-- Projects
  |     +-- Tasks
  |     +-- Documents
  |     +-- Decisions
  |     +-- Memories
  |     +-- Events
  |
  +-- Conversations
  +-- Knowledge
  +-- Integrations
  +-- Automations
```

## 4. Natural-language organization flow

```text
User message
    |
    v
Intent + entity extraction
    |
    v
Context retrieval
    |
    v
Gemini planning
    |
    +---- informational request ----> answer
    |
    +---- state change -------------> domain command
    |
    +---- external action ----------> authorized tool
                                      |
                                      v
                                  audit event
    |
    v
Memory candidate extraction
    |
    v
Memory validation/consolidation
```

## 5. Trust model

The model never directly writes arbitrary database records or calls arbitrary external APIs. It proposes typed operations; the application validates and executes them.

Sensitive operations should support:

- explicit confirmation
- permission scopes
- idempotency
- audit logging
- rollback where feasible
- clear user-visible action results

## 6. Phase 0 non-goals

Do not build yet:

- autonomous agents
- broad external integrations
- background monitoring
- complex multi-agent orchestration
- production memory learning from every message

Those depend on the contracts established here.
