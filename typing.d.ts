declare module "*.svg" {
    import * as React from "react";

    export const ReactComponent: React.FunctionComponent<
        React.SVGProps<SVGSVGElement>
    >;

    const custom: string;
    export default custom;
}

declare module "*.png" {
    const custom: string;
    export default custom;
}
