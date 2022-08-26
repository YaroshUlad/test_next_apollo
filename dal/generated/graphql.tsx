import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Upload: any;
};

export type AuthPayload = {
  __typename?: 'AuthPayload';
  token?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

export enum CacheControlScope {
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type Feed = {
  __typename?: 'Feed';
  count: Scalars['Int'];
  links: Array<Link>;
};

export type Link = {
  __typename?: 'Link';
  description: Scalars['String'];
  id: Scalars['ID'];
  postedBy?: Maybe<User>;
  url: Scalars['String'];
  votes: Array<Vote>;
};

export type LinkOrderByInput = {
  createdAt?: InputMaybe<Sort>;
  description?: InputMaybe<Sort>;
  url?: InputMaybe<Sort>;
};

export type Mutation = {
  __typename?: 'Mutation';
  login?: Maybe<AuthPayload>;
  post: Link;
  signup?: Maybe<AuthPayload>;
  vote?: Maybe<Vote>;
};


export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationPostArgs = {
  description: Scalars['String'];
  url: Scalars['String'];
};


export type MutationSignupArgs = {
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
};


export type MutationVoteArgs = {
  linkId: Scalars['ID'];
};

export type Query = {
  __typename?: 'Query';
  feed: Feed;
  info: Scalars['String'];
  user: Array<User>;
};


export type QueryFeedArgs = {
  filter?: InputMaybe<Scalars['String']>;
  orderBy?: InputMaybe<LinkOrderByInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
};

export enum Sort {
  Asc = 'asc',
  Desc = 'desc'
}

export type Subscription = {
  __typename?: 'Subscription';
  newLink?: Maybe<Link>;
  newVote?: Maybe<Vote>;
};

export type User = {
  __typename?: 'User';
  email: Scalars['String'];
  id: Scalars['ID'];
  links: Array<Link>;
  name: Scalars['String'];
};

export type Vote = {
  __typename?: 'Vote';
  id: Scalars['ID'];
  link: Link;
  user: User;
};

export type GetAllLinksQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllLinksQuery = { __typename?: 'Query', feed: { __typename?: 'Feed', count: number, links: Array<{ __typename?: 'Link', id: string, description: string, url: string, postedBy?: { __typename?: 'User', id: string, name: string } | null, votes: Array<{ __typename?: 'Vote', id: string, user: { __typename?: 'User', id: string, name: string } }> }> } };

export type GetFilteredLinksQueryVariables = Exact<{
  filter: Scalars['String'];
}>;


export type GetFilteredLinksQuery = { __typename?: 'Query', feed: { __typename?: 'Feed', count: number, links: Array<{ __typename?: 'Link', id: string, description: string, url: string, postedBy?: { __typename?: 'User', id: string, name: string } | null, votes: Array<{ __typename?: 'Vote', id: string, user: { __typename?: 'User', id: string, name: string } }> }> } };

export type GetLinksPaginationQueryVariables = Exact<{
  take: Scalars['Int'];
  skip: Scalars['Int'];
}>;


export type GetLinksPaginationQuery = { __typename?: 'Query', feed: { __typename?: 'Feed', count: number, links: Array<{ __typename?: 'Link', id: string, description: string, url: string, postedBy?: { __typename?: 'User', id: string, name: string } | null, votes: Array<{ __typename?: 'Vote', id: string, user: { __typename?: 'User', id: string, name: string } }> }> } };

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login?: { __typename?: 'AuthPayload', token?: string | null } | null };

export type SignupMutationVariables = Exact<{
  name: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type SignupMutation = { __typename?: 'Mutation', signup?: { __typename?: 'AuthPayload', token?: string | null } | null };

export type VoteMutationVariables = Exact<{
  linkId: Scalars['ID'];
}>;


export type VoteMutation = { __typename?: 'Mutation', vote?: { __typename?: 'Vote', id: string } | null };


export const GetAllLinksDocument = gql`
    query getAllLinks {
  feed {
    count
    links {
      id
      description
      url
      postedBy {
        id
        name
      }
      votes {
        id
        user {
          id
          name
        }
      }
    }
  }
}
    `;

/**
 * __useGetAllLinksQuery__
 *
 * To run a query within a React component, call `useGetAllLinksQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllLinksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllLinksQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllLinksQuery(baseOptions?: Apollo.QueryHookOptions<GetAllLinksQuery, GetAllLinksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllLinksQuery, GetAllLinksQueryVariables>(GetAllLinksDocument, options);
      }
export function useGetAllLinksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllLinksQuery, GetAllLinksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllLinksQuery, GetAllLinksQueryVariables>(GetAllLinksDocument, options);
        }
export type GetAllLinksQueryHookResult = ReturnType<typeof useGetAllLinksQuery>;
export type GetAllLinksLazyQueryHookResult = ReturnType<typeof useGetAllLinksLazyQuery>;
export type GetAllLinksQueryResult = Apollo.QueryResult<GetAllLinksQuery, GetAllLinksQueryVariables>;
export function refetchGetAllLinksQuery(variables?: GetAllLinksQueryVariables) {
      return { query: GetAllLinksDocument, variables: variables }
    }
export const GetFilteredLinksDocument = gql`
    query getFilteredLinks($filter: String!) {
  feed(filter: $filter) {
    count
    links {
      id
      description
      url
      postedBy {
        id
        name
      }
      votes {
        id
        user {
          id
          name
        }
      }
    }
  }
}
    `;

/**
 * __useGetFilteredLinksQuery__
 *
 * To run a query within a React component, call `useGetFilteredLinksQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFilteredLinksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFilteredLinksQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *   },
 * });
 */
export function useGetFilteredLinksQuery(baseOptions: Apollo.QueryHookOptions<GetFilteredLinksQuery, GetFilteredLinksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetFilteredLinksQuery, GetFilteredLinksQueryVariables>(GetFilteredLinksDocument, options);
      }
export function useGetFilteredLinksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetFilteredLinksQuery, GetFilteredLinksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetFilteredLinksQuery, GetFilteredLinksQueryVariables>(GetFilteredLinksDocument, options);
        }
export type GetFilteredLinksQueryHookResult = ReturnType<typeof useGetFilteredLinksQuery>;
export type GetFilteredLinksLazyQueryHookResult = ReturnType<typeof useGetFilteredLinksLazyQuery>;
export type GetFilteredLinksQueryResult = Apollo.QueryResult<GetFilteredLinksQuery, GetFilteredLinksQueryVariables>;
export function refetchGetFilteredLinksQuery(variables: GetFilteredLinksQueryVariables) {
      return { query: GetFilteredLinksDocument, variables: variables }
    }
export const GetLinksPaginationDocument = gql`
    query GetLinksPagination($take: Int!, $skip: Int!) {
  feed(take: $take, skip: $skip) {
    count
    links {
      id
      description
      url
      postedBy {
        id
        name
      }
      votes {
        id
        user {
          id
          name
        }
      }
    }
  }
}
    `;

/**
 * __useGetLinksPaginationQuery__
 *
 * To run a query within a React component, call `useGetLinksPaginationQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLinksPaginationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLinksPaginationQuery({
 *   variables: {
 *      take: // value for 'take'
 *      skip: // value for 'skip'
 *   },
 * });
 */
export function useGetLinksPaginationQuery(baseOptions: Apollo.QueryHookOptions<GetLinksPaginationQuery, GetLinksPaginationQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetLinksPaginationQuery, GetLinksPaginationQueryVariables>(GetLinksPaginationDocument, options);
      }
export function useGetLinksPaginationLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetLinksPaginationQuery, GetLinksPaginationQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetLinksPaginationQuery, GetLinksPaginationQueryVariables>(GetLinksPaginationDocument, options);
        }
