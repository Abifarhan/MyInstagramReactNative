export interface Post {
  id: string;
  user: {
    name: string;
    avatar: string;
  };
  timestamp: string;
  text: string;
  image?: string;
  video?: string;
  comments: string[];
  likes: number;
}
