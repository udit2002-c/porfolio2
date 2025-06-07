import { motion } from "framer-motion";
import { Send, Mail, Github, Linkedin, MessageCircle, CheckCircle, AlertCircle } from "lucide-react";
import { useState, useRef } from "react";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  
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

  // Test function to verify EmailJS setup
  const testEmailJS = async () => {
    try {
      console.log('Testing EmailJS connection...');
      
      const testData = {
        name: "Test User",
        email: "test@example.com", 
        subject: "Test Email",
        message: "This is a test message to verify EmailJS setup."
      };

      const result = await emailjs.send(
        'service_uex1fqi',
        'template_ctmziz6',
        testData,
        'MF8ix_CJGLIpEiplx'
      );
      
      console.log('Test email result:', result);
      toast({
        title: "Test email sent successfully!",
        description: "EmailJS is working correctly.",
        variant: "default",
      });
    } catch (error) {
      console.error('Test email failed:', error);
      toast({
        title: "Test email failed",
        description: `Error: ${error}`,
        variant: "destructive",
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log('Form submission started...');
    console.log('Form data:', formData);
    
    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
      toast({
        title: "Please fill in all fields",
        description: "All fields are required to send your message.",
        variant: "destructive",
      });
      return;
    }

    // Email validation
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
      console.log('Attempting to send email...');
      
      // Method 1: Using emailjs.send (direct approach)
      const templateParams = {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'udittewari888@gmail.com'
      };
      
      console.log('Template params:', templateParams);
      
      const result = await emailjs.send(
        'service_uex1fqi',
        'template_ctmziz6',
        templateParams,
        'MF8ix_CJGLIpEiplx'
      );
      
      console.log('Email sent successfully:', result);
      
      toast({
        title: "Message sent successfully! ✨",
        description: "Thank you for reaching out! I'll get back to you within 24 hours.",
        variant: "default",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      
    } catch (error) {
      console.error('Email sending failed:', error);
      console.error('Error details:', {
        name: error?.name,
        message: error?.message,
        status: error?.status,
        text: error?.text
      });
      
      // More specific error handling
      let errorMessage = "There was a problem sending your message.";
      
      if (error instanceof Error) {
        if (error.message.includes('Invalid template ID')) {
          errorMessage = "Email template not found. Please contact me directly at udittewari888@gmail.com";
        } else if (error.message.includes('Invalid service ID')) {
          errorMessage = "Email service not configured. Please contact me directly at udittewari888@gmail.com";
        } else if (error.message.includes('Invalid user ID')) {
          errorMessage = "Email service authentication failed. Please contact me directly at udittewari888@gmail.com";
        } else if (error.message.includes('network') || error.message.includes('fetch')) {
          errorMessage = "Network error. Please check your connection and try again.";
        } else {
          errorMessage = `Error: ${error.message}`;
        }
      }
      
      toast({
        title: "Message failed to send",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-black">
        <div className="nebula-effect absolute inset-0"></div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="text-white">Get In </span>
            <span className="text-red-400">Touch</span>
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Information */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <div className="space-card p-8">
                <div className="flex items-center mb-6">
                  <MessageCircle className="h-8 w-8 text-red-400 mr-4" />
                  <h3 className="text-2xl font-bold text-white">Let's Connect</h3>
                </div>
                
                <p className="text-gray-300 leading-relaxed mb-8 text-lg">
                  Ready to explore new <span className="text-red-400 font-semibold">opportunities</span> together? 
                  Whether you have a project in mind, want to discuss technology, 
                  or just want to connect, I'd love to hear from you.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center group">
                    <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center mr-4 
                                  border border-red-500/50 group-hover:bg-red-500/30 transition-all duration-200">
                      <Mail className="h-5 w-5 text-red-400" />
                    </div>
                    <a 
                      href="mailto:udittewari888@gmail.com" 
                      className="text-gray-300 hover:text-white transition-colors text-lg"
                    >
                      udittewari888@gmail.com
                    </a>
                  </div>
                  
                  <div className="flex gap-4 pt-4">
                    <a 
                      href="https://linkedin.com/in/udit-narain-tewari" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-black/60 border border-red-500/50 flex items-center justify-center 
                               hover:bg-red-500/20 hover:border-red-400 hover:shadow-lg hover:shadow-red-500/30
                               transition-all duration-200"
                      aria-label="LinkedIn Profile"
                    >
                      <Linkedin className="h-5 w-5 text-red-400 hover:text-red-300 transition-colors" />
                    </a>
                    <a 
                      href="https://github.com/udit2002-c" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-black/60 border border-red-500/50 flex items-center justify-center 
                               hover:bg-red-500/20 hover:border-red-400 hover:shadow-lg hover:shadow-red-500/30
                               transition-all duration-200"
                      aria-label="GitHub Profile"
                    >
                      <Github className="h-5 w-5 text-red-400 hover:text-red-300 transition-colors" />
                    </a>
                  </div>
                </div>

                {/* Debug button for testing EmailJS */}
                <div className="mt-8 pt-6 border-t border-red-500/20">
                  <button
                    onClick={testEmailJS}
                    className="text-xs text-red-400 hover:text-red-300 transition-colors underline"
                  >
                    Test EmailJS Configuration
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              className="space-card p-8"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white mb-3">
                      Full Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="space-input"
                      placeholder="Your name"
                      disabled={isSubmitting}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white mb-3">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="space-input"
                      placeholder="you@example.com"
                      disabled={isSubmitting}
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-white mb-3">
                    Subject *
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="space-input"
                    placeholder="What's this about?"
                    disabled={isSubmitting}
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white mb-3">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="space-input resize-none"
                    placeholder="Tell me about your project or just say hello..."
                    disabled={isSubmitting}
                  />
                </div>
                
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="space-button-primary w-full group disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  <div className="flex items-center justify-center">
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="h-5 w-5 ml-3 group-hover:translate-x-1 transition-transform duration-200" />
                      </>
                    )}
                  </div>
                </motion.button>

                {/* Alternative contact note */}
                <p className="text-xs text-gray-400 text-center">
                  Having trouble with the form? Send me an email directly at{" "}
                  <a 
                    href="mailto:udittewari888@gmail.com" 
                    className="text-red-400 hover:text-red-300 transition-colors"
                  >
                    udittewari888@gmail.com
                  </a>
                </p>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
