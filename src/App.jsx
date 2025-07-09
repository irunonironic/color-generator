import React, { useEffect, useState} from 'react';
import ColorBox from './ColorBox';  
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import chroma from 'chroma-js';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";


function App() {
  const [ colors , setColors ] = useState([]);
  const [baseColor, setBaseColor] = useState('#3498db');
  
  function generatePalette(baseColor) {
    const analog1 = chroma(baseColor).set('hsl.h','+30').hex();
    const analog2 = chroma(baseColor).set('hsl.h','-30').hex();
    const complement = chroma(baseColor).set('hsl.h','+180').hex();

    const palette = chroma
      .scale([analog1, baseColor, analog2, complement])
      .mode('lch')
      .colors(5);
    setColors(palette);
  }
  
  return (
 <div className="min-h-screen w-full flex items-center justify-center">

  
  <div
    className="absolute inset-0 z-0"
    style={{
      background: "#ffffff",
      backgroundImage: `
        radial-gradient(
          circle at center,
rgba(212, 227, 227, 0.1),
          transparent 90%
        )
      `,
      filter: "blur(80px)",
      backgroundRepeat: "no-repeat",
    }}
  />

 <div className="relative z-10 flex flex-col items-center gap-8 py-12">

  <div className="flex gap-4 justify-center flex-wrap">
    {colors.map((hex, index) => (
      <ColorBox key={index} color={hex} />
    ))}
  </div>
<input type="color" value={baseColor} onChange={(e) => setBaseColor(e.target.value)} />
 <Input
  type="text"
  placeholder="Paste hex code"
  value={baseColor}
  onChange={(e) => setBaseColor(e.target.value)}
  className="w-64"
/>


  <ToastContainer />
   <Button onClick={() => generatePalette(baseColor)} className="w-64">
  Generate Palette
</Button>

</div>

</div>
  );
}

export default App;
