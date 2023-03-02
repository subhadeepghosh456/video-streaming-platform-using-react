import React from "react";

const CommentsData = [
  {
    name: "Subhadeep Ghosh",
    text: "Lorem ipsum dolor sit amet, consecteture adip",
    repplies: [
      {
        name: "Subhadeep Ghosh",
        text: "Lorem ipsum dolor sit amet, consecteture adip",
        repplies: [],
      },
    ],
  },
  {
    name: "Subhadeep Ghosh",
    text: "Lorem ipsum dolor sit amet, consecteture adip",
    repplies: [
      {
        name: "Subhadeep Ghosh",
        text: "Lorem ipsum dolor sit amet, consecteture adip",
        repplies: [
          {
            name: "Subhadeep Ghosh",
            text: "Lorem ipsum dolor sit amet, consecteture adip",
            repplies: [
                {
                    name: "Subhadeep Ghosh",
                    text: "Lorem ipsum dolor sit amet, consecteture adip",
                    repplies: [],
                },
                {
                    name: "Subhadeep Ghosh",
                    text: "Lorem ipsum dolor sit amet, consecteture adip",
                    repplies: [
                        {
                            name: "Subhadeep Ghosh",
                            text: "Lorem ipsum dolor sit amet, consecteture adip",
                            repplies: [],
                        }
                    ],
                }
            ],
          },
        ],
      },
      {
        name: "Subhadeep Ghosh",
        text: "Lorem ipsum dolor sit amet, consecteture adip",
        repplies: [
          {
            name: "Subhadeep Ghosh",
            text: "Lorem ipsum dolor sit amet, consecteture adip",
            repplies: [
              {
                name: "Subhadeep Ghosh",
                text: "Lorem ipsum dolor sit amet, consecteture adip",
                repplies: [
                    {
                        name: "Subhadeep Ghosh",
                        text: "Lorem ipsum dolor sit amet, consecteture adip",
                        repplies: [],
                    },
                    {
                        name: "Subhadeep Ghosh",
                        text: "Lorem ipsum dolor sit amet, consecteture adip",
                        repplies: [],
                    },
                    {
                        name: "Subhadeep Ghosh",
                        text: "Lorem ipsum dolor sit amet, consecteture adip",
                        repplies: [
                            {
                                name: "Subhadeep Ghosh",
                                text: "Lorem ipsum dolor sit amet, consecteture adip",
                                repplies: [
                                    {
                                        name: "Subhadeep Ghosh",
                                        text: "Lorem ipsum dolor sit amet, consecteture adip",
                                        repplies: [
                                            {
                                                name: "Subhadeep Ghosh",
                                                text: "Lorem ipsum dolor sit amet, consecteture adip",
                                                repplies: [],
                                            }
                                        ],
                                    }
                                ],
                            }
                        ],
                    }
                ],
              },
            ],
          },
        ],
      },
      {
        name: "Subhadeep Ghosh",
        text: "Lorem ipsum dolor sit amet, consecteture adip",
        repplies: [],
      },
    ],
  },
  {
    name: "Subhadeep Ghosh",
    text: "Lorem ipsum dolor sit amet, consecteture adip",
    repplies: [
      {
        name: "Subhadeep Ghosh",
        text: "Lorem ipsum dolor sit amet, consecteture adip",
        repplies: [],
      },
      {
        name: "Subhadeep Ghosh",
        text: "Lorem ipsum dolor sit amet, consecteture adip",
        repplies: [],
      },
      {
        name: "Subhadeep Ghosh",
        text: "Lorem ipsum dolor sit amet, consecteture adip",
        repplies: [],
      },
    ],
  },
  {
    name: "Subhadeep Ghosh",
    text: "Lorem ipsum dolor sit amet, consecteture adip",
    repplies: [
      {
        name: "Subhadeep Ghosh",
        text: "Lorem ipsum dolor sit amet, consecteture adip",
        repplies: [],
      },
      {
        name: "Subhadeep Ghosh",
        text: "Lorem ipsum dolor sit amet, consecteture adip",
        repplies: [],
      },
      {
        name: "Subhadeep Ghosh",
        text: "Lorem ipsum dolor sit amet, consecteture adip",
        repplies: [],
      },
    ],
  },
  {
    name: "Subhadeep Ghosh",
    text: "Lorem ipsum dolor sit amet, consecteture adip",
    repplies: [
      {
        name: "Subhadeep Ghosh",
        text: "Lorem ipsum dolor sit amet, consecteture adip",
        repplies: [],
      },
      {
        name: "Subhadeep Ghosh",
        text: "Lorem ipsum dolor sit amet, consecteture adip",
        repplies: [],
      },
      {
        name: "Subhadeep Ghosh",
        text: "Lorem ipsum dolor sit amet, consecteture adip",
        repplies: [],
      },
      {
        name: "Subhadeep Ghosh",
        text: "Lorem ipsum dolor sit amet, consecteture adip",
        repplies: [],
      },
    ],
  },
  {
    name: "Subhadeep Ghosh",
    text: "Lorem ipsum dolor sit amet, consecteture adip",
    repplies: [
      {
        name: "Subhadeep Ghosh",
        text: "Lorem ipsum dolor sit amet, consecteture adip",
        repplies: [],
      },
      {
        name: "Subhadeep Ghosh",
        text: "Lorem ipsum dolor sit amet, consecteture adip",
        repplies: [],
      },
      {
        name: "Subhadeep Ghosh",
        text: "Lorem ipsum dolor sit amet, consecteture adip",
        repplies: [],
      },
      {
        name: "Subhadeep Ghosh",
        text: "Lorem ipsum dolor sit amet, consecteture adip",
        repplies: [],
      },
    ],
  },
];

const Comment = ({ data }) => {
  const { name, text } = data;
  return (
    <div className="flex">
      <img
        className="h-8 w-8"
        alt="user"
        src="https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((cmnt, index) => (
    <div>
      <Comment key={index} data={cmnt} />
      <div className="pl-5 ml-5 border border-l-black">
        <CommentsList comments={cmnt.repplies} />
      </div>
    </div>
  ));
};

const Comments = () => {
  return (
    <div className="">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <CommentsList comments={CommentsData} />
    </div>
  );
};

export default Comments;
