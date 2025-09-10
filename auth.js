// auth.js
export function getCurrentUser(){
  try{
    const raw = sessionStorage.getItem('currentUser');
    return raw ? JSON.parse(raw) : null;
  }catch(e){
    console.warn('currentUser corrupto en sessionStorage', e);
    return null;
  }
}

export function requireAccess(pageKey){
  const u = getCurrentUser();
  console.log("👤 Usuario cargado:", u);
  console.log("🔑 Página requerida:", pageKey);

  if(!u){ alert('Debe iniciar sesión'); return redirect(); }
  if(!u.allowedPages || !u.allowedPages.includes(pageKey)){
    alert('Sin permiso'); return redirect();
  }
}

function redirect(){
  window.location.href='index.html';
  throw new Error('blocked');
}

/*export function requireAccess(pageKey){

  const u = JSON.parse(sessionStorage.getItem('currentUser') || null);

  console.log("👤 Usuario cargado:", u);
  console.log("🔑 Página requerida:", pageKey);
  if (u && u.allowedPages) {
    console.log("📄 Páginas permitidas:", u.allowedPages);
    console.log("✔ ¿Incluye la página?", u.allowedPages.includes(pageKey));
  } else {
    console.warn("🚫 Usuario no cargado o sin páginas permitidas.");
  }

  if(!u){alert('Debe iniciar sesión');return redirect();}
  if(!u.allowedPages.includes(pageKey)){alert('Sin permiso');return redirect();}
}
function redirect(){window.location.href='index.html';throw new Error('blocked');}*/
