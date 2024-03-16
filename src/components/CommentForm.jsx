/* eslint-disable react/prop-types */
import { useState } from "react"
import Button from "./Button/Button"

const CommentForm = ({ setData, commentReply }) => {
    const [formState, setFormState] = useState(commentReply ?? {})


    const handleFormState = (e) => {
        setFormState(e.target.value)
    }

    const updateCommentReplies = (comment, updateFn) => {
        return {
            ...comment,
            replies: updateFn(comment.replies),
        };
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formState.username === "") {
            return;
        }

        const date = new Date();
        const newReply = {
            content: formState,
            username: 'Rejoan Islam',
            vote: 0,
            userImage: '/images/profile=afridi.webp',
            timestamp: date.toLocaleTimeString(),
        };

        setData((prevState) => {
            return prevState.map((comment) =>

                comment.username == "maxblagun"
                    ? updateCommentReplies(comment, (replies) => [...replies, newReply])
                    : comment
            );
        });

        setFormState({ username: "" });
    };



    return (
        <>
            <div className="bg-white p-6 rounded-md shadow-md min-h-28 w-2/4 mx-auto">


                <div className="flex items-start gap-3">
                    <img className="rounded-full" src={"/images/profile=afridi.webp"} height={25} width={25} />

                    <form onSubmit={handleSubmit} className="flex w-full gap-3">
                        <textarea value={formState.username} onChange={handleFormState} className="w-full p-4 border border-slate-200 text-slate-500 outline-none rounded-md" placeholder="Add a comment..."></textarea>
                        <Button type="submit" className="w-24 px-2 py-1" text="Send" />
                    </form>
                </div>
            </div>
        </>
    )
}

export default CommentForm