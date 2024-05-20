import JsBarcode, { type Options } from 'jsbarcode';
import { useCallback, useEffect, useRef, type CSSProperties } from 'react';
import { Renderer } from '../types';

export interface ReactBarcodeProps {
  /**
   * JSBarcode renderer type
   * @enum
   */
  renderer?: Renderer;
  /**
   * Value to be rendered as barcode
   */
  value: string;
  /**
   * JSBarcode options
   */
  options?: Options;
  style?: CSSProperties;
  className?: string;
}

export function ReactBarcode({
  style,
  className,
  value,
  options,
  renderer = Renderer.SVG,
}: Readonly<ReactBarcodeProps>): React.JSX.Element {
  const containerRef = useRef<never>(null);

  const renderBarcode = useCallback(JsBarcode, [value, containerRef.current, options]);

  useEffect(() => {
    renderBarcode(containerRef.current, value, options);
  }, [renderBarcode, value, options, renderer]);

  switch (renderer) {
    case 'canvas':
      return <canvas ref={containerRef} style={style} className={className} />;
    case 'image':
      return <img ref={containerRef} alt="barcode" style={style} className={className} />;
    default:
      return <svg ref={containerRef} style={style} className={className} />;
  }
}
