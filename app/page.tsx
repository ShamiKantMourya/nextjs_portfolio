'use client';

import { useEffect } from 'react';
import Navbar from './components/layout/Navbar';
// import Home from '@/components/sections/Home';
// import About from '@/components/sections/About';
// import Experience from '@/components/sections/Experience';
// import Projects from '@/components/sections/Projects';

export default function Page() {
  // Handle scroll restoration
  useEffect(() => {
    window.history.scrollRestoration = 'manual';
    
    return () => {
      window.history.scrollRestoration = 'auto';
    };
  }, []);

  return (
    <main className="min-h-screen">
      <Navbar />
      {/* <Home /> */}
      {/* <About /> */}
      {/* <Experience /> */}
      {/* <Projects /> */}
      
      <footer className="py-8 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} John Doe. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}