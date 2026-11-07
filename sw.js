const C="sallpro-v2",A=["/app","/manifest.json","/icon.svg","/icon-512.png","https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.45.4/dist/umd/supabase.min.js"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(A)).then(()=>self.skipWaiting()))});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
self.addEventListener("fetch",e=>{const u=new URL(e.request.url);if(e.request.method!=="GET"||u.hostname.endsWith("supabase.co"))return;
 if(e.request.mode==="navigate"){if(u.pathname==="/app"||u.pathname.startsWith("/app")){e.respondWith(fetch(e.request).then(r=>{const cl=r.clone();caches.open(C).then(c=>c.put("/app",cl));return r}).catch(()=>caches.match("/app")))}return}
 if(u.pathname.endsWith(".mp4"))return;
 e.respondWith(caches.match(e.request).then(m=>m||fetch(e.request).then(r=>{if(r.ok&&(u.origin===location.origin||u.hostname==="cdn.jsdelivr.net"||u.hostname.endsWith("gstatic.com")||u.hostname.endsWith("googleapis.com"))){const cl=r.clone();caches.open(C).then(c=>c.put(e.request,cl))}return r})))});
