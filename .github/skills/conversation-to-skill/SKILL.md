---
name: conversation-to-skill
description: 'Create a reusable SKILL.md from chat history. Use when converting a repeated workflow, checklist, or methodology into an agent skill with clear steps, decisions, and completion checks.'
argument-hint: 'Describe the workflow to convert, intended outcome, and target scope (workspace or personal).'
user-invocable: true
disable-model-invocation: false
---

# Conversation To Skill

## What This Produces
A complete `SKILL.md` draft that captures:
- The repeatable workflow from a conversation
- Decision points and branching logic
- Quality checks and completion criteria
- Suggested prompts for trying the skill

## When To Use
- You followed a multi-step process and want to reuse it
- You repeatedly ask for the same implementation or review pattern
- You want consistency across tasks by standardizing a workflow

## Procedure

### 1. Extract Workflow
Review conversation history and identify the repeatable process:
- **From agent turns**: Look for sequential tool calls that form a pattern (e.g., search → read → edit → validate)
- **From user messages**: Extract numbered steps, checklists, or explicit instructions
- **From both**: Combine user intent with agent execution patterns

### 2. Identify Decision Points
Capture branching logic and alternative paths:
- Use brief bullet lists for clarity: "If X → do Y; otherwise → do Z"
- Include conditions: error recovery, tool failures, missing prerequisites
- Mark optional steps or branches clearly

### 3. Define Quality Criteria
Include measurable completion checks:
- File existence validation
- Output format requirements
- Tool invocation confirmations
- Expected errors to verify

### 4. Determine Scope
Choose location based on target audience:
- **Workspace**: Team-shared, project-specific workflows → `.github/skills/<name>/SKILL.md`
- **Personal**: User-wide habits, cross-project patterns → `~/.copilot/skills/<name>/SKILL.md`

### 5. Draft Frontmatter
Required fields:
- `name`: Lowercase alphanumeric + hyphens, matches folder name
- `description`: 1-2 sentences with trigger keywords and "Use when..." pattern

### 6. Write Body
Structure:
- What the skill produces (concrete output)
- When to use (trigger scenarios)
- Numbered procedure steps
- Decision logic as bullet lists
- Completion checks (measurable criteria)

### 7. Save and Validate
Create the file at the chosen path, then verify:
- `name` matches folder name exactly
- YAML frontmatter is valid (no unquoted colons)
- Procedure is numbered and complete

### 8. Iterate (Optional)
Ask focused clarifications on:
- Ambiguous decision branches
- Unclear output format
- Scope boundary questions

### 9. Finalize
Provide to user:
- File path confirmation
- Summary of what the skill automates
- 3 example prompts to invoke it

## Completion Checks
- [ ] `name` in frontmatter matches folder name exactly
- [ ] `description` includes trigger keywords and uses "Use when..." pattern
- [ ] Body includes numbered procedure steps
- [ ] Decision logic uses brief bullet lists (e.g., "If X → do Y; else → Z")
- [ ] Quality criteria are measurable (file exists, tool called, format validated)
- [ ] Scope documented (workspace or personal) and file path confirmed
- [ ] Output includes 3 example invocation prompts

## Example Prompts
- `/conversation-to-skill Convert our bug-triage chat process into a reusable skill for this repo.`
- `/conversation-to-skill Turn my recurring refactor checklist into a personal skill.`
- `/conversation-to-skill Build a skill from our release review workflow with pass/fail checks.`
