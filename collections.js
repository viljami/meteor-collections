var collections = {};
Meteor.collections = function ( collectionName ) {
	if( _.has( collections, collectionName )) {
		return collections[ collectionName ];
	} else {
		collections[ collectionName ] = new Meteor.Collection( collectionName );
		return collections[ collectionName ];
	}
};