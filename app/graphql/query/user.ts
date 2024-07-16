import {graphql} from "../../../src/gql";

export const verifyUserGoogleTokenQuery= graphql(`
#graphql
query VerifUserGoogleToken($token: String!){
verifyGoogleToken(token: $token)
}

`);