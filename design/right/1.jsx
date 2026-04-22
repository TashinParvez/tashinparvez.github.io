import React from 'react';

const customStyles = `
  @keyframes floatAmbient {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-15px); }
  }
  @keyframes drawPath {
    0% { stroke-dashoffset: 100; }
    100% { stroke-dashoffset: 0; }
  }
  @keyframes fillBar {
    0% { width: 0%; opacity: 0; }
    10% { opacity: 1; }
    100% { width: var(--target-width); opacity: 1; }
  }
  @keyframes pulseBeam {
    0%, 100% { opacity: 0.4; box-shadow: 0 0 15px rgba(34,211,238,0.2); }
    50% { opacity: 1; box-shadow: 0 0 30px rgba(34,211,238,0.8); }
  }
  @keyframes dataFlow {
    0% { top: -10%; opacity: 0; }
    20% { opacity: 1; }
    80% { opacity: 1; }
    100% { top: 110%; opacity: 0; }
  }

  .perspective-container {
    perspective: 1200px;
    transform-style: preserve-3d;
  }
  
  .iso-stack {
    transform: rotateX(60deg) rotateZ(-45deg);
    transform-style: preserve-3d;
    transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .stack-group:hover .iso-stack {
    transform: rotateX(60deg) rotateZ(-40deg) scale(1.05);
  }

  .iso-layer {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 280px;
    height: 280px;
    margin-left: -140px;
    margin-top: -140px;
    border-radius: 24px;
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
    transform-style: preserve-3d;
  }

  /* Layer Z-Placements & Hover Expansions */
  .layer-top { 
    transform: translateZ(100px); 
    background: linear-gradient(135deg, rgba(244,63,94,0.05) 0%, rgba(244,63,94,0.01) 100%);
    border: 1px solid rgba(244,63,94,0.2);
    box-shadow: 0 10px 30px rgba(244,63,94,0.05);
  }
  .stack-group:hover .layer-top { transform: translateZ(140px); border-color: rgba(244,63,94,0.4); }

  .layer-mid { 
    transform: translateZ(0px);
    background: linear-gradient(135deg, rgba(34,211,238,0.05) 0%, rgba(34,211,238,0.01) 100%);
    border: 1px solid rgba(34,211,238,0.2);
    box-shadow: 0 10px 30px rgba(34,211,238,0.05);
  }
  .stack-group:hover .layer-mid { transform: translateZ(0px); border-color: rgba(34,211,238,0.4); }

  .layer-bot { 
    transform: translateZ(-100px);
    background: linear-gradient(135deg, rgba(99,102,241,0.05) 0%, rgba(99,102,241,0.01) 100%);
    border: 1px solid rgba(99,102,241,0.2);
    box-shadow: 0 10px 30px rgba(99,102,241,0.05);
  }
  .stack-group:hover .layer-bot { transform: translateZ(-140px); border-color: rgba(99,102,241,0.4); }

  /* The central alignment laser */
  .core-beam {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 2px;
    height: 400px;
    margin-left: -1px;
    margin-top: -200px;
    background: linear-gradient(to bottom, rgba(244,63,94,0), rgba(244,63,94,1), rgba(34,211,238,1), rgba(99,102,241,1), rgba(99,102,241,0));
    transform: translateZ(0px) rotateX(90deg);
    animation: pulseBeam 3s infinite ease-in-out;
  }
`;

