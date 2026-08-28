import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send, Bot, User, Sparkles, ArrowUp, ArrowDown, Grip } from 'lucide-react'

/* ============================================================
   KNOWLEDGE BASE
   ------------------------------------------------------------
   Add new items here — no changes needed to the prediction
   engine below. Shape of each item:

   {
     id: 'unique_id',
     intent: 'one_of_the_intent_ids',
     component: ['ocr', 'process_flow'],   // one or more component tags
     keywords: ['invoice', 'process flow'], // single or multi-word phrases
     questions: ['Can I automate invoices?', ...], // example phrasings
     answer: '...',
     related: ['other_item_id'],   // optional, powers follow-up suggestions
     followUpLabel: '...',         // optional, short label used when THIS item is suggested as a follow-up
   }
   ============================================================ */
const KB = [
  /* ---------- PRODUCT ---------- */
  {
    id: 'product_overview', intent: 'product_overview', component: ['platform'],
    keywords: ['skiode', 'platform', 'ai powered', 'low code'],
    questions: ['What is skiode?', 'What is skiode platform?', 'Tell me about skiode', 'Explain skiode'],
    answer: 'skiode is an AI-powered low-code platform that lets you build business applications, automate workflows, deploy bots, and integrate with 50+ systems — all from one visual workspace, with little to no coding required.',
    related: ['components_overview', 'what_can_build', 'how_it_works'],
  },
  {
    id: 'what_can_build', intent: 'application_builder', component: ['platform', 'application_builder'],
    keywords: ['build', 'create', 'applications', 'what can i build'],
    questions: ['What can I build with skiode?', 'What kind of apps can I build?', 'What can I create with skiode?'],
    answer: 'You can build almost any business application — approval systems, onboarding portals, procurement tools, service desks, inventory trackers, and more — using drag-and-drop forms, visual workflows, and pre-built integrations.',
    followUpLabel: 'What can I build with skiode?',
  },
  {
    id: 'why_use_skiode', intent: 'benefits', component: ['platform'],
    keywords: ['why', 'benefit', 'benefits', 'advantage'],
    questions: ['Why should I use skiode?', 'What are the benefits of skiode?', 'Why choose skiode?'],
    answer: 'skiode cuts app development time from months to weeks, removes the need for large dev teams, and unifies forms, workflows, AI, RPA, and integrations in a single platform — so you spend less time stitching tools together and more time running your business.',
  },
  {
    id: 'who_can_use', intent: 'product_overview', component: ['platform'],
    keywords: ['who can use', 'citizen developer', 'business user', 'non technical'],
    questions: ['Who can use skiode?', 'Is skiode for developers only?', 'Can non-technical people use skiode?'],
    answer: 'skiode is built for everyone — business users (citizen developers) can build forms and workflows visually with no code, while developers can extend apps with APIs, scripts, and custom components for advanced needs.',
  },
  {
    id: 'how_it_works', intent: 'how_it_works', component: ['platform', 'application_builder'],
    keywords: ['how does it work', 'how it works', 'process of building'],
    questions: ['How does skiode work?', 'How do I build something in skiode?', 'Walk me through how skiode works'],
    answer: 'You design forms with drag-and-drop, map out your process visually in Process Flow, add AI/OCR or bots where needed, connect to your existing systems, and deploy — all without writing code. Most apps go from idea to live in weeks.',
  },
  {
    id: 'low_code_no_code', intent: 'product_overview', component: ['platform', 'application_builder'],
    keywords: ['low code', 'no code', 'coding required'],
    questions: ['Is skiode low-code/no-code?', 'Do I need to code?', 'Is skiode a no-code platform?'],
    answer: 'Yes — skiode is a low-code/no-code platform. Everything from forms to workflows is visual and drag-and-drop, so business users can build without programming, while developers can still extend it with code when they want to.',
  },
  {
    id: 'components_overview', intent: 'product_overview',
    component: ['platform', 'application_builder', 'form_builder', 'process_flow', 'ai', 'ocr', 'rpa', 'bot', 'dms', 'dashboard', 'integration', 'security', 'users_permissions', 'mobile'],
    keywords: ['components', 'component', 'modules', 'module', 'skiode components', 'what makes up skiode'],
    questions: [
      'What are the components in skiode?',
      'What components does skiode have?',
      'What modules does skiode have?',
      'List the skiode components',
      'What are the main components of skiode?',
    ],
    answer: 'skiode is built from these core components:\n\n• Application Builder — assemble complete business apps visually\n• Form Builder — drag-and-drop forms with 20+ field types\n• Process Flow — visual workflows, approvals, and SLA tracking\n• AI & OCR — extract and validate data from documents\n• RPA — automate repetitive web, desktop, and Excel tasks\n• BOTs — configurable automation bots\n• DMS — centralized, version-controlled document storage\n• Dashboards & Reporting — real-time KPIs and analytics\n• Integrations — 50+ connectors (SAP, Oracle, Salesforce, APIs, and more)\n• Users & Permissions — role-based access and security\n• Mobile — native iOS/Android apps and responsive web\n\nThey all work together in one connected workspace.',
    followUpLabel: 'What are the components in skiode?',
  },

  /* ---------- PLATFORM / APPLICATION BUILDER ---------- */
  {
    id: 'build_business_apps', intent: 'application_builder', component: ['application_builder'],
    keywords: ['business application', 'build application', 'custom app'],
    questions: ['Can I build business applications?', 'Can I build a custom application?'],
    answer: "Yes. skiode's Application Builder lets you assemble complete business applications — forms, workflows, dashboards, and permissions — from reusable, visual building blocks.",
  },
  {
    id: 'no_code_apps', intent: 'application_builder', component: ['application_builder'],
    keywords: ['without coding', 'no programming'],
    questions: ['Can I create applications without coding?', 'Can I build apps without programming knowledge?'],
    answer: 'Absolutely. skiode is designed for citizen developers — you build applications visually with drag-and-drop tools, no programming knowledge required.',
  },
  {
    id: 'custom_forms', intent: 'form_builder', component: ['form_builder'],
    keywords: ['custom form', 'create form', 'form builder'],
    questions: ['Can I create custom forms?', 'Can I build my own forms?'],
    answer: 'Yes. The Form Builder gives you 20+ field types on a drag-and-drop canvas, so you can design custom forms for any process in minutes.',
    followUpLabel: 'How do custom forms work?',
  },
  {
    id: 'dynamic_forms', intent: 'form_builder', component: ['form_builder'],
    keywords: ['dynamic form', 'conditional field', 'show hide field'],
    questions: ['Can I create dynamic forms?', 'Can fields change based on input?'],
    answer: "Yes. Forms can be fully dynamic — show, hide, or require fields based on conditional logic, so each user only sees what's relevant to them.",
  },
  {
    id: 'form_validations', intent: 'form_builder', component: ['form_builder'],
    keywords: ['validation', 'validate field', 'required field'],
    questions: ['Can I add validations?', 'Can I validate form fields?', 'Can I make fields mandatory?'],
    answer: 'Yes. You can add field-level validation rules — required fields, format checks, min/max values, and custom logic — directly in the Form Builder, no code needed.',
  },
  {
    id: 'mobile_responsive_apps', intent: 'application_builder', component: ['application_builder', 'mobile'],
    keywords: ['mobile responsive', 'responsive app'],
    questions: ['Can applications be mobile responsive?', 'Do apps work on mobile automatically?'],
    answer: 'Yes. Every app you build in skiode is automatically mobile-responsive, and also available through our native mobile apps on iOS and Android.',
  },

  /* ---------- PROCESS FLOW / WORKFLOW ---------- */
  {
    id: 'process_flow_overview', intent: 'process_flow', component: ['process_flow'],
    keywords: ['process flow', 'workflow builder'],
    questions: ['What is Process Flow?', 'What is the process flow builder?'],
    answer: "Process Flow is skiode's visual workflow builder — you drag nodes onto a canvas to design approvals, conditions, SLA rules, and automation triggers, mapping your entire business process without writing code.",
    related: ['approval_workflows', 'sla_configuration', 'workflow_conditions'],
  },
  {
    id: 'approval_workflows', intent: 'approval', component: ['process_flow', 'approval'],
    keywords: ['approval workflow', 'approval process', 'create approval'],
    questions: ['Can I create approval workflows?', 'Can I set up an approval process?'],
    answer: 'Yes. Process Flow lets you design multi-step approval workflows visually — route requests to the right approvers, set escalation rules, and track every step in real time.',
    followUpLabel: 'How do approval workflows work?',
  },
  {
    id: 'automate_business_processes', intent: 'workflow_automation', component: ['process_flow', 'workflow'],
    keywords: ['automate process', 'business process automation'],
    questions: ['Can I automate business processes?', 'Can skiode automate my workflows?'],
    answer: 'Yes. skiode automates end-to-end business processes — from request submission through approvals, notifications, and system updates — using visual Process Flow workflows.',
  },
  {
    id: 'multi_level_approvals', intent: 'approval', component: ['process_flow', 'approval'],
    keywords: ['multi level approval', 'multiple approvers', 'sequential approval'],
    questions: ['Can I create multi-level approvals?', 'Can I set up multiple levels of approval?'],
    answer: 'Yes. You can configure multi-level, sequential, or parallel approvals with different approvers and conditions at each stage — all visually in Process Flow.',
  },
  {
    id: 'sla_configuration', intent: 'sla', component: ['process_flow', 'sla'],
    keywords: ['sla', 'service level agreement', 'deadline'],
    questions: ['Can I configure SLA?', 'Can I set SLA deadlines?', 'Can I track SLA compliance?'],
    answer: 'Yes. You can set SLA timers on any workflow step, trigger reminders or escalations when a deadline is at risk, and monitor SLA compliance on live dashboards.',
    followUpLabel: 'How is SLA tracked?',
  },
  {
    id: 'workflow_conditions', intent: 'workflow_automation', component: ['process_flow', 'workflow'],
    keywords: ['condition', 'conditional logic', 'if then'],
    questions: ['Can I add conditions?', 'Can I add conditional logic to a workflow?'],
    answer: 'Yes. Process Flow supports conditional branching — route a request differently based on amount, department, approval outcome, or any field value you define.',
    followUpLabel: 'How does conditional routing work?',
  },
  {
    id: 'workflow_triggers', intent: 'workflow_automation', component: ['process_flow', 'workflow'],
    keywords: ['trigger workflow', 'automatic trigger', 'auto start'],
    questions: ['Can I trigger workflows automatically?', 'Can a workflow start automatically?'],
    answer: 'Yes. Workflows can trigger automatically — on form submission, a scheduled time, an incoming email, an API call, or a change in another system.',
  },
  {
    id: 'workflow_tracking', intent: 'workflow_automation', component: ['process_flow', 'dashboard'],
    keywords: ['track status', 'workflow status', 'case tracking'],
    questions: ['Can I track workflow status?', 'Can I see where a request is in the process?'],
    answer: 'Yes. Every request has a live status trail, so you and your team can see exactly which step it\'s on, who owns it, and how long it\'s been there.',
  },

  /* ---------- AI / OCR ---------- */
  {
    id: 'ai_overview', intent: 'ai', component: ['ai'],
    keywords: ['ai', 'artificial intelligence', 'machine learning'],
    questions: ['Does skiode use AI?', 'What AI capabilities does skiode have?'],
    answer: 'Yes. skiode uses AI/ML for document extraction (OCR), data validation, classification, and intelligent matching — bringing automation beyond simple rule-based workflows.',
  },
  {
    id: 'ocr_overview', intent: 'ocr', component: ['ocr', 'ai'],
    keywords: ['ocr', 'optical character recognition'],
    questions: ['What is OCR?', 'What does the OCR module do?'],
    answer: 'OCR & AI/ML in skiode reads documents — invoices, ID cards, PDFs, QR codes, and barcodes — and automatically extracts the data into structured fields, ready to flow into your workflows.',
    related: ['extract_invoice_data', 'document_automation', 'ai_overview'],
  },
  {
    id: 'extract_invoice_data', intent: 'invoice_automation', component: ['ocr', 'ai'],
    keywords: ['extract invoice data', 'invoice data'],
    questions: ['Can skiode extract data from invoices?', 'Can I extract invoice data?'],
    answer: 'Yes. OCR automatically reads invoice fields — vendor, amount, line items, tax, due date — and populates them into a form for validation or approval, no manual entry needed.',
  },
  {
    id: 'pdf_extraction', intent: 'document_processing', component: ['ocr', 'ai'],
    keywords: ['pdf extraction', 'extract from pdf'],
    questions: ['Can I extract data from PDFs?', 'Can skiode read PDF documents?'],
    answer: 'Yes. OCR extracts structured data from PDFs and scanned documents, mapping the fields you need directly into your forms and workflows.',
  },
  {
    id: 'document_automation', intent: 'document_processing', component: ['ocr', 'ai', 'dms'],
    keywords: ['process documents automatically', 'document automation'],
    questions: ['Can I process documents automatically?', 'Can document handling be automated end to end?'],
    answer: 'Yes. From intake to storage, skiode automates the full document lifecycle — OCR extracts the data, AI validates it, Process Flow routes it for approval, and DMS stores it with version control.',
  },
  {
    id: 'ocr_validation', intent: 'ocr', component: ['ocr', 'ai'],
    keywords: ['validate extracted data', 'ocr accuracy', 'data validation'],
    questions: ['Can OCR validate extracted data?', 'How accurate is OCR data extraction?'],
    answer: 'Yes. AI/ML cross-checks extracted data against your business rules and master data, flagging mismatches for review so only accurate data flows into your systems.',
  },
  {
    id: 'ai_document_classification', intent: 'ai', component: ['ai', 'ocr'],
    keywords: ['classify document', 'document classification', 'document type'],
    questions: ['Can AI classify documents?', 'Can skiode identify document types automatically?'],
    answer: 'Yes. AI can automatically classify incoming documents by type — invoice, ID, contract, and more — and route each one to the right process.',
  },
  {
    id: 'invoice_automation', intent: 'invoice_automation', component: ['ocr', 'process_flow', 'rpa'],
    keywords: ['invoice', 'bill', 'approval', 'extract', 'automate', 'invoice approval', 'invoice processing'],
    questions: [
      'Can I automate invoice processing?',
      'Can skiode process invoices?',
      'Can I extract invoice data?',
      'Can invoice approval be automated?',
      'Can I automate invoice approval?',
      'How can I automate invoice processing?',
    ],
    answer: 'Yes. skiode automates invoice processing end to end by combining OCR, AI, and Process Flow: OCR extracts the invoice data, AI validates and classifies it, and Process Flow routes it through the right approval steps automatically.',
    related: ['ocr_overview', 'approval_workflows', 'integrations_overview'],
  },

  /* ---------- RPA ---------- */
  {
    id: 'rpa_overview', intent: 'rpa', component: ['rpa'],
    keywords: ['rpa', 'robotic process automation'],
    questions: ['What is RPA?', "What's RPA?", 'Tell me about robotic process automation', 'Can skiode automate repetitive tasks?'],
    answer: 'RPA in skiode automates repetitive, rule-based tasks — web actions, desktop steps, Excel-to-ERP data entry, and screen scraping — configured visually, with no scripting required.',
    related: ['excel_automation', 'bots_overview', 'integrations_overview'],
  },
  {
    id: 'excel_automation', intent: 'rpa', component: ['rpa'],
    keywords: ['automate excel', 'excel automation'],
    questions: ['Can skiode automate Excel?', 'Can I automate work in Excel?'],
    answer: "Yes. skiode's RPA can read, update, and transfer data in and out of Excel automatically — great for eliminating manual data entry and repetitive spreadsheet work.",
  },
  {
    id: 'desktop_automation', intent: 'rpa', component: ['rpa'],
    keywords: ['desktop application', 'desktop automation'],
    questions: ['Can I automate desktop applications?', 'Can RPA control desktop apps?'],
    answer: 'Yes. RPA bots can interact with desktop applications directly — clicking, typing, and reading fields — to automate legacy or non-API systems.',
  },
  {
    id: 'web_automation', intent: 'rpa', component: ['rpa'],
    keywords: ['web application automation', 'browser automation'],
    questions: ['Can I automate web applications?', 'Can RPA work in a browser?'],
    answer: 'Yes. RPA can navigate websites and web applications automatically — filling forms, extracting data, and completing multi-step actions without manual clicks.',
  },
  {
    id: 'excel_to_sap', intent: 'rpa', component: ['rpa', 'integration'],
    keywords: ['excel to erp', 'excel to sap', 'transfer excel data'],
    questions: ['Can I transfer Excel data to ERP?', 'Can I automate Excel data entry into SAP?'],
    answer: 'Yes. RPA combined with our SAP/ERP integration can read data from Excel and post it directly into SAP or other ERP systems automatically — a common way teams eliminate manual re-entry.',
  },
  {
    id: 'rpa_repetitive_tasks', intent: 'rpa', component: ['rpa'],
    keywords: ['repetitive task', 'manual task', 'routine task'],
    questions: ['Can RPA perform repetitive tasks?', 'Can bots do routine manual work for me?'],
    answer: 'Yes — that\'s exactly what RPA is built for. It takes over repetitive, rule-based tasks like data entry, copying between systems, and routine checks, freeing your team for higher-value work.',
  },
  {
    id: 'rpa_no_code', intent: 'rpa', component: ['rpa'],
    keywords: ['rpa without coding', 'no code bot'],
    questions: ['Can I create RPA bots without coding?', 'Do I need to script RPA bots?'],
    answer: 'Yes. RPA bots are configured visually — record or define the steps, set the triggers, and deploy — no scripting or programming knowledge required.',
  },

  /* ---------- BOTS ---------- */
  {
    id: 'bots_overview', intent: 'bot', component: ['bot'],
    keywords: ['skiode bots', 'what are bots'],
    questions: ['What are skiode BOTs?', 'What is a bot in skiode?'],
    answer: 'skiode BOTs are configurable process bots — document generators, Excel-to-JSON converters, invoice generators, QR generators, and custom logic bots — that run automation tasks without any coding.',
    related: ['bots_document_generation', 'bots_excel_processing', 'custom_bots'],
  },
  {
    id: 'bots_capabilities', intent: 'bot', component: ['bot'],
    keywords: ['what can bots automate', 'bot capabilities'],
    questions: ['What can BOTs automate?', 'What tasks can a bot handle?'],
    answer: 'Bots can generate documents, convert file formats, produce reports, generate QR/barcodes, run scheduled jobs, and execute custom business logic — all triggered automatically or on demand.',
  },
  {
    id: 'custom_bots', intent: 'bot', component: ['bot'],
    keywords: ['custom bot', 'build a bot'],
    questions: ['Can I create custom bots?', 'Can I build my own bot logic?'],
    answer: 'Yes. You can configure custom bots with your own logic, inputs, and outputs — no coding required — to handle tasks specific to your business.',
  },
  {
    id: 'bots_document_generation', intent: 'bot', component: ['bot', 'dms'],
    keywords: ['generate document', 'document generator bot'],
    questions: ['Can bots generate documents?', 'Can a bot create documents automatically?'],
    answer: 'Yes. Document generator bots can auto-create invoices, letters, contracts, and reports from your data and templates, then store or send them automatically.',
  },
  {
    id: 'bots_excel_processing', intent: 'bot', component: ['bot', 'rpa'],
    keywords: ['bot process excel', 'excel bot'],
    questions: ['Can bots process Excel files?', 'Can a bot convert Excel data automatically?'],
    answer: 'Yes. Bots can read Excel files, convert them to structured formats like JSON, validate the data, and feed it directly into your workflows or other systems.',
  },
  {
    id: 'bots_scheduled_automation', intent: 'bot', component: ['bot'],
    keywords: ['bots run automatically', 'scheduled bot'],
    questions: ['Can bots run automatically?', 'Can I schedule a bot to run on its own?'],
    answer: 'Yes. Bots can run on a schedule, be triggered by an event, or be launched manually — whatever fits your process.',
  },

  /* ---------- INTEGRATIONS ---------- */
  {
    id: 'integrations_overview', intent: 'integration', component: ['integration'],
    keywords: ['integration', 'integrations supported', 'connect systems'],
    questions: ['What integrations are supported?', 'What systems can skiode connect to?'],
    answer: 'skiode connects with 50+ systems — Oracle, SAP, NetSuite, Dynamics 365, Salesforce, Google, Microsoft, and more — using a visual API builder to map data and authenticate in minutes.',
    related: ['sap_integration', 'rest_api', 'oracle_integration'],
  },
  {
    id: 'sap_integration', intent: 'sap', component: ['integration'],
    keywords: ['sap', 'sap integration', 'connect sap'],
    questions: ['Can I integrate SAP?', 'Can skiode connect to SAP?', 'Can I connect SAP?'],
    answer: 'Yes. skiode has pre-built connectors for SAP, so you can sync data, trigger transactions, and automate SAP-related processes directly from your workflows.',
  },
  {
    id: 'oracle_integration', intent: 'oracle', component: ['integration'],
    keywords: ['oracle', 'oracle fusion', 'oracle integration'],
    questions: ['Can I integrate Oracle?', 'Can skiode connect to Oracle Fusion?'],
    answer: 'Yes. skiode integrates with Oracle and Oracle Fusion Applications, letting you sync master data and automate processes that span both systems.',
  },
  {
    id: 'salesforce_integration', intent: 'integration', component: ['integration'],
    keywords: ['salesforce', 'salesforce integration'],
    questions: ['Can I integrate Salesforce?', 'Can skiode connect to Salesforce?'],
    answer: 'Yes. skiode connects with Salesforce to sync records, trigger workflows from CRM events, and keep sales and operations data aligned.',
  },
  {
    id: 'rest_api', intent: 'api', component: ['integration', 'api'],
    keywords: ['rest api', 'api connection', 'connect api'],
    questions: ['Can I connect REST APIs?', 'Can skiode call external APIs?'],
    answer: 'Yes. skiode includes a visual API builder — connect to any REST API, map request/response fields, set authentication, and use the data in your forms and workflows without writing code.',
  },
  {
    id: 'external_database', intent: 'database', component: ['integration'],
    keywords: ['external database', 'connect database', 'database connection'],
    questions: ['Can I connect external databases?', 'Can skiode read from an external database?'],
    answer: 'Yes. skiode can connect to external databases to read and write data, keeping your applications in sync with your existing data sources.',
  },
  {
    id: 'microsoft_integration', intent: 'integration', component: ['integration'],
    keywords: ['microsoft', 'dynamics 365', 'microsoft teams', 'sharepoint'],
    questions: ['Can I integrate Microsoft systems?', 'Can skiode connect to Microsoft Dynamics or Teams?'],
    answer: 'Yes. skiode integrates with Microsoft Dynamics 365, Teams, and SharePoint — so notifications, approvals, and data can flow between skiode and your Microsoft stack.',
  },
  {
    id: 'google_integration', intent: 'integration', component: ['integration'],
    keywords: ['google', 'google workspace'],
    questions: ['Can I integrate Google services?', 'Can skiode connect to Google Workspace?'],
    answer: 'Yes. skiode integrates with Google Workspace, so you can sync data, trigger workflows, and keep documents in sync with tools like Gmail, Sheets, and Drive.',
  },

  /* ---------- DMS ---------- */
  {
    id: 'dms_overview', intent: 'dms', component: ['dms'],
    keywords: ['dms', 'document management system'],
    questions: ['What is DMS?', 'What is document management in skiode?'],
    answer: 'DMS (Document Management System) gives you centralized, version-controlled document storage — linked directly to your forms and workflows — so files stay organized, secure, and auditable.',
    related: ['document_versioning', 'document_access_control'],
  },
  {
    id: 'document_storage', intent: 'dms', component: ['dms'],
    keywords: ['store document', 'document storage'],
    questions: ['Can I store documents?', 'Can skiode store my files centrally?'],
    answer: 'Yes. DMS gives you centralized document storage linked to your forms and workflows, so every file is easy to find and tied to the right record.',
  },
  {
    id: 'document_versioning', intent: 'dms', component: ['dms'],
    keywords: ['document version', 'version control'],
    questions: ['Can I manage document versions?', 'Does skiode track document versions?'],
    answer: 'Yes. DMS keeps a full version history for every document, so you can see changes over time and roll back if needed.',
  },
  {
    id: 'document_access_control', intent: 'dms', component: ['dms', 'security'],
    keywords: ['document access', 'control access to documents'],
    questions: ['Can I control document access?', 'Can I restrict who sees a document?'],
    answer: 'Yes. DMS supports role-based access control, so only the right people can view, edit, or download a given document.',
  },

  /* ---------- DASHBOARDS / REPORTING ---------- */
  {
    id: 'dashboards_overview', intent: 'dashboard', component: ['dashboard'],
    keywords: ['dashboard', 'dashboards'],
    questions: ['Can I create dashboards?', 'Does skiode have dashboards?'],
    answer: 'Yes. skiode gives you real-time, customizable dashboards with charts, case tracking, and live metrics, so you can monitor your processes at a glance.',
    related: ['kpi_tracking', 'reports', 'sla_monitoring'],
  },
  {
    id: 'reports', intent: 'reporting', component: ['dashboard', 'reporting'],
    keywords: ['reports', 'create report', 'custom report'],
    questions: ['Can I create reports?', 'Can I generate custom reports?'],
    answer: 'Yes. You can build custom reports from any process or form data, filter and export them, and share them with stakeholders — no separate BI tool needed.',
  },
  {
    id: 'kpi_tracking', intent: 'dashboard', component: ['dashboard'],
    keywords: ['kpi', 'track kpi', 'key performance indicator'],
    questions: ['Can I track KPIs?', 'Can I monitor key performance indicators?'],
    answer: 'Yes. Dashboards let you track KPIs like turnaround time, approval rates, and volume in real time, all customizable to what matters to your team.',
  },
  {
    id: 'sla_monitoring', intent: 'sla', component: ['dashboard', 'sla'],
    keywords: ['monitor sla', 'sla dashboard'],
    questions: ['Can I monitor SLA?', 'Can I see which requests are breaching SLA?'],
    answer: 'Yes. SLA status shows live on your dashboards, with alerts for requests approaching or breaching their deadline, so nothing slips through the cracks.',
  },
  {
    id: 'analytics', intent: 'reporting', component: ['dashboard', 'reporting'],
    keywords: ['analytics', 'data driven decisions'],
    questions: ['Does skiode provide analytics?', 'Can I get analytics on my processes?'],
    answer: "Yes. skiode's analytics turn your process data into actionable insight — volumes, bottlenecks, cycle times, and trends — helping you make data-driven decisions.",
  },

  /* ---------- SECURITY ---------- */
  {
    id: 'security_overview', intent: 'security', component: ['security'],
    keywords: ['secure', 'security'],
    questions: ['Is skiode secure?', 'How secure is skiode?'],
    answer: 'Yes. skiode is enterprise-grade secure — ISO 27001 compliant, with role-based access control, field-level permissions, audit logs, SSO, and a 99.9% uptime SLA.',
    related: ['rbac', 'sso', 'audit_logs'],
  },
  {
    id: 'sso', intent: 'authentication', component: ['security'],
    keywords: ['sso', 'single sign on'],
    questions: ['Does skiode support SSO?', 'Can I use single sign-on?'],
    answer: 'Yes. skiode supports SSO, so your team can log in securely using your existing identity provider without managing separate passwords.',
  },
  {
    id: 'rbac', intent: 'permissions', component: ['security', 'users_permissions'],
    keywords: ['role based access', 'rbac'],
    questions: ['Does skiode support role-based access?', 'Can I set roles for users?'],
    answer: 'Yes. skiode supports full role-based access control — define roles and permissions once, and every app, form, and workflow respects them automatically.',
  },
  {
    id: 'field_level_permissions', intent: 'permissions', component: ['users_permissions', 'security'],
    keywords: ['field level permission', 'field access'],
    questions: ['Can I control field-level permissions?', 'Can I hide specific fields from certain users?'],
    answer: 'Yes. You can set field-level permissions so different roles see, edit, or are blocked from specific fields on the same form.',
  },
  {
    id: 'audit_logs', intent: 'security', component: ['security'],
    keywords: ['audit log', 'activity log'],
    questions: ['Does skiode maintain audit logs?', 'Can I see a history of changes?'],
    answer: 'Yes. Every action — who did what, when, and where — is captured in detailed audit logs, giving you full traceability for compliance and troubleshooting.',
  },
  {
    id: 'iso_compliance', intent: 'security', component: ['security'],
    keywords: ['iso 27001', 'compliance certification'],
    questions: ['Is skiode ISO 27001 compliant?', 'What compliance certifications does skiode have?'],
    answer: 'Yes. skiode is ISO 27001 compliant, reflecting strong information security management practices across the platform.',
  },

  /* ---------- MOBILE ---------- */
  {
    id: 'mobile_support', intent: 'mobile', component: ['mobile'],
    keywords: ['mobile support', 'mobile access'],
    questions: ['Does skiode support mobile?', 'Can I access skiode on mobile?'],
    answer: 'Yes. skiode apps work on web and mobile — your teams can access forms, workflows, and dashboards from anywhere.',
    related: ['mobile_approvals', 'mobile_app'],
  },
  {
    id: 'mobile_approvals', intent: 'mobile', component: ['mobile', 'approval'],
    keywords: ['approve from mobile', 'mobile approval'],
    questions: ['Can users approve requests from mobile?', 'Can I approve tasks from my phone?'],
    answer: 'Yes. Approvers can review and act on requests directly from their mobile device — no need to be at a desk to keep processes moving.',
  },
  {
    id: 'mobile_app', intent: 'mobile', component: ['mobile'],
    keywords: ['mobile application', 'android ios app'],
    questions: ['Is there a mobile application?', 'Do you have a native mobile app?'],
    answer: 'Yes. skiode has native mobile apps available on the App Store and Google Play, alongside the fully responsive web experience.',
  },

  /* ---------- BUSINESS / USE CASE ---------- */
  {
    id: 'business_impact', intent: 'use_case', component: ['platform'],
    keywords: ['help my business', 'business impact'],
    questions: ['How can skiode help my business?', 'What impact can skiode have on my business?'],
    answer: 'skiode helps you cut manual work, speed up approvals, connect disconnected systems, and get real-time visibility into your operations — typically reducing process cycle times significantly within weeks of going live.',
  },
  {
    id: 'reduce_manual_work', intent: 'use_case', component: ['platform', 'workflow'],
    keywords: ['reduce manual work', 'less manual work'],
    questions: ['Can skiode reduce manual work?', 'Can skiode cut down manual data entry?'],
    answer: 'Yes. By combining forms, workflows, OCR, and RPA, skiode removes manual data entry, manual routing, and manual follow-ups across your processes.',
  },
  {
    id: 'automate_approvals_usecase', intent: 'use_case', component: ['process_flow', 'approval'],
    keywords: ['automate approval process', 'approval automation'],
    questions: ['Can skiode automate approval processes?', 'Can I automate the way requests get approved?'],
    answer: 'Yes. Process Flow automatically routes requests to the right approver, applies SLA timers, and escalates when needed — no manual chasing required.',
  },
  {
    id: 'replace_excel', intent: 'use_case', component: ['rpa', 'form_builder'],
    keywords: ['replace excel', 'excel process'],
    questions: ['Can skiode replace manual Excel processes?', 'Can I move my Excel-based process into skiode?'],
    answer: 'Yes. You can replace error-prone spreadsheet processes with structured forms, automated workflows, and RPA — while still exchanging data with Excel where needed.',
  },
  {
    id: 'integrate_existing_systems', intent: 'use_case', component: ['integration'],
    keywords: ['integrate existing systems', 'connect current systems'],
    questions: ['Can skiode integrate with existing systems?', 'Will skiode work with the systems I already use?'],
    answer: 'Yes. skiode is built to sit alongside your existing systems — ERP, CRM, databases, and more — connecting them rather than replacing them.',
  },
  {
    id: 'build_time', intent: 'how_it_works', component: ['platform', 'application_builder'],
    keywords: ['how long to build', 'time to build'],
    questions: ['How long does it take to build an application?', 'How quickly can I go live?'],
    answer: 'Most applications go from idea to live in a matter of weeks, not months — thanks to visual building blocks and pre-built integrations.',
  },
  {
    id: 'no_developers_needed', intent: 'how_it_works', component: ['platform'],
    keywords: ['need developers', 'without developers'],
    questions: ['Do I need developers to use skiode?', 'Can business teams build without IT?'],
    answer: 'No. Business users can build and maintain most applications themselves. Developers are only needed for advanced, highly custom requirements.',
  },

  /* ---------- INDUSTRIES ---------- */
  {
    id: 'industries_overview', intent: 'industries', component: ['platform'],
    keywords: ['industries', 'which industries'],
    questions: ['What industries does skiode support?', 'Which industries use skiode?'],
    answer: "skiode serves Manufacturing, Healthcare, Pharma, Banking & Finance, Insurance, Logistics, FMCG & Retail, and Construction — the platform adapts to any industry's workflow needs.",
  },
  {
    id: 'manufacturing_industry', intent: 'industries', component: ['platform'],
    keywords: ['manufacturing'],
    questions: ['Is skiode suitable for manufacturing?', 'Does skiode support manufacturing companies?'],
    answer: 'Yes. skiode supports manufacturing use cases like production tracking, quality checks, procurement, and site/ticketing management.',
  },
  {
    id: 'healthcare_industry', intent: 'industries', component: ['platform'],
    keywords: ['healthcare'],
    questions: ['Can healthcare companies use skiode?', 'Does skiode work for healthcare organizations?'],
    answer: 'Yes. skiode supports healthcare workflows around patient records, compliance, and care coordination, with the security controls the industry requires.',
  },
  {
    id: 'banking_industry', intent: 'industries', component: ['platform'],
    keywords: ['bank', 'banking', 'finance'],
    questions: ['Can banks use skiode?', 'Is skiode suitable for banking and finance?'],
    answer: 'Yes. skiode is used for banking and finance processes like approvals, lending workflows, and compliance-driven operations.',
  },
  {
    id: 'pharma_industry', intent: 'industries', component: ['platform'],
    keywords: ['pharma', 'pharmaceutical'],
    questions: ['Can pharma companies use skiode?', 'Does skiode support pharmaceutical companies?'],
    answer: 'Yes. skiode supports pharma use cases such as sale order automation and compliance-heavy approval workflows.',
  },
  {
    id: 'logistics_industry', intent: 'industries', component: ['platform'],
    keywords: ['logistics', 'supply chain'],
    questions: ['Can logistics companies use skiode?', 'Does skiode support logistics and supply chain?'],
    answer: 'Yes. skiode supports logistics and supply chain processes like shipment tracking, vendor operations, and fulfilment workflows.',
  },

  /* ---------- PRICING / SALES ---------- */
  {
    id: 'pricing', intent: 'pricing', component: ['pricing'],
    keywords: ['pricing', 'cost', 'plan', 'plans'],
    questions: ['How much does skiode cost?', 'What pricing plans are available?', 'What does skiode cost?'],
    answer: 'skiode offers 3 months free with unlimited users and processes across three suites — Development, Automation, and Bots — no credit card required. Try our pricing calculator or visit our Pricing page for full details.',
    related: ['free_trial', 'get_demo', 'contact'],
  },
  {
    id: 'free_trial', intent: 'trial', component: ['pricing'],
    keywords: ['free trial', 'trial'],
    questions: ['Is there a free trial?', 'Can I try skiode for free?'],
    answer: 'Yes. skiode offers 3 months free with unlimited users and processes — no credit card required — so you can try it fully before committing.',
  },
  {
    id: 'get_demo', intent: 'demo', component: ['sales'],
    keywords: ['demo', 'schedule demo', 'live demo'],
    questions: ['How can I get a demo?', 'Can I see a live demo?', 'Can I schedule a demo?'],
    answer: 'We\'d love to show you skiode in action! Click "Request Demo" in the navigation bar and our team will walk you through the platform tailored to your use case.',
    followUpLabel: 'Request a live demo',
  },
  {
    id: 'speak_to_someone', intent: 'contact', component: ['sales'],
    keywords: ['speak to someone', 'talk to sales'],
    questions: ['Can I speak to someone?', 'Can I talk to your team?'],
    answer: 'Of course — click "Request Demo" in the navbar and our team will reach out to set up time to talk through your specific needs.',
  },
  {
    id: 'contact', intent: 'contact', component: ['sales'],
    keywords: ['contact', 'reach you', 'get in touch'],
    questions: ['How can I contact skiode?', 'How do I get in touch with skiode?'],
    answer: 'You can reach us through the Contact section on our website, or click "Request Demo" to schedule a personalized walkthrough. We\'re happy to help!',
  },

  /* ---------- GREETINGS / SMALL TALK ---------- */
  {
    id: 'greeting', intent: 'greeting', component: [],
    keywords: ['hi', 'hello', 'hey', 'good morning', 'good afternoon', 'good evening'],
    questions: ['hi', 'hello', 'hey', 'good morning', 'good afternoon', 'good evening'],
    answer: "Hi! 👋 I'm the skiode AI Assistant. I can help you explore our platform, automation capabilities, integrations, pricing, and use cases. What would you like to know?",
  },
  {
    id: 'thanks', intent: 'thanks', component: [],
    keywords: ['thank you', 'thanks', 'thx', 'appreciate it'],
    questions: ['thank you', 'thanks', 'thx'],
    answer: 'You\'re welcome! If you have more questions, feel free to ask anytime — or click "Request Demo" to see skiode in action. 😊',
  },

  /* ---------- CROSS-COMPONENT USE CASES ---------- */
  {
    id: 'employee_onboarding_automation', intent: 'use_case', component: ['form_builder', 'process_flow', 'workflow'],
    keywords: ['employee onboarding', 'onboarding automation'],
    questions: ['Can I automate employee onboarding?', 'Can skiode handle new hire onboarding?'],
    answer: 'Yes. skiode automates onboarding with a custom form for new hire details, a Process Flow that routes tasks across IT, HR, and managers, and status tracking so nothing gets missed.',
  },
  {
    id: 'approval_system_creation', intent: 'use_case', component: ['form_builder', 'process_flow', 'approval'],
    keywords: ['create an approval system', 'build approval system'],
    questions: ['Can I create an approval system?', 'Can I build a complete approval system in skiode?'],
    answer: 'Yes. Combine the Form Builder for request intake with Process Flow for routing and approvals — you get a complete, trackable approval system with no code.',
  },
  {
    id: 'document_management_usecase', intent: 'use_case', component: ['dms'],
    keywords: ['store and manage documents'],
    questions: ['Can I store and manage documents?', 'Can skiode be my document management system?'],
    answer: 'Yes. DMS gives you centralized, version-controlled, access-controlled document storage tied directly to your forms and workflows.',
  },
  {
    id: 'realtime_kpi_visibility', intent: 'use_case', component: ['dashboard', 'reporting'],
    keywords: ['real time kpi', 'management visibility'],
    questions: ['Can management see real-time KPIs?', 'Can leadership get live visibility into operations?'],
    answer: 'Yes. Dashboards give leadership real-time visibility into KPIs, SLA compliance, and process volumes — no waiting for manual reports.',
  },
  {
    id: 'erp_data_sync_usecase', intent: 'use_case', component: ['rpa', 'integration'],
    keywords: ['sync data with erp', 'erp automation'],
    questions: ['Can I keep my ERP data in sync automatically?', 'Can skiode automate data flow into my ERP?'],
    answer: 'Yes. RPA and our integration connectors can move data automatically between skiode and your ERP — SAP, Oracle, NetSuite, Dynamics — keeping both sides in sync without manual re-entry.',
  },
]

