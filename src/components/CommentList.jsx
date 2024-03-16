import { useState } from "react"
import CommentCard from "./Card/CommentCard"
import CommentForm from "./CommentForm"
import { CommentInitialData } from "../utils/CommentInitialData"

const CommentList = () => {

    const [data, setData] = useState(CommentInitialData)
    const [commentReply, setCommentReply] = useState(null)
    console.log(commentReply)
    return (
        <div className="flex flex-col gap-4">
            {
                data.map((comment, id) => <CommentCard key={id} comment={comment} id={id} setCommentReply={setCommentReply} />)
            }


            <CommentForm data={data} setData={setData} setCommentReply={setCommentReply} commentReply={commentReply} />

        </div>
    )
}

export default CommentList