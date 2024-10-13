"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [result, setResult] = useState<string | null>(null);

  useEffect(() => {
    init() 
  }, []);

  const init = async () => {
    try {
        const response = await fetch('http://localhost:8080/user/1234', {headers: {'Content-Type': 'application/json'}});
        const data = await response.json();
        setResult(data);
    } catch (error) {
        console.error('Error fetching user data:', error);
        setResult(null);
    }
  }
  
  return <div>{JSON.stringify(result)}</div>;
}
