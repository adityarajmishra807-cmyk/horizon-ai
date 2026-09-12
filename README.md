# Horizon AI

Horizon AI is the AI operating layer for Horizon Works.

The core experience is simple: Aditya can tell Horizon anything in natural language, and Horizon understands the information, organizes it into the correct workspace entities, maintains persistent memory, and eventually takes authorized actions.

## Phase 0 — Foundation

Phase 0 establishes the architecture and engineering conventions before feature development.

### Core principles

- **AI-first:** natural language is the primary interface.
- **Structured state + memory:** facts, projects, clients, tasks, and memories are stored separately and linked.
- **Context-aware:** Gemini receives relevant context, not an indiscriminate dump of all data.
- **Tool-driven:** future integrations are exposed through controlled tools rather than hard-coded agent behavior.
- **Auditable:** AI actions and important state changes are recorded.
- **Human-controlled:** destructive or external actions require explicit authorization until an appropriate automation policy exists.
- **Provider-flexible:** the AI layer is isolated so the model provider can evolve without rewriting the domain layer.

## Planned architecture

```text
                        HORIZON AI
                            |
                     AI ORCHESTRATOR
                            |
              +-------------+-------------+
              |                           |
        CONTEXT ENGINE                TOOL ROUTER
              |                           |
       +------+-------+          +--------+--------+
       |              |          |        |        |
   SHORT-TERM     LONG-TERM   Projects  CRM    Integrations
    CONTEXT        MEMORY
       |              |
       +------+-------+
              |
        PostgreSQL + pgvector
              |
       Horizon domain state
```

## Initial domain model

- User
- Organization
- Project
- Client
- Task
- Note
- Conversation
- Memory
- Decision
- Document
- Event
- Integration
- Automation

## Phase roadmap

1. Foundation & architecture
2. Command center
3. Automatic organization
4. Persistent memory
5. Context engine
6. Knowledge brain
7. Tool integrations
8. Activity and audit
9. Proactive intelligence
10. Automations
11. Specialized agents
12. Daily AI
13. Full Horizon OS

## Development rule

Build the smallest reliable vertical slice first. Do not add autonomous behavior before memory, permissions, tool execution, and auditability are well defined.
