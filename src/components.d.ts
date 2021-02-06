/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface AppHome {
        "ngo": any;
    }
    interface AppProfile {
        "name": string;
    }
    interface AppRoot {
    }
    interface NgoAbout {
        "ngo": any;
    }
    interface NgoCauses {
    }
    interface NgoContact {
        "ngo": any;
    }
    interface NgoFooter {
        "ngo": any;
    }
    interface NgoTeam {
    }
}
declare global {
    interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {
    }
    var HTMLAppHomeElement: {
        prototype: HTMLAppHomeElement;
        new (): HTMLAppHomeElement;
    };
    interface HTMLAppProfileElement extends Components.AppProfile, HTMLStencilElement {
    }
    var HTMLAppProfileElement: {
        prototype: HTMLAppProfileElement;
        new (): HTMLAppProfileElement;
    };
    interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLNgoAboutElement extends Components.NgoAbout, HTMLStencilElement {
    }
    var HTMLNgoAboutElement: {
        prototype: HTMLNgoAboutElement;
        new (): HTMLNgoAboutElement;
    };
    interface HTMLNgoCausesElement extends Components.NgoCauses, HTMLStencilElement {
    }
    var HTMLNgoCausesElement: {
        prototype: HTMLNgoCausesElement;
        new (): HTMLNgoCausesElement;
    };
    interface HTMLNgoContactElement extends Components.NgoContact, HTMLStencilElement {
    }
    var HTMLNgoContactElement: {
        prototype: HTMLNgoContactElement;
        new (): HTMLNgoContactElement;
    };
    interface HTMLNgoFooterElement extends Components.NgoFooter, HTMLStencilElement {
    }
    var HTMLNgoFooterElement: {
        prototype: HTMLNgoFooterElement;
        new (): HTMLNgoFooterElement;
    };
    interface HTMLNgoTeamElement extends Components.NgoTeam, HTMLStencilElement {
    }
    var HTMLNgoTeamElement: {
        prototype: HTMLNgoTeamElement;
        new (): HTMLNgoTeamElement;
    };
    interface HTMLElementTagNameMap {
        "app-home": HTMLAppHomeElement;
        "app-profile": HTMLAppProfileElement;
        "app-root": HTMLAppRootElement;
        "ngo-about": HTMLNgoAboutElement;
        "ngo-causes": HTMLNgoCausesElement;
        "ngo-contact": HTMLNgoContactElement;
        "ngo-footer": HTMLNgoFooterElement;
        "ngo-team": HTMLNgoTeamElement;
    }
}
declare namespace LocalJSX {
    interface AppHome {
        "ngo"?: any;
    }
    interface AppProfile {
        "name"?: string;
    }
    interface AppRoot {
    }
    interface NgoAbout {
        "ngo"?: any;
    }
    interface NgoCauses {
    }
    interface NgoContact {
        "ngo"?: any;
    }
    interface NgoFooter {
        "ngo"?: any;
    }
    interface NgoTeam {
    }
    interface IntrinsicElements {
        "app-home": AppHome;
        "app-profile": AppProfile;
        "app-root": AppRoot;
        "ngo-about": NgoAbout;
        "ngo-causes": NgoCauses;
        "ngo-contact": NgoContact;
        "ngo-footer": NgoFooter;
        "ngo-team": NgoTeam;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-home": LocalJSX.AppHome & JSXBase.HTMLAttributes<HTMLAppHomeElement>;
            "app-profile": LocalJSX.AppProfile & JSXBase.HTMLAttributes<HTMLAppProfileElement>;
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
            "ngo-about": LocalJSX.NgoAbout & JSXBase.HTMLAttributes<HTMLNgoAboutElement>;
            "ngo-causes": LocalJSX.NgoCauses & JSXBase.HTMLAttributes<HTMLNgoCausesElement>;
            "ngo-contact": LocalJSX.NgoContact & JSXBase.HTMLAttributes<HTMLNgoContactElement>;
            "ngo-footer": LocalJSX.NgoFooter & JSXBase.HTMLAttributes<HTMLNgoFooterElement>;
            "ngo-team": LocalJSX.NgoTeam & JSXBase.HTMLAttributes<HTMLNgoTeamElement>;
        }
    }
}
