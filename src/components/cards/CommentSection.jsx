import { useState } from 'react';
import { Send } from 'lucide-react';
import './CommentSection.css';

function CommentSection({ comments }) {
  const [newComment, setNewComment] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setNewComment('');
  };

  return (
    <div className="comment-section">
      <h3 className="comment-title">Comments</h3>
      
      <div className="comments-list">
        {comments.map((comment) => (
          <div key={comment.id} className="comment-item">
            <div className="comment-avatar">
              <span>{comment.initials}</span>
            </div>
            <div className="comment-content">
              <div className="comment-header">
                <span className="comment-author">{comment.author}</span>
                <span className="comment-date">{comment.date}</span>
              </div>
              <p className="comment-text">{comment.content}</p>
            </div>
          </div>
        ))}
      </div>

      <form className="comment-form" onSubmit={handleSubmit}>
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Write a comment..."
          rows={3}
        />
        <button type="submit" className="comment-submit">
          <Send size={16} />
          <span>Post Comment</span>
        </button>
      </form>
    </div>
  );
}

export default CommentSection;
