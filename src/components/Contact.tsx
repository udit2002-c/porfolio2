import { motion } from "framer-motion";
import { Send, Mail, Github, Linkedin, Terminal } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
      toast({
        title: "Please fill in all fields",
        description: "All fields are required to send your message.",
        variant: "destructive",
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid email address",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      const templateParams = {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'udittewari888@gmail.com'
      };
      
      const result = await emailjs.send(
        'service_uex1fqi',
        'template_ctmziz6',
        templateParams,
        'MF8ix_CJGLIpEiplx'
      );
      
      toast({
        title: "Message sent successfully! ✨",
        description: "Thank you for reaching out! I'll get back to you within 24 hours.",
        variant: "default",
      });
      
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      
    } catch (error) {
      toast({
        title: "Message failed to send",
        description: "Please try again or contact me directly at udittewari888@gmail.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden bg-black">
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4 }}
        >
          {/* IDE Header */}
          <div className="max-w-6xl mx-auto mb-8">
            <div className="bg-gray-800 rounded-t border-b border-gray-600 px-4 py-2 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="text-gray-400 text-sm font-mono">~/api/contact/README.md</div>
              <Terminal className="h-4 w-4 text-green-400" />
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-mono font-bold text-center mb-16 text-red-400">
            <span className="text-gray-400">// </span>
            Contact API Documentation
          </h2>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Info */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <div className="bg-gray-900 border border-gray-700 rounded overflow-hidden">
                <div className="bg-gray-800 px-4 py-2 border-b border-gray-700 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="font-mono text-sm text-gray-300">contact.json</span>
                </div>
                
                <div className="p-6">
                  <div className="bg-black border border-gray-600 rounded p-4 font-mono text-sm mb-6">
                    <div className="text-gray-500 mb-3">// Contact Information</div>
                    <div className="space-y-2">
                      <div>
                        <span className="text-purple-400">const</span>{" "}
                        <span className="text-cyan-400">developer</span> = {"{"}
                      </div>
                      <div className="ml-4">
                        <span className="text-green-400">name</span>: <span className="text-yellow-400">"Udit Tewari"</span>,
                      </div>
                      <div className="ml-4">
                        <span className="text-green-400">role</span>: <span className="text-yellow-400">"Full Stack Developer"</span>,
                      </div>
                      <div className="ml-4">
                        <span className="text-green-400">email</span>: <span className="text-yellow-400">"udittewari888@gmail.com"</span>,
                      </div>
                      <div className="ml-4">
                        <span className="text-green-400">location</span>: <span className="text-yellow-400">"India"</span>,
                      </div>
                      <div className="ml-4">
                        <span className="text-green-400">available</span>: <span className="text-cyan-400">true</span>
                      </div>
                      <div>{"}"}</div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <p className="text-gray-300 leading-relaxed font-mono text-sm">
                      <span className="text-gray-500">// Looking for opportunities to build innovative solutions</span>
                      <br />
                      <span className="text-gray-500">// Open to full-time roles, internships, and freelance projects</span>
                    </p>

                    <div className="space-y-3">
                      <a
                        href="mailto:udittewari888@gmail.com"
                        className="flex items-center p-3 bg-gray-800 border border-gray-600 rounded hover:border-red-400 transition-colors group"
                      >
                        <Mail className="h-5 w-5 text-red-400 mr-3" />
                        <span className="font-mono text-sm text-gray-300 group-hover:text-white">
                          udittewari888@gmail.com
                        </span>
                      </a>
                      
                      <a
                        href="https://github.com/udit2002-c"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center p-3 bg-gray-800 border border-gray-600 rounded hover:border-purple-400 transition-colors group"
                      >
                        <Github className="h-5 w-5 text-purple-400 mr-3" />
                        <span className="font-mono text-sm text-gray-300 group-hover:text-white">
                          github.com/udit2002-c
                        </span>
                      </a>
                      
                      <a
                        href="https://linkedin.com/in/udit-tewari-24b8b3252"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center p-3 bg-gray-800 border border-gray-600 rounded hover:border-blue-400 transition-colors group"
                      >
                        <Linkedin className="h-5 w-5 text-blue-400 mr-3" />
                        <span className="font-mono text-sm text-gray-300 group-hover:text-white">
                          LinkedIn Profile
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <div className="bg-gray-900 border border-gray-700 rounded overflow-hidden">
                <div className="bg-gray-800 px-4 py-2 border-b border-gray-700 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="font-mono text-sm text-gray-300">POST /api/contact</span>
                  <Send className="h-4 w-4 text-green-400" />
                </div>
                
                <form onSubmit={handleSubmit} className="p-6 space-y-6">
                  <div className="bg-black border border-gray-600 rounded p-4 font-mono text-sm mb-4">
                    <div className="text-gray-500 mb-2">// Request Payload</div>
                    <div className="text-cyan-400">{"{"}</div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <div className="text-sm font-mono text-gray-400 mb-2">
                        <span className="text-green-400">"name"</span>: <span className="text-yellow-400">"string"</span>
                      </div>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded 
                                 text-white font-mono text-sm placeholder-gray-500
                                 focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent
                                 transition-all duration-200"
                        placeholder="Enter your name"
                        required
                      />
                    </div>

                    <div>
                      <div className="text-sm font-mono text-gray-400 mb-2">
                        <span className="text-green-400">"email"</span>: <span className="text-yellow-400">"string"</span>
                      </div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded 
                                 text-white font-mono text-sm placeholder-gray-500
                                 focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent
                                 transition-all duration-200"
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>

                    <div>
                      <div className="text-sm font-mono text-gray-400 mb-2">
                        <span className="text-green-400">"subject"</span>: <span className="text-yellow-400">"string"</span>
                      </div>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded 
                                 text-white font-mono text-sm placeholder-gray-500
                                 focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent
                                 transition-all duration-200"
                        placeholder="Project collaboration"
                        required
                      />
                    </div>

                    <div>
                      <div className="text-sm font-mono text-gray-400 mb-2">
                        <span className="text-green-400">"message"</span>: <span className="text-yellow-400">"string"</span>
                      </div>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded 
                                 text-white font-mono text-sm placeholder-gray-500 resize-none
                                 focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent
                                 transition-all duration-200"
                        placeholder="Hi Udit! I'd love to discuss..."
                        required
                      />
                    </div>
                  </div>

                  <div className="bg-black border border-gray-600 rounded p-4 font-mono text-sm">
                    <div className="text-cyan-400">{"}"}</div>
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full p-4 rounded font-mono text-sm font-medium transition-all duration-200 
                              flex items-center justify-center space-x-2 border-2
                              ${isSubmitting 
                                ? 'bg-gray-700 border-gray-600 text-gray-400 cursor-not-allowed' 
                                : 'bg-red-600 border-red-500 text-white hover:bg-red-500 hover:border-red-400'
                              }`}
                    whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        <span>Execute POST Request</span>
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
