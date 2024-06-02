import dynamic from 'next/dynamic';
import { useEffect } from 'react';

const Sketch = dynamic(() => import('react-p5'), { ssr: false });

const AnimatedBackground = () => {
  let t = 0;
  const themeColor = '#1DA3AA'; // 主题色，teal

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
  };

  const draw = (p5) => {
    p5.clear();

    // 第一条线
    p5.stroke(themeColor + '80');
    p5.strokeWeight(10); // 线条粗细
    p5.noFill();
    p5.beginShape();
    for (let x = 0; x < p5.width; x++) {
      const y = p5.height * 0.5 + p5.sin(x * 0.01 + t) * 50;
      p5.vertex(x, y);
    }
    p5.endShape();

    // 第二条线，稍微不同的波形参数和透明度
    p5.stroke(themeColor + '20'); // 添加透明度 (50% 透明度)
    p5.strokeWeight(20); // 更粗的线条
    p5.noFill();
    p5.beginShape();
    for (let x = 0; x < p5.width; x++) {
      const y = p5.height * 0.5 + p5.sin(x * 0.015 + t + 50) * 50;
      p5.vertex(x, y);
    }
    p5.endShape();

    // 第三条线，稍微不同的波形参数和透明度
    p5.stroke(themeColor + '60'); // 更加透明 (25% 透明度)
    p5.strokeWeight(15); // 线条粗细
    p5.noFill();
    p5.beginShape();
    for (let x = 0; x < p5.width; x++) {
      const y = p5.height * 0.5 + p5.sin(x * 0.02 + t + 100) * 50;
      p5.vertex(x, y);
    }
    p5.endShape();

    t += 0.01;
  };

  const windowResized = (p5) => {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
  };

  return (
    <Sketch
      setup={setup}
      draw={draw}
      windowResized={windowResized}
      className="absolute top-0 left-0 w-full h-full -z-10"
    />
  );
};

export default AnimatedBackground;
