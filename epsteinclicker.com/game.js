const SAVE_KEY = "staticquasar931_epstein_clicker_save_v3";
const SAVE_VERSION = 3;
const BASE_PER_CLICK = 1n;
const SCORE_STEP = 10n;
const AUTO_TICKS_PER_SEC = 20n;
const TOTAL_LEVELS = 260;
const LEVEL_PREVIEW_COUNT = 30;
const MAX_BULK_STEPS = 4096;
const SAVE_PEPPER = "coleperrilliat|staticquasar931|single-screen-edition";

const CLOAKS = Object.freeze([
  Object.freeze({
    id: "mrbeast",
    name: "MrBeast",
    image: "https://cdn.jsdelivr.net/gh/StaticQuasar931/Wheres-Epstein@main/Assets/Waldos/Special/mb1.png",
    accent: "#fbbf24",
    description: "Bright, clean, and positive."
  }),
  Object.freeze({
    id: "kim",
    name: "Kim Jong Un",
    image: "https://cdn.jsdelivr.net/gh/StaticQuasar931/Wheres-Epstein@main/Assets/Waldos/Special/kju1.png",
    accent: "#f97316",
    description: "Cloaked with a bold silhouette."
  }),
  Object.freeze({
    id: "musk",
    name: "Elon Musk",
    image: "https://cdn.jsdelivr.net/gh/StaticQuasar931/Wheres-Epstein@main/Assets/Waldos/Special/mus1.png",
    accent: "#38bdf8",
    description: "Clean tech-blue cloak."
  }),
  Object.freeze({
    id: "diddy",
    name: "Diddy",
    image: "https://cdn.jsdelivr.net/gh/StaticQuasar931/Wheres-Epstein@main/Assets/Waldos/advanced/di1.png",
    accent: "#fb7185",
    description: "Alternate portrait for the click target."
  }),
  Object.freeze({
    id: "trump",
    name: "Trump",
    image: "https://cdn.jsdelivr.net/gh/StaticQuasar931/Wheres-Epstein@main/Assets/Waldos/trum1.png",
    accent: "#ef4444",
    description: "High-contrast cloak option."
  }),
  Object.freeze({
    id: "hawking",
    name: "Stephen Hawking",
    image: "https://cdn.jsdelivr.net/gh/StaticQuasar931/Wheres-Epstein@main/Assets/Waldos/steph1.png",
    accent: "#a78bfa",
    description: "Calmer purple-blue portrait lighting."
  }),
  Object.freeze({
    id: "epstein2",
    name: "Epstein 2",
    image: "https://cdn.jsdelivr.net/gh/StaticQuasar931/Wheres-Epstein@main/Assets/Waldos/eps1.png",
    accent: "#22d3ee",
    description: "Extra alternate portrait from the Waldo set."
  }),
  Object.freeze({
    id: "epstein",
    name: "Epstein",
    image: "click.png",
    accent: "#22d3ee",
    description: "Original click target."
  })
]);

