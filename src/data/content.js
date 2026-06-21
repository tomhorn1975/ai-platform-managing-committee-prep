export const topics = [
  { id: 'exec-comm', title: 'Executive Communication', icon: '🎯', color: 'indigo', desc: 'How to speak confidently to management committees' },
  { id: 'ai-portal', title: 'AI Portal', icon: '🏛️', color: 'blue', desc: 'Centralized platform for AI discovery, access & governance' },
  { id: 'gen-ai', title: 'Generative AI', icon: '✨', color: 'purple', desc: 'LLMs and generative models for banking use cases' },
  { id: 'machine-learning', title: 'Machine Learning', icon: '🧠', color: 'green', desc: 'Predictive models, MLOps & ML pipelines' },
  { id: 'doc-intelligence', title: 'Document Intelligence', icon: '📄', color: 'orange', desc: 'Automated document processing & data extraction' },
  { id: 'platform-strategy', title: 'Platform Strategy', icon: '🚀', color: 'red', desc: 'Team mission, roadmap & strategic vision' },
]

export const colorMap = {
  indigo: { bg: 'bg-indigo-50', border: 'border-indigo-200', badge: 'bg-indigo-100 text-indigo-800', header: 'bg-indigo-700', light: 'bg-indigo-100', text: 'text-indigo-700', ring: 'ring-indigo-300' },
  blue: { bg: 'bg-blue-50', border: 'border-blue-200', badge: 'bg-blue-100 text-blue-800', header: 'bg-blue-600', light: 'bg-blue-100', text: 'text-blue-700', ring: 'ring-blue-300' },
  purple: { bg: 'bg-purple-50', border: 'border-purple-200', badge: 'bg-purple-100 text-purple-800', header: 'bg-purple-600', light: 'bg-purple-100', text: 'text-purple-700', ring: 'ring-purple-300' },
  green: { bg: 'bg-green-50', border: 'border-green-200', badge: 'bg-green-100 text-green-800', header: 'bg-green-600', light: 'bg-green-100', text: 'text-green-700', ring: 'ring-green-300' },
  orange: { bg: 'bg-orange-50', border: 'border-orange-200', badge: 'bg-orange-100 text-orange-800', header: 'bg-orange-600', light: 'bg-orange-100', text: 'text-orange-700', ring: 'ring-orange-300' },
  red: { bg: 'bg-red-50', border: 'border-red-200', badge: 'bg-red-100 text-red-800', header: 'bg-red-600', light: 'bg-red-100', text: 'text-red-700', ring: 'ring-red-300' },
}

export const flashcards = {
  'exec-comm': [
    { q: 'What does BLUF stand for and why does it matter?', a: 'Bottom Line Up Front. Executives have limited time and need your conclusion or ask stated first — before the details. If you bury the point, they will interrupt or tune out.' },
    { q: 'What is the Situation-Complication-Resolution (SCR) framework?', a: 'A three-part message structure: Situation (where we are today), Complication (what challenge or opportunity this creates), Resolution (what we are doing about it and what we need). Use this to structure every executive update.' },
    { q: 'What is the "So What?" test?', a: 'Before every point you make, ask "so what does this mean for the business?" If you cannot answer that, cut the point or reframe it. Executives think in business outcomes, not technical milestones.' },
    { q: 'What does the CFO care about most in an AI presentation?', a: 'ROI and cost control: What will this cost? What will it save or earn? When do we see returns? How does it compare to alternatives? Always anchor your ask in financial terms.' },
    { q: 'What does the CRO care about most in an AI presentation?', a: 'Risk and control: Can AI make a bad decision that harms customers or the bank? Are we compliant with SR 11-7 and fair lending rules? What are the failure modes and how do we catch them?' },
    { q: 'What does the CEO care about most in an AI presentation?', a: 'Competitive position and strategic alignment: Are we ahead of or behind peers? Does this support the bank\'s strategy? What is the headline outcome? They want confidence, not detail.' },
    { q: 'What does the COO care about most in an AI presentation?', a: 'Operational impact: Will this disrupt running the bank? What changes for employees? How do we manage the transition? Is this reliable enough to depend on?' },
    { q: 'What does the Chief Compliance Officer care about most?', a: 'Regulatory exposure: Are we following SR 11-7, ECOA, FCRA, and other applicable rules? Can we explain every AI decision to a regulator? Is there an audit trail?' },
    { q: 'How should you open a management committee presentation?', a: 'State the purpose and ask in the first 30 seconds: "Today I am here to update you on [topic] and seek approval for [ask]." Never open with background or context — open with why you are in the room.' },
    { q: 'What do you say when an executive asks a question you cannot answer?', a: '"That is an important question. Rather than give you an estimate, let me get you the precise answer by [specific date]." Never guess or bluff. Offering a concrete follow-up date protects your credibility.' },
    { q: 'Name three phrases executives want to hear in an AI update.', a: '"The business case is..." / "Risk is managed by..." / "We will have measurable results by [date]." These phrases signal you think in outcomes, not technology.' },
    { q: 'Name three things to avoid when presenting to executives.', a: 'Jargon without explanation (LLM, RAG, feature engineering), vague timelines ("soon" or "in the coming months"), and burying the ask at the end after 20 minutes of context.' },
    { q: 'How do you handle a hostile or skeptical executive in a meeting?', a: 'Do not get defensive. Say "I understand that concern — let me address it directly." Then answer calmly with facts. Acknowledge the concern as legitimate before countering it.' },
    { q: 'What is the rule for slides in an executive presentation?', a: 'One idea per slide. Lead with the headline takeaway, not a title. Executives read the headline and decide whether to engage with the slide — make the headline do the work.' },
    { q: 'How do you translate a technical milestone into executive language?', a: 'Replace the technical description with the business outcome. Instead of "we deployed a RAG pipeline" say "we reduced document review time by 60% for loan processing." Impact, not implementation.' },
  ],
  'ai-portal': [
    { q: 'What is the AI Portal?', a: 'A centralized self-service platform that enables bank teams to discover, access, and deploy approved AI models and tools with built-in governance and compliance controls.' },
    { q: 'What are the three core pillars of the AI Portal?', a: 'Discovery (find AI capabilities), Access (approved self-service deployment), and Governance (compliance controls, audit trails, usage monitoring).' },
    { q: 'Why does the bank need an AI Portal?', a: 'To prevent AI sprawl, reduce duplication of effort, ensure consistent governance, accelerate time-to-value, and maintain regulatory compliance across all AI initiatives.' },
    { q: 'What is Phase 1 of the AI Portal roadmap?', a: 'Foundation — establishing the platform infrastructure, model catalog, identity/access management, and onboarding the first internal AI use cases.' },
    { q: 'What is Phase 2 of the AI Portal roadmap?', a: 'Self-Service — enabling business lines to independently discover and access approved AI capabilities through a governed, automated workflow.' },
    { q: 'What is Phase 3 of the AI Portal roadmap?', a: 'Marketplace — expanding to include vetted third-party AI capabilities, enabling cross-team collaboration and reuse of proprietary models.' },
    { q: 'How does the AI Portal support regulatory compliance?', a: 'Through automated audit trails, model versioning, usage logging, access controls tied to business justification, and integration with Model Risk Management processes.' },
    { q: 'Who are the primary stakeholders for the AI Portal?', a: 'Technology teams (builders), Business lines (consumers), Risk & Compliance (governors), and the AI Platform team (operators).' },
    { q: 'What is a Model Catalog?', a: 'A curated inventory of approved AI models with metadata including use case, risk rating, usage guidelines, performance benchmarks, and compliance status.' },
    { q: 'How will we measure AI Portal success?', a: 'KPIs: number of approved models in catalog, time-to-access for new use cases, adoption rate by business lines, and number of compliance incidents prevented.' },
    { q: 'What problem does the AI Portal solve for business lines?', a: 'Eliminates the need for each team to independently procure, validate, and govern AI tools — reducing redundancy, cost, and compliance risk.' },
    { q: 'What is the AI Portal MVP timeline?', a: 'Phase 1 MVP in Q3, self-service capabilities in Q4, marketplace features in the following year.' },
  ],
  'gen-ai': [
    { q: 'What is Generative AI?', a: 'AI systems that generate new content — text, code, images, or structured data — based on patterns learned from large training datasets using foundation models.' },
    { q: 'What are the top 3 Gen AI use cases for a bank?', a: 'Document summarization (regulatory filings, memos), code assistance for developers, and client communication drafting for relationship managers.' },
    { q: 'What is a Large Language Model (LLM)?', a: 'An AI model trained on vast amounts of text that can understand and generate human-like text, answer questions, summarize content, and reason through complex problems.' },
    { q: 'What is SR 11-7 and why does it matter for Gen AI?', a: "The Federal Reserve's model risk management guidance requiring banks to validate, monitor, and govern all models including Gen AI, with documentation of limitations and risks." },
    { q: 'What are hallucinations in Gen AI?', a: 'When an AI model generates confident-sounding but factually incorrect information — a key risk in banking applications requiring accuracy and auditability.' },
    { q: 'What is RAG (Retrieval Augmented Generation)?', a: 'A technique that grounds LLM responses in verified source documents by retrieving relevant information before generating an answer — significantly reducing hallucination risk.' },
    { q: 'How do we mitigate hallucination risk in banking?', a: 'Through RAG, human-in-the-loop validation, output monitoring, confidence thresholds, and limiting Gen AI to appropriate use cases with known risk profiles.' },
    { q: 'What Gen AI governance controls are we implementing?', a: 'Approved model list, tested prompt libraries, output monitoring, data residency controls, PII detection, and full integration with the AI Portal approval workflow.' },
    { q: 'What is our data privacy strategy for Gen AI?', a: 'No customer PII in prompts unless using approved private deployments; data masking pipelines; enterprise contracts with zero data retention clauses from vendors.' },
    { q: 'What is the difference between cloud-hosted and private LLM deployment?', a: 'Cloud-hosted uses vendor infrastructure (faster, cheaper, more capable); private deployment runs on bank-controlled infrastructure (higher security and control, higher cost).' },
    { q: 'How does Gen AI create value for relationship managers?', a: 'Drafting personalized client communications, summarizing meeting notes, generating deal memos, and researching client industry context — saving 5-10 hours per week per RM.' },
    { q: 'What is prompt engineering?', a: 'The practice of crafting effective input instructions (prompts) to guide LLM outputs — well-engineered prompts improve accuracy, consistency, and safety of Gen AI responses.' },
  ],
  'machine-learning': [
    { q: 'What is Machine Learning?', a: 'A subset of AI where models learn patterns from historical data to make predictions or decisions without being explicitly programmed for each scenario.' },
    { q: 'What is the ML model lifecycle?', a: 'Data collection → Feature engineering → Model training → Validation → Deployment → Monitoring → Retraining/retirement.' },
    { q: 'What are the top ML use cases in banking?', a: 'Fraud detection, credit risk scoring, AML transaction monitoring, customer churn prediction, and cross-sell/upsell recommendation engines.' },
    { q: 'What is MLOps?', a: 'The set of practices combining ML development with operations — automating the pipeline from model training through deployment and ongoing performance monitoring.' },
    { q: 'What is champion/challenger testing?', a: 'Running a new (challenger) model alongside the existing (champion) model to compare performance before full deployment — a key requirement under SR 11-7.' },
    { q: 'What is model drift and why does it matter?', a: "When a model's accuracy degrades over time as real-world data patterns diverge from training data — requires ongoing monitoring and periodic retraining." },
    { q: 'What is a Feature Store?', a: 'A centralized repository of engineered features that ML teams can reuse across projects — ensuring consistency and eliminating redundant data engineering work.' },
    { q: 'What regulatory requirements apply to ML models at a bank?', a: 'SR 11-7 model risk management, ECOA/fair lending (no discriminatory outcomes), FCRA compliance for credit models, and BSA/AML requirements for transaction monitoring.' },
    { q: 'How does the AI Platform team support ML at scale?', a: 'Shared training infrastructure, a feature store for reusable pipelines, automated deployment workflows, standardized monitoring dashboards, and a central model registry.' },
    { q: 'How do we measure ML model performance in production?', a: 'Technical metrics (accuracy, AUC-ROC, precision/recall) plus business metrics like false positive rate for fraud alerts and approval rate stability for credit models.' },
    { q: 'What is feature engineering?', a: 'The process of transforming raw data into meaningful inputs (features) that improve a model\'s predictive accuracy — often the most labor-intensive part of ML development.' },
    { q: 'What is our ML platform strategy?', a: 'A unified platform with standardized pipelines, shared compute, a model registry, automated validation gates, and AI Portal integration for governed, auditable deployment.' },
  ],
  'doc-intelligence': [
    { q: 'What is Document Intelligence?', a: 'AI-powered technologies that automatically extract, classify, and understand information from documents — including PDFs, images, forms, and contracts.' },
    { q: 'What core technologies power Document Intelligence?', a: 'OCR (Optical Character Recognition), NLP (Natural Language Processing), computer vision, and extraction models trained on specific document types and layouts.' },
    { q: 'What are the top Document Intelligence use cases at a bank?', a: 'Loan document processing, KYC/AML identity verification, contract analysis, regulatory filing extraction, and accounts payable automation.' },
    { q: 'How does Document Intelligence reduce loan processing time?', a: 'By automatically extracting income, employment, asset, and liability data from uploaded documents — reducing manual review from hours to minutes per file.' },
    { q: 'What is Intelligent Document Processing (IDP)?', a: 'An advanced form of document AI combining OCR, NLP, and ML to not just extract data but understand document context, relationships, and intent.' },
    { q: 'What is OCR and what are its limitations?', a: 'Optical Character Recognition converts images of text to machine-readable text — limitations include accuracy on poor-quality scans, handwriting, and complex form layouts.' },
    { q: 'How does Document Intelligence support KYC compliance?', a: 'By automatically extracting and validating identity information from government IDs, cross-referencing watchlists, and flagging discrepancies for human review.' },
    { q: 'How do we ensure accuracy in Document Intelligence outputs?', a: 'Confidence scoring (flagging low-confidence extractions for human review), exception handling workflows, and continuous model improvement from validated corrections.' },
    { q: 'What is the ROI case for Document Intelligence?', a: 'Reduced manual processing labor, faster cycle times (e.g., loan approval speed), lower error rates, improved compliance, and ability to scale without proportional headcount growth.' },
    { q: 'What document types are in scope for Phase 1?', a: 'Pay stubs, W-2s, bank statements, tax returns, and government-issued IDs — the core documents in mortgage and personal loan origination.' },
    { q: 'How does Document Intelligence integrate with bank systems?', a: 'Through APIs connecting to the loan origination system, core banking platform, and document management systems — results written back to the source system of record.' },
    { q: 'What are the data privacy controls for Document Intelligence?', a: 'Encrypted processing pipelines, data minimization (extract and discard originals), retention policies aligned to legal requirements, and strict access controls on extracted data.' },
  ],
  'platform-strategy': [
    { q: 'What is the mission of the AI Platform team?', a: 'To enable the bank to safely, efficiently, and responsibly adopt AI at scale — accelerating business value while maintaining regulatory compliance and risk standards.' },
    { q: 'What are the four strategic pillars of the AI Platform?', a: 'Speed (faster AI deployment), Safety (governance and risk controls), Scale (shared infrastructure and reuse), and Standardization (consistent practices and tooling).' },
    { q: 'Why does a bank need a dedicated AI Platform team?', a: 'Without centralized capability, AI initiatives proliferate in silos — creating compliance gaps, duplicated costs, inconsistent quality, and material operational risk.' },
    { q: 'What is the AI Platform operating model?', a: 'A platform/product model: we build and operate shared infrastructure and capabilities that business lines and technology teams consume — like an internal AI utility.' },
    { q: 'Who does the AI Platform team serve?', a: 'All technology and business teams across the bank who want to develop, deploy, or consume AI capabilities — from data scientists to business analysts to operations.' },
    { q: 'How does the AI Platform team interface with Model Risk Management?', a: 'We embed MRM requirements into platform workflows — automated validation gates, documentation templates, and governance checkpoints satisfying SR 11-7.' },
    { q: 'What is our 12-month roadmap priority stack?', a: 'Q1-Q2: AI Portal foundation + first Gen AI use cases. Q3: Document Intelligence MVP + ML platform. Q4: Self-service expansion + executive dashboard.' },
    { q: 'How do we measure the AI Platform team\'s success?', a: 'Business value delivered (time saved, cost reduced), AI adoption rate, time-to-production for new use cases, compliance incident rate, and platform reliability.' },
    { q: 'What is the competitive context for bank AI adoption?', a: 'Leading banks are deploying AI to reduce operations costs 20-30%, improve credit decisioning speed, and personalize customer experiences — laggards risk significant competitive disadvantage.' },
    { q: 'What is our approach to responsible AI?', a: 'Fairness testing on all models, explainability requirements for customer-facing decisions, bias monitoring, human oversight for high-stakes decisions, and adherence to emerging AI regulation.' },
    { q: 'What are the key risks the AI Platform team manages?', a: 'Model risk (accuracy/bias), operational risk (platform reliability), compliance risk (regulatory adherence), data risk (privacy/security), and reputational risk (AI failures).' },
    { q: 'How does our AI strategy align with the bank\'s strategic plan?', a: 'AI is a core enabler of efficiency (cost reduction), growth (better decisioning), and risk management — our platform ensures the bank realizes this value safely and at speed.' },
  ],
}

