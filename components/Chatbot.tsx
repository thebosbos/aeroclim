"use client";

import { useEffect, useRef, useState } from "react";

interface Message {
  text: string;
  type: "bot" | "user";
}

function getBotResponse(message: string): string {
  const m = message.toLowerCase();

  if (m.includes("cvc") || m.includes("climatique")) {
    return "Pour le génie climatique et CVC, nous proposons des solutions VRV/VRF, centrales de traitement d'air, et groupes d'eau glacée. Souhaitez-vous un audit gratuit ?";
  } else if (m.includes("air") || m.includes("comprimé")) {
    return "Nous installons et maintenons des centrales d'air comprimé avec réseaux aluminium et inox. Voulez-vous que je vous oriente vers un expert ?";
  } else if (m.includes("piscine") || m.includes("eau")) {
    return "Nous réalisons des installations complètes pour piscines avec filtration, pompage, chauffage PAC et traitement automatique. Quel type de projet avez-vous ?";
  } else if (m.includes("incendie") || m.includes("ssi") || m.includes("sécurité")) {
    return "Pour la sécurité incendie, nous intervenons sur RIA, colonnes sèches, réseaux sprinkleurs et désenfumage. Avez-vous besoin d'une mise en conformité ?";
  } else if (m.includes("bonjour") || m.includes("salut")) {
    return "Bonjour ! Je suis l'assistant technique Aeroclim. Décrivez votre projet et je vous orienterai vers la meilleure solution.";
  } else if (m.includes("devis") || m.includes("prix") || m.includes("tarif")) {
    return "Pour un devis personnalisé, je vous recommande de demander une étude gratuite. Un expert analysera vos besoins spécifiques. Souhaitez-vous que je programme cette étude ?";
  } else if (m.includes("contact") || m.includes("téléphone") || m.includes("mail")) {
    return "Vous pouvez nous contacter au +33 1 23 45 67 89 ou par email à contact@aeroclim.fr. Nous sommes disponibles 24/7 pour l'urgence.";
  }
  return "Merci pour votre message. Pour mieux vous aider, pouvez-vous préciser votre projet ? (CVC, air comprimé, piscine, sécurité incendie)";
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    { text: "Bonjour. Je suis l'assistant technique Aeroclim. Décrivez votre projet.", type: "bot" },
  ]);
  const messagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener("aeroclim:open-chatbot", handler);
    return () => window.removeEventListener("aeroclim:open-chatbot", handler);
  }, []);

  function scrollToBottom() {
    requestAnimationFrame(() => {
      if (messagesRef.current) {
        messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
      }
    });
  }

  function sendMessage() {
    const text = input.trim();
    if (!text) return;
    setMessages((prev) => [...prev, { text, type: "user" }]);
    setInput("");
    scrollToBottom();
    setTimeout(() => {
      setMessages((prev) => [...prev, { text: getBotResponse(text), type: "bot" }]);
      scrollToBottom();
    }, 1000);
  }

  return (
    <div className="chatbot-container" id="chatbotContainer">
      <div className="chatbot-toggle" id="chatbotToggle" onClick={() => setOpen((v) => !v)}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      </div>
      <div className={`chatbot-window${open ? " active" : ""}`} id="chatbotWindow">
        <div className="chatbot-header">
          <h4>Assistant Aeroclim</h4>
          <button className="chatbot-close" onClick={() => setOpen(false)}>
            ×
          </button>
        </div>
        <div className="chatbot-messages" id="chatbotMessages" ref={messagesRef}>
          {messages.map((msg, i) => (
            <div key={i} className={`chatbot-message ${msg.type}`}>
              <p>{msg.text}</p>
            </div>
          ))}
        </div>
        <div className="chatbot-input">
          <input
            type="text"
            placeholder="Tapez votre message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") sendMessage();
            }}
          />
          <button onClick={sendMessage}>→</button>
        </div>
      </div>
    </div>
  );
}
