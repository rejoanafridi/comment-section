export const CommentInitialData = [
    {
        vote: 10,
        username: 'amyrobson',
        userImage: 'https://picsum.photos/id/237/100/100',
        content: 'This is a great post!',
        timestamp: '1 month ago',
        replies: [] // Array for nested replies (optional)
    },
    {
        vote: 8,
        username: 'maxblagun',
        userImage: 'https://picsum.photos/id/1024/100/100',
        content: "I agree! It's very informative.",
        timestamp: '2 month ago',
        replies: [
            {
                vote: 4,
                username: 'johndoe',
                userImage: 'https://picsum.photos/id/1024/100/100',
                content: 'Thanks for sharing your thoughts!',
                timestamp: '2 month ago',
                replies: [] // Empty replies array (optional)
            },
            {
                vote: 0,
                username: 'Rejoan Islam',
                userImage: '/images/profile=afridi.webp',
                content: 'Commenting for better reach..',
                timestamp: '2 month ago',
                replies: [] // Empty replies array (optional)
            }
        ]
    }
]
