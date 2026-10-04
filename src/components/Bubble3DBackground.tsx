import React, { useEffect, useRef } from 'react';

interface Bubble {
  x: number;
  y: number;
  z: number; // 0.25 to 1 (depth factor)
  baseRadius: number;
  vx: number;
  vy: number;
  phase: number;
  phaseSpeed: number;
  hue: number; // Golden, Amber, Warm Yellow, Bronze
}

export const Bubble3DBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let mouseX = -1000;
    let mouseY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('resize', handleResize);

    // Number of 3D bubbles tailored to screen width
    const bubbleCount = Math.min(26, Math.max(14, Math.floor(width / 70)));
    const bubbles: Bubble[] = [];

    const hues = [38, 45, 32, 50, 42]; // Golden amber, warm gold, champagne, rich honey

    for (let i = 0; i < bubbleCount; i++) {
      const z = 0.25 + Math.random() * 0.75;
      bubbles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        z,
        baseRadius: (22 + Math.random() * 44) * z,
        vx: (Math.random() - 0.5) * 0.4 * z,
        vy: (-0.3 - Math.random() * 0.45) * z, // Upward floating drift
        phase: Math.random() * Math.PI * 2,
        phaseSpeed: 0.015 + Math.random() * 0.02,
        hue: hues[Math.floor(Math.random() * hues.length)],
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Sort by Z so further bubbles render behind closer bubbles
      bubbles.sort((a, b) => a.z - b.z);

      for (let i = 0; i < bubbles.length; i++) {
        const b = bubbles[i];

        b.phase += b.phaseSpeed;
        const radius = b.baseRadius + Math.sin(b.phase) * (3 * b.z);

        b.x += b.vx + Math.sin(b.phase * 0.7) * (0.35 * b.z);
        b.y += b.vy;

        // Subtle interactive mouse repulsion
        const dx = b.x - mouseX;
        const dy = b.y - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const maxDist = 180 * b.z;

        if (dist < maxDist && dist > 0) {
          const force = (1 - dist / maxDist) * 1.5 * b.z;
          b.x += (dx / dist) * force;
          b.y += (dy / dist) * force;
        }

        // Screen wrap-around
        const padding = radius * 2.5;
        if (b.y < -padding) {
          b.y = height + padding;
          b.x = Math.random() * width;
        }
        if (b.x < -padding) b.x = width + padding;
        if (b.x > width + padding) b.x = -padding;

        const cx = b.x;
        const cy = b.y;

        ctx.save();

        // 1. Ambient Radial Glow (Halo)
        const haloGrad = ctx.createRadialGradient(cx, cy, radius * 0.6, cx, cy, radius * 1.6);
        haloGrad.addColorStop(0, `hsla(${b.hue}, 90%, 60%, ${0.16 * b.z})`);
        haloGrad.addColorStop(1, 'transparent');
        ctx.fillStyle = haloGrad;
        ctx.beginPath();
        ctx.arc(cx, cy, radius * 1.6, 0, Math.PI * 2);
        ctx.fill();

        // 2. 3D Spherical Translucent Body
        const bodyGrad = ctx.createRadialGradient(
          cx - radius * 0.32,
          cy - radius * 0.35,
          radius * 0.1,
          cx,
          cy,
          radius
        );
        bodyGrad.addColorStop(0, `hsla(${b.hue}, 100%, 95%, ${0.14 * b.z})`);
        bodyGrad.addColorStop(0.5, `hsla(${b.hue + 25}, 85%, 60%, ${0.06 * b.z})`);
        bodyGrad.addColorStop(0.85, `hsla(${b.hue}, 90%, 55%, ${0.22 * b.z})`);
        bodyGrad.addColorStop(1, `hsla(${b.hue - 20}, 95%, 70%, ${0.48 * b.z})`);

        ctx.fillStyle = bodyGrad;
        ctx.beginPath();
        ctx.arc(cx, cy, radius, 0, Math.PI * 2);
        ctx.fill();

        // 3. Specular 3D Glass Rim
        ctx.lineWidth = Math.max(1, 1.8 * b.z);
        ctx.strokeStyle = `hsla(${b.hue}, 90%, 80%, ${0.55 * b.z})`;
        ctx.stroke();

        // 4. Primary Specular Glint (Light reflection top-left)
        const hlX = cx - radius * 0.38;
        const hlY = cy - radius * 0.38;
        const hlRadius = radius * 0.35;

        const specGrad = ctx.createRadialGradient(hlX, hlY, 0, hlX, hlY, hlRadius);
        specGrad.addColorStop(0, `rgba(255, 255, 255, ${0.75 * b.z})`);
        specGrad.addColorStop(0.4, `rgba(255, 255, 255, ${0.3 * b.z})`);
        specGrad.addColorStop(1, 'transparent');

        ctx.fillStyle = specGrad;
        ctx.beginPath();
        ctx.arc(hlX, hlY, hlRadius, 0, Math.PI * 2);
        ctx.fill();

        // 5. Secondary Rim Reflection (bottom-right)
        const secX = cx + radius * 0.32;
        const secY = cy + radius * 0.32;
        const secRadius = radius * 0.28;

        const secGrad = ctx.createRadialGradient(secX, secY, 0, secX, secY, secRadius);
        secGrad.addColorStop(0, `hsla(${b.hue + 30}, 100%, 75%, ${0.35 * b.z})`);
        secGrad.addColorStop(1, 'transparent');

        ctx.fillStyle = secGrad;
        ctx.beginPath();
        ctx.arc(secX, secY, secRadius, 0, Math.PI * 2);
        ctx.fill();

        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none -z-10"
      aria-hidden="true"
    />
  );
};

export default Bubble3DBackground;
