'use client';
import { useEffect, useRef, useState } from 'react';

// Muncul lembut saat masuk layar tanpa pustaka animasi: IntersectionObserver + transisi CSS
// (.muncul di globals.css). Bila pengguna memilih "kurangi gerak" atau peramban tidak punya
// IntersectionObserver, isi langsung tampil. Tanpa JavaScript, <noscript> di layout menampilkannya.
export default function Reveal({ children, delay = 0, y = 24, className = '', style, ...rest }) {
  const ref = useRef(null);
  const [tampil, setTampil] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setTampil(true);
      return undefined;
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setTampil(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      {...rest}
      className={`muncul ${tampil ? 'terlihat' : ''} ${className}`}
      style={{ '--muncul-y': `${y}px`, '--muncul-tunda': `${delay}s`, ...style }}
    >
      {children}
    </div>
  );
}
