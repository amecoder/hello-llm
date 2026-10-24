"""Draw numbered red boxes on ChatGPT screenshots so the text can say "①" instead of describing positions.

usage: python3 docs/tools/mark-shots.py   (reads docs/tools/shot-marks.json, writes guide/11-chatgpt/assets/<name>.png)
"""
from __future__ import annotations

import json
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[2]
ASSETS = ROOT / "guide/11-chatgpt/assets"
SPEC = Path(__file__).with_name("shot-marks.json")
FONT = "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"
RED = (229, 57, 53)
COLUMN = 650  # px the guide column shows an image at; wider images are shrunk to it


def badge_center(box: tuple[int, int, int, int], size: tuple[int, int], R: int) -> tuple[int, int]:
    x1, y1, x2, y2 = box
    w, h = size
    cy = min(max((y1 + y2) // 2, R + 1), h - R - 1)
    if x1 - R * 2 - 4 >= 0:
        return x1 - R - 4, cy
    if x2 + R * 2 + 4 <= w:
        return x2 + R + 4, cy
    return min(max(x1 + R + 2, R + 1), w - R - 1), min(max(y1 - R - 2, R + 1), h - R - 1)


def mark(name: str, entry: dict) -> Path:
    im = Image.open(ASSETS / f"{entry['src']}.png").convert("RGB")
    dx = dy = 0
    if "crop" in entry:
        dx, dy = entry["crop"][:2]
        im = im.crop(tuple(entry["crop"]))
    draw = ImageDraw.Draw(im)
    scale = max(1.0, im.size[0] / COLUMN)  # keep badges readable after the page shrinks the image
    R = round(13 * scale)
    font = ImageFont.truetype(FONT, round(15 * scale))
    for n, m in enumerate(entry["marks"], start=1):
        x1, y1, x2, y2 = m[:4]
        box = (x1 - dx, y1 - dy, x2 - dx, y2 - dy)
        draw.rounded_rectangle(box, radius=6, outline=RED, width=round(3 * scale))
        cx, cy = (m[4] - dx, m[5] - dy) if len(m) == 6 else badge_center(box, im.size, R)
        draw.ellipse((cx - R, cy - R, cx + R, cy + R), fill=RED, outline=(255, 255, 255), width=round(2 * scale))
        draw.text((cx, cy), str(n), fill=(255, 255, 255), font=font, anchor="mm")
    out = ASSETS / f"{name}.png"
    im.save(out, optimize=True)
    return out


def main() -> None:
    spec = json.loads(SPEC.read_text(encoding="utf-8"))
    for name, entry in spec.items():
        if not name.startswith("_"):
            print(mark(name, entry).name)


if __name__ == "__main__":
    main()
