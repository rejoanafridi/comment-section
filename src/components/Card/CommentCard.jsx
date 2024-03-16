
import { useState } from "react";
import { FaReply } from "react-icons/fa";
import { FiMinus, FiPlus } from "react-icons/fi";
import Button from "../Button/Button";
import { MdDelete, MdEdit } from "react-icons/md";
const CommentMetadata = ({ image, username, timestamp }) => {
    const myComment = username === "Rejoan Islam"
    return (
        <div className="flex gap-3 items-center">
            <img className="rounded-full" src={image} height={25} width={25} />
            <h3 className="font-bold text-base text-neutral-700">{username}</h3>
            {myComment && <Button text="you" className="rounded-sm px-2" />}
            <p className="text-slate-500 text-sm">{timestamp.toString()}</p>

        </div>
    );
};

const CommentActions = ({ id, username, setCommentReply }) => {
    const myComment = username === "Rejoan Islam"

    return (
        <>
            {
                myComment ? <div className="flex items-center gap-3">
                    <p className="text-red-500 flex gap-2 items-center font-semibold"><MdDelete /> Delete</p>
                    <p onClick={() => setCommentReply({ id: id, edit: true, username: username, })} className="text-indigo-700 flex gap-2 items-center font-semibold"><MdEdit /> Edit</p>
                </div> :
                    <h3 onClick={() => setCommentReply({ id: id, username: username })} className="text-indigo-700 font-semibold flex items-center gap-2 cursor-pointer hover:text-indigo-500">
                        <FaReply size={14} /> Reply
                    </h3>
            }
        </>
    );
};

const CommentContent = ({ content, mention = false }) => {
    return <p className="text-slate-500"> <span className="text-indigo-700 font-bold">{mention && `@`}{mention}</span> {content}</p>;
};

const VoteControls = ({ vote }) => {
    const [voteCount, setVoteCount] = useState(vote);

    const incrementVote = () => {
        setVoteCount(voteCount + 1);
    };

    const decrementVote = () => {
        setVoteCount(voteCount > 0 ? voteCount - 1 : 0);
    };

    return (
        <div className="bg-slate-50 p-2 rounded-md flex flex-col items-center gap-2">
            <FiPlus className="text-indigo-200 cursor-pointer" onClick={incrementVote} />
            <span className="text-indigo-700 font-semibold">{voteCount}</span>
            <FiMinus className="text-indigo-200 cursor-pointer" onClick={decrementVote} />
        </div>
    );
};

const SingleComment = ({ userImage, username, timestamp, content, id, vote, setCommentReply, mention }) => {
    return (
        <div className="flex gap-4">
            <VoteControls vote={vote} />
            <div className="content w-full flex flex-col gap-2">
                <div className="flex justify-between items-center">
                    <CommentMetadata image={userImage} username={username} timestamp={timestamp} />
                    <CommentActions mention={mention} id={id} username={username} setCommentReply={setCommentReply} />
                </div>
                <CommentContent content={content} mention={mention} />
            </div>
        </div>
    );
};

const CommentCard = ({ comment, id, setCommentReply }) => {

    return (
        <div className="w-2/4 mx-auto">
            <div className="bg-white p-6 rounded-md shadow-md min-h-28 mx-auto">
                <SingleComment {...comment} id={id} setCommentReply={setCommentReply} />
            </div>
            {comment?.replies?.length > 0 && comment?.replies?.map((reply, id) => (
                <div key={id} className="flex ml-10 ">
                    <div className="border-l border-slate-200"></div>
                    <div className="ml-20 w-full bg-white mt-4 p-6 rounded-md shadow-md min-h-28 mx-auto">
                        <SingleComment setCommentReply={setCommentReply} mention={comment.username} {...reply} />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CommentCard;
