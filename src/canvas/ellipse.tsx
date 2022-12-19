import { useEffect, useRef } from "react";
export default () => {
  const canvasRef = useRef<HTMLCanvasElement>();
  useEffect(() => {
    // 椭圆 ellipse
    const ctx = canvasRef.current?.getContext("2d")!;
    ctx.beginPath(); // 开启路径
    // ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle, anticlockwise)
    // rotation 旋转角度
    ctx.ellipse(200, 200, 100, 50, 0, 0, Math.PI);
    ctx.fillStyle = "#bfc"; // 填充的颜色
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(300, 300, 100, 50, 0, 0, Math.PI / 2, true);
    ctx.stroke();

    ctx.beginPath();
    // 旋转90°
    ctx.ellipse(100, 100, 100, 50, Math.PI / 2, 0, Math.PI* 2, true);
    ctx.fillStyle = "#39a5cc"; // 填充的颜色
    ctx.fill();
  }, []);
  return (
    <div>
      <canvas
        style={{ borderRadius: "20px", boxShadow: "0px 0px 5px #ccc" }}
        ref={canvasRef as any}
        width={500}
        height={500}
      ></canvas>
    </div>
  );
};
