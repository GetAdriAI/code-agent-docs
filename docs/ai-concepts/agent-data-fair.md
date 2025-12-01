# What data does your agent have?

It's important to understand who has what data so that you can do the following:

- set reasonable expectations
- provide additional data from your end
- get the true productivity gains that AI has to offer

## Prepackaged data

| Data                                                                | Description                                                                                                                                                                                               | Who has it?                             |
| ------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------- |
| Internet data                                                       | LLMs are trained on internet data. From SAP's point of view, this includes SAP community forum, blogs written by community members, etc. Since agents use LLMs, they indirectly have access to this data. | ChatGPT, Adri                           |
| All standard objects for an SAP ERP version and enhancement package | ALL tables, programs, function modules, classes, etc. for ALL modules                                                                                                                                     | SAP-specific agents like Joule and Adri |

## Company-specific data

| Data                                                                                  | Description                                                                                                                                                                                                                                    | Who has it?                                      |
| ------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| Activated business functions (configuration) + Licensed modules + Configured features | Activation Phase (When a client purchases and installs SAP ERP)                                                                                                                                                                                | Can be provided to Adri AI agents                |
| Custom Code Artifacts                                                                 | Besides, as you run your business on SAP ERP, you often create custom code (Z-programs, enhancements, custom tables) to extend the standard functionalities for your specific business needs.                                                  | Can be bulk ingested to Adri AI agents           |
| Documentation                                                                         | Internal Documentation like Technical design documents, coding guidelines, etc. They can be provided to SAP Joule and Adri AI. External System Documentation like API specifications for third-party systems. They can be provided to Adri AI. | Can be bulk ingested to Joule and Adri AI agents |

In order for any agent to truly assist your functional or technical consultant, they should have access to this post-packaged dataset.

The best agents make it easy to provide this information and that's why they truly shine in value add for an enterprise.

When you are deciding which agents to use in your enterprise, check:

- What data they already have?
- How easy is it to provide your own data?