export const quizzes = {
  'exec-comm': [
    { q: 'You have 10 minutes on the management committee agenda. What should you do in the first 60 seconds?', options: ['Give detailed background so executives have context before your ask', 'State your purpose and what you are asking for, then offer to provide context if needed', 'Introduce yourself and your team\'s mission', 'Walk through a timeline of everything the team has done'], correct: 1, explanation: 'BLUF — Bottom Line Up Front. Executives need to know why you are there and what you want before any context. If you lead with background, they will interrupt you or disengage.' },
    { q: 'The CFO asks "how much is this going to cost us?" and you have a range but not a final number. What is the best response?', options: ['"I don\'t have that number yet, I\'ll follow up"', '"It\'s hard to say at this stage"', '"Our current estimate is $X to $Y — I will have a refined figure by [specific date] and will send it to you before then"', '"It depends on a lot of factors we haven\'t figured out yet"'], correct: 2, explanation: 'Always give what you have, with a specific commitment to follow up. Vague responses destroy credibility. A range with a firm follow-up date shows you are on top of it.' },
    { q: 'Which of these is the correct use of the SCR (Situation-Complication-Resolution) framework?', options: ['"We built a Gen AI tool. It uses RAG. It reduces hallucinations."', '"The loan ops team processes 500 documents a day manually (Situation). This is our biggest bottleneck and costs $X per application (Complication). Document Intelligence will cut that by 60% (Resolution)."', '"Here is our roadmap for the next 12 months across all five initiatives"', '"AI is transforming banking and we need to act now"'], correct: 1, explanation: 'SCR works because it mirrors how executives think: what is the context, why does it matter now, and what are we doing. Option B is the only answer that uses the framework correctly.' },
    { q: 'The CRO interrupts your presentation and says "I am not comfortable with AI making decisions that affect customers." Your best first move is:', options: ['Continue your presentation and address it at the end', 'Say "I understand that concern — let me address it directly" and stop to answer fully', 'Remind the CRO that you have already addressed this in the pre-read material', 'Defer to a colleague who handles risk topics'], correct: 1, explanation: 'When an executive raises a concern, stop and address it immediately. Continuing past a concern signals you are not listening. Acknowledging before countering ("I understand that concern") is the right opener.' },
    { q: 'What does "translating tech to business language" look like in practice?', options: ['Using simpler words to explain how AI works technically', 'Replacing implementation details with business outcomes: not "we deployed a RAG pipeline" but "we cut document review time by 60%"', 'Avoiding all technical terms so executives are not confused', 'Using analogies to explain AI concepts'], correct: 1, explanation: 'Executives do not need to understand HOW it works — they need to understand WHAT it delivers. Always frame progress and capabilities as business outcomes, not technical accomplishments.' },
    { q: 'You are presenting and realize mid-sentence you do not know the precise answer to a question the CEO just asked. You should:', options: ['Make your best guess so you do not appear unprepared', 'Say "I do not have that precise figure with me — I will have it to you by tomorrow morning"', 'Ask a colleague in the room to answer it', 'Say "that is outside the scope of today\'s discussion"'], correct: 1, explanation: 'Never bluff with an executive. Saying you will get the answer by a specific date is a sign of competence, not weakness. It shows you respect their need for accuracy over speed.' },
  ],
  'ai-portal': [
    { q: 'Which of the following best describes the primary purpose of the AI Portal?', options: ['A cloud storage solution for AI training data', 'A centralized platform for discovering, accessing, and governing approved AI capabilities', 'A vendor marketplace for purchasing third-party AI software', 'A monitoring tool exclusively for production ML models'], correct: 1, explanation: 'The AI Portal is a centralized hub enabling teams to discover, access, and deploy approved AI capabilities with built-in governance.' },
    { q: 'In Phase 2 of the AI Portal roadmap, what key capability is introduced?', options: ['Initial platform infrastructure setup', 'Self-service access for business lines', 'Third-party vendor marketplace', 'Real-time model monitoring'], correct: 1, explanation: 'Phase 2 focuses on self-service — enabling business lines to independently access approved AI capabilities through an automated, governed workflow.' },
    { q: 'A CFO asks why we need the AI Portal when teams can just use AI tools directly. Your best response is:', options: ['Direct tool usage is actually preferred for speed', 'The portal prevents compliance gaps, duplicated costs, and AI sprawl that occurs without central governance', 'The portal is only needed for large language models', 'It primarily reduces cloud costs'], correct: 1, explanation: 'The AI Portal solves the governance, cost, and compliance problems that arise when teams independently procure and deploy AI tools.' },
    { q: 'Which stakeholder group are "consumers" in the AI Portal operating model?', options: ['AI Platform team', 'Risk & Compliance', 'Business lines', 'External vendors'], correct: 2, explanation: 'Business lines are the consumers — they use the AI capabilities the portal makes available. The AI Platform team operates the portal; Risk & Compliance governs it.' },
    { q: 'The Model Catalog in the AI Portal contains:', options: ['Only Gen AI models approved by the vendor', 'A curated inventory of approved AI models with metadata including risk rating, usage guidelines, and compliance status', 'Raw training datasets for model development', 'User performance scores from AI tool usage'], correct: 1, explanation: 'The Model Catalog is a governed inventory giving teams the information they need to select and use the right AI model for their use case.' },
    { q: 'Which KPI best measures the AI Portal\'s impact on compliance?', options: ['Number of active user accounts', 'Cloud infrastructure cost savings', 'Number of compliance incidents prevented through governed access controls', 'Total number of models trained on the platform'], correct: 2, explanation: 'Compliance incident prevention is the key governance metric — it shows the portal is doing its job of ensuring AI is used within approved guardrails.' },
  ],
  'gen-ai': [
    { q: 'What is the primary risk of using Gen AI for regulatory document analysis without mitigation?', options: ['Models are too slow for real-time use', 'Hallucinations — models may generate confident but incorrect interpretations', 'Gen AI cannot process PDF documents', 'Models require internet access to function'], correct: 1, explanation: 'Hallucinations are the top risk in banking Gen AI — models can generate plausible but incorrect content, which is dangerous in regulatory or compliance contexts.' },
    { q: 'RAG (Retrieval Augmented Generation) addresses which Gen AI challenge?', options: ['High inference cost', 'Model training time', 'Hallucinations by grounding responses in verified source documents', 'Prompt length limitations'], correct: 2, explanation: 'RAG retrieves relevant verified documents before generation, ensuring the model\'s response is anchored in accurate source material rather than relying solely on training data.' },
    { q: 'Under SR 11-7, which of the following is required for Gen AI models used in banking?', options: ['Models must be open-source', 'Models must be validated, monitored, and governed with documented limitations and risks', 'Only models from approved vendors may be used', 'Gen AI is exempt from model risk management requirements'], correct: 1, explanation: 'SR 11-7 applies to all models including Gen AI — validation, ongoing monitoring, and documentation of limitations are mandatory regardless of model type.' },
    { q: 'When a relationship manager wants to use Gen AI to draft client emails, the first governance question is:', options: ['Which LLM vendor is cheapest?', 'Does this use case involve customer PII and has it been approved through the AI Portal?', 'How fast does the model generate text?', 'Is the output grammar correct?'], correct: 1, explanation: 'Before any Gen AI deployment, teams must confirm PII handling compliance and obtain approval through the AI Portal governance workflow.' },
    { q: 'What is the advantage of a private LLM deployment over a cloud-hosted one for a bank?', options: ['Private deployments are always more accurate', 'Private deployments are significantly cheaper', 'Private deployments run on bank-controlled infrastructure providing greater data security and control', 'Private deployments have no latency'], correct: 2, explanation: 'Private deployments keep sensitive data within bank-controlled infrastructure, addressing data privacy, residency, and confidentiality requirements — at higher cost.' },
    { q: 'A board member asks how Gen AI differs from traditional ML. The best answer is:', options: ['Gen AI is just faster ML', 'Traditional ML predicts outcomes from structured data; Gen AI creates new content (text, code, summaries) from unstructured inputs using foundation models', 'Gen AI is always more accurate than ML', 'They are the same — Gen AI is just a marketing term'], correct: 1, explanation: 'This distinction is important for executive audiences: traditional ML is predictive; Gen AI is generative. Both have their place in a bank\'s AI portfolio.' },
  ],
  'machine-learning': [
    { q: 'Which ML use case has the longest history of deployment in banking?', options: ['Customer experience chatbots', 'Generative document summarization', 'Fraud detection and credit risk scoring', 'Code generation for developers'], correct: 2, explanation: 'Fraud detection and credit risk scoring have been core ML applications in banking for decades — they are well-governed, well-understood, and heavily regulated.' },
    { q: 'What is the purpose of champion/challenger testing in ML deployment?', options: ['To train two models simultaneously to save time', 'To compare a new model against the existing model before full deployment, as required by SR 11-7', 'To test models on different cloud providers', 'To allow two teams to develop models independently'], correct: 1, explanation: 'Champion/challenger ensures new models actually outperform existing ones before replacing them — a risk management requirement that protects against regressions.' },
    { q: 'Model drift means:', options: ['A model was trained on drifting (moving) data points', 'A model\'s accuracy degrades over time as real-world patterns diverge from training data', 'A model was migrated to a new cloud environment', 'A model is slow to generate predictions'], correct: 1, explanation: 'Model drift is a key production risk — models that performed well at deployment can degrade as customer behavior, economic conditions, or data patterns change over time.' },
    { q: 'Which regulation specifically governs fair lending requirements for credit ML models?', options: ['SR 11-7', 'ECOA / Equal Credit Opportunity Act', 'GDPR', 'SOX'], correct: 1, explanation: 'ECOA prohibits credit discrimination — ML credit models must be tested for disparate impact and must produce explainable decisions to satisfy fair lending requirements.' },
    { q: 'The Feature Store in the AI Platform primarily benefits ML teams by:', options: ['Providing GPU compute for model training', 'Centralizing reusable engineered features so teams avoid redundant data pipeline work', 'Storing model weights and artifacts', 'Managing cloud costs for training jobs'], correct: 1, explanation: 'A Feature Store is a force multiplier — teams reuse proven, validated features rather than rebuilding the same data transformations from scratch on every new model.' },
    { q: 'A Risk Officer asks how we know our fraud detection model is still working. The correct answer describes:', options: ['We retrain every year on a schedule', 'We monitor production performance metrics daily, track model drift indicators, and have automated alerts for performance degradation', 'The model was validated once before deployment so it\'s reliable', 'We rely on user reports of missed fraud'], correct: 1, explanation: 'Ongoing production monitoring is a requirement under SR 11-7 — validation at deployment is necessary but not sufficient. Models must be continuously monitored.' },
  ],
  'doc-intelligence': [
    { q: 'What is the primary difference between OCR and Intelligent Document Processing (IDP)?', options: ['OCR is faster than IDP', 'IDP uses AI to understand document context and relationships, while OCR only converts image pixels to text', 'OCR handles PDFs; IDP handles images only', 'IDP requires internet access; OCR does not'], correct: 1, explanation: 'OCR is a foundational step (pixel → text); IDP builds on it with AI to understand what the text means, how it relates to other fields, and what to do with it.' },
    { q: 'For a mortgage origination use case, which document types would Document Intelligence process in Phase 1?', options: ['Only tax returns and W-2s', 'Pay stubs, W-2s, bank statements, tax returns, and government-issued IDs', 'Appraisal reports and title documents only', 'All documents across the bank simultaneously'], correct: 1, explanation: 'Phase 1 focuses on the core income and identity verification documents used in mortgage and personal loan origination — high volume, high impact.' },
    { q: 'How does confidence scoring improve Document Intelligence accuracy in production?', options: ['It eliminates the need for human review entirely', 'It flags low-confidence extractions for human review while auto-processing high-confidence ones', 'It speeds up processing by 10x', 'It encrypts sensitive document fields'], correct: 1, explanation: 'Confidence scoring creates a human-in-the-loop for uncertain cases — maintaining the speed benefit of automation while ensuring accuracy on edge cases.' },
    { q: 'A compliance officer asks how Document Intelligence handles customer PII. The correct answer is:', options: ['PII is stored in the model for future reference', 'We use encrypted processing, data minimization (extract and discard), retention policies, and strict access controls on extracted fields', 'PII is sent to the cloud vendor for processing', 'Document Intelligence automatically anonymizes all documents'], correct: 1, explanation: 'PII in documents requires strong controls — encryption in transit and at rest, minimization, and access restrictions are core to a compliant Document Intelligence implementation.' },
    { q: 'What is the primary business case for Document Intelligence in loan origination?', options: ['It eliminates the need for loan officers', 'It reduces manual document review from hours to minutes, improving cycle time, accuracy, and the ability to scale volume without proportional headcount growth', 'It replaces the underwriting decision entirely', 'It reduces the number of document types applicants must submit'], correct: 1, explanation: 'The ROI case is speed (faster approvals), quality (fewer manual errors), scale (handle more volume), and compliance (consistent, auditable extraction). Not eliminating humans.' },
    { q: 'Which bank process currently requires the most manual document handling and would benefit most from Document Intelligence?', options: ['ATM cash management', 'Loan origination and KYC/AML identity verification', 'Branch teller transactions', 'Wire transfer confirmation'], correct: 1, explanation: 'Loan origination and KYC/AML processes are document-intensive and high-volume — they are the highest-impact targets for Document Intelligence ROI.' },
  ],
  'platform-strategy': [
    { q: 'What is the AI Platform team\'s primary operating model?', options: ['A consulting group that delivers AI projects for business lines', 'A platform/product team that builds shared AI infrastructure and capabilities consumed by the rest of the bank', 'An external vendor management team', 'A data governance and policy team only'], correct: 1, explanation: 'The platform model means we build reusable, governed infrastructure — like an internal AI utility — rather than doing one-off bespoke projects for each team.' },
    { q: 'Which of the four strategic pillars addresses the risk and regulatory dimension of the AI Platform?', options: ['Speed', 'Safety', 'Scale', 'Standardization'], correct: 1, explanation: 'Safety encompasses governance, risk controls, compliance, and responsible AI — ensuring the bank can adopt AI without creating unacceptable model or operational risk.' },
    { q: 'A board member asks why AI is strategically important for the bank. The strongest answer includes:', options: ['AI is required by regulators for all banks', 'Leading banks are using AI to reduce operational costs 20-30%, improve risk decisioning, and personalize customer experiences — inaction creates competitive disadvantage', 'AI will eliminate the need for most employees within 2 years', 'AI is primarily a technology infrastructure upgrade'], correct: 1, explanation: 'The strategic case for AI is business value and competitive positioning — cost efficiency, better risk decisions, and customer experience differentiation.' },
    { q: 'How does the AI Platform team\'s approach to responsible AI address fair lending concerns?', options: ['We only use AI for back-office processes, never customer-facing decisions', 'We conduct fairness testing on all models, require explainability for customer-facing decisions, and monitor for bias in production', 'Fair lending only applies to human underwriters, not AI models', 'We use third-party AI vendors who certify their models as fair'], correct: 1, explanation: 'Responsible AI in banking requires proactive bias testing and monitoring — regulatory agencies expect banks to demonstrate their AI models do not produce discriminatory outcomes.' },
    { q: 'The CRO asks how we manage model risk across all four AI capabilities. The key answer is:', options: ['Each team manages model risk independently', 'The AI Portal embeds SR 11-7 requirements into all deployment workflows — automated validation gates, documentation, and compliance checkpoints apply to every AI use case', 'Model risk only applies to credit models, not Gen AI or Document Intelligence', 'We rely on vendor certifications to satisfy model risk requirements'], correct: 1, explanation: 'The AI Portal is the unifying governance mechanism — by embedding SR 11-7 requirements into the platform, we ensure consistent model risk management across all AI types.' },
    { q: 'Which metric best demonstrates the AI Platform team\'s contribution to business value?', options: ['Number of AI models deployed', 'Business value delivered: time saved, cost reduced, revenue enabled — tied to specific use case outcomes', 'Total cloud compute hours consumed', 'Number of vendor contracts signed'], correct: 1, explanation: 'Business value metrics (time saved, cost reduced, revenue enabled) directly connect AI Platform work to the outcomes management cares about — not vanity metrics.' },
  ],
}

