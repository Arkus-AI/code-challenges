# AI Voice Chat Assistant

Build a voice-enabled chat interface that allows users to have conversations with an AI assistant using both text and speech input, with streaming responses.

## Requirements

#### Chat Interface

- Display message history in chronological order.
- Each message should show:
  - Sender identity (User/AI)
  - Message content
  - Timestamp
  - Input method indicator (text/voice icon)
- Auto-scroll to the latest message when new messages arrive.
- Clear visual distinction between user messages and AI responses.
- Message list should be scrollable if content exceeds viewport.

#### Text Input

- Text input field for typing messages.
- Send button (enabled only when input contains text).
- Support pressing Enter key to send message.
- Clear input field after sending.
- Show "AI is typing..." indicator during response streaming.
- Prevent sending empty or whitespace-only messages.

#### Streaming Response Display

- Show AI response text progressively as it arrives (word-by-word or chunk-by-chunk).
- Maintain smooth scrolling behavior during streaming.
- Show a visual indicator that streaming is in progress.
- Handle streaming completion gracefully.

#### Speech-to-Text

- Microphone button to start/stop voice recording.
- Clear visual feedback during recording (e.g., pulsing animation, recording timer).
- Convert speech to text using Web Speech API or similar.
- Display transcribed text in the input field for review before sending.
- Handle browser permission requests gracefully.
- Show appropriate error messages if microphone permission is denied or STT is not supported.

#### State Management

- Track conversation history (all messages).
- Manage streaming state.
- Track input method for each message (text vs voice).
- Handle loading and error states.
- Persist conversation to localStorage (survive page refresh).
- Provide a way to clear conversation history.

#### Error Handling

- Display user-friendly error messages for API/streaming failures, microphone permission denied, STT not supported, and network errors.
- Never show raw error objects to users.

#### Responsive Design

- Support screen sizes from 320px to desktop.
- Touch-friendly interactive elements (minimum 44x44px tap targets).
- Test on at least 2 breakpoints: mobile (< 768px) and desktop (≥ 768px).

#### Styling

- Apply styling to all pages and ensure they have a responsive design.

## Technology Stack

- React 18+ with hooks
- TypeScript (strongly recommended) or JavaScript ES6+
- Vite or Create React App
- Styling: Tailwind CSS, CSS Modules, Styled Components, or similar

## API

Implement streaming AI responses using either a real streaming LLM API (OpenAI, Anthropic, etc.) or a mock streaming function that simulates progressive text generation.

## Bonus Points

If you have time left, you can implement one or more of the following nice-to-have features:

- Stop generation button to halt streaming mid-response.
- Copy button for each AI response.
- Multiple conversations with ability to switch between chats.
- Export chat as JSON or Markdown.
- Dark mode toggle with persistence.
- Text-to-Speech for AI responses.
- Code highlighting in AI responses.
- Unit tests for key components.

## Evaluation Criteria

- Correctness and completeness of the implemented features.
- User experience quality and interface intuitiveness.
- Code organization and structure.
- Proper use of TypeScript features (if applicable).
- Error handling and edge cases.
- Responsive design quality.
- Documentation completeness and clarity.

## Submission

- Submit the project as a GitHub repository.
- Include a README file with:
  - Setup instructions
  - How to run the application
  - Technologies used
  - Architecture decisions (streaming implementation, state management, etc.)
  - Known limitations and browser compatibility notes
  - Time spent
- Ensure the application runs successfully with `npm install` followed by `npm run dev`.
- Invite `VladimirLi` as a collaborator to the repository.
