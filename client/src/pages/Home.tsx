import Header from "@/components/Header";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import {
  Code2,
  Shield,
  Zap,
  BookOpen,
  Github,
  ExternalLink,
  CpuIcon,
  Cpu,
  FileText,
  Code,
  LayoutDashboard,
} from "lucide-react";

/**
 * DEX Manifest Documentation - Modern Security Dashboard Aesthetic
 * Design Philosophy: Contemporary security/DevOps UI with glassmorphism
 * - Neon accent colors (cyan #00ffff, purple #b300ff, lime #00ff88)
 * - Dark gradient background with dynamic animations
 * - Interactive cards with hover effects and smooth transitions
 * - Modern typography: Outfit (body), Space Mono (code/accents)
 */

export default function Home() {
  const tools = [
    {
      title: "Apktool (Integrated)",
      description: "Fully automated inside the dashboard to unpack APKs, inspect AndroidManifest configurations, and extract resources.",
      details: ["Automated unpacking", "Manifest risk auditing", "Resource layout extraction"],
    },
    {
      title: "Frida (Orchestrated)",
      description: "Integrated engine used by the dashboard to inject custom scripts for real-time memory and dynamic hook monitoring.",
      details: ["Automated hook injection", "Runtime behavior tracking", "Bypass verification"],
    },
    {
      title: "Custom Python Analyzer",
      description: "A proprietary engine custom-built for this dashboard, inspired by Blutter's layout analysis methodology to parse compiled binaries without full decompilation overhead.",
      details: ["Blutter-inspired static parsing", "Optimized offset mapping", "Pattern recognition"],
    },
    {
      title: "JADX & Ghidra (Research Base)",
      description: "Leveraged heavily during the foundational research phase to establish bytecode benchmarks and map native bridge vulnerabilities.",
      details: ["Java/DEX static benchmarking", "Native code analysis (libapp.so)", "Vulnerability mapping"],
    }, {
      title: "Radare2 (Research Base)",
      description: "Utilized during the deep research phase for low-level binary analysis, verifying offsets, and validating static patterns before automating them via our Custom Python Analyzer.",
      details: ["Low-level binary disassembly", "Offset verification benchmarks", "Hex-view static analysis"],
    },
  ];
  const variants = [
    {
      title: "Baseline",

      level: "No protection",

      color: "from-gray-500 to-gray-600",

      description: "Application with no protection - the primary comparison point",
    },
    {
      title: "Dart Obfuscation",

      level: "Medium protection",

      color: "from-purple-500 to-purple-600",

      description: "Dart code name obfuscation",
    },
    {
      title: "R8/ProGuard",

      level: "High protection",

      color: "from-cyan-500 to-cyan-600",

      description: "Code size reduction and name obfuscation",
    },
    {
      title: "String Encryption",

      level: "Maximum protection",

      color: "from-lime-500 to-lime-600",

      description: "String and sensitive resource encryption",
    }

  ];

  const researchPhases = [
    {
      phase: "1",
      title: "APK Extraction",
      tool: "apktool",
      description: "Unpack and extract layout, assets, and AndroidManifest.xml for vulnerability detection",
    },
    {
      phase: "2",
      title: "DEX Analysis & Reversing",
      tool: "JADX (Research Base) / Blutter based custom Py Scipts ",
      description: "Analyze wrapper bytecode and extract compiled Flutter logic from libapp.so",
    },
    {
      phase: "3",
      title: "Static Crypto & String Hunting",
      tool: "grep / strings / RegEx",
      description: "Scan for hardcoded API keys, insecure storage, and bypass methods inside the binary layers",
    },
    {
      phase: "4",
      title: "Dynamic Hooking & Injection",
      tool: "Frida",
      description: "Bypass root detection, anti-emulator checks, and spoof system properties at runtime",
    },
  ];
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        {/* Background gradient animation */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
        </div>

        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block mb-6 px-4 py-2 rounded-full border border-accent/30 bg-accent/5 backdrop-blur-sm">
              <span className="text-sm font-mono text-accent">
                🔒 Application Reverse Engineering Analysis
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="gradient-text">FLUDEX - RAY</span>
              <br />
              <span className="text-foreground">Reverse Engineering Analysis</span>
            </h1>

            <p className="text-lg md:text-xl text-foreground/70 mb-8 max-w-2xl mx-auto leading-relaxed">
              Comparative analysis of reverse engineering resistance between Flutter and Native Android applications under different protection techniques and Build Application to simply be used by normal developers
            </p>


          </div>
        </div>
      </section>

      {/* Overview Section */}
      <Section
        id="overview"
        title="Project Overview"
        subtitle="An overview of the project's objectives, research approach, and implementation."
      >
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectCard
            icon={<Shield className="w-8 h-8" />}
            title="Project Objective"
            description="An integrated desktop dashboard for Android APK security analysis and reverse engineering support."
            details={[
              "Perform static analysis of Android APK files using external analysis tools and custom Python scripts.",
              "Extract application structure, packages, and security-related artifacts from AndroidManifest.xml, DEX files, and Flutter libapp.so.",
              "Support dynamic analysis through Frida-based runtime instrumentation.",
              "Present analysis results through a unified dashboard with UML visualization and PDF report generation.",
            ]}
          />

          <ProjectCard
            icon={<Zap className="w-8 h-8" />}
            title="Methodology"
            description="A workflow combining static analysis, runtime instrumentation, and visualization."
            details={[
              "Automated APK decompilation using tools such as APKTool and JADX.",
              "Static analysis of AndroidManifest.xml, DEX bytecode, and Flutter libapp.so using custom Python scripts.",
              "Runtime instrumentation using Frida to execute reusable analysis and monitoring scripts.",
              "Visualization and reporting of analysis results through UML diagrams and exportable PDF reports.",
            ]}
          />
        </div>
      </Section>
      {/* Hero Image Section */}
      <Section
        id="study"
        title="Study Concept"

        subtitle="The Comprehensive Process of Android Application Analysis"
        fullWidth
      >
        <div className="container">
          <div className="glass-card p-6 md:p-8 overflow-hidden">
            <img
              src="images/Study Concept.png"
              alt="DEX Analysis Process"
              className="w-full rounded-lg hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </Section>

      {/* Security Variants */}
      <Section
        id="variants"
        title="Security Levels"

        subtitle="Detailed Comparison Between the Four Different Versions"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {variants.map((variant, idx) => (
            <ProjectCard
              key={idx}
              title={variant.title}
              description={variant.description}
              details={[variant.level]}
              highlight={idx === 3}
            />
          ))}
        </div>

        <div className="glass-card p-8">
          <img
            src="images/security_varients.png"
            alt="Security Variants Comparison"
            className="w-full rounded-lg"
          />
        </div>
      </Section>

      {/* Tools Section */}
      <Section
        id="tools"
        title="Tools Used"

        subtitle="A Comprehensive Set of Analysis and Testing Tools"
      >
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {tools.map((tool, idx) => (
            <ProjectCard
              key={idx}
              icon={<Code2 className="w-8 h-8" />}
              title={tool.title}
              description={tool.description}
              details={tool.details}
            />
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="glass-card p-8">
            <img
              src="images/dex_analys.png"
              alt="Research Methodology"
              className="w-full rounded-lg"
            />
          </div>

          <div className="glass-card p-8">
            <img
              src="images/dynamic_illus.png"
              alt="Frida Dynamic Analysis"
              className="w-full rounded-lg"
            />
          </div>
        </div>
      </Section>

      {/* Research Phases */}
      <Section
        id="results"
        title="Research Stages"

        subtitle="Detailed Steps of the Practical Study"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {researchPhases.map((phase, idx) => (
            <div key={idx} className="glass-card p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-accent to-primary mb-4">
                <span className="font-bold text-background text-lg">{phase.phase}</span>
              </div>
              <h3 className="font-bold text-foreground mb-2">{phase.title}</h3>
              <p className="text-sm text-foreground/60 mb-3">{phase.description}</p>
              <div className="inline-block px-3 py-1 rounded-full bg-accent/10 border border-accent/30">
                <span className="text-xs font-mono text-accent">{phase.tool}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="glass-card p-8">
          <img
            src="images/obfusTec.png"
            alt="Flutter Obfuscation Techniques"
            className="w-full rounded-lg"
          />
        </div>
      </Section>

      {/* Main Results */}
      <Section
        id="findings"
        title="Main Results"
        subtitle="Key observations and outcomes of the implemented security analysis framework."
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          <ProjectCard
            icon={<BookOpen className="w-8 h-8" />}
            title="Static Analysis"
            description="Automated extraction and analysis of APK artifacts."
            details={[
              "Automated decompilation of Android APKs using APKTool and custom parsing Scripts.",
              "Analysis of AndroidManifest.xml to identify security-related configurations, permissions, and exported components.",
              "Extraction of application structure, packages, and hardcoded strings from DEX files and Flutter libapp.so.",
              "Integration of custom Python scripts to automate static security analysis tasks."
            ]}
          />

          <ProjectCard
            icon={<Shield className="w-8 h-8" />}
            title="Dynamic Analysis"
            description="Runtime instrumentation using Frida."
            details={[
              "Integration of Frida for runtime instrumentation through a graphical interface.",
              "Execution of reusable scripts for runtime monitoring and security testing.",
              "root detection bypass, emulator detection bypass, API monitoring.",
              "Evaluation of application behavior during runtime analysis."
            ]}
          />

          <ProjectCard
            icon={<CpuIcon className="w-8 h-8" />}
            title="FludeX-Ray Dashboard"
            description="A desktop application that integrates multiple security analysis tools."
            details={[
              "Developed using Flutter Desktop for Windows.",
              "Combines static analysis, dynamic instrumentation, UML visualization, and report generation in a unified interface.",
              "Automates the execution of external analysis tools and custom Python scripts.",
              "Provides a structured workflow for Android APK security assessment."
            ]}
          />

          <ProjectCard
            icon={<Zap className="w-8 h-8" />}
            title="Security Recommendations"
            description="Recommendations derived from the conducted analysis."
            details={[
              "Avoid embedding sensitive information such as API keys or credentials within application binaries.",
              "Apply code obfuscation and other protection techniques to increase reverse engineering complexity.",
              "Implement runtime integrity verification and server-side validation where appropriate.",
              "Regularly perform static and dynamic security assessments throughout the development lifecycle."
            ]}
          />

        </div>
      </Section>
      {/* FludeX-Ray Marketing & Product Showcase Section */}
      <Section
        id="dashboard-showcase"
        title="Meet FludeX-Ray"
        subtitle="The Ultimate Security Automation Hub for Flutter Applications"
      >
        {/* Core Value Proposition & Marketing Intro */}
        <div className="glass-card p-8 mb-12 grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <div className="inline-block px-3 py-1 text-xs font-semibold tracking-wider text-accent uppercase bg-accent/10 rounded-full">
              Graduation Project
            </div>

            <h3 className="text-2xl font-bold tracking-tight text-foreground">
              Supporting Android APK Security Analysis Through an Integrated Desktop Dashboard
            </h3>

            <p className="text-muted-foreground leading-relaxed">
              <strong>FludeX-Ray</strong> is a Windows desktop application developed to simplify the security
              analysis of Android APK files. The dashboard integrates static analysis, Frida-based runtime
              instrumentation, UML visualization, and automated report generation into a unified interface.
              By combining multiple analysis tools and custom Python scripts, the application reduces the need
              to execute individual command-line utilities separately and provides a more organized workflow
              for security assessment.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="border-l-2 border-accent/40 pl-4">
                <h5 className="font-bold text-foreground">Integrated Workflow</h5>
                <p className="text-xs text-muted-foreground">
                  Combines APK parsing, runtime instrumentation, UML visualization, and reporting within a
                  single desktop application.
                </p>
              </div>

              <div className="border-l-2 border-accent/40 pl-4">
                <h5 className="font-bold text-foreground">Automated Analysis Support</h5>
                <p className="text-xs text-muted-foreground">
                  Automates analysis steps using custom Python scripts and external security tools where
                  applicable.
                </p>
              </div>
            </div>
          </div>


          {/* Main Dashboard Hero Visual Placeholder */}
          <div className="relative group overflow-hidden rounded-xl border border-accent/20 bg-background/50 aspect-video flex flex-col items-center justify-center p-6 text-center">
            {/* INSTRUCTION: Replace the src below with your actual Dashboard Home/Hero screenshot */}
            <img
              src="images/home.png"
              alt="FludeX-Ray Main Dashboard Interface"
              className="absolute inset-0 w-full h-full object-cover opacity-100 group-hover:opacity-60 transition-opacity duration-300 "
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = 'none';
              }}
            />
            {/* <div className="z-10 pointer-events-none">
              <Cpu className="w-12 h-12 text-accent mx-auto mb-3 animate-pulse" />

            </div> */}
          </div>
        </div>

        {/* Feature Split-Grid with Side-by-Side Screenshots */}
        <div className="space-y-12">

          {/* Feature 1: Automated Static Pipeline */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative group overflow-hidden rounded-xl border border-accent/20 bg-background/50 aspect-video flex flex-col items-center justify-center p-6 text-center">
              {/* INSTRUCTION: Replace the src below with your Static Analysis / Report Generation screenshot */}
              <img
                src="images/static_analysis.png"
                alt="Automated Static Extraction Pipeline"
                className="absolute inset-0 w-full h-full object-cover opacity-100 group-hover:opacity-50 transition-opacity duration-300 "
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
              {/* <div className="z-10 pointer-events-none">
                <BookOpen className="w-10 h-10 text-accent/80 mx-auto mb-2" />
                <p className="text-sm font-medium text-foreground">[ Place Static Analysis View Screenshot ]</p>
                <p className="text-xs text-muted-foreground mt-1">Showing decompilation status, Manifest file auditing, and DEX outputs.</p>
              </div> */}
            </div>

            <div className="space-y-3 md:pl-6">
              <h4 className="text-xl font-bold text-foreground">
                Automated APK Decompilation and Static Analysis
              </h4>

              <p className="text-sm text-muted-foreground leading-relaxed">
                FludeX-Ray automates the execution of external tools such as APKTool and Frida to decompile Android applications and extract analysis artifacts.
                Custom Python scripts process files including
                <code className="text-accent bg-accent/5 px-1 rounded mx-1">AndroidManifest.xml</code>,
                DEX bytecode, and Flutter
                <code className="text-accent bg-accent/5 px-1 rounded mx-1">libapp.so</code>
                binaries to collect structural information, identify hardcoded strings and potential secrets, enumerate imported packages and libraries, and gather metadata that supports static security analysis.
              </p>
            </div>   </div>

          {/* Feature 2: Dynamic Toolkit Coordination */}
          <div className="grid md:grid-cols-2 gap-8 items-center md:flex-row-reverse">
            <div className="space-y-3 md:pr-6 order-2 md:order-1">
              <h4 className="text-xl font-bold text-foreground">
                Frida Integration and Runtime Instrumentation
              </h4>

              <p className="text-sm text-muted-foreground leading-relaxed">
                FludeX-Ray integrates Frida to support dynamic analysis of Android applications through a graphical interface.
                The dashboard manages Frida server deployment, device connection, script selection, and runtime instrumentation,
                allowing users to execute reusable analysis scripts without manually entering Frida commands. Built-in scripts
                support tasks such as runtime monitoring, root and emulator detection bypass, API observation,
                and cryptographic operation monitoring for security testing and research purposes.
              </p>
            </div>

            <div className="relative group overflow-hidden rounded-xl border border-accent/20 bg-background/50 aspect-video flex flex-col items-center justify-center p-6 text-center order-1 md:order-2">
              {/* INSTRUCTION: Replace the src below with your Dynamic / Frida Hook controls screenshot */}
              <img
                src="images/dynamic.png"
                alt="Dynamic Hooking Controller Dashboard"
                className="absolute inset-0 w-full h-full object-cover opacity-100 group-hover:opacity-50 transition-opacity duration-300 "
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
              {/* <div className="z-10 pointer-events-none">
                <Shield className="w-10 h-10 text-accent/80 mx-auto mb-2" />
                <p className="text-sm font-medium text-foreground">[ Place Dynamic Hooking Controller Screenshot ]</p>
                <p className="text-xs text-muted-foreground mt-1">Showing Frida server telemetry, log streams, and environment spoofing toggles.</p>
              </div> */}
            </div>
          </div>

        </div>
      </Section>{/* Engineering Architecture & Visual Deliverables Section */}
      <Section
        id="engineering-assets"
        title="Engineering Blueprints & Deliverables"
        subtitle="Deep dive into FludeX-Ray's structural architecture and analytical outputs"
      >
        <div className="space-y-12">

          {/* Layout 1: UML Architecture Design */}
          <div className="grid md:grid-cols-5 gap-8 items-center">
            <div className="md:col-span-3 space-y-4">
              <div className="flex items-center gap-2">
                <Cpu className="w-5 h-5 text-accent" />
                <h4 className="text-xl font-bold text-foreground">
                  UML Visualization and System Structure
                </h4>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed">
                FludeX-Ray provides UML-based visualization to help users understand both the application's internal architecture and the structure extracted from analyzed APKs.
                Using information obtained from
                <code className="text-accent bg-accent/5 px-1 rounded text-xs">DEX Classes</code>, and
                <code className="text-accent bg-accent/5 px-1 rounded text-xs">Flutter libapp.so</code>,
                the dashboard organizes classes, packages, and their relationships into interactive diagrams, providing a structured view of the application's components and supporting security analysis.
              </p>

              <ul className="list-disc list-inside space-y-1 text-xs text-muted-foreground pl-2">
                <li>Visualization of extracted classes, packages, and application structure.</li>
                <li>Interactive UML diagrams generated from analysis results.</li>
                <li>Supports understanding of application organization during security assessment.</li>
              </ul>
            </div>


            <div className="md:col-span-2 relative group overflow-hidden rounded-xl border border-accent/20 bg-background/50 aspect-video flex flex-col items-center justify-center p-6 text-center">
              {/* INSTRUCTION: Replace src with your dynamic UML Diagram asset */}
              <img
                src="images/uml_view.png"
                alt="FludeX-Ray UML Class and Component Diagram"
                className="absolute inset-0 w-full h-full object-contain opacity-100 group-hover:opacity-50 transition-opacity duration-300 "
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
              {/* <div className="z-10 pointer-events-none">
                <LayoutDashboard className="w-10 h-10 text-accent/80 mx-auto mb-2" />
                <p className="text-sm font-medium text-foreground">[ Place UML Architecture Diagram ]</p>
                <p className="text-xs text-muted-foreground mt-1 max-w-xs mx-auto">Showing data flow models, isolates, and back-end orchestration layer connections.</p>
              </div> */}
            </div>
          </div>

          {/* Layout 2: AndroidManifest.xml Auditing Terminal */}
          <div className="grid md:grid-cols-5 gap-8 items-center">
            <div className="md:col-span-2 relative group overflow-hidden rounded-xl border border-accent/20 bg-background/50 aspect-video flex flex-col items-center justify-center p-6 text-center order-2 md:order-1">
              {/* INSTRUCTION: Replace src with the Manifest Analyzer panel screenshot */}
              <img
                src="images/manifast.png"
                alt="Automated Manifest Auditing Panel View"
                className="absolute inset-0 w-full h-full object-cover opacity-100 group-hover:opacity-50 transition-opacity duration-300 "
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
              {/* <div className="z-10 pointer-events-none">
                <Code className="w-10 h-10 text-accent/80 mx-auto mb-2" />
                <p className="text-sm font-medium text-foreground">[ Place Manifest Auditor Interface ]</p>
                <p className="text-xs text-muted-foreground mt-1">Showing interactive token parsing, flag alerts, and security rule match logs.</p>
              </div> */}
            </div>

            <div className="md:col-span-3 space-y-4 order-1 md:order-2 md:pl-6">
              <div className="flex items-center gap-2">
                <Code className="w-5 h-5 text-accent" />
                <h4 className="text-xl font-bold text-foreground">Interactive Manifest Parsing Panel</h4>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Rather than manually reviewing lengthy AndroidManifest.xml files, FludeX-Ray presents security-critical
                  configurations in a structured and easy-to-read interface. The analyzer highlights sensitive entries such as
                  <code className="text-accent bg-accent/5 px-1 rounded text-xs">
                    android:name="GOOGLE_MAPS_API_KEY"
                  </code>,
                  exported components, backup settings, network security configurations, and other manifest properties that
                  may expose security risks or reveal embedded application metadata during reverse engineering.
                </p>
              </p>
            </div>
          </div>

          {/* Layout 3: PDF Security Assessment Report Showcase */}
          <div className="grid md:grid-cols-5 gap-8 items-center">
            <div className="md:col-span-3 space-y-4">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-accent" />
                <h4 className="text-xl font-bold text-foreground">
                  PDF Report Generation
                </h4>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed">
                FludeX-Ray generates a PDF report that summarizes the results of static analysis.
                The report consolidates extracted application information, hardcoded strings, identified security findings,
                runtime instrumentation results, and analysis metadata into a structured document. It is intended to
                simplify the review of analysis results and provide a portable record of the security assessment.
              </p>

              <div className="flex gap-4 text-xs font-mono text-accent">
                <span className="flex items-center gap-1">✔ Consolidated Analysis Summary</span>
                <span className="flex items-center gap-1">✔ Exportable PDF Report</span>
              </div>
            </div>
            <div className="md:col-span-2 relative group overflow-hidden rounded-xl border border-accent/20 bg-background/50 aspect-[6/3] flex flex-col items-center justify-center p-6 text-center">
              {/* INSTRUCTION: Replace src with a mockup or sample screenshot of your generated PDF template */}
              <img
                src="images/pdf_report.png"
                alt="FludeX-Ray Exported Executive PDF Report Preview"
                className="absolute inset-0 w-full h-full object-cover opacity-100 group-hover:opacity-50 transition-opacity duration-300 "
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
              {/* <div className="z-10 pointer-events-none">
                <FileText className="w-10 h-10 text-accent/80 mx-auto mb-2" />
                <p className="text-sm font-medium text-foreground">[ Place Generated PDF Report View ]</p>
                <p className="text-xs text-muted-foreground mt-1 max-w-xs mx-auto">Suggested layout: A vertical document print mockup showcasing threat metrics and risk scoring graphs.</p>
              </div> */}
            </div>
          </div>

          {/* Layout : settings pa */}
          <div className="grid md:grid-cols-5 gap-8 items-center">
            <div className="md:col-span-2 relative group overflow-hidden rounded-xl border border-accent/20 bg-background/50 aspect-video flex flex-col items-center justify-center p-6 text-center order-2 md:order-1">
              {/* INSTRUCTION: Replace src with the Manifest Analyzer panel screenshot */}
              <img
                src="images/settings.png"
                alt="Automated Manifest Auditing Panel View"
                className="absolute inset-0 w-full h-full object-cover opacity-100 group-hover:opacity-50 transition-opacity duration-300 "
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
              {/* <div className="z-10 pointer-events-none">
                <Code className="w-10 h-10 text-accent/80 mx-auto mb-2" />
                <p className="text-sm font-medium text-foreground">[ Place Manifest Auditor Interface ]</p>
                <p className="text-xs text-muted-foreground mt-1">Showing interactive token parsing, flag alerts, and security rule match logs.</p>
              </div> */}
            </div>

            <div className="md:col-span-3 space-y-4 order-1 md:order-2 md:pl-6">
              <div className="flex items-center gap-2">
                <Code className="w-5 h-5 text-accent" />
                <h4 className="text-xl font-bold text-foreground">Configuration & Environment Settings</h4>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed">
                The Settings panel centralizes all essential tool configuration in one place. Configure the
                <code className="text-accent bg-accent/5 px-1 rounded text-xs">Apktool</code>,
                <code className="text-accent bg-accent/5 px-1 rounded text-xs">Frida</code>, and
                <code className="text-accent bg-accent/5 px-1 rounded text-xs">Frida Server</code>
                executable paths, define the default device
                <code className="text-accent bg-accent/5 px-1 rounded text-xs">IP Address</code>,
                and customize the default
                <code className="text-accent bg-accent/5 px-1 rounded text-xs">Port</code>
                used for adb connections. All settings are persisted locally, allowing the environment
                to be restored automatically across sessions for a seamless reverse engineering workflow.
              </p>
            </div>
          </div>


        </div>
      </Section >
      {/* Footer */}
      < footer className="border-t border-accent/20 bg-background/50 backdrop-blur-xl py-12" >
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-foreground mb-4">Project</h4>
              <p className="text-sm text-foreground/70">
                Comparative analysis of reverse engineering resistance between Flutter and Native Android applications under different protection techniques and Build Application to simply be used by normal developers </p>
            </div>

            <div>
              <h4 className="font-bold text-foreground mb-4">Developer </h4>
              <p className="text-sm text-foreground/70"> Al-Habib Abdullah Khaddam</p>
              <p className="text-xs text-foreground/50 mt-2">
                Flutter Developer
              </p>
            </div>

            <div>
              <h4 className="font-bold text-foreground mb-4">Resources</h4>
              <div className="flex gap-4">
                <a
                  href="https://github.com/habibkh963/"
                  className="text-accent hover:text-primary transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com/habibkh963/fludex-ray/releases/"
                  className="text-accent hover:text-primary transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-accent/20 pt-8 text-center">
            <p className="text-sm text-foreground/60">
              © 2026 FLUDEX-RAY. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer >
    </div >
  );
}
