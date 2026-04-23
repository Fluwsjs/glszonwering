"use client";

import { useEffect, useState, useCallback } from "react";

interface UseExitIntentOptions {
  threshold?: number;
  delay?: number;
  cookieName?: string;
  cookieDays?: number;
}

export function useExitIntent({
  threshold = 10,
  delay = 1000,
  cookieName = "exit_intent_shown",
  cookieDays = 7,
}: UseExitIntentOptions = {}) {
  const [showPopup, setShowPopup] = useState(false);

  const setCookie = useCallback(() => {
    const date = new Date();
    date.setTime(date.getTime() + cookieDays * 24 * 60 * 60 * 1000);
    document.cookie = `${cookieName}=true;expires=${date.toUTCString()};path=/`;
  }, [cookieName, cookieDays]);

  const getCookie = useCallback(() => {
    const name = cookieName + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookies = decodedCookie.split(";");
    for (let cookie of cookies) {
      cookie = cookie.trim();
      if (cookie.indexOf(name) === 0) {
        return cookie.substring(name.length);
      }
    }
    return null;
  }, [cookieName]);

  const closePopup = useCallback(() => {
    setShowPopup(false);
    setCookie();
  }, [setCookie]);

  useEffect(() => {
    // Don't show if already shown (cookie exists)
    if (getCookie()) return;

    let timeoutId: NodeJS.Timeout;

    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger when mouse leaves through the top
      if (e.clientY <= threshold) {
        timeoutId = setTimeout(() => {
          setShowPopup(true);
        }, delay);
      }
    };

    const handleMouseEnter = () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };

    // Wait a bit before enabling exit intent
    const enableTimeout = setTimeout(() => {
      document.addEventListener("mouseleave", handleMouseLeave);
      document.addEventListener("mouseenter", handleMouseEnter);
    }, 3000);

    return () => {
      clearTimeout(enableTimeout);
      clearTimeout(timeoutId);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [threshold, delay, getCookie]);

  return { showPopup, closePopup };
}
