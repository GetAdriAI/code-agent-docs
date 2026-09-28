---
tags: [code-agent]
authors: [dc]
date: 2026-01-01
---

# Research Notes: Building a high-performant ABAP coding agent

I have been using the most powerful coding models for ABAP coding for quite some time now. It's painful, but I persevere because this is how I learn the shortcomings of the models to build a coding agent that actually works.

<figure>
  <img src="/img/code-agent-error-log.png" alt="ABAP error log" />
  <figcaption style={{textAlign: "center", fontStyle: "italic"}}>ABAP error log example</figcaption>
</figure>

Here's what months of research have taught me, in just a few sentences.

<!-- truncate -->

## Two Strategies for Building a Better Agent

### Proactive: Prevent Errors Before They Happen

Can we stop an agent from making the same mistake twice?

The idea is appealing. If the model messed up once, teach it not to do it again. But so far, the results have been disappointing. Models don't retain corrections the way you'd hope.

### Reactive: Recover After the Error

Can we ensure that when an error does happen, the agent fixes it itself?

This approach has shown much better results. I'm hopeful we can make significant improvements here.

## Creating a Synthetic Dataset

When a model makes a mistake, I ask it to document what went wrong and what fixed it. The prompt looks something like this:

> "Throughout our conversation, you implemented wrong syntax many times and repeated some mistakes as well. Document all the mistakes that you did such that when I provide this list of mistakes next time, you don't repeat these mistakes..."

This generates a dataset of errors and their corrections. But it raises questions: How many fixed code samples should I generate for each error? Does quantity affect the recovery strategy? These are still open problems.

## Looming Problems

**Scaling** — How do we capture a meaningful percentage of the errors a model makes?

**Cost** — How much money do we spend on capturing these errors and building synthetic datasets?

**Regression** — Every model makes different mistakes. The errors I've catalogued for one model may be completely irrelevant for the next release. It's a moving target.

We are in the final few weeks before we show the world how we are solving these problems in our Code Agent. Very excited and also very nervous.
