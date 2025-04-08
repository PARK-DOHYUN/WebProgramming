import { useState } from "react";

const Area = () => {
  const [size, setSize] = useState({ width: 100, height: 100 });

  return (
    <div style={{ textAlign: "center" }}>
      <h1>
        너비 : {size.width}, 높이 : {size.height}
      </h1>
      <div style={{ height: "200px" }}>
        <canvas
          width={size.width}
          height={size.height}
          style={{
            backgroundColor: "black",
            border: "1px solid black",
            margin: "10px",
          }}
        />
      </div>
      <br />

      <button
        onClick={() => {
          const copy = { ...size };
          if (copy.width >= 150) return;
          copy.width += 10;
          setSize(copy);
        }}
      >
        너비 증가
      </button>
      <button
        onClick={() => {
          const copy = { ...size };
          if (copy.height >= 150) return;
          copy.height += 10;
          setSize(copy);
        }}
      >
        높이 증가
      </button>
      <button
        onClick={() => {
          const copy = { ...size };
          if (copy.width <= 0) return;
          copy.width -= 10;
          setSize(copy);
        }}
      >
        너비 감소
      </button>
      <button
        onClick={() => {
          const copy = { ...size };
          if (copy.height <= 0) return;
          copy.height -= 10;
          setSize(copy);
        }}
      >
        높이 감소
      </button>
    </div>
  );
};

export default Area;
