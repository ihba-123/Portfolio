import { useState, useEffect } from "react";
import "./Cursor.scss";

const Cursor = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const createParticle = (x, y) => {
      const newParticle = { id: Date.now() + Math.random(), x, y };
      setParticles((prev) => [...prev, newParticle]);

      // Remove particle after 500ms
      setTimeout(() => {
        setParticles((prev) => prev.filter((p) => p.id !== newParticle.id));
      }, 500);
    };

    const handleMouseMove = (e) => {
      createParticle(e.clientX, e.clientY);
    };

    const handleTouchMove = (e) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        createParticle(touch.clientX, touch.clientY);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  return (
    <div className="fire-cursor-container">
      {particles.map((particle) => (
        <span
          key={particle.id}
          className="fire-trail"
          style={{ left: `${particle.x}px`, top: `${particle.y}px` }}
        />
      ))}
    </div>
  );
};

export default Cursor;
