# Parallel Tool Calls

To increase the speed of research, SAP Research Agent supports parallel tool calls. When instructed, the agent can execute multiple operations simultaneously rather than sequentially.

## How It Works

SAP Research Agent has access to several key capabilities:

| Capability | Description |
| :--------- | :---------- |
| System Validation | Queries the attached SAP system using ChromaSQL to verify objects and configurations |
| Web Search | Searches the internet for SAP solutions, best practices, and similar use cases |
| Document Processing | Reads uploaded attachments and optionally adds them to the knowledge graph for future reference |

To enable parallel execution, explicitly instruct the agent to run tasks simultaneously. For example:

- "Search the web **and** validate in my system **in parallel**"
- "Query both ECC and S/4HANA systems **at the same time**"
- "Process this document **while** searching for related objects"

## Benefits

- **Faster responses**: Parallel execution reduces overall research time
- **Comprehensive results**: Multiple sources are queried in a single pass
- **Efficient resource usage**: The agent optimizes tool calls based on your instructions

## Example

Instead of asking:
> "What's the best practice for implementing partial goods receipt, and does my system support it?"

Be explicit about parallel execution:
> "Search the web for partial goods receipt best practices **and in parallel** check my SAP system for relevant configuration options and transaction codes."

The agent will then simultaneously:
1. Search the web for partial goods receipt best practices
2. Query your SAP system for relevant configuration options and transaction codes

This parallel approach delivers a complete answer faster than sequential processing.
