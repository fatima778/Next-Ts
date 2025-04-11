// Basic Types
export const userName: string = "Fatima";
export const age: number = 22;
export const isActive: boolean = true;

// Array Types
export const skills: string[] = ["React", "TypeScript", "Next.js"];

// Tuple Types
export const userTuple: [number, string, boolean] = [1, "Fatima", true];

// Enum Types
export enum UserRole {
  Admin = "Admin",
  Editor = "Editor",
  Viewer = "Viewer",
}

// Union Types
export type ID = string | number;

// Type Aliases
export type Status = "active" | "inactive" | "pending";

// Interface
export interface User {
  id: ID;
  name: string;
  email: string;
  role: UserRole;
  status: Status;
}

// Literal Types
export type Theme = "light" | "dark";

// Intersection Types
interface Address {
  city: string;
  country: string;
}

export type FullUser = User & Address;

// Generics
export const getFirstItem = <T>(items: T[]): T => {
  return items[0];
};
