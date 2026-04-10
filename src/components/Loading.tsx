"use client";

import React, { useState, useEffect } from "react";

interface LoadingProps {
  children: React.ReactNode;
  minDelay?: number;
}

const Loading = ({ children, minDelay = 1000 }: LoadingProps): React.JSX.Element => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, minDelay);

    return () => clearTimeout(timer);
  }, [minDelay]);

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-background">
        <div className="flex flex-col items-center gap-4">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent" />
          <p className="text-foreground/60">Carregando...</p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default Loading;