export type GetLinksPaginationQueryHookResult = ReturnType<typeof useGetLinksPaginationQuery>;
export type GetLinksPaginationLazyQueryHookResult = ReturnType<typeof useGetLinksPaginationLazyQuery>;
export type GetLinksPaginationQueryResult = Apollo.QueryResult<GetLinksPaginationQuery, GetLinksPaginationQueryVariables>;
export function refetchGetLinksPaginationQuery(variables: GetLinksPaginationQueryVariables) {
      return { query: GetLinksPaginationDocument, variables: variables }
    }
export const LoginDocument = gql`
    mutation LOGIN($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const SignupDocument = gql`
    mutation SIGNUP($name: String!, $email: String!, $password: String!) {
  signup(name: $name, email: $email, password: $password) {
    token
  }
}
    `;
export type SignupMutationFn = Apollo.MutationFunction<SignupMutation, SignupMutationVariables>;

/**
 * __useSignupMutation__
 *
 * To run a mutation, you first call `useSignupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signupMutation, { data, loading, error }] = useSignupMutation({
 *   variables: {
 *      name: // value for 'name'
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useSignupMutation(baseOptions?: Apollo.MutationHookOptions<SignupMutation, SignupMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignupMutation, SignupMutationVariables>(SignupDocument, options);
      }
export type SignupMutationHookResult = ReturnType<typeof useSignupMutation>;
export type SignupMutationResult = Apollo.MutationResult<SignupMutation>;
export type SignupMutationOptions = Apollo.BaseMutationOptions<SignupMutation, SignupMutationVariables>;
export const VoteDocument = gql`
    mutation Vote($linkId: ID!) {
  vote(linkId: $linkId) {
    id
  }
}
    `;
export type VoteMutationFn = Apollo.MutationFunction<VoteMutation, VoteMutationVariables>;

/**
 * __useVoteMutation__
 *
 * To run a mutation, you first call `useVoteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVoteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [voteMutation, { data, loading, error }] = useVoteMutation({
 *   variables: {
 *      linkId: // value for 'linkId'
 *   },
 * });
 */
export function useVoteMutation(baseOptions?: Apollo.MutationHookOptions<VoteMutation, VoteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<VoteMutation, VoteMutationVariables>(VoteDocument, options);
      }
export type VoteMutationHookResult = ReturnType<typeof useVoteMutation>;
export type VoteMutationResult = Apollo.MutationResult<VoteMutation>;
export type VoteMutationOptions = Apollo.BaseMutationOptions<VoteMutation, VoteMutationVariables>;