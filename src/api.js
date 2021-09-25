export const getComments = async () => {


    //The primary data when rendered is stored here but ideally will be fetched from the backend
    return [
        {
            id: "1",
            body: "Dude Im so pumped up for the event",
            username: "Jack",
            userId: "1",
            parentId: null,
            email: "jackhampton@gmail.com",
            createdAt: "2021-08-22T23:00:33.010+02:00",
        },
        {
            id: "2",
            body: "Can someone help me with accomodation? and provide me some information?",
            username: "Craig",
            userId: "2",
            parentId: null,
            email: "Craigcaldwell@gmail.com",
            createdAt: "2021-08-22T23:00:33.010+02:00",
        },
        {
            id: "3",
            body: "Yeah right!! I can totally relate",
            username: "Taylor",
            userId: "2",
            parentId: "1",
            email: "Taylorhampton@gmail.com",
            createdAt: "2021-08-22T23:00:33.010+02:00",
        },
        {
            id: "4",
            body: "I have some arrangements, maybe I can help. Message ME!!",
            username: "Adama",
            userId: "2",
            parentId: "2",
            email: "Adamahampton@gmail.com",
            createdAt: "2021-08-16T22:00:33.010+02:00",
        },
    ];
};

export const createComment = async (text, parentId = null) => {
    return {
        id: Math.random().toString(36).substr(2, 9),
        body: text,
        parentId,
        userId: "1",
        username: "John",
        email: "jackhampton@gmail.com",
        createdAt: new Date().toISOString(),
    };
};

export const updateComment = async (text) => {
    return { text };
};

export const deleteComment = async () => {
    return {};
};