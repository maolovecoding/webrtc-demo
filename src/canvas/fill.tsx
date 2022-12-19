import { useEffect, useRef } from "react";
export default () => {
  const canvasRef = useRef<HTMLCanvasElement>();
  useEffect(() => {
    // 填充 fill
    const ctx = canvasRef.current?.getContext("2d")!;
    // fill方法 通过填充路径的内容区域生成实心的图形
    ctx.beginPath()
    ctx.arc(100, 100, 50, Math.PI, Math.PI / 2, false)
    ctx.stroke()

    ctx.beginPath() // 开启路径
    ctx.arc(200, 200, 50, 0, Math.PI, true);
    ctx.fillStyle = "#bfc" // 填充的颜色
    ctx.fill();
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
