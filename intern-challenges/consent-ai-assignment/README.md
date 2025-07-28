

### Assignment: Intelligent Consent Flow for Medical Care

#### **Objective**

Design and implement a prototype that demonstrates the use of GenAI, NLP, and speech recognition in facilitating **patient consent** for a medical procedure. The system should be able to:

* Generate a consent summary using LLM.
* Understand patient queries via voice or text.
* Provide spoken or written responses.
* Capture final consent via a digital signature or verbal agreement.

---

### Use Case Scenario

> A patient visits a clinic and is about to undergo a minor surgical procedure. The system should guide them through understanding the procedure, risks, and their rights, and then obtain informed consent.

---

###  Key Requirements

#### 1. **Consent Summary Generation**

* Use a generative AI model (e.g., OpenAI, Claude, or open-source) to produce a patient-friendly explanation of a given procedure (input: raw medical notes or ICD-10/CPT codes).

#### 2. **Interactive Consent Review**

* Enable the patient to **ask questions** via **voice** or **text**.
* The system must:

  * Transcribe spoken queries (speech-to-text).
  * Understand and respond using LLM (text generation).
  * Optionally, use **text-to-speech** to provide verbal responses.

#### 3. **Consent Capture**

* Provide a way for the patient to:

  * Give **verbal consent**, captured via speech-to-text and saved with a timestamp.
  * Or, use a **digital signature** (e.g., touchscreen signature pad or drawing on screen).

#### 4. **Language Support**

* Bonus: Allow interaction in **multiple languages** (e.g., English + Swedish).

#### 5. **Logging & Traceability**

* Log the full conversation, consents, and timestamps in a structured format (e.g., JSON or a small database).

---

### Deliverables

* A working demo (Streamlit, Gradio, or simple web UI).
* Code repository (GitHub or similar) with instructions to run locally.
* Short design document (\~1 page) explaining:

  * Tech stack decisions.
  * How speech and LLM were integrated.
  * Edge cases considered (e.g., "What if the patient is unsure?").

---

