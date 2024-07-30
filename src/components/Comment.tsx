import { Comment } from '../types/item';
import { StyledComment, CommentInfo, CommentToggle, CommentContent } from '../styles';
import { useState } from 'react';

interface CommentProps {
  comment: Comment;
}

export const CommentEntry: React.FC<CommentProps> = ({ comment }: CommentProps) => {
  const [isHidden, setIsHidden] = useState(true);

  const text = comment.content.includes('[') ? '' : comment.content;

  return (
    <StyledComment $indentLevel={comment.level}>
      {text !== '' ? (
        <CommentInfo>
          <span>{comment.user}</span>
          <span>{comment.time_ago}</span>
          <CommentToggle onClick={() => setIsHidden(!isHidden)}>
            {!isHidden ? 'скрыть' : comment.comments_count > 0 ? ` | [${comment.comments_count} комментария]` : ''}
          </CommentToggle>
        </CommentInfo>
      ) : (
        <></>
      )}
      {isHidden ? (
        <CommentContent dangerouslySetInnerHTML={{ __html: text }} />
      ) : (
        <>
          <CommentContent dangerouslySetInnerHTML={{ __html: text }} />
          {comment.comments.map((comment) => {
            return <CommentEntry key={comment.id} comment={comment} />;
          })}
        </>
      )}
    </StyledComment>
  );
};
