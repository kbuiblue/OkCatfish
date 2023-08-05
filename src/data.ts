export interface Cat {
    name: string
    avatar: string[]
    age: number
    intro: string
    hasBeenSwiped: false
    hasBeenLiked: false
}

export interface Cats {
    [key: string] : Cat
}

export const catsData : Cats = {
    nana: {
        name: "Nana",
        avatar: [
            "https://i.imgur.com/kYHpHMA.jpg",
            "https://i.imgur.com/JIv00fB.jpg",
            "https://i.imgur.com/KCX4wfN.jpg",
        ],
        age: 25,
        intro: "If you don't swipe right, I'll cry 😢",
        hasBeenSwiped: false,
        hasBeenLiked: false,
    },
    beluga: {
        name: "Beluga",
        avatar: ["https://i.imgur.com/EaSS6GR.jpg"],
        age: 19,
        intro: "Yup, that's my owner. U can meet him if you want",
        hasBeenSwiped: false,
        hasBeenLiked: false,
    },
    smudge: {
        name: "Smudge",
        avatar: [
            "https://i.imgur.com/g4GrGhc.jpg",
            "https://i.imgur.com/4K4s3ti.jpg",
        ],
        age: 33,
        intro: "How you doin?",
        hasBeenSwiped: false,
        hasBeenLiked: false,
    },
    pop: {
        name: "Pop",
        avatar: [
            "https://i.imgur.com/YH5Dx34.jpg",
            "https://i.imgur.com/3PcqG2y.jpg",
        ],
        age: 20,
        intro: "POP!",
        hasBeenSwiped: false,
        hasBeenLiked: false,
    },
};