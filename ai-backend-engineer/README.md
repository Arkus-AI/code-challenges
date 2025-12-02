# Technical Assignment: Customer Feedback Analysis Tool

A two-part exercise assessing your ability to build AI-powered systems and evaluate code.

---

## Part 1: Feedback Analysis System

### Business Context

We receive written customer feedback and want to automatically:

1. **Classify sentiment** appropriately
2. **Identify topics** to route feedback to the right team
3. **Store feedback** for retrieval and analysis
4. **Alert the team** when immediate action is needed

> **Note:** Requirements are intentionally open-ended. You may email clarifying questions before starting—we evaluate what candidates ask (or don't ask).

---

### Constraints

Your solution must balance these real-world constraints:

| Constraint | Requirement |
|------------|-------------|
| Response time | API responds within **500ms** |
| Reliability | System works even when AI provider is down |
| Cost | Design for paid AI API calls |
| Volume | Handle **100 messages/minute** at peak |

These constraints conflict. Show us how you navigate trade-offs.

---

### Requirements

#### You Must:
- Submit code testable with a single command
- Include a README (structure below)
- Write tests covering: alert triggering, AI response parsing, provider failures, edge cases

#### You May:
- Choose any language, framework, database, or AI tools
- Use third-party APIs or models
- Stub authentication or notifications

---

### README Structure

#### 1. Design Rationale *(Write before coding)*
- What clarifying questions would you ask?
- What 2-3 approaches did you consider?
- Why this approach over alternatives?
- What are you intentionally NOT building?

> We value this section highly—it shows how you think.

#### 2. Setup & Usage
- How to run app and tests
- Environment setup notes

#### 3. Assumptions
- What you assumed about data, topics, behavior
- Flag uncertain assumptions

#### 4. Technical Decisions
For each major decision: what you chose, why, and alternatives rejected.

#### 5. AI Integration
- Prompt design and iteration process
- Handling non-deterministic outputs
- Edge cases (sarcasm, multiple topics, gibberish)
- Error handling and caching strategies

#### 6. Failure Modes
Document **3 ways your system could fail**:
- What goes wrong?
- How would you detect it?
- What's the user impact?
- How does your implementation handle it?

#### 7. Production Considerations
- AI monitoring (accuracy, latency, cost)
- Observability for debugging
- Prompt versioning / A/B testing
- Security for external AI providers
- Scaling to 10x volume

---

### Evaluation Criteria

| Area | What We Look For |
|------|------------------|
| **Problem Understanding** | Good questions, identified ambiguities |
| **Design Thinking** | Reasoning about alternatives *before* coding |
| **Constraint Navigation** | Resolving speed vs. cost vs. reliability |
| **Failure Awareness** | Anticipating what breaks, detection, mitigation |
| **AI Integration** | Prompt design, validation, error handling |
| **Code Quality** | Readable, maintainable, tested |

> **We value reasoning over completeness.** A well-documented solution with clear trade-offs beats feature-complete code with no explanation.

---

## Part 2: Code Review

You're reviewing a teammate's PR for a user data formatting utility:

```ts
// user-formatter.ts
export function formatUserList(users: any[]) {
  const formatted = [];

  for (let i = 0; i < users.length; i++) {
    const u = users[i];
    const fullName = u.firstName + " " + u.lastName;

    let status = "inactive";
    if (
      u.active === true &&
      u.lastLogin &&
      new Date(u.lastLogin) > new Date(Date.now() - 30 * 86400000)
    ) {
      status = "active";
    }

    formatted.push({
      id: u.id,
      name: fullName,
      email: u.email,
      status: status,
      signupDate: u.signupDate.split("T")[0],
    });
  }

  return formatted;
}
```

**Provide PR feedback covering:**
- What to improve or refactor
- Questions for the author
- What's done well
- Naming, structure, maintainability suggestions

---

Good luck! Email us if you need clarification.
