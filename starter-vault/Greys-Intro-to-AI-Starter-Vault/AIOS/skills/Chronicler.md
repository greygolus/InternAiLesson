# Skill: Chronicler

**Purpose:** Save a useful AI conversation before it is lost.

## When to use

Use when the user says “save this,” “save this conversation,” “chronicle this,” or “save and summarize this.”

## Steps

1. Choose a short, descriptive topic.
2. Save the conversation to `AIOS/history/YYYY-MM-DD - <Topic>.md`.
3. Never overwrite an existing file; add ` (2)`, ` (3)`, and so on.
4. Preserve the transcript verbatim.
5. If summarization was requested, add concise takeaways, topics, and next steps above the transcript.
6. Confirm the saved path.

## Output format

```markdown
---
type: conversation
date: YYYY-MM-DD
source: <AI tool>
tags: [general]
---

# <Topic> — YYYY-MM-DD

## Summary

- **Takeaways:**
- **Topics:**
- **Next steps:**

## Transcript

**Me:** ...

**AI:** ...
```

Omit the Summary section when the user asks only to save.

