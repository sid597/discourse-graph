import { OnloadArgs } from "roamjs-components/types";
import { DEFAULT_CANVAS_PAGE_FORMAT } from "..";

export const isCanvasPage = ({
  title,
  extensionAPI,
}: {
  title: string;
  extensionAPI: OnloadArgs["extensionAPI"];
}) => {
  const formatInSettings = extensionAPI.settings.get("canvas-page-format");
  const format = formatInSettings || DEFAULT_CANVAS_PAGE_FORMAT;
  const canvasRegex = new RegExp(`^${format}$`.replace(/\*/g, ".+"));
  return canvasRegex.test(title);
};