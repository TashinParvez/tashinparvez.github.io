import express from "express";
import cors from "cors";
import axios from "axios";
import * as cheerio from "cheerio";

const app = express();
app.use(cors());

const PORT = 3000;

const profiles = {
  codeforces: "Tashin.Parvez",
  codechef: "tashin_parvez",
  hackerrank: "tashinparvez",
  hackerearth: "tashinparvez2002",
  vjudge: "Tashin_Parvez",
  leetcode: "tashinParvez",
  atcoder: "Tashin_Parvez",
  beecrowd: "648820",
  lightoj: "tashinparvez",
  github: "TashinParvez"
};

function cleanNumber(text) {
  if (!text) return null;
  const m = String(text).replace(/,/g, "").match(/\d+/);
  return m ? Number(m[0]) : null;
}

async function fetchHtml(url, extraHeaders = {}) {
  const { data } = await axios.get(url, {
    timeout: 20000,
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/124 Safari/537.36",
      "Accept-Language": "en-US,en;q=0.9",
      ...extraHeaders
    }
  });
  return data;
}

async function getGitHubFollowers() {
  const url = `https://api.github.com/users/${profiles.github}`;
  const { data } = await axios.get(url, {
    timeout: 15000,
    headers: { "User-Agent": "stats-dashboard" }
  });
  return {
    value: data.followers ?? null,
    source: url
  };
}

async function getCodeforcesSolved() {
  const url = `https://codeforces.com/api/user.status?handle=${encodeURIComponent(
    profiles.codeforces
  )}`;
  const { data } = await axios.get(url, { timeout: 20000 });
  if (data.status !== "OK" || !Array.isArray(data.result)) {
    throw new Error("Codeforces API failed");
  }

  const solved = new Set(
    data.result
      .filter((x) => x.verdict === "OK" && x.problem)
      .map(
        (x) =>
          `${x.problem.contestId || ""}-${x.problem.index || ""}-${x.problem.name || ""}`
      )
  ).size;

  return { value: solved, source: url };
}

async function getCodeChefSolved() {
  const url = `https://www.codechef.com/users/${profiles.codechef}`;
  const html = await fetchHtml(url);
  const text = cheerio.load(html).text().replace(/\s+/g, " ");

  const patterns = [
    /Total Problems Solved[^0-9]*([0-9,]+)/i,
    /Problems Solved[^0-9]*([0-9,]+)/i
  ];

  for (const p of patterns) {
    const m = text.match(p);
    if (m) return { value: cleanNumber(m[1]), source: url };
  }

  throw new Error("CodeChef solved count not found");
}

async function getLeetCodeSolved() {
  const url = `https://leetcode.com/${profiles.leetcode}/`;
  const html = await fetchHtml(url);
  const text = cheerio.load(html).text().replace(/\s+/g, " ");

  const patterns = [
    /([0-9,]+)\s*solved/i,
    /Solved[^0-9]*([0-9,]+)/i
  ];

  for (const p of patterns) {
    const m = text.match(p);
    if (m) return { value: cleanNumber(m[1]), source: url };
  }

  throw new Error("LeetCode solved count not found");
}

async function getLightOJSolved() {
  const url = `https://lightoj.com/user/${profiles.lightoj}`;
  const html = await fetchHtml(url);
  const text = cheerio.load(html).text().replace(/\s+/g, " ");

  const patterns = [
    /Solved[^0-9]*([0-9,]+)/i,
    /Total Solved[^0-9]*([0-9,]+)/i
  ];

  for (const p of patterns) {
    const m = text.match(p);
    if (m) return { value: cleanNumber(m[1]), source: url };
  }

  throw new Error("LightOJ solved count not found");
}

async function getAtCoderSolved() {
  const url = `https://atcoder.jp/users/${profiles.atcoder}`;
  const html = await fetchHtml(url);
  const text = cheerio.load(html).text().replace(/\s+/g, " ");

  const patterns = [
    /Accepted Count[^0-9]*([0-9,]+)/i,
    /AC[^0-9]*([0-9,]+)/i
  ];

  for (const p of patterns) {
    const m = text.match(p);
    if (m) return { value: cleanNumber(m[1]), source: url };
  }

  throw new Error("AtCoder solved count not found");
}

async function getVJudgeSolved() {
  const url = `https://vjudge.net/user/${profiles.vjudge}`;
  const html = await fetchHtml(url);
  const text = cheerio.load(html).text().replace(/\s+/g, " ");

  const patterns = [
    /Solved[^0-9]*([0-9,]+)/i,
    /Accepted[^0-9]*([0-9,]+)/i
  ];

  for (const p of patterns) {
    const m = text.match(p);
    if (m) return { value: cleanNumber(m[1]), source: url };
  }

  throw new Error("VJudge solved count not found");
}

async function getHackerRankSolved() {
  const url = `https://www.hackerrank.com/profile/${profiles.hackerrank}`;
  const html = await fetchHtml(url);
  const text = cheerio.load(html).text().replace(/\s+/g, " ");

  const patterns = [
    /Solved[^0-9]*([0-9,]+)/i,
    /Problems Solved[^0-9]*([0-9,]+)/i,
    /stars.*?([0-9,]+)/i
  ];

  for (const p of patterns) {
    const m = text.match(p);
    if (m) return { value: cleanNumber(m[1]), source: url };
  }

  return { value: null, source: url, note: "Could not parse automatically" };
}

async function getHackerEarthSolved() {
  const url = `https://www.hackerearth.com/@${profiles.hackerearth}`;
  const html = await fetchHtml(url);
  const text = cheerio.load(html).text().replace(/\s+/g, " ");

  const patterns = [
    /Problems Solved[^0-9]*([0-9,]+)/i,
    /Solved[^0-9]*([0-9,]+)/i
  ];

  for (const p of patterns) {
    const m = text.match(p);
    if (m) return { value: cleanNumber(m[1]), source: url };
  }

  return { value: null, source: url, note: "Could not parse automatically" };
}

async function getBeecrowdSolved() {
  const url = `https://www.beecrowd.com.br/judge/en/profile/${profiles.beecrowd}`;
  const html = await fetchHtml(url);
  const text = cheerio.load(html).text().replace(/\s+/g, " ");

  const patterns = [
    /Solved[^0-9]*([0-9,]+)/i,
    /Problems Solved[^0-9]*([0-9,]+)/i
  ];

  for (const p of patterns) {
    const m = text.match(p);
    if (m) return { value: cleanNumber(m[1]), source: url };
  }

  return { value: null, source: url, note: "Could not parse automatically" };
}

app.get("/api/stats", async (_req, res) => {
  const jobs = {
    github: getGitHubFollowers,
    codeforces: getCodeforcesSolved,
    codechef: getCodeChefSolved,
    leetcode: getLeetCodeSolved,
    lightoj: getLightOJSolved,
    atcoder: getAtCoderSolved,
    vjudge: getVJudgeSolved,
    hackerrank: getHackerRankSolved,
    hackerearth: getHackerEarthSolved,
    beecrowd: getBeecrowdSolved
  };

  const entries = await Promise.all(
    Object.entries(jobs).map(async ([key, fn]) => {
      try {
        const data = await fn();
        return [key, { ok: true, ...data }];
      } catch (error) {
        return [key, { ok: false, value: null, error: error.message }];
      }
    })
  );

  res.json({
    updatedAt: new Date().toISOString(),
    profiles,
    stats: Object.fromEntries(entries)
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});