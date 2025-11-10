import { query } from '$app/server';

export const queryA = query(() => {
    return "A";
  });


export const queryB = query(() => {
    return "B";
  });