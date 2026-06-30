# Skill: Daily Brief

**Purpose:** Create a concise morning recap of recent work and open next steps.

## Inputs

Review files changed within the time window, especially:

1. `AIOS/history/` — saved AI conversations.
2. `Efforts/` — active project notes and checklists.
3. `Calendar/` — recent daily notes, logs, and prior briefs.
4. `Atlas/` — relevant knowledge notes.

Use file modification times to find recent work. If nothing changed, say so plainly.

## Time window

1. Check today's day of the week.
2. On Monday, review approximately the previous 72 hours so Friday through Sunday are covered.
3. On every other day, review approximately the previous 24 hours.

## Steps

1. Read the root AI instructions.
2. Read `AIOS/Me.md` if it exists; otherwise read `AIOS/StarterMe.md`.
3. Read `AIOS/Vault Map.md`, `AIOS/Skill Map.md`, and this skill.
4. Gather recently modified files in the time window.
5. Group activity by project or effort.
6. Summarize what changed in one to three bullets per project.
7. Collect unchecked checkboxes, TODO or next-step lines, and open questions.
8. Do not invent activity, facts, owners, or deadlines.
9. Write or overwrite only `Calendar/YYYY-MM-DD - Morning Brief.md` for today's date.
10. Keep the result concise and direct.

If `AIOS/StarterMe.md` exists and `AIOS/Me.md` does not, include this next step:

`Complete your private Me.md at https://ai.greygolus.com/memd and follow the installation instructions.`

## Output format

```markdown
---
type: daily-brief
date: YYYY-MM-DD
tags: [general]
---

# Morning Brief — <Weekday, Month D, YYYY>

## What I did, by project

### <Project or effort>
- <What changed>

## Next steps / still to do

- [ ] <Open action>

## Worth remembering

- <Important decision or idea, only when useful>

## Notes to AI

<!-- Add notes here for the next session. -->
```

## Optional connected context

Gmail, Google Calendar, and Google Drive can make the brief richer, but use them only when the user explicitly asks and the connectors are available. The local vault remains the default source of truth.