export const fillBlanks = {
  'exec-comm': [
    { sentence: 'BLUF stands for Bottom Line _____ First — always lead with your conclusion or ask before providing context.', answer: 'Up Front', hint: 'Where does the conclusion go in your message?' },
    { sentence: 'The three parts of the SCR framework are Situation, Complication, and _____.', answer: 'Resolution', hint: 'What you are doing about the problem' },
    { sentence: 'When a CRO or board member raises a concern, acknowledge it before countering: say "I _____ that concern — let me address it directly."', answer: 'understand', hint: 'Show you heard them before you respond' },
    { sentence: 'Instead of saying "we deployed a RAG pipeline," say "we reduced document review time by _____% for loan processing."', answer: '60', hint: 'The target reduction we cited for Document Intelligence' },
    { sentence: 'If you do not know an exact answer in an exec meeting, commit to a specific _____ date rather than guessing or being vague.', answer: 'follow-up', hint: 'What you owe them after the meeting' },
    { sentence: 'The "So _____?" test asks: what does this mean for the business? If you cannot answer it, cut the point or reframe it.', answer: 'What', hint: 'Why should executives care?' },
  ],
  'ai-portal': [
    { sentence: 'The AI Portal serves as a _____ hub for teams to discover, access, and deploy approved AI capabilities.', answer: 'centralized', hint: 'Think: one place for everything' },
    { sentence: 'Phase 1 of the AI Portal roadmap focuses on _____, including the model catalog and identity management.', answer: 'foundation', hint: 'What you build first before adding features' },
    { sentence: 'The Model Catalog contains metadata including risk _____, usage guidelines, and compliance status for each approved AI model.', answer: 'rating', hint: 'How risky is the model?' },
    { sentence: 'The AI Portal prevents AI _____ by ensuring teams use approved, governed tools rather than independent solutions.', answer: 'sprawl', hint: 'What happens when AI tools spread without control' },
    { sentence: 'In the AI Portal operating model, Risk & Compliance teams are the _____ — they oversee and enforce governance.', answer: 'governors', hint: 'They make and enforce the rules' },
  ],
  'gen-ai': [
    { sentence: 'RAG stands for Retrieval _____ Generation — a technique that grounds AI responses in verified source documents.', answer: 'Augmented', hint: 'To enhance or add to something' },
    { sentence: 'When an LLM generates confident-sounding but incorrect information, this is called a _____.', answer: 'hallucination', hint: 'Perceiving something that is not real' },
    { sentence: 'SR 11-7 requires banks to _____, monitor, and govern all AI models including Large Language Models.', answer: 'validate', hint: 'Confirm it works correctly before deployment' },
    { sentence: 'A private LLM deployment runs on bank-_____ infrastructure, providing greater security and data control than cloud-hosted alternatives.', answer: 'controlled', hint: 'The bank owns and operates it' },
    { sentence: 'Gen AI data privacy policy requires that customer _____ information is not included in prompts unless using approved private deployments.', answer: 'PII', hint: 'Personally Identifiable Information' },
  ],
  'machine-learning': [
    { sentence: 'In the ML lifecycle, _____ engineering is the process of transforming raw data into meaningful inputs that improve model accuracy.', answer: 'feature', hint: 'The variables or inputs fed to a model' },
    { sentence: 'Model _____ occurs when a model\'s accuracy degrades over time as real-world data patterns diverge from the training data.', answer: 'drift', hint: 'Slowly moving away from where you started' },
    { sentence: 'Champion/challenger testing compares a new model against the _____ model before full deployment — required under SR 11-7.', answer: 'champion', hint: 'The current winner — the model already in production' },
    { sentence: 'MLOps combines ML development with _____ — automating the pipeline from training through deployment and monitoring.', answer: 'operations', hint: 'The "Ops" in MLOps' },
    { sentence: 'The _____ Store is a centralized repository of reusable engineered features that ML teams share across projects.', answer: 'Feature', hint: 'A place to store ML inputs for reuse' },
  ],
  'doc-intelligence': [
    { sentence: 'OCR stands for Optical _____ Recognition — the technology that converts images of text into machine-readable data.', answer: 'Character', hint: 'Letters, numbers, symbols...' },
    { sentence: 'Intelligent Document Processing (IDP) combines OCR, NLP, and ML to not just extract data but understand document _____ and relationships.', answer: 'context', hint: 'The surrounding meaning and situation' },
    { sentence: 'Confidence _____ flags low-accuracy extractions for human review while automatically processing high-confidence fields.', answer: 'scoring', hint: 'Giving a numerical rating to the quality of output' },
    { sentence: 'Document Intelligence supports KYC compliance by automatically extracting identity data and cross-referencing against _____ lists.', answer: 'watchlist', hint: 'Lists of sanctioned or flagged individuals/entities' },
    { sentence: 'Data _____ means extracting required information from documents and discarding the originals promptly to minimize privacy risk.', answer: 'minimization', hint: 'Keep only what you need, nothing more' },
  ],
  'platform-strategy': [
    { sentence: 'The four strategic pillars of the AI Platform are Speed, Safety, _____, and Standardization.', answer: 'Scale', hint: 'Growing without proportional cost increases' },
    { sentence: 'The AI Platform team operates as an internal AI _____ — a shared service that the rest of the bank consumes.', answer: 'utility', hint: 'Like electricity or water — always on, shared by all' },
    { sentence: 'Leading banks are using AI to reduce operational costs by _____ to 30%, driving urgency for our platform strategy.', answer: '20', hint: 'The lower end of the estimated cost reduction range' },
    { sentence: 'The AI Platform embeds SR _____ requirements into all deployment workflows through automated validation gates.', answer: '11-7', hint: "The Federal Reserve's model risk management guidance" },
    { sentence: 'Responsible AI requires _____ testing on all models and explainability requirements for customer-facing decisions.', answer: 'fairness', hint: 'Ensuring models do not discriminate' },
  ],
}