/* ============================================================
   SYNONYMS — extend freely. Maps a canonical term to variants.
   Single-word variants are used for token-level matching;
   multi-word phrases are used for phrase-level detection.
   ============================================================ */
const SYNONYMS = {
  automation: ['automate', 'automation', 'automated', 'automating', 'automatically'],
  workflow: ['process', 'workflow', 'workflows', 'processes', 'flow'],
  invoice: ['invoice', 'invoices', 'bill', 'billing', 'bills'],
  document: ['document', 'documents', 'file', 'files', 'pdf', 'pdfs'],
  integration: ['integrate', 'integration', 'integrations', 'connect', 'connection', 'api', 'apis'],
  pricing: ['price', 'prices', 'pricing', 'cost', 'costs', 'plan', 'plans'],
  demo: ['demo', 'demonstration', 'walkthrough'],
  security: ['secure', 'security', 'compliance', 'compliant', 'protection'],
  mobile: ['mobile', 'phone', 'smartphone', 'android', 'ios'],
  dashboard: ['dashboard', 'dashboards', 'analytics', 'kpi', 'kpis', 'reporting', 'report', 'reports'],
  permission: ['permission', 'permissions', 'access', 'role', 'roles', 'authorization'],
  form: ['form', 'forms', 'field', 'fields'],
  bot: ['bot', 'bots', 'robot'],
  approval: ['approval', 'approvals', 'approve', 'approving', 'approver'],
  build: ['build', 'create', 'design', 'develop', 'making', 'making'],
}

