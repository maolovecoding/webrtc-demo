import { useEffect, useRef } from "react";
export default () => {
  const canvasRef = useRef<HTMLCanvasElement>();
  useEffect(() => {
    // 绘制圆弧
    const ctx = canvasRef.current?.getContext("2d")!;
    // arc(x, y, radius, startAngle, endAngle, anticlockwise)。x和Y为圆心的坐标，radius为半径，startAngle为圆弧或圆的开始位置，endAngle为圆弧或圆的结束位置，anticlockwise是绘制的方向（不写默认为false，从顺时针方向）

    // ctx.arc(200, 200, 100, 0, Math.PI / 2) // 默认顺时针绘制
    // ctx.arc(300, 300, 100, 0, Math.PI / 2, true)
    // 先画的半圆弧和后画的圆弧被连在了一起，其实这是因为在咱们每次新建路径的时候都需要开启和闭合路径，这样不同路径之间才不会相互干扰。
    // ctx.stroke()
    // beginPath
    // 新建一条路径，生成之后，图形绘制命令被指向到路径上。
    // closePath
    // 闭合路径之后图形绘制命令又重新指向到上下文中。 
    // 其实就是在开启一个路径以后进行绘制，绘制完毕关闭这个开启的路径而已
    ctx.beginPath()
    ctx.arc(200, 200, 100, 0, Math.PI / 2)
    ctx.stroke()
    ctx.closePath()
    ctx.beginPath()
    ctx.arc(300, 400, 100, 0, Math.PI / 2, true)
    ctx.stroke()
    ctx.closePath()
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
