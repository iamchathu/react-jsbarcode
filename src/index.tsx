import * as React from 'react';
import JsBarcode, { Options } from 'jsbarcode';

const enum Renderer {
  svg = 'svg',
  img = 'img',
  canvas = 'canvas',
}

export interface ReactBarcodeProps {
  renderer?: Renderer;
  data: string;
  options: Options;
}

const ReactBarcode = ({ data, options, renderer = Renderer.svg }: ReactBarcodeProps) => {
  const containerRef = React.useRef<any>(null);

  React.useEffect(() => {
    JsBarcode(containerRef.current, data, options);
  }, [data, options]);

  switch (renderer) {
    case 'canvas':
      return <canvas ref={containerRef} />;
    case 'img':
      return <img ref={containerRef} alt="barcode" />;
    default:
      return <svg ref={containerRef} />;
  }
};

export default ReactBarcode;
