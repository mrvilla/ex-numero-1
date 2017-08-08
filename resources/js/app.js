// Global dependencies 
import { default as $ } from 'veams-query';
import Veams from 'veams';
import VeamsLogger from 'veams/src/js/plugins/logger';
import VeamsDOM from 'veams/src/js/plugins/dom';
import VeamsVent from 'veams/src/js/plugins/vent';
import VeamsModules from 'veams/src/js/plugins/modules';
import VeamsMediaQueryHandler from 'veams/src/js/plugins/media-query-handler';
import EVENTS from './events';


let App = {};
App.$ = $;

// Versioning
App.version = "0.0.1";

// Veams
Veams.onInitialize(() => {
	/**
	* Veams Plugins
	*/

	// Dom Plugin
	Veams.use(VeamsDOM, {
		DOM: $
	});

	// Vent Plugin
	Veams.use(VeamsVent, {
		furtherEvents: EVENTS
	});

	// Logger Plugin for devmode and logger
	Veams.use(VeamsLogger);

	// Module System Plugin
	Veams.use(VeamsModules, {
		useMutationObserver: true,
		internalCacheOnly: false
	});

	// Media Query Handler Plugin
	Veams.use(VeamsMediaQueryHandler);

    const mobileButtonSel = "[data-js-item='mobile-button']"; // this is a string to select
    const $mobileButton = $(mobileButtonSel); // this is a Jquery element, hence the $ at the beginning
    const openClass = "is-open";

    $mobileButton.on("click", (e, target) => {
    	const $target = $(target); // cache element that youll need later
		const headerMenuList = "[data-js-item='header-nav-list']";
        const $menuList = $(headerMenuList);

		if ($target.hasClass(openClass)) {
            $target.removeClass(openClass);
            $menuList.removeClass(openClass);
		} else {
            $target.addClass(openClass);
            $menuList.addClass(openClass);
		}
    });

});

export {App, Veams};