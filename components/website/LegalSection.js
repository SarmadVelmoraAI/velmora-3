"use client";

import React, { useState } from 'react';

/*
 * LegalSection renders a list of legal documents with dropdowns. Each document
 * can be expanded to show the full text. The `legalDocs` array holds the
 * title and content for each contract or policy. When a user clicks on a
 * title, the corresponding content is toggled. This keeps the footer area
 * clean while still providing access to the full legal agreements.
 */

const legalDocs = [
  {
    title: 'Non‑Disclosure Agreement (NDA)',
    content: `VELMORA AI NON‑DISCLOSURE AGREEMENT (NDA)

This Non‑Disclosure Agreement (“Agreement”) is entered into as of the Effective Date by and between:
Velmora AI LLC, a California Limited Liability Company, with its principal place of business located at [Insert Address] (“Disclosing Party” when providing information, “Receiving Party” when receiving information), and [Client Name], with its principal place of business located at [Insert Address] (“Disclosing Party” when providing information, “Receiving Party” when receiving information).
Velmora AI and Client may be referred to herein individually as a “Party” and collectively as the “Parties.”
Effective Date: [Insert Date]

1. Purpose
The Parties wish to explore and/or engage in one or more business transactions, projects, or services (the “Purpose”), which will require the exchange of certain confidential, proprietary, or sensitive information. This Agreement governs the disclosure and protection of such information.

2. Definition of Confidential Information
2.1 Confidential Information means any and all non‑public, proprietary, technical, business, financial, or other information disclosed in any form (written, oral, electronic, or otherwise) by one Party (“Disclosing Party”) to the other Party (“Receiving Party”), whether before or after the Effective Date, that is designated as confidential or that a reasonable person would understand to be confidential given the nature of the information and the circumstances of disclosure.
2.2 Confidential Information includes, without limitation:
(a) Client lists, customer data, and contact information;
(b) AI models, algorithms, source code, software tools, system configurations, and documentation;
(c) Business strategies, marketing plans, financial projections, and operational methods;
(d) Technical data, trade secrets, know‑how, inventions, and processes;
(e) All notes, analyses, compilations, studies, or other materials prepared by the Receiving Party that contain, reflect, or are derived from Confidential Information.
2.3 Confidential Information does not include information that:
(a) Is or becomes publicly available through no breach of this Agreement;
(b) Is lawfully received from a third party without restriction;
(c) Is independently developed by the Receiving Party without use of or reference to the Disclosing Party’s Confidential Information;
(d) Is approved for release in writing by the Disclosing Party.

3. Obligations of the Receiving Party
3.1 The Receiving Party shall:
(a) Use the Confidential Information solely for the Purpose stated above;
(b) Not disclose, copy, reproduce, distribute, or otherwise make the Confidential Information available to any third party without the prior written consent of the Disclosing Party;
(c) Limit access to the Confidential Information to only those employees, contractors, or agents who have a legitimate need to know for the Purpose and who are bound by confidentiality obligations at least as restrictive as those in this Agreement;
(d) Exercise at least the same degree of care to protect the Confidential Information as it uses to protect its own confidential information of a similar nature, but no less than a commercially reasonable degree of care;
(e) Promptly notify the Disclosing Party in writing if it becomes aware of any unauthorized use or disclosure of the Confidential Information.

4. Compelled Disclosure
If the Receiving Party is legally compelled to disclose any Confidential Information (by court order, subpoena, or applicable law), it shall, to the extent legally permissible, promptly notify the Disclosing Party in writing so that the Disclosing Party may seek a protective order or other remedy. If no protective order or other remedy is obtained, the Receiving Party may disclose only that portion of the Confidential Information which it is legally required to disclose, provided it uses reasonable efforts to preserve confidentiality.

5. Ownership and No License
All Confidential Information remains the sole and exclusive property of the Disclosing Party. No license, right, or interest in any intellectual property of the Disclosing Party is granted to the Receiving Party under this Agreement, whether by implication, estoppel, or otherwise, except for the limited right to use such Confidential Information for the Purpose stated herein.

6. Term and Duration of Confidentiality Obligations
6.1 Term of Agreement
This Agreement shall commence on the Effective Date and remain in effect until terminated by mutual written agreement of the Parties or automatically upon termination of any contractual relationship between the Parties.
6.2 Duration of Confidentiality Obligations
The obligations of confidentiality and non‑use under this Agreement shall survive the termination of this Agreement for one (1) month after such termination date (“Post‑Termination Confidentiality Period”). After the Post‑Termination Confidentiality Period, the Receiving Party is released from further obligations under this Agreement, except with respect to trade secrets, which shall be maintained in confidence for so long as they remain trade secrets under applicable law.

7. Return or Destruction of Confidential Information
Upon termination of this Agreement or upon written request by the Disclosing Party, the Receiving Party shall promptly return or securely destroy all Confidential Information, including all copies, summaries, and derivative materials. At the Disclosing Party’s request, the Receiving Party shall certify in writing that it has complied with the foregoing.

8. Remedies
The Parties acknowledge that any unauthorized use or disclosure of Confidential Information may cause irreparable harm for which monetary damages may be inadequate. Accordingly, in addition to any other remedies available at law or in equity, the Disclosing Party shall be entitled to seek injunctive relief to prevent or curtail any actual or threatened breach of this Agreement, without the necessity of posting bond or proving actual damages.

9. Governing Law and Venue
This Agreement shall be governed by and construed in accordance with the laws of the State of California, without regard to conflict of law principles. Any disputes arising out of or relating to this Agreement shall be resolved exclusively in the state or federal courts located in Orange County, California.

10. Entire Agreement; Amendments
This Agreement constitutes the entire agreement between the Parties concerning the subject matter hereof and supersedes all prior or contemporaneous oral or written communications, understandings, or agreements. This Agreement may be amended only in a writing signed by both Parties.

IN WITNESS WHEREOF, the Parties have executed this Agreement as of the Effective Date:
Velmora AI LLC

By: ___________________________
Name: Sarmad Garawi
Title: Co‑Founder / Owner
Date: _________________________

Client

By: ___________________________
Name: [Client Name]
Title: [Client Title]
Date: _________________________`,
  },
  {
    title: 'Billing and Payment Agreement',
    content: `VELMORA AI BILLING AND PAYMENT AGREEMENT

This Billing and Payment Agreement (“Agreement”) is entered into as of the Effective Date by and between Velmora AI LLC, a California Limited Liability Company with its principal place of business located at [Insert Address] (“Velmora AI” or “Service Provider”), and [Client Name], an entity having its principal place of business at [Client Address] (“Client”). Velmora AI and the Client may hereinafter be referred to individually as a “Party” and collectively as the “Parties.”
Effective Date: [Insert Date]

1. Payment Structure and Terms
1.1 Onboarding/Initial Booking Fee
At the commencement of the contractual relationship, the Client shall remit to Velmora AI a one‑time onboarding or initial booking fee. This amount shall be quoted exclusively by Velmora AI and determined based upon the scope, scale, and complexity of the services required, including but not limited to the level of customization, integrations, and AI deployment architecture necessary for the Client’s operational environment.
1.2 First Month’s Discounted Payment
The Client agrees that the first month’s recurring maintenance fee shall be thirty percent (30%) less than the standard recurring monthly rate, in recognition that certain development and integration costs are absorbed within the onboarding fee. This reduced first month’s charge, together with the onboarding fee, shall constitute the Initial Payment.
1.3 Due Date for Initial Payment
The Initial Payment (onboarding fee + discounted first month) shall be due and payable in full within five (5) business days from the date of execution of this Agreement. For purposes of this Agreement, “business days” shall mean any day other than Saturday, Sunday, or U.S. federal banking holidays, and all times shall be calculated according to Pacific Time (California Time).
1.4 Recurring Monthly Maintenance Fee
Following the Initial Payment, the Client shall remit a recurring maintenance fee as quoted by Velmora AI, due on the fifth (5th) calendar day of each month in Pacific Time (California Time).

2. Late Payment Provisions
2.1 Initial Late Payment Threshold
Should payment not be received by 11:59 PM Pacific Time (California Time) on the 15th day of the calendar month, such payment shall be deemed delinquent and subject to an initial late payment penalty in the amount of One Hundred U.S. Dollars ($100.00).
2.2 Ongoing Penalty Accrual
Beginning at 12:00 AM Pacific Time (California Time) on the 17th day of the same month, and for every two (2) consecutive calendar days thereafter that the delinquent payment remains outstanding, an additional One Hundred U.S. Dollars ($100.00) shall be added to the outstanding balance until the delinquent amount, together with all accrued penalties, is paid in full.
2.3 Automatic Service Suspension After 20 Days Nonpayment
If full payment of the outstanding monthly balance (including all applicable late fees) has not been received by 11:59 PM Pacific Time (California Time) on the twentieth (20th) calendar day of the month in which the payment was due, Velmora AI shall have the unilateral right, without further notice, to immediately suspend or disable all access to the Services and any associated AI systems, platforms, or deliverables provided to the Client until such time as the full amount due is paid in cleared funds.
The Client acknowledges that:
(a) Suspension may result in loss of functionality, interruption of business processes, and inability to access any AI tools, automated systems, or data hosted by Velmora AI.
(b) Velmora AI shall bear no responsibility for any losses, damages, or liabilities incurred by the Client as a result of such suspension.
(c) Restoration of service will occur only after Velmora AI confirms receipt of all outstanding amounts, including applicable late fees and any reactivation or administrative charges assessed at Velmora AI’s discretion.
2.4 Business Day Adjustment for Late Penalties
If the 5th, 15th, or 20th falls on a non‑business day, the due date or suspension trigger date shall be adjusted to the next closest business day, but late fee accruals shall still be calculated based on actual calendar days in Pacific Time (California Time) following the adjusted date.

3. Payment Method and Application of Funds
3.1 Payment Method
All payments under this Agreement shall be addressed and remitted directly to Velmora AI’s designated business banking account as specified in writing by Velmora AI. Velmora AI may, in its sole discretion, accept payment via wire transfer, ACH, or other secure electronic payment methods approved in writing.
3.2 Application of Funds
Payments shall first be applied to outstanding late fees and penalties, next to accrued administrative or reactivation charges, and finally to any unpaid service fees.

4. Non‑Refundability and Payment Disputes
4.1 Non‑Refundability
All amounts paid to Velmora AI are non‑refundable unless otherwise expressly agreed to in writing by Velmora AI.
4.2 Dispute of Charges
In the event the Client disputes any portion of an invoice, the Client must notify Velmora AI in writing within five (5) business days of receipt of such invoice, specifying the nature of the dispute in reasonable detail. Failure to provide timely notice shall constitute a waiver of the right to dispute such charges.

5. Taxes
All amounts payable under this Agreement are exclusive of applicable taxes, duties, or governmental charges. The Client shall be solely responsible for payment of any such taxes, duties, or charges, excluding taxes based on Velmora AI’s net income.

6. Default and Remedies
6.1 Default
Failure of the Client to make any payment when due under this Agreement shall constitute a material breach.
6.2 Remedies
Upon default, Velmora AI may, at its sole discretion:
(a) Suspend or terminate Services in accordance with Section 2.3;
(b) Accelerate all amounts owed under the Agreement, making them immediately due and payable;
(c) Recover from the Client all costs of collection, including reasonable attorneys’ fees, arbitration costs, and court costs.

7. Governing Law and Jurisdiction
This Agreement shall be governed by and construed in accordance with the laws of the State of California without regard to conflict of law principles. Any disputes arising under this Agreement shall be resolved exclusively in a court or binding arbitration located in Orange County, California.

8. Entire Agreement
This Agreement constitutes the entire agreement of the Parties concerning the subject matter herein and supersedes all prior or contemporaneous communications, whether oral or written.

IN WITNESS WHEREOF, the Parties have executed this Agreement as of the Effective Date:
Velmora AI LLC

By: ___________________________
Name: Sarmad Garawi
Title: Co‑Founder / Owner
Date: _________________________

Client

By: ___________________________
Name: [Client Name]
Title: [Client Title]
Date: _________________________`,
  },
  {
    title: 'Service Agreement',
    content: `VELMORA AI SERVICE AGREEMENT

This Service Agreement (the "Agreement") is entered into as of [Insert Date] (the "Effective Date"), by and between Velmora AI LLC, a California Limited Liability Company, with its principal place of business located at [Insert Address] ("Velmora AI" or "Service Provider"), and [Client Name], a business entity organized and existing under the laws of [Client’s jurisdiction], with its principal place of business located at [Client Address] ("Client"). Velmora AI and Client are collectively referred to as the “Parties” and individually as a “Party.”

Effective Date: [Insert Date]

1. Scope of Services
1.1 Provision of Services
Velmora AI agrees to provide the Client with artificial intelligence‑based services that are designed to optimize and enhance the Client's business operations through advanced automation, machine learning, data analysis, and natural language processing (NLP) models. These services are intended to address various operational challenges faced by the Client, such as improving lead generation, automating routine communications (emails, chatbots), streamlining scheduling, analyzing data more effectively, and automating repetitive tasks. The AI tools provided will be tailored to meet the specific needs of the Client, based on the business objectives outlined during the initial consultation phase. The nature of the Services to be provided will be specified in the attached scope of work or proposal document, which will be further detailed as the Parties move forward in the collaboration.
1.2 Modification and Enhancement of Services
The Client acknowledges that Velmora AI's technology is continuously evolving. As new tools, technologies, or improvements become available, Velmora AI may update or modify the Services to ensure they remain at the forefront of the industry and meet the Client’s evolving business needs. Such modifications may include the introduction of new features, additional integrations with third‑party software, or enhancements to existing machine learning models. Any substantial changes to the Services that may affect pricing or the scope of work will be discussed and mutually agreed upon before implementation. Velmora AI reserves the right to propose such modifications at its discretion, but these will only be implemented upon the Client’s approval.
1.3 Client’s Obligations
To ensure successful implementation and ongoing operation of the Services, the Client agrees to provide Velmora AI with access to necessary data, systems, and infrastructure. This may include providing access to internal databases, third‑party platforms, and any other resources that Velmora AI requires to effectively deploy and integrate the AI solutions. The Client also agrees to assign internal resources to work with Velmora AI’s team to facilitate proper setup, testing, and deployment of the Services. The Client shall ensure that these resources are adequately trained and informed about the ongoing needs of the Services to avoid delays in implementation.
1.4 Use and Restrictions
The Client agrees to use the Services exclusively for the intended business purposes outlined in this Agreement. The Client may not sublicense, assign, sell, transfer, or otherwise distribute rights to use the Services to any third party without prior written consent from Velmora AI. Furthermore, the Client is prohibited from reverse‑engineering, decompiling, or disassembling any AI models, algorithms, or software components provided under this Agreement. The Services are intended for the Client's internal business operations, and any unauthorized use may result in the immediate termination of the Agreement and the cessation of access to the Services.
1.5 Performance Metrics and Reporting
Velmora AI will provide regular performance reports to the Client detailing how well the AI systems are performing in relation to predefined key performance indicators (KPIs). These reports will provide insights into the efficiency, effectiveness, and value derived from the Services, including metrics on system uptime, processing speed, accuracy of AI outputs, and the overall impact on business operations. The Client may request additional reporting or specific metrics at any time during the term of the Agreement, and Velmora AI will work to accommodate these requests to the best of its ability.

2. Scope of AI Limitations
2.1 Inherent Limitations
The Client acknowledges that artificial intelligence, by its nature, is subject to inherent limitations, including but not limited to, errors, inaccuracies, and biases within machine learning models. Velmora AI will use commercially reasonable efforts to mitigate these limitations, but the Client understands that these tools are not infallible and may not always deliver flawless performance or meet all expectations.
2.2 AI as a Decision Support Tool
The Parties agree that the AI systems provided by Velmora AI are intended to support and enhance decision‑making by processing large volumes of data and providing insights that can guide business decisions. However, the Client acknowledges that AI‑generated outputs are purely advisory and do not replace the need for human judgment, particularly in critical areas such as financial, legal, medical, and compliance matters. The Client agrees to use the AI outputs only as part of a broader decision‑making process that includes input from relevant experts and stakeholders. Velmora AI makes no representations that the AI will fully replace human oversight or judgment in any capacity.
2.3 Hallucinations and Output Errors
The Client further acknowledges that AI models may produce “hallucinations,” which are outputs that are false or fabricated, presented by the AI as factual information. While every effort is made to mitigate the likelihood of such errors, they are a known limitation of AI systems, especially in complex or unstructured data environments. The Client agrees to validate all AI outputs before taking action based on them and acknowledges that Velmora AI shall not be liable for any damages or losses resulting from reliance on AI‑generated hallucinations.
2.4 Indemnification for Errors
The Client agrees to indemnify and hold Velmora AI harmless from any claims, losses, or damages arising from reliance on AI outputs that result in errors or misjudgments. This includes any indirect, consequential, or punitive damages that the Client may incur due to the reliance on inaccurate or flawed outputs generated by the AI system.
2.5 Resolution of System Failures
In the event that the AI system fails to meet the agreed‑upon performance standards, Velmora AI will work collaboratively with the Client to identify the root cause of the issue and resolve it. This may include re‑training models, revising algorithms, or implementing patches or updates to the system. However, the Client acknowledges that AI is an evolving technology, and occasional underperformance or failure of the system is to be expected, especially in the early stages of deployment.

3. Data Privacy, Confidentiality, and Security
3.1 Data Privacy Obligations
Velmora AI takes the privacy and confidentiality of Client Data very seriously. In addition to complying with all applicable laws, including but not limited to the California Consumer Privacy Act (CCPA), the General Data Protection Regulation (GDPR), and other data privacy laws, Velmora AI shall implement all necessary technical and organizational measures to ensure that Client Data is protected from unauthorized access, use, disclosure, alteration, or destruction. These measures will include regular audits, secure storage practices, and adherence to industry best practices in cybersecurity.
3.2 Use and Ownership of Client Data
All data provided by the Client to Velmora AI shall remain the exclusive property of the Client. Velmora AI shall not use Client Data for any purpose other than for the performance of the Services as set forth in this Agreement. The Client acknowledges that Velmora AI may aggregate or anonymize certain data for the purposes of improving the AI models or generating industry insights, but such use will not include identifiable Client information unless express consent is given.
3.3 Security Measures and Risk Management
Velmora AI will implement comprehensive security protocols to ensure that all Client Data is securely processed and stored. These protocols include, but are not limited to, encryption of data, secure storage, role‑based access control, multi‑factor authentication, and regular vulnerability assessments. Velmora AI will also conduct regular risk assessments to evaluate potential threats to Client Data and will take appropriate steps to mitigate those risks.
3.4 Notification of Breach
In the event of a data breach or other security incident that compromises Client Data, Velmora AI shall notify the Client within [insert number] days of discovering the breach. Velmora AI will provide the Client with a detailed description of the breach, the data affected, and any actions taken to remedy the situation. In the event that notification is required to be made to regulatory authorities or affected individuals, Velmora AI will assist the Client in fulfilling its legal obligations.
3.5 Data Retention and Disposal
Velmora AI shall retain Client Data for only as long as necessary to provide the Services and to comply with applicable legal or regulatory requirements. Upon the expiration or termination of this Agreement, Velmora AI shall return or securely destroy all Client Data within its possession, at the Client’s discretion, and in accordance with the Client’s instructions.
3.6 Third‑Party Data Processors
Velmora AI may engage third‑party vendors or service providers to assist in the performance of the Services. Velmora AI agrees to ensure that these third parties are bound by confidentiality agreements and are required to implement the same or greater security measures as outlined in this Agreement. Velmora AI shall be responsible for ensuring that any third‑party service providers comply with these obligations.

4. Force Majeure
4.1 Definition of Force Majeure
Neither Party shall be held liable for any failure or delay in performance under this Agreement caused by a Force Majeure Event, which includes, but is not limited to, acts of God, natural disasters, war, terrorism, pandemics, labor strikes, governmental actions, and other events outside the reasonable control of the affected Party.
4.2 Notification of Force Majeure
In the event of a Force Majeure Event, the affected Party shall promptly notify the other Party and shall take all reasonable steps to mitigate the effects of the event and resume performance of its obligations under this Agreement as soon as reasonably possible. Failure to notify the other Party promptly of the occurrence of a Force Majeure Event may result in the waiver of such a defense.
4.3 Termination for Extended Force Majeure
If the Force Majeure Event continues for a period of [insert number] days, either Party may terminate this Agreement upon written notice to the other Party without incurring liability. The termination shall not relieve either Party of any obligations incurred prior to the Force Majeure Event.

5. Confidentiality
5.1 Confidential Information
During the term of this Agreement, each Party may receive or have access to confidential information, which includes proprietary business information, technical data, trade secrets, and other sensitive information belonging to the other Party. Both Parties agree to maintain the confidentiality of such information and not to disclose it to any third party without prior written consent, except as otherwise required by law.
5.2 Exceptions to Confidential Information
Confidential Information does not include information that (i) was publicly available at the time of disclosure, (ii) becomes publicly available without a breach of this Agreement, (iii) is lawfully obtained from a third party without restriction, or (iv) is independently developed by the receiving Party without the use of the disclosing Party’s Confidential Information.
5.3 Duration of Confidentiality
The confidentiality obligations outlined in this Agreement shall remain in effect for the duration of the Agreement. Upon termination of this Agreement, the receiving Party shall continue to maintain the confidentiality of the disclosing Party's confidential information for a period of one month following the termination of this Agreement. After this one‑month period, the confidentiality obligations will cease, and the receiving Party will no longer be bound by the terms set forth in this Confidentiality clause, unless otherwise agreed to in writing.
5.4 Return or Destruction of Confidential Information
Upon termination of this Agreement, or upon the disclosing Party’s written request, the receiving Party shall promptly return or destroy all confidential information in its possession.

6. Non‑Solicitation and Non‑Compete
6.1 Non‑Solicitation of Employees
During the term of this Agreement and for a period of [insert number] years following its termination, neither Party shall, without the prior written consent of the other Party, solicit or hire any employee, contractor, or consultant who is employed or contracted by the other Party and who has worked directly on the Services provided under this Agreement.
6.2 Non‑Compete Clause
During the term of this Agreement and for a period of [insert number] years following its termination, the Client agrees not to develop, sell, or provide AI‑powered tools or systems that directly compete with Velmora AI’s Services within the geographic regions where Velmora AI operates. This non‑compete obligation does not preclude the Client from developing or using other technology that does not directly conflict with Velmora AI’s proprietary models.

7. Warranties and Representations
7.1 Velmora AI Warranties
Velmora AI warrants that it has the necessary authority and capability to provide the Services under this Agreement, and that such Services will be performed in a professional, workmanlike manner and in accordance with industry standards.
7.2 Client Warranties
The Client warrants that it has all necessary rights to provide the data and materials for the performance of the Services, and that such data does not infringe on any third‑party intellectual property rights. The Client also warrants that it will comply with all applicable laws, including data protection laws, in the use of the Services.
7.3 Disclaimers
Velmora AI does not provide any express or implied warranty as to the results or outcomes of the AI Services, and the Client agrees that any reliance on the AI outputs is at its own risk. Velmora AI is not responsible for any damages or losses incurred from the use of AI‑generated outputs.

8. Publicity and Marketing
8.1 Use of Names and Trademarks
Neither Party shall use the name, logo, or trademarks of the other Party without the prior written consent of the other Party. Such consent will not be unreasonably withheld if required for the performance of the Agreement.
8.2 Marketing and Case Studies
Velmora AI may, with the prior written consent of the Client, reference the Client as a customer in its marketing materials, case studies, and press releases. The Client may request to review and approve any such marketing materials before they are published.

9. Dispute Resolution
9.1 Good Faith Negotiations
The Parties agree that any dispute, controversy, or claim arising out of or relating to this Agreement shall first be addressed through good faith negotiation. Each Party shall designate a representative to engage in discussions to resolve the dispute.
9.2 Arbitration
If the dispute is not resolved through negotiation within [insert number] days, the Parties agree to submit the matter to binding arbitration in [insert location], pursuant to the rules of the American Arbitration Association. The decision of the arbitrator shall be final and binding.
9.3 Attorney’s Fees
In the event of arbitration or litigation, the prevailing Party shall be entitled to recover reasonable attorney’s fees, costs, and other expenses incurred in connection with the dispute.

10. Miscellaneous Provisions
10.1 Entire Agreement
This Agreement constitutes the entire understanding between the Parties with respect to its subject matter and supersedes all prior and contemporaneous agreements, whether oral or written, relating to the same subject matter.
10.2 Amendment
This Agreement may only be amended or modified in writing, executed by both Parties. No verbal communications or other informal agreements shall have any binding effect.
10.3 Waiver
Any waiver of rights or terms under this Agreement shall be effective only if made in writing and signed by the Party granting the waiver. The failure or delay of either Party to exercise any right, power, or privilege under this Agreement shall not constitute a waiver of such right.

IN WITNESS WHEREOF, the Parties have executed this Agreement as of the Effective Date.
Velmora AI LLC
By: ___________________________
Name: Sarmad Garawi
Title: Co‑Founder / Owner
Date: _________________________

Client
By: ___________________________
Name: [Client Name]
Title: [Client Title]
Date: _________________________`,
  },
  {
    title: 'Data Processing Agreement',
    content: `VELMORA AI DATA PROCESSING AGREEMENT

This Data Processing Agreement (“Agreement”) is entered into as of the Effective Date set forth below by and between Velmora AI LLC, a California Limited Liability Company with its principal place of business at [Insert Address] (“Velmora AI” or “Processor”), and [Client Name], with its principal place of business at [Client Address] (“Client” or “Controller”). Velmora AI and Client may be referred to herein collectively as the “Parties” and individually as a “Party.”
This Agreement is incorporated into and forms part of the Service Agreement between the Parties. In the event of a conflict between this Agreement and the Service Agreement, the terms of this Agreement shall govern with respect to data processing matters.

Effective Date: [Insert Date]

1. Purpose and Scope
1.1 This Agreement establishes the rights and obligations of the Parties in relation to the processing of Client Data in the course of providing AI‑powered automation, analytics, and related services (“Services”) by Velmora AI.
1.2 The Parties acknowledge and agree that the Client acts as the “Data Controller” (as defined under applicable law) and Velmora AI acts as the “Data Processor,” processing Client Data strictly under the Controller’s documented instructions.
1.3 Velmora AI shall process Client Data solely for the purposes of delivering, maintaining, and enhancing the Services for the Client’s direct business benefit, and shall not use Client Data for any independent commercial purpose, research, or development unrelated to the Services without prior written authorization from the Client.
1.4 This Agreement applies to all data provided directly by the Client, collected automatically through the use of the Services, or otherwise processed by Velmora AI on the Client’s behalf.

2. Data Ownership and Control
2.1 All rights, title, and interest in and to Client Data remain the exclusive property of the Client. Nothing in this Agreement transfers ownership of Client Data to Velmora AI.
2.2 Velmora AI’s rights to Client Data are strictly limited to those necessary to perform the Services under the Service Agreement.
2.3 The Client remains solely responsible for ensuring that the collection and provision of Client Data to Velmora AI comply with all applicable laws and regulations, including obtaining any necessary consents and providing required notices to data subjects.

3. Permitted Data Processing Activities
3.1 Velmora AI shall process Client Data only in accordance with the Client’s documented instructions, including but not limited to:
(a) Secure storage, hosting, and backup of data;
(b) Execution of AI models, machine learning algorithms, and automation workflows;
(c) Generating reports, recommendations, predictions, and communications necessary to fulfill the Services;
(d) Performance monitoring, error detection, and optimization of AI systems for the Client’s benefit.
3.2 Velmora AI shall not:
Sell, rent, or disclose Client Data to any third party for unrelated purposes;
Use Client Data to create or train AI systems for third parties without written consent;
Combine Client Data with other client data for unrelated profiling or analytics.

4. Confidentiality Obligations
4.1 Velmora AI shall ensure that all personnel, contractors, and subprocessors with access to Client Data are bound by confidentiality obligations no less protective than those set forth herein.
4.2 Confidentiality obligations shall survive the termination of this Agreement and shall remain in effect for one (1) month after the end of the Service Agreement, unless a longer period is required by law.

5. Security Measures
5.1 Velmora AI shall implement appropriate administrative, physical, and technical safeguards designed to protect Client Data from unauthorized access, alteration, disclosure, or destruction.
5.2 Security measures shall include, at a minimum:
Encryption of data at rest and in transit;
Access controls with role‑based permissions;
Multi‑factor authentication for administrative access;
Regular vulnerability scanning and security patching;
Incident logging and monitoring.

6. Data Breach Notification and Response
6.1 In the event of a confirmed “Data Breach” (meaning unauthorized acquisition, access, use, or disclosure of Client Data), Velmora AI shall notify the Client without undue delay, and no later than 72 hours after becoming aware of the breach.
6.2 The notification shall include:
(a) The nature and scope of the breach;
(b) The categories and approximate number of data subjects affected;
(c) The categories and approximate number of data records involved;
(d) The likely consequences of the breach; and
(e) Measures taken or proposed to address the breach and mitigate potential adverse effects.
6.3 Velmora AI shall cooperate fully with the Client in investigating, containing, and remediating any breach, including providing access to relevant records and personnel as reasonably necessary.

7. Data Retention and Deletion
7.1 Velmora AI shall retain Client Data only for as long as necessary to perform the Services or as required by applicable law.
7.2 Upon termination or expiration of the Service Agreement, Velmora AI shall, at the Client’s option, either:
(a) Return all Client Data in a commonly used, secure, and structured format; or
(b) Permanently delete all Client Data from its systems and provide written confirmation of deletion.

8. Subprocessing
8.1 Velmora AI may engage third‑party subprocessors to assist in providing the Services, provided that:
(a) Such subprocessors are contractually bound to comply with obligations no less protective than those set forth herein;
(b) Velmora AI maintains a list of subprocessors used and provides it to the Client upon request; and
(c) Velmora AI remains fully responsible for the acts and omissions of its subprocessors.

9. Cross‑Border Data Transfers
9.1 To the extent Client Data is transferred outside the jurisdiction in which it was originally collected, Velmora AI shall ensure such transfers are conducted in compliance with applicable data protection laws, including the execution of standard contractual clauses or other approved transfer mechanisms.

10. Audit and Compliance Rights
10.1 Upon reasonable written notice, the Client may request documentation demonstrating Velmora AI’s compliance with this Agreement.
10.2 Velmora AI may satisfy audit requests by providing third‑party certifications, audit reports, or summaries of security practices.

11. Indemnification
11.1 Each Party shall indemnify, defend, and hold harmless the other Party against all claims, damages, liabilities, costs, and expenses (including reasonable attorneys’ fees) arising from or related to any breach of this Agreement caused by the indemnifying Party’s failure to comply with its obligations hereunder.

12. Force Majeure
12.1 Neither Party shall be liable for any failure or delay in performance under this Agreement caused by events beyond its reasonable control, including acts of God, natural disasters, labor disputes, governmental actions, or interruptions in Internet or communication services, provided that the affected Party promptly notifies the other Party and makes reasonable efforts to resume performance.

13. Governing Law
13.1 This Agreement shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of laws principles.

IN WITNESS WHEREOF, the Parties have executed this Data Processing Agreement as of the Effective Date.
Velmora AI LLC
By: ___________________________
Name: Sarmad Garawi
Title: Co‑Founder / Owner
Date: _________________________

Client
By: ___________________________
Name: [Client Name]
Title: [Client Title]
Date: _________________________`,
  },
  {
    title: 'Change Order Agreement',
    content: `VELMORA AI CHANGE ORDER AGREEMENT

This Change Order Agreement (“Agreement”) is entered into as of the last date signed below, by and between Velmora AI LLC, a California Limited Liability Company with its principal place of business at [Insert Address] (“Velmora AI” or “Service Provider”), and [Client Name], an individual or entity with its principal place of business at [Client Address] (“Client”). Velmora AI and Client may be referred to herein collectively as the “Parties” and individually as a “Party.”
This Agreement shall serve as a binding modification to the original Service Agreement executed between the Parties on [Insert Original Agreement Date] (“Original Agreement”). Except as specifically amended herein, all terms, conditions, covenants, and obligations of the Original Agreement shall remain in full force and effect.

Effective Date: [Insert Date]

1. Definitions
1.1 “Monthly Maintenance Fee” shall mean the recurring payment amount owed by the Client to Velmora AI for ongoing maintenance, support, and continued operation of the services outlined in the Original Agreement, as adjusted pursuant to this Agreement.
1.2 “Business Day” shall mean any calendar day excluding Saturdays, Sundays, and all official federal or California state holidays. If a scheduled payment date falls on a day that is not a Business Day, the payment shall be due on the next immediate Business Day.
1.3 “Change Order” shall mean a modification to the scope, scale, functionality, or type of services being provided to the Client, whether such modification results in an increase, decrease, or no change in the Monthly Maintenance Fee.

2. Purpose and Scope
2.1 This Agreement memorializes the mutual understanding between the Parties regarding adjustments to the services being provided under the Original Agreement, and any corresponding adjustment to the Monthly Maintenance Fee.
2.2 This Agreement applies to:
(a) Changes resulting in an increased Monthly Maintenance Fee;
(b) Changes resulting in a decreased Monthly Maintenance Fee; and
(c) Changes that do not impact the Monthly Maintenance Fee but alter the nature of the services being provided.
2.3 No Change Order shall be valid or enforceable unless executed in writing by both Parties in accordance with the terms set forth herein.

3. Increases to Monthly Maintenance Fee
3.1 Where the Client requests an increase in the scope of services that will result in an increase to the Monthly Maintenance Fee, Velmora AI shall provide the Client with a formal written quotation specifying the revised monthly amount and detailing the basis of such calculation.
3.2 The revised Monthly Maintenance Fee shall take effect beginning on the Client’s next regularly scheduled payment date under the Original Agreement. The Parties expressly agree that no expanded services will be implemented, deployed, or made available until such time as Velmora AI has received full payment of the newly quoted Monthly Maintenance Fee on the applicable payment date.
3.3 The Client acknowledges that, due to the operational and technical nature of the services provided, Velmora AI must incur preparatory costs in advance of implementation, and that failure to remit timely payment will result in no obligation on the part of Velmora AI to provide the expanded services.

4. Decreases to Monthly Maintenance Fee
4.1 If the Client requests a reduction in the scope of services, resulting in a lower Monthly Maintenance Fee, Velmora AI shall issue a written confirmation reflecting the new amount.
4.2 Any requested services to be removed will not be discontinued until the next scheduled payment date, regardless of the date on which the Client makes such a request. For example, if the Client requests a reduction on the 15th day of the month, the discontinued service(s) will be removed on the next payment date, which is the 5th of the following month.
4.3 The Client acknowledges that they remain responsible for paying the full Monthly Maintenance Fee up to and including the next scheduled payment date, even if the request for service reduction is made prior to such date.

5. Changes with No Effect on Monthly Maintenance Fee
5.1 If a requested change to the services will not alter the Monthly Maintenance Fee, Velmora AI shall document such change in writing, and the Client shall execute this Agreement as formal acknowledgment.
5.2 In such cases, the payment schedule and Monthly Maintenance Fee under the Original Agreement shall remain unchanged, but the modified services shall take effect on the next scheduled payment date.

6. Payment Terms and Due Dates
6.1 The Parties reaffirm that all monthly payments are due on the 5th day of each calendar month, as set forth in the Original Agreement.
6.2 If the 5th day falls on a non‑Business Day, payment shall be due on the immediately preceding or following Business Day, as determined by Velmora AI in its sole discretion.
6.3 The payment method shall remain as designated in the Original Agreement unless otherwise agreed in writing.

7. Notices
7.1 All communications, approvals, and notices required under this Agreement shall be made in writing and delivered by one of the following methods:
(a) Personal delivery;
(b) Certified mail, return receipt requested;
(c) Recognized overnight courier; or
(d) Electronic mail to the authorized contact addresses on record for each Party.
7.2 Notices shall be deemed received:
Upon actual delivery if sent by personal delivery;
Three (3) Business Days after deposit if sent by certified mail;
One (1) Business Day after dispatch if sent by overnight courier; or
Upon confirmation of transmission if sent by email.

8. Binding Effect
8.1 This Agreement shall be binding upon and inure to the benefit of the Parties hereto, as well as their respective successors, assigns, and legal representatives.
8.2 This Agreement shall be construed in harmony with the Original Agreement. In the event of a conflict between this Agreement and the Original Agreement, the terms of this Agreement shall govern solely with respect to the subject matter herein.

9. Governing Law and Venue
9.1 This Agreement shall be governed by and construed in accordance with the laws of the State of California without regard to conflict of law principles.
9.2 Any disputes arising from or related to this Agreement shall be resolved exclusively in the state or federal courts located in the County of Orange, California, and the Parties consent to the personal jurisdiction of such courts.

IN WITNESS WHEREOF, the Parties have executed this Change Order Agreement as of the dates set forth below.
Velmora AI LLC

By: ___________________________
Name: Sarmad Garawi
Title: Co‑Founder / Owner
Date: _________________________

Client

By: ___________________________
Name: [Client Name]
Title: [Client Title]
Date: _________________________`,
  },
];

export default function LegalSection() {
  const [openIndex, setOpenIndex] = useState(null);
  return (
    <div className="mt-8">
      <h4 className="font-semibold text-white mb-4">Legal</h4>
      <div className="space-y-3">
        {legalDocs.map((doc, idx) => (
          <div key={idx}>
            <button
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              className="w-full text-left text-slate-300 hover:text-white focus:outline-none"
            >
              {doc.title}
            </button>
            {openIndex === idx && (
              <div className="mt-2 text-slate-300 text-sm whitespace-pre-wrap bg-slate-800 p-4 rounded">
                {/*
                 * Remove any trailing signature sections.  Each legal
                 * document includes a sign‑off at the bottom (the “IN
                 * WITNESS WHEREOF …” section with signature blanks).  To
                 * avoid displaying that portion to end users, strip
                 * everything from the “IN WITNESS” phrase to the end of
                 * the document.  The regular expression below is case
                 * insensitive and matches the phrase and all following
                 * characters, ensuring that the legal agreements end
                 * cleanly without the signature lines.
                 */}
                {doc.content
                  .replace(/IN\s+WITNESS[\s\S]*$/i, '')
                  .trim()}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}