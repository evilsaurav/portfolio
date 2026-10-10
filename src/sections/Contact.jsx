import { useState } from "react";
import { motion } from "motion/react";
import emailjs from "@emailjs/browser";
import { mySocials } from "../constants/index.js";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ loading: false, sent: false, error: false, message: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, sent: false, error: false, message: "Transmitting message..." });

    try {
      await emailjs.send(
        "service_ezoqhwv",
        "template_17us8im",
        {
          from_name: formData.name,
          to_name: "Saurav Kumar",
          from_email: formData.email,
          to_email: "souravkumarsk@gmail.com",
          message: formData.message,
        },
        "pn-Bw_mS1_QQdofuV"
      );
      setStatus({ loading: false, sent: true, error: false, message: "Transmission received. I will respond promptly." });
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus({
        loading: false,
        sent: false,
        error: true,
        message: "Direct transmission failed. Please reach out via LinkedIn, Instagram, or WhatsApp below."
      });
    }
  };

  return (
    <footer
      id="contact"
      className="relative w-full bg-black text-[#E8DFD8] font-sans selection:bg-[#cbb59d] selection:text-black pt-20 pb-16 px-6 sm:px-12 lg:px-20 overflow-hidden"
    >
      {/* Subtle Background Glow */}
      <div className="absolute bottom-0 right-1/4 w-[35rem] h-[35rem] bg-[#D4AF37]/5 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div>
              {/* Eyebrow Header */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex items-center space-x-4 mb-5"
              >
                <span
                  className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#D4AF37]"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  05 / CONTACT
                </span>
                <div className="w-16 h-[1px] bg-gradient-to-r from-[#D4AF37]/80 via-[#8C6D4F]/40 to-transparent" />
              </motion.div>

              {/* Headline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-6"
              >
                <h2
                  className="text-5xl sm:text-6xl md:text-7xl tracking-tight uppercase leading-[0.85] select-none"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
                    INITIALIZE
                  </span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">
                    CONNECTION.
                  </span>
                </h2>
              </motion.div>

              <p
                className="text-xs sm:text-[13px] font-light text-[#A8988B] leading-relaxed max-w-md"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Have an ambitious system to architect, a data analytics challenge, or a software engineering opportunity? Send a dispatch or connect across verified channels.
              </p>
            </div>

            {/* Social Transmission Channels */}
            <div className="pt-6 border-t border-[#8C6D4F]/25 space-y-4">
              <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#D4AF37] block">
                {"// VERIFIED TRANSMISSION CHANNELS"}
              </span>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {mySocials.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-3.5 rounded-sm border border-[#8C6D4F]/30 bg-[#0E0C0A] hover:border-[#D4AF37] hover:bg-[#16120E] text-[#EAD8C7] hover:text-[#FFF5EB] transition-all duration-300 group"
                  >
                    <img
                      src={social.icon}
                      alt={social.name}
                      className="w-4 h-4 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-transform filter invert brightness-200"
                    />
                    <span className="text-xs font-mono tracking-wider uppercase">
                      {social.name}
                    </span>
                    <span className="text-xs text-[#8C6D4F] group-hover:text-[#D4AF37] ml-auto">
                      ↗
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Monolith Terminal Form (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 relative w-full rounded-sm border border-[#8C6D4F]/40 bg-[#0A0806] p-8 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.9)] overflow-hidden"
          >
            {/* Top Gold Horizon Edge */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/70 to-transparent" />
            
            {/* Precision Corner Crosshairs */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#D4AF37]/60" />
            <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[#D4AF37]/60" />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[#D4AF37]/60" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#D4AF37]/60" />

            {status.sent ? (
              <div className="py-16 text-center space-y-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-[#D4AF37] text-[#D4AF37] text-lg shadow-[0_0_15px_rgba(212,175,55,0.3)]">
                  ✓
                </div>
                <h3 className="text-3xl text-white font-normal uppercase" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                  TRANSMISSION RECEIVED
                </h3>
                <p className="text-xs text-[#A8988B] font-light max-w-sm mx-auto" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  {status.message}
                </p>
                <button
                  type="button"
                  onClick={() => setStatus({ loading: false, sent: false, error: false, message: "" })}
                  className="mt-4 px-6 py-2 border border-[#8C6D4F]/50 text-xs font-mono uppercase tracking-wider text-[#D4AF37] hover:border-[#D4AF37]"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <span className="block text-[9.5px] font-mono tracking-[0.2em] uppercase text-[#8C6D4F] mb-2">
                      {"// SENDER NAME"}
                    </span>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your full name"
                      className="w-full bg-[#120F0C] border border-[#8C6D4F]/30 focus:border-[#D4AF37] text-xs text-white placeholder-[#8C6D4F]/50 px-4 py-3 outline-none rounded-sm transition-colors"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    />
                  </div>

                  <div>
                    <span className="block text-[9.5px] font-mono tracking-[0.2em] uppercase text-[#8C6D4F] mb-2">
                      {"// SENDER EMAIL"}
                    </span>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your.email@domain.com"
                      className="w-full bg-[#120F0C] border border-[#8C6D4F]/30 focus:border-[#D4AF37] text-xs text-white placeholder-[#8C6D4F]/50 px-4 py-3 outline-none rounded-sm transition-colors"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    />
                  </div>
                </div>

                <div>
                  <span className="block text-[9.5px] font-mono tracking-[0.2em] uppercase text-[#8C6D4F] mb-2">
                    {"// MESSAGE PAYLOAD"}
                  </span>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your inquiry, project scope, or opportunity..."
                    className="w-full bg-[#120F0C] border border-[#8C6D4F]/30 focus:border-[#D4AF37] text-xs text-white placeholder-[#8C6D4F]/50 p-4 outline-none rounded-sm transition-colors resize-none"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  />
                </div>

                {status.error && (
                  <p className="text-xs text-rose-400 font-mono tracking-wide">
                    {status.message}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status.loading}
                  className="w-full py-3.5 border border-[#8C6D4F]/50 bg-[#14100D] hover:border-[#D4AF37] hover:bg-[#1A1510] text-[#E8DFD8] hover:text-[#F7E7C4] text-xs font-medium tracking-[0.25em] uppercase transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.5)] disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {status.loading ? "TRANSMITTING..." : "EXECUTE DISPATCH ↗"}
                </button>

              </form>
            )}
          </motion.div>

        </div>

        {/* System Footer Line with Social Links */}
        <div className="pt-16 mt-16 border-t border-[#8C6D4F]/20 flex flex-col sm:flex-row items-center justify-between text-center sm:text-left gap-6">
          <span className="text-[10.5px] font-mono tracking-widest text-[#D4AF37] uppercase">
            SAURAV KUMAR {"//"} EDITION 2026
          </span>
          
          <div className="flex flex-wrap items-center justify-center gap-5">
            {mySocials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] font-mono text-[#A8988B] hover:text-[#D4AF37] tracking-wider uppercase transition-colors"
              >
                {s.name}
              </a>
            ))}
          </div>

          <span className="text-[10px] font-mono text-[#8C6D4F]">
            © {(new Date()).getFullYear()} • ALL RIGHTS RESERVED
          </span>
        </div>

      </div>
    </footer>
  );
};

export default ContactSection;
