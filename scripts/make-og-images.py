#!/usr/bin/env python3
"""Draw the link card images in public/og/. Run from the repository root: python3 scripts/make-og-images.py

Text is limited to product names, so one image serves all six languages.
Names only, no real logos (see the trademark rule in CLAUDE.md). Needs Pillow and Noto Sans.
"""
from __future__ import annotations

from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

WIDTH, HEIGHT = 1200, 675
FONT = "/usr/share/fonts/truetype/noto/NotoSans-Bold.ttf"
INK, MUTED, EMPTY = "#f5f5f4", "#a8a29e", "#44403c"
BACKGROUND = "#1c1917"

# file name, big text, stage number (0 = whole site), accent colour
CARDS = [
    ("home", "hello-ai", 0, "#f59e0b"),
    ("00-common", "LLM", 1, "#f59e0b"),
    ("11-chatgpt", "ChatGPT", 2, "#34d399"),
    ("10-claude", "Claude", 2, "#fb923c"),
    ("12-gemini", "Gemini", 2, "#60a5fa"),
    ("20-claude-code", "Claude Code", 3, "#fb923c"),
    ("23-claude-code-cli", "Claude Code CLI", 3, "#fb923c"),
    ("21-codex", "Codex", 3, "#34d399"),
    ("22-antigravity", "Antigravity", 3, "#60a5fa"),
    ("30-ai-sdlc", "AI-SDLC", 4, "#c084fc"),
]


def draw_card(name: str, text: str, stage: int, accent: str) -> None:
    image = Image.new("RGB", (WIDTH, HEIGHT), BACKGROUND)
    draw = ImageDraw.Draw(image)
    draw.rectangle((0, 0, 24, HEIGHT), fill=accent)
    draw.text((96, 250), text, font=ImageFont.truetype(FONT, 124), fill=INK, anchor="lm")
    if stage:
        draw.text((96, 76), "hello-ai", font=ImageFont.truetype(FONT, 40), fill=MUTED, anchor="lm")
    # four steps of the roadmap; the page's stage and those before it are filled
    for step in range(4):
        left = 96 + step * 150
        filled = stage == 0 or step < stage
        draw.rounded_rectangle((left, 470, left + 130, 486), radius=8, fill=accent if filled else EMPTY)
        label = ImageFont.truetype(FONT, 34)
        draw.text((left, 530), str(step + 1), font=label, fill=INK if step + 1 == stage else MUTED, anchor="lm")
    image.save(Path("public/og") / f"{name}.png", optimize=True)


if __name__ == "__main__":
    for card in CARDS:
        draw_card(*card)
