import { useEffect, useState } from "react";

function ProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ width: "300px", margin: "50px auto" }}>
      {/* Outer bar */}
      <div
        style={{
          width: "100%",
          height: "25px",
          backgroundColor: "#ddd",
          borderRadius: "5px",
          overflow: "hidden",
        }}
      >
        {/* Inner bar */}
        <div
          style={{
            width: `${progress}%`,
            height: "100%",
            backgroundColor: "green",
            transition: "width 0.5s ease",
          }}
        />
      </div>

      {/* Text */}
      <p style={{ textAlign: "center" }}>{progress}%</p>
    </div>
  );
}

export default ProgressBar;
