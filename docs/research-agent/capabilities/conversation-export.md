---
sidebar_position: 10
---

import {ADRI_URLS} from '@site/src/constants/urls';
import CodeBlock from '@theme/CodeBlock';

# Conversation Export

Export your research session to share findings with your team or demonstrate the agent's capabilities to management.

## Why Export?

SAP projects involve multiple stakeholders—functional consultants, developers, architects, and management—who need visibility into research findings.

### Justify Agent Adoption

- **Build a business case**: Show management concrete time savings and the scope of research conducted
- **Demonstrate ROI**: Use session metrics to quantify efficiency gains for procurement or budget discussions

### Integrate with Your Workflow

- **Support documentation**: Use findings as input for functional specs, technical designs, or project plans
- **Create audit trails**: Maintain records of how implementation decisions were reached
- **Onboard team members**: Bring colleagues up to speed without repeating research

## How to Export?

Ask the agent to export your session. You can customize the format, timestamps, and header stats. Example prompt:

<CodeBlock language="text">{`Export this conversation. You must adhere to the design system that the harness has provided you.

Title: Conversation Export | SAP Research Agent
Subtitle: Exported on \`yyyy-mm-dd hh:mm:ss UTC\` | Link: ${ADRI_URLS.research}/sessions/session/{conversation_id}

Each message should have a timestamp displayed underneath in this format (yyyy-mm-dd hh:mm:ss UTC).

Club consecutive assistant messages into one.

Include the following stats in the header: SAP system, Objects Available, Queries answered, Session duration, Est. time saved

Calculate Est. time saved as: (Knowledge Graph Searches + Web Searches) × 30 mins. Add a note explaining this methodology, directly beneath the header.`}</CodeBlock>

The agent will generate a downloadable HTML that you can convert to PDF, if needed.

## Export Header Stats

You can include the following metrics in your export header:

| Stat                  | Description                            | Example       |
| --------------------- | -------------------------------------- | ------------- |
| **System**            | The SAP system searched                | ECC 6.0 EHP 7 |
| **Objects available** | Total objects in the knowledge graph    | ~18M+ (demo sandbox) |
| **Queries answered**  | Number of questions addressed          | 4             |
| **Session duration**  | Time from first to last message        | 4 mins        |
| **Est. time saved**   | Estimated manual research time avoided | ~4 hrs        |

### Time Saved Methodology

The estimated time saved is calculated based on typical manual research effort:

| Action                              | Manual Time Estimate |
| ----------------------------------- | -------------------- |
| Knowledge Graph Search (querying SAP objects) | 30 mins              |
| Web Search (finding SAP resources)  | 30 mins              |

**Formula**: Est. time saved = (Knowledge Graph Searches + Web Searches) × 30 mins

This estimate reflects the time a consultant would typically spend navigating SE11/SE80, searching SAP documentation, or browsing community forums to find equivalent information.
