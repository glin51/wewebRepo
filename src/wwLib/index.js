import emitter from 'tiny-emitter/instance';
import services from './services/index.js';
import { useIconsStore } from '@/pinia/icons';

 /* wwFront:start */
// eslint-disable-next-line no-undef
import plugin_2bd1c688_31c5_443e_ae25_59aa5b6431fb from '@/components/plugins/plugin-2bd1c688-31c5-443e-ae25-59aa5b6431fb/src/wwPlugin.js';
/* wwFront:end */

import { computed, reactive } from 'vue';

export default {
    ...services,
     $on(event, fn) {
        emitter.on(event, fn);
    },
    $once(event, fn) {
        emitter.once(event, fn);
    },
    $emit(event, ...args) {
        if (!event) {
            return;
        }
        emitter.emit(event, ...args);
    },
    $off(event, fn) {
        emitter.off(event, fn);
    },
     front: {},
    $focus: null,
    env: process.env.NODE_ENV,
    async initFront({ router, store }) {
 
        this.front.router = router;
        /* wwFront:start */
        this.$store = store;
        /* wwFront:end */

        //Init services
        this.wwLog.init();

 
        wwLib.logStore.verbose('Starting the application...');
        await this.wwWebsiteData.init();
        this.wwLang.init(router);

        /* wwFront:start */
        // eslint-disable-next-line no-undef
        wwLib.wwPluginHelper.registerPlugin('plugin-2bd1c688-31c5-443e-ae25-59aa5b6431fb', plugin_2bd1c688_31c5_443e_ae25_59aa5b6431fb);
        /* wwFront:end */

 
        services.scrollStore.start();
        services.keyboardEventStore.start();
    },
     // TODO: Verify with Alexis, still uses wwImageMultiLang
    getResponsiveStyleProp({ store, style, uid, states = [], prop }) {
        store = store || wwLib.getFrontWindow().wwLib.$store;
        if (!style && uid) {
            const wwObject = this.$store.getters['websiteData/getWwObjects'][uid];
            if (!wwObject) return '';
            style = (wwObject._state || {}).style || {};
        }

        const screenSizes = store.getters['front/getScreenSizes'];
        const screenSize = store.getters['front/getScreenSize'];

        let value = '';

        for (const media in screenSizes) {
            if (style[media] && typeof style[media][prop] !== 'undefined') {
                value = style[media][prop];
            }
            if (media === screenSize) {
                break;
            }
        }
        for (const state of states) {
            for (const media in screenSizes) {
                if (style[`${state}_${media}`] && style[`${state}_${media}`][prop]) {
                    value = style[`${state}_${media}`][prop];
                }
                if (media === screenSize) {
                    break;
                }
            }
        }

        return value;
    },
    globalContext: reactive({
        page: computed(() => {
            const page = wwLib.$store.getters['websiteData/getPage'];
            if (!page) return {};
            else if (!page.cmsDataSetPath) return { ...pageSanitizer(page) };
            return { ...pageSanitizer(page), data: wwLib.$store.getters['data/getPageCollectionData'] };
        }),
        pageParameters: computed(() => {
            const pageParameters = Object.values(wwLib.$store.getters['data/getPageParameterVariables']);
            const pageParametersValueMap = {};
            for (const pageParameter of pageParameters) pageParametersValueMap[pageParameter.id] = pageParameter.value;
            return pageParametersValueMap;
        }),
        pages: computed(() => {
            const pages = wwLib.$store.getters['websiteData/getPages'];
            const pagesValueMap = {};
            for (const page of pages) pagesValueMap[page.id] = pageSanitizer(page);
            return pagesValueMap;
        }),
        colors: computed(() => {
            const theme = wwLib.$store.getters['front/getTheme'];
             /* wwFront:start */
            // eslint-disable-next-line no-unreachable, no-undef
            return theme === 'dark' ? {"7ed8db2d-84fb-479a-a1e6-905a92a29dea":"#000000D9","60c1b2e1-0ba2-42fb-a2af-6de4ad58c92a":"#00000040","65617664-ad00-4dd2-a288-4c1d1a76295b":"#00000073","b7a5f818-9753-4de7-8362-498f809e2dee":"#0000000F","d13fcd1d-de66-4332-8149-dda5e959a967":"#000000D9","b6750975-257f-441d-9744-7fe92ebbb137":"#00000040","b73116db-c7b0-4c72-afc5-c24e4b70ae51":"#FFFFFF","24ff1e29-eb7d-4e73-8d49-50a5ab5ddc96":"#e1e3e5","943de7a7-6a93-4e61-a980-4bc56bf882c8":"#c2c7ce","f48fccf5-9189-4c00-bd2e-8ae5e2b6d155":"#a3acb9","9629df11-5b94-4ec2-b6ec-77f9667be018":"#8692a1","4225956d-1417-4a7f-9aa9-ebc85b0ec678":"#6c7888","aecfa5ac-51f7-4fd3-9be3-d8730011df08":"#545f6c","25b5d066-f2d9-4a2e-bc36-dde3e49ec2da":"#3f4750","0291b7bb-29ee-4b02-b466-36424f78c8e6":"#2a2f34","d41b5781-c6dc-4929-88d3-e190f8853cc6":"#151618","8c02bbe6-03da-4309-9020-99efceb44820":"#e2e2e2","a9f5da5f-696f-4b59-bfb0-ea20efd7bf12":"#c7c7c7","89988c2b-1529-4b31-b67c-c3c9c16ee268":"#ababab","b2d4cbdd-119c-481a-b0eb-ffb3172596ae":"#919191","6d84bc9c-f4c5-4f83-bac3-82549443a742":"#777777","0f74cb5b-4960-46e9-a523-8174cf91b718":"#5e5e5e","3cbdf4d1-daf2-4d77-9c15-63ff6963149f":"#464646","d4fac511-3c05-4b7f-9055-dccc071d5054":"#2e2e2e","877f9099-61a6-4936-ad44-a20c841f9d24":"#161616","18cac3da-9c63-45c2-9488-940b5000c52a":"#f8f8f7","1fc6cb04-5413-4f84-b8e0-2640d5d39551":"#e5e2de","214ee737-ce93-45cb-8962-bed9dbbb3dfa":"#cdc5bc","dce8d7f8-85b3-4981-bc90-7d580f5082c0":"#b5aa9c","7f8aea2a-dede-4ce0-a806-76b68396f66f":"#9b8f7f","c3a32c71-2ad3-4546-ba2b-53b9510c88d8":"#817566","0bf33b12-e3f1-4926-9d76-eb18d05a1125":"#675c50","d50883c6-fc79-4de4-8e17-e0ab0b82f45c":"#4c443b","cad201f5-6076-4c11-aa89-f225d5e54c13":"#322d27","73b6b523-1f67-4c57-9319-d297f4c5b18d":"#181613","9edd54e7-9294-410e-9f9f-9158d9fc4871":"#d1e4ff","4eddf74c-4525-4672-9599-447dea68d5a9":"#a2caff","5b369d7c-276d-444b-8fe8-fa414a4a466f":"#6faeff","5521446e-531f-457c-b8b4-c4ab53b82fed":"#3090ff","45a82b7b-80a0-415d-bf0a-851c9cf5b331":"#0075df","b5c478b4-3550-4889-a9e3-7ccb51f562a7":"#005db1","b7a2bbc6-45df-4c76-815a-2f5e275424b0":"#004585","607c6e1f-fc9e-40d9-a76d-dd7430d1edd4":"#002e5b","60cab206-7c64-4fdb-b2f0-74326d94fd59":"#001631","1246850d-24a3-4642-b376-0f304e9f3c1c":"#f5ddcf","6c7a5982-3407-4681-aa09-e41b6fe6753b":"#f6b791","617a4d51-cf70-4049-b487-eb28611ada16":"#f68c47","cd324fcd-d89e-4f47-a97e-514038e62bf8":"#de6c0b","21b87131-5dcc-4bf4-8bac-2125322c0f6a":"#b95700","593eaa75-c06f-4369-bddd-19edffb093dc":"#944403","03e08010-5227-458f-9543-0d1508e27991":"#6f3207","29da594f-9a0f-4b6c-8415-63da7ed70912":"#49220a","511c2075-b30c-48e4-8aa4-b5ec17302b74":"#231107","4bbe1242-344f-461a-8528-b7ecf9cee0ea":"#faf8ed","ae607c40-1f85-4f05-a9f1-663be4a66ba7":"#f1e3a9","507d52d0-dcc4-4220-a540-877c74f1b831":"#c8aa19","b1e65043-77fa-4495-ae6c-f1887004c0d5":"#8d7500","ce12001e-0ad9-42c1-92ae-564849f36b3b":"#544406","507f6ca2-a9cb-498b-a822-6ec9aa2e7703":"#382d07","8d6a8558-59de-4f67-a161-e2b0deb494ce":"#f4faf3","99060076-3f71-42a7-a4b9-a0a2a02967f5":"#c6f0c5","ad7f2faf-cbb8-4344-86f2-55cf10d5a770":"#53c954","ed05e3cf-2ced-4b90-96c4-4c757613f044":"#2aad2c","19980f5c-3d3d-4967-9bbe-42c2e89ae1a6":"#1e7118","6329c915-08ec-4a2c-a20c-29bfcefb0c8c":"#1a3616","f81024e7-3b06-4266-b636-e3cb59bfeedb":"#faf7f7","cc8c4f6e-2a06-4ff3-be91-dcaaabe9befe":"#f6efee","ad63f7b8-a56d-40ee-abe8-125d3e6b5f0d":"#f3b5b0","223bf0fe-a64c-4a93-90dd-f91460b8c4af":"#fa444d","587ec36f-1caa-443a-8dba-21577bcce4d5":"#af1129","9c95fce6-eb6e-435b-9225-9e4e7b3577e6":"#4f1a1c","b6550115-5870-446f-ac34-237a901a346d":"#e3c645","5635a6f5-9bff-4a0e-97dd-63d5ea901ea1":"#ab8f05","b8c99f01-a833-46ed-b09e-56213dcb1652":"#705c03","ff49677f-dac0-47cf-b70e-299422b81b5a":"#1c1604","20102ed1-4e00-498b-96ab-cf4d53d9e83d":"#e6f6e6","5befcbbd-2c43-451e-8260-38bc4c780c1a":"#7ee27f","8606c915-e24d-4a6c-a74c-11db27b0c913":"#009100","b32085a6-a71d-4b87-9561-af452a0b9218":"#23521d","4f603594-1194-41f7-b146-4992ac2b068d":"#0d1a0a","38e1694c-4717-4317-8fb4-9276aa610c1f":"#f2dddb","5f63a482-278f-4a76-ba24-db5176bca41d":"#f78580","cd050969-56c9-469d-ba62-0518f33b30ef":"#de0030","03bc0637-e4df-4efa-af38-4ab77050a6ab":"#7e1a23","3e9686f0-0fe5-4e47-abbf-9a160f145045":"#241010","da73ab27-06ca-4b30-b726-4a0598e4b733":"#f7f1d9","da1a26e9-fd0b-4e11-9ab2-f830ee3fab3d":"#f2f0ef","d25a9983-ed01-4e57-a0f5-4f214efe5535":"#f8f8f8","19d7e7f1-0c56-4101-b1c7-2c5e6f4d4c2e":"#f0f1f1","1e1ed74e-b270-4eea-ba6c-750903c453d6":"#fbf7f4","512b0d39-8536-481c-9949-9a46469cf090":"#f8efe9","10dea392-b94a-4f98-8efa-13e45473885f":"#f8f8f8","676b4153-804f-4057-94ae-d21dadc935ca":"#f1f1f1","6c0e9cb6-6b14-4629-8c22-306d591ed984":"#f4f8ff","685dcfc5-0930-4917-bd76-da47f7054814":"#e8f2ff"} : {"7ed8db2d-84fb-479a-a1e6-905a92a29dea":"#000000D9","60c1b2e1-0ba2-42fb-a2af-6de4ad58c92a":"#00000040","65617664-ad00-4dd2-a288-4c1d1a76295b":"#00000073","b7a5f818-9753-4de7-8362-498f809e2dee":"#0000000F","d13fcd1d-de66-4332-8149-dda5e959a967":"#000000D9","b6750975-257f-441d-9744-7fe92ebbb137":"#00000040","b73116db-c7b0-4c72-afc5-c24e4b70ae51":"#FFFFFF","24ff1e29-eb7d-4e73-8d49-50a5ab5ddc96":"#e1e3e5","943de7a7-6a93-4e61-a980-4bc56bf882c8":"#c2c7ce","f48fccf5-9189-4c00-bd2e-8ae5e2b6d155":"#a3acb9","9629df11-5b94-4ec2-b6ec-77f9667be018":"#8692a1","4225956d-1417-4a7f-9aa9-ebc85b0ec678":"#6c7888","aecfa5ac-51f7-4fd3-9be3-d8730011df08":"#545f6c","25b5d066-f2d9-4a2e-bc36-dde3e49ec2da":"#3f4750","0291b7bb-29ee-4b02-b466-36424f78c8e6":"#2a2f34","d41b5781-c6dc-4929-88d3-e190f8853cc6":"#151618","8c02bbe6-03da-4309-9020-99efceb44820":"#e2e2e2","a9f5da5f-696f-4b59-bfb0-ea20efd7bf12":"#c7c7c7","89988c2b-1529-4b31-b67c-c3c9c16ee268":"#ababab","b2d4cbdd-119c-481a-b0eb-ffb3172596ae":"#919191","6d84bc9c-f4c5-4f83-bac3-82549443a742":"#777777","0f74cb5b-4960-46e9-a523-8174cf91b718":"#5e5e5e","3cbdf4d1-daf2-4d77-9c15-63ff6963149f":"#464646","d4fac511-3c05-4b7f-9055-dccc071d5054":"#2e2e2e","877f9099-61a6-4936-ad44-a20c841f9d24":"#161616","18cac3da-9c63-45c2-9488-940b5000c52a":"#f8f8f7","1fc6cb04-5413-4f84-b8e0-2640d5d39551":"#e5e2de","214ee737-ce93-45cb-8962-bed9dbbb3dfa":"#cdc5bc","dce8d7f8-85b3-4981-bc90-7d580f5082c0":"#b5aa9c","7f8aea2a-dede-4ce0-a806-76b68396f66f":"#9b8f7f","c3a32c71-2ad3-4546-ba2b-53b9510c88d8":"#817566","0bf33b12-e3f1-4926-9d76-eb18d05a1125":"#675c50","d50883c6-fc79-4de4-8e17-e0ab0b82f45c":"#4c443b","cad201f5-6076-4c11-aa89-f225d5e54c13":"#322d27","73b6b523-1f67-4c57-9319-d297f4c5b18d":"#181613","9edd54e7-9294-410e-9f9f-9158d9fc4871":"#d1e4ff","4eddf74c-4525-4672-9599-447dea68d5a9":"#a2caff","5b369d7c-276d-444b-8fe8-fa414a4a466f":"#6faeff","5521446e-531f-457c-b8b4-c4ab53b82fed":"#3090ff","45a82b7b-80a0-415d-bf0a-851c9cf5b331":"#0075df","b5c478b4-3550-4889-a9e3-7ccb51f562a7":"#005db1","b7a2bbc6-45df-4c76-815a-2f5e275424b0":"#004585","607c6e1f-fc9e-40d9-a76d-dd7430d1edd4":"#002e5b","60cab206-7c64-4fdb-b2f0-74326d94fd59":"#001631","1246850d-24a3-4642-b376-0f304e9f3c1c":"#f5ddcf","6c7a5982-3407-4681-aa09-e41b6fe6753b":"#f6b791","617a4d51-cf70-4049-b487-eb28611ada16":"#f68c47","cd324fcd-d89e-4f47-a97e-514038e62bf8":"#de6c0b","21b87131-5dcc-4bf4-8bac-2125322c0f6a":"#b95700","593eaa75-c06f-4369-bddd-19edffb093dc":"#944403","03e08010-5227-458f-9543-0d1508e27991":"#6f3207","29da594f-9a0f-4b6c-8415-63da7ed70912":"#49220a","511c2075-b30c-48e4-8aa4-b5ec17302b74":"#231107","4bbe1242-344f-461a-8528-b7ecf9cee0ea":"#faf8ed","ae607c40-1f85-4f05-a9f1-663be4a66ba7":"#f1e3a9","507d52d0-dcc4-4220-a540-877c74f1b831":"#c8aa19","b1e65043-77fa-4495-ae6c-f1887004c0d5":"#8d7500","ce12001e-0ad9-42c1-92ae-564849f36b3b":"#544406","507f6ca2-a9cb-498b-a822-6ec9aa2e7703":"#382d07","8d6a8558-59de-4f67-a161-e2b0deb494ce":"#f4faf3","99060076-3f71-42a7-a4b9-a0a2a02967f5":"#c6f0c5","ad7f2faf-cbb8-4344-86f2-55cf10d5a770":"#53c954","ed05e3cf-2ced-4b90-96c4-4c757613f044":"#2aad2c","19980f5c-3d3d-4967-9bbe-42c2e89ae1a6":"#1e7118","6329c915-08ec-4a2c-a20c-29bfcefb0c8c":"#1a3616","f81024e7-3b06-4266-b636-e3cb59bfeedb":"#faf7f7","cc8c4f6e-2a06-4ff3-be91-dcaaabe9befe":"#f6efee","ad63f7b8-a56d-40ee-abe8-125d3e6b5f0d":"#f3b5b0","223bf0fe-a64c-4a93-90dd-f91460b8c4af":"#fa444d","587ec36f-1caa-443a-8dba-21577bcce4d5":"#af1129","9c95fce6-eb6e-435b-9225-9e4e7b3577e6":"#4f1a1c","b6550115-5870-446f-ac34-237a901a346d":"#e3c645","5635a6f5-9bff-4a0e-97dd-63d5ea901ea1":"#ab8f05","b8c99f01-a833-46ed-b09e-56213dcb1652":"#705c03","ff49677f-dac0-47cf-b70e-299422b81b5a":"#1c1604","20102ed1-4e00-498b-96ab-cf4d53d9e83d":"#e6f6e6","5befcbbd-2c43-451e-8260-38bc4c780c1a":"#7ee27f","8606c915-e24d-4a6c-a74c-11db27b0c913":"#009100","b32085a6-a71d-4b87-9561-af452a0b9218":"#23521d","4f603594-1194-41f7-b146-4992ac2b068d":"#0d1a0a","38e1694c-4717-4317-8fb4-9276aa610c1f":"#f2dddb","5f63a482-278f-4a76-ba24-db5176bca41d":"#f78580","cd050969-56c9-469d-ba62-0518f33b30ef":"#de0030","03bc0637-e4df-4efa-af38-4ab77050a6ab":"#7e1a23","3e9686f0-0fe5-4e47-abbf-9a160f145045":"#241010","da73ab27-06ca-4b30-b726-4a0598e4b733":"#f7f1d9","da1a26e9-fd0b-4e11-9ab2-f830ee3fab3d":"#f2f0ef","d25a9983-ed01-4e57-a0f5-4f214efe5535":"#f8f8f8","19d7e7f1-0c56-4101-b1c7-2c5e6f4d4c2e":"#f0f1f1","1e1ed74e-b270-4eea-ba6c-750903c453d6":"#fbf7f4","512b0d39-8536-481c-9949-9a46469cf090":"#f8efe9","10dea392-b94a-4f98-8efa-13e45473885f":"#f8f8f8","676b4153-804f-4057-94ae-d21dadc935ca":"#f1f1f1","6c0e9cb6-6b14-4629-8c22-306d591ed984":"#f4f8ff","685dcfc5-0930-4917-bd76-da47f7054814":"#e8f2ff"};
            /* wwFront:end */
        }),
        spacings:
         /* wwFront:start */
        // eslint-disable-next-line no-unreachable, no-undef
        {"945d1637-a8ed-4c00-bfce-b0569776d6f8":"4px","5485b562-00f4-4bbe-97c9-46a68c415683":"8px","a657da57-6ec9-4ab4-97c1-9f63fdd90eae":"12px","8086cced-9861-4866-a037-6ca024606992":"16px","ed1bf133-848c-406f-92d4-801a6a94c206":"20px","bdbff1f6-f5f7-47c5-88e8-3c2f7c67a386":"24px","3bec0492-fc62-45ee-a6b7-f51602ef00d7":"2px","b4f3e9e8-6c32-425c-be00-09551dce5a49":"4px","8474ef9f-9006-4d16-9108-8f803567c9c3":"8px","dafe6d17-3af8-45a8-8621-d1d00611c4ae":"12px","4586210d-f67e-407d-bbda-ffa70664c0d4":"16px","b5db5170-ac80-4daf-8ad1-04cdb6636c0f":"20px","142d8d14-0de1-414f-9b6d-7a980b67fb81":"32px","c3af529e-c664-405b-b5c4-365edc696555":"40px","91d3d6e3-3783-41ec-9c8e-a926e2450ecf":"2px"},
        /* wwFront:end */
        typographies:
         /* wwFront:start */
        // eslint-disable-next-line no-unreachable, no-undef
        {"8be927d9-ab9a-4e27-90e3-262e22dece68":"400 14px/22px var(--ww-default-font-family, sans-serif)","6aa03778-7010-4c9d-9b99-62e351587e0a":"500 38px/46px var(--ww-default-font-family, sans-serif)","2b9ccb5f-9856-4b63-b6b1-7d8f9e8b6065":"500 30px/40px var(--ww-default-font-family, sans-serif)","a1affd90-b4be-4414-b9cc-0c8eda465a88":"500 24px/32px var(--ww-default-font-family, sans-serif)","5990ef1e-7e04-4a23-a63a-76c2730781e2":"500 16px/24px var(--ww-default-font-family, sans-serif)","208238bd-fdfb-4330-ab64-f7031d51d62a":"600 14px/22px var(--ww-default-font-family, sans-serif)","1f710534-692c-4c6e-b0ba-37d5d8a1eff2":"400 12px/20px var(--ww-default-font-family, sans-serif)","e3e2dd1a-8744-4605-9478-190e417d0803":"600 16px/24px var(--ww-default-font-family, sans-serif)","493bda50-c24a-4a96-9bdf-3f65a7792718":"600 12px/18px var(--ww-default-font-family, sans-serif)","5eac8ce2-d7aa-4032-9464-f3c43564fceb":"400 12px/18px var(--ww-default-font-family, sans-serif)","096926cc-d803-4a1e-945a-b3532244fbfe":"400 16px/22px var(--ww-default-font-family, sans-serif)","896f4ece-f351-4df3-8a07-b768e7a68a02":"400 12px/20px var(--ww-default-font-family, sans-serif)","8b082a10-06fd-49b6-9ccb-6f2c5ffec5d4":"500 20px/28px var(--ww-default-font-family, sans-serif)","e4062375-952c-4daf-96cc-a7f4efb3f6d0":"400 60px/60px var(--ww-default-font-family, sans-serif)","5b65cd70-3f51-4b22-a26e-5be1cd7d2025":"400 48px/52px var(--ww-default-font-family, sans-serif)","28ef3ff8-111d-4597-a0d7-c6473209b87b":"400 36px/36px var(--ww-default-font-family, sans-serif)","f80efe19-cce3-49e8-badf-47eea68a0c74":"400 24px/30px var(--ww-default-font-family, sans-serif)","736bbe9e-02ef-4372-9b7a-ff98c7beae18":"400 18px/26px var(--ww-default-font-family, sans-serif)","13401d18-2d9f-46dc-abf2-b17be2395c53":"400 16px/24px var(--ww-default-font-family, sans-serif)","ea7d2f34-42b4-4761-b781-bfdb3427e79c":"400 12px/16px var(--ww-default-font-family, sans-serif)","ffb19007-3af1-4ccc-8b02-e0506232ad69":"300 48px/52px var(--ww-default-font-family, sans-serif)","d198d7b3-4279-491d-8b6e-1655e5bfba71":"300 24px/30px var(--ww-default-font-family, sans-serif)","07ed151a-9816-4b64-99e8-794d0ff6a0c8":"300 16px/24px var(--ww-default-font-family, sans-serif)","b3b75963-fba3-405d-97f3-2d582985572b":"300 12px/16px var(--ww-default-font-family, sans-serif)","1ac1f269-1d1b-491e-a7b4-fa1eaa7f157f":"500 60px/60px var(--ww-default-font-family, sans-serif)","5633d79b-77f3-4680-a6db-a7d85e19eafb":"500 36px/36px var(--ww-default-font-family, sans-serif)","ee749ea5-f1be-4805-b1ba-8c2401b0dcaf":"500 18px/26px var(--ww-default-font-family, sans-serif)","99da6bc3-6b5a-4bad-9b3e-6cf0fafb84fb":"500 14px/20px var(--ww-default-font-family, sans-serif)","2da011f5-cb36-441e-a256-d5400b62ac89":"500 11px/16px var(--ww-default-font-family, sans-serif)","f51b4de7-2506-469f-bfa2-fa463c40d0c6":"700 48px/52px var(--ww-default-font-family, sans-serif)","2b2f716e-ad79-4a49-993d-c653e5a880b1":"700 24px/30px var(--ww-default-font-family, sans-serif)","72e4521b-cc0f-4d8d-b6dc-4adef36bc464":"700 16px/24px var(--ww-default-font-family, sans-serif)","b09fbe95-1017-4817-b380-38516a22aba5":"700 12px/16px var(--ww-default-font-family, sans-serif)","76496e2c-591b-4022-a057-e3f6eac5a66d":"400 14px/20px var(--ww-default-font-family, sans-serif)","77be871a-12fc-4713-872c-ea4f5e275e1c":"400 11px/16px var(--ww-default-font-family, sans-serif)","3226d16a-4f33-4564-b969-36680543b27d":"300 60px/60px var(--ww-default-font-family, sans-serif)","4420e194-2729-4442-ac99-8e9160a04f39":"300 36px/36px var(--ww-default-font-family, sans-serif)","9b0943a5-2a6a-4745-9386-2551e466fcc7":"300 18px/26px var(--ww-default-font-family, sans-serif)","f21fce88-a30f-4431-8b14-2f191de0d6e1":"300 14px/20px var(--ww-default-font-family, sans-serif)","0a516822-e1c3-4910-b18e-275b4b445db6":"300 11px/16px var(--ww-default-font-family, sans-serif)","9aa91ae7-7384-477d-9d20-ade98be4d081":"500 48px/52px var(--ww-default-font-family, sans-serif)","290257da-7cca-4aac-8066-566152abaee2":"500 24px/30px var(--ww-default-font-family, sans-serif)","8c12be09-fcf5-4af2-af35-a99ba475633e":"500 16px/24px var(--ww-default-font-family, sans-serif)","85afc4c1-a14f-4f37-8a0a-59e776ccd9bc":"500 12px/16px var(--ww-default-font-family, sans-serif)","25ded52a-8d22-4ce9-a74c-ea241e02a732":"700 60px/60px var(--ww-default-font-family, sans-serif)","9aa3603e-fcc1-49fb-8967-68d30cbf4e0c":"700 36px/40px var(--ww-default-font-family, sans-serif)","bbd59cfd-d78b-45ae-8ead-11665041fd31":"700 18px/26px var(--ww-default-font-family, sans-serif)","8f855c9a-26c1-4966-8f11-ed21b1500675":"700 14px/20px var(--ww-default-font-family, sans-serif)","ef8abdfc-7e02-44b3-9a30-cd5a3126f289":"700 11px/16px var(--ww-default-font-family, sans-serif)"},
        /* wwFront:end */
        browser: computed(() => {
            const router = wwLib.manager ? wwLib.getEditorRouter() : wwLib.getFrontRouter();
            const currentRoute = router.currentRoute.value;
            let currentQueries = currentRoute.query;
             return {
                url: window.location.origin + currentRoute.fullPath,
                path: currentRoute.path,
                // verify if auth plugin
                 /* wwFront:start */
                // eslint-disable-next-line no-dupe-keys
                source: currentQueries._source,
                /* wwFront:end */
                query: currentQueries,
                domain: window.location.hostname,
                baseUrl: window.location.origin,
                breakpoint: wwLib.$store.getters['front/getScreenSize'],
                environment: wwLib.getEnvironment(),
                theme: wwLib.$store.getters['front/getTheme'],
            };
        }),
        screen: services.scrollStore.screen,
        componentPositionInfo: services.scrollStore.componentPositionInfo,
    }),

    pageData: computed(() => {
        const lang = wwLib.$store.getters['front/getLang'];
        const cmsDataSetPath = wwLib.$store.getters['websiteData/getPage'].cmsDataSetPath;
        if (!cmsDataSetPath) {
            return { lang };
        }

        return { lang, data: wwLib.$store.getters['data/getPageCollectionData'] };
    }),

    getEnvironment() {
        return wwLib.manager
            ? 'editor'
            : window.location.host.includes(
                  // TODO: add staging2 ?
                  '-staging.' + (process.env.WW_ENV === 'staging' ? import.meta.env.VITE_APP_PREVIEW_URL : '')
              )
            ? 'staging'
            : window.location.host.includes(import.meta.env.VITE_APP_PREVIEW_URL)
            ? 'preview'
            : 'production';
    },

    useBaseTag() {
        return (
            wwLib.getEnvironment() === 'production' &&
            window.wwg_designInfo.baseTag &&
            window.wwg_designInfo.baseTag.href
        );
    },

    getBaseTag() {
        let baseTag = window.wwg_designInfo.baseTag?.href || '';
        if (!baseTag.startsWith('/')) {
            baseTag = '/' + baseTag;
        }
        if (!baseTag.endsWith('/')) {
            baseTag += '/';
        }
        return baseTag;
    },

    /**
     * @PUBLIC_API
     */
    getFrontWindow() {
        if (document.querySelector('.ww-manager-iframe')) {
            return document.querySelector('.ww-manager-iframe').contentWindow;
        }
        return window;
    },

    /**
     * @PUBLIC_API
     */
    getFrontDocument() {
        return this.getFrontWindow().document;
    },

    /**
     * @PUBLIC_API
     */
    getFrontRouter() {
        return this.front.router;
    },

    /**
     * @PUBLIC_API
     */
    getEditorWindow() {
         // eslint-disable-next-line no-unreachable
        return null;
    },

    /**
     * @PUBLIC_API
     */
    getEditorDocument() {
         // eslint-disable-next-line no-unreachable
        return null;
    },

    /**
     * @PUBLIC_API
     */
    getEditorRouter() {
        return this.editor.router;
    },

    /**
     * @PUBLIC_API
     * @DEPRECATED wwLib.wwApp.goTo
     */
    goTo(...args) {
        wwLib.wwLog.warn('wwLib.goTo is DEPRECATED, use wwLib.wwApp.goTo instead');
        wwLib.wwApp.goTo(...args);
    },

    /**
     * @PUBLIC_API
     * @DEPRECATED wwLib.wwUtils.getStyleFromToken
     */
    getStyleFromToken(...args) {
        // wwLib.wwLog.warn('wwLib.getStyleFromToken is DEPRECATED, use wwLib.wwUtils.getStyleFromToken instead');
        return wwLib.wwUtils.getStyleFromToken(...args);
    },

    /**
     * @PUBLIC_API
     * @DEPRECATED wwLib.wwUtils.getTypoFromToken
     */
    getTypoFromToken(...args) {
        // wwLib.wwLog.warn('wwLib.getTypoFromToken is DEPRECATED, use wwLib.wwUtils.getTypoFromToken instead');
        return wwLib.wwUtils.getTypoFromToken(...args);
    },

    /**
     * @PUBLIC_API
     * @DEPRECATED
     */
    element(value) {
        wwLib.wwLog.warn('wwLib.element is DEPRECATED');
        if (typeof value === 'object') {
            return { isWwObject: true, ...value };
        } else {
            return { isWwObject: true, type: value };
        }
    },

    /**
     * @PUBLIC_API
     * @DEPRECATED wwLib.wwUtils.resolveObjectPropertyPath
     */
    resolveObjectPropertyPath(...args) {
        // wwLib.wwLog.warn(
        //     'wwLib.resolveObjectPropertyPath is DEPRECATED, use wwLib.wwUtils.resolveObjectPropertyPath instead'
        // );
        return wwLib.wwUtils.resolveObjectPropertyPath(...args);
    },

    /**
     * @PUBLIC_API
     * @DEPRECATED wwLib.wwutils.getTextStyleFromContent
     */
    getTextStyleFromContent(...args) {
        // wwLib.wwLog.warn(
        //     'wwLib.getTextStyleFromContent is DEPRECATED, use wwLib.wwUtils.getTextStyleFromContent instead'
        // );
        return wwLib.wwUtils.getTextStyleFromContent(...args);
    },

    /**
     * @PUBLIC_API
     * @DEPRECATED wwLib.wwWorkflow.executeGlobal
     */
    async executeWorkflow(...args) {
        wwLib.wwLog.warn('wwLib.executeWorkflow is DEPRECATED, use wwLib.wwWorkflow.executeGlobal instead');
        return wwLib.wwWorkflow.executeGlobal(...args);
    },

    /**
     * @PUBLIC_API
     * @EDITOR
     * @DEPRECATED wwLib.wwEditor.findParentUidByFlag
     */
    findParentUidByFlag(...args) {
        wwLib.wwLog.warn('wwLib.wwEditor.findParentUidByFlag is DEPRECATED, use wwLib.findParentUidByFlag instead');
        return wwLib.wwEditor.findParentUidByFlag(...args);
    },

    /**
     * @PUBLIC_API
     * @EDITOR
     * @DEPRECATED wwLib.wwEditor.selectParentByFlag
     */
    selectParentByFlag(...args) {
        wwLib.wwLog.warn('wwLib.wwEditor.selectParentByFlag is DEPRECATED, use wwLib.selectParentByFlag instead');
        return wwLib.wwEditor.selectParentByFlag(...args);
    },

    /**
     * @PUBLIC_API
     * @DEPRECATED wwLib.wwElement.useCreate
     */
    useCreateElement() {
        wwLib.wwLog.warn('wwLib.useCreateElement is DEPRECATED, use wwLib.wwElement.useCreate instead');
        return this.wwElement.useCreate();
    },

    /**
     * @PUBLIC_API
     * @DEPRECATED wwLib.wwElement.useLayoutStyle
     */
    useLayoutStyle() {
        wwLib.wwLog.warn('wwLib.useLayoutStyle is DEPRECATED, use wwLib.wwElement.useLayoutStyle instead');
        return wwLib.wwElement.useLayoutStyle();
    },

    /**
     * @PUBLIC_API
     */
    useIcons() {
        const store = useIconsStore();
        return {
            getIcon: store.getIcon,
        };
    },
};

function pageSanitizer(page) {
    const keysToInclude = [
        'id',
        'name',
        'folder',
        'metaImage',
        'pageLoaded',
        'paths',
        'langs',
        'meta',
        'title',
        'sections',
        'pageUserGroups',
    ];

    const _page = {};
    keysToInclude.forEach(key => {
        _page[key] = page[key];
    });

    _page.meta && delete _page.meta.__typename;
    for (const section of _page.sections || []) {
        delete section.__typename;
    }

    const lang = wwLib.$store.getters['front/getLang'];
    if (_page.paths) _page.path = _page.paths[lang] || _page.paths.default;
    else _page.path = null;

    _page.lang = lang;

    return _page;
}
