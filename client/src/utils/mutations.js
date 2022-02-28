import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const ADD_POST = gql`
    mutation addPost($postText: String!) {
        addPost(postText: $postText {
            _id
            postText
            createdAt
            username
            commentCount
            comments {
                _id
            }
        }
    }
`;
//this might need to be revised
export const DELETE_POST = gql`
    mutation deletePost($postId: ID!) {
        deletePost(postId: $postId) {
            _id
            username
            email
            posts {
                _id
                postText
                createdAt
                username
                commentCount
                comments {
                    _id
                    commentBody
                    createdAt
                    username
                }
            }
        }
    }
`;

export const ADD_COMMENT = gql`
    mutation addComment($postId: ID!, commentBody: String!) {
        addComment(postId: $postId, commentBody: $commentBody) {
            _id
            commentCount
            comments {
                _id
                commentBody
                createdAt
                username
            }
        }
    }
`;
//this may also need to be revised
export const DELETE_COMMENT = gql`
    mutation deleteComment($postId: String!) {
        deleteComment(postId: $postId)
    }
`;