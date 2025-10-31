// filepath: /Users/valerii-h/Desktop/project_living_hearts/src/global.d.ts
declare module "*.module.scss" {
    const classes: { [key: string]: string };
    export default classes;
  }

  declare module '*.png' {
    const value: any;
    export default value;
  }

  declare module 'react-img-carousel' {
    const Carousel: React.ComponentType<any>;
    export default Carousel;
  }



