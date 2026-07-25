import { PostDtoResponse } from "@/modules/Posts/data/dtos/post.dto";
import rawData from "./data.json";

// In-memory data store initialized from the JSON file
let mockDatabase: PostDtoResponse[] = [...rawData.data];

const DELAY = 800; // Simulated network delay in milliseconds

/**
 * Helper to simulate network latency
 */
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Simulates a GET request to fetch all Posts.
 * Returns a copy of the list to prevent direct mutation.
 */
export const fetchPosts = async (): Promise<PostDtoResponse[]> => {
  await sleep(DELAY);
  return [...mockDatabase];
};

/**
 * Simulates a GET request to fetch a single Post by ID.
 */
export const fetchPostById = async (
  id: number,
): Promise<PostDtoResponse | null> => {
  await sleep(DELAY);
  const Post = mockDatabase.find((p) => p.id === id);
  return Post ? { ...Post } : null;
};

/**
 * Simulates a POST request to create a new Post.
 */
export const createPost = async (
  Post: Omit<PostDtoResponse, "id">,
): Promise<PostDtoResponse> => {
  await sleep(DELAY);
  const newPost: PostDtoResponse = {
    ...Post,
    id: Math.random(), // Simple unique ID generator
  };
  mockDatabase.unshift(newPost); // Add to the beginning of the list
  return { ...newPost };
};

/**
 * Simulates a PUT request to update an existing post.
 */
export const updatePost = async (
  id: number,
  updatedFields: Partial<Omit<PostDtoResponse, "id">>,
): Promise<PostDtoResponse> => {
  await sleep(DELAY);
  const index = mockDatabase.findIndex((p) => p.id === id);
  if (index === -1) {
    throw new Error(`Post with ID ${id} not found.`);
  }

  mockDatabase[index] = {
    ...mockDatabase[index],
    ...updatedFields,
  };
  return { ...mockDatabase[index] };
};

/**
 * Simulates a DELETE request to remove a Post.
 */
export const deletePost = async (id: number): Promise<{ success: boolean }> => {
  await sleep(DELAY);
  const initialLength = mockDatabase.length;
  mockDatabase = mockDatabase.filter((p) => p.id !== id);

  if (mockDatabase.length === initialLength) {
    throw new Error(`Post with ID ${id} not found.`);
  }

  return { success: true };
};

/**
 * Resets the in-memory database back to the original seed data from data.json.
 */
export const resetDatabase = (): void => {
  mockDatabase = [...rawData.data];
};
