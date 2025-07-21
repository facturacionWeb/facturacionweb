export function requireAccess(pageKey){
  const u = JSON.parse(sessionStorage.getItem('currentUser') || 'null');
  if(!u){alert('Debe iniciar sesión');return redirect();}
  if(!u.allowedPages.includes(pageKey)){alert('Sin permiso');return redirect();}
}
function redirect(){window.location.href='index.html';throw new Error('blocked');}
