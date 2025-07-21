export function requireAccess(pageKey){

  const u = JSON.parse(sessionStorage.getItem('currentUser') || null);

  console.log("👤 Usuario cargado:", u);
  console.log("🔑 Página requerida:", pageKey);
  console.log("📄 Páginas permitidas:", !u.allowedPages);
  console.log("✔ ¿Incluye la página?", !u.allowedPages.includes(pageKey));
  
  if(!u){alert('Debe iniciar sesión');return redirect();}
  if(!u.allowedPages.includes(pageKey)){alert('Sin permiso');return redirect();}
}
function redirect(){window.location.href='index.html';throw new Error('blocked');}
