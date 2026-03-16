import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import type { LeadInput } from "@/lib/validation";

export type StoredLead = LeadInput & {
  id: string;
  createdAt: string;
};

const dataDir = path.join(process.cwd(), "data");
const leadsFile = path.join(dataDir, "leads.json");

export async function saveLead(lead: LeadInput) {
  await mkdir(dataDir, { recursive: true });

  let current: StoredLead[] = [];
  try {
    const existing = await readFile(leadsFile, "utf8");
    current = JSON.parse(existing) as StoredLead[];
  } catch {
    current = [];
  }

  const item: StoredLead = {
    ...lead,
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString()
  };

  current.push(item);
  await writeFile(leadsFile, JSON.stringify(current, null, 2), "utf8");

  return item;
}
