#!/usr/bin/env -S deno run --allow-net=:8080 --allow-env=PORT

const DEFAULT_PORT = 8080;
const envPort = Deno.env.get("PORT");
const port = envPort ? Number(envPort) : DEFAULT_PORT;

import { serve } from "https://deno.land/std@0.134.0/http/server.ts";

function handler(_req: Request): Response {
  return new Response("Hello, World ry!");
}

serve(handler, { port: port });
