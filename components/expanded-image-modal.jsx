"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X } from "lucide-react";

const ExpandedImageModal = ({ src, alt, onClose }) => {
  // Click-outside handler using useEffect
  useEffect(() => {
    const handleClickOutside = (event) => {
      const modalContent = document.querySelector("#expanded-image-content");
      if (modalContent && !modalContent.contains(event.target)) {
        console.log("Clicked outside modal, closing...");
        onClose();
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [onClose]);

  // Add Escape key support
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-60 flex items-center justify-center bg-black bg-opacity-70">
      <div
        id="expanded-image-content"
        className="relative max-w-4xl w-full p-4"
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 p-2 rounded-full bg-gray-900 hover:bg-gray-700 transition-colors z-70"
          aria-label="Close expanded image"
        >
          <X className="w-6 h-6 text-white" />
        </button>
        <div className="relative w-full h-[80vh]">
          <Image src={src} alt={alt} fill className="object-contain" />
        </div>
      </div>
    </div>
  );
};

export default ExpandedImageModal;