const UPGRADE_CATALOG = Object.freeze([
  Object.freeze({ id: "paper_trail", name: "Paper Trail", cost: 15n, add: 1n, scaleNum: 118n, scaleDen: 100n }),
  Object.freeze({ id: "camera_crew", name: "Camera Crew", cost: 60n, add: 2n, scaleNum: 118n, scaleDen: 100n }),
  Object.freeze({ id: "speed_tape", name: "Speed Tape", cost: 180n, add: 4n, scaleNum: 118n, scaleDen: 100n }),
  Object.freeze({ id: "night_shift", name: "Night Shift", cost: 450n, add: 7n, scaleNum: 118n, scaleDen: 100n }),
  Object.freeze({ id: "rumor_mill", name: "Rumor Mill", cost: 1200n, add: 12n, scaleNum: 118n, scaleDen: 100n }),
  Object.freeze({ id: "studio_booth", name: "Studio Booth", cost: 3500n, add: 20n, scaleNum: 119n, scaleDen: 100n }),
  Object.freeze({ id: "server_closet", name: "Server Closet", cost: 9000n, add: 35n, scaleNum: 119n, scaleDen: 100n }),
  Object.freeze({ id: "microphone_wall", name: "Microphone Wall", cost: 25000n, add: 60n, scaleNum: 119n, scaleDen: 100n }),
  Object.freeze({ id: "private_archive", name: "Private Archive", cost: 65000n, add: 100n, scaleNum: 119n, scaleDen: 100n }),
  Object.freeze({ id: "neon_van", name: "Neon Van", cost: 175000n, add: 170n, scaleNum: 120n, scaleDen: 100n }),
  Object.freeze({ id: "deal_desk", name: "Deal Desk", cost: 450000n, add: 280n, scaleNum: 120n, scaleDen: 100n }),
  Object.freeze({ id: "clip_farm", name: "Viral Clip Farm", cost: 1200000n, add: 460n, scaleNum: 120n, scaleDen: 100n }),
  Object.freeze({ id: "data_locker", name: "Data Locker", cost: 3200000n, add: 760n, scaleNum: 120n, scaleDen: 100n }),
  Object.freeze({ id: "event_floor", name: "Event Floor", cost: 8500000n, add: 1250n, scaleNum: 120n, scaleDen: 100n }),
  Object.freeze({ id: "broadcast_hub", name: "Broadcast Hub", cost: 23000000n, add: 2100n, scaleNum: 120n, scaleDen: 100n }),
  Object.freeze({ id: "investor_deck", name: "Investor Deck", cost: 62000000n, add: 3500n, scaleNum: 121n, scaleDen: 100n }),
  Object.freeze({ id: "satellite_uplink", name: "Satellite Uplink", cost: 170000000n, add: 5800n, scaleNum: 121n, scaleDen: 100n }),
  Object.freeze({ id: "research_wing", name: "Research Wing", cost: 470000000n, add: 9600n, scaleNum: 121n, scaleDen: 100n }),
  Object.freeze({ id: "midnight_warehouse", name: "Midnight Warehouse", cost: 1300000000n, add: 16000n, scaleNum: 121n, scaleDen: 100n }),
  Object.freeze({ id: "signal_tower", name: "Signal Tower", cost: 3600000000n, add: 26000n, scaleNum: 121n, scaleDen: 100n }),
  Object.freeze({ id: "launch_office", name: "Launch Office", cost: 10000000000n, add: 43000n, scaleNum: 122n, scaleDen: 100n }),
  Object.freeze({ id: "district_network", name: "District Network", cost: 28000000000n, add: 71000n, scaleNum: 122n, scaleDen: 100n }),
  Object.freeze({ id: "brand_engine", name: "Brand Engine", cost: 78000000000n, add: 117000n, scaleNum: 122n, scaleDen: 100n }),
  Object.freeze({ id: "logistics_grid", name: "Logistics Grid", cost: 220000000000n, add: 193000n, scaleNum: 122n, scaleDen: 100n }),
  Object.freeze({ id: "cloud_array", name: "Cloud Array", cost: 620000000000n, add: 318000n, scaleNum: 122n, scaleDen: 100n }),
  Object.freeze({ id: "quantum_copier", name: "Quantum Copier", cost: 1750000000000n, add: 524000n, scaleNum: 123n, scaleDen: 100n }),
  Object.freeze({ id: "mirror_factory", name: "Mirror Factory", cost: 5000000000000n, add: 863000n, scaleNum: 123n, scaleDen: 100n }),
  Object.freeze({ id: "orbit_studio", name: "Orbit Studio", cost: 14000000000000n, add: 1423000n, scaleNum: 123n, scaleDen: 100n }),
  Object.freeze({ id: "timeline_forge", name: "Timeline Forge", cost: 40000000000000n, add: 2347000n, scaleNum: 123n, scaleDen: 100n }),
  Object.freeze({ id: "infinite_stage", name: "Infinite Stage", cost: 115000000000000n, add: 3870000n, scaleNum: 124n, scaleDen: 100n })
]);

