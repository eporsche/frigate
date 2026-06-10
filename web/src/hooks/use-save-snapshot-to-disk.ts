import axios from "axios";
import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";

/**
 * Returns a callback that saves the recording frame at the given timestamp
 * to the save_to_disk folder on the Frigate server.
 */
export function useSaveSnapshotToDisk(camera: string) {
  const { t } = useTranslation(["components/player"]);

  return useCallback(
    async (frameTime: number) => {
      try {
        const resp = await axios.post(
          `/${camera}/recordings/${frameTime}/save`,
        );
        toast.success(
          t("toast.success.savedSnapshotToDisk", { file: resp.data.file }),
          { position: "top-center" },
        );
      } catch {
        toast.error(t("toast.error.saveSnapshotToDiskFailed"), {
          position: "top-center",
        });
      }
    },
    [camera, t],
  );
}
