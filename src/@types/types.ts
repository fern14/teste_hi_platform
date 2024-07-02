export type Child = {
  id: string;
  name: string;
  children: Record<string, Child>;
  level: number;
};

export type ChildState = {
  checked: boolean;
  indeterminate: boolean;
  expanded: boolean;
};