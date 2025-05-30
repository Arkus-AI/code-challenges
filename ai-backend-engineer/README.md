# 🥪 Technical Assignment: Customer Feedback Analysis Tool

Welcome! This is a **two-part exercise** designed to assess both your ability to translate business requirements into a working system (**Part 1**) and your ability to evaluate and communicate about code (**Part 2**).

---

## Part 1: Implementation – Feedback Analysis System

### 🧠 Business Context

We receive written feedback from customers and want to better understand and act on it. Your task is to build a minimal backend solution that helps our operations team:

1. Understand the **sentiment** of each message (positive, neutral, negative)
2. Identify the **main topic** of the message (e.g., customer service, pricing, delivery, product quality)
3. Store the feedback in a **structured and retrievable** way, linked to the customer who submitted it
4. Trigger a **notification** when the sentiment is negative so we can respond quickly

This process should be fully automatic—no manual review of messages.

---

### 🛠️ What to Build

Design and implement a minimal backend that achieves the goals above.

#### ✅ You **must**:

- Submit code that can be tested with a single command
- Include a README that explains setup, assumptions, and design
- Write basic automated tests, especially covering negative sentiment alerts

#### ✳️ You **may**:

- Choose any language, framework, database, or NLP tools
- Use third-party APIs or models
- Stub/mimic things like authentication or notifications

We are deliberately **not** prescribing the tech stack or system boundaries. We want to see how you make and justify technical decisions.

---

### 📘 README Instructions

Include a `README.md` in your project root with these sections:

#### 1. Setup & Usage

- How to run the app and tests
- Any environment setup or config notes

#### 2. Assumptions Made

- What you assumed about customer data, topics, or system behavior

#### 3. Technical Decisions Log

For each major decision (e.g., language, storage, libraries, API design):

- What you chose
- Why you chose it
- Alternatives considered and why you didn't choose them

#### 4. If This Went to Production

- What would you prioritize to improve?
- How would you scale, secure, or monitor it?

---

### 🤔 Before You Submit

Please reflect briefly and include answers to the following in your README:

- What trade-offs did you make?
- How does your solution meet the business goals?
- What would you do with more time?

---

## Part 2: Code Review Exercise – Data Transformation

### 🔍 Scenario

You’re reviewing a teammate’s utility function that prepares user data for the frontend. The data is received from a backend service in raw form and needs formatting.

### 🔧 Code Snippet to Review

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

### 🔍 Your Task

Review the code above and provide feedback as if it were a teammate's pull request.

Please include:

- What you'd improve or refactor
- Anything you'd question or want clarified
- Anything that's done well
- Suggestions for clearer naming, structure, or maintainability

You may use inline comments or markdown bullet points.

This part helps us understand how you think about code quality, communication, and team collaboration.

---

Good luck, and thanks for your time and effort! Let us know if you need clarification at any point.
