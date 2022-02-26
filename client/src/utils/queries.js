import { gql } from '@apollo/client';

export const GET_ME = gql`
    {
        me {
            _id
            username
            email
            posts {
                _id
                postText
                createdAt
                username
                commentCount
                comments: {
                    _id
                    commentBody
                    createdAt
                    username
                }
            }
        }
    }
`;

export const GET_USER = gql`
    query user($usesrname: String!) {
        user(username: $username) {
            _id
            username
            email
            posts {
                _id
                postText
                createdAt
                username
                commentCount
                comments: {
                    _id
                    commentBody
                    createdAt
                    username
                }
            }
        }
    }
`;

export const QUERY_POST = gql`
    query post($id: ID!) {
        post(_id: $id) {
            _id
            postText
            createdAt
            username
            reactionCount
            comments {
                createdAt
                username
                commentBody
            }
        }
    }
`;



