# Semantic Search

When building an AI agent, semantic search is one of the most important tools for enabling the system to "understand" meaning rather than just match keywords.
But behind the scenes, semantic search involves two very different types of activities:

---

## 1. One-Time Activities (Done by Tool Developers)

These steps happen once during system setup and form the foundation for all future semantic searches:

### Create Embeddings

All documents or knowledge sources are converted into embeddings — numerical vectors that capture the semantic meaning of content.

### Build a Vector Space

These embeddings are placed into a multi-dimensional "map of meaning" where semantically similar content sits closer together.

### Store Embeddings in a Vector Database

The vector DB is optimized for similarity search.
This is where all embeddings live and can be retrieved efficiently.

### (Optional) Define a Query Language for the Vector DB

Some systems define a custom or SQL-like query language to interact with the vector database.
This standardizes how the agent expresses searches.

All of this is foundational work. It only needs to be done once.

---

## 2. Per-Run Activities (What Happens Every Time the User Asks a Question)

Once the system is set up, each search request follows this repeatable workflow:

### 1. User asks a question

The agent receives a natural-language query.

### 2. The question is converted into the vector DB's query language

This includes generating an embedding for the user query and wrapping it in a vector-aware search instruction.

### 3. The vector DB performs a similarity search

The DB looks for embeddings that are closest to the query vector in the vector space.

### 4. The vector DB returns the top matching results

The agent then uses these results to formulate the final response to the user.

This cycle repeats for every user query.
