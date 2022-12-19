import { useEffect, useRef } from "react";
export default () => {
  const canvasRef = useRef<HTMLCanvasElement>();
  useEffect(() => {
    // 贝塞尔曲线
    const ctx = canvasRef.current?.getContext("2d")!;
    ctx.beginPath(); // 开启路径
    // quadraticCurveTo(cp1x, cp1y, x, y)
    ctx.moveTo(0, 0)
    ctx.quadraticCurveTo(300, 250, 150, 100)
    ctx.stroke()
    // ctx.bezierCurveTo(cp1x,cp1y, cp2x,cp2y, x, y) 有两个控制点 三次贝塞尔曲线
    // / 绘制一段三次贝塞尔曲线
      ctx.beginPath() // 开启路径
      ctx.moveTo(50, 200);
      ctx.bezierCurveTo(150, 50, 250, 350, 350, 200);
      // 绘制
      ctx.stroke();
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
