"use client";

import React, { useState } from 'react';
import { Facebook, Twitter, Linkedin, Share2, Check, Link as LinkIcon, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

interface SocialShareProps {
  title: string;
  description?: string;
  path?: string; // Relative path
  className?: string;
}

export const SocialShare: React.FC<SocialShareProps> = ({ 
  title, 
  description = "", 
  path = "", 
  className 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const getFullUrl = () => {
    if (typeof window === 'undefined') return '';
    return `${window.location.origin}${path}`;
  };

  const handleShare = (platform: 'facebook' | 'twitter' | 'linkedin') => {
    const url = encodeURIComponent(getFullUrl());
    const text = encodeURIComponent(title);
    const desc = encodeURIComponent(description);

    let shareUrl = '';

    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${text}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
        break;
    }

    window.open(shareUrl, '_blank', 'width=600,height=400');
    setIsOpen(false);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(getFullUrl());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      setIsOpen(false);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className={cn("relative", className)}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "p-2 rounded-full transition-all duration-300 flex items-center gap-2",
          isOpen ? "bg-primary text-navy shadow-md" : "text-gray-400 hover:text-primary hover:bg-primary/10"
        )}
        aria-label="Share this content"
      >
        {isOpen ? <X size={18} /> : <Share2 size={18} />}
        {isOpen && <span className="text-xs font-bold pr-1">Share</span>}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            className="absolute bottom-full right-0 mb-2 bg-white rounded-xl shadow-xl border border-gray-100 p-2 flex gap-1 z-50 min-w-[180px]"
          >
            <button
              onClick={() => handleShare('facebook')}
              className="p-2 hover:bg-blue-50 rounded-lg text-blue-600 transition-colors"
              title="Share on Facebook"
            >
              <Facebook size={18} />
            </button>
            <button
              onClick={() => handleShare('twitter')}
              className="p-2 hover:bg-sky-50 rounded-lg text-sky-500 transition-colors"
              title="Share on Twitter"
            >
              <Twitter size={18} />
            </button>
            <button
              onClick={() => handleShare('linkedin')}
              className="p-2 hover:bg-blue-50 rounded-lg text-blue-700 transition-colors"
              title="Share on LinkedIn"
            >
              <Linkedin size={18} />
            </button>
            <div className="w-px bg-gray-100 mx-1 my-1"></div>
            <button
              onClick={handleCopy}
              className="p-2 hover:bg-gray-50 rounded-lg text-gray-600 transition-colors relative"
              title="Copy Link"
            >
              {copied ? <Check size={18} className="text-green-600" /> : <LinkIcon size={18} />}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
