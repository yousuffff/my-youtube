import React from "react";

const CommentData = [
  {
    name: "Yousuf",
    text: "This is a comment",
    id: 1,
    replies: [
      {
        name: "Ahmad",
        text: "Great comment!",
        replies: [
          {
            name: "Mohammad",
            text: "That's awesome!",
            replies: [{ name: "Abdul", text: "That's awesome!", replies: [] }],
          },
        ],
      },
    ],
  },
  {
    name: "Suhail",
    text: "This is a comment",
    id: 111,
    replies: [
      {
        name: "Ahmad",
        text: "Great comment!",
        replies: [
          {
            name: "Mohammad",
            text: "That's awesome!",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Aamir",
    text: "This is a comment",
    id: 123,
    replies: [
      {
        name: "Ahmad",
        text: "Great comment!",
        replies: [
          {
            name: "Mohammad",
            text: "That's awesome!",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Uzair",
    text: "This is a comment",
    id: 100,
    replies: [
      {
        name: "Ahmad",
        text: "Great comment!",
        replies: [
          {
            name: "Mohammad",
            text: "That's awesome!",
            replies: [],
          },
        ],
      },
    ],
  },
];

const Comment = ({ comment }) => {
  return (
    <div className="border border-gray-400 rounded-lg p-2 m-2 flex flex-row gap-1">
      <img
        className="h-8"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s"
        alt="user-icon"
      />
      <div>
        <h3 className="font-bold">{comment.name}</h3>
        <p>{comment.text}</p>
      </div>
    </div>
  );
};
const CommentList = ({ comments }) => {
  return comments.map((comment) => (
    <div className="border-l-2 border-gray-400 py-2 m-2" key={comment.id}>
      <Comment comment={comment} />
      <div className="ml-4">
        <CommentList comments={comment.replies} />
      </div>
    </div>
  ));
};
const CommentContainer = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold">Comments</h1>
      <CommentList comments={CommentData} />
    </div>
  );
};

export default CommentContainer;
