import { createRouter, createWebHistory } from 'vue-router';

import wwPage from './views/wwPage.vue';

import { initializeData, initializePlugins, onPageUnload } from '@/_common/helpers/data';

let router;
const routes = [];

function scrollBehavior(to) {
    if (to.hash) {
        return {
            el: to.hash,
            behavior: 'smooth',
        };
    } else {
        return { top: 0 };
    }
}

 
/* wwFront:start */
import pluginsSettings from '../../plugins-settings.json';

// eslint-disable-next-line no-undef
window.wwg_designInfo = {"id":"a17a79ed-aa48-4948-89ed-0e7c1dd7313c","homePageId":"56bf533b-8c47-4a0c-996c-f553301406c0","authPluginId":null,"baseTag":null,"defaultTheme":"light","langs":[{"lang":"en","default":true}],"background":{},"workflows":[],"pages":[{"id":"54eb1a80-211f-41c7-9b56-ca6adb1e07ea","linkId":"54eb1a80-211f-41c7-9b56-ca6adb1e07ea","name":"Badge","folder":null,"paths":{"en":"badge","default":"badge"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"6b4f2a13-84fb-4d6e-b4ae-3c5c181d28cd","sectionTitle":"Sidemenu","linkId":"fcf8e07f-53f9-43f4-96c2-efab72adadd7"},{"uid":"f8cb822b-1a9b-4c89-bb63-f5c37d762f3e","sectionTitle":"Content","linkId":"de326c83-a391-418c-9a15-5d58d8ad9301"}],"pageUserGroups":[],"title":{"en":"Blank | Start from scratch","fr":"Vide | Commencer à partir de zéro"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"3ca1a6c6-a411-47c5-9128-ecac04a523c1","linkId":"3ca1a6c6-a411-47c5-9128-ecac04a523c1","name":"Chat","folder":null,"paths":{"en":"chat","default":"chat"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"6b4f2a13-84fb-4d6e-b4ae-3c5c181d28cd","sectionTitle":"Sidemenu","linkId":"fcf8e07f-53f9-43f4-96c2-efab72adadd7"},{"uid":"fcedb7d7-c5c3-4cad-9240-2aafffd37ba3","sectionTitle":"Content","linkId":"f47ad218-5a26-4fcc-ae87-15ea8404d69b"}],"pageUserGroups":[],"title":{"en":"Blank | Start from scratch","fr":"Vide | Commencer à partir de zéro"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"a75e4112-cac2-4742-924b-8ad24a15abcc","linkId":"a75e4112-cac2-4742-924b-8ad24a15abcc","name":"Steps","folder":null,"paths":{"en":"steps","default":"steps"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"6b4f2a13-84fb-4d6e-b4ae-3c5c181d28cd","sectionTitle":"Sidemenu","linkId":"fcf8e07f-53f9-43f4-96c2-efab72adadd7"},{"uid":"82656706-fd62-472c-9008-68ac0da8a813","sectionTitle":"Content","linkId":"fa48bb4a-dfe7-43b1-b276-24d2707eda44"}],"pageUserGroups":[],"title":{"en":"Blank | Start from scratch","fr":"Vide | Commencer à partir de zéro"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"aa56c022-2727-44ce-987c-e038e43675ef","linkId":"aa56c022-2727-44ce-987c-e038e43675ef","name":"Typography","folder":"Styles/","paths":{"en":"typography","default":"typography"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"6b4f2a13-84fb-4d6e-b4ae-3c5c181d28cd","sectionTitle":"Sidemenu","linkId":"fcf8e07f-53f9-43f4-96c2-efab72adadd7"},{"uid":"8a84aca4-32e9-42a8-9766-d8e7bd744d2e","sectionTitle":"Content","linkId":"55f7110c-5ade-411e-bab8-e95bce4eea71"}],"pageUserGroups":[],"title":{"en":"Blank | Start from scratch","fr":"Vide | Commencer à partir de zéro"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"cde26148-94a9-4843-b22e-91a5fdce1b81","linkId":"cde26148-94a9-4843-b22e-91a5fdce1b81","name":"Accordion","folder":null,"paths":{"en":"accordion","default":"accordion"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"6b4f2a13-84fb-4d6e-b4ae-3c5c181d28cd","sectionTitle":"Sidemenu","linkId":"fcf8e07f-53f9-43f4-96c2-efab72adadd7"},{"uid":"c4480efb-933e-49ca-a29b-0b4dc1728f55","sectionTitle":"Content","linkId":"e44b7eab-9290-41cb-8fd8-4b660a4bb547"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"df434b68-4976-4e00-ad84-10093802dd33","linkId":"df434b68-4976-4e00-ad84-10093802dd33","name":"Colors","folder":"Styles/","paths":{"en":"colors","default":"colors"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"6b4f2a13-84fb-4d6e-b4ae-3c5c181d28cd","sectionTitle":"Sidemenu","linkId":"fcf8e07f-53f9-43f4-96c2-efab72adadd7"},{"uid":"3c6cba4b-147e-40d6-91f7-6fc56e44b9ab","sectionTitle":"Content","linkId":"73674561-b651-4c52-a936-237b8f547621"}],"pageUserGroups":[],"title":{"en":"Blank | Start from scratch","fr":"Vide | Commencer à partir de zéro"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"914ae036-2114-4eb0-87de-5fed6580ea3a","linkId":"914ae036-2114-4eb0-87de-5fed6580ea3a","name":"Avatar","folder":null,"paths":{"en":"avatar","default":"avatar"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"6b4f2a13-84fb-4d6e-b4ae-3c5c181d28cd","sectionTitle":"Sidemenu","linkId":"fcf8e07f-53f9-43f4-96c2-efab72adadd7"},{"uid":"3026d8a6-4a50-418e-8bee-3dce4bc9a69b","sectionTitle":"Content","linkId":"5bf8a1b7-95c2-4008-b612-2752fdee5b22"}],"pageUserGroups":[],"title":{"en":"Blank | Start from scratch","fr":"Vide | Commencer à partir de zéro"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"3d1ba624-ede6-4cf4-a226-45117bef0e68","linkId":"3d1ba624-ede6-4cf4-a226-45117bef0e68","name":"Tabs","folder":null,"paths":{"en":"tabs","default":"tabs"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"6b4f2a13-84fb-4d6e-b4ae-3c5c181d28cd","sectionTitle":"Sidemenu","linkId":"fcf8e07f-53f9-43f4-96c2-efab72adadd7"},{"uid":"51c95776-e392-4624-87f9-514156d841c5","sectionTitle":"Content","linkId":"a0f85dea-32db-44ee-8825-430ed93e7ea5"}],"pageUserGroups":[],"title":{"en":"Blank | Start from scratch","fr":"Vide | Commencer à partir de zéro"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"d248b05b-9f3c-4851-958a-af76ec608e60","linkId":"d248b05b-9f3c-4851-958a-af76ec608e60","name":"Card","folder":null,"paths":{"en":"card","default":"card"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"6b4f2a13-84fb-4d6e-b4ae-3c5c181d28cd","sectionTitle":"Sidemenu","linkId":"fcf8e07f-53f9-43f4-96c2-efab72adadd7"},{"uid":"1aab186f-b97a-41e9-9f04-f5afa112ba98","sectionTitle":"Content","linkId":"03af46e0-7cf0-4f17-8bf5-6388ce158f10"}],"pageUserGroups":[],"title":{"en":"Blank | Start from scratch","fr":"Vide | Commencer à partir de zéro"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"11630818-b5ba-42c5-abb6-7bbbe2783e75","linkId":"11630818-b5ba-42c5-abb6-7bbbe2783e75","name":"Counter","folder":null,"paths":{"en":"up-down-voting","default":"up-down-voting"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"6b4f2a13-84fb-4d6e-b4ae-3c5c181d28cd","sectionTitle":"Sidemenu","linkId":"fcf8e07f-53f9-43f4-96c2-efab72adadd7"},{"uid":"ac9d5e1a-06bc-4989-870f-a0607e2682e8","sectionTitle":"Content","linkId":"fd53450e-219b-474b-87a0-f5442f6b9898"}],"pageUserGroups":[],"title":{"en":"Blank | Start from scratch","fr":"Vide | Commencer à partir de zéro"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"56bf533b-8c47-4a0c-996c-f553301406c0","linkId":"56bf533b-8c47-4a0c-996c-f553301406c0","name":"Introduction","folder":null,"paths":{"en":"home","default":"home"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"6b4f2a13-84fb-4d6e-b4ae-3c5c181d28cd","sectionTitle":"Sidemenu","linkId":"fcf8e07f-53f9-43f4-96c2-efab72adadd7"},{"uid":"2730f370-cb9b-4c52-bf9c-c52a4fa4f18f","sectionTitle":"Content","linkId":"99d8f30b-98b4-4294-8eb4-4a8ba774b46d"}],"pageUserGroups":[],"title":{"en":"Blank | Start from scratch","fr":"Vide | Commencer à partir de zéro"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"b29529dc-8646-42b0-ac66-4c5b25be26e4","linkId":"b29529dc-8646-42b0-ac66-4c5b25be26e4","name":"Pop-up","folder":null,"paths":{"en":"combobox","default":"combobox"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"6b4f2a13-84fb-4d6e-b4ae-3c5c181d28cd","sectionTitle":"Sidemenu","linkId":"fcf8e07f-53f9-43f4-96c2-efab72adadd7"},{"uid":"f6647c78-d692-4a5c-8a92-d68a122169f9","sectionTitle":"Content","linkId":"3afde260-aa4b-4dc8-90a3-5089e3b13901"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"438ec9e6-e576-4842-b347-d6582890663e","linkId":"438ec9e6-e576-4842-b347-d6582890663e","name":"Form Input","folder":null,"paths":{"en":"form-input","default":"form-input"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"6b4f2a13-84fb-4d6e-b4ae-3c5c181d28cd","sectionTitle":"Sidemenu","linkId":"fcf8e07f-53f9-43f4-96c2-efab72adadd7"},{"uid":"0392e5a6-c98b-49d6-90d6-76ae86aa6ca5","sectionTitle":"Content","linkId":"5b395aba-9e78-44ba-9edc-edb8cc79fba1"}],"pageUserGroups":[],"title":{"en":"Blank | Start from scratch","fr":"Vide | Commencer à partir de zéro"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"597edca2-7385-41ff-851f-bad8692d9eda","linkId":"597edca2-7385-41ff-851f-bad8692d9eda","name":"Radio Group","folder":null,"paths":{"en":"radio-group","default":"radio-group"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"6b4f2a13-84fb-4d6e-b4ae-3c5c181d28cd","sectionTitle":"Sidemenu","linkId":"fcf8e07f-53f9-43f4-96c2-efab72adadd7"},{"uid":"f7b09462-11cf-41b6-9a08-1306225898ff","sectionTitle":"Content","linkId":"9957bedd-f145-43de-b033-84270eaadce2"}],"pageUserGroups":[],"title":{"en":"Blank | Start from scratch","fr":"Vide | Commencer à partir de zéro"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"d11e13ff-25cc-4500-8be2-1ab9dd44c502","linkId":"d11e13ff-25cc-4500-8be2-1ab9dd44c502","name":"Dropdown Menu","folder":null,"paths":{"en":"dropdown-menu","default":"dropdown-menu"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"6b4f2a13-84fb-4d6e-b4ae-3c5c181d28cd","sectionTitle":"Sidemenu","linkId":"fcf8e07f-53f9-43f4-96c2-efab72adadd7"},{"uid":"31980ac1-4590-42ce-9cb9-3b7c58cd0cfd","sectionTitle":"Content","linkId":"e6d6df3c-8958-493d-9c88-08451f019672"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"08643fd9-e138-4976-9c81-09ff27660197","linkId":"08643fd9-e138-4976-9c81-09ff27660197","name":"Button","folder":null,"paths":{"en":"button","default":"button"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"6b4f2a13-84fb-4d6e-b4ae-3c5c181d28cd","sectionTitle":"Sidemenu","linkId":"fcf8e07f-53f9-43f4-96c2-efab72adadd7"},{"uid":"1056a74c-e7be-4a83-9c93-40d2c578db14","sectionTitle":"Content","linkId":"6e654555-f221-49bc-a42e-9bd9adc90731"}],"pageUserGroups":[],"title":{"en":"Blank | Start from scratch","fr":"Vide | Commencer à partir de zéro"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"60d5e8a3-0bbc-4e0f-9b8f-a81f31b823c0","linkId":"60d5e8a3-0bbc-4e0f-9b8f-a81f31b823c0","name":"Form Builder","folder":null,"paths":{"en":"form-builder","default":"form-builder"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"6b4f2a13-84fb-4d6e-b4ae-3c5c181d28cd","sectionTitle":"Sidemenu","linkId":"fcf8e07f-53f9-43f4-96c2-efab72adadd7"},{"uid":"de7b09bc-60f5-4fdc-8a7f-9b9415eec9dd","sectionTitle":"Content","linkId":"da6fb060-f853-4b09-aca1-0ad6c0304c2e"}],"pageUserGroups":[],"title":{"en":"Blank | Start from scratch","fr":"Vide | Commencer à partir de zéro"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""}],"plugins":[{"id":"2bd1c688-31c5-443e-ae25-59aa5b6431fb","name":"REST API","namespace":"restApi"}]};
// eslint-disable-next-line no-undef
window.wwg_cacheVersion = 1;
// eslint-disable-next-line no-undef
window.wwg_pluginsSettings = pluginsSettings;
// eslint-disable-next-line no-undef
window.wwg_disableManifest = false;

const defaultLang = window.wwg_designInfo.langs.find(({ default: isDefault }) => isDefault) || {};

const registerRoute = (page, lang, forcedPath) => {
    const langSlug = !lang.default || lang.isDefaultPath ? `/${lang.lang}` : '';
    let path =
        forcedPath ||
        (page.id === window.wwg_designInfo.homePageId ? '/' : `/${page.paths[lang.lang] || page.paths.default}`);

    //Replace params
    path = path.replace(/{{([\w]+)\|([^/]+)?}}/g, ':$1');

    routes.push({
        path: langSlug + path,
        component: wwPage,
        name: `page-${page.id}-${lang.lang}`,
        meta: {
            pageId: page.id,
            lang,
            isPrivate: !!page.pageUserGroups?.length,
        },
        async beforeEnter(to, from) {
            if (to.name === from.name) return;
            //Set page lang
            wwLib.wwLang.defaultLang = defaultLang.lang;
            wwLib.$store.dispatch('front/setLang', lang.lang);

            //Init plugins
            await initializePlugins();

            //Check if private page
            if (page.pageUserGroups?.length) {
                // cancel navigation if no plugin
                if (!wwLib.wwAuth.plugin) {
                    return false;
                }

                await wwLib.wwAuth.init();

                // Redirect to not sign in page if not logged
                if (!wwLib.wwAuth.getIsAuthenticated()) {
                    window.location.href = `${wwLib.wwPageHelper.getPagePath(
                        wwLib.wwAuth.getUnauthenticatedPageId()
                    )}?_source=${to.path}`;

                    return null;
                }

                //Check roles are required
                if (
                    page.pageUserGroups.length > 1 &&
                    !wwLib.wwAuth.matchUserGroups(page.pageUserGroups.map(({ userGroup }) => userGroup))
                ) {
                    window.location.href = `${wwLib.wwPageHelper.getPagePath(
                        wwLib.wwAuth.getUnauthorizedPageId()
                    )}?_source=${to.path}`;

                    return null;
                }
            }

            try {
                await import(`@/pages/${page.id.split('_')[0]}.js`);
                await wwLib.wwWebsiteData.fetchPage(page.id);

                //Scroll to section or on top after page change
                if (to.hash) {
                    const targetElement = document.getElementById(to.hash.replace('#', ''));
                    if (targetElement) targetElement.scrollIntoView();
                } else {
                    document.body.scrollTop = document.documentElement.scrollTop = 0;
                }

                return;
            } catch (err) {
                wwLib.$store.dispatch('front/showPageLoadProgress', false);

                if (err.redirectUrl) {
                    return { path: err.redirectUrl || '404' };
                } else {
                    //Any other error: go to target page using window.location
                    window.location = to.fullPath;
                }
            }
        },
    });
};

for (const page of window.wwg_designInfo.pages) {
    for (const lang of window.wwg_designInfo.langs) {
        if (!page.langs.includes(lang.lang)) continue;
        registerRoute(page, lang);
    }
}

const page404 = window.wwg_designInfo.pages.find(page => page.paths.default === '404');
if (page404) {
    for (const lang of window.wwg_designInfo.langs) {
        // Create routes /:lang/:pathMatch(.*)* etc for all langs of the 404 page
        if (!page404.langs.includes(lang.lang)) continue;
        registerRoute(
            page404,
            {
                default: false,
                lang: lang.lang,
            },
            '/:pathMatch(.*)*'
        );
    }
    // Create route /:pathMatch(.*)* using default project lang
    registerRoute(page404, { default: true, isDefaultPath: false, lang: defaultLang.lang }, '/:pathMatch(.*)*');
} else {
    routes.push({
        path: '/:pathMatch(.*)*',
        async beforeEnter() {
            window.location.href = '/404';
        },
    });
}

let routerOptions = {};

const isProd =
    !window.location.host.includes(
        // TODO: add staging2 ?
        '-staging.' + (process.env.WW_ENV === 'staging' ? import.meta.env.VITE_APP_PREVIEW_URL : '')
    ) && !window.location.host.includes(import.meta.env.VITE_APP_PREVIEW_URL);

if (isProd && window.wwg_designInfo.baseTag?.href) {
    let baseTag = window.wwg_designInfo.baseTag.href;
    if (!baseTag.startsWith('/')) {
        baseTag = '/' + baseTag;
    }
    if (!baseTag.endsWith('/')) {
        baseTag += '/';
    }

    routerOptions = {
        base: baseTag,
        history: createWebHistory(baseTag),
        routes,
    };
} else {
    routerOptions = {
        history: createWebHistory(),
        routes,
    };
}

router = createRouter({
    ...routerOptions,
    scrollBehavior,
});

//Trigger on page unload
let isFirstNavigation = true;
router.beforeEach(async (to, from) => {
    if (to.name === from.name) return;
    if (!isFirstNavigation) await onPageUnload();
    isFirstNavigation = false;
    wwLib.globalVariables._navigationId++;
    return;
});

//Init page
router.afterEach((to, from, failure) => {
    wwLib.$store.dispatch('front/showPageLoadProgress', false);
    let fromPath = from.path;
    let toPath = to.path;
    if (!fromPath.endsWith('/')) fromPath = fromPath + '/';
    if (!toPath.endsWith('/')) toPath = toPath + '/';
    if (failure || (from.name && toPath === fromPath)) return;
    initializeData(to);
});
/* wwFront:end */

export default router;
