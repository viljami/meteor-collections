# Meteor-collections

This package was created to make it easier to access already created collections in Meteor.js. This is really simple specification where you don't (yet) have possibility to do other than name the collection you are need.

## Install

    mrt add collections

## Usage

Now we can create the collections like this:

    Yes: var Bananas = Meteor.collections('bananas');

Normally we create a new collection like this:

    No: var Bananas = new Meteor.Collection('bananas');

If you don't use Meteor.collections -method the new collection is accessible through collections tracked. If you still try it likely results in an error.

## TODO

 * manage setting of new Collections options/fields or inform that the collection already has everything 
 * setting to make is possible to override existing collection... 


