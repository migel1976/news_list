import { useState } from 'react';
import { NewsItem } from '../types/item';
import { StyledComment, CommentInfo, CommentToggle, CommentContent } from './Comment.styles';

interface CommentProps {
  key: number;
  comment: NewsItem;
}

function Comment({ comment }: CommentProps) {
  const [isHidden, setIsHidden] = useState(true);

  return (
    <StyledComment $indentLevel={comment.level}>
      <CommentInfo>
        <span>{comment.user}</span>
        <span>{comment.time_ago}</span>
        <CommentToggle onClick={() => setIsHidden(!isHidden)}>
          {!isHidden ? 'скрыть' : comment.comments_count > 0 ? ` | [${comment.comments_count} комментария]` : ''}
        </CommentToggle>
      </CommentInfo>
      {isHidden || comment.level > 1 ? (
        <CommentContent dangerouslySetInnerHTML={{ __html: comment.content }} />
      ) : (
        <>
          <CommentContent dangerouslySetInnerHTML={{ __html: comment.content }} />
          {comment.comments.map((comment) => {
            return <Comment key={comment.id} comment={comment} />;
          })}
        </>
      )}
    </StyledComment>
  );
}

export default Comment;