const scoreEl = document.getElementById("score");
const perClickEl = document.getElementById("perClick");
const perSecEl = document.getElementById("perSec");
const upgradeCountEl = document.getElementById("upgradeCount");
const currentCloakLabelEl = document.getElementById("currentCloakLabel");
const pageTitleEl = document.getElementById("pageTitle");
const safeModeBadgeEl = document.getElementById("safeModeBadge");
const subjectHeadingEl = document.getElementById("subjectHeading");
const subjectDescriptionEl = document.getElementById("subjectDescription");
const tamperStatusEl = document.getElementById("tamperStatus");
const portraitImageEl = document.getElementById("portraitImage");
const clickBtnEl = document.getElementById("clickBtn");
const cloakSelectEl = document.getElementById("cloakSelect");
const safeModeToggleEl = document.getElementById("safeModeToggle");
const buyAllBtnEl = document.getElementById("buyAllBtn");
const resetBtnEl = document.getElementById("resetBtn");
const buyAllSummaryEl = document.getElementById("buyAllSummary");
const currentLevelEl = document.getElementById("currentLevel");
const nextLevelEl = document.getElementById("nextLevel");
const levelProgressEl = document.getElementById("levelProgress");
const progressBarEl = document.getElementById("progressBar");
const levelListEl = document.getElementById("levelList");
const shopEl = document.getElementById("shop");
const floatingLayerEl = document.getElementById("floatingLayer");
const tamperOverlayEl = document.getElementById("tamperOverlay");
const tamperMessageEl = document.getElementById("tamperMessage");
const tamperAcknowledgeBtnEl = document.getElementById("tamperAcknowledgeBtn");

let autoCarry = 0n;
let shopBuilt = false;
let saveTimer = 0;
let lastLevelRendered = -1;
let clickTimestamps = [];
const shopNodes = new Map();

function createFreshUpgradeState() {
  return UPGRADE_CATALOG.map((upgrade) => ({
    id: upgrade.id,
    name: upgrade.name,
    initialCost: upgrade.cost,
    cost: upgrade.cost,
    add: upgrade.add,
    owned: 0n,
    scaleNum: upgrade.scaleNum,
    scaleDen: upgrade.scaleDen
  }));
}

function createFreshState() {
  return {
    score10: 0n,
    perClick: BASE_PER_CLICK,
    upgradesOwned: 0n,
    selectedCloak: "epstein",
    safeMode: false,
    upgrades: createFreshUpgradeState(),
    lastBulkSummary: "Buy All uses a bounded bulk-purchase routine so it stays responsive.",
    tampered: false
  };
}

let state = createFreshState();

