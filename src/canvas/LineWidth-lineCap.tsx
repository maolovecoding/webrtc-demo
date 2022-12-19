import { initInnerLocalDevice } from "@/utils";
import { useEffect, useRef } from "react";
export default () => {
  const canvasRef = useRef<HTMLCanvasElement>();
  useEffect(() => {
    // 线条的样式
    const ctx = canvasRef.current?.getContext("2d")!;
    ctx.beginPath(); // 开启路径
    // 1. 线条的粗细
    ctx.lineWidth = 2
    ctx.strokeRect(20, 20, 100, 100)
    ctx.closePath()
    // 2. 线条端点的样式 lineCap
    ctx.beginPath()
    ctx.lineWidth = 10
    // ctx.lineCap = "butt"
    // ctx.lineCap = "round"
    ctx.lineCap = "square"
    ctx.moveTo(150, 150)
    ctx.lineTo(250, 250)
    ctx.stroke()

    ctx.beginPath()
    ctx.lineWidth = 10
    ctx.lineCap = "butt"
    ctx.moveTo(250, 50)
    ctx.lineTo(350, 150)
    ctx.stroke()

    ctx.beginPath()
    ctx.lineWidth = 10
    ctx.lineCap = "round"
    ctx.moveTo(200, 100)
    ctx.lineTo(300,200)
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
