import { gql } from '@apollo/client';

export const GET_USER = gql`
    {
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
    }
`;

