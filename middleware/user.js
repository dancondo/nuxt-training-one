export default function(context) {
  if(context.store.$auth.loggedIn && context.store.$auth.user.admin) {
    context.redirect('/admin/posts')
  }
}
