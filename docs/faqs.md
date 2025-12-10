# Frequently Asked Questions (FAQs)

## Who has created SAP Research Agent?

SAP Research Agent has been created by Adri AI.

## Tell me more about Adri AI

Adri AI is a global company headquartered in San Francisco, specializing in SAP development.

Its patented software is developed by AI product leaders from MIT, Columbia, and IIT, together with SAP experts bringing over 30 years of experience.

## Who is using SAP Research Agent?

As of December 10, 2025, SAP Research Agent has been used by 1,256 SAP consultants from:

- Companies like Target, Reuters, etc. and
- Consulting firms like Deloitte, Capgemini, NTT Data, etc.

The user base is geographically diverse with three main pockets: United States, Germany, India.

## How does SAP Research Agent work?

### Core Architecture

- **AI Backend**: SAP Research Agent uses over 40+ Large Language Models with specialized configuration for SAP research tasks. More details [here](https://getadriai.github.io/code-agent-docs/faqs#which-models-are-being-used)
- **Vector Database**: The attached ERP system has been indexed into a ChromaDB vector database. It contains 18 million standard objects of ECC 6.0 EHP 7 and 27 million standard objects of S/4HANA 2023 like:

  - Transaction codes, programs, classes
  - Tables, views, data elements
  - BAdIs, enhancements, function modules
  - Menu paths, documentation, and more

### Which models are being used?

SAP Research Agent uses a combination of:

- Internally fine-tuned models
- Public frontier models

Depending on the subtask, an appropriate combination of models is chosen dynamically.

| Model Provider | No. of models used |
| -------------- | ------------------ |
| Adri AI        | 4                  |
| Google         | 9                  |
| Mistral        | 6                  |
| Meta           | 8                  |
| OpenAI         | 7                  |
| Anthropic      | 4                  |
| Cohere         | 4                  |
| Total          | 42                 |

Note: Counts are as of November 2025

### Key Capabilities

1. **System Validation**

SAP Research Agent queries the attached SAP system by writing ChromaSQL queries. ChromaSQL is a SQL-inspired domain specific language created by Adri AI.

2. **Web Search**

SAP Research Agent also has the capability to search the internet for SAP solutions, best practices, and similar use cases.

3. **Document Processing**

SAP Research Agent can read the uploaded attachments and optionally index them for future reference.

### Typical Workflow

1. User asks a research question (text + optional attachments)
2. Depending on the question, the SAP Research Agent may think of a solution from its own knowledge base or search the web for relevant resources.
3. The solution is then validated against your SAP system's capabilities using the vector database.
4. The agent creates detailed implementation plans with specific T-codes, ABAP objects, and configuration steps.
5. The agent provides alternatives and visual diagrams when helpful.

## What are the usage limits?

Before signup, a user gets 50,000 free tokens.

After signup, they get another 200,000 free tokens.

Once you runout of these free tokens, you should upgrade to the Enterprise Plan.

:::note
For Enterprise Plan, contact us at [darshita@getadri.ai](mailto:darshita@getadri.ai)
:::

## What is the difference between all the tiers?

| Category             | Non signed up      | Free plan           | Enterprise |
| -------------------- | ------------------ | ------------------- | ---------- |
| Tokens               | 50,000 free tokens | 200,000 free tokens | Custom     |
| Conversation History | Not saved          | Saved               | Saved      |

:::note
For Enterprise Plan, contact us at [darshita@getadri.ai](mailto:darshita@getadri.ai)
:::