export default function App() {
  return (
    <>
      <style>{customStyles}</style>
      <div className="relative min-h-screen bg-[#03060D] overflow-hidden font-sans text-slate-300 flex items-center">
        
        {/* Subtle Ambient Background */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-cyan-900/20 to-indigo-900/20 rounded-full blur-[120px] pointer-events-none translate-x-1/4 -translate-y-1/4"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10 py-20">
          
          {/* Left Column: Typography */}
          <div className="flex flex-col items-start space-y-8">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-white/[0.02] border border-white/5 text-xs font-medium tracking-widest text-slate-400 uppercase backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
              <span>Product Leader</span>
            </div>
            
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-semibold tracking-tight text-white leading-tight">
                Aligning <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-cyan-400 to-indigo-400">Chaos</span> to Clarity.
              </h1>
            </div>
            
            <p className="text-lg leading-relaxed text-slate-400 max-w-lg font-light">
              I bridge the gap between human needs, business strategy, and technical execution. 
              Building elegant, data-driven products that deliver measurable impact.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 pt-6">
              <button className="px-8 py-3.5 rounded-full bg-white text-slate-950 font-medium transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] flex items-center space-x-2">
                <span>Explore Work</span>
              </button>
              <button className="px-8 py-3.5 rounded-full bg-transparent border border-white/20 text-white font-medium transition-all duration-300 hover:bg-white/5 backdrop-blur-sm">
                Get in touch
              </button>
            </div>
          </div>

          {/* Right Column: The Dimensional Stack */}
          <div className="relative flex justify-center items-center h-[500px] lg:h-[700px] perspective-container stack-group cursor-crosshair">
            
            {/* The animating floating container */}
            <div className="relative w-full h-full flex justify-center items-center animate-[floatAmbient_6s_infinite_ease-in-out]">
              
              <div className="iso-stack absolute w-[280px] h-[280px]">
                
                {/* --- LAYER 1: USER EMPATHY (TOP) --- */}
                <div className="iso-layer layer-top flex flex-col p-6 overflow-hidden">
                  <span className="text-[10px] font-bold tracking-widest text-rose-400/80 mb-2">01. USER INSIGHT</span>
                  
                  {/* Organic User Path Visualization */}
                  <svg className="w-full h-full absolute inset-0 pt-10" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M 10 80 Q 40 80, 50 50 T 90 20" fill="none" stroke="rgba(244,63,94,0.3)" strokeWidth="1.5" strokeDasharray="4 4" />
                    <path d="M 10 80 Q 40 80, 50 50 T 90 20" fill="none" stroke="rgba(244,63,94,0.8)" strokeWidth="1.5" style={{ strokeDasharray: 150, animation: 'drawPath 4s infinite linear' }} />
                    <circle cx="50" cy="50" r="3" fill="#f43f5e" className="animate-ping" style={{ animationDuration: '3s' }} />
                    <circle cx="90" cy="20" r="2" fill="#f43f5e" />
                    <circle cx="20" cy="60" r="1.5" fill="rgba(244,63,94,0.5)" />
                    <circle cx="70" cy="30" r="1.5" fill="rgba(244,63,94,0.5)" />
                  </svg>
                </div>

                {/* --- LAYER 2: PRODUCT STRATEGY (MIDDLE) --- */}
                <div className="iso-layer layer-mid flex flex-col p-6 overflow-hidden">
                  <span className="text-[10px] font-bold tracking-widest text-cyan-400/80 mb-4">02. STRATEGY</span>
                  
                  {/* Roadmap / Gantt Visualization */}
                  <div className="flex flex-col gap-3 mt-4 w-full h-full relative z-10">
                    <div className="h-2 rounded-full bg-cyan-900/40 w-full overflow-hidden">
                      <div className="h-full bg-cyan-400 rounded-full" style={{ '--target-width': '80%', animation: 'fillBar 3s infinite ease-out' }}></div>
                    </div>
                    <div className="h-2 rounded-full bg-cyan-900/40 w-3/4 overflow-hidden ml-auto">
                      <div className="h-full bg-cyan-500 rounded-full" style={{ '--target-width': '100%', animation: 'fillBar 3s infinite ease-out 0.5s' }}></div>
                    </div>
                    <div className="h-2 rounded-full bg-cyan-900/40 w-5/6 overflow-hidden">
                      <div className="h-full bg-cyan-300 rounded-full" style={{ '--target-width': '60%', animation: 'fillBar 3s infinite ease-out 1s' }}></div>
                    </div>
                  </div>
                </div>

                {/* --- LAYER 3: EXECUTION & DATA (BOTTOM) --- */}
                <div className="iso-layer layer-bot flex flex-col p-6 overflow-hidden">
                  <span className="text-[10px] font-bold tracking-widest text-indigo-400/80 mb-2 z-10 relative">03. EXECUTION</span>
                  
                  {/* Grid Background */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.1)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
                  
                  {/* Upward Metric Line */}
                  <svg className="w-full h-full absolute inset-0 pt-8 pl-4 z-10" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <polyline points="0,80 30,60 50,70 80,20 100,25" fill="none" stroke="rgba(99,102,241,0.2)" strokeWidth="2" />
                    <polyline points="0,80 30,60 50,70 80,20 100,25" fill="none" stroke="rgba(99,102,241,0.9)" strokeWidth="2" style={{ strokeDasharray: 200, animation: 'drawPath 5s infinite ease-out' }} />
                    <circle cx="80" cy="20" r="3" fill="#818cf8" />
                  </svg>
                </div>

                {/* --- THE ALIGNMENT CORE BEAM --- */}
                <div className="core-beam">
                  {/* Traveling light particle on the beam */}
                  <div className="absolute left-1/2 w-3 h-12 bg-white rounded-full blur-[4px] -translate-x-1/2 animate-[dataFlow_2s_infinite_linear]"></div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}