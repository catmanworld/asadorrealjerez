/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { NoticeBanner } from './components/NoticeBanner';
import { HomeView } from './components/HomeView';
import { MenuView } from './components/MenuView';
import { ContactView } from './components/ContactView';
import { Footer } from './components/Footer';
import { getBusinessStatus } from './utils/hours';

export default function App() {
  const [currentTab, setCurrentTab] = useState<'inicio' | 'carta' | 'contacto'>('inicio');
  const [businessStatus, setBusinessStatus] = useState(getBusinessStatus());

  // Periodically check open/close status
  useEffect(() => {
    const timer = setInterval(() => {
      setBusinessStatus(getBusinessStatus());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  const handleSelectTab = (tab: 'inicio' | 'carta' | 'contacto') => {
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fdf9f2] text-[#1c1c18] font-serif">
      {/* Top Banner Notice */}
      <NoticeBanner isOpenNow={businessStatus.isOpen} />

      {/* Main Top Header */}
      <Header
        currentTab={currentTab}
        onSelectTab={handleSelectTab}
        isOpenNow={businessStatus.isOpen}
      />

      {/* Main View Router */}
      <main className="flex-1 w-full">
        {currentTab === 'inicio' && (
          <HomeView
            onNavigateToTab={handleSelectTab}
            isOpenNow={businessStatus.isOpen}
          />
        )}

        {currentTab === 'carta' && (
          <MenuView
            onNavigateToTab={handleSelectTab}
          />
        )}

        {currentTab === 'contacto' && (
          <ContactView
            isOpenNow={businessStatus.isOpen}
          />
        )}
      </main>

      {/* Footer */}
      <Footer onNavigateToTab={handleSelectTab} />
    </div>
  );
}
