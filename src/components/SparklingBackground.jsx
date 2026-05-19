import React, { useEffect, useRef } from 'react';

const SparklingBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];
    let mouse = { x: undefined, y: undefined };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    
    const handleMouseLeave = () => {
      mouse.x = undefined;
      mouse.y = undefined;
    };

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    // Initial resize to set dimensions
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 1.5 + 0.5;
        this.speedY = (Math.random() * 0.5) + 0.1; // Float upwards
        this.angle = Math.random() * 360;
        this.spin = (Math.random() < 0.5 ? 1 : -1) * (Math.random() * 0.02 + 0.01);
        
        // Cool Teal and Ice Blue colors for a relaxed feel
        const colors = [
          [20, 184, 166], // Teal 500
          [45, 212, 191], // Teal 400
          [56, 189, 248], // Light Blue 400
        ];
        this.color = colors[Math.floor(Math.random() * colors.length)];
        
        this.sparkleSpeed = Math.random() * 0.05 + 0.02;
        this.sparklePhase = Math.random() * Math.PI * 2;
      }

      update() {
        // Floating movement with elegant sway
        this.angle += this.spin;
        this.y -= this.speedY;
        this.x += Math.sin(this.angle) * 0.5;

        // Wrap around screen gracefully
        if (this.y < -50) this.y = canvas.height + 50;
        if (this.x < -50) this.x = canvas.width + 50;
        if (this.x > canvas.width + 50) this.x = -50;

        // Mouse interaction (repulsion field)
        if (mouse.x !== undefined && mouse.y !== undefined) {
          let dx = mouse.x - this.x;
          let dy = mouse.y - this.y;
          let distance = Math.sqrt(dx * dx + dy * dy);
          const maxDistance = 150;
          
          if (distance < maxDistance) {
            let forceDirectionX = dx / distance;
            let forceDirectionY = dy / distance;
            let force = (maxDistance - distance) / maxDistance;
            
            // Push particles smoothly away from the mouse
            this.x -= forceDirectionX * force * 3;
            this.y -= forceDirectionY * force * 3;
          }
        }

        // Increment sparkle phase
        this.sparklePhase += this.sparkleSpeed;
      }

      draw() {
        // Calculate sparkle opacity based on sine wave
        const sparkle = (Math.sin(this.sparklePhase) + 1) / 2;
        const opacity = sparkle * 0.8 + 0.2; // Keep it slightly visible

        // Draw particle core
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.color[0]}, ${this.color[1]}, ${this.color[2]}, ${opacity})`;
        ctx.shadowBlur = 15 * sparkle;
        ctx.shadowColor = `rgba(${this.color[0]}, ${this.color[1]}, ${this.color[2]}, ${opacity})`;
        ctx.fill();

        // Draw an elegant, soft cross/twinkle for larger particles
        if (this.size > 1.2 && sparkle > 0.6) {
          const crossSize = this.size * 3 * sparkle;
          ctx.beginPath();
          ctx.moveTo(this.x - crossSize, this.y);
          ctx.lineTo(this.x + crossSize, this.y);
          ctx.moveTo(this.x, this.y - crossSize);
          ctx.lineTo(this.x, this.y + crossSize);
          // Use the particle's own color for the twinkle to make it softer on the eyes
          ctx.strokeStyle = `rgba(${this.color[0]}, ${this.color[1]}, ${this.color[2]}, ${opacity * 0.4})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }

    const initParticles = () => {
      particles = [];
      // Adjust density based on screen size
      const numberOfParticles = Math.floor((canvas.width * canvas.height) / 8000);
      for (let i = 0; i < numberOfParticles; i++) {
        particles.push(new Particle());
      }
    };

    initParticles();

    const animate = () => {
      // Clear canvas with a very slight dark trail effect
      ctx.fillStyle = 'rgba(15, 23, 42, 0.3)'; // Matches var(--background)
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();

        // Optional: Draw subtle connecting lines (constellation effect) for nearby particles
        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 90) {
            const opacity = (1 - distance / 90) * 0.15;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(45, 212, 191, ${opacity})`; // Soft teal glow
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -2, // Behind the gradient and content
        pointerEvents: 'none', // Don't block clicks
      }}
    />
  );
};

export default SparklingBackground;