/* Multi-word phrases that should also be recognized as their canonical
   single-token form (checked with word-boundary safety, see containsPhrase). */
const PHRASE_SYNONYMS = [
  ['robotic process automation', 'rpa'],
  ['optical character recognition', 'ocr'],
  ['single sign on', 'sso'],
  ['role based access', 'rbac'],
  ['document management', 'dms'],
]

/* ============================================================
   PREDICTION ENGINE
   ------------------------------------------------------------
   normalizeInput()      — lowercase, strip punctuation, collapse spaces
   tokenize()             — split into words
   calculateSimilarity()  — token-overlap similarity between two token sets
   predictIntent()        — best-guess intent for a message
   predictComponent()     — best-guess component(s) for a message
   getConfidence()        — combines sub-scores into a single 0-1 score
   findBestAnswer()       — main entry point used by the chat UI
   generateClarification()— builds a clarifying question when unsure
   getFollowUpSuggestions()— pulls related-question suggestions for an item
   ============================================================ */

const STOPWORDS = new Set([
  'a', 'an', 'the', 'is', 'are', 'was', 'were', 'do', 'does', 'did',
  'can', 'could', 'should', 'would', 'will', 'to', 'for', 'of', 'in',
  'on', 'with', 'and', 'or', 'about', 'me', 'please', 'what', 'whats',
  'how', 'tell', 'know', 'like', 'want', 'need', 'get', 'have', 'has',
  'i', 'you', 'we', 'they', 'my', 'your', 'our', 'their',
])

