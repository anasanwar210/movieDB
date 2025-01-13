declare module 'flickity' {
  interface FlickityOptions {
    accessibility?: boolean;
    autoPlay?: boolean | number;
    cellAlign?: string;
    cellSelector?: string;
    contain?: boolean;
    draggable?: boolean | string;
    freeScroll?: boolean;
    friction?: number;
    groupCells?: boolean | number | string;
    imagesLoaded?: boolean;
    initialIndex?: number;
    lazyLoad?: boolean | number;
    percentPosition?: boolean;
    prevNextButtons?: boolean;
    pageDots?: boolean;
    resize?: boolean;
    rightToLeft?: boolean;
    setGallerySize?: boolean;
    watchCSS?: boolean;
    wrapAround?: boolean;
  }

  class Flickity {
    constructor(selector: string | Element, options?: FlickityOptions);
    select(index: number, isWrapped?: boolean, isInstant?: boolean): void;
    previous(isWrapped?: boolean, isInstant?: boolean): void;
    next(isWrapped?: boolean, isInstant?: boolean): void;
    resize(): void;
    destroy(): void;
  }

  export = Flickity;
}
