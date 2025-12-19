// src/lib/glitch.ts
import type { Action } from 'svelte/action';

export type GlitchMode = "once" | "loop" | "hover" | "once-hover" | "loop-hover";

export interface GlitchOptions {
    text?: string;
    mode?: GlitchMode;
    speed?: number;    // Speed of character swapping (ms)
    duration?: number; // Total length of one glitch cycle (ms)
}

export const glitch: Action<HTMLElement, GlitchOptions | undefined> = (node, options = {}) => {
    let { 
        text = node.innerText, 
        mode = "once", 
        speed = 50, 
        duration = 1000 
    } = options;

    let interval: ReturnType<typeof setInterval>;
    let loopInterval: ReturnType<typeof setInterval>;
    const chars = "!<>-_\\/[]{}—=+*^?#________";

    const startGlitch = () => {
        let iteration = 0;
        clearInterval(interval);

        interval = setInterval(() => {
            node.innerText = text
                .split("")
                .map((_, index) => {
                    if (index < iteration) return text[index];
                    return chars[Math.floor(Math.random() * chars.length)];
                })
                .join("");

            if (iteration >= text.length) {
                clearInterval(interval);
                node.innerText = text;
            }
            // Increment logic: 1/3 ensures a "stutter" effect
            iteration += 1 / 3;
        }, speed);
    };

    const init = () => {
        if (mode === "once") startGlitch();
        if (mode === "loop") {
            startGlitch();
            loopInterval = setInterval(startGlitch, duration + 2000);
        }
    };

    const handleEnter = () => {
        if (mode === "hover" || mode === "once-hover") startGlitch();
        if (mode === "loop-hover") {
            startGlitch();
            loopInterval = setInterval(startGlitch, duration + 500);
        }
    };

    const handleLeave = () => {
        if (mode === "loop-hover") clearInterval(loopInterval);
    };

    node.addEventListener('mouseenter', handleEnter);
    node.addEventListener('mouseleave', handleLeave);
    
    init();

    return {
        update(newOptions?: GlitchOptions) {
            if (newOptions) {
                text = newOptions.text || text;
                mode = newOptions.mode || mode;
                speed = newOptions.speed || speed;
                duration = newOptions.duration || duration;
            }
        },
        destroy() {
            clearInterval(interval);
            clearInterval(loopInterval);
            node.removeEventListener('mouseenter', handleEnter);
            node.removeEventListener('mouseleave', handleLeave);
        }
    };
};