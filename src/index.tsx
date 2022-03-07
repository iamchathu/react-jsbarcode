import JsBarcode, { Options } from 'jsbarcode';
import { useEffect, useRef } from 'react';

export const enum Renderer {
  svg = 'svg',
  image = 'image',
  canvas = 'canvas',
}

export interface ReactBarcodeProps {
  renderer?: Renderer;
  value: string;
  options?: Options;
  style?: React.CSSProperties;
  className?: string;
}

export { Options };

const ReactBarcode = ({ style, className, value, options, renderer = Renderer.svg }: ReactBarcodeProps) => {
  const containerRef = useRef<any>(null);

  useEffect(() => {
    JsBarcode(containerRef.current, value, options);
  }, [value, options, renderer]);

  switch (renderer) {
    case 'canvas':
      return <canvas ref={containerRef} style={style} className={className} />;
    case 'image':
      return <img ref={containerRef} alt="barcode" style={style} className={className} />;
    default:
      return <svg ref={containerRef} style={style} className={className} />;
  }
};

export default ReactBarcode;