function commaBigInt(value) {
  const sign = value < 0n ? "-" : "";
  const text = (value < 0n ? -value : value).toString();
  return sign + text.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function formatScore10(score10) {
  const whole = score10 / SCORE_STEP;
  const tenth = score10 % SCORE_STEP;
  return `${commaBigInt(whole)}.${tenth.toString()}`;
}

function formatPerSec(perClick) {
  const whole = perClick / SCORE_STEP;
  const tenth = perClick % SCORE_STEP;
  return `${commaBigInt(whole)}.${tenth.toString()}`;
}

function nextCostFromCost(cost, upgrade) {
  const scaled = (cost * upgrade.scaleNum) / upgrade.scaleDen;
  return scaled > cost ? scaled : cost + 1n;
}

function calculateCostForOwned(upgrade, owned) {
  let cost = upgrade.initialCost;
  for (let step = 0n; step < owned; step += 1n) {
    cost = nextCostFromCost(cost, upgrade);
  }
  return cost;
}

function calculateDerivedTotals(upgrades) {
  let perClick = BASE_PER_CLICK;
  let upgradesOwned = 0n;

  for (const upgrade of upgrades) {
    perClick += upgrade.add * upgrade.owned;
    upgradesOwned += upgrade.owned;
  }

  return { perClick, upgradesOwned };
}

function sealText(text) {
  let hash = 2166136261n;
  const prime = 16777619n;

  for (let index = 0; index < text.length; index += 1) {
    hash ^= BigInt(text.charCodeAt(index));
    hash = (hash * prime) & 0xffffffffn;
  }

  return hash.toString(16).padStart(8, "0");
}

function buildSavePayload() {
  return {
    version: SAVE_VERSION,
    score10: state.score10.toString(),
    perClick: state.perClick.toString(),
    upgradesOwned: state.upgradesOwned.toString(),
    selectedCloak: state.selectedCloak,
    safeMode: state.safeMode,
    upgrades: state.upgrades.map((upgrade) => ({
      id: upgrade.id,
      owned: upgrade.owned.toString(),
      cost: upgrade.cost.toString()
    }))
  };
}

function saveGame() {
  try {
    const payload = buildSavePayload();
    const seal = sealText(`${JSON.stringify(payload)}|${SAVE_PEPPER}`);
    localStorage.setItem(SAVE_KEY, JSON.stringify({ payload, seal }));
  } catch (error) {
    console.warn("Save failed:", error);
  }
}

function clearSave() {
  try {
    localStorage.removeItem(SAVE_KEY);
  } catch (error) {
    console.warn("Failed to clear save:", error);
  }
}

function parseBigInt(value) {
  if (typeof value !== "string" || !/^-?\d+$/.test(value)) {
    return null;
  }

  try {
    return BigInt(value);
  } catch (error) {
    return null;
  }
}

function restoreStateFromPayload(payload) {
  if (!payload || payload.version !== SAVE_VERSION) {
    return { ok: false, reason: "Missing or outdated save version." };
  }

  const score10 = parseBigInt(payload.score10);
  const perClick = parseBigInt(payload.perClick);
  const upgradesOwned = parseBigInt(payload.upgradesOwned);

  if (score10 === null || perClick === null || upgradesOwned === null || score10 < 0n) {
    return { ok: false, reason: "Save numbers were invalid." };
  }

  if (!CLOAKS.some((cloak) => cloak.id === payload.selectedCloak)) {
    return { ok: false, reason: "Saved cloak reference was invalid." };
  }

  if (typeof payload.safeMode !== "boolean") {
    return { ok: false, reason: "Safe mode flag was invalid." };
  }

  const restoredUpgrades = createFreshUpgradeState();
  const upgradeLookup = new Map(restoredUpgrades.map((upgrade) => [upgrade.id, upgrade]));

  if (!Array.isArray(payload.upgrades) || payload.upgrades.length !== restoredUpgrades.length) {
    return { ok: false, reason: "Upgrade save shape was invalid." };
  }

  for (const savedUpgrade of payload.upgrades) {
    const target = upgradeLookup.get(savedUpgrade.id);
    if (!target) {
      return { ok: false, reason: "Upgrade id mismatch detected." };
    }

    const owned = parseBigInt(savedUpgrade.owned);
    const cost = parseBigInt(savedUpgrade.cost);
    if (owned === null || cost === null || owned < 0n || cost <= 0n) {
      return { ok: false, reason: "Upgrade values were invalid." };
    }

    const expectedCost = calculateCostForOwned(target, owned);
    if (expectedCost !== cost) {
      return { ok: false, reason: `Upgrade cost mismatch for ${target.name}.` };
    }

    target.owned = owned;
    target.cost = cost;
  }

  const derived = calculateDerivedTotals(restoredUpgrades);
  if (derived.perClick !== perClick || derived.upgradesOwned !== upgradesOwned) {
    return { ok: false, reason: "Save totals did not match upgrade ownership." };
  }

  return {
    ok: true,
    state: {
      score10,
      perClick,
      upgradesOwned,
      selectedCloak: payload.selectedCloak,
      safeMode: payload.safeMode,
      upgrades: restoredUpgrades,
      lastBulkSummary: "Loaded save successfully.",
      tampered: false
    }
  };
}

function loadGame() {
  let raw = null;

  try {
    raw = localStorage.getItem(SAVE_KEY);
  } catch (error) {
    console.warn("Load failed:", error);
  }

  if (!raw) {
    state = createFreshState();
    return;
  }

  try {
    const parsed = JSON.parse(raw);
    const expectedSeal = sealText(`${JSON.stringify(parsed.payload)}|${SAVE_PEPPER}`);
    if (!parsed || typeof parsed !== "object" || parsed.seal !== expectedSeal) {
      triggerTamperReset("The save signature did not match the game data.");
      return;
    }

    const restored = restoreStateFromPayload(parsed.payload);
    if (!restored.ok) {
      triggerTamperReset(restored.reason);
      return;
    }

    state = restored.state;
  } catch (error) {
    triggerTamperReset("The save file could not be read.");
  }
}

function triggerTamperReset(reason) {
  state = createFreshState();
  state.tampered = true;
  state.lastBulkSummary = "The session was reset after a tamper check.";
  autoCarry = 0n;
  lastLevelRendered = -1;
  clearSave();
  if (tamperMessageEl) {
    tamperMessageEl.textContent = `${reason} The session was reset so the game stays stable.`;
  }
  if (tamperOverlayEl) {
    tamperOverlayEl.hidden = false;
  }
  setTamperStatus("Save reset after a tamper check.", true);
  if (scoreEl) {
    renderAll();
  }
}

function setTamperStatus(message, flagged) {
  if (!tamperStatusEl) {
    return;
  }

  tamperStatusEl.textContent = message;
  tamperStatusEl.style.color = flagged ? "#fecdd3" : "#bbf7d0";
  tamperStatusEl.style.borderColor = flagged ? "rgba(251, 113, 133, 0.4)" : "rgba(74, 222, 128, 0.32)";
}

function auditRuntimeState() {
  const derived = calculateDerivedTotals(state.upgrades);
  if (derived.perClick !== state.perClick || derived.upgradesOwned !== state.upgradesOwned || state.score10 < 0n) {
    triggerTamperReset("Runtime state drift was detected.");
    return false;
  }

  for (const upgrade of state.upgrades) {
    if (calculateCostForOwned(upgrade, upgrade.owned) !== upgrade.cost) {
      triggerTamperReset(`Runtime cost drift was detected for ${upgrade.name}.`);
      return false;
    }
  }

  return true;
}

function getCloakById(id) {
  return CLOAKS.find((cloak) => cloak.id === id) || CLOAKS[CLOAKS.length - 1];
}

function getEffectiveCloak() {
  if (!state.safeMode) {
    return getCloakById(state.selectedCloak);
  }

  if (state.selectedCloak === "epstein" || state.selectedCloak === "epstein2") {
    return getCloakById("mrbeast");
  }

  return getCloakById(state.selectedCloak);
}

function formatCompactBigInt(value) {
  const units = [
    { div: 1000000000000000n, suffix: "Q" },
    { div: 1000000000000n, suffix: "T" },
    { div: 1000000000n, suffix: "B" },
    { div: 1000000n, suffix: "M" },
    { div: 1000n, suffix: "K" }
  ];

  for (const unit of units) {
    if (value >= unit.div) {
      return `${commaBigInt(value / unit.div)}${unit.suffix}`;
    }
  }

  return commaBigInt(value);
}

function calculateLevelRequirement(level) {
  if (level <= 1) {
    return 0n;
  }

  const value = BigInt(level - 1);
  return (125n * value * value * value) + (1800n * value * value) + (12000n * value);
}

function getCurrentLevel() {
  const score = state.score10 / SCORE_STEP;
  let low = 1;
  let high = TOTAL_LEVELS;

  while (low < high) {
    const mid = Math.floor((low + high + 1) / 2);
    if (score >= calculateLevelRequirement(mid)) {
      low = mid;
    } else {
      high = mid - 1;
    }
  }

  return low;
}

function getLevelProgress(level) {
  if (level >= TOTAL_LEVELS) {
    return 100;
  }

  const score = state.score10 / SCORE_STEP;
  const current = calculateLevelRequirement(level);
  const next = calculateLevelRequirement(level + 1);
  if (next <= current) {
    return 100;
  }

  const progressed = score - current;
  const total = next - current;
  const percentage = Number((progressed * 1000n) / total) / 10;
  return Math.max(0, Math.min(100, percentage));
}

function populateCloakOptions() {
  cloakSelectEl.innerHTML = "";
  for (const cloak of CLOAKS) {
    const option = document.createElement("option");
    option.value = cloak.id;
    option.textContent = cloak.name;
    cloakSelectEl.appendChild(option);
  }
}

function renderCloakSection() {
  const effectiveCloak = getEffectiveCloak();
  const headingTitle = state.safeMode
    ? "MrBeast Mode Enhanced by StaticQuasar931"
    : "Epstein Clicker Enhanced by StaticQuasar931";

  pageTitleEl.textContent = headingTitle;
  document.title = headingTitle;
  safeModeBadgeEl.textContent = `Safe Mode: ${state.safeMode ? "On" : "Off"}`;
  currentCloakLabelEl.textContent = effectiveCloak.name;
  subjectHeadingEl.textContent = `Tap ${effectiveCloak.name}`;
  subjectDescriptionEl.textContent = state.safeMode && (state.selectedCloak === "epstein" || state.selectedCloak === "epstein2")
    ? "Safe Mode swapped the Epstein portrait and label to MrBeast."
    : effectiveCloak.description;
  portraitImageEl.src = effectiveCloak.image;
  portraitImageEl.alt = `${effectiveCloak.name} portrait`;
  clickBtnEl.style.boxShadow = `inset 0 0 0 1px rgba(255,255,255,0.08), 0 28px 70px ${effectiveCloak.accent}33`;
  cloakSelectEl.value = state.selectedCloak;
  safeModeToggleEl.checked = state.safeMode;
}

function renderTopStats() {
  scoreEl.textContent = formatScore10(state.score10);
  perClickEl.textContent = commaBigInt(state.perClick);
  perSecEl.textContent = formatPerSec(state.perClick);
  upgradeCountEl.textContent = commaBigInt(state.upgradesOwned);
}

function renderProgress() {
  const currentLevel = getCurrentLevel();
  const nextRequirement = currentLevel >= TOTAL_LEVELS ? 0n : calculateLevelRequirement(currentLevel + 1);
  const progress = getLevelProgress(currentLevel);

  currentLevelEl.textContent = String(currentLevel);
  nextLevelEl.textContent = currentLevel >= TOTAL_LEVELS ? "MAX" : formatCompactBigInt(nextRequirement);
  levelProgressEl.textContent = `${progress.toFixed(1)}%`;
  progressBarEl.style.width = `${progress}%`;

  if (currentLevel !== lastLevelRendered) {
    lastLevelRendered = currentLevel;
    renderLevelPreview(currentLevel);
  }
}

function renderLevelPreview(currentLevel) {
  levelListEl.innerHTML = "";
  const end = Math.min(TOTAL_LEVELS, currentLevel + LEVEL_PREVIEW_COUNT - 1);

  for (let level = currentLevel; level <= end; level += 1) {
    const row = document.createElement("div");
    row.className = `level-item${level === currentLevel ? " active" : ""}`;

    const label = document.createElement("span");
    label.textContent = `Level ${level}`;

    const requirement = document.createElement("strong");
    requirement.textContent = level === TOTAL_LEVELS
      ? "MAX"
      : `${formatCompactBigInt(calculateLevelRequirement(level + 1))} next`;

    row.appendChild(label);
    row.appendChild(requirement);
    levelListEl.appendChild(row);
  }
}

function buildShop() {
  shopEl.innerHTML = "";
  shopNodes.clear();

  for (const upgrade of state.upgrades) {
    const row = document.createElement("article");
    row.className = "shop-row";

    const copy = document.createElement("div");
    copy.className = "shop-copy";

    const heading = document.createElement("h3");
    heading.textContent = upgrade.name;

    const details = document.createElement("p");

    copy.appendChild(heading);
    copy.appendChild(details);

    const actions = document.createElement("div");
    actions.className = "shop-actions";

    const buyOne = document.createElement("button");
    buyOne.className = "shop-btn primary";
    buyOne.type = "button";
    buyOne.addEventListener("click", () => buyUpgrade(upgrade.id));

    const buyMax = document.createElement("button");
    buyMax.className = "shop-btn secondary";
    buyMax.type = "button";
    buyMax.addEventListener("click", () => buyUpgradeMax(upgrade.id));

    actions.appendChild(buyOne);
    actions.appendChild(buyMax);

    row.appendChild(copy);
    row.appendChild(actions);
    shopEl.appendChild(row);

    shopNodes.set(upgrade.id, { details, buyOne, buyMax });
  }

  shopBuilt = true;
  refreshShop();
}

function simulateMaxPurchasePlan(upgrade, balance10) {
  let nextCost = upgrade.cost;
  let spent10 = 0n;
  let count = 0n;
  let steps = 0;

  while (steps < MAX_BULK_STEPS) {
    const purchaseCost10 = nextCost * SCORE_STEP;
    if (spent10 + purchaseCost10 > balance10) {
      break;
    }

    spent10 += purchaseCost10;
    nextCost = nextCostFromCost(nextCost, upgrade);
    count += 1n;
    steps += 1;
  }

  return { count, spent10, nextCost, capped: steps === MAX_BULK_STEPS };
}

function refreshShop() {
  if (!shopBuilt) {
    return;
  }

  for (const upgrade of state.upgrades) {
    const nodes = shopNodes.get(upgrade.id);
    if (!nodes) {
      continue;
    }

    const plan = simulateMaxPurchasePlan(upgrade, state.score10);
    nodes.details.innerHTML =
      `Owned: x${commaBigInt(upgrade.owned)}<br>` +
      `+${commaBigInt(upgrade.add)} per click<br>` +
      `Cost: $${commaBigInt(upgrade.cost)}`;
    nodes.buyOne.textContent = `Buy 1 ($${commaBigInt(upgrade.cost)})`;
    nodes.buyMax.textContent = plan.count > 0n ? `Buy Max (${commaBigInt(plan.count)})` : "Buy Max";
    nodes.buyOne.disabled = state.score10 < (upgrade.cost * SCORE_STEP);
    nodes.buyMax.disabled = plan.count === 0n;
  }
}

function updateBulkSummary(message) {
  state.lastBulkSummary = message;
  buyAllSummaryEl.textContent = message;
}

function applyPurchasePlan(upgrade, plan) {
  if (plan.count <= 0n) {
    return false;
  }

  state.score10 -= plan.spent10;
  upgrade.owned += plan.count;
  upgrade.cost = plan.nextCost;
  state.perClick += upgrade.add * plan.count;
  state.upgradesOwned += plan.count;
  return true;
}

function buyUpgrade(id) {
  const upgrade = state.upgrades.find((entry) => entry.id === id);
  if (!upgrade) {
    return;
  }

  const purchaseCost10 = upgrade.cost * SCORE_STEP;
  if (state.score10 < purchaseCost10) {
    return;
  }

  const spent10 = purchaseCost10;
  state.score10 -= spent10;
  state.perClick += upgrade.add;
  state.upgradesOwned += 1n;
  upgrade.owned += 1n;
  upgrade.cost = nextCostFromCost(upgrade.cost, upgrade);
  updateBulkSummary(`Bought 1 ${upgrade.name}.`);
  renderAll();
  saveGame();
}

function buyUpgradeMax(id) {
  const upgrade = state.upgrades.find((entry) => entry.id === id);
  if (!upgrade) {
    return;
  }

  const plan = simulateMaxPurchasePlan(upgrade, state.score10);
  if (!applyPurchasePlan(upgrade, plan)) {
    return;
  }

  updateBulkSummary(
    `Bought ${commaBigInt(plan.count)} ${upgrade.name}${plan.count === 1n ? "" : "s"} in one go${plan.capped ? " until the safety cap" : ""}.`
  );
  renderAll();
  saveGame();
}

function buyAllAffordable() {
  const ordered = [...state.upgrades].sort((left, right) => {
    const leftRatio = left.add * right.cost;
    const rightRatio = right.add * left.cost;
    if (leftRatio === rightRatio) {
      return left.cost < right.cost ? -1 : 1;
    }
    return leftRatio > rightRatio ? -1 : 1;
  });

  let purchasedTypes = 0;
  let purchasedTotal = 0n;

  for (const upgrade of ordered) {
    const plan = simulateMaxPurchasePlan(upgrade, state.score10);
    if (!applyPurchasePlan(upgrade, plan)) {
      continue;
    }

    purchasedTypes += 1;
    purchasedTotal += plan.count;
  }

  if (purchasedTotal === 0n) {
    updateBulkSummary("Nothing affordable yet. Keep clicking or wait for auto income.");
    refreshShop();
    return;
  }

  updateBulkSummary(`Buy All picked up ${commaBigInt(purchasedTotal)} upgrades across ${purchasedTypes} rows.`);
  renderAll();
  saveGame();
}

function createFloatText(text, x, y) {
  const floatEl = document.createElement("div");
  floatEl.className = "float-text";
  floatEl.textContent = text;
  floatEl.style.left = `${x}px`;
  floatEl.style.top = `${y}px`;
  floatingLayerEl.appendChild(floatEl);
  window.setTimeout(() => floatEl.remove(), 740);
}

function getButtonCenter() {
  const rect = clickBtnEl.getBoundingClientRect();
  return {
    x: rect.left + (rect.width / 2),
    y: rect.top + (rect.height / 2)
  };
}

function noteClickRate(now) {
  clickTimestamps.push(now);
  const cutoff = now - 4000;
  clickTimestamps = clickTimestamps.filter((time) => time >= cutoff);

  if (clickTimestamps.length > 140) {
    triggerTamperReset("Input rate was well above a believable human limit.");
    return false;
  }

  return true;
}

function runClickAnimation() {
  clickBtnEl.classList.add("is-pressed");
  window.setTimeout(() => clickBtnEl.classList.remove("is-pressed"), 110);
}

function handleTrustedClick(point) {
  if (!auditRuntimeState()) {
    return;
  }

  if (!noteClickRate(performance.now())) {
    return;
  }

  state.score10 += state.perClick * SCORE_STEP;
  createFloatText(`+${commaBigInt(state.perClick)}`, point.x, point.y);
  runClickAnimation();
  renderTopStats();
  renderProgress();
  refreshShop();
}

function onClickButton(event) {
  if (!event.isTrusted) {
    triggerTamperReset("Synthetic click events were blocked.");
    return;
  }

  handleTrustedClick({ x: event.clientX, y: event.clientY });
}

function isEditableTarget(target) {
  return target instanceof HTMLElement && (
    target.tagName === "INPUT" ||
    target.tagName === "SELECT" ||
    target.tagName === "TEXTAREA" ||
    target.isContentEditable
  );
}

function onKeydown(event) {
  if (!event.isTrusted || isEditableTarget(event.target)) {
    return;
  }

  if (event.code === "Space") {
    event.preventDefault();
    const center = getButtonCenter();
    handleTrustedClick(center);
    return;
  }

  if (event.code === "KeyB") {
    event.preventDefault();
    buyAllAffordable();
    return;
  }

  if (event.code === "KeyS") {
    event.preventDefault();
    state.safeMode = !state.safeMode;
    renderCloakSection();
    saveGame();
  }
}

function onCloakChange() {
  state.selectedCloak = cloakSelectEl.value;
  renderCloakSection();
  saveGame();
}

function onSafeModeChange() {
  state.safeMode = safeModeToggleEl.checked;
  renderCloakSection();
  saveGame();
}

function resetGame() {
  state = createFreshState();
  autoCarry = 0n;
  lastLevelRendered = -1;
  clearSave();
  renderAll();
}

function renderAll() {
  renderCloakSection();
  renderTopStats();
  renderProgress();
  if (!shopBuilt) {
    buildShop();
  } else {
    refreshShop();
  }
  buyAllSummaryEl.textContent = state.lastBulkSummary;
  setTamperStatus(state.tampered ? "Save reset after a tamper check." : "Client anti-tamper active", state.tampered);
}

function initAutoIncome() {
  window.setInterval(() => {
    if (!auditRuntimeState()) {
      return;
    }

    autoCarry += state.perClick;
    const addNow = autoCarry / AUTO_TICKS_PER_SEC;
    autoCarry %= AUTO_TICKS_PER_SEC;

    if (addNow > 0n) {
      state.score10 += addNow;
      renderTopStats();
      renderProgress();
      refreshShop();
    }
  }, 50);
}

function initSaveLoop() {
  window.setInterval(() => {
    saveTimer += 1;
    if (saveTimer >= 4) {
      saveGame();
      saveTimer = 0;
    }
  }, 500);
}

function initRuntimeAudit() {
  window.setInterval(() => {
    auditRuntimeState();
  }, 2500);
}

function initAntiAutomationCheck() {
  if (navigator.webdriver === true) {
    triggerTamperReset("Automation tooling was detected.");
  }
}

function bindEvents() {
  clickBtnEl.addEventListener("click", onClickButton);
  document.addEventListener("keydown", onKeydown);
  cloakSelectEl.addEventListener("change", onCloakChange);
  safeModeToggleEl.addEventListener("change", onSafeModeChange);
  buyAllBtnEl.addEventListener("click", buyAllAffordable);
  resetBtnEl.addEventListener("click", resetGame);
  tamperAcknowledgeBtnEl.addEventListener("click", () => {
    if (tamperOverlayEl) {
      tamperOverlayEl.hidden = true;
    }
  });
  window.addEventListener("beforeunload", saveGame);
}

populateCloakOptions();
loadGame();
renderAll();
bindEvents();
initAutoIncome();
initSaveLoop();
initRuntimeAudit();
initAntiAutomationCheck();
