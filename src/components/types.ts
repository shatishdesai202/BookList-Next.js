export interface Book {
  title?: string;
  description?: string;
  discountRate?: string;
  coverImage?: string;
  price?: number;
  bookIndex?: number;
}

export interface ApiResponse {
  hasNext: boolean;
  totalPage: number;
  data: Book[];
}

export interface HeaderProps {
  title?: string;
  isProfileIconShow?: boolean;
  isNavigationEnable?: boolean;
}

export interface UserProps {
  profilePicture: string;
}

export interface CommentDescriptionProps {
  isLikeShow?: boolean;
  isCommentsCountShow?: boolean;
  commentDesc?: string;
}

export interface CommentTitleProps {
  profileAvatar: string;
  isGreenTick?: boolean;
  userName: string;
  userType: string;
}

export interface Comments extends CommentTitleProps, CommentDescriptionProps {
  isFirstComment?: boolean;
}
