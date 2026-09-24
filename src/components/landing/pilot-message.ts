export function buildPilotMessage(audience: string, note: string) {
  const choice = audience === "A loved one" ? "A loved one" : "Myself";
  const trimmed = note.trim();
  return `Who is this for: ${choice}${trimmed ? `\n\n${trimmed}` : ""}`;
}
