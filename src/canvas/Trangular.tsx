import {useEffect, useRef} from 'react'
export default () => {
  const canvasRef = useRef<HTMLCanvasElement>()
  useEffect(()=>{
    // 绘制三角形
    // 三条直线叠加
    const ctx = canvasRef.current?.getContext("2d")!
    ctx.moveTo(100 , 100)
    // 从起始点开始画 每次画一条线以后 下次的起始点就变了
    ctx.lineTo(200, 200)
    ctx.lineTo(0, 200)
    ctx.lineTo(100, 100)
    ctx.stroke()
  })
  return (
    <div>
      <canvas style={{borderRadius: "20px", boxShadow: "0px 0px 5px #ccc"}} ref={canvasRef as any} width={400} height={400}></canvas>
    </div>
  );
};
