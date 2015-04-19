/**
 * Return 'active' if the current route name is the same as the template name parameter
 */
Template.registerHelper("activeIfTemplateIs", function (template) {
    var currentRoute = Router.current().route.getName();
    return currentRoute === template ? 'active' : '';
});