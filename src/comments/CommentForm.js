import { useState } from "react";

//defining the function Commentform for default form that will accept the text for creating a post

function CommentForm({
    handleSubmit, submitLabel, hasCancelButton = false, handleCancel, initialText = "",
}) {
    const [text, setText] = useState(initialText);
    const isTextareaDisabled = text.length === 0;

    const onSubmit = (event) => {
        event.preventDefault();
        handleSubmit(text);
        setText("");
    };

    //Markup for executing form actions that collects the post information and post it as the first post
    return (
        <form className="form" onSubmit={onSubmit}>
            <textarea
                className="comment-form-textarea"
                placeholder="What are your thoughts?"
                value={text}
                onChange={(e) => setText(e.target.value)} />
            <button className="comment-form-button" disabled={isTextareaDisabled}>
                {submitLabel}
            </button>
            {hasCancelButton && (
                <button
                    type="button"
                    className="comment-form-button comment-form-cancel-button"
                    onClick={handleCancel}
                >
                    Cancel
                </button>
            )}
        </form>
    );
}

export default CommentForm;