import { useEffect, useRef } from "react";
export default () => {
  const canvasRef = useRef<HTMLCanvasElement>();
  useEffect(() => {
    // 绘制矩形
    const ctx = canvasRef.current?.getContext("2d")!;
    // strokeRect(x, y, width, height) 绘制一个矩形的边框
    // fillRect(x, y, width, height) 绘制一个填充的矩形
    // clearRect(x, y, width, height) 清除指定矩形区域，让清除部分完全透明。
    // ctx.strokeRect(100, 100, 200, 100) // 绘制的矩形只有边框
    ctx.fillRect(100, 100, 200, 100) // 整个矩形 包括内部都是黑色
    ctx.clearRect(150, 125, 100, 50) // 清除这个区域的绘制 完全透明
  });
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
