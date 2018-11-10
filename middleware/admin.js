export default function(context) {
  if(!context.store.$auth.loggedIn) {
    context.redirect('/users/auth');
  };
  if(!context.store.$auth.user.admin) {
    context.redirect('/posts');
  }
}
