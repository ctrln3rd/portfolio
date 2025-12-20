<div class="grain-container">
  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
    <filter id="noiseFilter">
      <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
      <feColorMatrix type="saturate" values="0" />
      <feComponentTransfer>
        <feFuncR type="linear" slope="2" intercept="-1" />
        <feFuncG type="linear" slope="2" intercept="-1" />
        <feFuncB type="linear" slope="2" intercept="-1" />
      </feComponentTransfer>
    </filter>

    <rect width="100%" height="100%" filter="url(#noiseFilter)" />

    <rect class="tech-line line-1" width="100%" height="0.5" fill="black" />
    <rect class="tech-line line-2" width="100%" height="1.5" fill="black" />
    <rect class="tech-line line-3" width="100%" height="1" fill="black" />
  </svg>
</div>

<style>
  .grain-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 9999;
    opacity: 0.15; /* Increased slightly so lines are visible */
    overflow: hidden;
  }

  svg {
    width: 100%;
    height: 100%;
  }

  /* Animation for the tech lines */
  .tech-line {
    opacity: 0.8;
  }

  .line-1 { animation: scan 4s linear infinite; }
  .line-2 { animation: scan 7s linear infinite reverse; }
  .line-3 { animation: glitch 0.5s steps(1) infinite; }

  @keyframes scan {
    from { transform: translateY(-10px); }
    to { transform: translateY(210px); }
  }

  @keyframes glitch {
    0% { transform: translateY(10px); opacity: 0; }
    10% { transform: translateY(150px); opacity: 1; }
    20% { transform: translateY(30px); opacity: 0; }
    50% { transform: translateY(190px); opacity: 0.5; }
    80% { transform: translateY(60px); opacity: 0; }
    100% { transform: translateY(10px); opacity: 0; }
  }
</style>