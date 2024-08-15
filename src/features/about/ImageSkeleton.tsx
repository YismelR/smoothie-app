import { Skeleton } from "@/components/ui/skeleton";
import { useState, useEffect } from "react";

type ImageSkeletonProps = {
  src: string;
  alt: string;
  className: string;
};

function ImageSkeleton({ src, alt, className }: ImageSkeletonProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading or fetch your data here
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Adjust the delay as needed

    return () => clearTimeout(timer); // Cleanup the timeout if the component unmounts
  }, []);

  if (isLoading) {
    return <Skeleton className={`${className} w-full`} />;
  }

  return <img src={src} alt={alt} className={className} />;
}

export default ImageSkeleton;
