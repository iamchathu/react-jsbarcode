import * as React from 'react';
import JsBarcode, { Options } from 'jsbarcode';

export const enum Renderer {
  svg = 'svg',
  image = 'image',
  canvas = 'canvas',
}

export interface ReactBarcodeProps {
  renderer?: Renderer;
  value: string;
  options?: Options;
}

export { Options };

const ReactBarcode = ({ value, options, renderer = Renderer.svg }: ReactBarcodeProps) => {
  const containerRef = React.useRef<any>(null);

  React.useEffect(() => {
    JsBarcode(containerRef.current, value, options);
  }, [value, options, renderer]);

  switch (renderer) {
    case 'canvas':
      return <canvas ref={containerRef} />;
    case 'image':
      return <img ref={containerRef} alt="barcode" />;
    default:
      return <svg ref={containerRef} />;
  }
};

export default ReactBarcode;
