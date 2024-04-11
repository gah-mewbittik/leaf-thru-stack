const express = require('express');
const path = require('path');
const db = require('./config/connection');
const routes = require('./routes');

//TODO: const { ApolloServer } = require('@apollo/server');
//TODO: const { expressMiddleware } = require('@apollo/server/express4');
//TODO: const { authMiddleware } = require('./utils/auth');

const app = express();
const PORT = process.env.PORT || 3001;

//TODO:
// const server = new ApolloServer({
//   typeDefs,
//   resolvers,
// });

// TODO: Create a new instance of an Apollo server with the GraphQL schema
// const startApolloServer = async () => {
//   await server.start();

//   app.use(express.urlencoded({ extended: false }));
//   app.use(express.json());

//   app.use('/graphql', expressMiddleware(server, {
//     context: authMiddleware
//   }));

//   if (process.env.NODE_ENV === 'production') {
//     app.use(express.static(path.join(__dirname, '../client/dist')));

//     app.get('*', (req, res) => {
//       res.sendFile(path.join(__dirname, '../client/dist/index.html'));
//     });
//   }

//   db.once('open', () => {
//     app.listen(PORT, () => {
//       console.log(`API server running on port ${PORT}!`);
//       console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
//     });
//   });
// };

// TODO: --DELETE BELOW-- if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.use(routes);

db.once('open', () => {
  app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
}); //--DELETE ABOVE-- 

//TODO: Call the async function to start the server
//startApolloServer();
