export class DeviceManager {
    static isMobile = () => {
        return this.isScreenWidthSmallerThanAMobileSCreen() && this.isBrowserUserAgentMobile()
    }

    static isScreenWidthSmallerThanAMobileSCreen = () => {
        let isMob = false;

        if(window.matchMedia("(max-width: 1023px)").matches){
            isMob = true;
        }

        return isMob;
    }

    static isBrowserUserAgentMobile = () => {
        let a = false;
        if (navigator.userAgent.match(/Android/i)
        || navigator.userAgent.match(/webOS/i)
        || navigator.userAgent.match(/iPhone/i)
        || navigator.userAgent.match(/iPad/i)
        || navigator.userAgent.match(/iPod/i)
        || navigator.userAgent.match(/BlackBerry/i)
        || navigator.userAgent.match(/Windows Phone/i)) {
           a = true ;
        } else {
           a = false ;
        }

        return a
    }
}