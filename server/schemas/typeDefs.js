const { gql } = require('apollo-server');

const typeDefs = `
type User {
    _id: ID
    username: String
    email: String
    password: String
    bookCount: Int
    savedBooks: [Book]!
  }

  type Book {
    bookId: String
    authors:[String]
    description: String
    title: String
    image: String
    link: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query{
    users: [User]
    user(username: String!): User
    me: User
    books: [Book]
    book(bookId: ID!): Book
  }

  input saveBookInput {
    authors: [String], 
    description: String!, 
    title: String!, 
    bookId: String!, 
    image: String, 
    link: String
  }

  type Mutation{
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(input: saveBookInput): User
    removeBook(bookId: String!): User
  }


`;

module.exports = typeDefs;