function normalizeInput(text) {
  return (text || '')
    .toLowerCase()
    .replace(/['’]/g, '')
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

function tokenize(normalizedText) {
  return normalizedText ? normalizedText.split(' ').filter(Boolean) : []
}

/* Word-boundary-safe "does haystack contain this phrase" check —
   avoids false positives like "history" matching the word "hi". */
function containsPhrase(haystackNorm, needleNorm) {
  if (!haystackNorm || !needleNorm) return false
  return ` ${haystackNorm} `.includes(` ${needleNorm} `)
}

function expandPhrases(normalizedText) {
  let out = normalizedText
  for (const [phrase, canonical] of PHRASE_SYNONYMS) {
    if (containsPhrase(out, phrase) && !containsPhrase(out, canonical)) {
      out += ` ${canonical}`
    }
  }
  return out
}

/* Full pipeline: lowercase/strip punctuation, then expand known phrases. */
function preprocess(text) {
  return expandPhrases(normalizeInput(text))
}

function significantTokens(text) {
  return tokenize(preprocess(text)).filter(t => !STOPWORDS.has(t))
}

function buildSynonymLookup() {
  const map = {}
  Object.entries(SYNONYMS).forEach(([canonical, variants]) => {
    variants.forEach(v => {
      if (!v.includes(' ')) map[v] = canonical
    })
    map[canonical] = canonical
  })
  return map
}
const SYNONYM_LOOKUP = buildSynonymLookup()

function expandWithSynonyms(tokens) {
  const out = new Set()
  tokens.forEach(t => {
    out.add(t)
    if (SYNONYM_LOOKUP[t]) out.add(SYNONYM_LOOKUP[t])
  })
  return [...out]
}

/* Jaccard-style overlap between two token arrays, 0-1. */
function calculateSimilarity(tokensA, tokensB) {
  const setA = new Set(tokensA)
  const setB = new Set(tokensB)
  if (!setA.size || !setB.size) return 0
  let overlap = 0
  setB.forEach(t => { if (setA.has(t)) overlap++ })
  const union = new Set([...setA, ...setB]).size || 1
  return overlap / union
}

function questionSimilarity(inputNorm, inputExpandedSet, questionText) {
  const qNorm = preprocess(questionText)
  if (!qNorm) return 0
  if (inputNorm === qNorm) return 1
  // Require some real length before granting the "contained phrase" bonus —
  // otherwise a short question like "hi" can accidentally match as a
  // substring of unrelated longer input.
  if (qNorm.length >= 4 && (containsPhrase(qNorm, inputNorm) || containsPhrase(inputNorm, qNorm))) return 0.88
  const qTokens = significantTokens(questionText)
  if (!qTokens.length) return 0
  const qExpanded = expandWithSynonyms(qTokens)
  return calculateSimilarity([...inputExpandedSet], qExpanded) * 0.82
}

function keywordScore(inputNorm, inputExpandedSet, keywords) {
  if (!keywords || !keywords.length) return 0
  let hit = 0
  let total = 0
  for (const raw of keywords) {
    const kNorm = preprocess(raw)
    if (!kNorm) continue
    const weight = kNorm.includes(' ') ? 2 : 1
    total += weight
    if (kNorm.includes(' ')) {
      if (containsPhrase(inputNorm, kNorm)) hit += weight
    } else if (inputExpandedSet.has(kNorm) || expandWithSynonyms([kNorm]).some(ek => inputExpandedSet.has(ek))) {
      hit += weight
    }
  }
  if (!total) return 0
  // A hit is weighted by how much of the item's keyword "vocabulary" it
  // covers, but capped against a small normalizer (not the full keyword
  // count) so one strong, specific keyword (e.g. "sap") isn't diluted
  // just because the item also lists other keywords that didn't match.
  return Math.min(1, hit / Math.min(total, 1.5))
}

function componentIntentScore(inputNorm, inputExpandedSet, item) {
  const tags = [item.intent, ...(item.component || [])].filter(Boolean)
  if (!tags.length) return 0
  let hit = 0
  for (const tag of tags) {
    const tagNorm = preprocess(tag.replace(/_/g, ' '))
    if (!tagNorm) continue
    if (tagNorm.includes(' ')) {
      if (containsPhrase(inputNorm, tagNorm)) hit++
    } else if (inputExpandedSet.has(tagNorm) || expandWithSynonyms([tagNorm]).some(e => inputExpandedSet.has(e))) {
      hit++
    }
  }
  return hit / tags.length
}

/* Combines the three sub-scores into one 0-1 confidence value.
   Near-exact / contained question matches get a floor boost so a
   clearly-matched phrase always clears the "answer directly" bar. */
function getConfidence({ qScore, kScore, cScore }) {
  let total = qScore * 0.30 + kScore * 0.40 + cScore * 0.30
  if (qScore >= 0.99) total = Math.max(total, 0.97)
  else if (qScore >= 0.85) total = Math.max(total, 0.75)
  return Math.min(1, Math.max(0, total))
}

/* Scores every knowledge-base item against the input and returns them
   sorted best-first: [{ item, score, qScore, kScore, cScore }, ...] */
function rankKB(rawInput) {
  const inputNorm = preprocess(rawInput)
  const inputSig = significantTokens(rawInput)
  const inputExpandedSet = new Set(expandWithSynonyms(inputSig))

  const scored = KB.map(item => {
    let qScore = 0
    for (const q of item.questions) {
      const s = questionSimilarity(inputNorm, inputExpandedSet, q)
      if (s > qScore) qScore = s
    }
    const kScore = keywordScore(inputNorm, inputExpandedSet, item.keywords)
    const cScore = componentIntentScore(inputNorm, inputExpandedSet, item)
    const score = getConfidence({ qScore, kScore, cScore })
    return { item, score, qScore, kScore, cScore }
  })

  scored.sort((a, b) => b.score - a.score)
  return scored
}

function predictIntent(input) {
  const [top] = rankKB(input)
  return { intent: top?.item.intent ?? null, confidence: top?.score ?? 0 }
}

function predictComponent(input) {
  const [top] = rankKB(input)
  return { component: top?.item.component ?? [], confidence: top?.score ?? 0 }
}

function isPronounReference(inputNorm) {
  const tokens = tokenize(inputNorm)
  if (!tokens.length || tokens.length > 9) return false
  return /\b(it|this|that|these|those)\b/.test(inputNorm)
}

const COMPONENT_LABELS = {
  platform: 'Platform overview',
  application_builder: 'Building applications',
  form_builder: 'Custom forms',
  process_flow: 'Approvals & workflows',
  workflow: 'Process automation',
  approval: 'Approval workflows',
  sla: 'SLA tracking',
  ai: 'AI capabilities',
  ocr: 'Documents & invoices (OCR)',
  rpa: 'Excel / data entry & desktop tasks (RPA)',
  bot: 'Automation bots',
  dms: 'Document storage & management',
  dashboard: 'Dashboards',
  reporting: 'Reports & analytics',
  integration: 'ERP / SAP / system integrations',
  api: 'APIs & connectors',
  security: 'Security & compliance',
  users_permissions: 'Users & permissions',
  mobile: 'Mobile access',
  deployment: 'Deployment',
  pricing: 'Pricing & plans',
  sales: 'Demo & contact',
}

/* Builds a friendly clarifying question from the closest-scoring
   candidates, so a low-confidence message still gets useful options
   instead of a dead-end "I don't know". Returns null when there's
   truly no signal at all (fully out-of-scope input). */
function generateClarification(ranked) {
  const candidates = ranked.filter(r => r.score > 0.12).slice(0, 6)
  if (!candidates.length) return null

  const bullets = []
  const seen = new Set()
  for (const c of candidates) {
    for (const comp of c.item.component || []) {
      const label = COMPONENT_LABELS[comp]
      if (label && !seen.has(label)) {
        seen.add(label)
        bullets.push(label)
      }
      if (bullets.length >= 4) break
    }
    if (bullets.length >= 4) break
  }
  if (!bullets.length) return null

  return `Happy to help! Could you tell me a bit more about what you'd like to do?\n\n${bullets.map(b => `• ${b}`).join('\n')}`
}

/* Pulls 2-3 short follow-up suggestions for a confidently-answered item. */
function getFollowUpSuggestions(item) {
  if (!item.related || !item.related.length) return []
  return item.related
    .map(id => KB.find(k => k.id === id))
    .filter(Boolean)
    .slice(0, 3)
    .map(k => k.followUpLabel || k.questions[0])
}

function devLog(payload) {
  if (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.DEV) {
    // eslint-disable-next-line no-console
    console.log('[chatbot:predict]', payload)
  }
}

// Small talk shouldn't overwrite or seed the "what are we talking about"
// context used to resolve pronouns like "it" / "that" on the next turn.
const CONVERSATIONAL_INTENTS = new Set(['greeting', 'thanks'])

const OUT_OF_SCOPE_MESSAGE =
  "I'm here to help with skiode and its platform capabilities. You can ask me about workflows, RPA, AI/OCR, integrations, dashboards, security, pricing, or use cases."

/* Main entry point used by the chat UI. Takes the raw user message and
   the lightweight conversation context, and returns the reply text plus
   the updated context to carry into the next turn. */
function findBestAnswer(rawInput, context) {
  const inputNorm = preprocess(rawInput)
  if (!inputNorm) {
    return { text: "I didn't quite catch that — could you rephrase?", newContext: context }
  }

  let ranked = rankKB(rawInput)
  let top = ranked[0]

  // Lightweight context resolution: if the message leans on a pronoun
  // ("it", "that") and doesn't score well on its own, retry the match
  // blended with the topic we were just discussing.
  if (context?.lastKeywordHint && isPronounReference(inputNorm) && top.score < 0.55) {
    const augmentedInput = `${rawInput} ${context.lastKeywordHint}`
    const rankedAugmented = rankKB(augmentedInput)
    if (rankedAugmented[0].score > top.score) {
      ranked = rankedAugmented
      top = ranked[0]
    }
  }

  devLog({ input: rawInput, intent: top.item.intent, component: top.item.component, confidence: Number(top.score.toFixed(2)) })

  const isConversational = CONVERSATIONAL_INTENTS.has(top.item.intent)
  const nextKeywordHint = (top.item.keywords?.[0] || top.item.intent || '').replace(/_/g, ' ')
  const newContextBase = isConversational
    ? context
    : { lastItem: top.item.id, lastKeywordHint: nextKeywordHint }

  if (top.score >= 0.70) {
    const followUps = getFollowUpSuggestions(top.item)
    const text = followUps.length
      ? `${top.item.answer}\n\nWould you like to know:\n${followUps.map(f => `• ${f}`).join('\n')}`
      : top.item.answer
    return { text, newContext: newContextBase }
  }

  if (top.score >= 0.45) {
    const second = ranked[1]
    const ambiguous = second && top.score - second.score < 0.08
    if (ambiguous) {
      const clarification = generateClarification(ranked)
      return { text: clarification || top.item.answer, newContext: newContextBase }
    }
    return { text: `${top.item.answer}\n\n(Let me know if you meant something else!)`, newContext: newContextBase }
  }

  const clarification = generateClarification(ranked)
  return { text: clarification || OUT_OF_SCOPE_MESSAGE, newContext: context }
}

const suggestions = [
  'What is skiode?',
  'How does it work?',
  'What is Process Flow?',
  'Show me pricing',
  'What integrations?',
  'Request a demo',
]

export default function ChatBot() {
  const [chatOpen, setChatOpen] = useState(false)
  const [fabOpen, setFabOpen] = useState(false)
  const [nearTop, setNearTop] = useState(true)
  const [messages, setMessages] = useState([
    { from: 'bot', text: "Hi! 👋 I'm skiode AI assistant. Ask me anything about our platform — features, pricing, integrations, or how we can help your business!" }
  ])
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const [context, setContext] = useState({})
  const bottomRef = useRef(null)
  const inputRef = useRef(null)
  const fabRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setNearTop(window.scrollY < 400)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, typing])

  useEffect(() => {
    if (chatOpen) inputRef.current?.focus()
  }, [chatOpen])

  useEffect(() => {
    const handler = (e) => {
      if (fabRef.current && !fabRef.current.contains(e.target)) setFabOpen(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const send = (text) => {
    const msg = text || input.trim()
    if (!msg) return

    setMessages(prev => [...prev, { from: 'user', text: msg }])
    setInput('')
    setTyping(true)

    setTimeout(() => {
      const { text: answer, newContext } = findBestAnswer(msg, context)
      setMessages(prev => [...prev, { from: 'bot', text: answer }])
      setContext(newContext)
      setTyping(false)
    }, 600 + Math.random() * 800)
  }

  const handleKey = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      send()
    }
  }

  return (
    <>
      {/* FAB Hub */}
      <AnimatePresence>
        {!chatOpen && (
          <div ref={fabRef} className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3">
            {/* Expanded options */}
            <AnimatePresence>
              {fabOpen && (
                <>
                  <motion.button
                    initial={{ opacity: 0, scale: 0.4, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.4, y: 20 }}
                    transition={{ duration: 0.2, delay: 0.05 }}
                    onClick={() => {
                      window.scrollTo({ top: nearTop ? document.documentElement.scrollHeight : 0, behavior: 'smooth' })
                      setFabOpen(false)
                    }}
                    className="w-12 h-12 rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform cursor-pointer"
                    style={{ background: '#39ff14', boxShadow: '0 4px 20px rgba(57,255,20,0.35)' }}
                    aria-label={nearTop ? 'Scroll to bottom' : 'Scroll to top'}>
                    {nearTop ? <ArrowDown size={20} strokeWidth={2.5} color="#164065" /> : <ArrowUp size={20} strokeWidth={2.5} color="#164065" />}
                  </motion.button>
                  <motion.button
                    initial={{ opacity: 0, scale: 0.4, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.4, y: 20 }}
                    transition={{ duration: 0.2 }}
                    onClick={() => { setChatOpen(true); setFabOpen(false) }}
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white shadow-xl hover:scale-110 transition-transform cursor-pointer"
                    style={{ background: '#164065', boxShadow: '0 4px 20px rgba(22,64,101,0.4)' }}
                    aria-label="Open chat">
                    <MessageCircle size={20} />
                  </motion.button>
                </>
              )}
            </AnimatePresence>

            {/* Main FAB toggle */}
            <motion.button
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1, rotate: fabOpen ? 45 : 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              onClick={() => setFabOpen(!fabOpen)}
              className="w-14 h-14 rounded-full flex items-center justify-center shadow-2xl relative"
              style={{
                background: '#000000',
                boxShadow: '0 8px 32px rgba(0,0,0,0.45)',
              }}>
              {fabOpen ? (
                <X size={22} className="text-white" />
              ) : (
                <Grip size={22} className="text-white" />
              )}
              {!fabOpen && (
                <span className="absolute inset-0 rounded-full animate-ping opacity-20"
                  style={{ background: '#000000' }} />
              )}
            </motion.button>
          </div>
        )}
      </AnimatePresence>

      {/* Chat window */}
      <AnimatePresence>
        {chatOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed bottom-6 right-6 z-50 w-[380px] max-w-[calc(100vw-32px)] rounded-2xl overflow-hidden flex flex-col"
            style={{
              height: '560px',
              maxHeight: 'calc(100vh - 100px)',
              background: '#ffffff',
              boxShadow: '0 24px 80px rgba(0,0,0,0.15), 0 0 0 1px rgba(0,0,0,0.05)',
            }}>
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 flex-shrink-0"
              style={{ background: '#164065' }}>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center"
                  style={{ background: 'rgba(255,255,255,0.2)' }}>
                  <Bot size={18} className="text-white" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">skiode Assistant</div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-300 animate-pulse" />
                    <span className="text-[10px] text-white/60 font-medium">Always online</span>
                  </div>
                </div>
              </div>
              <button onClick={() => setChatOpen(false)}
                className="w-8 h-8 rounded-lg flex items-center justify-center transition-all hover:bg-white/10">
                <X size={16} className="text-white/80" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3"
              style={{ background: '#f8fafc' }}>
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                  className={`flex gap-2 ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                  {msg.from === 'bot' && (
                    <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)' }}>
                      <Sparkles size={12} className="text-white" />
                    </div>
                  )}
                  <div className={`max-w-[75%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed whitespace-pre-line ${
                    msg.from === 'user'
                      ? 'bg-blue-500 text-white rounded-br-md'
                      : 'bg-white text-slate-700 rounded-bl-md shadow-sm'
                  }`}
                    style={msg.from === 'bot' ? { border: '1px solid #e2e8f0' } : {}}>
                    {msg.text}
                  </div>
                  {msg.from === 'user' && (
                    <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 bg-slate-200">
                      <User size={12} className="text-slate-500" />
                    </div>
                  )}
                </motion.div>
              ))}

              {typing && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex gap-2 items-start">
                  <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)' }}>
                    <Sparkles size={12} className="text-white" />
                  </div>
                  <div className="px-4 py-3 rounded-2xl rounded-bl-md bg-white shadow-sm"
                    style={{ border: '1px solid #e2e8f0' }}>
                    <div className="flex gap-1">
                      <div className="w-2 h-2 rounded-full bg-slate-300 animate-bounce" style={{ animationDelay: '0ms' }} />
                      <div className="w-2 h-2 rounded-full bg-slate-300 animate-bounce" style={{ animationDelay: '150ms' }} />
                      <div className="w-2 h-2 rounded-full bg-slate-300 animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={bottomRef} />
            </div>

            {messages.length <= 2 && (
              <div className="px-4 py-2 flex flex-wrap gap-1.5 border-t border-slate-100"
                style={{ background: '#fafbfc' }}>
                {suggestions.map(s => (
                  <button key={s} onClick={() => send(s)}
                    className="px-3 py-1.5 rounded-full text-xs font-semibold transition-all hover:scale-105"
                    style={{ background: 'rgba(59,130,246,0.06)', border: '1px solid rgba(59,130,246,0.15)', color: '#3b82f6' }}>
                    {s}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <div className="flex items-center gap-2 px-4 py-3 border-t border-slate-100 bg-white flex-shrink-0">
              <input
                ref={inputRef}
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={handleKey}
                placeholder="Ask about skiode..."
                className="flex-1 text-sm bg-slate-50 rounded-xl px-4 py-2.5 outline-none focus:ring-2 focus:ring-blue-200 transition-all"
                style={{ border: '1px solid #e2e8f0' }}
              />
              <button onClick={() => send()} disabled={!input.trim()}
                className="w-10 h-10 rounded-xl flex items-center justify-center transition-all disabled:opacity-30 hover:scale-105"
                style={{ background: input.trim() ? 'linear-gradient(135deg, #3b82f6, #8b5cf6)' : '#f1f5f9' }}>
                <Send size={16} className={input.trim() ? 'text-white' : 'text-slate-400'} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
