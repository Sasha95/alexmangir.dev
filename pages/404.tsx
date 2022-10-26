import { useRouter } from "next/router";
import React, { useEffect } from "react";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);

  return (
    <div>
      <h1>404</h1>
      <p>Редирект на главную через 3 сек</p>
    </div>
  );
};

export default NotFound;
