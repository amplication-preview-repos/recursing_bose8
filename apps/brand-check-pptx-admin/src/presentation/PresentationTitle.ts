import { Presentation as TPresentation } from "../api/presentation/Presentation";

export const PRESENTATION_TITLE_FIELD = "filePath";

export const PresentationTitle = (record: TPresentation): string => {
  return record.filePath?.toString() || String(record.id);
};
