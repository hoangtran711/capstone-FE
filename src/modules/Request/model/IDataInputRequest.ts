export interface IDataInputRequest {
  projectId: string;
  reason: string;
  proof: File[];
  type: string;
  date: string;
}

export interface IDataInputFilter {
  search: string;
  status: string;
  type: string;
}
