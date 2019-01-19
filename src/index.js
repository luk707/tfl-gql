import express from "express";
import graphqlHttp from "express-graphql";
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLID,
  GraphQLString
} from "graphql";

const PORT = process.env.PORT || 8080;

const app = express();

app.use(
  graphqlHttp({
    schema: new GraphQLSchema({
      query: new GraphQLObjectType({
        name: "Query",
        description: "Root query object",
        fields: {
          test: {
            type: GraphQLString,
            resolve() {
              return "Hello World!";
            }
          }
        }
      })
    }),
    graphiql: true
  })
);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
