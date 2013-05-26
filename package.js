Package.describe({
  summary: "Access Meteor's collections from everywhere."
});

Package.on_use(function (api) {
  api.add_files(
    [ 'collections.js' ],
    ['client', 'server']
  );
});
