import createSchema from "part:@sanity/base/schema-creator";

import schemaTypes from "all:part:@sanity/base/schema-type";
import model from "./model";
import link from "./link";

export default createSchema({
    name: "default",
    types: schemaTypes.concat([model, link]),
});
