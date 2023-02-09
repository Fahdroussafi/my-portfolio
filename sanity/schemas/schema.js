import createSchema from "part:@sanity/base/schema-creator";

import schemaTypes from "all:part:@sanity/base/schema-type";

import project from "./project";
import skill from "./skill";
import social from "./social";
import pageInfo from "./pageInfo";

export default createSchema({
  name: "default",

  types: schemaTypes.concat([skill, project, social, pageInfo]),
});
