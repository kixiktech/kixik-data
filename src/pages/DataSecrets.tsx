import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { X, ArrowLeft } from "lucide-react";

const MatrixBackground = () => {
  useEffect(() => {
    const canvas = document.getElementById('matrix-canvas') as HTMLCanvasElement;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+-={}[]|\\:;\"'<>,.?/~`";
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops: number[] = [];

    // Initialize drops
    for (let i = 0; i < columns; i++) {
      drops[i] = 1;
    }

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.03)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px 'VT323', monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = characters[Math.floor(Math.random() * characters.length)];
        
        // Create gradient effect - brighter at the head of the drop
        const y = drops[i] * fontSize;
        const gradient = ctx.createLinearGradient(0, y - fontSize * 3, 0, y + fontSize);
        gradient.addColorStop(0, 'rgba(212, 175, 55, 0.1)');
        gradient.addColorStop(0.5, 'rgba(212, 175, 55, 0.6)');
        gradient.addColorStop(1, 'rgba(212, 175, 55, 0.9)');
        
        ctx.fillStyle = gradient;
        ctx.fillText(text, i * fontSize, y);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 50);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      id="matrix-canvas"
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
};

const TypewriterText = ({ text, delay = 0, onComplete }: { text: string; delay?: number; onComplete?: () => void }) => {
  const [displayText, setDisplayText] = useState("");
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      let i = 0;
      const typeInterval = setInterval(() => {
        if (i < text.length) {
          setDisplayText(text.slice(0, i + 1));
          i++;
        } else {
          clearInterval(typeInterval);
          onComplete?.();
        }
      }, 50);

      return () => clearInterval(typeInterval);
    }, delay);

    return () => clearTimeout(timer);
  }, [text, delay, onComplete]);

  useEffect(() => {
    if (displayText === text) {
      const glitchInterval = setInterval(() => {
        setIsGlitching(true);
        setTimeout(() => setIsGlitching(false), 200);
      }, Math.random() * 3000 + 5000); // 5-8 seconds

      return () => clearInterval(glitchInterval);
    }
  }, [displayText, text]);

  const glitchChars = "!@#$%^&*()_+-={}[]|\\:;\"'<>,.?/~`";
  
  const glitchedText = isGlitching 
    ? text.split('').map((char, index) => 
        Math.random() > 0.8 ? glitchChars[Math.floor(Math.random() * glitchChars.length)] : char
      ).join('')
    : displayText;

  return (
    <span className={`${isGlitching ? 'animate-pulse' : ''}`}>
      {glitchedText}
      {displayText !== text && (
        <span className="animate-pulse text-primary">|</span>
      )}
    </span>
  );
};

const DataSecrets = () => {
  const navigate = useNavigate();
  const [showSubtext, setShowSubtext] = useState(false);

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <MatrixBackground />
      
      {/* Navigation */}
      <div className="relative z-10 flex justify-between p-6">
        <Button
          variant="ghost"
          onClick={handleGoHome}
          className="text-primary hover:text-primary-foreground hover:bg-primary/20 border border-primary/30"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Button>
        
        <Button
          variant="ghost"
          onClick={handleGoHome}
          className="text-primary hover:text-primary-foreground hover:bg-primary/20 border border-primary/30 w-10 h-10 p-0"
        >
          <X className="w-5 h-5" />
        </Button>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 -mt-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-4xl md:text-6xl font-terminal text-primary leading-tight">
            <TypewriterText 
              text="Your Data Holds Secrets. We Unlock Them. Giving You the Power of a Fortune 500 Data Team Without Paying for One."
              onComplete={() => setShowSubtext(true)}
            />
          </h1>
          
          {showSubtext && (
            <div className="animate-fade-in">
              <p className="text-xl md:text-2xl font-terminal text-primary/80">
                <TypewriterText 
                  text="Welcome to Kixik. The smartest hire you'll ever make."
                  delay={500}
                />
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DataSecrets;