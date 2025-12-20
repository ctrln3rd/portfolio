<script>
  import { onMount } from 'svelte';

  export let words = ["SYSTEM_FAILURE", "ACCESS_GRANTED", "ENCRYPTING...", "OVERRIDE"];
  export let typeSpeed = 100;
  export let deleteSpeed = 50;
  export let delayBetween = 2000;

  let displayText = "";
  let isDeleting = false;
  let wordIndex = 0;
  let isGlitching = false;

  function getRandomWord() {
    // Ensures we don't pick the same word twice in a row
    let newIndex = Math.floor(Math.random() * words.length);
    if (newIndex === wordIndex) return getRandomWord();
    return newIndex;
  }

  function handleTyping() {
    const currentFullWord = words[wordIndex];
    
    if (isDeleting) {
      displayText = currentFullWord.substring(0, displayText.length - 1);
    } else {
      displayText = currentFullWord.substring(0, displayText.length + 1);
    }

    // Determine speed
    let currentSpeed = isDeleting ? deleteSpeed : typeSpeed;

    // Glitch logic: random chance to "flicker"
    isGlitching = Math.random() > 0.9;

    // Logic: Word finished typing
    if (!isDeleting && displayText === currentFullWord) {
      currentSpeed = delayBetween; // Pause at the end
      isDeleting = true;
    } 
    // Logic: Word fully deleted
    else if (isDeleting && displayText === "") {
      isDeleting = false;
      wordIndex = getRandomWord();
      currentSpeed = 500; // Small pause before starting new word
    }

    setTimeout(handleTyping, currentSpeed);
  }

  onMount(() => {
    handleTyping();
  });
</script>

<span class="typewriter-container" class:glitch={isGlitching}>
  {displayText}
  <span class="cursor">_</span>
</span>

<style>
  .typewriter-container {
    font-family: 'Courier New', Courier, monospace;
    position: relative;
    display: inline-block;
  }

  /* The Glitch Effect */
  .glitch {
    text-shadow: 
      2px 0 #ff00ff, 
      -2px 0 #00ffff;
    animation: shake 0.1s infinite;
  }

  @keyframes shake {
    0% { transform: translate(0); }
    25% { transform: translate(2px, -2px); }
    50% { transform: translate(-2px, 2px); }
    75% { transform: translate(2px, 2px); }
    100% { transform: translate(0); }
  }

  .cursor {
    animation: blink 0.8s infinite;
  }

  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }
</style>