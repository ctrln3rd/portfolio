export function imageToAscii(imageUrl: string, width = 80) {
  return new Promise((resolve) => {
    const img = new Image();
    img.src = imageUrl;
    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      const scale = width / img.width;
      canvas.width = width;
      canvas.height = img.height * scale;
      ctx?.drawImage(img, 0, 0, canvas.width, canvas.height);

      const data = ctx?.getImageData(0, 0, canvas.width, canvas.height).data;
      const chars = "@%#*+=-:. "; // Brightness chars
      let ascii = "";

      if (!data) {
        resolve("");
        return;
      }

      for (let y = 0; y < canvas.height; y++) {
        for (let x = 0; x < canvas.width; x++) {
          const i = (y * canvas.width + x) * 4;
          const brightness = (data[i] + data[i + 1] + data[i + 2]) / 3;
          const charIndex = Math.floor((brightness / 255) * (chars.length - 1));
          ascii += chars[charIndex];
        }
        ascii += "\n";
      }

      resolve(ascii);
    };
  });
}
