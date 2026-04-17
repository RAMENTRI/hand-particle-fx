{/* ── Brand / watermark card: ENTRI CODING ────────────────────────── */}
      <div className="fixed bottom-[85px] sm:bottom-[100px] left-2 sm:left-6 z-30">
        <div className="bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl px-4 py-4 flex flex-col gap-3 shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
          <a
            href="https://www.entri.me"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-start gap-3 select-none"
          >
            {/* Entri SVG Logo - Filter Removed to show original colors */}
            <div className="bg-white/90 p-1.5 rounded-lg group-hover:bg-white transition-colors">
              <img 
                src="https://cloudfront.entri.app/entri-logo/Entri-logo-new-512x188.svg" 
                alt="Entri Logo" 
                className="h-6 sm:h-8 w-auto object-contain"
              />
            </div>
            
            <div className="flex items-center gap-2">
              {/* Glowing Status Dot */}
              <span className="w-2 h-2 rounded-full bg-[#00d4ff] shadow-[0_0_10px_#00d4ff] flex-shrink-0 group-hover:scale-125 transition-all" />
              
              <span
                className="font-display text-base sm:text-lg font-black tracking-[0.15em] uppercase transition-all duration-300"
                style={{
                  background: "linear-gradient(90deg, #00d4ff, #a855f7)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  filter: "drop-shadow(0 0 8px rgba(0,212,255,0.3))"
                }}
              >
                entri coding
              </span>
            </div>
          </a>
        </div>
      </div>