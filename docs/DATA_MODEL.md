# Horizon AI Data Model — Phase 0

## Core entities

### users
Application users. Authentication identity is separate from workspace membership.

### organizations
A Horizon Works workspace/tenant boundary.

### memberships
Connects users to organizations with roles and permissions.

### clients
People or businesses associated with work.

### projects
A body of work with a lifecycle, owner, goals, and relationships.

### tasks
Actionable work items. Tasks may belong to projects and optionally clients.

### notes
Human-authored or AI-generated freeform notes.

### conversations
A durable record of AI sessions and their messages/turns.

### memories
Durable AI context extracted from interactions or explicitly saved by the user.

Suggested fields:

- id
- organization_id
- user_id (nullable for organization-scoped memory)
- type
- content
- source_type
- source_id
- confidence
- importance
- scope
- created_at
- updated_at
- last_retrieved_at
- expires_at (nullable)
- superseded_by (nullable)

### decisions
Explicit decisions made during work. Decisions should preserve rationale and provenance.

### documents
File metadata and relationships to projects, clients, and knowledge records.

### knowledge_chunks
Searchable document/conversation-derived chunks with embeddings for semantic retrieval.

### events
Immutable activity/audit events for important state transitions and AI actions.

### integrations
Connections and configuration metadata for external systems. Secrets should never be stored as plain application records.

### automations
Future triggers and actions. Disabled by default until authorization policies exist.

## Key modeling rule

Do not use memories as the primary database for facts that require transactional consistency. For example, a project deadline belongs in `projects`; an observation about why the deadline matters may belong in `memories`.

## Retrieval scopes

Memory and knowledge retrieval must support at least:

- user-private
- organization-wide
- project-scoped
- client-scoped
- conversation-scoped

The context engine must enforce these scopes before retrieval results are passed to the model.