export const scenarios = {
  'exec-comm': [
    {
      role: 'CEO',
      question: '"You are 3 minutes into your presentation and I stop you. Get to the point — what exactly are you asking us for today?"',
      keyPoints: [
        'Do not apologize or get flustered — this is a gift, not an attack',
        'Immediately pivot to your ask in one clear sentence: "We are asking for approval to fund X at $Y so we can deliver Z by [date]"',
        'Offer to continue with supporting detail or take questions: "I can walk through the supporting rationale, or take questions — whichever is most useful"',
        'This is exactly why BLUF exists — if you had led with the bottom line, this would not have happened',
      ],
      modelAnswer: '"Absolutely. We are asking for [specific approval/decision/funding] today. The reason is [one sentence on the business case]. The expected outcome is [specific result] by [date]. I am happy to walk through the supporting detail or answer questions — whatever is most useful for the committee." Then stop talking and let them steer.',
    },
    {
      role: 'CFO',
      question: '"Every technology team walks in here with an AI project. Why should we fund this one over everything else competing for budget right now?"',
      keyPoints: [
        'Do not defend against the comparison — lean into it: "That is exactly the right question"',
        'Anchor your answer in measurable business outcome, not technology: cost saved, time saved, risk reduced, revenue enabled',
        'Show specificity: a precise ROI estimate is more convincing than a large vague claim',
        'Acknowledge the trade-off honestly: "If we do not do this, here is what that costs us"',
        'Connect to the bank\'s stated strategic priorities — AI is not a distraction, it is a delivery vehicle for goals already approved',
      ],
      modelAnswer: '"Fair challenge. We are not asking you to fund AI — we are asking you to fund [specific outcome]. In loan operations, we have a process that costs $X per application today and takes 48 hours. We will reduce that to $Y and 8 hours within 6 months of go-live. That is a measurable return. The cost of not doing it is staying at $X while peers bring their cost to $Y. This is one of two or three investments with that level of specificity — that is why it is in front of you today."',
    },
    {
      role: 'CRO',
      question: '"I have seen AI projects fail at other banks — biased decisions, explainability problems, regulatory findings. How do I know this will not blow up on us?"',
      keyPoints: [
        'Validate the concern — these failures are real and well-documented',
        'Explain the three layers of protection: governance through the AI Portal, SR 11-7 validation built into every deployment, and ongoing production monitoring',
        'Emphasize human oversight: AI does not make autonomous high-stakes decisions — humans remain in the loop',
        'Offer specifics: fairness testing, explainability requirements, and the rollback capability if something goes wrong',
        'The goal is not to say "it is safe" — the goal is to show you have a credible, specific risk management framework',
      ],
      modelAnswer: '"Those failures are exactly why we built our governance framework before building products. Every AI use case must pass through our AI Portal — which requires SR 11-7 validation, risk rating, compliance sign-off, and documented limitations before anything reaches production. For customer-impacting decisions, human review is a required step — the AI surfaces information, a person makes the call. We have fairness testing for any model touching credit or customer decisions, and we run continuous monitoring so we catch problems before they become regulatory issues. We also have rollback — if a model degrades, we can revert in hours. I am happy to walk through the specific controls for any use case that concerns you."',
    },
    {
      role: 'Board Member',
      question: '"I read an article last week about AI going rogue and causing harm. Should our bank even be doing this?"',
      keyPoints: [
        'Do not dismiss the concern or make them feel uninformed — treat it as a genuine governance question',
        'Distinguish between consumer AI (which generates the headlines) and enterprise, governed bank AI',
        'The risk of not doing it is also real: competitive disadvantage, operational inefficiency, talent gap',
        'Frame your role as the team that makes AI adoption safe — not the team pushing AI for its own sake',
        'Keep the answer calm, confident, and grounded — avoid defensiveness',
      ],
      modelAnswer: '"The concerns you read about are real — and they are exactly why our approach starts with governance, not experimentation. The AI at this bank is not autonomous or unchecked. Every use case is reviewed, validated, monitored, and has a human in the loop for any decision that affects a customer. We are not asking the bank to trust AI blindly — we are asking the bank to use AI in specific, controlled, high-value applications where the risk is understood and managed. The alternative — not adopting AI while our competitors do — is also a risk. Our job is to make sure this bank gets the benefit without the downside. That is what the AI Platform team was built to do."',
    },
  ],
  'ai-portal': [
    {
      role: 'CFO',
      question: '"We already have technology teams using different AI tools. Why do we need to invest in building a whole new AI Portal? What is the ROI?"',
      keyPoints: ['AI sprawl risk: uncontrolled tool adoption creates compliance gaps and duplicated costs', 'Governance: without a portal, every team invents their own approval process inconsistently', 'Reuse: the portal enables teams to share models and pipelines, reducing development cost', 'ROI: measured by time-to-value for new use cases, compliance incidents prevented, and infrastructure cost savings from consolidation'],
      modelAnswer: 'Today, AI tools are being adopted in silos — creating governance gaps, duplicated vendor contracts, and inconsistent risk controls. The AI Portal is the control plane that lets us accelerate adoption while maintaining the compliance posture regulators require. The ROI comes from three places: shared infrastructure reducing per-team costs, faster time-to-production for new use cases, and reduced compliance risk. Without it, we are building risk faster than we are building value.'
    },
    {
      role: 'Chief Risk Officer',
      question: '"How do I know that any AI model deployed through this portal has been properly validated under SR 11-7?"',
      keyPoints: ['The portal embeds SR 11-7 requirements as automated workflow gates — nothing deploys without satisfying them', 'Audit trail: every model has documented validation, risk rating, usage controls, and approval chain', 'Integration with Model Risk Management team review for material models', 'Ongoing monitoring built in — not a one-time gate at deployment'],
      modelAnswer: 'The AI Portal does not allow a model to reach production without passing through our SR 11-7 validation gates. These are not checkboxes — they are automated workflow requirements: documentation of model purpose and limitations, validation testing results, risk rating by our model risk team, and business owner sign-off. Every model in the catalog has a complete audit trail available in real time. For high-risk models, the MRM team has an explicit review and approval step. And once deployed, monitoring is built into the platform — so we catch and respond to model degradation before it becomes a compliance issue.'
    },
  ],
  'gen-ai': [
    {
      role: 'General Counsel',
      question: '"What is our liability exposure if a relationship manager uses Gen AI to draft client communications and the output is incorrect or misleading?"',
      keyPoints: ['Human review requirement: Gen AI outputs are drafts, not final communications — RM reviews and approves before sending', 'Approved use cases only: deployed through AI Portal with defined guardrails', 'Audit trail: all Gen AI-assisted communications are logged', 'PII and compliance controls: outputs screened before use', 'Liability remains with the bank/employee — Gen AI does not reduce accountability, it changes the workflow'],
      modelAnswer: 'Our Gen AI deployment for client communications is designed with this risk front of mind. Gen AI produces a draft — the relationship manager is required to review, edit, and approve before any communication goes to a client. This is a human-in-the-loop workflow, not automated sending. All Gen AI-assisted communications are logged in our audit trail. The model is deployed through the AI Portal with compliance screening for content policy violations, and the RM training program covers their accountability for outputs. Liability sits with the bank and employee — Gen AI is a productivity tool, not a liability transfer mechanism.'
    },
    {
      role: 'Chief Technology Officer',
      question: '"What is our strategy for staying current with rapidly evolving Gen AI models without creating technical debt or compliance headaches every time a new model comes out?"',
      keyPoints: ['Model abstraction layer in the AI Portal: swap underlying models without changing consumer integrations', 'Governance-first: new models require validation before entering the catalog — we move deliberately, not reactively', 'Evaluation framework: standard benchmarks for accuracy, safety, and compliance run on new models before adoption', 'Vendor relationships: enterprise agreements with leading LLM providers including model update notifications'],
      modelAnswer: 'The AI Portal is specifically designed to solve this. Our architecture uses a model abstraction layer — consuming teams integrate once, and we can swap or upgrade underlying models without disrupting their applications. When a new model version or provider emerges, we run it through our standard evaluation framework — accuracy benchmarks, safety testing, compliance review — before it enters the catalog. We move deliberately rather than chasing every new release. Our enterprise vendor agreements include advance notice of model changes, giving us runway to validate before they become available. The goal is to be a fast follower on model innovation, not the first adopter.'
    },
  ],
  'machine-learning': [
    {
      role: 'Chief Risk Officer',
      question: '"One of our ML fraud detection models made a series of false positives last month, blocking legitimate customer transactions. How do we prevent this and what was our response?"',
      keyPoints: ['Monitoring: production performance dashboards with automated alerts for metric degradation', 'Response: incident classification, impact assessment, model rollback capability to champion model', 'Root cause: model drift, data pipeline issue, or concept drift in fraud patterns', 'Prevention: champion/challenger always running, threshold tuning with business sign-off, regular retraining cadence'],
      modelAnswer: 'When that occurred, our response activated our ML incident protocol: we immediately assessed the business impact, identified the root cause — in this case, a distribution shift in transaction patterns that caused our threshold to misfire — and made a targeted adjustment within hours, with business and risk sign-off. Our monitoring dashboards flagged the anomaly the same day. Going forward, prevention means continuous monitoring with automated alerts that notify us before impact reaches customers, champion/challenger always running in parallel so we have an immediate rollback option, and a regular retraining cadence to prevent drift from accumulating. We are also reviewing our alert thresholds to catch this class of issue earlier.'
    },
    {
      role: 'CFO',
      question: '"Building an ML platform seems like expensive infrastructure investment. Can\'t our data science teams just use cloud ML services directly?"',
      keyPoints: ['Short-term vs long-term cost: direct cloud usage creates higher long-term costs through duplication, no shared compute, repeated data engineering', 'Compliance: direct cloud usage bypasses our governance and SR 11-7 validation requirements', 'Reuse: platform enables feature store and shared pipelines — each team builds once, all teams benefit', 'Talent: standardized platform makes data scientists more productive, reducing time spent on infrastructure vs. model development'],
      modelAnswer: 'The upfront platform investment pays for itself through three mechanisms. First, shared compute and the Feature Store eliminate redundant infrastructure — instead of eight teams each building their own data pipelines for similar features, we build once and share. Second, our direct cloud usage path bypasses the governance and SR 11-7 requirements our regulators expect — the platform embeds those controls so data scientists can move fast without creating compliance risk. Third, standardization makes our data scientists more productive — they spend time on models and insights, not infrastructure. The platform model is how every mature ML organization scales — and it is significantly more cost-effective than the alternative at the volume we are targeting.'
    },
  ],
  'doc-intelligence': [
    {
      role: 'Chief Operations Officer',
      question: '"Our loan operations team currently takes 48 hours to process a loan application package. What specifically will Document Intelligence change and by how much?"',
      keyPoints: ['Current state: manual data entry from pay stubs, W-2s, bank statements, tax returns, IDs — labor intensive and error-prone', 'Future state: automated extraction in minutes, human review of exceptions only', 'Estimated impact: 60-80% reduction in document processing time, with pilot data to validate before full rollout', 'Scope: Phase 1 targets the five core income/identity document types, covering majority of application volume'],
      modelAnswer: 'Today, a loan processor manually opens each document, keys data into the origination system, and cross-checks it — that is the bulk of your 48 hours. Document Intelligence automates the extraction of data from pay stubs, W-2s, bank statements, tax returns, and IDs — the five document types that represent the majority of your manual work. The processor shifts from data entry to exception handling: reviewing the cases where our confidence score indicates uncertainty, and approving the automated extractions. Based on industry benchmarks and our pilot design, we are targeting a 60-80% reduction in document handling time per application. We will validate that with a controlled pilot before full rollout so you have actual performance data, not just projections, before we scale.'
    },
    {
      role: 'Chief Compliance Officer',
      question: '"How do we ensure Document Intelligence extractions are accurate enough for regulatory use — for example, in KYC/AML identity verification?"',
      keyPoints: ['Confidence scoring: extractions below threshold automatically route to human review — no auto-approval of low-confidence fields', 'Audit trail: every extraction logged with source document, confidence score, and reviewer if applicable', 'Model validation: ID document models validated on diverse document samples before deployment', 'Human-in-the-loop: for KYC, human review of ID verification output is a required step — AI assists, does not decide autonomously', 'Regulatory alignment: we have engaged Compliance in our governance design from the start'],
      modelAnswer: 'We have designed Document Intelligence for KYC use with regulatory requirements as the starting point, not an afterthought. Every extraction carries a confidence score — anything below our validated threshold is automatically routed for human review. For KYC identity verification specifically, human review of the AI output is a required step in the workflow regardless of confidence level — the AI assists the analyst, it does not make the KYC determination autonomously. We maintain a complete audit trail: source document, extracted fields, confidence scores, and reviewer identity and decision. Our models are validated on diverse document samples including various ID formats before deployment. And we have engaged Compliance in the design of these controls from day one. The result is a system that is faster and more consistent than manual review while maintaining — and in many cases improving — the auditability that regulators require.'
    },
  ],
  'platform-strategy': [
    {
      role: 'Board Member',
      question: '"AI seems like a significant investment. How do we know we will not be in the news for an AI failure — a biased credit decision, a data breach, an embarrassing chatbot response?"',
      keyPoints: ['Responsible AI framework: fairness testing, bias monitoring, explainability requirements', 'Governance-first architecture: AI Portal requires approval before any AI reaches customers', 'SR 11-7 compliance: model validation built into every deployment path', 'Incident response: monitoring, alerting, rollback capabilities', 'Human oversight: high-stakes decisions require human review; AI augments, does not fully automate customer impact decisions'],
      modelAnswer: 'This is exactly the right question, and it is the reason we built safety as the first pillar of our AI Platform strategy — not an afterthought. Every AI use case must pass through our AI Portal governance workflow before it reaches a customer, including fairness testing for discriminatory outcomes, model risk validation under SR 11-7, and risk-rated approval by our model risk and compliance teams. For customer-facing decisions, we require explainability — we can tell a customer and a regulator why a decision was made. High-stakes decisions have mandatory human review. And we have continuous production monitoring with automated alerts and rollback capabilities so we can respond to model issues before they become headline risk. The platform is designed so that the safest path is also the fastest path — governance is built in, not bolted on.'
    },
    {
      role: 'CEO',
      question: '"It\'s been 90 days since the AI Platform team was formed. What have you accomplished, what is coming next, and when will we see material business impact?"',
      keyPoints: ['90-day accomplishments: team formation, technology stack selected, AI Portal foundation underway, first Gen AI use case in pilot', 'Next 90 days: AI Portal Phase 1 launch, Document Intelligence pilot with loan ops, ML platform foundation', 'Material business impact timeline: first measurable outcomes in 6-9 months from pilot completions', 'Long-term vision: AI Platform as a competitive differentiator, enabling the bank to move faster than peers on AI adoption safely'],
      modelAnswer: 'In our first 90 days, we have formed the team, selected and begun implementing our core technology stack, initiated the AI Portal foundation, and launched our first Gen AI pilot with the relationship management team. These are foundational investments — the results that matter to you come in the next phase. In the next 90 days, we will complete the AI Portal Phase 1 launch, run the Document Intelligence pilot with loan operations targeting a 60% reduction in document handling time, and begin the ML platform build. You will see the first measurable business impact from those pilots within 6 months — validated time savings, cost reductions we can put numbers on. By end of year, the AI Platform will be the operating system for AI at this bank — the reason we can move faster and more safely than our competitors.'
    },
  ],
}

