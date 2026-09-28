---
title: Background Job Capabilities
sidebar_position: 1
description: Adri AI agents perform a wide gamut of background jobs (a.k.a. batch jobs) tasks.
---

Adri AI agents perform a wide gamut of background jobs (a.k.a. batch jobs) tasks. The list of capabilities is shown below.

## 1. Job Creation And Scheduling

- Create background jobs programmatically
- Add ABAP report steps to a job
- Add external command steps to a job
- Schedule jobs for immediate execution
- Schedule jobs for a planned future date and time
- Hold jobs in preliminary state before release
- Release held jobs when ready
- Copy an existing job definition into a new job
- Abort a running or scheduled job
- Delete disposable or obsolete jobs

## 2. Parameter And Variant Handling

- Run reports using saved SAP variants
- Discover available variants for a report
- Read the contents of an existing variant
- Create new report variants
- Update existing report variants
- Delete disposable report variants
- Execute reports in background using either variants or inline selection input

## 3. Job Monitoring

- List jobs by name, user, and other filters
- Read background job header details
- Read the step list of a job
- Poll job status efficiently while a job is running
- Distinguish between held, scheduled, running, finished, and aborted states
- Read job start and end timestamps
- Inspect the report or command attached to each step

## 4. Job Log And Runtime Diagnostics

- Read the job log of a background execution
- Tail job logs incrementally for long-running jobs
- Follow runtime progress without re-reading the full log every time
- Inspect failed-job evidence and root-cause details
- Correlate failed jobs with SAP runtime-diagnostic evidence

## 5. Spool And Report Output

- Discover spool requests created by background runs
- Read spool output as raw SAP list output
- Read an existing background job’s produced output directly
- Retrieve report output using the job key
- Retrieve output directly by spool request id
- Delete disposable spool requests
- Export spool content for downstream use
- Read background output for classic list-style reports
- Read background output for many ALV-producing reports through spool evidence

## 6. Operational Recovery

- Re-run failed report workloads safely as new background jobs
- Switch a failing operational run to a proven-good saved variant
- Validate a recovery run with finished-status proof
- Compare failed and successful runs using job-log and spool evidence
- Support “urgent subset” recovery when the broad scheduled run is failing

## 7. Long-Running Workload Support

- Use background execution instead of dialog execution for heavy reports
- Avoid dialog work-process runtime limits for long-running workloads
- Track background execution state until terminal completion
- Capture durable output even when foreground rendering is not practical

## 8. Evidence And Auditability

- Preserve before/after evidence for failed and recovered runs
- Show the exact report, variant, user, and timestamps involved in a job
- Provide SAP-native proof paths through standard job-monitoring and spool views
- Support repeatable validation for demos, operations, and support workflows

## 9. Practical Use Cases

These capabilities are especially useful for:

- nightly finance and collections reporting
- scheduled sales and open-order reporting
- batch operational reporting
- exception handling for failed scheduled runs
- urgent reruns for narrowed business scope
- report-output capture for downstream review or audit

## 10. Important Scope Notes

- The background-job capability set is strongest for SAP-standard report
  scheduling, monitoring, log inspection, and spool/output readback.
- It supports both successful-run proof and failed-run diagnosis.
- It also supports fix-and-rerun operational recovery flows when a safe
  remediation path exists on the live system.
