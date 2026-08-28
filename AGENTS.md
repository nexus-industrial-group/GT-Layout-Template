# AGENTS.md

Este proyecto mantiene sus reglas de agente en **`CLAUDE.md`** (fuente de verdad única).

Si estás leyendo esto desde un agente que no es Claude Code, lee `CLAUDE.md` antes de
tocar cualquier archivo, y `spec.md` para la tarea actual.

@CLAUDE.md

---

## Resumen mínimo (por si no puedes seguir el import)

- **Proyecto:** prototipo de layout frontend, Next.js 16 + App Router + TypeScript, para
  landings de un despacho de abogados penalistas en Houston (Gary Tabakman, PLLC).
- **Alcance:** solo layout estático. Sin backend, sin lógica, sin estado, sin envío de
  formularios.
- **Estilos:** únicamente los design tokens de `globals.css`. Ningún color nuevo.
- **Contenido:** únicamente el guion en `context/`. Nada inventado — en especial resultados
  de casos, cifras o testimonios: es publicidad legal.
- **Estructura:** definida en `spec.md`. No alterarla.
- **Verificación:** `npm run lint`, `npx tsc --noEmit`, `npm run build` deben pasar antes
  de dar por terminada cualquier sección.

Reglas completas y no negociables: `CLAUDE.md`.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
