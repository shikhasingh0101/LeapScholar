import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type Application {
    id: ID!
    name: String!
    email: String!
    phone: String!
    country: String!
    intake: String!
    program: String!
    educationLevel: String!
    graduationYear: Int!
    expectedPercentage: String!
    passportStatus: String!
    englishTestStatus: String!
    hasUniversityAdmit: String!
    currentCity: String!
  }

  type Query {
    getApplications: [Application]
    hello: String!  # Match the resolver
  }

  type Mutation {
    addApplication(
      name: String!
      email: String!
      phone: String!
      country: String!
      intake: String!
      program: String!
      educationLevel: String!
      graduationYear: Int!
      expectedPercentage: String!
      passportStatus: String!
      englishTestStatus: String!
      hasUniversityAdmit: String!
      currentCity: String!
    ): Application
  }


  type CounselingSlot {
    id: ID!
    counselor: String!
    time: String!
    status: String!
  }

  type Response {
    success: Boolean!
    message: String!
  }

  type Query {
    availableSlots: [CounselingSlot]
  }

  type Mutation {
    bookSlot(slotId: ID!, userId: ID!): Response
  }
`;

export default typeDefs;
