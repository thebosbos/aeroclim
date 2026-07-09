"use client";

export default function OpenChatbotButton({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <button
      className={className}
      onClick={() => window.dispatchEvent(new Event("aeroclim:open-chatbot"))}
    >
      {children}
    </button>
  );
}
