import {useEffect, useRef} from 'react'
export default () => {
  const canvasRef = useRef<HTMLCanvasElement>()
  useEffect(()=>{
    // 通过判断getContext方法是否存在来判断浏览器的支持性
    // 获取canvas的绘制上下文
    const ctx = canvasRef.current!.getContext("2d")!
    // 设置初始位置，参数为初始位置x和y的坐标点
    ctx.moveTo(50, 50)
    // 绘制一条从初始位置到指定位置的直线，参数为指定位置x和y的坐标点
    ctx.lineTo(250, 250)
    // 通过线条来绘制图形轮廓
    ctx.stroke()
  })
  return (
    <div>
      <canvas style={{borderRadius: "20px", boxShadow: "0px 0px 5px #ccc"}} ref={canvasRef as any} width={400} height={400}></canvas>
    </div>
  );
};
