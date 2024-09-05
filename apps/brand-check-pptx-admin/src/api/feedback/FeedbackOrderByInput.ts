import { SortOrder } from "../../util/SortOrder";

export type FeedbackOrderByInput = {
  createdAt?: SortOrder;
  feedbackMessage?: SortOrder;
  id?: SortOrder;
  presentationId?: SortOrder;
  updatedAt?: SortOrder;
};
