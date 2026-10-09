export function normalizeKey(key: string): string {
  return key.replace(/[\s​-‍⁠﻿]/g, "").toLowerCase();
}
