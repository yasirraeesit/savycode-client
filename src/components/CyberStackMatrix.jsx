import React, { useState } from 'react';
import { Terminal, Cpu, Globe, Database, Server, CheckCircle2, ArrowRight } from 'lucide-react';

export default function CyberStackMatrix() {
  const [selectedCategory, setSelectedCategory] = useState('ai');
  const [activeTechIndex, setActiveTechIndex] = useState(0);

  const stackData = {
    ai: {
      categoryName: 'NEURAL AI & MACHINE LEARNING',
      icon: <Cpu className="w-5 h-5 text-[#00F0FF]" />,
      items: [
        {
          name: 'OpenAI & Claude 3.7',
          spec: 'FRONTIER FOUNDATION MODELS',
          benchmark: '120 tok/sec • 200k Token Context',
          code: `// Private Zero-Retention LLM Gateway
const completion = await aiClient.chat.completions.create({
  model: "claude-3-7-sonnet-20250219",
  messages: [{ role: "user", content: sanitizedPrompt }],
  temperature: 0.1, // Deterministic corporate reasoning
  extra_headers: { "X-Enterprise-Zero-Retention": "true" }
});`,
          why: 'We build model-agnostic abstraction layers that decouple your core software logic from any single AI vendor, allowing instant model swaps.'
        },
        {
          name: 'pgvector & Pinecone',
          spec: 'HIGH-DIMENSIONAL VECTOR INDEXING',
          benchmark: 'Sub-35ms Similarity Retrieval',
          code: `// High-Speed Hybrid Vector Cosine Match
SELECT id, document_chunk, 1 - (embedding <=> $1) AS similarity
FROM enterprise_knowledge_vectors
WHERE organization_id = $2
ORDER BY similarity DESC
LIMIT 5;`,
          why: 'Allows sub-50ms semantic search across gigabytes of proprietary documents without leaking confidential vectors to public LLMs.'
        },
        {
          name: 'LangChain & Autonomous Agents',
          spec: 'TASK ORCHESTRATION ENGINE',
          benchmark: 'Multi-Step Execution Guardrails',
          code: `// Autonomous Agentic Tool Pipeline
const agent = new AutonomousWorkflowAgent({
  tools: [sqlQueryTool, stripeBillingTool, slackNotifierTool],
  maxIterations: 5,
  safetyGuardrails: strictPIIFilter
});`,
          why: 'Automates complex multi-step workflows with strict deterministic fallbacks and zero unbounded recursive loops.'
        }
      ]
    },
    frontend: {
      categoryName: 'EDGE WEB ARCHITECTURE',
      icon: <Globe className="w-5 h-5 text-purple-400" />,
      items: [
        {
          name: 'Next.js 15 (App Router)',
          spec: 'REACT SERVER COMPONENTS (RSC)',
          benchmark: '18ms TTFB • Zero Client JS Overhead',
          code: `// Server-Rendered Edge Component
export default async function DashboardFeed() {
  const telemetry = await getCachedSystemMetrics();
  return <StreamingTelemetryGrid data={telemetry} />;
}`,
          why: 'Renders heavy computations on serverless edge nodes near the client, cutting initial page weight by up to 70%.'
        },
        {
          name: 'Tailwind CSS v4 & Motion',
          spec: 'MODERN COMPONENT DESIGN SYSTEM',
          benchmark: '100% Type-Safe Design Tokens',
          code: `@theme {
  --color-cyber-cyan: #00F0FF;
  --color-obsidian-void: #04060A;
}
/* Micro-optimized CSS bundle: 12kb gzip */`,
          why: 'Eliminates runtime CSS-in-JS performance bottlenecks and ensures consistent luxury dark-mode aesthetics.'
        }
      ]
    },
    backend: {
      categoryName: 'DISTRIBUTED CORE SYSTEMS',
      icon: <Database className="w-5 h-5 text-emerald-400" />,
      items: [
        {
          name: 'Python / FastAPI & Node.js',
          spec: 'HIGH-CONCURRENCY ASYNC RUNTIMES',
          benchmark: '48,000 requests/sec Throughput',
          code: `@app.post("/api/v1/inference")
async def run_inference(payload: InferenceRequest):
    async with vpc_connection_pool.acquire() as conn:
        return await process_stream_batch(payload, conn)`,
          why: 'Ultra-low overhead asynchronous execution for compute-heavy AI vector tasks and high-frequency webhook processing.'
        },
        {
          name: 'Redis & BullMQ Background Queues',
          spec: 'IN-MEMORY ASYNCHRONOUS JOB QUEUE',
          benchmark: '0.4ms Read/Write In-Memory Latency',
          code: `// Resilient Distributed Job Queue
await jobQueue.add("process-pdf-embeddings", payload, {
  attempts: 3,
  backoff: { type: "exponential", delay: 1000 }
});`,
          why: 'Guarantees zero dropped user transactions even during 100x traffic surges through decoupled worker pools.'
        }
      ]
    },
    cloud: {
      categoryName: 'CLOUD & SECURITY INFRASTRUCTURE',
      icon: <Server className="w-5 h-5 text-amber-400" />,
      items: [
        {
          name: 'AWS & Docker / Kubernetes',
          spec: 'ZERO-DOWNTIME AUTO-SCALING CLUSTERS',
          benchmark: '99.99% Production Reliability SLA',
          code: `# Infrastructure as Code (Terraform)
resource "aws_ecs_service" "sovycode_core" {
  name            = "ai-production-cluster"
  desired_count   = 6
  launch_type     = "FARGATE"
}`,
          why: 'Ensures your company infrastructure scales automatically from seed stage to enterprise enterprise volume without architecture rewrites.'
        }
      ]
    }
  };

  const currentCategory = stackData[selectedCategory];
  const activeTech = currentCategory.items[activeTechIndex] || currentCategory.items[0];

  return (
    <section className="py-24 border-y border-white/5 bg-[#04060A] relative cyber-dot-matrix">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-[#00F0FF] uppercase tracking-widest mb-2">
              <Terminal className="w-3.5 h-3.5" />
              <span>// PRODUCTION STACK TELEMETRY MATRIX</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase">
              Field-Tested Technologies. Zero Toy Frameworks.
            </h2>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 font-mono text-xs">
            {[
              { id: 'ai', label: '[NEURAL_AI]' },
              { id: 'frontend', label: '[EDGE_WEB]' },
              { id: 'backend', label: '[CORE_BACKEND]' },
              { id: 'cloud', label: '[CLOUD_INFRA]' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setSelectedCategory(tab.id);
                  setActiveTechIndex(0);
                }}
                className={`px-3.5 py-2 rounded transition-all cursor-pointer ${
                  selectedCategory === tab.id
                    ? 'bg-[#00F0FF]/20 text-[#00F0FF] border border-[#00F0FF] font-bold shadow-[0_0_15px_rgba(0,240,255,0.25)]'
                    : 'bg-white/5 border border-white/10 text-slate-400 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tactical Matrix Inspector Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Tech List (Left Selector) */}
          <div className="lg:col-span-5 space-y-3">
            <div className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-2">
              Select Framework to Inspect Architecture:
            </div>
            {currentCategory.items.map((item, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTechIndex(idx)}
                className={`w-full text-left p-4 rounded-xl border transition-all cursor-pointer font-mono ${
                  activeTechIndex === idx
                    ? 'bg-[#00F0FF]/10 border-[#00F0FF] text-white shadow-[0_0_20px_rgba(0,240,255,0.15)]'
                    : 'bg-[#070B12]/80 border-white/10 text-slate-300 hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-bold text-white">{item.name}</span>
                  <span className="text-[10px] text-[#00F0FF]">{item.spec}</span>
                </div>
                <div className="text-xs text-emerald-400 font-semibold">{item.benchmark}</div>
              </button>
            ))}
          </div>

          {/* Live Architecture Inspector (Right HUD Panel) */}
          <div className="lg:col-span-7 hud-panel rounded-2xl p-6 sm:p-8 bg-[#070B12]/95 border border-[#00F0FF]/30">
            <div className="hud-corner-tr"></div>
            <div className="hud-corner-bl"></div>

            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
              <div>
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-1">
                  TACTICAL INSPECTION:
                </span>
                <h3 className="text-xl font-extrabold text-white font-mono">{activeTech.name}</h3>
              </div>
              <div className="text-right">
                <span className="text-[11px] font-mono text-emerald-400 px-2.5 py-1 rounded bg-emerald-500/10 border border-emerald-500/20">
                  {activeTech.benchmark}
                </span>
              </div>
            </div>

            {/* Code Snippet Box */}
            <div className="mb-6 rounded-xl bg-[#04060A] border border-white/10 p-4 font-mono text-xs text-slate-300 overflow-x-auto">
              <div className="flex items-center justify-between text-slate-500 text-[10px] pb-2 border-b border-white/5 mb-3">
                <span>production_snippet.ts</span>
                <span>SYNTAX: STRICT_TYPED</span>
              </div>
              <pre className="text-[12px] leading-relaxed text-[#00F0FF]">
                <code>{activeTech.code}</code>
              </pre>
            </div>

            {/* Why We Use It */}
            <div className="space-y-2 text-xs sm:text-sm text-slate-300 font-sans">
              <span className="font-mono text-[11px] text-[#00F0FF] uppercase tracking-wider block font-bold">
                // ARCHITECTURAL RATIONALE:
              </span>
              <p className="leading-relaxed text-slate-300">
                {activeTech.why}
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
