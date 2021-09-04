export {};

type Author = {
  firstName: string;
  lastName: string;
};
type Post = {
  title: string;
  description: string;
  views: number;
  author: Author;
};

type PostStringKeys = {
  [P in keyof Post]: Post[P] extends string ? P : never;
}[keyof Post];

type KeysOfType<T, K> = { [P in keyof T]: T[P] extends K ? P : never }[keyof T];
type PostStringKeys2 = KeysOfType<Post, string>;
type PostNumberKeys = KeysOfType<Post, number>;
type PostStringAndAuthorKeys = KeysOfType<Post, number | Author>;
