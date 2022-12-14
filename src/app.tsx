import { initInnerLocalDevice } from "@/utils";
import { useEffect, useRef } from "react";
export default () => {
  const canvasRef = useRef<HTMLCanvasElement>();
  useEffect(() => {
    // 线条的样式
    const ctx = canvasRef.current?.getContext("2d")!;
    ctx.beginPath(); // 开启路径
    ctx.lineWidth = 10
    // 线条连接处的样式
    ctx.lineJoin = "miter"
    ctx.moveTo(100, 100)
    ctx.lineTo(150, 150)
    ctx.lineTo(200, 100)
    ctx.lineTo(250, 150)
    ctx.lineTo(300, 100)
    ctx.stroke()
    ctx.beginPath(); // 开启路径
    ctx.lineWidth = 10
    // 线条连接处的样式
    ctx.lineJoin = "round"
    ctx.moveTo(250, 250)
    ctx.lineTo(300, 300)
    ctx.lineTo(350, 250)
    ctx.lineTo(400, 300)
    ctx.lineTo(450, 250)
    ctx.stroke()
    ctx.beginPath(); // 开启路径
    ctx.lineWidth = 10
    // 线条连接处的样式
    ctx.lineJoin = "bevel"
    ctx.moveTo(100, 400)
    ctx.lineTo(150, 450)
    ctx.lineTo(200, 400)
    ctx.lineTo(250, 450)
    ctx.lineTo(300, 400)
    ctx.stroke()
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

// initInnerLocalDevice()
