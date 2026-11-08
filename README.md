# TRE Ready — BPSC TRE 4.0

A guest-first practice frontend for BPSC TRE candidates.

## Run locally

```bash
npm install
npm run dev
```

## Deploy on Render

This repository includes `render.yaml` for a static site. In Render, create a **New → Blueprint** deployment, select this repository, and approve the service configuration. Render will run `npm ci && npm run build` and publish `dist`.

The current application is a frontend demonstration using locally stored progress and labelled sample questions. It does not claim that demo questions are verified PYQs.
