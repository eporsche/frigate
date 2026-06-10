from pydantic import Field

from .base import FrigateBaseModel

__all__ = ["SaveToDiskConfig"]


class SaveToDiskConfig(FrigateBaseModel):
    enabled: bool = Field(
        default=False,
        title="Enable saving the current video frame to a folder on the Frigate server.",
    )
    path: str = Field(
        default="/media/frigate/snapshots",
        title="Directory on the Frigate server where saved frames are written.",
    )
