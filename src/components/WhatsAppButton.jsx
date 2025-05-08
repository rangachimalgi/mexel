import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./WhatsAppButton.css";

const WhatsAppButton = () => {
  return (
    <a
  href="https://web.whatsapp.com/send?phone=919891228708"
  target="_blank"
  rel="noopener noreferrer"
  className="whatsapp-float"
>
  <FaWhatsapp className="whatsapp-icon" />
</a>
  );
};

export default WhatsAppButton;
