"use client"

export default function SocialButtons(){
  return (
    <div className="fixed top-24 left-6 z-50 flex flex-col gap-3">
        <a
  href="https://www.instagram.com/"
  target="_blank"
  rel="noopener noreferrer"
  className="w-12 h-12 flex items-center justify-center bg-white/90 text-pink-600 rounded-full shadow-md hover:scale-105 transition heartbeat"
>
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" height="24" 
    viewBox="0 0 24 24" 
    fill="currentColor"
  >
    <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3h10zm-5 2.8A4.2 4.2 0 1016.2 12 4.2 4.2 0 0012 6.8zM18 6.3a1.2 1.2 0 11-1.2-1.2A1.2 1.2 0 0118 6.3z"/>
  </svg>
</a>
<a
  href="https://www.tiktok.com/@petermartinezhernandez?_r=1&_t=ZS-920ssgm2RpS"
  target="_blank"
  rel="noopener noreferrer"
  className="w-12 h-12 flex items-center justify-center bg-white/90 text-black rounded-full shadow-md hover:scale-105 transition heartbeat"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24" height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12.5 2h3c.1 1.8 1.3 3.3 3.5 3.5v3c-1.5-.1-2.9-.6-4.2-1.4v7.9c0 3.6-2.9 6-6 6s-6-2.4-6-6 2.9-6 6-6c.3 0 .6 0 .9.1v3.1c-.2 0-.4-.1-.7-.1a3 3 0 100 6 3 3 0 003-3V2z"/>
  </svg>
</a>


      <a
        href="https://wa.me/5214941032859" target="_blank" rel="noopener noreferrer"
        className="w-12 h-12 flex items-center justify-center bg-emerald-500 text-white rounded-full shadow-md hover:scale-105 transform transition heartbeat"
        aria-label="WhatsApp"
      >
        {/* WhatsApp SVG */}
        <svg 
  xmlns="http://www.w3.org/2000/svg" 
  width="20" height="20" 
  viewBox="0 0 24 24" 
  fill="currentColor"
>
  <path d="M20.52 3.48A11.86 11.86 0 0012 0C5.38 0 0 5.38 0 12c0 2.11.55 4.18 1.6 6.02L0 24l6.2-1.58A11.93 11.93 0 0012 24c6.62 0 12-5.38 12-12 0-3.19-1.24-6.19-3.48-8.52zM12 22c-1.87 0-3.67-.5-5.25-1.44l-.38-.22-3.68.94.98-3.55-.25-.37A9.93 9.93 0 012 12c0-5.52 4.48-10 10-10 2.68 0 5.2 1.05 7.07 2.93A9.93 9.93 0 0122 12c0 5.52-4.48 10-10 10zm5.25-7.67c-.29-.14-1.71-.84-1.98-.94-.27-.1-.46-.14-.66.14-.19.29-.75.94-.92 1.13-.17.19-.34.21-.63.07-.29-.14-1.22-.45-2.32-1.43a8.67 8.67 0 01-1.6-1.98c-.17-.29-.02-.45.13-.6.13-.13.29-.34.43-.5.15-.17.19-.3.29-.49.1-.19.05-.36-.02-.5-.07-.13-.66-1.58-.9-2.17-.24-.58-.48-.5-.66-.51l-.57-.01c-.19 0-.48.07-.74.35-.25.28-.97.95-.97 2.32 0 1.37 1 2.68 1.14 2.87.14.19 1.9 2.96 4.64 4.05C14.1 18.9 14.1 18.5 14.6 18.45c.5-.05 1.58-.64 1.8-1.25.21-.6.21-1.11.15-1.22-.06-.12-.25-.2-.55-.35z"/>
</svg>

      </a>
    </div>
  );
}