export const learningContent = {
  'exec-comm': [
    {
      title: '🎯 How Management Committees Think',
      body: 'Before you walk into the room, you need to understand how the people in it operate. Management committee members are not your peers — they are time-poor decision-makers who need to make fast, confident calls on complex topics. They are not trying to understand everything. They are trying to decide whether to approve, escalate, or reject.',
      bullets: [
        'They have seen dozens of presentations that week — yours must be instantly clear',
        'They think in outcomes, not activities: "what did this deliver?" not "what did you build?"',
        'They tolerate uncertainty only if you have a plan to resolve it',
        'They are highly attuned to confidence — hesitation signals you do not own your material',
        'They will interrupt if they are confused or if you are not getting to the point',
        'A well-run 10-minute slot outperforms a rambling 30-minute one every time',
      ],
    },
    {
      title: '🏦 What Each Executive Cares About',
      body: 'Every person in that room has a different lens. Tailor your message to their priorities. When a specific executive asks a question, answer it in their language.',
      bullets: [
        'CEO: Is this the right strategy? Are we ahead of or behind peers? What is the headline outcome? How confident should I be?',
        'CFO: What does it cost? What does it save or earn? When do we break even? Is there a cheaper alternative?',
        'CRO (Chief Risk Officer): What could go wrong? Are we compliant? Who is accountable? What are the failure modes?',
        'COO: Does this disrupt operations? What changes for staff? Is it reliable? What is the implementation plan?',
        'Chief Compliance Officer: Are we following SR 11-7, ECOA, FCRA? Can we explain decisions to regulators? Is there an audit trail?',
        'CTO: Is the architecture sound? Can we maintain and scale it? Does it fit our technology strategy?',
        'Board Members: Is the bank protected? Is this a reputational risk? Are we governing this responsibly?',
      ],
    },
    {
      title: '📐 The BLUF Rule: Bottom Line Up Front',
      body: 'This is the single most important principle of executive communication. State your conclusion or ask in the very first sentence — before context, before background, before detail. Executives do not want to wait to understand why you are in the room.',
      bullets: [
        'Wrong: "Over the past quarter our team has been working on several initiatives... [5 minutes of context] ...so we are asking for approval."',
        'Right: "We are asking for approval to fund Document Intelligence at $X. Here is the business case."',
        'Think of a newspaper: the headline tells you the story. Executives scan your presentation like headlines.',
        'If an executive can interrupt you after 2 minutes and still know what you want — you are doing it right',
        'After stating your bottom line, offer to go deeper: "I can walk through the detail or take questions — whatever is most useful"',
      ],
    },
    {
      title: '🔺 The SCR Framework: Structure Every Message',
      body: 'Use Situation-Complication-Resolution to structure every update, whether it is a full presentation, a 2-minute verbal update, or an email. It mirrors the way decision-makers naturally think.',
      bullets: [
        'SITUATION: What is the current state? Establish shared context — what is true today that everyone agrees on',
        'Example Situation: "Our loan operations team processes 500 documents per day. Each application requires 2 hours of manual data entry."',
        'COMPLICATION: What challenge or opportunity does this create? Why does this matter right now?',
        'Example Complication: "This is our biggest throughput bottleneck, costing $X per application and slowing approvals by 48 hours versus competitors."',
        'RESOLUTION: What are we doing about it, and what do we need from this committee?',
        'Example Resolution: "Document Intelligence will automate 80% of this work. We are asking for $Y to launch a pilot in Q3."',
        'Every point you make should connect back to one of these three parts',
      ],
    },
    {
      title: '🔤 Translate Tech Into Business Language',
      body: 'You will lose your audience immediately if you use technical terminology without translation. Executives do not need to understand how AI works — they need to understand what it delivers. Make this trade every time.',
      bullets: [
        'Instead of "we deployed a RAG pipeline" → say "we built a system that grounds AI answers in verified bank documents, reducing errors"',
        'Instead of "our LLM uses transformer architecture" → say "we use an AI that reads and summarizes documents the way a senior analyst would"',
        'Instead of "we reduced model hallucination rate by 40%" → say "our AI is now accurate on 96% of document extractions, up from 57%"',
        'Instead of "we completed feature engineering for the fraud model" → say "we improved the inputs to our fraud detection model to catch more fraud patterns"',
        'Instead of "SR 11-7 validation gates are embedded in the pipeline" → say "every AI model must pass our risk team\'s approval before it goes live"',
        'Rule: if a non-technical senior banker would not immediately understand it, rewrite it',
      ],
    },
    {
      title: '❓ Handling Tough Questions With Confidence',
      body: 'Executives will test you. Some questions are genuine curiosity. Some are probing for gaps. Some are political. How you handle the question matters as much as the answer.',
      bullets: [
        'If you know the answer: give it directly, then stop. Do not over-explain.',
        'If you do not know: "That is an important question. I want to give you an accurate answer — I will have it to you by [specific date]." Never guess.',
        'If the question is hostile: "I understand that concern — let me address it directly." Validate before countering. Never get defensive.',
        'If the question takes you off-topic: answer briefly, then offer to go deeper offline: "I can cover that in more detail after the meeting if useful."',
        'If two executives disagree in the room: do not take sides. "Those are both important perspectives — here is how we have thought about that trade-off."',
        'Always maintain eye contact, speak slowly, and pause before answering. Rushing signals panic.',
      ],
    },
    {
      title: '⚙️ Meeting Mechanics: The Practical Stuff',
      body: 'The content of what you say matters. But so does how you run your time in the room. These habits separate people who get approved from people who get asked to come back with more work.',
      bullets: [
        'Know your time limit and plan for 70% of it — you will always get questions',
        'Prepare a one-page executive summary: situation, key decisions, ask, timeline. Send it in advance.',
        'Have backup slides for every likely question — do not include them in the main deck',
        'Never read from your slides — executives can read faster than you can talk',
        'Watch for body language: executives looking at phones or leaning back means you need to speed up or ask "is there a specific area I should focus on?"',
        'End with a clear ask or decision: "We are seeking approval for X" or "We need a decision on Y by Z date"',
        'Follow up in writing within 24 hours: confirm decisions made, action items, and your commitments',
      ],
    },
    {
      title: '🚫 What Executives Hate',
      body: 'Knowing what not to do is as important as knowing what to do. These are the most common mistakes that undermine credibility in management committee settings.',
      bullets: [
        'Too much detail too early — context before the punchline loses the room in the first 2 minutes',
        'Jargon without translation — if they have to ask what it means, you have already lost ground',
        'Vague timelines — "soon," "in the coming months," "by end of year" are not commitments',
        'Surprises — never bring bad news to a management committee without having told key stakeholders first',
        '"We are exploring..." without a plan — exploration is fine, but you need a point of view on where it is going',
        'Defensive responses to tough questions — it signals you are not confident in your own material',
        'Asking for too many things at once — focus your ask so there is one clear decision to make',
      ],
    },
  ],
  'ai-portal': [
    {
      title: '🏛️ What Is the AI Portal?',
      body: 'Think of it as the bank\'s internal "app store" for AI. Instead of every team going out and finding their own AI tools — with no consistency, no approval process, and no oversight — the AI Portal is one central place where teams can discover, request access to, and use approved AI capabilities safely.',
      bullets: [
        'A single hub where all approved AI tools and models live',
        'Teams browse a catalog, request access, and get started quickly',
        'Every use is logged and governed — nothing slips through untracked',
        'Built by our AI Platform team, used by the entire bank',
      ],
    },
    {
      title: '🔧 What We\'re Building',
      body: 'We are rolling out the AI Portal in three phases. Each phase adds more capability and more business users.',
      bullets: [
        'Phase 1 — Foundation: Build the platform, set up the model catalog, onboard the first AI use cases. This is our current focus.',
        'Phase 2 — Self-Service: Business lines can browse and access approved AI tools on their own, with automated approval workflows.',
        'Phase 3 — Marketplace: Open the catalog to vetted third-party AI capabilities and allow teams to share their own models internally.',
      ],
    },
    {
      title: '❓ Why Does the Bank Need This?',
      body: 'Without a portal, AI adoption becomes uncontrolled and risky. Here is what happens when there is no central platform:',
      bullets: [
        'Teams buy different AI tools independently — duplicating cost and effort',
        'No consistent approval or validation — compliance gaps appear',
        'No audit trail — regulators cannot see what AI is being used or how',
        'Duplicate work — five teams building the same thing in isolation',
        'With the portal: one approval process, one audit trail, one place to find everything',
      ],
    },
    {
      title: '🛡️ How Governance Works',
      body: 'Governance is not a barrier — it is built into the workflow so teams can move fast and stay compliant at the same time.',
      bullets: [
        'Every AI model goes through validation before it enters the catalog',
        'Each model has a risk rating: low, medium, or high',
        'Access requests require a business justification and are approved by the right people',
        'Everything is logged: who accessed what, when, and why',
        'The portal connects directly to our Model Risk Management process',
      ],
    },
    {
      title: '📊 How We Measure Success',
      body: 'Management will want to see concrete numbers. Here is what we track:',
      bullets: [
        'Number of approved AI models in the catalog (growing over time)',
        'Time-to-access: how quickly a team can go from request to using an AI tool',
        'Adoption rate: how many business lines are using the portal',
        'Compliance incidents prevented: AI use that would have bypassed governance',
        'Cost savings from shared infrastructure vs. teams buying independently',
      ],
    },
    {
      title: '💡 Key Talking Points for Management',
      body: 'When presenting the AI Portal, anchor every point in business value and risk control:',
      bullets: [
        '"The portal is how we accelerate AI adoption without losing control"',
        '"Every AI use case in the bank will go through this platform — nothing operates in the shadows"',
        '"We are building this once so every team benefits — not reinventing the wheel 20 times"',
        '"The portal is also how we satisfy regulators: complete audit trail, validated models, documented approvals"',
      ],
    },
  ],

  'gen-ai': [
    {
      title: '✨ What Is Generative AI?',
      body: 'Generative AI is a type of AI that creates new content — text, summaries, answers, code — rather than just making predictions. The most well-known examples are ChatGPT and Claude. In banking, we use these tools to help employees work faster and smarter.',
      bullets: [
        'Traditional AI: looks at data and predicts an outcome (e.g., "this transaction looks fraudulent")',
        'Generative AI: takes a question or prompt and writes a response (e.g., "summarize this loan document")',
        'Powered by Large Language Models (LLMs) — AI trained on vast amounts of text',
        'Responds to natural language — users type in plain English, not code',
      ],
    },
    {
      title: '🏦 What We\'re Using It For',
      body: 'Our Gen AI initiatives focus on high-value, lower-risk use cases where the benefit is clear and the output is reviewed by a human before it matters.',
      bullets: [
        'Relationship Managers: draft client emails, summarize meeting notes, prep for client calls — saves 5-10 hours per week',
        'Developers: AI-assisted code writing and review — speeds up software delivery',
        'Analysts: summarize long regulatory documents, earnings reports, and research',
        'Operations: draft responses to internal requests, generate structured reports from unstructured data',
      ],
    },
    {
      title: '⚠️ The Main Risk: Hallucinations',
      body: 'The biggest risk with Gen AI is that the model can confidently state something that is completely wrong. This is called a "hallucination." In banking, a wrong answer in a client document or compliance filing can be serious.',
      bullets: [
        'Hallucinations happen because the model generates plausible-sounding text — it does not "know" facts the way a human does',
        'Example: a model might cite a regulation that does not exist, or state an incorrect financial figure',
        'Our mitigation: all Gen AI outputs are reviewed by a human before being used',
        'We also use RAG (see below) to anchor answers in real documents',
      ],
    },
    {
      title: '🔗 How We Reduce Risk: RAG',
      body: 'RAG stands for Retrieval Augmented Generation. Instead of letting the AI answer from memory, we first pull the relevant real document, then have the AI summarize or answer based on that document.',
      bullets: [
        'Think of it like giving the AI the textbook before the exam, instead of asking it to remember everything',
        'The AI\'s answer is grounded in an actual source document you can verify',
        'Dramatically reduces hallucinations in document-heavy use cases',
        'We use RAG for regulatory analysis, policy Q&A, and loan document review',
      ],
    },
    {
      title: '📋 How We Govern Gen AI',
      body: 'Governance is non-negotiable in a regulated bank. Our Gen AI governance framework covers four areas:',
      bullets: [
        'Approved models only: every LLM must pass through the AI Portal before anyone can use it',
        'Data privacy: customer PII (personal data) is never sent to a vendor model without explicit controls — we use private deployments or data masking',
        'Audit trail: every Gen AI interaction in a business context is logged',
        'Human review: Gen AI outputs are drafts — humans approve before anything goes to a client or regulator',
      ],
    },
    {
      title: '⚖️ The Regulation: SR 11-7',
      body: 'SR 11-7 is the Federal Reserve\'s guidance on Model Risk Management. It applies to all AI models at banks — including Gen AI. Management needs to know we are compliant.',
      bullets: [
        'Requires every model to be validated before deployment',
        'Requires ongoing monitoring after deployment',
        'Requires documentation of what the model does, its limitations, and its risks',
        'Our AI Portal workflow automatically satisfies these requirements for every use case',
        '"We do not deploy any Gen AI without completing our SR 11-7 validation process"',
      ],
    },
    {
      title: '💡 Key Talking Points for Management',
      bullets: [
        '"Gen AI helps our employees do more in less time — it is a productivity tool, not a replacement"',
        '"We only deploy use cases where the risk is understood and a human is in the loop"',
        '"Our governance framework ensures every Gen AI use is logged, approved, and compliant with SR 11-7"',
        '"We are not experimenting blindly — each use case has a defined business case, risk rating, and success metric"',
      ],
    },
  ],

  'machine-learning': [
    {
      title: '🧠 What Is Machine Learning?',
      body: 'Machine Learning (ML) is AI that learns from historical data to make predictions. Unlike traditional software where humans write every rule, ML models discover patterns on their own by studying thousands or millions of past examples.',
      bullets: [
        'You show the model thousands of past examples: "here are 10,000 transactions — 200 were fraud"',
        'The model finds the patterns that separate fraud from normal activity',
        'When a new transaction comes in, the model scores it: "70% chance this is fraud"',
        'The bank already uses ML today — fraud detection, credit scoring, and AML are mature ML applications',
      ],
    },
    {
      title: '🏦 Where We Use ML at the Bank',
      body: 'ML has the broadest footprint of any AI technology in banking. These are our highest-priority use cases:',
      bullets: [
        'Fraud detection: flag suspicious transactions in real time before they complete',
        'Credit risk scoring: predict the likelihood a borrower will repay a loan',
        'AML (Anti-Money Laundering): identify patterns in transactions that suggest financial crime',
        'Customer churn: predict which customers are likely to leave and enable proactive outreach',
        'Cross-sell recommendations: identify the right product for the right customer at the right time',
      ],
    },
    {
      title: '🔄 How a Model Gets Built and Deployed',
      body: 'Building an ML model is a structured process with multiple checkpoints — it is not someone just "training AI on a laptop." Here is the lifecycle:',
      bullets: [
        '1. Data collection: gather clean, relevant historical data',
        '2. Feature engineering: transform raw data into the inputs the model will learn from',
        '3. Model training: the algorithm finds patterns in the data',
        '4. Validation: test the model on data it has never seen — does it perform as expected?',
        '5. Champion/challenger: run the new model alongside the existing model to compare performance',
        '6. Deployment: the model goes into production and starts making real decisions',
        '7. Monitoring: track performance daily — does the model still work as expected?',
        '8. Retraining: when performance degrades, refresh the model with new data',
      ],
    },
    {
      title: '⚠️ The Main Risk: Model Drift',
      body: 'A model that worked perfectly last year might not work as well today. This is called model drift — the real world changes, but the model was trained on old data.',
      bullets: [
        'Example: a fraud model trained before a major shift in online shopping behavior might miss new fraud patterns',
        'Example: a credit model trained during low interest rates might not predict defaults accurately in a high-rate environment',
        'Our response: continuous monitoring dashboards that alert us when a model\'s performance degrades',
        'We always have a "champion/challenger" setup — if the live model falters, we have a backup ready',
      ],
    },
    {
      title: '🏗️ What the AI Platform Team Provides',
      body: 'Instead of every data science team building everything from scratch, our platform gives them shared, reusable infrastructure:',
      bullets: [
        'Feature Store: a library of pre-built data inputs teams can reuse — build once, use everywhere',
        'Model Registry: a catalog of all models in development and production, with their status and performance metrics',
        'Automated pipelines: standardized workflows from training through deployment — faster and more consistent',
        'Monitoring dashboards: real-time performance tracking with automated alerts',
        'Governance gates: SR 11-7 validation checkpoints built into every deployment path',
      ],
    },
    {
      title: '⚖️ Regulations We Must Follow',
      body: 'ML in banking is heavily regulated. Here is what management needs to know we are on top of:',
      bullets: [
        'SR 11-7: model validation and risk management — required for all models',
        'ECOA (Equal Credit Opportunity Act): credit models must not discriminate based on race, gender, age, or other protected characteristics',
        'FCRA (Fair Credit Reporting Act): credit decisions must be explainable — we must be able to tell a customer why they were declined',
        'BSA/AML: our transaction monitoring models must be demonstrably effective to regulators',
        'Our platform embeds these requirements — you cannot deploy a model without satisfying them',
      ],
    },
    {
      title: '💡 Key Talking Points for Management',
      bullets: [
        '"ML is not new to the bank — we are maturing how we build, govern, and scale it"',
        '"Our platform means data scientists spend time on models, not plumbing — faster time to value"',
        '"Every model deployed through our platform is SR 11-7 compliant and continuously monitored"',
        '"Champion/challenger testing means we never replace a working model without proof the new one is better"',
      ],
    },
  ],

  'doc-intelligence': [
    {
      title: '📄 What Is Document Intelligence?',
      body: 'Document Intelligence uses AI to automatically read, understand, and extract information from documents — the same work a human analyst does manually, but in seconds instead of hours.',
      bullets: [
        'Instead of a person opening a PDF and typing data into a system, AI reads the document and extracts the data automatically',
        'Works on PDFs, scanned images, photos of documents, and structured forms',
        'Can handle complex layouts: tables, multi-column forms, handwritten fields',
        'The extracted data feeds directly into bank systems — no manual data entry',
      ],
    },
    {
      title: '🔬 The Technologies Inside It',
      body: 'Document Intelligence combines several AI technologies working together:',
      bullets: [
        'OCR (Optical Character Recognition): converts an image of text into actual readable text — the foundational layer',
        'NLP (Natural Language Processing): understands what the text means, not just what it says',
        'Computer Vision: understands the visual layout of a page — where tables are, where signatures appear',
        'Extraction Models: trained on specific document types to know exactly where to find each data field',
        'Together these move from "pixels on a page" to "structured, usable data in our systems"',
      ],
    },
    {
      title: '🏦 What We\'re Targeting First',
      body: 'Our Phase 1 focus is loan origination — the process of approving mortgages and personal loans. This is where manual document handling is most painful and the ROI is clearest.',
      bullets: [
        'Target documents: pay stubs, W-2s, bank statements, tax returns, government IDs',
        'Current state: loan processors manually open each document and type data into the origination system',
        'Future state: AI extracts the data in seconds, processor reviews and approves exceptions only',
        'Estimated impact: 60-80% reduction in document handling time per loan application',
        'Phase 2 will expand to KYC/AML identity verification and contract analysis',
      ],
    },
    {
      title: '✅ How We Ensure Accuracy',
      body: 'The biggest concern with automation is accuracy — especially in lending and compliance contexts. Here is how we handle it:',
      bullets: [
        'Confidence scoring: every extracted field gets a score — "95% confident this is the gross income figure"',
        'Low-confidence fields are automatically routed to a human for review and correction',
        'High-confidence fields are auto-populated — humans only see exceptions',
        'Every extraction is logged: what was extracted, confidence score, and who reviewed it',
        'Models improve over time as reviewers correct mistakes — the system learns from exceptions',
      ],
    },
    {
      title: '🔒 Privacy & Compliance',
      body: 'Documents contain sensitive customer information. Our controls ensure we handle it correctly:',
      bullets: [
        'All document processing happens over encrypted connections — data never travels in plain text',
        'Data minimization: we extract what we need and do not store the original document longer than required',
        'Retention policies: extracted data is kept only as long as legally required, then deleted',
        'Access controls: only authorized staff and systems can access extracted personal data',
        'KYC use: AI assists the analyst — a human must approve the identity verification result, AI does not decide alone',
      ],
    },
    {
      title: '💰 The Business Case',
      body: 'Document Intelligence pays for itself quickly. Here is how to frame the ROI:',
      bullets: [
        'Labor savings: fewer manual hours per loan application — measurable reduction in processing cost',
        'Speed: faster loan approvals improve customer experience and competitive positioning',
        'Accuracy: AI is more consistent than manual entry — fewer errors and rework cycles',
        'Scale: handle 2x the loan volume without 2x the headcount',
        'Compliance: consistent, auditable extraction process vs. variability between human processors',
      ],
    },
    {
      title: '💡 Key Talking Points for Management',
      bullets: [
        '"We are automating the most manual, error-prone parts of document-heavy processes — starting with loan origination"',
        '"AI handles the routine; our people handle the exceptions and the judgment calls"',
        '"Accuracy is protected by confidence scoring — nothing low-confidence auto-approves without a human review"',
        '"Phase 1 ROI is measurable within months of going live — processing time, error rate, cost per application"',
      ],
    },
  ],

  'platform-strategy': [
    {
      title: '🚀 Who We Are and Why We Exist',
      body: 'The AI Platform team is a brand new team with a big mission: make the bank competitive in AI — safely. We are not just doing AI projects. We are building the foundation that every AI project at the bank will run on.',
      bullets: [
        'We build shared infrastructure that all other teams consume — like an internal AI utility',
        'We set the standards, the tools, and the governance processes for AI across the bank',
        'We enable other teams to move faster by giving them building blocks instead of starting from scratch',
        'Think of us as the team that builds the roads — every business line drives on them',
      ],
    },
    {
      title: '📌 Our Four Strategic Pillars',
      body: 'Everything we do connects back to four core goals. These are the pillars of our strategy:',
      bullets: [
        '⚡ Speed: reduce the time it takes to go from idea to deployed AI — weeks, not months',
        '🛡️ Safety: build governance and risk controls into every AI deployment so the bank is always protected',
        '📈 Scale: build once, share widely — shared infrastructure means every team benefits from every investment',
        '📐 Standardization: consistent tools, processes, and quality bars across all AI work at the bank',
      ],
    },
    {
      title: '🗓️ Our 12-Month Roadmap',
      body: 'We are moving fast but deliberately. Here is what we are delivering and when:',
      bullets: [
        'Q1-Q2: AI Portal foundation — platform built, model catalog live, first use cases onboarded. First Gen AI pilot with relationship management team.',
        'Q3: Document Intelligence pilot with loan operations. ML platform foundation. AI Portal Phase 1 complete.',
        'Q4: Self-service AI access live for business lines. Stakeholder performance dashboard. ML platform operational.',
        'Year 2: AI Portal marketplace. Expanded Gen AI use cases. ML models delivering measurable business outcomes.',
      ],
    },
    {
      title: '⚠️ The Risk If We Do Not Do This',
      body: 'One of the most important things to communicate to management is the cost of inaction. This is not optional — it is competitive.',
      bullets: [
        'Leading banks are already using AI to cut operational costs 20-30%',
        'Without a platform, teams will adopt AI independently — creating compliance gaps and duplicate costs',
        'Regulators are paying close attention to AI governance — uncoordinated adoption creates exam risk',
        'The talent gap widens: AI-forward banks attract the best data scientists and technologists',
        'Every month without a platform is a month competitors pull further ahead',
      ],
    },
    {
      title: '🤝 How We Work With Risk and Compliance',
      body: 'Our team is not separate from governance — we are partners with Risk and Compliance from day one.',
      bullets: [
        'Model Risk Management (MRM) requirements are built into our AI Portal workflow — not bolted on after',
        'Our team includes someone dedicated to AI governance and compliance',
        'We work with Legal and Compliance to stay ahead of emerging AI regulations',
        'Every high-risk AI use case gets an explicit MRM team sign-off before deployment',
        'We produce regular reporting for Risk and compliance on AI usage across the bank',
      ],
    },
    {
      title: '📊 How We Measure Our Success',
      body: 'Our team is accountable to business outcomes, not just technology delivery. Here is how we are measured:',
      bullets: [
        'Business value delivered: time saved, cost reduced, revenue enabled — tied to specific use cases',
        'AI adoption rate: how many teams are actively using our platform',
        'Time-to-production: how long it takes a new use case to go from approval to live',
        'Compliance record: zero unauthorized AI deployments, zero material regulatory findings related to AI',
        'Platform reliability: uptime and performance of the AI Portal and shared infrastructure',
      ],
    },
    {
      title: '💡 Key Talking Points for Management',
      bullets: [
        '"We are the bank\'s AI foundation — without us, every team builds their own, inconsistently and at greater risk"',
        '"Our approach is governance-first: we move fast, but never at the expense of compliance"',
        '"We are not building AI for its own sake — every initiative is tied to a business outcome"',
        '"By end of year, the AI Platform will be the reason this bank can adopt AI faster and safer than our peers"',
      ],
    },
  ],
}
