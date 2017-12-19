var keystone = require('keystone'),
    Types = keystone.Field.Types;
 
var Property = new keystone.List('Property', {
    autokey: { path: 'slug', from: 'mlsid', unique: true },
    map: { name: 'mlsid' },
    defaultSort: '-listedOn'
});
 
Property.add({
    mlsid: { type: String, required: true },
    location: { type: Types.Location, defaults: { } },
    listedBy: { type: Types.Relationship, ref: 'User' },
    listedOn: { type: Date, default: Date.now },
    photos: { type: Types.CloudinaryImages },
    price: { type: Types.Money },
    bedrooms: { type: Types.Number },
    bathrooms: { type: Types.Number },
    squareFeet: { type: Types.Number },
    description: {
        brief: { type: Types.Html, wysiwyg: true, height: 150 },
        extended: { type: Types.Html, wysiwyg: true, height: 400 }
    }
});
 
Property.defaultColumns = 'mlsid, listedBy, listedOn|15%'
Property.register();
