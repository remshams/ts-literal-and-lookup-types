export {};

const postTypes = ['article', 'podcast'] as const;
type PostTypes = typeof postTypes[number];
