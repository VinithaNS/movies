import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';

import { useState } from "react";

export function Counter() {

  const [ like, setLike ] = useState(0);
  const [ dislike, setDisLike ] = useState(0);
  return (
    <div className="movie-like">
      <IconButton
        className="like-dislike"
        onClick={() => setLike(like + 1)}
        aria-label="like button"
        color="primary">
        <Badge badgeContent={like} color="primary">
          👍
        </Badge>
      </IconButton>

      <IconButton
        className="like-dislike"
        onClick={() => setDisLike(dislike + 1)}
        aria-label="dislike button"
        color="error">
        <Badge badgeContent={dislike} color="error">
          👎
        </Badge>
      </IconButton>
    </div>
  );
}