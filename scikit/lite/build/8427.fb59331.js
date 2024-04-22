"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[8427,1815],{81815:(e,t,s)=>{s.r(t),s.d(t,{default:()=>O});var n=s(64588),r=s(2310),a=s(314),o=s(62017),i=s(97590),c=s(38922),u=s(7784),l=s(75825),p=s(20703),g=s(20927),y=s.n(g);const w={id:"@jupyterlite/server-extension:localforage",autoStart:!0,provides:p.ILocalForage,activate:e=>({localforage:y()})},v={id:"@jupyterlite/server-extension:localforage-memory-storage",autoStart:!0,requires:[p.ILocalForage],activate:async(e,t)=>{JSON.parse(n.PageConfig.getOption("enableMemoryStorage")||"false")&&(console.warn("Memory storage fallback enabled: contents and settings may not be saved"),await(0,p.ensureMemoryStorage)(t.localforage))}},d={id:"@jupyterlite/server-extension:contents",requires:[p.ILocalForage],autoStart:!0,provides:r.IContents,activate:(e,t)=>{const s=n.PageConfig.getOption("contentsStorageName"),a=JSON.parse(n.PageConfig.getOption("contentsStorageDrivers")||"null"),{localforage:o}=t,i=new r.Contents({storageName:s,storageDrivers:a,localforage:o});return e.started.then((()=>i.initialize().catch(console.warn))),i}},S={id:"@jupyterlite/server-extension:contents-routes",autoStart:!0,requires:[r.IContents],activate:(e,t)=>{e.router.get("/api/contents/(.+)/checkpoints",(async(e,s)=>{const n=await t.listCheckpoints(s);return new Response(JSON.stringify(n))})),e.router.post("/api/contents/(.+)/checkpoints/(.*)",(async(e,s,n)=>{const r=await t.restoreCheckpoint(s,n);return new Response(JSON.stringify(r),{status:204})})),e.router.post("/api/contents/(.+)/checkpoints",(async(e,s)=>{const n=await t.createCheckpoint(s);return new Response(JSON.stringify(n),{status:201})})),e.router.delete("/api/contents/(.+)/checkpoints/(.*)",(async(e,s,n)=>{const r=await t.deleteCheckpoint(s,n);return new Response(JSON.stringify(r),{status:204})})),e.router.get("/api/contents(.*)",(async(e,s)=>{var n;const r={content:"1"===(null===(n=e.query)||void 0===n?void 0:n.content)},a=await t.get(s,r);return a?new Response(JSON.stringify(a)):new Response(null,{status:404})})),e.router.post("/api/contents(.*)",(async(e,s)=>{const n=e.body,r=null==n?void 0:n.copy_from;let a;return a=r?await t.copy(r,s):await t.newUntitled(n),a?new Response(JSON.stringify(a),{status:201}):new Response(null,{status:400})})),e.router.patch("/api/contents(.*)",(async(e,s)=>{var n,r;const a=null!==(r=null===(n=e.body)||void 0===n?void 0:n.path)&&void 0!==r?r:"";s="/"===s[0]?s.slice(1):s;const o=await t.rename(s,a);return new Response(JSON.stringify(o))})),e.router.put("/api/contents/(.+)",(async(e,s)=>{const n=e.body,r=await t.save(s,n);return new Response(JSON.stringify(r))})),e.router.delete("/api/contents/(.+)",(async(e,s)=>(await t.delete(s),new Response(null,{status:204}))))}},f={id:"@jupyterlite/server-extension:service-worker",autoStart:!0,provides:i.IServiceWorkerManager,activate:e=>new i.ServiceWorkerManager},O=[d,S,{id:"@jupyterlite/server-extension:emscripten-filesystem",autoStart:!0,optional:[i.IServiceWorkerManager],provides:r.IBroadcastChannelWrapper,activate:(e,t)=>{const{contents:s}=e.serviceManager,n=new r.BroadcastChannelWrapper({contents:s}),a="Kernel filesystem and JupyterLite contents";function o(e,t){t&&console.warn(t),e&&console.warn(e),t||e?console.warn(`${a} will NOT be synced`):console.info(`${a} will be synced`)}return t?t.ready.then((()=>{n.enable(),o()})).catch((e=>{o("JupyterLite ServiceWorker failed to become available",e)})):o("JupyterLite ServiceWorker not available"),n}},{id:"@jupyterlite/server-extension:kernels",autoStart:!0,provides:a.IKernels,requires:[a.IKernelSpecs],activate:(e,t)=>new a.Kernels({kernelspecs:t})},{id:"@jupyterlite/server-extension:kernels-routes",autoStart:!0,requires:[a.IKernels],activate:(e,t)=>{e.router.get("/api/kernels",(async e=>{const s=await t.list();return new Response(JSON.stringify(s))})),e.router.post("/api/kernels/(.*)/restart",(async(e,s)=>{const n=await t.restart(s);return new Response(JSON.stringify(n))})),e.router.delete("/api/kernels/(.*)",(async(e,s)=>{const n=await t.shutdown(s);return new Response(JSON.stringify(n),{status:204})}))}},{id:"@jupyterlite/server-extension:kernelspec",autoStart:!0,provides:a.IKernelSpecs,activate:e=>new a.KernelSpecs},{id:"@jupyterlite/server-extension:kernelspec-routes",autoStart:!0,requires:[a.IKernelSpecs],activate:(e,t)=>{e.router.get("/api/kernelspecs",(async e=>{const{specs:s}=t;if(!s)return new Response(null);const n={},r=s.kernelspecs;Object.keys(r).forEach((e=>{const t=r[e],{resources:s}=null!=t?t:{};n[e]={name:e,spec:t,resources:s}}));const a={default:s.default,kernelspecs:n};return new Response(JSON.stringify(a))}))}},{id:"@jupyterlite/server-extension:licenses",autoStart:!0,provides:o.ILicenses,activate:e=>new o.Licenses},{id:"@jupyterlite/server-extension:licenses-routes",autoStart:!0,requires:[o.ILicenses],activate(e,t){e.router.get("/api/licenses",(async e=>{const s=await t.get();return new Response(JSON.stringify(s))}))}},v,w,{id:"@jupyterlite/server-extension:lsp-routes",autoStart:!0,activate:e=>{e.router.get("/lsp/status",(async e=>new Response(JSON.stringify({version:2,sessions:{},specs:{}}))))}},{id:"@jupyterlite/server-extension:nbconvert-routes",autoStart:!0,activate:e=>{e.router.get("/api/nbconvert",(async e=>new Response(JSON.stringify({}))))}},f,{id:"@jupyterlite/server-extension:sessions",autoStart:!0,provides:c.ISessions,requires:[a.IKernels],activate:(e,t)=>new c.Sessions({kernels:t})},{id:"@jupyterlite/server-extension:sessions-routes",autoStart:!0,requires:[c.ISessions],activate:(e,t)=>{e.router.get("/api/sessions/(.+)",(async(e,s)=>{const n=await t.get(s);return new Response(JSON.stringify(n),{status:200})})),e.router.get("/api/sessions",(async e=>{const s=await t.list();return new Response(JSON.stringify(s),{status:200})})),e.router.patch("/api/sessions(.*)",(async(e,s)=>{const n=e.body,r=await t.patch(n);return new Response(JSON.stringify(r),{status:200})})),e.router.delete("/api/sessions/(.+)",(async(e,s)=>(await t.shutdown(s),new Response(null,{status:204})))),e.router.post("/api/sessions",(async e=>{const s=e.body,n=await t.startNew(s);return new Response(JSON.stringify(n),{status:201})}))}},{id:"@jupyterlite/server-extension:settings",autoStart:!0,requires:[p.ILocalForage],provides:u.ISettings,activate:(e,t)=>{const s=n.PageConfig.getOption("settingsStorageName"),r=JSON.parse(n.PageConfig.getOption("settingsStorageDrivers")||"null"),{localforage:a}=t,o=new u.Settings({storageName:s,storageDrivers:r,localforage:a});return e.started.then((()=>o.initialize().catch(console.warn))),o}},{id:"@jupyterlite/server-extension:settings-routes",autoStart:!0,requires:[u.ISettings],activate:(e,t)=>{const s="/api/settings/((?:@([^/]+?)[/])?([^/]+?):([^:]+))$";e.router.get(s,(async(e,s)=>{const n=await t.get(s);return new Response(JSON.stringify(n))})),e.router.put(s,(async(e,s)=>{const n=e.body,{raw:r}=n;return await t.save(s,r),new Response(null,{status:204})})),e.router.get("/api/settings",(async e=>{const s=await t.getAll();return new Response(JSON.stringify(s))}))}},{id:"@jupyterlite/server-extension:translation",autoStart:!0,provides:l.ITranslation,activate:e=>{const t=new l.Translation;return e.router.get("/api/translations/?(.*)",(async(e,s)=>{"default"===s&&(s="en");const n=await t.get(s||"all");return new Response(JSON.stringify(n))})),t}},{id:"@jupyterlite/server-extension:translation-routes",autoStart:!0,requires:[l.ITranslation],activate:(e,t)=>{e.router.get("/api/translations/?(.*)",(async(e,s)=>{const n=await t.get(s||"all");return new Response(JSON.stringify(n))}))}}]}}]);
//# sourceMappingURL=8427.fb59331.js.map