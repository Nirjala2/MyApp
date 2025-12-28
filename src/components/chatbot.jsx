import { useState, useRef, useEffect } from 'react';
import { FaComment, FaTimes, FaPaperPlane } from 'react-icons/fa';
import '../styles/Chatbot.css';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    { text: "Hello! I'm your assistant. How can I help you today?", type: 'bot' }
  ]);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = () => {
    if (!message.trim()) return;
    
    // Add user message
    const userMessage = { text: message, type: 'user' };
    setMessages(prev => [...prev, userMessage]);
    
    // Simulate bot response
    setTimeout(() => {
      let botResponse;
      const lowerMessage = message.toLowerCase();
      
      if (lowerMessage.includes('service') || lowerMessage.includes('offer')) {
        botResponse = "We offer Web Development, Mobile Apps, Business Automation, and Digital Marketing services. Which one interests you?";
      } else if (lowerMessage.includes('contact') || lowerMessage.includes('email') || lowerMessage.includes('phone')) {
        botResponse = "You can reach us at contact@sculptortechpvtltd.com or call +91 8623034275. Our office hours are 9 AM to 6 PM, Monday to Friday.";
      } else if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('quote')) {
        botResponse = "Pricing depends on project requirements. You can request a free consultation through our contact form!";
      } else if (lowerMessage.includes('about') || lowerMessage.includes('company')) {
        botResponse = "SculptorTech helps SMEs achieve revenue goals through technology solutions. We specialize in web, mobile, and digital services.";
      } else if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
        botResponse = "Hello! 👋 How can I assist you today?";
      } else {
        botResponse = "I can help you with information about our services, contact details, pricing, or company information. What would you like to know?";
      }
      
      setMessages(prev => [...prev, { text: botResponse, type: 'bot' }]);
    }, 500);
    
    setMessage('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const quickQuestions = [
    "What services do you offer?",
    "How to contact you?",
    "Request a quote",
    "About the company"
  ];

  const handleQuickQuestion = (question) => {
    setMessage(question);
    setTimeout(() => {
      sendMessage();
    }, 100);
  };

  return (
    <>
      <button 
        className="chatbot-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Chatbot toggle"
      >
        {isOpen ? <FaTimes /> : <FaComment />}
      </button>

      {isOpen && (
        <div className="chatbot-container">
          <div className="chatbot-header">
            <h4>💬 Virtual Assistant</h4>
            <p style={{ fontSize: '0.8rem', opacity: 0.7, margin: 0 }}>
              Hi! I'm here to help you
            </p>
          </div>
          
          <div className="chatbot-body">
            <div className="chat-messages">
              {messages.map((msg, index) => (
                <div 
                  key={index} 
                  className={`message ${msg.type}`}
                >
                  {msg.text}
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
            
            <div className="quick-questions">
              <p className="quick-label">Quick questions:</p>
              <div className="quick-buttons">
                {quickQuestions.map((question, index) => (
                  <button
                    key={index}
                    className="quick-btn"
                    onClick={() => handleQuickQuestion(question)}
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          <div className="chatbot-input">
            <input
              type="text"
              placeholder="Type your message here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              aria-label="Type your message"
            />
            <button 
              onClick={sendMessage}
              aria-label="Send message"
              disabled={!message.trim()}
              className="send-btn"
            >
              <FaPaperPlane />
            </button>
          </div>
        </div>
      )}
    </>
  );
}