// 1. Add this constant at the top of your HUD.tsx file, outside the component
const ENTRI_LOGO_BASE64 = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgMTg4Ij48ZyBmaWxsPSIjMDAwIj48cGF0aCBkPSJNOTUuNyA5NC40YzAtMzkuNi0zMi03MS43LTcxLjYtNzEuNy0zOS42IDAtNzEuNyAzMi03MS43IDcxLjcgMCAzOS42IDMyIDcxLjYgNzEuNyA3MS42IDM5LjYgMCA3MS42LTMyIDcxLjYtNzEuNnoiLz48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMjg2LjEgMTQxLjhoLTIzLjNWNDYuMmg3Ni40djIwLjNoLTUzLjF2MjUuM2g0OS4xdjIwLjNoLTQ5LjF2MzAweiIvPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0zOTAuMyA4MS43YzAtMTUuOS0xMi42LTI4LjctMjguNy0yOC43LTE2IDAtMjguNyAxMi44LTI4LjcgMjguN3Y2MC4xaC0yMy4zVjQ2LjJoMjIuMXYxMi41YzQuNC04LjggMTMuNS0xNC40IDIzLjQtMTQuNCAyNS40IDAgNDUuOCAyMC41IDQ1LjggNDUuOHY1MS43aC0yMy4zVjgxLjd6Ii8+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTQzNy4zIDExOS40VjY2LjVoLTE0LjhWNDYuMmgxNC44VjI2LjNoMjMuM3YxOS45aDIyLjV2MjAuM2gtMjIuNXY1Mi45YzAgNy4xIDUuNyAxMi44IDEyLjggMTIuOGg5Ljd2MjAuM2gtMTguNmMtMTUuOCAwLTI4LjgtMTIuOS0yOC44LTI4Ljh6Ii8+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTQ5My41IDQ2LjJoMjIuMXYxMi41YzQuNC04LjggMTMuNS0xNC40IDIzLjQtMTQuNCA0LjQgMCA4LjcgMSAxMi42IDMuMWwtNy4yIDIwLjhjLTMuMy0xLjQtNi45LTIuMS0xMC41LTIuMS0xNiAwLTI4LjcgMTIuOC0yOC43IDI4Ljd2NjAuMWgtMjMuM1Y0Ni4yeiIvPjwvZz48L3N2Zz4=";

// 2. Update the branding part of the return statement
export const HUD: React.FC<HUDProps> = ({ /* ... props ... */ }) => {
  // ... existing logic ...

  return (
    <>
      {/* ... top UI ... */}

      {/* ── Brand / watermark card: ENTRI CODING ────────────────────────── */}
      <div className="fixed bottom-[85px] sm:bottom-[100px] left-2 sm:left-6 z-30">
        <div className="bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl px-4 py-4 flex flex-col gap-3 shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
          <a
            href="https://www.entri.me"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-start gap-3 select-none"
          >
            {/* Using the Base64 constant directly */}
            <div className="bg-white p-2 rounded-lg">
              <img 
                src={ENTRI_LOGO_BASE64} 
                alt="Entri Logo" 
                className="h-6 sm:h-8 w-auto object-contain"
              />
            </div>
            
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00d4ff] shadow-[0_0_10px_#00d4ff] flex-shrink-0" />
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

      {/* ... bottom UI ... */}
    </>
  );
};