import React from "react";
import { GestureType } from "@/types";
import { getActionForGesture, GESTURE_ACTIONS } from "@/lib/palettes";

interface HUDProps {
  gesture: GestureType;
  isTracking: boolean;
  isFaceTracking: boolean;
  fps: number;
  particleCount: number;
  cameraActive: boolean;
}

export const HUD: React.FC<HUDProps> = ({
  gesture,
  isTracking,
  isFaceTracking,
  fps,
  particleCount,
  cameraActive,
}) => {
  const action = getActionForGesture(gesture);

  return (
    <>
      {/* ── Top-left: status ──────────────────────────────────────────── */}
      <div className="fixed top-2 left-2 sm:top-4 sm:left-4 z-30 flex flex-col gap-1.5">
        <div className="flex items-center gap-1.5 bg-black/60 backdrop-blur-md border border-white/10 rounded-lg px-2 py-1 sm:px-3 sm:py-2">
          <div
            className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full flex-shrink-0 ${
              isTracking
                ? "bg-green-400 shadow-[0_0_6px_#22c55e]"
                : cameraActive
                ? "bg-yellow-400 shadow-[0_0_6px_#eab308] animate-pulse"
                : "bg-red-400 shadow-[0_0_6px_#ef4444]"
            }`}
          />
          <span className="font-body text-[10px] sm:text-xs text-white/60 uppercase tracking-wider">
            {isTracking ? "Tracking" : cameraActive ? "Searching…" : "Camera Off"}
          </span>
        </div>

        <div className="hidden xs:flex sm:flex bg-black/60 backdrop-blur-md border border-white/10 rounded-lg px-2 py-1 sm:px-3 sm:py-2">
          <span className="font-display text-[9px] sm:text-[10px] text-white/40 tracking-widest">
            {fps} FPS · {(particleCount / 1000).toFixed(0)}K
          </span>
        </div>
      </div>

      {/* ── Top-right: active gesture card ───────────────────────────── */}
      <div className="fixed top-2 right-2 sm:top-4 sm:right-4 z-30">
        <div
          className={`bg-black/60 backdrop-blur-md border rounded-xl px-2 py-2 sm:px-4 sm:py-3 transition-all duration-500 ${
            action
              ? "border-[#00d4ff]/30 shadow-[0_0_16px_rgba(0,212,255,0.15)]"
              : "border-white/10"
          }`}
        >
          <div className="text-center">
            <div className="text-lg sm:text-2xl mb-0.5">{action?.icon ?? "👋"}</div>
            <div className="font-display text-[10px] sm:text-sm text-white/90 tracking-wide leading-tight">
              {action?.label ?? "No Gesture"}
            </div>
            <div className="hidden sm:block font-body text-[10px] text-white/40 mt-1 uppercase tracking-widest">
              {action?.shape ?? "—"}
            </div>
          </div>
        </div>
      </div>

      {/* ── Brand / watermark card: ENTRI CODING ────────────────────────── */}
      <div className="fixed bottom-[85px] sm:bottom-[100px] left-2 sm:left-6 z-30">
        <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl px-4 py-4 flex flex-col gap-3 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
          <a
            href="https://www.entri.me"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-start gap-3 select-none"
          >
            {/* Entri SVG Logo */}
            <img 
              src="https://cloudfront.entri.app/entri-logo/Entri-logo-new-512x188.svg" 
              alt="Entri Logo" 
              className="h-7 sm:h-9 w-auto brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity"
            />
            
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

      {/* ── Bottom: gesture guide bar ─────────────────────────────────── */}
      <div className="fixed bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 z-30 w-full px-2 sm:px-0 sm:w-auto">
        <div className="bg-black/60 backdrop-blur-md border border-white/10 rounded-2xl px-2 py-2 sm:px-4 sm:py-3 mx-auto">
          <div className="relative">
            <div
              className="flex gap-2 sm:gap-3 items-center overflow-x-auto"
              style={{ WebkitOverflowScrolling: "touch", scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {GESTURE_ACTIONS.map((a) => (
                <div
                  key={a.gesture}
                  className={`flex flex-col items-center flex-shrink-0 min-w-[36px] sm:min-w-[48px] transition-all duration-300 ${
                    gesture === a.gesture
                      ? "scale-110 opacity-100"
                      : "opacity-40"
                  }`}
                >
                  <span className="text-sm sm:text-lg leading-none">{a.icon}</span>
                  <span className="font-body text-[7px] sm:text-[8px] text-white/70 mt-0.5 whitespace-nowrap">
                    {a.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};