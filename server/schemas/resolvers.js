const { User, Post } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');


const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if(context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                    .select('-__v -password')
                    .populate('post')
                return userData;
            }

            throw new AuthenticationError('Not logged in');
        },
        users: async () => {
            return User.find()
                .select('-__v -password')
                .populate('posts');
        },
        user: async (parent, { username }) => {
            return User.findOne({ username })
                .select('-__v -password')
                .populate('posts')
        },
        posts: async (parent, { username }) => {
            const params = username ? { username } : {};
            return Post.find(params).sort({ createdAt: -1 });
        },
        post: async (parent, { _id }) => {
            return Post.findOne({ _id });
        }
    },

    Mutation: {
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
            if (!user) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const correctPw = await user.isCorrectPassword(password);
            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user);
            return { token, user };
        },
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user };
        },
        addPost: async (parent, args, context) => {
            if (context.user) {
                const post = await Post.create({ ...args, username: context.user.username });

                await User.findByIdAndUpdate(
                    { _id: context.user},
                    { $push: { posts: post._id } },
                    { new: true }
                );

                return post;
            }
            
            throw new AuthenticationError('You need to be logged in!');
        },
        deletePost: async (paerent, args, context) => {
            //ToDo: Delete post id from user field
            if (context.user) {
              const deleteId = args._id;
              const isAdmin = await verifyAdmin(context.user.unit);
              if (isAdmin) {
                await User.findByIdAndUpdate(
                  { _id: context.user._id },
                  { $pull: { posts: post._id } },
                  { new: true }
               );
                return post.findOneAndDelete({ ...args });
              }
              // 
              await User.findByIdAndUpdate(
                { _id: context.user._id },
                { $pull: { posts: post._id } },
                { new: true }
              );
            }
      
            throw new AuthenticationError(
              "You need to be logged in, to delete a post"
            );
            
        },
       
        addComment: async (parent, { postId, commentBody }, context) => {
            if (context.user) {
                const updatedPost = await Post.findOneAndUpdate(
                    { _id: postId },
                    { $push: { comments: { commentBody, username: context.user.username } } },
                    { new: true, runValidators: true }
                );

                return updatedPost;
            }
            
            throw new AuthenticationError('You need to be logged in!');
        },
        updateComment: async (parent, {message, commentId }, context) => {
            if (context.user) {
              const updateComment = await Comment.findOneAndUpdate(
                { _id: commentId },
                { $push: { comments: { message, unit: context.user.post } } },
                { new: true, runValidators: true }
              );
      
              return updateComment;
            }
      
            throw new AuthenticationError('You need to be logged in to comment on a post!');
          },
    }
};

module.exports = resolvers;